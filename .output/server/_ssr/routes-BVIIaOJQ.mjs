import { o as __toESM } from "../_runtime.mjs";
import { c as require_react, r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as CameraOff, a as Search, c as MessageSquareWarning, d as Image$1, f as ImageUp, g as Camera, h as CircleCheck, i as ShieldAlert, l as LoaderCircle, m as ClipboardPaste, n as TriangleAlert, o as QrCode, p as ExternalLink, r as ShieldCheck, s as Phone, t as Volume2, u as Link2 } from "../_libs/lucide-react.mjs";
import { i as TabsTrigger$1, n as TabsContent$1, r as TabsList$1, t as Tabs$1 } from "../_libs/radix-ui__react-tabs.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-BVIIaOJQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Tabs = Tabs$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsList$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsTrigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsContent$1.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var SCAM_KEYWORDS = [
	{
		word: "lottery",
		weight: 35,
		reason: "Lottery scams almost always fake"
	},
	{
		word: "won",
		weight: 15,
		reason: "Unexpected prize-winning language"
	},
	{
		word: "prize",
		weight: 25,
		reason: "Prize bait commonly used in scams"
	},
	{
		word: "winner",
		weight: 20,
		reason: "Unexpected winner notification"
	},
	{
		word: "lucky draw",
		weight: 30,
		reason: "Lucky-draw bait"
	},
	{
		word: "urgent",
		weight: 15,
		reason: "Urgency pressure tactic"
	},
	{
		word: "immediately",
		weight: 10,
		reason: "Urgency pressure tactic"
	},
	{
		word: "blocked",
		weight: 25,
		reason: "Fake account-block threat"
	},
	{
		word: "suspended",
		weight: 25,
		reason: "Fake suspension threat"
	},
	{
		word: "kyc",
		weight: 25,
		reason: "Fake KYC update is a top bank scam"
	},
	{
		word: "update pin",
		weight: 40,
		reason: "No bank ever asks to update PIN by link"
	},
	{
		word: "update your pin",
		weight: 40,
		reason: "No bank ever asks to update PIN by link"
	},
	{
		word: "verify your account",
		weight: 25,
		reason: "Classic phishing line"
	},
	{
		word: "click here",
		weight: 15,
		reason: "Generic phishing call-to-action"
	},
	{
		word: "claim your",
		weight: 25,
		reason: "Prize-claim bait"
	},
	{
		word: "electricity bill",
		weight: 20,
		reason: "Fake electricity disconnection scams are widespread"
	},
	{
		word: "disconnect",
		weight: 20,
		reason: "Fake disconnection threat"
	},
	{
		word: "otp",
		weight: 15,
		reason: "Never share OTP — flagged for review"
	},
	{
		word: "refund",
		weight: 15,
		reason: "Unsolicited refund is a common lure"
	},
	{
		word: "gift card",
		weight: 25,
		reason: "Gift-card payment requests are scams"
	},
	{
		word: "bitcoin",
		weight: 10,
		reason: "Crypto payment request — verify carefully"
	},
	{
		word: "anydesk",
		weight: 35,
		reason: "Remote-access apps used by scammers"
	},
	{
		word: "teamviewer",
		weight: 35,
		reason: "Remote-access apps used by scammers"
	},
	{
		word: "income tax refund",
		weight: 25,
		reason: "Tax-refund phishing is widespread"
	},
	{
		word: "processing fee",
		weight: 30,
		reason: "Asking a fee to release a prize/refund is a scam"
	},
	{
		word: "kbc",
		weight: 25,
		reason: "KBC lottery messages are a well-known scam"
	},
	{
		word: "reactivate",
		weight: 20,
		reason: "Fake reactivation threat used to phish credentials"
	},
	{
		word: "electricity will be disconnect",
		weight: 35,
		reason: "Classic fake-electricity-bill SMS"
	},
	{
		word: "bill is not updated",
		weight: 25,
		reason: "Fake electricity-bill scam wording"
	},
	{
		word: "parcel",
		weight: 15,
		reason: "Fake courier/parcel-held scams are common"
	},
	{
		word: "courier",
		weight: 10,
		reason: "Fake courier scams are common"
	},
	{
		word: "share otp",
		weight: 45,
		reason: "No one legitimate will ever ask for your OTP"
	},
	{
		word: "kyc expired",
		weight: 35,
		reason: "Fake KYC expiry warning"
	},
	{
		word: "kyc update",
		weight: 30,
		reason: "Suspicious KYC update request"
	},
	{
		word: "kyc pending",
		weight: 30,
		reason: "Fake KYC pending alert"
	},
	{
		word: "bank account blocked",
		weight: 40,
		reason: "Fake bank blocking threat"
	},
	{
		word: "account will be blocked",
		weight: 40,
		reason: "Account blocking threat"
	},
	{
		word: "account suspended",
		weight: 35,
		reason: "Suspicious account suspension"
	},
	{
		word: "debit card blocked",
		weight: 35,
		reason: "Fake debit card warning"
	},
	{
		word: "update pan card",
		weight: 30,
		reason: "Suspicious PAN update request"
	},
	{
		word: "bank details",
		weight: 10,
		reason: "Sensitive banking information requested"
	},
	{
		word: "net banking password",
		weight: 40,
		reason: "Password theft attempt"
	},
	{
		word: "share your otp",
		weight: 50,
		reason: "OTP theft attempt"
	},
	{
		word: "verify bank account",
		weight: 35,
		reason: "Bank phishing attempt"
	},
	{
		word: "share otp",
		weight: 50,
		reason: "OTP theft attempt"
	},
	{
		word: "send otp",
		weight: 45,
		reason: "OTP theft attempt"
	},
	{
		word: "tell me the otp",
		weight: 45,
		reason: "OTP theft attempt"
	},
	{
		word: "enter your pin",
		weight: 30,
		reason: "Suspicious PIN request"
	},
	{
		word: "upi collect request",
		weight: 45,
		reason: "Potential fraudulent payment request"
	},
	{
		word: "approve collect request",
		weight: 45,
		reason: "Potential UPI payment fraud"
	},
	{
		word: "receive money",
		weight: 10,
		reason: "Verify unexpected payment instructions"
	},
	{
		word: "scan qr to receive",
		weight: 35,
		reason: "QR payment deception"
	},
	{
		word: "cashback pending",
		weight: 25,
		reason: "Potential fake cashback offer"
	},
	{
		word: "you have won",
		weight: 30,
		reason: "Unexpected prize notification"
	},
	{
		word: "congratulations winner",
		weight: 35,
		reason: "Fake winner notification"
	},
	{
		word: "lucky draw",
		weight: 35,
		reason: "Lottery scam pattern"
	},
	{
		word: "claim your prize",
		weight: 40,
		reason: "Prize claiming scam"
	},
	{
		word: "processing fee",
		weight: 35,
		reason: "Suspicious advance payment request"
	},
	{
		word: "lottery winner",
		weight: 40,
		reason: "Lottery scam pattern"
	},
	{
		word: "selected for prize",
		weight: 35,
		reason: "Unexpected prize bait"
	},
	{
		word: "kbc winner",
		weight: 40,
		reason: "Fake KBC lottery notification"
	},
	{
		word: "electricity disconnected",
		weight: 40,
		reason: "Fake electricity disconnection threat"
	},
	{
		word: "electricity will be disconnected",
		weight: 45,
		reason: "Fake electricity warning"
	},
	{
		word: "power supply disconnected",
		weight: 40,
		reason: "Fake power disconnection threat"
	},
	{
		word: "electricity bill pending",
		weight: 20,
		reason: "Potential fake bill warning"
	},
	{
		word: "pay electricity bill immediately",
		weight: 35,
		reason: "Urgent payment pressure"
	},
	{
		word: "contact electricity officer",
		weight: 30,
		reason: "Potential impersonation"
	},
	{
		word: "parcel seized",
		weight: 40,
		reason: "Fake parcel seizure warning"
	},
	{
		word: "parcel detained",
		weight: 40,
		reason: "Courier impersonation pattern"
	},
	{
		word: "customs fee",
		weight: 25,
		reason: "Unexpected customs payment request"
	},
	{
		word: "delivery failed",
		weight: 10,
		reason: "Verify unexpected delivery notices"
	},
	{
		word: "update delivery address",
		weight: 20,
		reason: "Potential delivery phishing"
	},
	{
		word: "registration fee for job",
		weight: 40,
		reason: "Fake job registration fee"
	},
	{
		word: "pay joining fee",
		weight: 40,
		reason: "Suspicious job payment request"
	},
	{
		word: "work from home earn",
		weight: 20,
		reason: "Potential fake job offer"
	},
	{
		word: "guaranteed daily income",
		weight: 30,
		reason: "Unrealistic income promise"
	},
	{
		word: "no interview required",
		weight: 20,
		reason: "Potential fake job offer"
	},
	{
		word: "typing job",
		weight: 10,
		reason: "Verify unexpected online job offers"
	},
	{
		word: "double your money",
		weight: 40,
		reason: "Unrealistic investment promise"
	},
	{
		word: "guaranteed returns",
		weight: 35,
		reason: "Unrealistic investment guarantee"
	},
	{
		word: "risk free investment",
		weight: 30,
		reason: "Suspicious investment promise"
	},
	{
		word: "crypto profit",
		weight: 20,
		reason: "Verify cryptocurrency investment claims"
	},
	{
		word: "limited investment offer",
		weight: 25,
		reason: "Investment pressure tactic"
	},
	{
		word: "click this link",
		weight: 20,
		reason: "Suspicious link instruction"
	},
	{
		word: "click here immediately",
		weight: 30,
		reason: "Urgent phishing instruction"
	},
	{
		word: "verify your password",
		weight: 40,
		reason: "Password phishing attempt"
	},
	{
		word: "share your password",
		weight: 50,
		reason: "Credential theft attempt"
	},
	{
		word: "download this application",
		weight: 15,
		reason: "Verify unexpected app downloads"
	},
	{
		word: "install anydesk",
		weight: 45,
		reason: "Remote access scam pattern"
	},
	{
		word: "screen sharing",
		weight: 20,
		reason: "Potential remote access fraud"
	},
	{
		word: "free government money",
		weight: 35,
		reason: "Fake government benefit offer"
	},
	{
		word: "government subsidy",
		weight: 15,
		reason: "Verify unexpected subsidy claims"
	},
	{
		word: "pm scheme",
		weight: 15,
		reason: "Verify government scheme notification"
	},
	{
		word: "free laptop scheme",
		weight: 25,
		reason: "Potential fake government offer"
	},
	{
		word: "aadhaar update immediately",
		weight: 35,
		reason: "Suspicious Aadhaar update request"
	},
	{
		word: "mee account block",
		weight: 40,
		reason: "Fake account blocking warning"
	},
	{
		word: "otp cheppandi",
		weight: 50,
		reason: "OTP theft request in Telugu"
	},
	{
		word: "otp share cheyandi",
		weight: 50,
		reason: "OTP theft request in Telugu"
	},
	{
		word: "link click cheyandi",
		weight: 25,
		reason: "Suspicious link instruction"
	},
	{
		word: "dabbu geluchukunnaru",
		weight: 35,
		reason: "Fake prize notification in Telugu"
	},
	{
		word: "mee bank account",
		weight: 10,
		reason: "Verify banking message context"
	},
	{
		word: "current cut",
		weight: 25,
		reason: "Potential fake electricity warning"
	},
	{
		word: "phone switch off",
		weight: 10,
		reason: "Verify unexpected account warnings"
	}
];
var SHORTENERS = [
	"bit.ly",
	"tinyurl.com",
	"t.co",
	"goo.gl",
	"rb.gy",
	"is.gd",
	"shorturl.at",
	"cutt.ly"
];
var SUSPICIOUS_TLDS = [
	".xyz",
	".top",
	".click",
	".loan",
	".work",
	".country",
	".gq",
	".tk",
	".ml",
	".cf",
	".ru",
	".cn",
	".zip",
	".mov"
];
var PLACEHOLDER_HOSTS = [
	"example.com",
	"example.in",
	"example.org",
	"example.net",
	"test.com"
];
var KNOWN_PSP_SUFFIXES = [
	"okaxis",
	"okhdfcbank",
	"okicici",
	"oksbi",
	"ybl",
	"paytm",
	"apl",
	"axl",
	"ibl",
	"upi",
	"sbi",
	"hdfcbank",
	"icici",
	"axisbank",
	"kotak",
	"barodampay",
	"fbl"
];
var PERSONAL_PSP_SUFFIXES = [
	"ybl",
	"paytm",
	"okaxis",
	"okhdfcbank",
	"okicici",
	"oksbi",
	"apl"
];
function score2verdict(score) {
	if (score >= 50) return "danger";
	if (score >= 20) return "warning";
	return "safe";
}
function analyzeText(input) {
	const text = input.trim();
	const lower = text.toLowerCase();
	const findings = [];
	let score = 0;
	if (!text) return {
		verdict: "safe",
		score: 0,
		headline: "Nothing to check yet",
		findings: []
	};
	const hits = /* @__PURE__ */ new Set();
	for (const k of SCAM_KEYWORDS) {
		const escapedWord = k.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		if (new RegExp(`(^|[^a-z0-9])${escapedWord}($|[^a-z0-9])`, "i").test(lower) && !hits.has(k.word)) {
			hits.add(k.word);
			score += k.weight;
			findings.push({
				level: k.weight >= 25 ? "danger" : "warning",
				label: `Suspicious phrase: "${k.word}"`,
				detail: k.reason,
				ruleId: "TXT-KEYWORD",
				points: k.weight
			});
		}
	}
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
				points: 25
			});
		}
		if (/(hdfc|sbi|icici|axis|paytm|phonepe|gpay)/i.test(host) && !/\.(hdfcbank|sbi|icicibank|axisbank|paytm|phonepe|google)\.(com|in|co\.in)$/i.test(host)) {
			score += 35;
			findings.push({
				level: "danger",
				label: `Lookalike bank domain: ${host}`,
				detail: "This is NOT an official bank URL.",
				ruleId: "URL-LOOKALIKE-BANK",
				points: 35
			});
		}
		if (/^\d+\.\d+\.\d+\.\d+/.test(host)) {
			score += 30;
			findings.push({
				level: "danger",
				label: `Raw IP address in link: ${host}`,
				detail: "Legitimate organisations never send raw IP links.",
				ruleId: "URL-RAW-IP",
				points: 30
			});
		}
		if (SUSPICIOUS_TLDS.some((t) => host.endsWith(t))) {
			score += 25;
			findings.push({
				level: "danger",
				label: `Suspicious top-level domain: ${host}`,
				detail: "This TLD is rarely used by real Indian banks or merchants.",
				ruleId: "URL-SUSPICIOUS-TLD",
				points: 25
			});
		}
		if (PLACEHOLDER_HOSTS.includes(host) || /\.example$/i.test(host) || host.endsWith(".example.com")) {
			score += 40;
			findings.push({
				level: "danger",
				label: `Placeholder/test domain: ${host}`,
				detail: "Real messages never use 'example' / test domains.",
				ruleId: "URL-PLACEHOLDER",
				points: 40
			});
		}
		if (host.includes("xn--")) {
			score += 30;
			findings.push({
				level: "danger",
				label: `Punycode domain: ${host}`,
				detail: "Punycode is often used to spoof real bank names with lookalike letters.",
				ruleId: "URL-PUNYCODE",
				points: 30
			});
		}
		if (/^https?:\/\/[^/]+@/i.test(url)) {
			score += 30;
			findings.push({
				level: "danger",
				label: "Embedded credentials in link",
				detail: "An '@' before the host is a classic trick to hide the real destination.",
				ruleId: "URL-EMBEDDED-CREDS",
				points: 30
			});
		}
		if ((host.match(/\./g) ?? []).length >= 4 && /(bank|hdfc|sbi|icici|axis|paytm|phonepe|upi|gpay)/i.test(host)) {
			score += 20;
			findings.push({
				level: "warning",
				label: `Deeply nested subdomain: ${host}`,
				detail: "Real bank URLs are short — long subdomain chains usually hide phishing.",
				ruleId: "URL-DEEP-SUBDOMAIN",
				points: 20
			});
		}
	}
	if (/upi:\/\//i.test(text)) {
		const mentionsPrize = /(prize|lottery|won|winner|lucky\s*draw|kbc|reward|gift)/i.test(text);
		const upi = analyzeUpiLink(text.match(/upi:\/\/[^\s)]+/i)[0], { mentionsPrize });
		score += upi.score;
		findings.push(...upi.findings);
	}
	if (text.replace(/[^A-Z]/g, "").length / Math.max(1, text.replace(/[^A-Za-z]/g, "").length) > .6 && text.length > 25) {
		score += 10;
		findings.push({
			level: "warning",
			label: "Excessive ALL-CAPS",
			detail: "Shouty tone is common in scam blasts.",
			ruleId: "TXT-ALL-CAPS",
			points: 10
		});
	}
	score = Math.min(100, score);
	const verdict = score2verdict(score);
	const headline = verdict === "danger" ? "Likely SCAM — do not act" : verdict === "warning" ? "Suspicious — verify carefully" : "Looks clean";
	if (findings.length === 0) findings.push({
		level: "safe",
		label: "No scam footprints found",
		detail: "We did not detect known phishing patterns.",
		ruleId: "OK-NO-MATCH",
		points: 0
	});
	return {
		verdict,
		score,
		headline,
		findings
	};
}
function parseUpiLink(link) {
	try {
		if (!/^upi:\/\//i.test(link)) return null;
		const u = new URL(link);
		const action = u.host || u.pathname.replace(/\//g, "") || "pay";
		const get = (k) => u.searchParams.get(k) ?? void 0;
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
			raw: link
		};
	} catch {
		return null;
	}
}
function analyzeUpiLink(link, context) {
	const findings = [];
	let score = 0;
	const parsed = parseUpiLink(link);
	if (!parsed) return {
		verdict: "danger",
		score: 80,
		headline: "Not a valid UPI link",
		findings: [{
			level: "danger",
			label: "Invalid UPI format",
			detail: "Real UPI links start with upi://pay?...",
			ruleId: "UPI-INVALID",
			points: 80
		}],
		parsed: null
	};
	if (parsed.action === "mandate" || parsed.action === "collect") {
		score += 60;
		findings.push({
			level: "danger",
			label: `Action is "${parsed.action}"`,
			detail: "Receiving money never needs a mandate or collect request. This is asking YOU to pay.",
			ruleId: "UPI-MANDATE-COLLECT",
			points: 60
		});
	}
	const amount = parseFloat(parsed.am ?? "");
	if (context?.mentionsPrize && amount > 0) {
		score += 60;
		findings.push({
			level: "danger",
			label: "Pay-to-win pattern",
			detail: "You should NEVER pay an amount to claim a prize.",
			ruleId: "UPI-PAY-TO-WIN",
			points: 60
		});
	}
	if (!parsed.pa || !parsed.pa.includes("@")) {
		score += 50;
		findings.push({
			level: "danger",
			label: "Missing payee VPA",
			detail: "Genuine UPI links always include a payee handle (pa).",
			ruleId: "UPI-MISSING-PA",
			points: 50
		});
	} else {
		const suffix = parsed.pa.split("@")[1]?.toLowerCase() ?? "";
		if (!KNOWN_PSP_SUFFIXES.some((s) => suffix === s || suffix.endsWith("." + s) || suffix.endsWith(s))) {
			score += 25;
			findings.push({
				level: "warning",
				label: `Unknown PSP suffix: @${suffix}`,
				detail: "Verify the merchant — this is not a common PSP handle.",
				ruleId: "UPI-UNKNOWN-PSP",
				points: 25
			});
		}
		const handleLooksPersonal = /\d{3,}/.test(parsed.pa.split("@")[0]) || PERSONAL_PSP_SUFFIXES.includes(suffix);
		const nameClaimsBusiness = /(govt|government|office|store|shop|mart|hospital|electricity|tax|bank|bbmp|bescom|nic|pvt|ltd)/i.test(parsed.pn ?? "");
		if (handleLooksPersonal && nameClaimsBusiness) {
			score += 50;
			findings.push({
				level: "danger",
				label: "Personal handle masquerading as a business",
				detail: `Payee name "${parsed.pn}" looks official but the handle ${parsed.pa} is a personal/P2P style.`,
				ruleId: "UPI-PERSONAL-AS-BUSINESS",
				points: 50
			});
		}
	}
	if (!parsed.mc && /(store|shop|mart|petrol|hospital|restaurant|cafe)/i.test(parsed.pn ?? "")) {
		score += 15;
		findings.push({
			level: "warning",
			label: "Missing merchant code (mc)",
			detail: "Real merchants usually include a merchant category code. Scammers often omit it.",
			ruleId: "UPI-MC-MISSING",
			points: 15
		});
	}
	if (parsed.mc && !/^\d{4}$/.test(parsed.mc)) {
		score += 25;
		findings.push({
			level: "danger",
			label: `Invalid merchant code: mc=${parsed.mc}`,
			detail: "Real merchant codes are 4 digits. A non-numeric mc is a forgery sign.",
			ruleId: "UPI-MC-SHAPE",
			points: 25
		});
	}
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
				points: 30
			});
		}
	}
	if (parsed.cu && parsed.cu.toUpperCase() !== "INR") {
		score += 20;
		findings.push({
			level: "warning",
			label: `Currency: ${parsed.cu}`,
			detail: "UPI runs in INR — non-INR currency is unusual.",
			ruleId: "UPI-NON-INR",
			points: 20
		});
	}
	if (score < 20) {
		score = 20;
		findings.push({
			level: "warning",
			label: "UPI recipient not verified",
			detail: "The UPI format looks valid, but SAFENs cannot verify the recipient's real identity or account ownership. Confirm the recipient independently before paying.",
			ruleId: "UPI-UNVERIFIED-RECIPIENT",
			points: 20
		});
	}
	score = Math.min(100, score);
	const verdict = score2verdict(score);
	const headline = verdict === "danger" ? "FAKE UPI — do not pay" : verdict === "warning" ? "Verify before paying" : "UPI recipient not verified — check before paying";
	if (findings.length === 0) findings.push({
		level: "safe",
		label: "All UPI safety rules passed",
		detail: "Payee handle, action and merchant fields look normal.",
		ruleId: "UPI-OK",
		points: 0
	});
	return {
		verdict,
		score,
		headline,
		findings,
		parsed
	};
}
function analyzeScanned(payload) {
	const clean = payload.trim();
	if (!clean) return {
		verdict: "warning",
		score: 20,
		headline: "QR content could not be verified",
		findings: [{
			level: "warning",
			label: "Empty QR content",
			detail: "No readable information was found.",
			ruleId: "QR-EMPTY",
			points: 20
		}]
	};
	if (/^upi:\/\//i.test(clean)) return analyzeUpiLink(clean);
	if (/https?:\/\/|www\./i.test(clean)) {
		const result = analyzeText(clean);
		if (result.verdict !== "safe") return result;
		return {
			...result,
			verdict: "warning",
			score: Math.max(result.score, 20),
			headline: "QR link not verified — check before opening",
			findings: [...result.findings.filter((f) => f.ruleId !== "OK-NO-MATCH"), {
				level: "warning",
				label: "Unverified QR destination",
				detail: "The QR contains a website link. Its ownership and safety have not been verified. Do not enter passwords, OTPs or banking details.",
				ruleId: "QR-UNVERIFIED-URL",
				points: 20
			}]
		};
	}
	const result = analyzeText(clean);
	if (result.verdict === "safe") return {
		...result,
		verdict: "warning",
		score: 20,
		headline: "QR content needs verification",
		findings: [{
			level: "warning",
			label: "Unknown QR content",
			detail: "No known scam pattern was found, but the QR content has not been verified.",
			ruleId: "QR-UNKNOWN",
			points: 20
		}]
	};
	return result;
}
var LANG_OPTIONS = [
	{
		value: "en-IN",
		label: "English",
		native: "English"
	},
	{
		value: "hi-IN",
		label: "Hindi",
		native: "हिन्दी"
	},
	{
		value: "ta-IN",
		label: "Tamil",
		native: "தமிழ்"
	},
	{
		value: "te-IN",
		label: "Telugu",
		native: "తెలుగు"
	},
	{
		value: "bn-IN",
		label: "Bengali",
		native: "বাংলা"
	},
	{
		value: "mr-IN",
		label: "Marathi",
		native: "मराठी"
	},
	{
		value: "kn-IN",
		label: "Kannada",
		native: "ಕನ್ನಡ"
	},
	{
		value: "gu-IN",
		label: "Gujarati",
		native: "ગુજરાતી"
	},
	{
		value: "ml-IN",
		label: "Malayalam",
		native: "മലയാളം"
	}
];
var WARNINGS = {
	"en-IN": {
		safe: "This looks safe.",
		warning: "Caution. Verify before you act.",
		danger: "Danger. This looks like a scam. Do not pay or click."
	},
	"hi-IN": {
		safe: "यह सुरक्षित लगता है।",
		warning: "सावधान। कार्रवाई करने से पहले जाँच करें।",
		danger: "ख़तरा! यह धोखाधड़ी लगती है। पैसे न भेजें और लिंक पर क्लिक न करें।"
	},
	"ta-IN": {
		safe: "இது பாதுகாப்பாக தெரிகிறது.",
		warning: "எச்சரிக்கை. செயல்படுவதற்கு முன் சரிபார்க்கவும்.",
		danger: "ஆபத்து! இது மோசடியாக தெரிகிறது. பணம் அனுப்பவோ கிளிக் செய்யவோ வேண்டாம்."
	},
	"te-IN": {
		safe: "ఇది సురక్షితంగా ఉంది.",
		warning: "జాగ్రత్త. చర్య తీసుకునే ముందు ధృవీకరించండి.",
		danger: "ప్రమాదం! ఇది మోసం వలె ఉంది. డబ్బు పంపవద్దు, లింక్‌ను నొక్కవద్దు."
	},
	"bn-IN": {
		safe: "এটি নিরাপদ মনে হচ্ছে।",
		warning: "সতর্ক থাকুন। কাজ করার আগে যাচাই করুন।",
		danger: "বিপদ! এটি প্রতারণা মনে হচ্ছে। টাকা পাঠাবেন না বা লিঙ্কে ক্লিক করবেন না।"
	},
	"mr-IN": {
		safe: "हे सुरक्षित दिसते.",
		warning: "सावध रहा. कृती करण्यापूर्वी पडताळणी करा.",
		danger: "धोका! ही फसवणूक दिसते. पैसे पाठवू नका किंवा लिंकवर क्लिक करू नका."
	},
	"kn-IN": {
		safe: "ಇದು ಸುರಕ್ಷಿತವಾಗಿದೆ.",
		warning: "ಎಚ್ಚರಿಕೆ. ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ.",
		danger: "ಅಪಾಯ! ಇದು ವಂಚನೆಯಂತೆ ಕಾಣುತ್ತದೆ. ಹಣ ಕಳುಹಿಸಬೇಡಿ ಅಥವಾ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ."
	},
	"gu-IN": {
		safe: "આ સુરક્ષિત લાગે છે.",
		warning: "સાવચેત રહો. ક્રિયા કરતા પહેલા ચકાસો.",
		danger: "ભય! આ છેતરપિંડી લાગે છે. પૈસા મોકલશો નહીં અથવા લિંક પર ક્લિક કરશો નહીં."
	},
	"ml-IN": {
		safe: "ഇത് സുരക്ഷിതമാണ്.",
		warning: "ജാഗ്രത പുലർത്തുക. പ്രവർത്തിക്കുന്നതിന് മുമ്പ് പരിശോധിക്കുക.",
		danger: "അപകടം! ഇത് തട്ടിപ്പ് പോലെ തോന്നുന്നു. പണം അയയ്ക്കരുത് അല്ലെങ്കിൽ ലിങ്ക് ക്ലിക്ക് ചെയ്യരുത്."
	}
};
function speak(verdict, lang) {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
	const text = WARNINGS[lang]?.[verdict] ?? WARNINGS["en-IN"][verdict];
	speakCloud(text, lang, verdict).catch(() => speakNative(text, lang, verdict));
}
var currentAudio = null;
async function speakCloud(text, lang, verdict) {
	const { synthesizeSpeech } = await import("./tts.functions-rMFNXL79.mjs");
	const result = await synthesizeSpeech({ data: {
		text,
		lang,
		verdict
	} });
	if (currentAudio) {
		currentAudio.pause();
		currentAudio.src = "";
	}
	if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
	const src = `data:${result.mime};base64,${result.audio}`;
	const audio = new Audio(src);
	currentAudio = audio;
	await audio.play();
}
function speakNative(text, lang, verdict) {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
	try {
		window.speechSynthesis.cancel();
		const u = new SpeechSynthesisUtterance(text);
		u.lang = lang;
		u.rate = 1;
		u.pitch = verdict === "danger" ? 1.05 : 1;
		u.volume = 1;
		const voices = window.speechSynthesis.getVoices();
		const match = voices.find((v) => v.lang === lang) || voices.find((v) => v.lang.startsWith(lang.split("-")[0]));
		if (match) u.voice = match;
		window.speechSynthesis.speak(u);
	} catch {}
}
var UI_COPY = {
	"en-IN": {
		tagline: "Check before you trust",
		safetyCheck: "YOUR SAFETY CHECK",
		chooseTitle: "What would you like to check?",
		chooseHelp: "Choose one. SAFENs will explain the result clearly.",
		messageTab: "Check Message",
		imageTab: "Check Image",
		upiTab: "Check UPI",
		qrTab: "Scan QR",
		messageTitle: "Check a Message",
		messageHelp: "Paste or type a message you received.",
		messagePlaceholder: "Paste or type a message",
		paste: "Paste from clipboard",
		scamSample: "Try a scam sample",
		safeSample: "Try a normal sample",
		checkNow: "Check Now",
		imageTitle: "Check an Image",
		imageHelp: "Upload a screenshot or image you received.",
		chooseImage: "Choose Image",
		imageKinds: "Screenshot, offer, bill or bank message",
		checkImage: "Check Image",
		checking: "Checking",
		readingImage: "Reading image",
		imagePrivate: "Your image stays private on this device.",
		wordsFound: "Words found in the image",
		upiTitle: "Check a UPI Link",
		upiHelp: "Paste the payment link before you pay.",
		checkBeforePaying: "Check Before Paying",
		qrTitle: "Scan a QR Code",
		qrHelp: "Check the QR before making a payment.",
		readyScan: "Ready to scan",
		scanQr: "Scan QR",
		stop: "Stop",
		qrPrivate: "Point your camera at the QR. The scan stays on this device.",
		privateTitle: "Private by design",
		privateHelp: "No bank, UPI app or message permission is needed.",
		checkAnother: "Check something else",
		safetyResult: "Safety result",
		dangerTitle: "STOP — DON'T PAY",
		warningTitle: "BE CAREFUL",
		safeTitle: "LOOKS SAFE",
		dangerMessage: "This payment or message has suspicious signs.",
		warningMessage: "Please verify this with someone you trust before you continue.",
		safeMessage: "SAFENs did not find common scam signs.",
		listen: "Listen",
		why: "Why SAFENs gave this result",
		safetyScore: "Safety score",
		warningSigns: "warning signs found"
	},
	"hi-IN": {
		tagline: "भरोसा करने से पहले जाँचें",
		safetyCheck: "आपकी सुरक्षा जाँच",
		chooseTitle: "आप क्या जाँचना चाहते हैं?",
		chooseHelp: "एक विकल्प चुनें। SAFENs परिणाम साफ़ बताएगा।",
		messageTab: "संदेश जाँचें",
		imageTab: "तस्वीर जाँचें",
		upiTab: "UPI जाँचें",
		qrTab: "QR स्कैन करें",
		messageTitle: "संदेश जाँचें",
		messageHelp: "मिला हुआ संदेश यहाँ लिखें या चिपकाएँ।",
		messagePlaceholder: "संदेश लिखें या चिपकाएँ",
		paste: "क्लिपबोर्ड से चिपकाएँ",
		scamSample: "धोखाधड़ी नमूना",
		safeSample: "सामान्य नमूना",
		checkNow: "अभी जाँचें",
		imageTitle: "तस्वीर जाँचें",
		imageHelp: "मिला हुआ स्क्रीनशॉट या चित्र अपलोड करें।",
		chooseImage: "तस्वीर चुनें",
		imageKinds: "स्क्रीनशॉट, ऑफर, बिल या बैंक संदेश",
		checkImage: "तस्वीर जाँचें",
		checking: "जाँच जारी",
		readingImage: "तस्वीर पढ़ी जा रही है",
		imagePrivate: "तस्वीर इसी डिवाइस पर सुरक्षित रहती है।",
		wordsFound: "तस्वीर में मिले शब्द",
		upiTitle: "UPI लिंक जाँचें",
		upiHelp: "भुगतान से पहले लिंक चिपकाएँ।",
		checkBeforePaying: "भुगतान से पहले जाँचें",
		qrTitle: "QR कोड स्कैन करें",
		qrHelp: "भुगतान से पहले QR जाँचें।",
		readyScan: "स्कैन के लिए तैयार",
		scanQr: "QR स्कैन करें",
		stop: "रोकें",
		qrPrivate: "कैमरा QR पर रखें। स्कैन इसी डिवाइस पर रहता है।",
		privateTitle: "पूरी तरह निजी",
		privateHelp: "बैंक, UPI ऐप या संदेश की अनुमति की जरूरत नहीं।",
		checkAnother: "कुछ और जाँचें",
		safetyResult: "सुरक्षा परिणाम",
		dangerTitle: "रुकें — भुगतान न करें",
		warningTitle: "सावधान रहें",
		safeTitle: "सुरक्षित लगता है",
		dangerMessage: "इस भुगतान या संदेश में संदिग्ध संकेत हैं।",
		warningMessage: "आगे बढ़ने से पहले किसी भरोसेमंद व्यक्ति से पुष्टि करें।",
		safeMessage: "SAFENs को सामान्य धोखाधड़ी के संकेत नहीं मिले।",
		listen: "सुनें",
		why: "SAFENs ने यह परिणाम क्यों दिया",
		safetyScore: "सुरक्षा स्कोर",
		warningSigns: "चेतावनी संकेत मिले"
	},
	"te-IN": {
		tagline: "నమ్మే ముందు తనిఖీ చేయండి",
		safetyCheck: "మీ భద్రతా తనిఖీ",
		chooseTitle: "మీరు దేనిని తనిఖీ చేయాలి?",
		chooseHelp: "ఒకదాన్ని ఎంచుకోండి. SAFENs ఫలితాన్ని స్పష్టంగా వివరిస్తుంది.",
		messageTab: "సందేశం",
		imageTab: "చిత్రం",
		upiTab: "UPI",
		qrTab: "QR స్కాన్",
		messageTitle: "సందేశాన్ని తనిఖీ చేయండి",
		messageHelp: "మీకు వచ్చిన సందేశాన్ని టైప్ చేయండి లేదా అతికించండి.",
		messagePlaceholder: "సందేశాన్ని టైప్ చేయండి లేదా అతికించండి",
		paste: "క్లిప్‌బోర్డ్ నుండి అతికించండి",
		scamSample: "మోసం నమూనా",
		safeSample: "సాధారణ నమూనా",
		checkNow: "ఇప్పుడే తనిఖీ",
		imageTitle: "చిత్రాన్ని తనిఖీ చేయండి",
		imageHelp: "మీకు వచ్చిన స్క్రీన్‌షాట్ లేదా చిత్రాన్ని అప్‌లోడ్ చేయండి.",
		chooseImage: "చిత్రాన్ని ఎంచుకోండి",
		imageKinds: "స్క్రీన్‌షాట్, ఆఫర్, బిల్లు లేదా బ్యాంక్ సందేశం",
		checkImage: "చిత్రాన్ని తనిఖీ",
		checking: "తనిఖీ చేస్తోంది",
		readingImage: "చిత్రాన్ని చదువుతోంది",
		imagePrivate: "మీ చిత్రం ఈ పరికరంలోనే సురక్షితంగా ఉంటుంది.",
		wordsFound: "చిత్రంలో కనిపించిన పదాలు",
		upiTitle: "UPI లింక్ తనిఖీ",
		upiHelp: "చెల్లించే ముందు చెల్లింపు లింక్‌ను అతికించండి.",
		checkBeforePaying: "చెల్లించే ముందు తనిఖీ",
		qrTitle: "QR కోడ్ స్కాన్",
		qrHelp: "చెల్లింపు చేసే ముందు QRను తనిఖీ చేయండి.",
		readyScan: "స్కాన్‌కు సిద్ధం",
		scanQr: "QR స్కాన్",
		stop: "ఆపు",
		qrPrivate: "కెమెరాను QR వైపు చూపండి. స్కాన్ ఈ పరికరంలోనే ఉంటుంది.",
		privateTitle: "పూర్తిగా గోప్యం",
		privateHelp: "బ్యాంక్, UPI యాప్ లేదా సందేశ అనుమతి అవసరం లేదు.",
		checkAnother: "మరొకటి తనిఖీ",
		safetyResult: "భద్రతా ఫలితం",
		dangerTitle: "ఆగండి — చెల్లించవద్దు",
		warningTitle: "జాగ్రత్తగా ఉండండి",
		safeTitle: "సురక్షితంగా ఉంది",
		dangerMessage: "ఈ చెల్లింపు లేదా సందేశంలో అనుమానాస్పద సంకేతాలు ఉన్నాయి.",
		warningMessage: "కొనసాగే ముందు నమ్మకమైన వ్యక్తితో నిర్ధారించండి.",
		safeMessage: "SAFENs సాధారణ మోసం సంకేతాలను కనుగొనలేదు.",
		listen: "వినండి",
		why: "SAFENs ఈ ఫలితాన్ని ఎందుకు ఇచ్చింది",
		safetyScore: "భద్రతా స్కోరు",
		warningSigns: "హెచ్చరిక సంకేతాలు లభించాయి"
	},
	"ta-IN": {
		tagline: "நம்பும் முன் சரிபாருங்கள்",
		safetyCheck: "உங்கள் பாதுகாப்புச் சோதனை",
		chooseTitle: "எதைச் சரிபார்க்க விரும்புகிறீர்கள்?",
		chooseHelp: "ஒன்றைத் தேர்ந்தெடுக்கவும். SAFENs முடிவை தெளிவாக விளக்கும்.",
		messageTab: "செய்தி",
		imageTab: "படம்",
		upiTab: "UPI",
		qrTab: "QR ஸ்கேன்",
		messageTitle: "செய்தியைச் சரிபார்க்கவும்",
		messageHelp: "நீங்கள் பெற்ற செய்தியை தட்டச்சு அல்லது ஒட்டவும்.",
		messagePlaceholder: "செய்தியை தட்டச்சு அல்லது ஒட்டவும்",
		paste: "கிளிப்போர்டிலிருந்து ஒட்டவும்",
		scamSample: "மோசடி மாதிரி",
		safeSample: "சாதாரண மாதிரி",
		checkNow: "இப்போது சரிபார்க்கவும்",
		imageTitle: "படத்தைச் சரிபார்க்கவும்",
		imageHelp: "நீங்கள் பெற்ற ஸ்கிரீன்ஷாட் அல்லது படத்தை பதிவேற்றவும்.",
		chooseImage: "படத்தைத் தேர்வுசெய்க",
		imageKinds: "ஸ்கிரீன்ஷாட், சலுகை, பில் அல்லது வங்கி செய்தி",
		checkImage: "படத்தைச் சரிபார்க்கவும்",
		checking: "சரிபார்க்கிறது",
		readingImage: "படத்தைப் படிக்கிறது",
		imagePrivate: "உங்கள் படம் இந்தச் சாதனத்திலேயே பாதுகாப்பாக இருக்கும்.",
		wordsFound: "படத்தில் கண்ட சொற்கள்",
		upiTitle: "UPI இணைப்பைச் சரிபார்க்கவும்",
		upiHelp: "பணம் செலுத்தும் முன் இணைப்பை ஒட்டவும்.",
		checkBeforePaying: "செலுத்தும் முன் சரிபார்க்கவும்",
		qrTitle: "QR குறியீட்டை ஸ்கேன் செய்யவும்",
		qrHelp: "பணம் செலுத்தும் முன் QRஐச் சரிபார்க்கவும்.",
		readyScan: "ஸ்கேன் செய்யத் தயார்",
		scanQr: "QR ஸ்கேன்",
		stop: "நிறுத்து",
		qrPrivate: "கேமராவை QR மீது காட்டவும். ஸ்கேன் இந்தச் சாதனத்திலேயே இருக்கும்.",
		privateTitle: "தனியுரிமையுடன் வடிவமைக்கப்பட்டது",
		privateHelp: "வங்கி, UPI ஆப் அல்லது செய்தி அனுமதி தேவையில்லை.",
		checkAnother: "வேறொன்றைச் சரிபார்க்கவும்",
		safetyResult: "பாதுகாப்பு முடிவு",
		dangerTitle: "நிறுத்துங்கள் — பணம் செலுத்தாதீர்கள்",
		warningTitle: "கவனமாக இருங்கள்",
		safeTitle: "பாதுகாப்பாகத் தெரிகிறது",
		dangerMessage: "இந்தப் பணம் அல்லது செய்தியில் சந்தேகமான அறிகுறிகள் உள்ளன.",
		warningMessage: "தொடர்வதற்கு முன் நம்பகமான ஒருவரிடம் உறுதிசெய்யவும்.",
		safeMessage: "பொதுவான மோசடி அறிகுறிகளை SAFENs கண்டறியவில்லை.",
		listen: "கேளுங்கள்",
		why: "SAFENs இந்த முடிவை ஏன் வழங்கியது",
		safetyScore: "பாதுகாப்பு மதிப்பெண்",
		warningSigns: "எச்சரிக்கை அறிகுறிகள் கண்டறியப்பட்டன"
	},
	"bn-IN": {
		tagline: "বিশ্বাস করার আগে যাচাই করুন",
		safetyCheck: "আপনার নিরাপত্তা যাচাই",
		chooseTitle: "আপনি কী যাচাই করতে চান?",
		chooseHelp: "একটি বেছে নিন। SAFENs ফলাফল স্পষ্টভাবে বোঝাবে।",
		messageTab: "বার্তা",
		imageTab: "ছবি",
		upiTab: "UPI",
		qrTab: "QR স্ক্যান",
		messageTitle: "একটি বার্তা যাচাই করুন",
		messageHelp: "আপনার পাওয়া বার্তা লিখুন বা পেস্ট করুন।",
		messagePlaceholder: "বার্তা লিখুন বা পেস্ট করুন",
		paste: "ক্লিপবোর্ড থেকে পেস্ট",
		scamSample: "প্রতারণার নমুনা",
		safeSample: "সাধারণ নমুনা",
		checkNow: "এখন যাচাই করুন",
		imageTitle: "একটি ছবি যাচাই করুন",
		imageHelp: "আপনার পাওয়া স্ক্রিনশট বা ছবি আপলোড করুন।",
		chooseImage: "ছবি বেছে নিন",
		imageKinds: "স্ক্রিনশট, অফার, বিল বা ব্যাংক বার্তা",
		checkImage: "ছবি যাচাই করুন",
		checking: "যাচাই হচ্ছে",
		readingImage: "ছবি পড়া হচ্ছে",
		imagePrivate: "আপনার ছবি এই ডিভাইসেই ব্যক্তিগত থাকে।",
		wordsFound: "ছবিতে পাওয়া শব্দ",
		upiTitle: "UPI লিঙ্ক যাচাই করুন",
		upiHelp: "পেমেন্টের আগে লিঙ্কটি পেস্ট করুন।",
		checkBeforePaying: "পেমেন্টের আগে যাচাই",
		qrTitle: "QR কোড স্ক্যান করুন",
		qrHelp: "পেমেন্টের আগে QR যাচাই করুন।",
		readyScan: "স্ক্যানের জন্য প্রস্তুত",
		scanQr: "QR স্ক্যান",
		stop: "থামুন",
		qrPrivate: "ক্যামেরাটি QR-এর দিকে ধরুন। স্ক্যান এই ডিভাইসেই থাকে।",
		privateTitle: "গোপনীয়তার জন্য তৈরি",
		privateHelp: "ব্যাংক, UPI অ্যাপ বা বার্তার অনুমতি লাগে না।",
		checkAnother: "আরও কিছু যাচাই করুন",
		safetyResult: "নিরাপত্তা ফলাফল",
		dangerTitle: "থামুন — টাকা দেবেন না",
		warningTitle: "সাবধান থাকুন",
		safeTitle: "নিরাপদ মনে হচ্ছে",
		dangerMessage: "এই পেমেন্ট বা বার্তায় সন্দেহজনক লক্ষণ আছে।",
		warningMessage: "এগোনোর আগে বিশ্বস্ত কারও কাছে যাচাই করুন।",
		safeMessage: "SAFENs সাধারণ প্রতারণার লক্ষণ খুঁজে পায়নি।",
		listen: "শুনুন",
		why: "SAFENs কেন এই ফলাফল দিয়েছে",
		safetyScore: "নিরাপত্তা স্কোর",
		warningSigns: "সতর্কতার লক্ষণ পাওয়া গেছে"
	},
	"mr-IN": {
		tagline: "विश्वास ठेवण्यापूर्वी तपासा",
		safetyCheck: "तुमची सुरक्षा तपासणी",
		chooseTitle: "तुम्हाला काय तपासायचे आहे?",
		chooseHelp: "एक पर्याय निवडा. SAFENs निकाल स्पष्टपणे सांगेल.",
		messageTab: "संदेश",
		imageTab: "चित्र",
		upiTab: "UPI",
		qrTab: "QR स्कॅन",
		messageTitle: "संदेश तपासा",
		messageHelp: "तुम्हाला आलेला संदेश लिहा किंवा पेस्ट करा.",
		messagePlaceholder: "संदेश लिहा किंवा पेस्ट करा",
		paste: "क्लिपबोर्डमधून पेस्ट",
		scamSample: "फसवणूक नमुना",
		safeSample: "सामान्य नमुना",
		checkNow: "आता तपासा",
		imageTitle: "चित्र तपासा",
		imageHelp: "तुम्हाला मिळालेला स्क्रीनशॉट किंवा चित्र अपलोड करा.",
		chooseImage: "चित्र निवडा",
		imageKinds: "स्क्रीनशॉट, ऑफर, बिल किंवा बँक संदेश",
		checkImage: "चित्र तपासा",
		checking: "तपासत आहे",
		readingImage: "चित्र वाचत आहे",
		imagePrivate: "तुमचे चित्र या डिव्हाइसवरच खाजगी राहते.",
		wordsFound: "चित्रात सापडलेले शब्द",
		upiTitle: "UPI लिंक तपासा",
		upiHelp: "पैसे देण्यापूर्वी लिंक पेस्ट करा.",
		checkBeforePaying: "पैसे देण्यापूर्वी तपासा",
		qrTitle: "QR कोड स्कॅन करा",
		qrHelp: "पैसे देण्यापूर्वी QR तपासा.",
		readyScan: "स्कॅनसाठी तयार",
		scanQr: "QR स्कॅन",
		stop: "थांबा",
		qrPrivate: "कॅमेरा QRकडे धरा. स्कॅन या डिव्हाइसवरच राहतो.",
		privateTitle: "गोपनीयतेसाठी तयार",
		privateHelp: "बँक, UPI अॅप किंवा संदेश परवानगीची गरज नाही.",
		checkAnother: "आणखी काही तपासा",
		safetyResult: "सुरक्षा निकाल",
		dangerTitle: "थांबा — पैसे देऊ नका",
		warningTitle: "सावध रहा",
		safeTitle: "सुरक्षित दिसते",
		dangerMessage: "या पेमेंट किंवा संदेशात संशयास्पद चिन्हे आहेत.",
		warningMessage: "पुढे जाण्यापूर्वी विश्वासू व्यक्तीकडून खात्री करा.",
		safeMessage: "SAFENs ला सामान्य फसवणुकीची चिन्हे आढळली नाहीत.",
		listen: "ऐका",
		why: "SAFENs ने हा निकाल का दिला",
		safetyScore: "सुरक्षा गुण",
		warningSigns: "चेतावणी चिन्हे आढळली"
	},
	"kn-IN": {
		tagline: "ನಂಬುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ",
		safetyCheck: "ನಿಮ್ಮ ಸುರಕ್ಷತಾ ಪರಿಶೀಲನೆ",
		chooseTitle: "ನೀವು ಏನನ್ನು ಪರಿಶೀಲಿಸಲು ಬಯಸುತ್ತೀರಿ?",
		chooseHelp: "ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ. SAFENs ಫಲಿತಾಂಶವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸುತ್ತದೆ.",
		messageTab: "ಸಂದೇಶ",
		imageTab: "ಚಿತ್ರ",
		upiTab: "UPI",
		qrTab: "QR ಸ್ಕ್ಯಾನ್",
		messageTitle: "ಸಂದೇಶ ಪರಿಶೀಲಿಸಿ",
		messageHelp: "ನಿಮಗೆ ಬಂದ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಅಂಟಿಸಿ.",
		messagePlaceholder: "ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಅಂಟಿಸಿ",
		paste: "ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ನಿಂದ ಅಂಟಿಸಿ",
		scamSample: "ವಂಚನೆ ಮಾದರಿ",
		safeSample: "ಸಾಮಾನ್ಯ ಮಾದರಿ",
		checkNow: "ಈಗ ಪರಿಶೀಲಿಸಿ",
		imageTitle: "ಚಿತ್ರ ಪರಿಶೀಲಿಸಿ",
		imageHelp: "ನಿಮಗೆ ಬಂದ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಥವಾ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
		chooseImage: "ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ",
		imageKinds: "ಸ್ಕ್ರೀನ್‌ಶಾಟ್, ಆಫರ್, ಬಿಲ್ ಅಥವಾ ಬ್ಯಾಂಕ್ ಸಂದೇಶ",
		checkImage: "ಚಿತ್ರ ಪರಿಶೀಲಿಸಿ",
		checking: "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ",
		readingImage: "ಚಿತ್ರ ಓದಲಾಗುತ್ತಿದೆ",
		imagePrivate: "ನಿಮ್ಮ ಚಿತ್ರ ಈ ಸಾಧನದಲ್ಲೇ ಖಾಸಗಿಯಾಗಿರುತ್ತದೆ.",
		wordsFound: "ಚಿತ್ರದಲ್ಲಿ ಕಂಡ ಪದಗಳು",
		upiTitle: "UPI ಲಿಂಕ್ ಪರಿಶೀಲಿಸಿ",
		upiHelp: "ಪಾವತಿಸುವ ಮೊದಲು ಲಿಂಕ್ ಅಂಟಿಸಿ.",
		checkBeforePaying: "ಪಾವತಿಗೂ ಮುನ್ನ ಪರಿಶೀಲಿಸಿ",
		qrTitle: "QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
		qrHelp: "ಪಾವತಿ ಮಾಡುವ ಮೊದಲು QR ಪರಿಶೀಲಿಸಿ.",
		readyScan: "ಸ್ಕ್ಯಾನ್‌ಗೆ ಸಿದ್ಧ",
		scanQr: "QR ಸ್ಕ್ಯಾನ್",
		stop: "ನಿಲ್ಲಿಸಿ",
		qrPrivate: "ಕ್ಯಾಮೆರಾವನ್ನು QR ಕಡೆ ತೋರಿಸಿ. ಸ್ಕ್ಯಾನ್ ಈ ಸಾಧನದಲ್ಲೇ ಇರುತ್ತದೆ.",
		privateTitle: "ಗೌಪ್ಯತೆಗಾಗಿ ವಿನ್ಯಾಸ",
		privateHelp: "ಬ್ಯಾಂಕ್, UPI ಆಪ್ ಅಥವಾ ಸಂದೇಶ ಅನುಮತಿ ಅಗತ್ಯವಿಲ್ಲ.",
		checkAnother: "ಬೇರೊಂದನ್ನು ಪರಿಶೀಲಿಸಿ",
		safetyResult: "ಸುರಕ್ಷತಾ ಫಲಿತಾಂಶ",
		dangerTitle: "ನಿಲ್ಲಿಸಿ — ಹಣ ಪಾವತಿಸಬೇಡಿ",
		warningTitle: "ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ",
		safeTitle: "ಸುರಕ್ಷಿತವಾಗಿದೆ",
		dangerMessage: "ಈ ಪಾವತಿ ಅಥವಾ ಸಂದೇಶದಲ್ಲಿ ಅನುಮಾನಾಸ್ಪದ ಚಿಹ್ನೆಗಳಿವೆ.",
		warningMessage: "ಮುಂದುವರಿಯುವ ಮೊದಲು ವಿಶ್ವಾಸಾರ್ಹ ವ್ಯಕ್ತಿಯಿಂದ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
		safeMessage: "SAFENs ಸಾಮಾನ್ಯ ವಂಚನೆ ಚಿಹ್ನೆಗಳನ್ನು ಕಂಡುಹಿಡಿದಿಲ್ಲ.",
		listen: "ಕೇಳಿ",
		why: "SAFENs ಈ ಫಲಿತಾಂಶವನ್ನು ಏಕೆ ನೀಡಿತು",
		safetyScore: "ಸುರಕ್ಷತಾ ಅಂಕ",
		warningSigns: "ಎಚ್ಚರಿಕೆ ಚಿಹ್ನೆಗಳು ಕಂಡುಬಂದಿವೆ"
	},
	"gu-IN": {
		tagline: "વિશ્વાસ કરતાં પહેલાં તપાસો",
		safetyCheck: "તમારી સુરક્ષા તપાસ",
		chooseTitle: "તમે શું તપાસવા માંગો છો?",
		chooseHelp: "એક પસંદ કરો. SAFENs પરિણામ સ્પષ્ટ રીતે સમજાવશે.",
		messageTab: "સંદેશ",
		imageTab: "ચિત્ર",
		upiTab: "UPI",
		qrTab: "QR સ્કેન",
		messageTitle: "સંદેશ તપાસો",
		messageHelp: "તમને મળેલો સંદેશ લખો અથવા પેસ્ટ કરો.",
		messagePlaceholder: "સંદેશ લખો અથવા પેસ્ટ કરો",
		paste: "ક્લિપબોર્ડથી પેસ્ટ",
		scamSample: "છેતરપિંડી નમૂનો",
		safeSample: "સામાન્ય નમૂનો",
		checkNow: "હમણાં તપાસો",
		imageTitle: "ચિત્ર તપાસો",
		imageHelp: "તમને મળેલો સ્ક્રીનશોટ અથવા ચિત્ર અપલોડ કરો.",
		chooseImage: "ચિત્ર પસંદ કરો",
		imageKinds: "સ્ક્રીનશોટ, ઓફર, બિલ અથવા બેંક સંદેશ",
		checkImage: "ચિત્ર તપાસો",
		checking: "તપાસ ચાલુ છે",
		readingImage: "ચિત્ર વાંચી રહ્યું છે",
		imagePrivate: "તમારું ચિત્ર આ ઉપકરણ પર જ ખાનગી રહે છે.",
		wordsFound: "ચિત્રમાં મળેલા શબ્દો",
		upiTitle: "UPI લિંક તપાસો",
		upiHelp: "ચુકવણી પહેલાં લિંક પેસ્ટ કરો.",
		checkBeforePaying: "ચુકવણી પહેલાં તપાસો",
		qrTitle: "QR કોડ સ્કેન કરો",
		qrHelp: "ચુકવણી કરતાં પહેલાં QR તપાસો.",
		readyScan: "સ્કેન માટે તૈયાર",
		scanQr: "QR સ્કેન",
		stop: "બંધ કરો",
		qrPrivate: "કેમેરાને QR તરફ રાખો. સ્કેન આ ઉપકરણ પર જ રહે છે.",
		privateTitle: "ગોપનીયતા માટે બનાવેલ",
		privateHelp: "બેંક, UPI એપ અથવા સંદેશની પરવાનગી જરૂરી નથી.",
		checkAnother: "બીજું કંઈ તપાસો",
		safetyResult: "સુરક્ષા પરિણામ",
		dangerTitle: "અટકો — પૈસા ન આપો",
		warningTitle: "સાવચેત રહો",
		safeTitle: "સુરક્ષિત લાગે છે",
		dangerMessage: "આ ચુકવણી અથવા સંદેશમાં શંકાસ્પદ સંકેતો છે.",
		warningMessage: "આગળ વધતાં પહેલાં વિશ્વાસુ વ્યક્તિ પાસે ખાતરી કરો.",
		safeMessage: "SAFENs ને સામાન્ય છેતરપિંડીના સંકેતો મળ્યા નથી.",
		listen: "સાંભળો",
		why: "SAFENs એ આ પરિણામ કેમ આપ્યું",
		safetyScore: "સુરક્ષા સ્કોર",
		warningSigns: "ચેતવણીના સંકેતો મળ્યા"
	},
	"ml-IN": {
		tagline: "വിശ്വസിക്കും മുമ്പ് പരിശോധിക്കുക",
		safetyCheck: "നിങ്ങളുടെ സുരക്ഷാ പരിശോധന",
		chooseTitle: "എന്താണ് പരിശോധിക്കേണ്ടത്?",
		chooseHelp: "ഒന്ന് തിരഞ്ഞെടുക്കുക. SAFENs ഫലം വ്യക്തമായി വിശദീകരിക്കും.",
		messageTab: "സന്ദേശം",
		imageTab: "ചിത്രം",
		upiTab: "UPI",
		qrTab: "QR സ്കാൻ",
		messageTitle: "സന്ദേശം പരിശോധിക്കുക",
		messageHelp: "നിങ്ങൾക്ക് ലഭിച്ച സന്ദേശം ടൈപ്പ് ചെയ്യുകയോ ഒട്ടിക്കുകയോ ചെയ്യുക.",
		messagePlaceholder: "സന്ദേശം ടൈപ്പ് ചെയ്യുക അല്ലെങ്കിൽ ഒട്ടിക്കുക",
		paste: "ക്ലിപ്പ്ബോർഡിൽ നിന്ന് ഒട്ടിക്കുക",
		scamSample: "തട്ടിപ്പ് മാതൃക",
		safeSample: "സാധാരണ മാതൃക",
		checkNow: "ഇപ്പോൾ പരിശോധിക്കുക",
		imageTitle: "ചിത്രം പരിശോധിക്കുക",
		imageHelp: "നിങ്ങൾക്ക് ലഭിച്ച സ്ക്രീൻഷോട്ട് അല്ലെങ്കിൽ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.",
		chooseImage: "ചിത്രം തിരഞ്ഞെടുക്കുക",
		imageKinds: "സ്ക്രീൻഷോട്ട്, ഓഫർ, ബിൽ അല്ലെങ്കിൽ ബാങ്ക് സന്ദേശം",
		checkImage: "ചിത്രം പരിശോധിക്കുക",
		checking: "പരിശോധിക്കുന്നു",
		readingImage: "ചിത്രം വായിക്കുന്നു",
		imagePrivate: "നിങ്ങളുടെ ചിത്രം ഈ ഉപകരണത്തിൽ തന്നെ സ്വകാര്യമായി തുടരും.",
		wordsFound: "ചിത്രത്തിൽ കണ്ടെത്തിയ വാക്കുകൾ",
		upiTitle: "UPI ലിങ്ക് പരിശോധിക്കുക",
		upiHelp: "പണം നൽകുന്നതിന് മുമ്പ് ലിങ്ക് ഒട്ടിക്കുക.",
		checkBeforePaying: "പണം നൽകും മുമ്പ് പരിശോധിക്കുക",
		qrTitle: "QR കോഡ് സ്കാൻ ചെയ്യുക",
		qrHelp: "പണം നൽകുന്നതിന് മുമ്പ് QR പരിശോധിക്കുക.",
		readyScan: "സ്കാൻ ചെയ്യാൻ തയ്യാറാണ്",
		scanQr: "QR സ്കാൻ",
		stop: "നിർത്തുക",
		qrPrivate: "ക്യാമറ QR-ലേക്ക് ചൂണ്ടുക. സ്കാൻ ഈ ഉപകരണത്തിൽ തന്നെ തുടരും.",
		privateTitle: "സ്വകാര്യതയ്ക്കായി രൂപകൽപ്പന ചെയ്തത്",
		privateHelp: "ബാങ്ക്, UPI ആപ്പ് അല്ലെങ്കിൽ സന്ദേശ അനുമതി ആവശ്യമില്ല.",
		checkAnother: "മറ്റൊന്ന് പരിശോധിക്കുക",
		safetyResult: "സുരക്ഷാ ഫലം",
		dangerTitle: "നിർത്തുക — പണം നൽകരുത്",
		warningTitle: "ശ്രദ്ധിക്കുക",
		safeTitle: "സുരക്ഷിതമെന്ന് തോന്നുന്നു",
		dangerMessage: "ഈ പണമിടപാടിലോ സന്ദേശത്തിലോ സംശയാസ്പദമായ ലക്ഷണങ്ങളുണ്ട്.",
		warningMessage: "തുടരുന്നതിന് മുമ്പ് വിശ്വസ്തനായ ഒരാളുമായി സ്ഥിരീകരിക്കുക.",
		safeMessage: "സാധാരണ തട്ടിപ്പ് ലക്ഷണങ്ങളൊന്നും SAFENs കണ്ടെത്തിയില്ല.",
		listen: "കേൾക്കുക",
		why: "SAFENs ഈ ഫലം നൽകിയത് എന്തുകൊണ്ട്",
		safetyScore: "സുരക്ഷാ സ്കോർ",
		warningSigns: "മുന്നറിയിപ്പ് ലക്ഷണങ്ങൾ കണ്ടെത്തി"
	}
};
function VerdictCard({ result, onListen, copy }) {
	const tone = result.verdict === "danger" ? "bg-danger text-danger-foreground" : result.verdict === "warning" ? "bg-warning text-warning-foreground" : "bg-safe text-safe-foreground";
	const Icon = result.verdict === "danger" ? ShieldAlert : result.verdict === "warning" ? TriangleAlert : CircleCheck;
	const triggered = result.findings.filter((f) => f.level !== "safe");
	const title = result.verdict === "danger" ? copy.dangerTitle : result.verdict === "warning" ? copy.warningTitle : copy.safeTitle;
	const message = result.verdict === "danger" ? copy.dangerMessage : result.verdict === "warning" ? copy.warningMessage : copy.safeMessage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-2xl p-6 shadow-sm", tone),
		role: "alert",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "mx-auto h-16 w-16",
						strokeWidth: 2.25
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm font-bold opacity-80",
						children: copy.safetyResult
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-3xl font-extrabold leading-tight",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-sm text-base font-semibold leading-relaxed",
						children: message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						className: "mt-5 h-12 rounded-xl px-5 text-base",
						onClick: onListen,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" }),
							" ",
							copy.listen
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 border-t border-current/20 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold",
					children: copy.why
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm opacity-90",
					children: [
						copy.safetyScore,
						": ",
						result.score,
						"/100 · ",
						triggered.length,
						" ",
						copy.warningSigns
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: result.findings.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-background/15 px-3 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md bg-background/20 px-2 py-1 font-mono text-[10px] uppercase",
								children: f.ruleId
							}),
							f.points > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-md bg-background/20 px-2 py-1 font-mono text-[10px]",
								children: [
									"+",
									f.points,
									" pts"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: f.label
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 opacity-90",
						children: f.detail
					})]
				}, i))
			})
		]
	});
}
function QrScanner({ onResult, copy }) {
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const streamRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(null);
	const jsQRRef = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const stop = () => {
		if (rafRef.current) cancelAnimationFrame(rafRef.current);
		rafRef.current = null;
		streamRef.current?.getTracks().forEach((t) => t.stop());
		streamRef.current = null;
		setActive(false);
	};
	(0, import_react.useEffect)(() => stop, []);
	const start = async () => {
		setError(null);
		setLoading(true);
		try {
			if (!jsQRRef.current) {
				const mod = await import("../_libs/jsqr.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
				jsQRRef.current = mod.default;
			}
			const stream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: { ideal: "environment" } },
				audio: false
			});
			streamRef.current = stream;
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				await videoRef.current.play();
			}
			setActive(true);
			tick();
		} catch (e) {
			setError(e instanceof Error ? e.message : "Camera failed to start");
		} finally {
			setLoading(false);
		}
	};
	const tick = () => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		const jsQR = jsQRRef.current;
		if (!video || !canvas || !jsQR || video.readyState !== 4) {
			rafRef.current = requestAnimationFrame(tick);
			return;
		}
		const w = video.videoWidth;
		const h = video.videoHeight;
		canvas.width = w;
		canvas.height = h;
		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		if (!ctx) return;
		ctx.drawImage(video, 0, 0, w, h);
		const code = jsQR(ctx.getImageData(0, 0, w, h).data, w, h);
		if (code && code.data) {
			stop();
			onResult(code.data);
			return;
		}
		rafRef.current = requestAnimationFrame(tick);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-square overflow-hidden rounded-2xl border border-border bg-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						className: "h-full w-full object-cover",
						playsInline: true,
						muted: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "hidden"
					}),
					!active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-14 w-14 text-background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-bold text-background",
							children: copy.readyScan
						})]
					}),
					active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-8 rounded-2xl border-2 border-primary/80 shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]" })
				]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: !active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: start,
					disabled: loading,
					className: "h-14 flex-1 rounded-xl text-lg",
					size: "lg",
					children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "mr-2 h-4 w-4" }), copy.scanQr]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: stop,
					variant: "secondary",
					className: "flex-1",
					size: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraOff, { className: "mr-2 h-4 w-4" }), copy.stop]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-muted-foreground",
				children: copy.qrPrivate
			})
		]
	});
}
function ImageOcr({ onText, copy }) {
	const fileRef = (0, import_react.useRef)(null);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [file, setFile] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [error, setError] = (0, import_react.useState)(null);
	const readQrFromImage = async (selectedFile) => {
		const jsQR = (await import("../_libs/jsqr.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
		const imageUrl = URL.createObjectURL(selectedFile);
		try {
			const img = new Image();
			img.src = imageUrl;
			await new Promise((resolve, reject) => {
				img.onload = () => resolve();
				img.onerror = () => reject(/* @__PURE__ */ new Error("Image could not be loaded"));
			});
			const canvas = document.createElement("canvas");
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;
			const ctx = canvas.getContext("2d", { willReadFrequently: true });
			if (!ctx) return null;
			ctx.drawImage(img, 0, 0);
			return jsQR(ctx.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height, { inversionAttempts: "attemptBoth" })?.data ?? null;
		} finally {
			URL.revokeObjectURL(imageUrl);
		}
	};
	const checkImage = async () => {
		if (!file) return;
		setError(null);
		setBusy(true);
		setProgress(0);
		try {
			const { data } = await (await import("../_libs/tesseract.js+unenv.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default.recognize(file, "eng", { logger: (m) => {
				if (m.status === "recognizing text") setProgress(Math.round(m.progress * 100));
			} });
			const extractedText = data.text?.trim() ?? "";
			let qrContent = null;
			try {
				qrContent = await readQrFromImage(file);
			} catch (qrError) {
				console.warn("QR image scan failed:", qrError);
			}
			onText([extractedText, qrContent ? `QR CODE CONTENT: ${qrContent}` : ""].filter(Boolean).join("\n\n"));
		} catch (e) {
			setError(e instanceof Error ? e.message : "Image analysis failed");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => {
					const selected = e.target.files?.[0];
					if (!selected) return;
					setFile(selected);
					setPreview(URL.createObjectURL(selected));
					setError(null);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: () => !busy && fileRef.current?.click(),
				className: "flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-background text-muted-foreground transition-colors hover:border-primary",
				children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: preview,
					alt: "Uploaded image preview",
					className: "h-full w-full rounded-2xl object-contain"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "h-12 w-12 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-bold text-foreground",
						children: copy.chooseImage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 text-center text-sm",
						children: copy.imageKinds
					})
				] })
			}),
			busy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
					copy.readingImage,
					"… ",
					progress,
					"%"
				]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: "h-12 w-full rounded-xl text-base",
				onClick: () => fileRef.current?.click(),
				disabled: busy,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "h-5 w-5" }), copy.chooseImage]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "h-14 w-full rounded-xl text-lg",
				onClick: checkImage,
				disabled: !file || busy,
				children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" }), busy ? `${copy.checking}… ${progress}%` : copy.checkImage]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-muted-foreground",
				children: copy.imagePrivate
			})
		]
	});
}
function Index() {
	const [lang, setLang] = (0, import_react.useState)("en-IN");
	const [result, setResult] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)("msg");
	const [upi, setUpi] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const copy = UI_COPY[lang];
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.getVoices();
	}, []);
	const announce = (r) => {
		setResult(r);
		speak(r.verdict, lang);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-2xl items-center justify-between gap-3 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-primary p-2.5 text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-xl font-extrabold text-primary",
								children: "SAFENs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: copy.tagline
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "language",
						children: "Language"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "language",
						value: lang,
						onChange: (event) => setLang(event.target.value),
						className: "h-11 max-w-36 rounded-xl border border-border bg-background px-3 text-sm font-bold text-foreground outline-none focus:ring-2 focus:ring-ring",
						children: LANG_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: option.value,
							children: option.native
						}, option.value))
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-2xl space-y-7 px-5 py-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-primary",
						children: copy.safetyCheck
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-3xl font-extrabold leading-tight",
						children: copy.chooseTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base text-muted-foreground",
						children: copy.chooseHelp
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: tab,
					onValueChange: setTab,
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
							className: "grid h-auto w-full grid-cols-2 gap-3 bg-transparent p-0 sm:grid-cols-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "msg",
									className: "h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareWarning, { className: "h-8 w-8" }),
										" ",
										copy.messageTab
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "img",
									className: "h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { className: "h-8 w-8" }),
										" ",
										copy.imageTab
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "upi",
									className: "h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-8 w-8" }),
										" ",
										copy.upiTab
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
									value: "qr",
									className: "h-28 flex-col gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-base shadow-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "h-8 w-8" }),
										" ",
										copy.qrTab
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "qr",
							className: "mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								title: copy.qrTitle,
								subtitle: copy.qrHelp
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrScanner, {
								copy,
								onResult: (text) => {
									setUpi(text);
									announce(analyzeScanned(text));
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "upi",
							className: "mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
									title: copy.upiTitle,
									subtitle: copy.upiHelp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									placeholder: "upi://pay?pa=...&pn=...&am=...&cu=INR",
									value: upi,
									onChange: (e) => setUpi(e.target.value),
									rows: 3,
									className: "min-h-28 rounded-xl bg-background font-mono text-base"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "h-14 w-full rounded-xl text-lg",
									disabled: !upi.trim(),
									onClick: () => announce(analyzeUpiLink(upi.trim(), { mentionsPrize: /(prize|lottery|won|winner)/i.test(msg) })),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" }),
										" ",
										copy.checkBeforePaying
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "msg",
							className: "mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
									title: copy.messageTitle,
									subtitle: copy.messageHelp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									placeholder: copy.messagePlaceholder,
									value: msg,
									onChange: (e) => setMsg(e.target.value),
									rows: 6,
									className: "min-h-40 rounded-xl bg-background text-base"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "h-12 w-full rounded-xl text-base",
									onClick: async () => {
										const text = await navigator.clipboard.readText().catch(() => "");
										if (text) setMsg(text);
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardPaste, { className: "h-5 w-5" }),
										" ",
										copy.paste
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										onClick: () => setMsg(EXAMPLE_SCAM),
										children: copy.scamSample
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										onClick: () => setMsg(EXAMPLE_SAFE),
										children: copy.safeSample
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "h-14 w-full rounded-xl text-lg",
									disabled: !msg.trim(),
									onClick: () => announce(analyzeText(msg)),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" }),
										" ",
										copy.checkNow
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "img",
							className: "mt-6 space-y-4 rounded-2xl bg-card p-5 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
									title: copy.imageTitle,
									subtitle: copy.imageHelp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOcr, {
									copy,
									onText: (text) => {
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
													points: 20
												}]
											});
											return;
										}
										announce(analyzeText(text));
									}
								}),
								msg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-card p-3 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-1 font-semibold text-muted-foreground",
										children: copy.wordsFound
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "whitespace-pre-wrap text-foreground",
										children: msg
									})]
								})
							]
						})
					]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdictCard, {
						result,
						copy,
						onListen: () => speak(result.verdict, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "h-12 flex-1 rounded-xl text-base",
							onClick: () => setResult(null),
							children: copy.checkAnother
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-4 rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-extrabold text-red-700 dark:text-red-400",
									children: "Report Cybercrime"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Victim of online fraud? Don't panic. Report it immediately through official Indian cybercrime services."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:1930",
							className: "flex min-h-14 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-center font-bold text-white transition hover:bg-red-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" }), "Call Cybercrime Helpline – 1930"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://cybercrime.gov.in/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center font-bold text-primary-foreground transition hover:opacity-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-5 w-5" }), "Report Cybercrime Online"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs leading-relaxed text-muted-foreground",
							children: "For financial fraud, call 1930 as soon as possible. Also submit your complaint through the official portal. Keep transaction IDs and relevant evidence ready."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border-t border-border pt-5 text-center text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mx-auto mb-2 h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-foreground",
							children: copy.privateTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: copy.privateHelp
						})
					]
				})
			]
		})]
	});
}
function SectionTitle({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "text-2xl font-extrabold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-base text-muted-foreground",
		children: subtitle
	})] });
}
var EXAMPLE_SCAM = `Congratulations! You have WON ₹25,00,000 in the KBC Lucky Draw lottery.
To claim your prize, urgently update your PIN at http://kbc-winner.bit.ly/claim or pay processing fee via:
upi://pay?pa=rahul12345@ybl&pn=KBC%20Government%20Office&am=4999&cu=INR
Reply with OTP immediately or your account will be BLOCKED.`;
var EXAMPLE_SAFE = `Hi! Your Amazon order #112-456 will arrive today between 4-6 PM.
Track it in the Amazon app. No action needed.`;
export { Index as component };
