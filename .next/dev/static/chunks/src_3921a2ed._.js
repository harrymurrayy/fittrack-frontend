(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/msalInstance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs [app-client] (ecmascript)");
;
// HARDCODED production URL - single source of truth
const REDIRECT_URI = "https://fittrack-frontend-bpdtekgzbpgwc8a0.italynorth-01.azurewebsites.net";
const CLIENT_ID = "1c890c47-8d12-4cc6-833a-24dc176e6198";
const TENANT_ID = "2c8b0440-b840-44d9-b97d-758669cf9f7f";
const msalInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicClientApplication"]({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@azure/msal-react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$MsalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@azure/msal-react/dist/MsalProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/msalInstance.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthProvider({ children }) {
    _s();
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const initializeMsal = {
                "AuthProvider.useEffect.initializeMsal": async ()=>{
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msalInstance"].initialize();
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msalInstance"].handleRedirectPromise();
                        setIsInitialized(true);
                    } catch (error) {
                        console.error("MSAL initialization error:", error);
                        setIsInitialized(true);
                    }
                }
            }["AuthProvider.useEffect.initializeMsal"];
            initializeMsal();
        }
    }["AuthProvider.useEffect"], []);
    if (!isInitialized) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 animate-pulse-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AuthProvider.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$MsalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MsalProvider"], {
        instance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$msalInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msalInstance"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AuthProvider.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "jod6gpyvFt60OY3llCuT/gwL8gs=");
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3921a2ed._.js.map