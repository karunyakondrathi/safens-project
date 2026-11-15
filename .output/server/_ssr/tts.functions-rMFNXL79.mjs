import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./server-BzWuzqMn.mjs";
// node_modules/.nitro/vite/services/ssr/assets/tts.functions-rMFNXL79.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var synthesizeSpeech = createServerFn({ method: "POST" }).inputValidator((input) => {
	const v = input;
	if (!v?.text || typeof v.text !== "string") throw new Error("text required");
	return {
		text: v.text.slice(0, 1e3),
		lang: v.lang ?? "en-IN",
		verdict: v.verdict ?? "warning"
	};
}).handler(createSsrRpc("e76c15c3dcc1ab1074f6faed471d2bb4b79ceb7b80d93b8e0a4c2f0d3420ef18"));
export { synthesizeSpeech };
