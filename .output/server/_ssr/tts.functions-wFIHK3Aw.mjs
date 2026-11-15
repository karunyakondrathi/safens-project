import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./server-BzWuzqMn.mjs";
import processModule from "node:process";
// node_modules/.nitro/vite/services/ssr/assets/tts.functions-wFIHK3Aw.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var VOICE = "alloy";
var LANG_NAME = {
	"en-IN": "Indian English",
	"hi-IN": "Hindi (हिन्दी)",
	"ta-IN": "Tamil (தமிழ்)",
	"te-IN": "Telugu (తెలుగు)",
	"bn-IN": "Bengali (বাংলা)",
	"mr-IN": "Marathi (मराठी)",
	"kn-IN": "Kannada (ಕನ್ನಡ)",
	"gu-IN": "Gujarati (ગુજરાતી)",
	"ml-IN": "Malayalam (മലയാളം)"
};
var synthesizeSpeech_createServerFn_handler = createServerRpc({
	id: "e76c15c3dcc1ab1074f6faed471d2bb4b79ceb7b80d93b8e0a4c2f0d3420ef18",
	name: "synthesizeSpeech",
	filename: "src/lib/tts.functions.ts"
}, (opts) => synthesizeSpeech.__executeServer(opts));
var synthesizeSpeech = createServerFn({ method: "POST" }).inputValidator((input) => {
	const v = input;
	if (!v?.text || typeof v.text !== "string") throw new Error("text required");
	return {
		text: v.text.slice(0, 1e3),
		lang: v.lang ?? "en-IN",
		verdict: v.verdict ?? "warning"
	};
}).handler(synthesizeSpeech_createServerFn_handler, async ({ data }) => {
	const key = processModule.env.LOVABLE_API_KEY;
	if (!key) throw new Error("Missing LOVABLE_API_KEY");
	const instructions = `Speak naturally in ${LANG_NAME[data.lang] ?? "Indian English"} with an authentic native accent. ${data.verdict === "danger" ? "Speak with strong urgency and a serious warning tone." : data.verdict === "warning" ? "Speak with a cautious, alert tone." : "Speak in a calm, reassuring tone."} Pronounce all words clearly.`;
	const res = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			model: "openai/gpt-4o-mini-tts",
			input: data.text,
			voice: VOICE,
			instructions,
			response_format: "mp3"
		})
	});
	if (!res.ok) {
		const body = await res.text().catch(() => "");
		throw new Error(`TTS failed: ${res.status} ${body}`);
	}
	const buf = new Uint8Array(await res.arrayBuffer());
	let binary = "";
	for (let i = 0; i < buf.length; i++) binary += String.fromCharCode(buf[i]);
	return {
		audio: btoa(binary),
		mime: "audio/mpeg"
	};
});
export { synthesizeSpeech_createServerFn_handler };
