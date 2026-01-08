(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignInPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/hooks/useMsal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/lib/authConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SignInPage() {
    _s();
    const { instance, accounts, inProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMsal"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isAuthenticated = accounts.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignInPage.useEffect": ()=>{
            if (isAuthenticated) {
                router.push("/");
            }
        }
    }["SignInPage.useEffect"], [
        isAuthenticated,
        router
    ]);
    const handleLogin = async ()=>{
        try {
            await instance.loginRedirect(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginRequest"]);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };
    if (inProgress === "login") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--text-secondary)]",
                        children: "Signing in..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.02] blur-[120px] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center px-4 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-10 animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)] mb-6 animate-pulse-glow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-black font-bold text-3xl",
                                        children: "F"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold tracking-tight mb-3",
                                    children: [
                                        "Fit",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "accent-text",
                                            children: "Track"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[var(--text-secondary)] text-lg",
                                    children: "Track your fitness journey"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card p-8 animate-fade-in-up",
                            style: {
                                animationDelay: "100ms"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 mb-8 stagger-children",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DumbbellIcon, {}, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 23
                                            }, void 0),
                                            title: "Log Workouts",
                                            description: "Track exercises, sets, reps, and weights"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraIcon, {}, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 23
                                            }, void 0),
                                            title: "Progress Photos",
                                            description: "Document your physical transformation"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudIcon, {}, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 23
                                            }, void 0),
                                            title: "Cloud Sync",
                                            description: "Your data safely stored in Azure"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogin,
                                    className: "btn btn-primary w-full text-base py-3.5 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicrosoftIcon, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Sign in with Microsoft"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {
                                            className: "w-4 h-4 transition-transform group-hover:translate-x-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-sm text-[var(--text-muted)] mt-6",
                                    children: "Secured by Azure Entra ID"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm text-[var(--text-muted)] mt-8 animate-fade-in",
                            style: {
                                animationDelay: "300ms"
                            },
                            children: "By signing in, you agree to our Terms of Service"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(SignInPage, "il6gGgmeC6udxFu+JgAPi81VJ5Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMsal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignInPage;
// Feature Item Component
function FeatureItem({ icon, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)]",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-[var(--text-primary)] mb-0.5",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[var(--text-secondary)]",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c1 = FeatureItem;
// Icons
function DumbbellIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c2 = DumbbellIcon;
function CameraIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c3 = CameraIcon;
function CloudIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "w-5 h-5",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_c4 = CloudIcon;
function MicrosoftIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 21 21",
        fill: "currentColor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "1",
                width: "9",
                height: "9"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "11",
                y: "1",
                width: "9",
                height: "9"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "11",
                width: "9",
                height: "9"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "11",
                y: "11",
                width: "9",
                height: "9"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c5 = MicrosoftIcon;
function ArrowIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 8l4 4m0 0l-4 4m4-4H3"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/signin/page.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c6 = ArrowIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "SignInPage");
__turbopack_context__.k.register(_c1, "FeatureItem");
__turbopack_context__.k.register(_c2, "DumbbellIcon");
__turbopack_context__.k.register(_c3, "CameraIcon");
__turbopack_context__.k.register(_c4, "CloudIcon");
__turbopack_context__.k.register(_c5, "MicrosoftIcon");
__turbopack_context__.k.register(_c6, "ArrowIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_uni_COM682_frontend_fittrack-frontend_715326a4._.js.map