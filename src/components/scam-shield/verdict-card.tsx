import { AlertTriangle, CheckCircle2, ShieldAlert, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AnalysisResult } from "@/lib/scam-detector";
import type { UiCopy } from "@/lib/ui-copy";
import { cn } from "@/lib/utils";

export function VerdictCard({ result, onListen, copy }: { result: AnalysisResult; onListen: () => void; copy: UiCopy }) {
  const tone =
    result.verdict === "danger"
      ? "bg-danger text-danger-foreground"
      : result.verdict === "warning"
      ? "bg-warning text-warning-foreground"
      : "bg-safe text-safe-foreground";

  const Icon =
    result.verdict === "danger" ? ShieldAlert : result.verdict === "warning" ? AlertTriangle : CheckCircle2;

  const triggered = result.findings.filter((f) => f.level !== "safe");
  const title = result.verdict === "danger" ? copy.dangerTitle : result.verdict === "warning" ? copy.warningTitle : copy.safeTitle;
  const message = result.verdict === "danger"
    ? copy.dangerMessage
    : result.verdict === "warning"
    ? copy.warningMessage
    : copy.safeMessage;

  return (
    <div className={cn("rounded-2xl p-6 shadow-sm", tone)} role="alert">
      <div className="text-center">
        <Icon className="mx-auto h-16 w-16" strokeWidth={2.25} />
        <p className="mt-3 text-sm font-bold opacity-80">{copy.safetyResult}</p>
        <h2 className="mt-1 text-3xl font-extrabold leading-tight">{title}</h2>
        <p className="mx-auto mt-2 max-w-sm text-base font-semibold leading-relaxed">{message}</p>
        <Button
          type="button"
          variant="secondary"
          className="mt-5 h-12 rounded-xl px-5 text-base"
          onClick={onListen}
        >
          <Volume2 className="h-5 w-5" /> {copy.listen}
        </Button>
      </div>

      <div className="mt-6 border-t border-current/20 pt-4">
        <p className="font-bold">{copy.why}</p>
        <p className="mt-1 text-sm opacity-90">{copy.safetyScore}: {result.score}/100 · {triggered.length} {copy.warningSigns}</p>
      </div>

      <ul className="mt-3 space-y-2">
        {result.findings.map((f, i) => (
          <li key={i} className="rounded-xl bg-background/15 px-3 py-3 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-background/20 px-2 py-1 font-mono text-[10px] uppercase">
                {f.ruleId}
              </span>
              {f.points > 0 && (
                <span className="rounded-md bg-background/20 px-2 py-1 font-mono text-[10px]">
                  +{f.points} pts
                </span>
              )}
              <p className="font-semibold">{f.label}</p>
            </div>
            <p className="mt-1 opacity-90">{f.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}