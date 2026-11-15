import { createServerFn } from "@tanstack/react-start";

const VOICE = "alloy";

const LANG_NAME: Record<string, string> = {
  "en-IN": "Indian English",
  "hi-IN": "Hindi (हिन्दी)",
  "ta-IN": "Tamil (தமிழ்)",
  "te-IN": "Telugu (తెలుగు)",
  "bn-IN": "Bengali (বাংলা)",
  "mr-IN": "Marathi (मराठी)",
  "kn-IN": "Kannada (ಕನ್ನಡ)",
  "gu-IN": "Gujarati (ગુજરાતી)",
  "ml-IN": "Malayalam (മലയാളം)",
};

export const synthesizeSpeech = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => {
    const v = input as { text?: string; lang?: string; verdict?: string };
    if (!v?.text || typeof v.text !== "string") throw new Error("text required");
    return {
      text: v.text.slice(0, 1000),
      lang: v.lang ?? "en-IN",
      verdict: v.verdict ?? "warning",
    };
  })
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const langName = LANG_NAME[data.lang] ?? "Indian English";
    const tone =
      data.verdict === "danger"
        ? "Speak with strong urgency and a serious warning tone."
        : data.verdict === "warning"
          ? "Speak with a cautious, alert tone."
          : "Speak in a calm, reassuring tone.";
    const instructions = `Speak naturally in ${langName} with an authentic native accent. ${tone} Pronounce all words clearly.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini-tts",
        input: data.text,
        voice: VOICE,
        instructions,
        response_format: "mp3",
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`TTS failed: ${res.status} ${body}`);
    }

    const buf = new Uint8Array(await res.arrayBuffer());
    let binary = "";
    for (let i = 0; i < buf.length; i++) binary += String.fromCharCode(buf[i]);
    const base64 = btoa(binary);
    return { audio: base64, mime: "audio/mpeg" };
  });