module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/AuthProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$MsalProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/MsalProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$event$2f$EventType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-browser/dist/event/EventType.mjs [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/authConfig'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const msalInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicClientApplication"](msalConfig);
function AuthProvider({ children }) {
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeMsal = async ()=>{
            try {
                // Initialize MSAL instance
                await msalInstance.initialize();
                // Handle redirect promise after initialization
                await msalInstance.handleRedirectPromise();
                // Add event callback
                msalInstance.addEventCallback((event)=>{
                    if (event.eventType === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$event$2f$EventType$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventType"].LOGIN_SUCCESS) {
                        console.log("Login successful!");
                    }
                });
                setIsInitialized(true);
            } catch (error) {
                console.error("MSAL initialization error:", error);
                setIsInitialized(true); // Still set to true to prevent infinite loading
            }
        };
        initializeMsal();
    }, []);
    // Show loading while initializing
    if (!isInitialized) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-black"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/AuthProvider.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/AuthProvider.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$MsalProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MsalProvider"], {
        instance: msalInstance,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/AuthProvider.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dd9ad621._.js.map