module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/node:crypto [external] (node:crypto, cjs)");
    });
});
}),
"[externals]/node:buffer [external] (node:buffer, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[externals]_node:buffer_00e2e67a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/node:buffer [external] (node:buffer, cjs)");
    });
});
}),
"[project]/node_modules/.bun/@prisma+client@7.1.0+e8a4e00eea4976f7/node_modules/@prisma/client/runtime/query_compiler_bg.postgresql.mjs [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/e8a2b_@prisma_client_runtime_query_compiler_bg_postgresql_mjs_27f96188._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/.bun/@prisma+client@7.1.0+e8a4e00eea4976f7/node_modules/@prisma/client/runtime/query_compiler_bg.postgresql.mjs [app-rsc] (ecmascript)");
    });
});
}),
"[project]/node_modules/.bun/@prisma+client@7.1.0+e8a4e00eea4976f7/node_modules/@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs [app-rsc] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/e8a2b_@prisma_client_runtime_query_compiler_bg_postgresql_wasm-base64_mjs_6f1cdf98._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/.bun/@prisma+client@7.1.0+e8a4e00eea4976f7/node_modules/@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs [app-rsc] (ecmascript)");
    });
});
}),
];