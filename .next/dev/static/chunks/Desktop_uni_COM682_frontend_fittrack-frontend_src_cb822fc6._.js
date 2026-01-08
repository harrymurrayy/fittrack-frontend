(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/hooks/useMsal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navigation() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { instance, accounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMsal"])();
    const isAuthenticated = accounts.length > 0;
    const user = accounts[0];
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            const redirectUri = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REDIRECT_URI || "http://localhost:3000";
            await instance.logoutRedirect({
                postLogoutRedirectUri: `${redirectUri}/signin`
            });
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    const navLinks = [
        {
            href: "/",
            label: "Home",
            icon: HomeIcon
        },
        {
            href: "/workouts",
            label: "Workouts",
            icon: DumbbellIcon
        },
        {
            href: "/photos",
            label: "Progress",
            icon: CameraIcon
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 glass border-b border-[var(--border-subtle)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center transition-transform group-hover:scale-105",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-black font-bold text-lg",
                                        children: "F"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold tracking-tight",
                                    children: [
                                        "Fit",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "accent-text",
                                            children: "Track"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 44,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-1",
                            children: navLinks.map((link)=>{
                                const isActive = pathname === link.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-[var(--accent-muted)] text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 63,
                                            columnNumber: 21
                                        }, this),
                                        link.label
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 54,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-default)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-[var(--accent)]",
                                                children: user?.name?.charAt(0) || user?.username?.charAt(0) || "U"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-[var(--text-secondary)]",
                                            children: user?.name || user?.username
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "btn btn-ghost text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutIcon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        "Sign Out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuIcon, {
                                className: "w-5 h-5 text-[var(--text-secondary)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            isAuthenticated && mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-[var(--border-subtle)] animate-fade-in-down",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 space-y-1",
                    children: [
                        navLinks.map((link)=>{
                            const isActive = pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: ()=>setMobileMenuOpen(false),
                                className: `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-[var(--accent-muted)] text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    link.label
                                ]
                            }, link.href, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 mt-3 border-t border-[var(--border-subtle)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-4 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-default)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-[var(--accent)]",
                                                children: user?.name?.charAt(0) || user?.username?.charAt(0) || "U"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-[var(--text-secondary)]",
                                            children: user?.name || user?.username
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutIcon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        "Sign Out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Navigation, "f+6IuIRB9oMbfG5i8mZy6bPwDWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMsal"]
    ];
});
_c = Navigation;
// Icons
function HomeIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c1 = HomeIcon;
function DumbbellIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_c2 = DumbbellIcon;
function CameraIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
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
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c3 = CameraIcon;
function LogoutIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 220,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_c4 = LogoutIcon;
function MenuIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 6h16M4 12h16M4 18h16"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 238,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_c5 = MenuIcon;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Navigation");
__turbopack_context__.k.register(_c1, "HomeIcon");
__turbopack_context__.k.register(_c2, "DumbbellIcon");
__turbopack_context__.k.register(_c3, "CameraIcon");
__turbopack_context__.k.register(_c4, "LogoutIcon");
__turbopack_context__.k.register(_c5, "MenuIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/lib/authConfig.ts [app-client] (ecmascript)");
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api";
// Initialize MSAL to get tokens
const msalInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicClientApplication"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["msalConfig"]);
// Initialize the instance once
let isInitialized = false;
async function ensureInitialized() {
    if (!isInitialized) {
        await msalInstance.initialize();
        isInitialized = true;
    }
}
// Helper to get access token
async function getAccessToken() {
    await ensureInitialized();
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length === 0) {
        throw new Error("No authenticated user");
    }
    try {
        const response = await msalInstance.acquireTokenSilent({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginRequest"],
            account: accounts[0]
        });
        return response.accessToken;
    } catch (error) {
        console.error("Token acquisition failed:", error);
        throw error;
    }
}
// Helper to get user ID from token
async function getUserIdFromToken() {
    await ensureInitialized();
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length === 0) {
        throw new Error("No authenticated user");
    }
    // Use the unique object ID from Azure AD as userId
    return accounts[0].localAccountId;
}
const api = {
    // Get all muscle groups
    async getMuscleGroups () {
        const token = await getAccessToken();
        const response = await fetch(`${API_BASE}/musclegroups`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error("Failed to fetch muscle groups");
        return response.json();
    },
    // Get exercises (optionally filtered by muscle group)
    async getExercises (muscleGroupId) {
        const token = await getAccessToken();
        const url = muscleGroupId ? `${API_BASE}/exercises?muscleGroupId=${muscleGroupId}` : `${API_BASE}/exercises`;
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error("Failed to fetch exercises");
        return response.json();
    },
    // Get workouts for user
    async getWorkouts () {
        const token = await getAccessToken();
        const userId = await getUserIdFromToken();
        const response = await fetch(`${API_BASE}/workouts?userId=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error("Failed to fetch workouts");
        return response.json();
    },
    // Create new workout
    async createWorkout (workout) {
        const token = await getAccessToken();
        const userId = await getUserIdFromToken();
        const response = await fetch(`${API_BASE}/workouts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                ...workout,
                userId
            })
        });
        if (!response.ok) throw new Error("Failed to create workout");
        return response.json();
    },
    // Upload photo
    async uploadPhoto (photoData) {
        const token = await getAccessToken();
        const userId = await getUserIdFromToken();
        const formData = new FormData();
        formData.append("file", photoData.file);
        formData.append("userId", userId);
        formData.append("takenAt", photoData.takenAt);
        if (photoData.weight) {
            formData.append("weight", photoData.weight.toString());
        }
        if (photoData.notes) {
            formData.append("notes", photoData.notes);
        }
        const response = await fetch(`${API_BASE}/photos`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });
        if (!response.ok) throw new Error("Failed to upload photo");
        return response.json();
    },
    // Get user's photos
    async getPhotos () {
        const token = await getAccessToken();
        const userId = await getUserIdFromToken();
        const response = await fetch(`${API_BASE}/photos?userId=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error("Failed to fetch photos");
        return response.json();
    },
    // Delete photo
    async deletePhoto (photoId) {
        const token = await getAccessToken();
        const response = await fetch(`${API_BASE}/photos/${photoId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) throw new Error("Failed to delete photo");
        return response.json();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkoutForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/services/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WorkoutForm({ onSuccess }) {
    _s();
    const [muscleGroups, setMuscleGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [exercises, setExercises] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionDate, setSessionDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sessionName, setSessionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [workoutExercises, setWorkoutExercises] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkoutForm.useEffect": ()=>{
            loadData();
        }
    }["WorkoutForm.useEffect"], []);
    async function loadData() {
        try {
            const [mgData, exData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getMuscleGroups(),
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getExercises()
            ]);
            setMuscleGroups(mgData);
            setExercises(exData);
            setLoading(false);
        } catch (error) {
            console.error("Error loading data:", error);
            alert("Failed to load exercise data");
        }
    }
    function addExercise() {
        setWorkoutExercises([
            ...workoutExercises,
            {
                muscleGroupId: "",
                exerciseId: "",
                sets: [
                    {
                        reps: 10,
                        weightKg: 20
                    }
                ]
            }
        ]);
    }
    function removeExercise(index) {
        setWorkoutExercises(workoutExercises.filter((_, i)=>i !== index));
    }
    function updateExercise(index, field, value) {
        const updated = [
            ...workoutExercises
        ];
        updated[index][field] = value;
        setWorkoutExercises(updated);
    }
    function addSet(exerciseIndex) {
        const updated = [
            ...workoutExercises
        ];
        updated[exerciseIndex].sets.push({
            reps: 10,
            weightKg: 20
        });
        setWorkoutExercises(updated);
    }
    function updateSet(exerciseIndex, setIndex, field, value) {
        const updated = [
            ...workoutExercises
        ];
        updated[exerciseIndex].sets[setIndex][field] = value;
        setWorkoutExercises(updated);
    }
    function removeSet(exerciseIndex, setIndex) {
        const updated = [
            ...workoutExercises
        ];
        updated[exerciseIndex].sets = updated[exerciseIndex].sets.filter((_, i)=>i !== setIndex);
        setWorkoutExercises(updated);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!sessionDate || workoutExercises.length === 0) {
            alert("Please add date and at least one exercise");
            return;
        }
        const payload = {
            takenAt: new Date(sessionDate).toISOString(),
            name: sessionName || "Workout Session",
            notes: "",
            exercises: workoutExercises.map((ex)=>{
                const exercise = exercises.find((e)=>e.exerciseId === Number(ex.exerciseId));
                return {
                    exerciseId: Number(ex.exerciseId),
                    muscleGroupId: Number(ex.muscleGroupId),
                    freeTextName: exercise?.exerciseName || "",
                    sets: ex.sets.map((s, i)=>({
                            set: i + 1,
                            reps: Number(s.reps),
                            weightKg: Number(s.weightKg)
                        })),
                    notes: ""
                };
            })
        };
        try {
            setSubmitting(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createWorkout(payload);
            setSessionDate("");
            setSessionName("");
            setWorkoutExercises([]);
            onSuccess();
        } catch (error) {
            console.error("Error saving workout:", error);
            alert("Failed to save workout");
        } finally{
            setSubmitting(false);
        }
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner spinner-sm"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[var(--text-secondary)]",
                        children: "Loading exercises..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    const getFilteredExercises = (muscleGroupId)=>{
        return exercises.filter((ex)=>ex.muscleGroupId === Number(muscleGroupId));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "card overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-[var(--border-subtle)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusCircleIcon, {
                                className: "w-5 h-5 text-[var(--accent)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-[var(--text-primary)]",
                                    children: "New Workout"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-muted)]",
                                    children: "Log your exercises and sets"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "label",
                                        children: [
                                            "Date & Time ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--error)]",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                lineNumber: 166,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "datetime-local",
                                        value: sessionDate,
                                        onChange: (e)=>setSessionDate(e.target.value),
                                        className: "input",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "label",
                                        children: "Session Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: sessionName,
                                        onChange: (e)=>setSessionName(e.target.value),
                                        placeholder: "e.g., Push Day, Leg Day",
                                        className: "input"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "label mb-0",
                                        children: [
                                            "Exercises ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--error)]",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                lineNumber: 192,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-[var(--text-muted)]",
                                        children: [
                                            workoutExercises.length,
                                            " added"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            workoutExercises.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed border-[var(--border-default)] rounded-xl p-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DumbbellIcon, {
                                        className: "w-10 h-10 text-[var(--text-muted)] mx-auto mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[var(--text-secondary)] mb-4",
                                        children: "No exercises added yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: addExercise,
                                        className: "btn btn-secondary",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            "Add Exercise"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    workoutExercises.map((ex, exIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-bold text-[var(--accent)]",
                                                                        children: exIndex + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-[var(--text-primary)]",
                                                                    children: [
                                                                        "Exercise ",
                                                                        exIndex + 1
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeExercise(exIndex),
                                                            className: "p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--error)] hover:bg-[var(--bg-tertiary)] transition-colors",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                lineNumber: 238,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid sm:grid-cols-2 gap-4 mb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "label",
                                                                    children: "Muscle Group"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: ex.muscleGroupId,
                                                                    onChange: (e)=>{
                                                                        updateExercise(exIndex, "muscleGroupId", e.target.value);
                                                                        updateExercise(exIndex, "exerciseId", "");
                                                                    },
                                                                    className: "select",
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Select muscle group"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                            lineNumber: 255,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        muscleGroups.map((mg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: mg.muscleGroupId,
                                                                                children: mg.muscleGroupName
                                                                            }, mg.muscleGroupId, false, {
                                                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                lineNumber: 257,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "label",
                                                                    children: "Exercise"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: ex.exerciseId,
                                                                    onChange: (e)=>updateExercise(exIndex, "exerciseId", e.target.value),
                                                                    className: "select",
                                                                    disabled: !ex.muscleGroupId,
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: ex.muscleGroupId ? "Select exercise" : "Select muscle group first"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                            lineNumber: 275,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        getFilteredExercises(ex.muscleGroupId).map((exercise)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: exercise.exerciseId,
                                                                                children: exercise.exerciseName
                                                                            }, exercise.exerciseId, false, {
                                                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                lineNumber: 279,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-medium text-[var(--text-secondary)]",
                                                                    children: "Sets"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>addSet(exIndex),
                                                                    className: "text-sm font-medium text-[var(--accent)] hover:underline flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                            lineNumber: 298,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Add Set"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-[50px_1fr_1fr_40px] gap-2 text-xs font-medium text-[var(--text-muted)] px-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "SET"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                            lineNumber: 306,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "REPS"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                            lineNumber: 307,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "WEIGHT (KG)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                            lineNumber: 308,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                            lineNumber: 309,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ex.sets.map((set, setIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-[50px_1fr_1fr_40px] gap-2 items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 rounded-md bg-[var(--bg-tertiary)] flex items-center justify-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-medium text-[var(--text-muted)]",
                                                                                    children: setIndex + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                    lineNumber: 318,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                lineNumber: 317,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                value: set.reps,
                                                                                onChange: (e)=>updateSet(exIndex, setIndex, "reps", Number(e.target.value)),
                                                                                placeholder: "Reps",
                                                                                className: "input py-2",
                                                                                min: "1",
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                lineNumber: 322,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                value: set.weightKg,
                                                                                onChange: (e)=>updateSet(exIndex, setIndex, "weightKg", Number(e.target.value)),
                                                                                placeholder: "Weight",
                                                                                className: "input py-2",
                                                                                min: "0",
                                                                                step: "0.5",
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                lineNumber: 333,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeSet(exIndex, setIndex),
                                                                                className: "w-8 h-8 rounded-md flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--error)] hover:bg-[var(--bg-tertiary)] transition-colors",
                                                                                disabled: ex.sets.length === 1,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                    lineNumber: 351,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                                lineNumber: 345,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, setIndex, true, {
                                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, exIndex, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: addExercise,
                                        className: "w-full p-4 border-2 border-dashed border-[var(--border-default)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                                lineNumber: 366,
                                                columnNumber: 17
                                            }, this),
                                            "Add Another Exercise"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: submitting || workoutExercises.length === 0,
                    className: "btn btn-primary w-full sm:w-auto",
                    children: submitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spinner spinner-sm"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 383,
                                columnNumber: 15
                            }, this),
                            "Saving..."
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckIcon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this),
                            "Save Workout"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(WorkoutForm, "GY+ZCrOgTIUCtMTXepBYhXfgZ+I=");
_c = WorkoutForm;
// Icons
function PlusCircleIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
            lineNumber: 402,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_c1 = PlusCircleIcon;
function PlusIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2.5,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4v16m8-8H4"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
            lineNumber: 410,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
        lineNumber: 409,
        columnNumber: 5
    }, this);
}
_c2 = PlusIcon;
function DumbbellIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
            lineNumber: 418,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
        lineNumber: 417,
        columnNumber: 5
    }, this);
}
_c3 = DumbbellIcon;
function TrashIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
_c4 = TrashIcon;
function XIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
            lineNumber: 434,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_c5 = XIcon;
function CheckIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5 13l4 4L19 7"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
            lineNumber: 442,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx",
        lineNumber: 441,
        columnNumber: 5
    }, this);
}
_c6 = CheckIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "WorkoutForm");
__turbopack_context__.k.register(_c1, "PlusCircleIcon");
__turbopack_context__.k.register(_c2, "PlusIcon");
__turbopack_context__.k.register(_c3, "DumbbellIcon");
__turbopack_context__.k.register(_c4, "TrashIcon");
__turbopack_context__.k.register(_c5, "XIcon");
__turbopack_context__.k.register(_c6, "CheckIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/hooks/useMsal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProtectedRoute({ children }) {
    _s();
    const { accounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMsal"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isAuthenticated = accounts.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProtectedRoute.useEffect": ()=>{
            if (!isAuthenticated) {
                router.push("/signin");
            }
        }
    }["ProtectedRoute.useEffect"], [
        isAuthenticated,
        router
    ]);
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 animate-pulse-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-black font-bold text-2xl",
                            children: "F"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[var(--text-secondary)]",
                        children: "Checking authentication..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ProtectedRoute, "c32+GF/zYN3jn+5Yz/PZA/ukC9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMsal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkoutsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$WorkoutForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/WorkoutForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function WorkoutsPage() {
    _s();
    const [workouts, setWorkouts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkoutsPage.useEffect": ()=>{
            loadWorkouts();
        }
    }["WorkoutsPage.useEffect"], []);
    async function loadWorkouts() {
        try {
            setLoading(true);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getWorkouts();
            setWorkouts(data);
        } catch (error) {
            console.error("Error loading workouts:", error);
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]",
                                            children: "Workouts"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[var(--text-secondary)] mt-1",
                                            children: "Track and log your gym sessions"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowForm(!showForm),
                                    className: `btn ${showForm ? "btn-secondary" : "btn-primary"}`,
                                    children: showForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this),
                                            "Cancel"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this),
                                            "New Workout"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 animate-fade-in-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$WorkoutForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onSuccess: ()=>{
                                    setShowForm(false);
                                    loadWorkouts();
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HistoryIcon, {
                                                className: "w-5 h-5 text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold text-[var(--text-primary)]",
                                                    children: "Workout History"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-muted)]",
                                                    children: [
                                                        workouts.length,
                                                        " ",
                                                        workouts.length === 1 ? "session" : "sessions",
                                                        " logged"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        ...Array(3)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "skeleton h-6 w-40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "skeleton h-5 w-24"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "skeleton h-4 w-32"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "skeleton h-4 w-28"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this) : workouts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card p-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DumbbellIcon, {
                                                className: "w-8 h-8 text-[var(--text-muted)]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-[var(--text-primary)] mb-2",
                                            children: "No workouts yet"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[var(--text-secondary)] mb-6 max-w-sm mx-auto",
                                            children: "Start tracking your gym sessions to see your progress over time"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowForm(true),
                                            className: "btn btn-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                "Create First Workout"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 stagger-children",
                                    children: workouts.map((workout)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkoutCard, {
                                            workout: workout
                                        }, workout.id, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(WorkoutsPage, "1lwRcFMxjDC56n6IdtyDkemdH/Y=");
_c = WorkoutsPage;
// Workout Card Component
function WorkoutCard({ workout }) {
    _s1();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };
    const formatTime = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const totalSets = workout.exercises?.reduce((acc, ex)=>acc + (ex.sets?.length || 0), 0) || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(!expanded),
                className: "w-full p-6 text-left hover:bg-[var(--bg-card-hover)] transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DumbbellIcon, {
                                        className: "w-6 h-6 text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-[var(--text-primary)]",
                                            children: workout.name || "Workout Session"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-sm text-[var(--text-secondary)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: formatDate(workout.takenAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[var(--text-muted)]",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: formatTime(workout.takenAt)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-[var(--text-primary)]",
                                                    children: workout.exercises?.length || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--text-muted)]",
                                                    children: "exercises"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-[var(--text-primary)]",
                                                    children: totalSets
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[var(--text-muted)]",
                                                    children: "sets"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronIcon, {
                                    className: `w-5 h-5 text-[var(--text-muted)] transition-transform ${expanded ? "rotate-180" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            expanded && workout.exercises && workout.exercises.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[var(--border-subtle)] p-6 bg-[var(--bg-secondary)] animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: workout.exercises.map((ex, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-[var(--text-muted)]",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-[var(--text-primary)]",
                                            children: ex.freeTextName || "Unknown Exercise"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 mt-2",
                                            children: ex.sets?.map((set, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge",
                                                    children: [
                                                        set.reps,
                                                        " × ",
                                                        set.weightKg,
                                                        "kg"
                                                    ]
                                                }, j, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                            lineNumber: 217,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s1(WorkoutCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c1 = WorkoutCard;
// Icons
function PlusIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4v16m8-8H4"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_c2 = PlusIcon;
function XIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_c3 = XIcon;
function DumbbellIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
            lineNumber: 264,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
_c4 = DumbbellIcon;
function HistoryIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
            lineNumber: 272,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_c5 = HistoryIcon;
function ChevronIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 9l-7 7-7-7"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/workouts/page.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_c6 = ChevronIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "WorkoutsPage");
__turbopack_context__.k.register(_c1, "WorkoutCard");
__turbopack_context__.k.register(_c2, "PlusIcon");
__turbopack_context__.k.register(_c3, "XIcon");
__turbopack_context__.k.register(_c4, "DumbbellIcon");
__turbopack_context__.k.register(_c5, "HistoryIcon");
__turbopack_context__.k.register(_c6, "ChevronIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_uni_COM682_frontend_fittrack-frontend_src_cb822fc6._.js.map