const timestamp = 1643310119936;
const build = [
  "/_app/start-161ed367.js",
  "/_app/pages/__layout.svelte-fec6d3cc.js",
  "/_app/assets/pages/__layout.svelte-49a1800c.css",
  "/_app/error.svelte-9ec6dbdf.js",
  "/_app/pages/index.svelte-6a660cec.js",
  "/_app/assets/pages/index.svelte-1dc52782.css",
  "/_app/pages/setlist/index.svelte-ea52d773.js",
  "/_app/assets/pages/setlist/index.svelte-e3c6b5cd.css",
  "/_app/pages/card/_uid_.svelte-aefed66c.js",
  "/_app/pages/set/_uid_.svelte-7279232d.js",
  "/_app/chunks/vendor-a0fddeae.js",
  "/_app/chunks/paths-4b3c6e7e.js",
  "/_app/chunks/stores-585f0c6b.js",
  "/_app/chunks/Book-36746840.js",
  "/_app/assets/Book-0bd58975.css",
  "/_app/chunks/PokemonCard-38d1ccc0.js",
  "/_app/assets/PokemonCard-c615fc0a.css",
  "/_app/chunks/Tiltable-b809940d.js",
  "/_app/assets/Tiltable-060291f7.css",
  "/_app/chunks/Headline-2268fb7f.js",
  "/_app/assets/Headline-6799e699.css",
  "/_app/chunks/pokemon-2477fc83.js",
  "/_app/assets/pokemon-a7630812.css"
];
const files = [
  "/.nojekyll",
  "/darkmode.js",
  "/favicon.png",
  "/images/cards/base1_back.png",
  "/manifest.webmanifest.json",
  "/robots.txt"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
