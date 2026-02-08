// CSS collection utility
export async function collectStyle(server, entries) {
    const urls = await collectStyleUrls(server, entries);
    const codes = await Promise.all(urls.map(async (url) => {
        const res = url.includes("\0")
            ? await server.ssrLoadModule(url).then((m) => m['default'])
            : await server
                .transformRequest(url + "?direct")
                .then((result) => result?.code); // Explicitly define `result` type
        return [`/* [collectStyle] ${url} */`, res];
    }));
    return codes.flat().filter(Boolean).join("\n\n");
}
async function collectStyleUrls(server, entries) {
    const visited = new Set();
    async function traverse(url) {
        const [, id] = await server.moduleGraph.resolveUrl(url);
        if (visited.has(id)) {
            return;
        }
        visited.add(id);
        const mod = server.moduleGraph.getModuleById(id);
        if (!mod) {
            return;
        }
        await Promise.all([...mod.importedModules].map((childMod) => traverse(childMod.url)));
    }
    // Ensure Vite's import analysis is ready _only_ for top entries
    await Promise.all(entries.map((e) => server.transformRequest(e)));
    // Traverse all styles
    await Promise.all(entries.map((url) => traverse(url)));
    return [...visited].filter((url) => url.match(CSS_LANGS_RE));
}
const CSS_LANGS_RE = /\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/;
