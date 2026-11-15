import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  QrCode,
  Link2,
  MessageSquareWarning,
  ImageIcon,
  Search,
  ClipboardPaste,
  Phone,
  ExternalLink
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { analyzeText, analyzeUpiLink, analyzeScanned, type AnalysisResult } from "@/lib/scam-detector";
import { speak, type Lang } from "@/lib/speech";
import { LANG_OPTIONS } from "@/lib/speech";
import { UI_COPY } from "@/lib/ui-copy";
import { VerdictCard } from "@/components/scam-shield/verdict-card";
import { QrScanner } from "@/components/scam-shield/qr-scanner";
import { ImageOcr } from "@/components/scam-shield/image-ocr";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAFENs — Scan QR, UPI and SMS for fraud" },
      { name: "description", content: "On-device fraud detection for QR codes, UPI links, suspicious messages and screenshots. No bank access. No permissions." },
      { property: "og:title", content: "SAFENs — On-device scam detection" },
      { property: "og:description", content: "Spot fake UPI stickers, lottery scams, fake bills and phishing links before you pay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("en-IN");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [tab, setTab] = useState("msg");

  const [upi, setUpi] = useState("");
  const [msg, setMsg] = useState("");
  const copy = UI_COPY[lang];

  // Pre-warm voices list (some browsers populate async)
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const announce = (r: AnalysisResult) => {
    setResult(r);
    speak(r.verdict, lang);
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-primary p-2.5 text-primary-foreground">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-extrabold text-primary">SAFENs</h1>
              <p className="text-xs text-muted-foreground">{copy.tagline}</p>
            </div>
          </div>
          <label className="sr-only" htmlFor="language">Language</label>
          <select id="language" value={lang} onChange={(event) => setLang(event.target.value as Lang)} className="h-11 max-w-36 rounded-xl border border-border bg-background px-3 text-sm font-bold text-foreground outline-none focus:ring-2 focus:ring-ring">
            {LANG_OPTIONS.map((option) => <option key={option.value} value={option.value}>{option.native}</option>)}
          </select>
        </div>
      </header>

      <main className="mx-auto max-w-2xl space-y-7 px-5 py-7">
        <div>
          <p className="text-sm font-bold text-primary">{copy.safetyCheck}</p>
          <h2 className="mt-1 text-3xl font-extrabold leading-tight">{copy.chooseTitle}</h2>
          <p className="mt-2 text-base text-muted-foreground">{copy.chooseHelp}</p>
        </div>
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-3 bg-transparent p-0 sm:grid-cols-4">
            <TabsTrigger value="msg" className="h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MessageSquareWarning className="h-8 w-8" /> {copy.messageTab}
            </TabsTrigger>
            <TabsTrigger value="img" className="h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <ImageIcon className="h-8 w-8" /> {copy.imageTab}
            </TabsTrigger>
            <TabsTrigger value="upi" className="h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Link2 className="h-8 w-8" /> {copy.upiTab}
            </TabsTrigger>
            <TabsTrigger value="qr" className="h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <QrCode className="h-8 w-8" /> {copy.qrTab}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="qr" className="mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm">
            <SectionTitle title={copy.qrTitle} subtitle={copy.qrHelp} />
            <QrScanner
              copy={copy}
              onResult={(text) => {
                setUpi(text);
                announce(analyzeScanned(text));
              }}
            />
          </TabsContent>

          <TabsContent value="upi" className="mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm">
            <SectionTitle title={copy.upiTitle} subtitle={copy.upiHelp} />
            <Textarea
              placeholder="upi://pay?pa=...&pn=...&am=...&cu=INR"
              value={upi}
              onChange={(e) => setUpi(e.target.value)}
              rows={3}
              className="min-h-28 rounded-xl bg-background font-mono text-base"
            />
            <Button
              size="lg"
              className="h-14 w-full rounded-xl text-lg"
              disabled={!upi.trim()}
              onClick={() => announce(analyzeUpiLink(upi.trim(), { mentionsPrize: /(prize|lottery|won|winner)/i.test(msg) }))}
            >
              <Search className="h-5 w-5" /> {copy.checkBeforePaying}
            </Button>
          </TabsContent>

          <TabsContent value="msg" className="mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm">
            <SectionTitle title={copy.messageTitle} subtitle={copy.messageHelp} />
            <Textarea
              placeholder={copy.messagePlaceholder}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={6}
              className="min-h-40 rounded-xl bg-background text-base"
            />
            <Button variant="outline" className="h-12 w-full rounded-xl text-base" onClick={async () => {
              const text = await navigator.clipboard.readText().catch(() => "");
              if (text) setMsg(text);
            }}>
              <ClipboardPaste className="h-5 w-5" /> {copy.paste}
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" onClick={() => setMsg(EXAMPLE_SCAM)}>
                {copy.scamSample}
              </Button>
              <Button variant="secondary" onClick={() => setMsg(EXAMPLE_SAFE)}>
                {copy.safeSample}
              </Button>
            </div>
            <Button size="lg" className="h-14 w-full rounded-xl text-lg" disabled={!msg.trim()} onClick={() => announce(analyzeText(msg))}>
              <Search className="h-5 w-5" /> {copy.checkNow}
            </Button>
          </TabsContent>

          <TabsContent value="img" className="mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm">
            <SectionTitle title={copy.imageTitle} subtitle={copy.imageHelp} />
            <ImageOcr
              copy={copy}
              onText={(text) => {
  setMsg(text);

  if (!text.trim()) {
    announce({
      verdict: "warning",
      score: 20,
      headline: "Image could not be verified",
      findings: [{
        level: "warning",
        label: "No readable content found",
        detail: "OCR could not extract text and no QR code was detected. This image cannot be verified.",
        ruleId: "IMG-NO-CONTENT",
        points: 20,
      }],
    });
    return;
  }

  announce(analyzeText(text));
}}
            />
            {msg && (
              <div className="rounded-xl border border-border bg-card p-3 text-xs">
                <p className="mb-1 font-semibold text-muted-foreground">{copy.wordsFound}</p>
                <p className="whitespace-pre-wrap text-foreground">{msg}</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {result && (
          <section className="space-y-3">
            <VerdictCard result={result} copy={copy} onListen={() => speak(result.verdict, lang)} />
            <div className="flex gap-2">
              <Button variant="outline" className="h-12 flex-1 rounded-xl text-base" onClick={() => setResult(null)}>
                {copy.checkAnother}
              </Button>
            </div>
          </section>
        )}

        
{/* CYBERCRIME REPORTING SECTION */}
<section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">

  <div className="text-center">
    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900">
      <ShieldCheck className="h-7 w-7" />
    </div>

    <h2 className="text-2xl font-extrabold text-red-700 dark:text-red-400">
      Report Cybercrime
    </h2>

    <p className="mt-2 text-sm text-muted-foreground">
      Victim of online fraud? Don't panic. Report it immediately
      through official Indian cybercrime services.
    </p>
  </div>

  <a
    href="tel:1930"
    className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-center font-bold text-white transition hover:bg-red-700"
  >
    <Phone className="h-5 w-5" />
    Call Cybercrime Helpline – 1930
  </a>

  <a
    href="https://cybercrime.gov.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center font-bold text-primary-foreground transition hover:opacity-90"
  >
    <ExternalLink className="h-5 w-5" />
    Report Cybercrime Online
  </a>

  <p className="text-center text-xs leading-relaxed text-muted-foreground">
    For financial fraud, call 1930 as soon as possible.
    Also submit your complaint through the official portal.
    Keep transaction IDs and relevant evidence ready.
  </p>

</section>

{/* PRIVACY SECTION */}
<section className="border-t border-border pt-5 text-center text-sm text-muted-foreground">
  <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-primary" />
  <p className="font-bold text-foreground">{copy.privateTitle}</p>
  <p className="mt-1">{copy.privateHelp}</p>
</section>

      </main>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="mt-1 text-base text-muted-foreground">{subtitle}</p>
    </div>
  );
}

const EXAMPLE_SCAM = `Congratulations! You have WON ₹25,00,000 in the KBC Lucky Draw lottery.
To claim your prize, urgently update your PIN at http://kbc-winner.bit.ly/claim or pay processing fee via:
upi://pay?pa=rahul12345@ybl&pn=KBC%20Government%20Office&am=4999&cu=INR
Reply with OTP immediately or your account will be BLOCKED.`;

const EXAMPLE_SAFE = `Hi! Your Amazon order #112-456 will arrive today between 4-6 PM.
Track it in the Amazon app. No action needed.`;
