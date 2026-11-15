// Browser TTS using SpeechSynthesis. No network, no API key.

export type Lang =
  | "en-IN"
  | "hi-IN"
  | "ta-IN"
  | "te-IN"
  | "bn-IN"
  | "mr-IN"
  | "kn-IN"
  | "gu-IN"
  | "ml-IN";

export const LANG_OPTIONS: { value: Lang; label: string; native: string }[] = [
  { value: "en-IN", label: "English", native: "English" },
  { value: "hi-IN", label: "Hindi", native: "हिन्दी" },
  { value: "ta-IN", label: "Tamil", native: "தமிழ்" },
  { value: "te-IN", label: "Telugu", native: "తెలుగు" },
  { value: "bn-IN", label: "Bengali", native: "বাংলা" },
  { value: "mr-IN", label: "Marathi", native: "मराठी" },
  { value: "kn-IN", label: "Kannada", native: "ಕನ್ನಡ" },
  { value: "gu-IN", label: "Gujarati", native: "ગુજરાતી" },
  { value: "ml-IN", label: "Malayalam", native: "മലയാളം" },
];

type Verdict = "safe" | "warning" | "danger";

const WARNINGS: Record<Lang, Record<Verdict, string>> = {
  "en-IN": {
    safe: "This looks safe.",
    warning: "Caution. Verify before you act.",
    danger: "Danger. This looks like a scam. Do not pay or click.",
  },
  "hi-IN": {
    safe: "यह सुरक्षित लगता है।",
    warning: "सावधान। कार्रवाई करने से पहले जाँच करें।",
    danger: "ख़तरा! यह धोखाधड़ी लगती है। पैसे न भेजें और लिंक पर क्लिक न करें।",
  },
  "ta-IN": {
    safe: "இது பாதுகாப்பாக தெரிகிறது.",
    warning: "எச்சரிக்கை. செயல்படுவதற்கு முன் சரிபார்க்கவும்.",
    danger: "ஆபத்து! இது மோசடியாக தெரிகிறது. பணம் அனுப்பவோ கிளிக் செய்யவோ வேண்டாம்.",
  },
  "te-IN": {
    safe: "ఇది సురక్షితంగా ఉంది.",
    warning: "జాగ్రత్త. చర్య తీసుకునే ముందు ధృవీకరించండి.",
    danger: "ప్రమాదం! ఇది మోసం వలె ఉంది. డబ్బు పంపవద్దు, లింక్‌ను నొక్కవద్దు.",
  },
  "bn-IN": {
    safe: "এটি নিরাপদ মনে হচ্ছে।",
    warning: "সতর্ক থাকুন। কাজ করার আগে যাচাই করুন।",
    danger: "বিপদ! এটি প্রতারণা মনে হচ্ছে। টাকা পাঠাবেন না বা লিঙ্কে ক্লিক করবেন না।",
  },
  "mr-IN": {
    safe: "हे सुरक्षित दिसते.",
    warning: "सावध रहा. कृती करण्यापूर्वी पडताळणी करा.",
    danger: "धोका! ही फसवणूक दिसते. पैसे पाठवू नका किंवा लिंकवर क्लिक करू नका.",
  },
  "kn-IN": {
    safe: "ಇದು ಸುರಕ್ಷಿತವಾಗಿದೆ.",
    warning: "ಎಚ್ಚರಿಕೆ. ಕ್ರಮ ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ.",
    danger: "ಅಪಾಯ! ಇದು ವಂಚನೆಯಂತೆ ಕಾಣುತ್ತದೆ. ಹಣ ಕಳುಹಿಸಬೇಡಿ ಅಥವಾ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಬೇಡಿ.",
  },
  "gu-IN": {
    safe: "આ સુરક્ષિત લાગે છે.",
    warning: "સાવચેત રહો. ક્રિયા કરતા પહેલા ચકાસો.",
    danger: "ભય! આ છેતરપિંડી લાગે છે. પૈસા મોકલશો નહીં અથવા લિંક પર ક્લિક કરશો નહીં.",
  },
  "ml-IN": {
    safe: "ഇത് സുരക്ഷിതമാണ്.",
    warning: "ജാഗ്രത പുലർത്തുക. പ്രവർത്തിക്കുന്നതിന് മുമ്പ് പരിശോധിക്കുക.",
    danger: "അപകടം! ഇത് തട്ടിപ്പ് പോലെ തോന്നുന്നു. പണം അയയ്ക്കരുത് അല്ലെങ്കിൽ ലിങ്ക് ക്ലിക്ക് ചെയ്യരുത്.",
  },
};

export function speak(verdict: Verdict, lang: Lang) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const text = WARNINGS[lang]?.[verdict] ?? WARNINGS["en-IN"][verdict];
  // Try cloud TTS first (real native-language voice via Lovable AI Gateway).
  void speakCloud(text, lang, verdict).catch(() => speakNative(text, lang, verdict));
}

let currentAudio: HTMLAudioElement | null = null;

async function speakCloud(text: string, lang: Lang, verdict: Verdict) {
  const { synthesizeSpeech } = await import("./tts.functions");
  const result = await synthesizeSpeech({ data: { text, lang, verdict } });
  // Stop any prior playback
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
  }
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  const src = `data:${result.mime};base64,${result.audio}`;
  const audio = new Audio(src);
  currentAudio = audio;
  await audio.play();
}

function speakNative(text: string, lang: Lang, verdict: Verdict) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 1;
    u.pitch = verdict === "danger" ? 1.05 : 1;
    u.volume = 1;
    // Try to pick a matching voice
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find((v) => v.lang === lang) || voices.find((v) => v.lang.startsWith(lang.split("-")[0]));
    if (match) u.voice = match;
    window.speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}