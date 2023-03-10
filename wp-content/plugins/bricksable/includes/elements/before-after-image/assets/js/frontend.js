! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("ImageCompare", [], e) : "object" == typeof exports ? exports.ImageCompare = e() : t.ImageCompare = e()
}(window, function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) n.d(r, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 102)
    }([function(t, e, n) {
        var r = n(1),
            o = n(14),
            i = n(29),
            a = n(46),
            c = r.Symbol,
            s = o("wks");
        t.exports = function(t) {
            return s[t] || (s[t] = a && c[t] || (a ? c : i)("Symbol." + t))
        }
    }, function(t, e, n) {
        (function(e) {
            var n = function(t) {
                return t && t.Math == Math && t
            };
            t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
        }).call(this, n(62))
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(23).f,
            i = n(5),
            a = n(11),
            c = n(28),
            s = n(41),
            u = n(67);
        t.exports = function(t, e) {
            var n, f, l, p, d, v = t.target,
                h = t.global,
                g = t.stat;
            if (n = h ? r : g ? r[v] || c(v, {}) : (r[v] || {}).prototype)
                for (f in e) {
                    if (p = e[f], l = t.noTargetGet ? (d = o(n, f)) && d.value : n[f], !u(h ? f : v + (g ? "." : "#") + f, t.forced) && void 0 !== l) {
                        if (typeof p == typeof l) continue;
                        s(p, l)
                    }(t.sham || l && l.sham) && i(p, "sham", !0), a(n, f, p, t)
                }
        }
    }, function(t, e, n) {
        var r = n(8),
            o = n(9),
            i = n(13);
        t.exports = r ? function(t, e, n) {
            return o.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e, n) {
        var r = n(6);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object");
            return t
        }
    }, function(t, e, n) {
        var r = n(2);
        t.exports = !r(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(8),
            o = n(38),
            i = n(7),
            a = n(16),
            c = Object.defineProperty;
        e.f = r ? c : function(t, e, n) {
            if (i(t), e = a(e, !0), i(n), o) try {
                return c(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var r = n(25),
            o = n(27);
        t.exports = function(t) {
            return r(o(t))
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(14),
            i = n(5),
            a = n(3),
            c = n(28),
            s = n(40),
            u = n(18),
            f = u.get,
            l = u.enforce,
            p = String(s).split("toString");
        o("inspectSource", function(t) {
            return s.call(t)
        }), (t.exports = function(t, e, n, o) {
            var s = !!o && !!o.unsafe,
                u = !!o && !!o.enumerable,
                f = !!o && !!o.noTargetGet;
            "function" == typeof n && ("string" != typeof e || a(n, "name") || i(n, "name", e), l(n).source = p.join("string" == typeof e ? e : "")), t !== r ? (s ? !f && t[e] && (u = !0) : delete t[e], u ? t[e] = n : i(t, e, n)) : u ? t[e] = n : c(e, n)
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && f(this).source || s.call(this)
        })
    }, function(t, e, n) {
        var r = n(27);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e, n) {
        var r = n(17),
            o = n(63);
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: "3.3.2",
            mode: r ? "pure" : "global"
        })
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        var r = n(6);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        t.exports = !1
    }, function(t, e, n) {
        var r, o, i, a = n(64),
            c = n(1),
            s = n(6),
            u = n(5),
            f = n(3),
            l = n(19),
            p = n(20),
            d = c.WeakMap;
        if (a) {
            var v = new d,
                h = v.get,
                g = v.has,
                y = v.set;
            r = function(t, e) {
                return y.call(v, t, e), e
            }, o = function(t) {
                return h.call(v, t) || {}
            }, i = function(t) {
                return g.call(v, t)
            }
        } else {
            var m = l("state");
            p[m] = !0, r = function(t, e) {
                return u(t, m, e), e
            }, o = function(t) {
                return f(t, m) ? t[m] : {}
            }, i = function(t) {
                return f(t, m)
            }
        }
        t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function(t) {
                return i(t) ? o(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!s(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }
    }, function(t, e, n) {
        var r = n(14),
            o = n(29),
            i = r("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        var r = n(31),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = n(26);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }, function(t, e, n) {
        var r = n(8),
            o = n(24),
            i = n(13),
            a = n(10),
            c = n(16),
            s = n(3),
            u = n(38),
            f = Object.getOwnPropertyDescriptor;
        e.f = r ? f : function(t, e) {
            if (t = a(t), e = c(e, !0), u) try {
                return f(t, e)
            } catch (t) {}
            if (s(t, e)) return i(!o.f.call(t, e), t[e])
        }
    }, function(t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({
                1: 2
            }, 1);
        e.f = i ? function(t) {
            var e = o(this, t);
            return !!e && e.enumerable
        } : r
    }, function(t, e, n) {
        var r = n(2),
            o = n(26),
            i = "".split;
        t.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" == o(t) ? i.call(t, "") : Object(t)
        } : Object
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(5);
        t.exports = function(t, e) {
            try {
                o(r, t, e)
            } catch (n) {
                r[t] = e
            }
            return e
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
        }
    }, function(t, e, n) {
        var r = n(44),
            o = n(32).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e, n) {
        var r = n(7),
            o = n(68),
            i = n(32),
            a = n(20),
            c = n(69),
            s = n(39),
            u = n(19)("IE_PROTO"),
            f = function() {},
            l = function() {
                var t, e = s("iframe"),
                    n = i.length;
                for (e.style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[i[n]];
                return l()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (f.prototype = r(t), n = new f, f.prototype = null, n[u] = t) : n = l(), void 0 === e ? n : o(n, e)
        }, a[u] = !0
    }, function(t, e, n) {
        var r = n(44),
            o = n(32);
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    }, function(t, e, n) {
        var r = n(9).f,
            o = n(3),
            i = n(0)("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        var r = n(49),
            o = n(25),
            i = n(12),
            a = n(21),
            c = n(50),
            s = [].push,
            u = function(t) {
                var e = 1 == t,
                    n = 2 == t,
                    u = 3 == t,
                    f = 4 == t,
                    l = 6 == t,
                    p = 5 == t || l;
                return function(d, v, h, g) {
                    for (var y, m, b = i(d), w = o(b), x = r(v, h, 3), S = a(w.length), O = 0, j = g || c, E = e ? j(d, S) : n ? j(d, 0) : void 0; S > O; O++)
                        if ((p || O in w) && (m = x(y = w[O], O, b), t))
                            if (e) E[O] = m;
                            else if (m) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return y;
                        case 6:
                            return O;
                        case 2:
                            s.call(E, y)
                    } else if (f) return !1;
                    return l ? -1 : u || f ? f : E
                }
            };
        t.exports = {
            forEach: u(0),
            map: u(1),
            filter: u(2),
            some: u(3),
            every: u(4),
            find: u(5),
            findIndex: u(6)
        }
    }, function(t, e, n) {
        var r = n(8),
            o = n(2),
            i = n(39);
        t.exports = !r && !o(function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(1),
            o = n(6),
            i = r.document,
            a = o(i) && o(i.createElement);
        t.exports = function(t) {
            return a ? i.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(14);
        t.exports = r("native-function-to-string", Function.toString)
    }, function(t, e, n) {
        var r = n(3),
            o = n(65),
            i = n(23),
            a = n(9);
        t.exports = function(t, e) {
            for (var n = o(e), c = a.f, s = i.f, u = 0; u < n.length; u++) {
                var f = n[u];
                r(t, f) || c(t, f, s(e, f))
            }
        }
    }, function(t, e, n) {
        var r = n(43),
            o = n(1),
            i = function(t) {
                return "function" == typeof t ? t : void 0
            };
        t.exports = function(t, e) {
            return arguments.length < 2 ? i(r[t]) || i(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
        }
    }, function(t, e, n) {
        t.exports = n(1)
    }, function(t, e, n) {
        var r = n(3),
            o = n(10),
            i = n(45).indexOf,
            a = n(20);
        t.exports = function(t, e) {
            var n, c = o(t),
                s = 0,
                u = [];
            for (n in c) !r(a, n) && r(c, n) && u.push(n);
            for (; e.length > s;) r(c, n = e[s++]) && (~i(u, n) || u.push(n));
            return u
        }
    }, function(t, e, n) {
        var r = n(10),
            o = n(21),
            i = n(66),
            a = function(t) {
                return function(e, n, a) {
                    var c, s = r(e),
                        u = o(s.length),
                        f = i(a, u);
                    if (t && n != n) {
                        for (; u > f;)
                            if ((c = s[f++]) != c) return !0
                    } else
                        for (; u > f; f++)
                            if ((t || f in s) && s[f] === n) return t || f || 0;
                    return !t && -1
                }
            };
        t.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    }, function(t, e, n) {
        var r = n(2);
        t.exports = !!Object.getOwnPropertySymbols && !r(function() {
            return !String(Symbol())
        })
    }, function(t, e, n) {
        e.f = n(0)
    }, function(t, e, n) {
        var r = n(43),
            o = n(3),
            i = n(47),
            a = n(9).f;
        t.exports = function(t) {
            var e = r.Symbol || (r.Symbol = {});
            o(e, t) || a(e, t, {
                value: i.f(t)
            })
        }
    }, function(t, e, n) {
        var r = n(71);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
        var r = n(6),
            o = n(22),
            i = n(0)("species");
        t.exports = function(t, e) {
            var n;
            return o(t) && ("function" != typeof(n = t.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(16),
            o = n(9),
            i = n(13);
        t.exports = function(t, e, n) {
            var a = r(e);
            a in t ? o.f(t, a, i(0, n)) : t[a] = n
        }
    }, function(t, e, n) {
        var r = n(2),
            o = n(0)("species");
        t.exports = function(t) {
            return !r(function() {
                var e = [];
                return (e.constructor = {})[o] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            })
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(37).forEach,
            o = n(54);
        t.exports = o("forEach") ? function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        } : [].forEach
    }, function(t, e, n) {
        "use strict";
        var r = n(2);
        t.exports = function(t, e) {
            var n = [][t];
            return !n || !r(function() {
                n.call(null, e || function() {
                    throw 1
                }, 1)
            })
        }
    }, function(t, e, n) {
        var r = n(26),
            o = n(0)("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(10),
            o = n(84),
            i = n(15),
            a = n(18),
            c = n(57),
            s = a.set,
            u = a.getterFor("Array Iterator");
        t.exports = c(Array, "Array", function(t, e) {
            s(this, {
                type: "Array Iterator",
                target: r(t),
                index: 0,
                kind: e
            })
        }, function() {
            var t = u(this),
                e = t.target,
                n = t.kind,
                r = t.index++;
            return !e || r >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: e[r],
                done: !1
            } : {
                value: [r, e[r]],
                done: !1
            }
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(85),
            i = n(59),
            a = n(87),
            c = n(36),
            s = n(5),
            u = n(11),
            f = n(0),
            l = n(17),
            p = n(15),
            d = n(58),
            v = d.IteratorPrototype,
            h = d.BUGGY_SAFARI_ITERATORS,
            g = f("iterator"),
            y = function() {
                return this
            };
        t.exports = function(t, e, n, f, d, m, b) {
            o(n, e, f);
            var w, x, S, O = function(t) {
                    if (t === d && _) return _;
                    if (!h && t in L) return L[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                j = e + " Iterator",
                E = !1,
                L = t.prototype,
                A = L[g] || L["@@iterator"] || d && L[d],
                _ = !h && A || O(d),
                T = "Array" == e && L.entries || A;
            if (T && (w = i(T.call(new t)), v !== Object.prototype && w.next && (l || i(w) === v || (a ? a(w, v) : "function" != typeof w[g] && s(w, g, y)), c(w, j, !0, !0), l && (p[j] = y))), "values" == d && A && "values" !== A.name && (E = !0, _ = function() {
                    return A.call(this)
                }), l && !b || L[g] === _ || s(L, g, _), p[e] = _, d)
                if (x = {
                        values: O("values"),
                        keys: m ? _ : O("keys"),
                        entries: O("entries")
                    }, b)
                    for (S in x) !h && !E && S in L || u(L, S, x[S]);
                else r({
                    target: e,
                    proto: !0,
                    forced: h || E
                }, x);
            return x
        }
    }, function(t, e, n) {
        "use strict";
        var r, o, i, a = n(59),
            c = n(5),
            s = n(3),
            u = n(0),
            f = n(17),
            l = u("iterator"),
            p = !1;
        [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : p = !0), null == r && (r = {}), f || s(r, l) || c(r, l, function() {
            return this
        }), t.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: p
        }
    }, function(t, e, n) {
        var r = n(3),
            o = n(12),
            i = n(19),
            a = n(86),
            c = i("IE_PROTO"),
            s = Object.prototype;
        t.exports = a ? Object.getPrototypeOf : function(t) {
            return t = o(t), r(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function(t, e) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(1),
            i = n(17),
            a = n(8),
            c = n(46),
            s = n(2),
            u = n(3),
            f = n(22),
            l = n(6),
            p = n(7),
            d = n(12),
            v = n(10),
            h = n(16),
            g = n(13),
            y = n(34),
            m = n(35),
            b = n(30),
            w = n(70),
            x = n(33),
            S = n(23),
            O = n(9),
            j = n(24),
            E = n(5),
            L = n(11),
            A = n(14),
            _ = n(19),
            T = n(20),
            C = n(29),
            P = n(0),
            M = n(47),
            k = n(48),
            I = n(36),
            F = n(18),
            R = n(37).forEach,
            N = _("hidden"),
            D = P("toPrimitive"),
            B = F.set,
            G = F.getterFor("Symbol"),
            W = Object.prototype,
            H = o.Symbol,
            V = o.JSON,
            Y = V && V.stringify,
            z = S.f,
            q = O.f,
            U = w.f,
            J = j.f,
            X = A("symbols"),
            $ = A("op-symbols"),
            K = A("string-to-symbol-registry"),
            Q = A("symbol-to-string-registry"),
            Z = A("wks"),
            tt = o.QObject,
            et = !tt || !tt.prototype || !tt.prototype.findChild,
            nt = a && s(function() {
                return 7 != y(q({}, "a", {
                    get: function() {
                        return q(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var r = z(W, e);
                r && delete W[e], q(t, e, n), r && t !== W && q(W, e, r)
            } : q,
            rt = function(t, e) {
                var n = X[t] = y(H.prototype);
                return B(n, {
                    type: "Symbol",
                    tag: t,
                    description: e
                }), a || (n.description = e), n
            },
            ot = c && "symbol" == typeof H.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return Object(t) instanceof H
            },
            it = function(t, e, n) {
                t === W && it($, e, n), p(t);
                var r = h(e, !0);
                return p(n), u(X, r) ? (n.enumerable ? (u(t, N) && t[N][r] && (t[N][r] = !1), n = y(n, {
                    enumerable: g(0, !1)
                })) : (u(t, N) || q(t, N, g(1, {})), t[N][r] = !0), nt(t, r, n)) : q(t, r, n)
            },
            at = function(t, e) {
                p(t);
                var n = v(e),
                    r = m(n).concat(ft(n));
                return R(r, function(e) {
                    a && !ct.call(n, e) || it(t, e, n[e])
                }), t
            },
            ct = function(t) {
                var e = h(t, !0),
                    n = J.call(this, e);
                return !(this === W && u(X, e) && !u($, e)) && (!(n || !u(this, e) || !u(X, e) || u(this, N) && this[N][e]) || n)
            },
            st = function(t, e) {
                var n = v(t),
                    r = h(e, !0);
                if (n !== W || !u(X, r) || u($, r)) {
                    var o = z(n, r);
                    return !o || !u(X, r) || u(n, N) && n[N][r] || (o.enumerable = !0), o
                }
            },
            ut = function(t) {
                var e = U(v(t)),
                    n = [];
                return R(e, function(t) {
                    u(X, t) || u(T, t) || n.push(t)
                }), n
            },
            ft = function(t) {
                var e = t === W,
                    n = U(e ? $ : v(t)),
                    r = [];
                return R(n, function(t) {
                    !u(X, t) || e && !u(W, t) || r.push(X[t])
                }), r
            };
        c || (L((H = function() {
            if (this instanceof H) throw TypeError("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                e = C(t),
                n = function(t) {
                    this === W && n.call($, t), u(this, N) && u(this[N], e) && (this[N][e] = !1), nt(this, e, g(1, t))
                };
            return a && et && nt(W, e, {
                configurable: !0,
                set: n
            }), rt(e, t)
        }).prototype, "toString", function() {
            return G(this).tag
        }), j.f = ct, O.f = it, S.f = st, b.f = w.f = ut, x.f = ft, a && (q(H.prototype, "description", {
            configurable: !0,
            get: function() {
                return G(this).description
            }
        }), i || L(W, "propertyIsEnumerable", ct, {
            unsafe: !0
        })), M.f = function(t) {
            return rt(P(t), t)
        }), r({
            global: !0,
            wrap: !0,
            forced: !c,
            sham: !c
        }, {
            Symbol: H
        }), R(m(Z), function(t) {
            k(t)
        }), r({
            target: "Symbol",
            stat: !0,
            forced: !c
        }, {
            for: function(t) {
                var e = String(t);
                if (u(K, e)) return K[e];
                var n = H(e);
                return K[e] = n, Q[n] = e, n
            },
            keyFor: function(t) {
                if (!ot(t)) throw TypeError(t + " is not a symbol");
                if (u(Q, t)) return Q[t]
            },
            useSetter: function() {
                et = !0
            },
            useSimple: function() {
                et = !1
            }
        }), r({
            target: "Object",
            stat: !0,
            forced: !c,
            sham: !a
        }, {
            create: function(t, e) {
                return void 0 === e ? y(t) : at(y(t), e)
            },
            defineProperty: it,
            defineProperties: at,
            getOwnPropertyDescriptor: st
        }), r({
            target: "Object",
            stat: !0,
            forced: !c
        }, {
            getOwnPropertyNames: ut,
            getOwnPropertySymbols: ft
        }), r({
            target: "Object",
            stat: !0,
            forced: s(function() {
                x.f(1)
            })
        }, {
            getOwnPropertySymbols: function(t) {
                return x.f(d(t))
            }
        }), V && r({
            target: "JSON",
            stat: !0,
            forced: !c || s(function() {
                var t = H();
                return "[null]" != Y([t]) || "{}" != Y({
                    a: t
                }) || "{}" != Y(Object(t))
            })
        }, {
            stringify: function(t) {
                for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = e = r[1], (l(e) || void 0 !== t) && !ot(t)) return f(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !ot(e)) return e
                }), r[1] = e, Y.apply(V, r)
            }
        }), H.prototype[D] || E(H.prototype, D, H.prototype.valueOf), I(H, "Symbol"), T[N] = !0
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(1),
            o = n(28),
            i = r["__core-js_shared__"] || o("__core-js_shared__", {});
        t.exports = i
    }, function(t, e, n) {
        var r = n(1),
            o = n(40),
            i = r.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o.call(i))
    }, function(t, e, n) {
        var r = n(42),
            o = n(30),
            i = n(33),
            a = n(7);
        t.exports = r("Reflect", "ownKeys") || function(t) {
            var e = o.f(a(t)),
                n = i.f;
            return n ? e.concat(n(t)) : e
        }
    }, function(t, e, n) {
        var r = n(31),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            var n = r(t);
            return n < 0 ? o(n + e, 0) : i(n, e)
        }
    }, function(t, e, n) {
        var r = n(2),
            o = /#|\.prototype\./,
            i = function(t, e) {
                var n = c[a(t)];
                return n == u || n != s && ("function" == typeof e ? r(e) : !!e)
            },
            a = i.normalize = function(t) {
                return String(t).replace(o, ".").toLowerCase()
            },
            c = i.data = {},
            s = i.NATIVE = "N",
            u = i.POLYFILL = "P";
        t.exports = i
    }, function(t, e, n) {
        var r = n(8),
            o = n(9),
            i = n(7),
            a = n(35);
        t.exports = r ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, r = a(e), c = r.length, s = 0; c > s;) o.f(t, n = r[s++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(42);
        t.exports = r("document", "documentElement")
    }, function(t, e, n) {
        var r = n(10),
            o = n(30).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return a && "[object Window]" == i.call(t) ? function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return a.slice()
                }
            }(t) : o(r(t))
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(8),
            i = n(1),
            a = n(3),
            c = n(6),
            s = n(9).f,
            u = n(41),
            f = i.Symbol;
        if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
            var l = {},
                p = function() {
                    var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                        e = this instanceof p ? new f(t) : void 0 === t ? f() : f(t);
                    return "" === t && (l[e] = !0), e
                };
            u(p, f);
            var d = p.prototype = f.prototype;
            d.constructor = p;
            var v = d.toString,
                h = "Symbol(test)" == String(f("test")),
                g = /^Symbol\((.*)\)[^)]+$/;
            s(d, "description", {
                configurable: !0,
                get: function() {
                    var t = c(this) ? this.valueOf() : this,
                        e = v.call(t);
                    if (a(l, t)) return "";
                    var n = h ? e.slice(7, -1) : e.replace(g, "$1");
                    return "" === n ? void 0 : n
                }
            }), r({
                global: !0,
                forced: !0
            }, {
                Symbol: p
            })
        }
    }, function(t, e, n) {
        n(48)("iterator")
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(2),
            i = n(22),
            a = n(6),
            c = n(12),
            s = n(21),
            u = n(51),
            f = n(50),
            l = n(52),
            p = n(0)("isConcatSpreadable"),
            d = !o(function() {
                var t = [];
                return t[p] = !1, t.concat()[0] !== t
            }),
            v = l("concat"),
            h = function(t) {
                if (!a(t)) return !1;
                var e = t[p];
                return void 0 !== e ? !!e : i(t)
            };
        r({
            target: "Array",
            proto: !0,
            forced: !d || !v
        }, {
            concat: function(t) {
                var e, n, r, o, i, a = c(this),
                    l = f(a, 0),
                    p = 0;
                for (e = -1, r = arguments.length; e < r; e++)
                    if (i = -1 === e ? a : arguments[e], h(i)) {
                        if (p + (o = s(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        for (n = 0; n < o; n++, p++) n in i && u(l, p, i[n])
                    } else {
                        if (p >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        u(l, p++, i)
                    } return l.length = p, l
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(37).filter;
        r({
            target: "Array",
            proto: !0,
            forced: !n(52)("filter")
        }, {
            filter: function(t) {
                return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(53);
        r({
            target: "Array",
            proto: !0,
            forced: [].forEach != o
        }, {
            forEach: o
        })
    }, function(t, e, n) {
        var r = n(4),
            o = n(78);
        r({
            target: "Array",
            stat: !0,
            forced: !n(82)(function(t) {
                Array.from(t)
            })
        }, {
            from: o
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(49),
            o = n(12),
            i = n(79),
            a = n(80),
            c = n(21),
            s = n(51),
            u = n(81);
        t.exports = function(t) {
            var e, n, f, l, p, d = o(t),
                v = "function" == typeof this ? this : Array,
                h = arguments.length,
                g = h > 1 ? arguments[1] : void 0,
                y = void 0 !== g,
                m = 0,
                b = u(d);
            if (y && (g = r(g, h > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && a(b))
                for (n = new v(e = c(d.length)); e > m; m++) s(n, m, y ? g(d[m], m) : d[m]);
            else
                for (p = (l = b.call(d)).next, n = new v; !(f = p.call(l)).done; m++) s(n, m, y ? i(l, g, [f.value, m], !0) : f.value);
            return n.length = m, n
        }
    }, function(t, e, n) {
        var r = n(7);
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), e
            }
        }
    }, function(t, e, n) {
        var r = n(0),
            o = n(15),
            i = r("iterator"),
            a = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (o.Array === t || a[i] === t)
        }
    }, function(t, e, n) {
        var r = n(55),
            o = n(15),
            i = n(0)("iterator");
        t.exports = function(t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function(t, e, n) {
        var r = n(0)("iterator"),
            o = !1;
        try {
            var i = 0,
                a = {
                    next: function() {
                        return {
                            done: !!i++
                        }
                    },
                    return: function() {
                        o = !0
                    }
                };
            a[r] = function() {
                return this
            }, Array.from(a, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = {};
                i[r] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(45).indexOf,
            i = n(54),
            a = [].indexOf,
            c = !!a && 1 / [1].indexOf(1, -0) < 0,
            s = i("indexOf");
        r({
            target: "Array",
            proto: !0,
            forced: c || s
        }, {
            indexOf: function(t) {
                return c ? a.apply(this, arguments) || 0 : o(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function(t, e, n) {
        var r = n(0),
            o = n(34),
            i = n(5),
            a = r("unscopables"),
            c = Array.prototype;
        null == c[a] && i(c, a, o(null)), t.exports = function(t) {
            c[a][t] = !0
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(58).IteratorPrototype,
            o = n(34),
            i = n(13),
            a = n(36),
            c = n(15),
            s = function() {
                return this
            };
        t.exports = function(t, e, n) {
            var u = e + " Iterator";
            return t.prototype = o(r, {
                next: i(1, n)
            }), a(t, u, !1, !0), c[u] = s, t
        }
    }, function(t, e, n) {
        var r = n(2);
        t.exports = !r(function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })
    }, function(t, e, n) {
        var r = n(7),
            o = n(88);
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {}
            return function(n, i) {
                return r(n), o(i), e ? t.call(n, i) : n.__proto__ = i, n
            }
        }() : void 0)
    }, function(t, e, n) {
        var r = n(6);
        t.exports = function(t) {
            if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            o = n(22),
            i = [].reverse,
            a = [1, 2];
        r({
            target: "Array",
            proto: !0,
            forced: String(a) === String(a.reverse())
        }, {
            reverse: function() {
                return o(this) && (this.length = this.length), i.call(this)
            }
        })
    }, function(t, e, n) {
        var r = n(11),
            o = Date.prototype,
            i = o.toString,
            a = o.getTime;
        new Date(NaN) + "" != "Invalid Date" && r(o, "toString", function() {
            var t = a.call(this);
            return t == t ? i.call(this) : "Invalid Date"
        })
    }, function(t, e, n) {
        var r = n(4),
            o = n(92);
        r({
            target: "Object",
            stat: !0,
            forced: Object.assign !== o
        }, {
            assign: o
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(8),
            o = n(2),
            i = n(35),
            a = n(33),
            c = n(24),
            s = n(12),
            u = n(25),
            f = Object.assign;
        t.exports = !f || o(function() {
            var t = {},
                e = {},
                n = Symbol();
            return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function(t) {
                e[t] = t
            }), 7 != f({}, t)[n] || "abcdefghijklmnopqrst" != i(f({}, e)).join("")
        }) ? function(t, e) {
            for (var n = s(t), o = arguments.length, f = 1, l = a.f, p = c.f; o > f;)
                for (var d, v = u(arguments[f++]), h = l ? i(v).concat(l(v)) : i(v), g = h.length, y = 0; g > y;) d = h[y++], r && !p.call(v, d) || (n[d] = v[d]);
            return n
        } : f
    }, function(t, e, n) {
        var r = n(11),
            o = n(94),
            i = Object.prototype;
        o !== i.toString && r(i, "toString", o, {
            unsafe: !0
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(55),
            o = {};
        o[n(0)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function() {
            return "[object " + r(this) + "]"
        } : o.toString
    }, function(t, e, n) {
        "use strict";
        var r = n(11),
            o = n(7),
            i = n(2),
            a = n(96),
            c = RegExp.prototype,
            s = c.toString,
            u = i(function() {
                return "/a/b" != s.call({
                    source: "a",
                    flags: "b"
                })
            }),
            f = "toString" != s.name;
        (u || f) && r(RegExp.prototype, "toString", function() {
            var t = o(this),
                e = String(t.source),
                n = t.flags;
            return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in c) ? a.call(t) : n)
        }, {
            unsafe: !0
        })
    }, function(t, e, n) {
        "use strict";
        var r = n(7);
        t.exports = function() {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(98).charAt,
            o = n(18),
            i = n(57),
            a = o.set,
            c = o.getterFor("String Iterator");
        i(String, "String", function(t) {
            a(this, {
                type: "String Iterator",
                string: String(t),
                index: 0
            })
        }, function() {
            var t, e = c(this),
                n = e.string,
                o = e.index;
            return o >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, o), e.index += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e, n) {
        var r = n(31),
            o = n(27),
            i = function(t) {
                return function(e, n) {
                    var i, a, c = String(o(e)),
                        s = r(n),
                        u = c.length;
                    return s < 0 || s >= u ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === u || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : a - 56320 + (i - 55296 << 10) + 65536
                }
            };
        t.exports = {
            codeAt: i(!1),
            charAt: i(!0)
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(60),
            i = n(53),
            a = n(5);
        for (var c in o) {
            var s = r[c],
                u = s && s.prototype;
            if (u && u.forEach !== i) try {
                a(u, "forEach", i)
            } catch (t) {
                u.forEach = i
            }
        }
    }, function(t, e, n) {
        var r = n(1),
            o = n(60),
            i = n(56),
            a = n(5),
            c = n(0),
            s = c("iterator"),
            u = c("toStringTag"),
            f = i.values;
        for (var l in o) {
            var p = r[l],
                d = p && p.prototype;
            if (d) {
                if (d[s] !== f) try {
                    a(d, s, f)
                } catch (t) {
                    d[s] = f
                }
                if (d[u] || a(d, u, l), o[l])
                    for (var v in i)
                        if (d[v] !== i[v]) try {
                            a(d, v, i[v])
                        } catch (t) {
                            d[v] = i[v]
                        }
            }
        }
    }, function(t, e, n) {}, function(t, e, n) {
        "use strict";

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }
        n.r(e), n(61), n(72), n(73), n(74), n(75), n(76), n(77), n(83), n(56), n(89), n(90), n(91), n(93), n(95), n(97), n(99), n(100), n(101);
        var o = !1;
        if ("undefined" != typeof window) {
            var i = {
                get passive() {
                    o = !0
                }
            };
            window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
        }
        var a = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
            c = [],
            s = !1,
            u = -1,
            f = void 0,
            l = void 0,
            p = function(t) {
                return c.some(function(e) {
                    return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
                })
            },
            d = function(t) {
                var e = t || window.event;
                return !!p(e.target) || e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1)
            },
            v = function(t, e) {
                if (a) {
                    if (!t) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                    if (t && !c.some(function(e) {
                            return e.targetElement === t
                        })) {
                        var n = {
                            targetElement: t,
                            options: e || {}
                        };
                        c = [].concat(r(c), [n]), t.ontouchstart = function(t) {
                            1 === t.targetTouches.length && (u = t.targetTouches[0].clientY)
                        }, t.ontouchmove = function(e) {
                            1 === e.targetTouches.length && function(t, e) {
                                var n = t.targetTouches[0].clientY - u;
                                !p(t.target) && (e && 0 === e.scrollTop && n > 0 ? d(t) : function(t) {
                                    return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
                                }(e) && n < 0 ? d(t) : t.stopPropagation())
                            }(e, t)
                        }, s || (document.addEventListener("touchmove", d, o ? {
                            passive: !1
                        } : void 0), s = !0)
                    }
                } else {
                    ! function(t) {
                        setTimeout(function() {
                            if (void 0 === l) {
                                var e = !!t && !0 === t.reserveScrollBarGap,
                                    n = window.innerWidth - document.documentElement.clientWidth;
                                e && n > 0 && (l = document.body.style.paddingRight, document.body.style.paddingRight = n + "px")
                            }
                            //void 0 === f && (f = document.body.style.overflow, document.body.style.overflow = "hidden")
                        })
                    }(e);
                    var i = {
                        targetElement: t,
                        options: e || {}
                    };
                    c = [].concat(r(c), [i])
                }
            },
            h = function(t) {
                if (a) {
                    if (!t) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                    t.ontouchstart = null, t.ontouchmove = null, c = c.filter(function(e) {
                        return e.targetElement !== t
                    }), s && 0 === c.length && (document.removeEventListener("touchmove", d, o ? {
                        passive: !1
                    } : void 0), s = !1)
                } else(c = c.filter(function(e) {
                    return e.targetElement !== t
                })).length || setTimeout(function() {
                    void 0 !== l && (document.body.style.paddingRight = l, l = void 0), void 0 !== f && (document.body.style.overflow = f, f = void 0)
                })
            };

        function g(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var y = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.settings = Object.assign({
                    controlColor: "#FFFFFF",
                    controlShadow: !0,
                    addCircle: !1,
                    addCircleBlur: !0,
                    showLabels: !1,
                    labelOptions: {
                        before: "Before",
                        after: "After",
                        onHover: !1
                    },
                    smoothing: !0,
                    smoothingAmount: 100,
                    hoverStart: !1,
                    verticalMode: !1,
                    startingPoint: 50,
                    fluidMode: !1
                }, n), this.safariAgent = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome"), this.el = e, this.images = {}, this.wrapper = null, this.control = null, this.arrowContainer = null, this.arrowAnimator = [], this.active = !1, this.slideWidth = 50, this.lineWidth = 2, this.arrowCoordinates = {
                    circle: [5, 3],
                    standard: [8, 0]
                }
            }
            var e, n;
            return e = t, (n = [{
                key: "mount",
                value: function() {
                    this.safariAgent && (this.settings.smoothing = !1), this._shapeContainer(), this._getImages(), this._buildControl(), this._events()
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    this.el.addEventListener("mousedown", function(e) {
                        t._activate(!0), document.body.classList.add("ba-before-after-image-body"), v(t.el), t._slideCompare(e)
                    }), this.el.addEventListener("mousemove", function(e) {
                        return t.active && t._slideCompare(e)
                    }), this.el.addEventListener("mouseup", function() {
                        return t._activate(!1)
                    }), document.body.addEventListener("mouseup", function() {
                        document.body.classList.remove("ba-before-after-image-body"), h(t.el), t._activate(!1)
                    }), this.control.addEventListener("touchstart", function(e) {
                        t._activate(!0), document.body.classList.add("ba-before-after-image-body"), v(t.el)
                    }), this.el.addEventListener("touchmove", function(e) {
                        t.active && t._slideCompare(e)
                    }), this.el.addEventListener("touchend", function() {
                        t._activate(!1), document.body.classList.remove("ba-before-after-image-body"), h(t.el)
                    }), this.el.addEventListener("mouseenter", function () {
                        t.settings.hoverStart && t._activate(!0);
                    })
                }
            }, {
                key: "_slideCompare",
                value: function(t) {
                    var e = this.el.getBoundingClientRect(),
                        n = void 0 !== t.touches ? t.touches[0].clientX - e.left : t.clientX - e.left,
                        r = void 0 !== t.touches ? t.touches[0].clientY - e.top : t.clientY - e.top,
                        o = this.settings.verticalMode ? r / e.height * 100 : n / e.width * 100;
                    o >= 0 && o <= 100 && (this.settings.verticalMode ? this.control.style.top = "calc(".concat(o, "% - ").concat(this.slideWidth / 2, "px)") : this.control.style.left = "calc(".concat(o, "% - ").concat(this.slideWidth / 2, "px)"), this.settings.fluidMode ? this.settings.verticalMode ? this.wrapper.style.clipPath = "inset(0 0 ".concat(100 - o, "% 0)") : this.wrapper.style.clipPath = "inset(0 0 0 ".concat(o, "%)") : this.settings.verticalMode ? this.wrapper.style.height = "calc(".concat(o, "%)") : this.wrapper.style.width = "calc(".concat(100 - o, "%)"))
                }
            }, {
                key: "_activate",
                value: function(t) {
                    this.active = t
                }
            }, {
                key: "_shapeContainer",
                value: function() {
                    var t = document.createElement("div"),
                        e = document.createElement("span"),
                        n = document.createElement("span");
                    e.classList.add("ba-before-after-image-label", "ba-before-after-image-label-before", "keep"), n.classList.add("ba-before-after-image-label", "ba-before-after-image-label-after", "keep"), this.settings.labelOptions.onHover && (e.classList.add("on-hover"), n.classList.add("on-hover")), this.settings.verticalMode && (e.classList.add("vertical"), n.classList.add("vertical")), e.innerHTML = this.settings.labelOptions.before || "Before", n.innerHTML = this.settings.labelOptions.after || "After", this.settings.showLabels && (this.el.appendChild(e), this.el.appendChild(n)), this.el.classList.add(this.settings.verticalMode ? "ba-before-after-image-vertical" : "ba-before-after-image-horizontal", this.settings.fluidMode ? "ba-before-after-image--fluid" : "ba-before-after-image-standard"), t.classList.add("icv__imposter"), this.el.appendChild(t)
                }
            }, {
                key: "_buildControl",
                value: function() {
                    var t = document.createElement("div"),
                        e = document.createElement("div"),
                        n = document.createElement("div"),
                        r = document.createElement("div");
                    n.classList.add("ba-before-after-image-theme-wrapper");
                    var o = document.createElement("div");
                    o.innerHTML += '<span class="ba-before-after-image-arrow-left ba-before-after-image-icon"></span><span class="ba-before-after-image-arrow-right ba-before-after-image-icon"></span>', this.arrowAnimator.push(o), n.appendChild(o);
                    this.settings.addCircle ? this.arrowCoordinates.circle : this.arrowCoordinates.standard;
                    var i = this.settings.addCircle ? "ba-before-after-circle" : "ba-before-after-no-circle";
                    this.arrowAnimator.forEach(function(t, e) {
                        t.classList.add("ba-before-after-image-arrow-wrapper")
                    }), t.classList.add("ba-before-after-image-control", i), t.style.cssText = "\n    ".concat(this.settings.verticalMode ? "height" : "width ", ": ").concat(this.slideWidth, "px;\n    ").concat(this.settings.verticalMode ? "top" : "left ", ": calc(").concat(this.settings.startingPoint, "% - ").concat(this.slideWidth / 2, "px);\n    ").concat("ontouchstart" in document.documentElement ? "" : this.settings.smoothing ? "transition: ".concat(this.settings.smoothingAmount, "ms ease-out;") : "", "\n    "), e.classList.add("ba-before-after-image-control-line"), e.style.cssText = "\n      ".concat(this.settings.controlShadow ? "box-shadow: 0px 0px 15px rgba(0,0,0,0.33);" : "", "\n    ");
                    var a = e.cloneNode(!0);
                    r.classList.add("ba-before-after-image-circle"), r.style.cssText = "\n\n      ".concat(this.settings.addCircleBlur && "-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)", ";\n      \n").concat(this.settings.controlShadow && "box-shadow: 0px 0px 15px rgba(0,0,0,0.33)", ";\n    "), t.appendChild(e), this.settings.addCircle && t.appendChild(r), t.appendChild(n), t.appendChild(a), this.arrowContainer = n, this.control = t, this.el.appendChild(t)
                }
            }, {
                key: "_getImages",
                value: function() {
                    var t = this,
                        e = this.el.querySelectorAll("img, .keep");
                    this.el.innerHTML = "", e.forEach(function(e) {
                        t.el.appendChild(e)
                    });
                    var n = function(t) {
                        return function(t) {
                            if (Array.isArray(t)) {
                                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                                return n
                            }
                        }(t) || function(t) {
                            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
                    }(e).filter(function(t) {
                        return "img" === t.nodeName.toLowerCase()
                    });
                    this.settings.verticalMode && n.reverse();
                    for (var r = 0; r <= 1; r++) {
                        var o = n[r];
                        if (o.classList.add("ba-before-after-img"), o.classList.add(0 === r ? "ba-before-after-img-before" : "ba-before-after-img-after"), 1 === r) {
                            var i = document.createElement("div"),
                                a = n[1].src;
                            i.classList.add("ba-before-after-image-inner-wrapper"), i.style.cssText = "\n            width: ".concat(100 - this.settings.startingPoint, "%; \n            height: ").concat(this.settings.startingPoint, "%;\n\n            ").concat("ontouchstart" in document.documentElement ? "" : this.settings.smoothing ? "transition: ".concat(this.settings.smoothingAmount, "ms ease-out;") : "", "\n            ").concat(this.settings.fluidMode && "background-image: url(".concat(a, "); clip-path: inset(").concat(this.settings.verticalMode ? " 0 0 ".concat(100 - this.settings.startingPoint, "% 0") : "0 0 0 ".concat(this.settings.startingPoint, "%"), ")"), "\n        "), i.appendChild(o), this.wrapper = i, this.el.appendChild(this.wrapper)
                        }
                    }
                    if (this.settings.fluidMode) {
                        var c = n[0].src,
                            s = document.createElement("div");
                        s.classList.add("icv__fluidwrapper"), s.style.cssText = "\n \n        background-image: url(".concat(c, ");\n        \n      "), this.el.appendChild(s)
                    }
                }
            }]) && g(e.prototype, n), t
        }();
        e.default = y
    }]).default
});
//Before After Image.
function bricksableBAImage() {
    bricksQuerySelectorAll(document, ".brxe-ba-before-after-image, .bricks-element-ba-before-after-image").forEach((function(e) {
        var t, r = e.dataset.scriptId;
        if (r) {
            try {
                t = JSON.parse(e.dataset.baBricksBeforeAfterImageOptions)
            } catch (e) {
                return !1
            }
            if (true === t.onHover) {
                e.classList.add('ba-before-after-image-label-on-hover');
            }

            var i = e.querySelector(".ba-before-after-image-wrapper");
            i && (window.bricksableBeforeAfterImageData.BeforeAfterImageInstances[t] && window.bricksableBeforeAfterImageData.BeforeAfterImageInstances[t].destroy(), window.bricksableBeforeAfterImageData.BeforeAfterImageInstances[t] = new ImageCompare(i, t).mount());
        } else {
            var t = bricksGetElementId(e),
                n = document.getElementById("ba-before-after-image-" + t),
                i = JSON.parse(e.querySelector(".ba-before-after-image-wrapper").dataset.baBricksBeforeAfterImageOptions);
            if (true === i.onHover) {
                e.classList.add('ba-before-after-image-label-on-hover');
            }
            if (i.hasOwnProperty("addCircle")) {
                window.bricksableBeforeAfterImageData.BeforeAfterImageInstances[t] && window.bricksableBeforeAfterImageData.BeforeAfterImageInstances[t].destroy(), window.bricksableBeforeAfterImageData.BeforeAfterImageInstances[t] = new ImageCompare(n, i).mount();
            }
        }
    }));
}
document.addEventListener("DOMContentLoaded", (function(e) {
    if (bricksIsFrontend) {
        bricksableBAImage();
    }
}));