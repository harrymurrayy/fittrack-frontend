module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/msalInstance.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLIENT_ID",
    ()=>CLIENT_ID,
    "TENANT_ID",
    ()=>TENANT_ID,
    "loginRequest",
    ()=>loginRequest,
    "msalInstance",
    ()=>msalInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs [app-ssr] (ecmascript)");
;
// HARDCODED production URL - single source of truth
const REDIRECT_URI = "https://fittrack-frontend-bpdtekgzbpgwc8a0.italynorth-01.azurewebsites.net";
const CLIENT_ID = "1c890c47-8d12-4cc6-833a-24dc176e6198";
const TENANT_ID = "2c8b0440-b840-44d9-b97d-758669cf9f7f";
const msalInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicClientApplication"]({
    auth: {
        clientId: CLIENT_ID,
        authority: `https://login.microsoftonline.com/${TENANT_ID}`,
        redirectUri: REDIRECT_URI,
        postLogoutRedirectUri: `${REDIRECT_URI}/signin`
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
});
const loginRequest = {
    scopes: [
        `api://${CLIENT_ID}/access_as_user`
    ]
};
}),
"[project]/src/components/AuthProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@azure/msal-react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$MsalProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@azure/msal-react/dist/MsalProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/msalInstance.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AuthProvider({ children }) {
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeMsal = async ()=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msalInstance"].initialize();
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msalInstance"].handleRedirectPromise();
                setIsInitialized(true);
            } catch (error) {
                console.error("MSAL initialization error:", error);
                setIsInitialized(true);
            }
        };
        initializeMsal();
    }, []);
    if (!isInitialized) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 animate-pulse-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-black font-bold text-2xl",
                            children: "F"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AuthProvider.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthProvider.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthProvider.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--text-secondary)]",
                        children: "Loading FitTrack..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthProvider.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AuthProvider.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AuthProvider.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$MsalProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MsalProvider"], {
        instance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msalInstance"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AuthProvider.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7d8afaad._.js.map