// Pure scam-detection rules. No network, no permissions.

export type Verdict = "safe" | "warning" | "danger";

export interface Finding {
  level: Verdict;
  label: string;
  detail: string;
  ruleId: string;
  points: number;
}

export interface AnalysisResult {
  verdict: Verdict;
  score: number; // 0 safe → 100 danger
  headline: string;
  findings: Finding[];
}

// Scam keyword footprints (lowercased substrings)
const SCAM_KEYWORDS: { word: string; weight: number; reason: string }[] = [
  { word: "lottery", weight: 35, reason: "Lottery scams almost always fake" },
  { word: "won", weight: 15, reason: "Unexpected prize-winning language" },
  { word: "prize", weight: 25, reason: "Prize bait commonly used in scams" },
  { word: "winner", weight: 20, reason: "Unexpected winner notification" },
  { word: "lucky draw", weight: 30, reason: "Lucky-draw bait" },
  { word: "urgent", weight: 15, reason: "Urgency pressure tactic" },
  { word: "immediately", weight: 10, reason: "Urgency pressure tactic" },
  { word: "blocked", weight: 25, reason: "Fake account-block threat" },
  { word: "suspended", weight: 25, reason: "Fake suspension threat" },
  { word: "kyc", weight: 25, reason: "Fake KYC update is a top bank scam" },
  { word: "update pin", weight: 40, reason: "No bank ever asks to update PIN by link" },
  { word: "update your pin", weight: 40, reason: "No bank ever asks to update PIN by link" },
  { word: "verify your account", weight: 25, reason: "Classic phishing line" },
  { word: "click here", weight: 15, reason: "Generic phishing call-to-action" },
  { word: "claim your", weight: 25, reason: "Prize-claim bait" },
  { word: "electricity bill", weight: 20, reason: "Fake electricity disconnection scams are widespread" },
  { word: "disconnect", weight: 20, reason: "Fake disconnection threat" },
  { word: "otp", weight: 15, reason: "Never share OTP — flagged for review" },
  { word: "refund", weight: 15, reason: "Unsolicited refund is a common lure" },
  { word: "gift card", weight: 25, reason: "Gift-card payment requests are scams" },
  { word: "bitcoin", weight: 10, reason: "Crypto payment request — verify carefully" },
  { word: "anydesk", weight: 35, reason: "Remote-access apps used by scammers" },
  { word: "teamviewer", weight: 35, reason: "Remote-access apps used by scammers" },
  { word: "income tax refund", weight: 25, reason: "Tax-refund phishing is widespread" },
  { word: "processing fee", weight: 30, reason: "Asking a fee to release a prize/refund is a scam" },
  { word: "kbc", weight: 25, reason: "KBC lottery messages are a well-known scam" },
  { word: "reactivate", weight: 20, reason: "Fake reactivation threat used to phish credentials" },
  { word: "electricity will be disconnect", weight: 35, reason: "Classic fake-electricity-bill SMS" },
  { word: "bill is not updated", weight: 25, reason: "Fake electricity-bill scam wording" },
  { word: "parcel", weight: 15, reason: "Fake courier/parcel-held scams are common" },
  { word: "courier", weight: 10, reason: "Fake courier scams are common" },
  { word: "share otp", weight: 45, reason: "No one legitimate will ever ask for your OTP" },
  { word: "kyc expired", weight: 35, reason: "Fake KYC expiry warning" },
  { word: "kyc update", weight: 30, reason: "Suspicious KYC update request" },
  { word: "kyc pending", weight: 30, reason: "Fake KYC pending alert" },
  { word: "bank account blocked", weight: 40, reason: "Fake bank blocking threat" },
  { word: "account will be blocked", weight: 40, reason: "Account blocking threat" },
  { word: "account suspended", weight: 35, reason: "Suspicious account suspension" },
  { word: "debit card blocked", weight: 35, reason: "Fake debit card warning" },
  { word: "update pan card", weight: 30, reason: "Suspicious PAN update request" },
  { word: "bank details", weight: 10, reason: "Sensitive banking information requested" },
  { word: "net banking password", weight: 40, reason: "Password theft attempt" },
  { word: "share your otp", weight: 50, reason: "OTP theft attempt" },
  { word: "verify bank account", weight: 35, reason: "Bank phishing attempt" },

  // OTP AND UPI SCAMS
  { word: "share otp", weight: 50, reason: "OTP theft attempt" },
  { word: "send otp", weight: 45, reason: "OTP theft attempt" },
  { word: "tell me the otp", weight: 45, reason: "OTP theft attempt" },
  { word: "enter your pin", weight: 30, reason: "Suspicious PIN request" },
  { word: "upi collect request", weight: 45, reason: "Potential fraudulent payment request" },
  { word: "approve collect request", weight: 45, reason: "Potential UPI payment fraud" },
  { word: "receive money", weight: 10, reason: "Verify unexpected payment instructions" },
  { word: "scan qr to receive", weight: 35, reason: "QR payment deception" },
  { word: "cashback pending", weight: 25, reason: "Potential fake cashback offer" },

  // LOTTERY AND PRIZE SCAMS
  { word: "you have won", weight: 30, reason: "Unexpected prize notification" },
  { word: "congratulations winner", weight: 35, reason: "Fake winner notification" },
  { word: "lucky draw", weight: 35, reason: "Lottery scam pattern" },
  { word: "claim your prize", weight: 40, reason: "Prize claiming scam" },
  { word: "processing fee", weight: 35, reason: "Suspicious advance payment request" },
  { word: "lottery winner", weight: 40, reason: "Lottery scam pattern" },
  { word: "selected for prize", weight: 35, reason: "Unexpected prize bait" },
  { word: "kbc winner", weight: 40, reason: "Fake KBC lottery notification" },

  // ELECTRICITY SCAMS
  { word: "electricity disconnected", weight: 40, reason: "Fake electricity disconnection threat" },
  { word: "electricity will be disconnected", weight: 45, reason: "Fake electricity warning" },
  { word: "power supply disconnected", weight: 40, reason: "Fake power disconnection threat" },
  { word: "electricity bill pending", weight: 20, reason: "Potential fake bill warning" },
  { word: "pay electricity bill immediately", weight: 35, reason: "Urgent payment pressure" },
  { word: "contact electricity officer", weight: 30, reason: "Potential impersonation" },

  // COURIER AND PARCEL SCAMS
  { word: "parcel seized", weight: 40, reason: "Fake parcel seizure warning" },
  { word: "parcel detained", weight: 40, reason: "Courier impersonation pattern" },
  { word: "customs fee", weight: 25, reason: "Unexpected customs payment request" },
  { word: "delivery failed", weight: 10, reason: "Verify unexpected delivery notices" },
  { word: "update delivery address", weight: 20, reason: "Potential delivery phishing" },

  // JOB AND EMPLOYMENT SCAMS
  { word: "registration fee for job", weight: 40, reason: "Fake job registration fee" },
  { word: "pay joining fee", weight: 40, reason: "Suspicious job payment request" },
  { word: "work from home earn", weight: 20, reason: "Potential fake job offer" },
  { word: "guaranteed daily income", weight: 30, reason: "Unrealistic income promise" },
  { word: "no interview required", weight: 20, reason: "Potential fake job offer" },
  { word: "typing job", weight: 10, reason: "Verify unexpected online job offers" },

  // INVESTMENT SCAMS
  { word: "double your money", weight: 40, reason: "Unrealistic investment promise" },
  { word: "guaranteed returns", weight: 35, reason: "Unrealistic investment guarantee" },
  { word: "risk free investment", weight: 30, reason: "Suspicious investment promise" },
  { word: "crypto profit", weight: 20, reason: "Verify cryptocurrency investment claims" },
  { word: "limited investment offer", weight: 25, reason: "Investment pressure tactic" },

  // PHISHING AND PASSWORD THEFT
  { word: "click this link", weight: 20, reason: "Suspicious link instruction" },
  { word: "click here immediately", weight: 30, reason: "Urgent phishing instruction" },
  { word: "verify your password", weight: 40, reason: "Password phishing attempt" },
  { word: "share your password", weight: 50, reason: "Credential theft attempt" },
  { word: "download this application", weight: 15, reason: "Verify unexpected app downloads" },
  { word: "install anydesk", weight: 45, reason: "Remote access scam pattern" },
  { word: "screen sharing", weight: 20, reason: "Potential remote access fraud" },

  // GOVERNMENT AND SUBSIDY SCAMS
  { word: "free government money", weight: 35, reason: "Fake government benefit offer" },
  { word: "government subsidy", weight: 15, reason: "Verify unexpected subsidy claims" },
  { word: "pm scheme", weight: 15, reason: "Verify government scheme notification" },
  { word: "free laptop scheme", weight: 25, reason: "Potential fake government offer" },
  { word: "aadhaar update immediately", weight: 35, reason: "Suspicious Aadhaar update request" },

  // TELUGU-ENGLISH SCAM PHRASES
  { word: "mee account block", weight: 40, reason: "Fake account blocking warning" },
  { word: "otp cheppandi", weight: 50, reason: "OTP theft request in Telugu" },
  { word: "otp share cheyandi", weight: 50, reason: "OTP theft request in Telugu" },
  { word: "link click cheyandi", weight: 25, reason: "Suspicious link instruction" },
  { word: "dabbu geluchukunnaru", weight: 35, reason: "Fake prize notification in Telugu" },
  { word: "mee bank account", weight: 10, reason: "Verify banking message context" },
  { word: "current cut", weight: 25, reason: "Potential fake electricity warning" },
  { word: "phone switch off", weight: 10, reason: "Verify unexpected account warnings" },

];

// URL shorteners often used to hide phishing destinations
const SHORTENERS = ["bit.ly", "tinyurl.com", "t.co", "goo.gl", "rb.gy", "is.gd", "shorturl.at", "cutt.ly"];

// TLDs and host patterns that are almost never used by real Indian banks/merchants
const SUSPICIOUS_TLDS = [".xyz", ".top", ".click", ".loan", ".work", ".country", ".gq", ".tk", ".ml", ".cf", ".ru", ".cn", ".zip", ".mov"];
// Placeholder / example domains that should never appear in a real message
const PLACEHOLDER_HOSTS = ["example.com", "example.in", "example.org", "example.net", "test.com"];

// Trusted bank/upi handle suffixes (lowercased). Real merchant handles
// usually end with one of these PSP suffixes.
const KNOWN_PSP_SUFFIXES = [
  "okaxis", "okhdfcbank", "okicici", "oksbi", "ybl", "paytm", "apl",
  "axl", "ibl", "upi", "sbi", "hdfcbank", "icici", "axisbank", "kotak",
  "barodampay", "fbl",
];

// Suffixes that signal personal (P2P) accounts. Used to flag fake "merchant" stickers.
const PERSONAL_PSP_SUFFIXES = ["ybl", "paytm", "okaxis", "okhdfcbank", "okicici", "oksbi", "apl"];

function score2verdict(score: number): Verdict {
  if (score >= 50) return "danger";
  if (score >= 20) return "warning";
  return "safe";
}

export function analyzeText(input: string): AnalysisResult {
  const text = input.trim();
  const lower = text.toLowerCase();
  const findings: Finding[] = [];
  let score = 0;

  if (!text) {
    return { verdict: "safe", score: 0, headline: "Nothing to check yet", findings: [] };
  }

  // Keyword scan
  
  // Keyword scan
  const hits = new Set<string>();

  for (const k of SCAM_KEYWORDS) {
    const escapedWord = k.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const pattern = new RegExp(
      `(^|[^a-z0-9])${escapedWord}($|[^a-z0-9])`,
      "i"
    );

    if (pattern.test(lower) && !hits.has(k.word)) {
      hits.add(k.word);
      score += k.weight;

      findings.push({
        level: k.weight >= 25 ? "danger" : "warning",
        label: `Suspicious phrase: "${k.word}"`,
        detail: k.reason,
        ruleId: "TXT-KEYWORD",
        points: k.weight,
      });
    }
  }
 // URL extraction
  const urls = text.match(/https?:\/\/[^\s)]+|www\.[^\s)]+/gi) ?? [];
  for (const url of urls) {
    const host = url.replace(/^https?:\/\//i, "").split("/")[0].toLowerCase();
    if (SHORTENERS.some((s) => host.endsWith(s))) {
      score += 25;
      findings.push({
        level: "danger",
        label: `Shortened link: ${host}`,
        detail: "Hides the real destination. Treat as unverified.",
        ruleId: "URL-SHORTENER",
        points: 25,
      });
    }
    // Lookalike bank domains
    if (/(hdfc|sbi|icici|axis|paytm|phonepe|gpay)/i.test(host) &&
        !/\.(hdfcbank|sbi|icicibank|axisbank|paytm|phonepe|google)\.(com|in|co\.in)$/i.test(host)) {
      score += 35;
      findings.push({
        level: "danger",
        label: `Lookalike bank domain: ${host}`,
        detail: "This is NOT an official bank URL.",
        ruleId: "URL-LOOKALIKE-BANK",
        points: 35,
      });
    }
    // IP-only URLs
    if (/^\d+\.\d+\.\d+\.\d+/.test(host)) {
      score += 30;
      findings.push({
        level: "danger",
        label: `Raw IP address in link: ${host}`,
        detail: "Legitimate organisations never send raw IP links.",
        ruleId: "URL-RAW-IP",
        points: 30,
      });
    }
    // Suspicious TLD
    if (SUSPICIOUS_TLDS.some((t) => host.endsWith(t))) {
      score += 25;
      findings.push({
        level: "danger",
        label: `Suspicious top-level domain: ${host}`,
        detail: "This TLD is rarely used by real Indian banks or merchants.",
        ruleId: "URL-SUSPICIOUS-TLD",
        points: 25,
      });
    }
    // Placeholder / .example test domains
    if (PLACEHOLDER_HOSTS.includes(host) || /\.example$/i.test(host) || host.endsWith(".example.com")) {
      score += 40;
      findings.push({
        level: "danger",
        label: `Placeholder/test domain: ${host}`,
        detail: "Real messages never use 'example' / test domains.",
        ruleId: "URL-PLACEHOLDER",
        points: 40,
      });
    }
    // Punycode (used to spoof bank names with lookalike unicode)
    if (host.includes("xn--")) {
      score += 30;
      findings.push({
        level: "danger",
        label: `Punycode domain: ${host}`,
        detail: "Punycode is often used to spoof real bank names with lookalike letters.",
        ruleId: "URL-PUNYCODE",
        points: 30,
      });
    }
    // Credentials in URL (user@host)
    if (/^https?:\/\/[^/]+@/i.test(url)) {
      score += 30;
      findings.push({
        level: "danger",
        label: "Embedded credentials in link",
        detail: "An '@' before the host is a classic trick to hide the real destination.",
        ruleId: "URL-EMBEDDED-CREDS",
        points: 30,
      });
    }
    // Excessive subdomains pretending to be a bank
    if ((host.match(/\./g) ?? []).length >= 4 && /(bank|hdfc|sbi|icici|axis|paytm|phonepe|upi|gpay)/i.test(host)) {
      score += 20;
      findings.push({
        level: "warning",
        label: `Deeply nested subdomain: ${host}`,
        detail: "Real bank URLs are short — long subdomain chains usually hide phishing.",
        ruleId: "URL-DEEP-SUBDOMAIN",
        points: 20,
      });
    }
  }

  // UPI links inside text — pass surrounding prize context so pay-to-win is caught
  if (/upi:\/\//i.test(text)) {
    const mentionsPrize = /(prize|lottery|won|winner|lucky\s*draw|kbc|reward|gift)/i.test(text);
    const upi = analyzeUpiLink(text.match(/upi:\/\/[^\s)]+/i)![0], { mentionsPrize });
    score += upi.score;
    findings.push(...upi.findings);
  }

  // ALL CAPS shouting
  const upperRatio = (text.replace(/[^A-Z]/g, "").length) / Math.max(1, text.replace(/[^A-Za-z]/g, "").length);
  if (upperRatio > 0.6 && text.length > 25) {
    score += 10;
    findings.push({ level: "warning", label: "Excessive ALL-CAPS", detail: "Shouty tone is common in scam blasts.", ruleId: "TXT-ALL-CAPS", points: 10 });
  }

  score = Math.min(100, score);
  const verdict = score2verdict(score);
  const headline =
    verdict === "danger" ? "Likely SCAM — do not act"
    : verdict === "warning" ? "Suspicious — verify carefully"
    : "Looks clean";

  if (findings.length === 0) {
    findings.push({ level: "safe", label: "No scam footprints found", detail: "We did not detect known phishing patterns.", ruleId: "OK-NO-MATCH", points: 0 });
  }

  return { verdict, score, headline, findings };
}

export interface UpiParsed {
  pa?: string; // payee address
  pn?: string; // payee name
  am?: string; // amount
  cu?: string; // currency
  tn?: string; // note
  mc?: string; // merchant code
  mode?: string;
  tr?: string;
  action?: string; // 'pay' | 'collect' | 'mandate'
  raw: string;
}

export function parseUpiLink(link: string): UpiParsed | null {
  try {
    if (!/^upi:\/\//i.test(link)) return null;
    const u = new URL(link);
    const action = u.host || u.pathname.replace(/\//g, "") || "pay";
    const get = (k: string) => u.searchParams.get(k) ?? undefined;
    return {
      pa: get("pa"),
      pn: get("pn"),
      am: get("am"),
      cu: get("cu"),
      tn: get("tn"),
      mc: get("mc"),
      mode: get("mode"),
      tr: get("tr"),
      action: action.toLowerCase(),
      raw: link,
    };
  } catch {
    return null;
  }
}

export function analyzeUpiLink(link: string, context?: { mentionsPrize?: boolean }): AnalysisResult & { parsed: UpiParsed | null } {
  const findings: Finding[] = [];
  let score = 0;
  const parsed = parseUpiLink(link);

  if (!parsed) {
    return {
      verdict: "danger",
      score: 80,
      headline: "Not a valid UPI link",
      findings: [{ level: "danger", label: "Invalid UPI format", detail: "Real UPI links start with upi://pay?...", ruleId: "UPI-INVALID", points: 80 }],
      parsed: null,
    };
  }

  // Rule 1: mandate / collect requests
  if (parsed.action === "mandate" || parsed.action === "collect") {
    score += 60;
    findings.push({
      level: "danger",
      label: `Action is "${parsed.action}"`,
      detail: "Receiving money never needs a mandate or collect request. This is asking YOU to pay.",
      ruleId: "UPI-MANDATE-COLLECT",
      points: 60,
    });
  }

  // Rule 2: amount > 0 + prize context
  const amount = parseFloat(parsed.am ?? "");
  if (context?.mentionsPrize && amount > 0) {
    score += 60;
    findings.push({
      level: "danger",
      label: "Pay-to-win pattern",
      detail: "You should NEVER pay an amount to claim a prize.",
      ruleId: "UPI-PAY-TO-WIN",
      points: 60,
    });
  }

  // Rule 3: payee address shape
  if (!parsed.pa || !parsed.pa.includes("@")) {
    score += 50;
    findings.push({ level: "danger", label: "Missing payee VPA", detail: "Genuine UPI links always include a payee handle (pa).", ruleId: "UPI-MISSING-PA", points: 50 });
  } else {
    const suffix = parsed.pa.split("@")[1]?.toLowerCase() ?? "";
    if (!KNOWN_PSP_SUFFIXES.some((s) => suffix === s || suffix.endsWith("." + s) || suffix.endsWith(s))) {
      score += 25;
      findings.push({
        level: "warning",
        label: `Unknown PSP suffix: @${suffix}`,
        detail: "Verify the merchant — this is not a common PSP handle.",
        ruleId: "UPI-UNKNOWN-PSP",
        points: 25,
      });
    }

    // Rule 4: personal handle pretending to be a business / government
    const handleLooksPersonal =
      /\d{3,}/.test(parsed.pa.split("@")[0]) ||
      PERSONAL_PSP_SUFFIXES.includes(suffix);
    const nameClaimsBusiness =
      /(govt|government|office|store|shop|mart|hospital|electricity|tax|bank|bbmp|bescom|nic|pvt|ltd)/i.test(parsed.pn ?? "");
    if (handleLooksPersonal && nameClaimsBusiness) {
      score += 50;
      findings.push({
        level: "danger",
        label: "Personal handle masquerading as a business",
        detail: `Payee name "${parsed.pn}" looks official but the handle ${parsed.pa} is a personal/P2P style.`,
        ruleId: "UPI-PERSONAL-AS-BUSINESS",
        points: 50,
      });
    }
  }

  // Rule 5: merchant code (mc) presence — real merchants typically include it
  if (!parsed.mc && /(store|shop|mart|petrol|hospital|restaurant|cafe)/i.test(parsed.pn ?? "")) {
    score += 15;
    findings.push({
      level: "warning",
      label: "Missing merchant code (mc)",
      detail: "Real merchants usually include a merchant category code. Scammers often omit it.",
      ruleId: "UPI-MC-MISSING",
      points: 15,
    });
  }

  // Rule 5b: suspicious mc value — must be a 4-digit ISO 18245 category code.
  // Scammers sometimes copy `mc=` from a real sticker but fill garbage to look legit.
  if (parsed.mc && !/^\d{4}$/.test(parsed.mc)) {
    score += 25;
    findings.push({
      level: "danger",
      label: `Invalid merchant code: mc=${parsed.mc}`,
      detail: "Real merchant codes are 4 digits. A non-numeric mc is a forgery sign.",
      ruleId: "UPI-MC-SHAPE",
      points: 25,
    });
  }

  // Rule 5c: mc present on what is clearly a personal P2P handle.
  // Genuine merchants get mc assigned with a business handle (@hdfcbank, @okhdfcbank business, etc.).
  if (parsed.mc && parsed.pa) {
    const suffix = parsed.pa.split("@")[1]?.toLowerCase() ?? "";
    const localPart = parsed.pa.split("@")[0] ?? "";
    if (PERSONAL_PSP_SUFFIXES.includes(suffix) && /\d{3,}/.test(localPart)) {
      score += 30;
      findings.push({
        level: "danger",
        label: "Merchant code on a personal handle",
        detail: `mc=${parsed.mc} is set, but ${parsed.pa} looks like a personal account. Merchant codes belong to business VPAs.`,
        ruleId: "UPI-MC-ON-PERSONAL",
        points: 30,
      });
    }
  }

  // Currency sanity
  if (parsed.cu && parsed.cu.toUpperCase() !== "INR") {
    score += 20;
    findings.push({ level: "warning", label: `Currency: ${parsed.cu}`, detail: "UPI runs in INR — non-INR currency is unusual.", ruleId: "UPI-NON-INR", points: 20 });
  }

  // Rule 6: Never automatically declare an unverified UPI recipient safe
  if (score < 20) {
    score = 20;

    findings.push({
      level: "warning",
      label: "UPI recipient not verified",
      detail:
        "The UPI format looks valid, but SAFENs cannot verify the recipient's real identity or account ownership. Confirm the recipient independently before paying.",
      ruleId: "UPI-UNVERIFIED-RECIPIENT",
      points: 20,
    });
  }


  score = Math.min(100, score);
  const verdict = score2verdict(score);
  const headline =
    verdict === "danger" ? "FAKE UPI — do not pay"
    : verdict === "warning" ? "Verify before paying"
    : "UPI recipient not verified — check before paying";

  if (findings.length === 0) {
    findings.push({ level: "safe", label: "All UPI safety rules passed", detail: "Payee handle, action and merchant fields look normal.", ruleId: "UPI-OK", points: 0 });
  }

  return { verdict, score, headline, findings, parsed };
}

// Analyze any string scanned from a QR code: UPI links use UPI rules,
// regular URLs use the text scanner.

export function analyzeScanned(payload: string): AnalysisResult {
  const clean = payload.trim();

  if (!clean) {
    return {
      verdict: "warning",
      score: 20,
      headline: "QR content could not be verified",
      findings: [{
        level: "warning",
        label: "Empty QR content",
        detail: "No readable information was found.",
        ruleId: "QR-EMPTY",
        points: 20,
      }],
    };
  }

  // UPI payment QR
  if (/^upi:\/\//i.test(clean)) {
    return analyzeUpiLink(clean);
  }

  // Website QR or QR containing a website link
  if (/https?:\/\/|www\./i.test(clean)) {
    const result = analyzeText(clean);

    if (result.verdict !== "safe") {
      return result;
    }

    return {
      ...result,
      verdict: "warning",
      score: Math.max(result.score, 20),
      headline: "QR link not verified — check before opening",
      findings: [
        ...result.findings.filter(
          (f) => f.ruleId !== "OK-NO-MATCH"
        ),
        {
          level: "warning",
          label: "Unverified QR destination",
          detail:
            "The QR contains a website link. Its ownership and safety have not been verified. Do not enter passwords, OTPs or banking details.",
          ruleId: "QR-UNVERIFIED-URL",
          points: 20,
        },
      ],
    };
  }

  // Other QR content
  const result = analyzeText(clean);

  if (result.verdict === "safe") {
    return {
      ...result,
      verdict: "warning",
      score: 20,
      headline: "QR content needs verification",
      findings: [
        {
          level: "warning",
          label: "Unknown QR content",
          detail: "No known scam pattern was found, but the QR content has not been verified.",
          ruleId: "QR-UNKNOWN",
          points: 20,
        },
      ],
    };
  }

  return result;
}
