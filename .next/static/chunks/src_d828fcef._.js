(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/CartContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartProvider": (()=>CartProvider),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function cartReducer(state, action) {
    switch(action.type){
        case 'ADD_ITEM':
            {
                const { product, quantity, size, color } = action.payload;
                const existingItemIndex = state.items.findIndex((item)=>item.product.id === product.id && item.size === size && item.color === color);
                let newItems;
                if (existingItemIndex > -1) {
                    newItems = state.items.map((item, index)=>index === existingItemIndex ? {
                            ...item,
                            quantity: item.quantity + quantity
                        } : item);
                } else {
                    newItems = [
                        ...state.items,
                        {
                            product,
                            quantity,
                            size,
                            color
                        }
                    ];
                }
                const total = newItems.reduce((sum, item)=>sum + item.product.price * item.quantity, 0);
                return {
                    items: newItems,
                    total
                };
            }
        case 'REMOVE_ITEM':
            {
                const newItems = state.items.filter((item)=>item.product.id !== action.payload);
                const total = newItems.reduce((sum, item)=>sum + item.product.price * item.quantity, 0);
                return {
                    items: newItems,
                    total
                };
            }
        case 'UPDATE_QUANTITY':
            {
                const { productId, quantity } = action.payload;
                if (quantity <= 0) {
                    const newItems = state.items.filter((item)=>item.product.id !== productId);
                    const total = newItems.reduce((sum, item)=>sum + item.product.price * item.quantity, 0);
                    return {
                        items: newItems,
                        total
                    };
                }
                const newItems = state.items.map((item)=>item.product.id === productId ? {
                        ...item,
                        quantity
                    } : item);
                const total = newItems.reduce((sum, item)=>sum + item.product.price * item.quantity, 0);
                return {
                    items: newItems,
                    total
                };
            }
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0
            };
        case 'LOAD_CART':
            {
                const total = action.payload.reduce((sum, item)=>sum + item.product.price * item.quantity, 0);
                return {
                    items: action.payload,
                    total
                };
            }
        default:
            return state;
    }
}
function CartProvider({ children }) {
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, {
        items: [],
        total: 0
    });
    // Load cart from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const savedCart = localStorage.getItem('fashion-cart');
            if (savedCart) {
                try {
                    const cartItems = JSON.parse(savedCart);
                    dispatch({
                        type: 'LOAD_CART',
                        payload: cartItems
                    });
                } catch (error) {
                    console.error('Error loading cart from localStorage:', error);
                }
            }
        }
    }["CartProvider.useEffect"], []);
    // Save cart to localStorage whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            localStorage.setItem('fashion-cart', JSON.stringify(state.items));
        }
    }["CartProvider.useEffect"], [
        state.items
    ]);
    const addToCart = (product, quantity, size, color)=>{
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                product,
                quantity,
                size,
                color
            }
        });
    };
    const removeFromCart = (productId)=>{
        dispatch({
            type: 'REMOVE_ITEM',
            payload: productId
        });
    };
    const updateQuantity = (productId, quantity)=>{
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: {
                productId,
                quantity
            }
        });
    };
    const clearCart = ()=>{
        dispatch({
            type: 'CLEAR_CART'
        });
    };
    const getItemCount = ()=>{
        return state.items.reduce((count, item)=>count + item.quantity, 0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            state,
            dispatch,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getItemCount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/CartContext.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "NyO79qdj8A98++kurZehvYJy5Lk=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)"
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d828fcef._.js.map