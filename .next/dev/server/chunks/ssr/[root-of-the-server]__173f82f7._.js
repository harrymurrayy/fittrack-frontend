module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/hooks/useMsal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Navigation() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { instance, accounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMsal"])();
    const isAuthenticated = accounts.length > 0;
    const user = accounts[0];
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLogout = async ()=>{
        try {
            await instance.logoutRedirect({
                postLogoutRedirectUri: "http://localhost:3000/signin"
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 glass border-b border-[var(--border-subtle)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center transition-transform group-hover:scale-105",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-black font-bold text-lg",
                                        children: "F"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold tracking-tight",
                                    children: [
                                        "Fit",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "accent-text",
                                            children: "Track"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 45,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-1",
                            children: navLinks.map((link)=>{
                                const isActive = pathname === link.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-[var(--accent-muted)] text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, this),
                                        link.label
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 55,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-default)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-[var(--accent)]",
                                                children: user?.name?.charAt(0) || user?.username?.charAt(0) || "U"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-[var(--text-secondary)]",
                                            children: user?.name || user?.username
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "btn btn-ghost text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutIcon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        "Sign Out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                            className: "md:hidden p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MenuIcon, {
                                className: "w-5 h-5 text-[var(--text-secondary)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            isAuthenticated && mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t border-[var(--border-subtle)] animate-fade-in-down",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 space-y-1",
                    children: [
                        navLinks.map((link)=>{
                            const isActive = pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: ()=>setMobileMenuOpen(false),
                                className: `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-[var(--accent-muted)] text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this),
                                    link.label
                                ]
                            }, link.href, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 mt-3 border-t border-[var(--border-subtle)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-4 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-default)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-[var(--accent)]",
                                                children: user?.name?.charAt(0) || user?.username?.charAt(0) || "U"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-[var(--text-secondary)]",
                                            children: user?.name || user?.username
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoutIcon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this),
                                        "Sign Out"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
// Icons
function HomeIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
function DumbbellIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 7h2m12 0h2M6 7v10M18 7v10M8 7h8M8 17h8M9 7v10M15 7v10"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
function CameraIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
function LogoutIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function MenuIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 6h16M4 12h16M4 18h16"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/services/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/lib/authConfig.ts [app-ssr] (ecmascript)");
;
;
const API_BASE = "https://fittrack-api-hm-a4bde4egfffuczdz.italynorth-01.azurewebsites.net/api";
// Initialize MSAL to get tokens
const msalInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$browser$2f$dist$2f$app$2f$PublicClientApplication$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicClientApplication"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["msalConfig"]);
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$lib$2f$authConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginRequest"],
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
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/services/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function PhotoUpload({ onPhotoUploaded }) {
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [weight, setWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split("T")[0]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileChange = (selectedFile)=>{
        if (selectedFile) {
            if (!selectedFile.type.startsWith("image/")) {
                alert("Please select an image file");
                return;
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                alert("File size must be less than 5MB");
                return;
            }
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const handleDrag = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(e.dataTransfer.files[0]);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!file) {
            alert("Please select a photo");
            return;
        }
        try {
            setUploading(true);
            const photoData = {
                file,
                weight: weight ? parseFloat(weight) : undefined,
                notes,
                takenAt: date
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].uploadPhoto(photoData);
            setFile(null);
            setPreview(null);
            setWeight("");
            setNotes("");
            setDate(new Date().toISOString().split("T")[0]);
            onPhotoUploaded();
        } catch (error) {
            console.error("Upload failed:", error);
            alert("Failed to upload photo");
        } finally{
            setUploading(false);
        }
    };
    const clearFile = ()=>{
        setFile(null);
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "card overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-[var(--border-subtle)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadIcon, {
                                className: "w-5 h-5 text-[var(--accent)]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-[var(--text-primary)]",
                                    children: "Upload Photo"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-[var(--text-muted)]",
                                    children: "Add a new progress photo to your collection"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "label",
                                children: "Photo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            !preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${dragActive ? "border-[var(--accent)] bg-[var(--accent-muted)]" : "border-[var(--border-default)] hover:border-[var(--border-hover)]"}`,
                                onDragEnter: handleDrag,
                                onDragLeave: handleDrag,
                                onDragOver: handleDrag,
                                onDrop: handleDrop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: fileInputRef,
                                        type: "file",
                                        accept: "image/*",
                                        onChange: (e)=>handleFileChange(e.target.files?.[0] || null),
                                        className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageIcon, {
                                            className: "w-7 h-7 text-[var(--text-muted)]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[var(--text-primary)] font-medium mb-1",
                                        children: [
                                            "Drop your image here, or",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--accent)]",
                                                children: "browse"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--text-muted)]",
                                        children: "PNG, JPG, JPEG up to 5MB"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: preview,
                                        alt: "Preview",
                                        className: "w-full max-h-[400px] object-contain rounded-xl border border-[var(--border-subtle)]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: clearFile,
                                        className: "absolute top-3 right-3 w-8 h-8 rounded-lg bg-[var(--bg-primary)]/80 backdrop-blur flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-[var(--bg-primary)]/80 backdrop-blur",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[var(--text-secondary)]",
                                            children: file?.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "label",
                                        children: "Date Taken"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: date,
                                        onChange: (e)=>setDate(e.target.value),
                                        className: "input",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "label",
                                        children: "Weight (kg) — Optional"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "0.1",
                                        value: weight,
                                        onChange: (e)=>setWeight(e.target.value),
                                        placeholder: "75.5",
                                        className: "input"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "label",
                                children: "Notes — Optional"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: notes,
                                onChange: (e)=>setNotes(e.target.value),
                                placeholder: "Add notes about your progress...",
                                rows: 3,
                                className: "textarea"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: !file || uploading,
                    className: "btn btn-primary w-full sm:w-auto",
                    children: uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spinner spinner-sm"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this),
                            "Uploading..."
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadIcon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this),
                            "Upload Photo"
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
// Icons
function UploadIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
            lineNumber: 249,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
function ImageIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
            lineNumber: 257,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
function XIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
            lineNumber: 265,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function PhotoGallery({ photos, onPhotoDeleted }) {
    const [selectedPhoto, setSelectedPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };
    const handleDelete = async (photoId)=>{
        if (!confirm("Are you sure you want to delete this photo?")) {
            return;
        }
        try {
            setDeleting(true);
            // TODO: Implement delete API call
            // await api.deletePhoto(photoId);
            alert("Delete functionality coming soon!");
            onPhotoDeleted();
        } catch (error) {
            console.error("Failed to delete photo:", error);
            alert("Failed to delete photo");
        } finally{
            setDeleting(false);
        }
    };
    // Sort photos by date (newest first)
    const sortedPhotos = [
        ...photos
    ].sort((a, b)=>new Date(b.takenAt).getTime() - new Date(a.takenAt).getTime());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger-children",
                children: sortedPhotos.map((photo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedPhoto(photo),
                        className: "group relative aspect-square rounded-xl overflow-hidden bg-[var(--bg-tertiary)] card-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: photo.blobUrl,
                                alt: `Progress photo from ${formatDate(photo.takenAt)}`,
                                className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white font-medium text-sm",
                                            children: formatDate(photo.takenAt)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        photo.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/70 text-xs mt-0.5",
                                            children: [
                                                photo.weight,
                                                " kg"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-1 rounded-md bg-black/60 backdrop-blur text-white text-xs font-medium",
                                    children: formatDate(photo.takenAt)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, photo.id, true, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            selectedPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",
                onClick: ()=>setSelectedPhoto(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/90 backdrop-blur-sm"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-4xl max-h-[90vh] flex flex-col animate-scale-in",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPhoto(null),
                                className: "absolute -top-12 right-0 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 min-h-0 rounded-t-2xl overflow-hidden bg-[var(--bg-secondary)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: selectedPhoto.blobUrl,
                                    alt: "Progress photo",
                                    className: "w-full h-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[var(--bg-card)] rounded-b-2xl border-t border-[var(--border-subtle)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 grid grid-cols-2 sm:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1",
                                                        children: "Date Taken"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-[var(--text-primary)]",
                                                        children: formatDate(selectedPhoto.takenAt)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            selectedPhoto.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1",
                                                        children: "Weight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-[var(--text-primary)]",
                                                        children: [
                                                            selectedPhoto.weight,
                                                            " kg"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1",
                                                        children: "Uploaded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-[var(--text-primary)]",
                                                        children: formatDate(selectedPhoto.uploadedAt)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            selectedPhoto.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 sm:col-span-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1",
                                                        children: "Notes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[var(--text-secondary)] text-sm line-clamp-2",
                                                        children: selectedPhoto.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 pb-6 flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>window.open(selectedPhoto.blobUrl, "_blank"),
                                                className: "btn btn-secondary flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExternalLinkIcon, {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Open Original"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(selectedPhoto.id),
                                                disabled: deleting,
                                                className: "btn btn-danger flex-1",
                                                children: deleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "spinner spinner-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Deleting..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrashIcon, {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Delete"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
// Icons
function XIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
            lineNumber: 215,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
function ExternalLinkIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
            lineNumber: 223,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
function TrashIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/@azure/msal-react/dist/hooks/useMsal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProtectedRoute({ children }) {
    const { accounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f40$azure$2f$msal$2d$react$2f$dist$2f$hooks$2f$useMsal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMsal"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isAuthenticated = accounts.length > 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAuthenticated) {
            router.push("/signin");
        }
    }, [
        isAuthenticated,
        router
    ]);
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-2xl bg-[var(--accent)] flex items-center justify-center mx-auto mb-6 animate-pulse-glow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spinner mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$PhotoUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoUpload.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$PhotoGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/PhotoGallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/components/ProtectedRoute.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function PhotosPage() {
    const [photos, setPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showUpload, setShowUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadPhotos();
    }, []);
    const loadPhotos = async ()=>{
        try {
            setLoading(true);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getPhotos();
            setPhotos(data);
        } catch (error) {
            console.error("Failed to load photos:", error);
        } finally{
            setLoading(false);
        }
    };
    const handlePhotoUploaded = ()=>{
        setShowUpload(false);
        loadPhotos();
    };
    const handlePhotoDeleted = ()=>{
        loadPhotos();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]",
                                            children: "Progress Photos"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[var(--text-secondary)] mt-1",
                                            children: "Document your fitness transformation"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUpload(!showUpload),
                                    className: `btn ${showUpload ? "btn-secondary" : "btn-primary"}`,
                                    children: showUpload ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this),
                                            "Cancel"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraIcon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            "Upload Photo"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        showUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 animate-fade-in-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$PhotoUpload$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onPhotoUploaded: handlePhotoUploaded
                            }, void 0, false, {
                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl bg-[var(--accent-muted)] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageIcon, {
                                                className: "w-5 h-5 text-[var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-semibold text-[var(--text-primary)]",
                                                    children: "Your Photos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[var(--text-muted)]",
                                                    children: [
                                                        photos.length,
                                                        " ",
                                                        photos.length === 1 ? "photo" : "photos",
                                                        " in your collection"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                                    children: [
                                        ...Array(8)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square skeleton rounded-xl"
                                        }, i, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this) : photos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card p-12 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraIcon, {
                                                className: "w-8 h-8 text-[var(--text-muted)]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-[var(--text-primary)] mb-2",
                                            children: "No progress photos yet"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[var(--text-secondary)] mb-6 max-w-sm mx-auto",
                                            children: "Start documenting your fitness journey by uploading your first progress photo"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowUpload(true),
                                            className: "btn btn-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraIcon, {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                "Upload First Photo"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$src$2f$components$2f$PhotoGallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    photos: photos,
                                    onPhotoDeleted: handlePhotoDeleted
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
// Icons
function CameraIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            }, void 0, false, {
                fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
function XIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
function ImageIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$uni$2f$COM682$2f$frontend$2f$fittrack$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        }, void 0, false, {
            fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/uni/COM682/frontend/fittrack-frontend/src/app/photos/page.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__173f82f7._.js.map