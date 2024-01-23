/*!
 * Intro.js v7.2.0
 * https://introjs.com
 *
 * Copyright (C) 2012-2023 Afshin Mehrabani (@afshinmeh).
 * https://introjs.com
 *
 * Date: Mon, 14 Aug 2023 19:47:14 GMT
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).introJs = e()
}(this, (function () {
        "use strict";

        function t() {
            t = function () {
                return e
            }
            ;
            var e = {}
                , n = Object.prototype
                , r = n.hasOwnProperty
                , o = Object.defineProperty || function (t, e, n) {
                t[e] = n.value
            }
                , i = "function" == typeof Symbol ? Symbol : {}
                , a = i.iterator || "@@iterator"
                , s = i.asyncIterator || "@@asyncIterator"
                , l = i.toStringTag || "@@toStringTag";

            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                    t[e]
            }

            try {
                c({}, "")
            } catch (t) {
                c = function (t, e, n) {
                    return t[e] = n
                }
            }

            function u(t, e, n, r) {
                var i = e && e.prototype instanceof f ? e : f
                    , a = Object.create(i.prototype)
                    , s = new j(r || []);
                return o(a, "_invoke", {
                    value: k(t, n, s)
                }),
                    a
            }

            function p(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            e.wrap = u;
            var h = {};

            function f() {
            }

            function d() {
            }

            function m() {
            }

            var v = {};
            c(v, a, (function () {
                    return this
                }
            ));
            var b = Object.getPrototypeOf
                , y = b && b(b(A([])));
            y && y !== n && r.call(y, a) && (v = y);
            var g = m.prototype = f.prototype = Object.create(v);

            function w(t) {
                ["next", "throw", "return"].forEach((function (e) {
                        c(t, e, (function (t) {
                                return this._invoke(e, t)
                            }
                        ))
                    }
                ))
            }

            function _(t, e) {
                function n(o, i, a, s) {
                    var l = p(t[o], t, i);
                    if ("throw" !== l.type) {
                        var c = l.arg
                            , u = c.value;
                        return u && "object" == typeof u && r.call(u, "__await") ? e.resolve(u.__await).then((function (t) {
                                n("next", t, a, s)
                            }
                        ), (function (t) {
                                n("throw", t, a, s)
                            }
                        )) : e.resolve(u).then((function (t) {
                                c.value = t,
                                    a(c)
                            }
                        ), (function (t) {
                                return n("throw", t, a, s)
                            }
                        ))
                    }
                    s(l.arg)
                }

                var i;
                o(this, "_invoke", {
                    value: function (t, r) {
                        function o() {
                            return new e((function (e, o) {
                                    n(t, r, e, o)
                                }
                            ))
                        }

                        return i = i ? i.then(o, o) : o()
                    }
                })
            }

            function k(t, e, n) {
                var r = "suspendedStart";
                return function (o, i) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o)
                            throw i;
                        return E()
                    }
                    for (n.method = o,
                             n.arg = i; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = x(a, n);
                            if (s) {
                                if (s === h)
                                    continue;
                                return s
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                    n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = p(t, e, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            l.arg === h)
                                continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (r = "completed",
                            n.method = "throw",
                            n.arg = l.arg)
                    }
                }
            }

            function x(t, e) {
                var n = e.method
                    , r = t.iterator[n];
                if (void 0 === r)
                    return e.delegate = null,
                    "throw" === n && t.iterator.return && (e.method = "return",
                        e.arg = void 0,
                        x(t, e),
                    "throw" === e.method) || "return" !== n && (e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                        h;
                var o = p(r, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                        e.arg = o.arg,
                        e.delegate = null,
                        h;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                    e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                    e.arg = void 0),
                    e.delegate = null,
                    h) : i : (e.method = "throw",
                    e.arg = new TypeError("iterator result is not an object"),
                    e.delegate = null,
                    h)
            }

            function C(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
            }

            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                    delete e.arg,
                    t.completion = e
            }

            function j(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                    t.forEach(C, this),
                    this.reset(!0)
            }

            function A(t) {
                if (t) {
                    var e = t[a];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                            , o = function e() {
                            for (; ++n < t.length;)
                                if (r.call(t, n))
                                    return e.value = t[n],
                                        e.done = !1,
                                        e;
                            return e.value = void 0,
                                e.done = !0,
                                e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: E
                }
            }

            function E() {
                return {
                    value: void 0,
                    done: !0
                }
            }

            return d.prototype = m,
                o(g, "constructor", {
                    value: m,
                    configurable: !0
                }),
                o(m, "constructor", {
                    value: d,
                    configurable: !0
                }),
                d.displayName = c(m, l, "GeneratorFunction"),
                e.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m,
                        c(t, l, "GeneratorFunction")),
                        t.prototype = Object.create(g),
                        t
                }
                ,
                e.awrap = function (t) {
                    return {
                        __await: t
                    }
                }
                ,
                w(_.prototype),
                c(_.prototype, s, (function () {
                        return this
                    }
                )),
                e.AsyncIterator = _,
                e.async = function (t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(u(t, n, r, o), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function (t) {
                            return t.done ? t.value : a.next()
                        }
                    ))
                }
                ,
                w(g),
                c(g, l, "Generator"),
                c(g, a, (function () {
                        return this
                    }
                )),
                c(g, "toString", (function () {
                        return "[object Generator]"
                    }
                )),
                e.keys = function (t) {
                    var e = Object(t)
                        , n = [];
                    for (var r in e)
                        n.push(r);
                    return n.reverse(),
                        function t() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in e)
                                    return t.value = r,
                                        t.done = !1,
                                        t
                            }
                            return t.done = !0,
                                t
                        }
                }
                ,
                e.values = A,
                j.prototype = {
                    constructor: j,
                    reset: function (t) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = void 0,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = void 0,
                            this.tryEntries.forEach(S),
                            !t)
                            for (var e in this)
                                "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done)
                            throw t;
                        var e = this;

                        function n(n, r) {
                            return a.type = "throw",
                                a.arg = t,
                                e.next = n,
                            r && (e.method = "next",
                                e.arg = void 0),
                                !!r
                        }

                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o]
                                , a = i.completion;
                            if ("root" === i.tryLoc)
                                return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc")
                                    , l = r.call(i, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < i.catchLoc)
                                        return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc)
                                        return n(i.catchLoc, !0)
                                } else {
                                    if (!l)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc)
                                        return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t,
                            a.arg = e,
                            i ? (this.method = "next",
                                this.next = i.finallyLoc,
                                h) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === t.type && e && (this.next = e),
                            h
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                    S(n),
                                    h
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    S(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, n) {
                        return this.delegate = {
                            iterator: A(t),
                            resultName: e,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = void 0),
                            h
                    }
                },
                e
        }

        function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                e(t)
        }

        function n(t, e, n, r, o, i, a) {
            try {
                var s = t[i](a)
                    , l = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(l) : Promise.resolve(l).then(r, o)
        }

        function r(t) {
            return function () {
                var e = this
                    , r = arguments;
                return new Promise((function (o, i) {
                        var a = t.apply(e, r);

                        function s(t) {
                            n(a, o, i, s, l, "next", t)
                        }

                        function l(t) {
                            n(a, o, i, s, l, "throw", t)
                        }

                        s(void 0)
                    }
                ))
            }
        }

        function o(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                "value" in r && (r.writable = !0),
                    Object.defineProperty(t, h(r.key), r)
            }
        }

        function a(t, e, n) {
            return e && i(t.prototype, e),
            n && i(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
        }

        function s(t, e, n) {
            return (e = h(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }

        function l(t, e) {
            return function (t) {
                if (Array.isArray(t))
                    return t
            }(t) || function (t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, a, s = [], l = !0, c = !1;
                    try {
                        if (i = (n = n.call(t)).next,
                        0 === e) {
                            if (Object(n) !== n)
                                return;
                            l = !1
                        } else
                            for (; !(l = (r = i.call(n)).done) && (s.push(r.value),
                            s.length !== e); l = !0)
                                ;
                    } catch (t) {
                        c = !0,
                            o = t
                    } finally {
                        try {
                            if (!l && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                    return s
                }
            }(t, e) || c(t, e) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
            }
        }

        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }

        function p(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = c(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0
                        , o = function () {
                    };
                    return {
                        s: o,
                        n: function () {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function (t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(t)
                },
                n: function () {
                    var t = n.next();
                    return a = t.done,
                        t
                },
                e: function (t) {
                    s = !0,
                        i = t
                },
                f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }

        function h(t) {
            var e = function (t, e) {
                if ("object" != typeof t || null === t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, e || "default");
                    if ("object" != typeof r)
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : String(e)
        }

        function f(t, e, n) {
            var r, o = (s(r = {}, t, e),
                s(r, "path", "/"),
                s(r, "expires", void 0),
                r);
            if (n) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
                    o.expires = i.toUTCString()
            }
            var a = [];
            for (var l in o)
                a.push("".concat(l, "=").concat(o[l]));
            return document.cookie = a.join("; "),
                d(t)
        }

        function d(t) {
            return (e = {},
                document.cookie.split(";").forEach((function (t) {
                        var n = l(t.split("="), 2)
                            , r = n[0]
                            , o = n[1];
                        e[r.trim()] = o
                    }
                )),
                e)[t];
            var e
        }

        var m = "true";

        function v(t, e) {
            e ? f(t._options.dontShowAgainCookie, m, t._options.dontShowAgainCookieDays) : f(t._options.dontShowAgainCookie, "", -1)
        }

        var b, y = (b = {},
                function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "introjs-stamp";
                    return b[e] = b[e] || 0,
                    void 0 === t[e] && (t[e] = b[e]++),
                        t[e]
                }
        ), g = new (function () {
            function t() {
                o(this, t),
                    s(this, "events_key", "introjs_event")
            }

            return a(t, [{
                key: "_id",
                value: function (t, e, n) {
                    return t + y(e) + (n ? "_".concat(y(n)) : "")
                }
            }, {
                key: "on",
                value: function (t, e, n, r, o) {
                    var i = this._id(e, n, r)
                        , a = function (e) {
                        return n(r || t, e || window.event)
                    };
                    "addEventListener" in t ? t.addEventListener(e, a, o) : "attachEvent" in t && t.attachEvent("on".concat(e), a),
                        t[this.events_key] = t[this.events_key] || {},
                        t[this.events_key][i] = a
                }
            }, {
                key: "off",
                value: function (t, e, n, r, o) {
                    var i = this._id(e, n, r)
                        , a = t[this.events_key] && t[this.events_key][i];
                    a && ("removeEventListener" in t ? t.removeEventListener(e, a, o) : "detachEvent" in t && t.detachEvent("on".concat(e), a),
                        t[this.events_key][i] = null)
                }
            }]),
                t
        }()), w = function (t) {
            return "function" == typeof t
        };

        function _(t, e) {
            if (t instanceof SVGElement) {
                var n = t.getAttribute("class") || "";
                n.match(e) || t.setAttribute("class", "".concat(n, " ").concat(e))
            } else if (void 0 !== t.classList) {
                var r, o = p(e.split(" "));
                try {
                    for (o.s(); !(r = o.n()).done;) {
                        var i = r.value;
                        t.classList.add(i)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            } else
                t.className.match(e) || (t.className += " ".concat(e))
        }

        function k(t, e) {
            var n = "";
            return "currentStyle" in t ? n = t.currentStyle[e] : document.defaultView && document.defaultView.getComputedStyle && (n = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)),
                n && n.toLowerCase ? n.toLowerCase() : n
        }

        function x(t) {
            _(t, "introjs-showElement");
            var e = k(t, "position");
            "absolute" !== e && "relative" !== e && "sticky" !== e && "fixed" !== e && _(t, "introjs-relativePosition")
        }

        function C(t, e) {
            if (t) {
                var n = function (t) {
                    var e = window.getComputedStyle(t)
                        , n = "absolute" === e.position
                        , r = /(auto|scroll)/;
                    if ("fixed" === e.position)
                        return document.body;
                    for (var o = t; o = o.parentElement;)
                        if (e = window.getComputedStyle(o),
                        (!n || "static" !== e.position) && r.test(e.overflow + e.overflowY + e.overflowX))
                            return o;
                    return document.body
                }(e);
                n !== document.body && (n.scrollTop = e.offsetTop - n.offsetTop)
            }
        }

        function S() {
            if (void 0 !== window.innerWidth)
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            var t = document.documentElement;
            return {
                width: t.clientWidth,
                height: t.clientHeight
            }
        }

        function j(t, e, n, r, o) {
            var i;
            if ("off" !== e && (t && (i = "tooltip" === e ? o.getBoundingClientRect() : r.getBoundingClientRect(),
                !function (t) {
                    var e = t.getBoundingClientRect();
                    return e.top >= 0 && e.left >= 0 && e.bottom + 80 <= window.innerHeight && e.right <= window.innerWidth
                }(r)))) {
                var a = S().height;
                i.bottom - (i.bottom - i.top) < 0 || r.clientHeight > a ? window.scrollBy(0, i.top - (a / 2 - i.height / 2) - n) : window.scrollBy(0, i.top - (a / 2 - i.height / 2) + n)
            }
        }

        function A(t) {
            t.setAttribute("role", "button"),
                t.tabIndex = 0
        }

        function E(t) {
            var e = t.parentElement;
            return !(!e || "HTML" === e.nodeName) && ("fixed" === k(t, "position") || E(e))
        }

        function N(t, e) {
            var n = document.body
                , r = document.documentElement
                , o = window.pageYOffset || r.scrollTop || n.scrollTop
                , i = window.pageXOffset || r.scrollLeft || n.scrollLeft;
            e = e || n;
            var a = t.getBoundingClientRect()
                , s = e.getBoundingClientRect()
                , l = k(e, "position")
                , c = {
                width: a.width,
                height: a.height
            };
            return "body" !== e.tagName.toLowerCase() && "relative" === l || "sticky" === l ? Object.assign(c, {
                top: a.top - s.top,
                left: a.left - s.left
            }) : E(t) ? Object.assign(c, {
                top: a.top,
                left: a.left
            }) : Object.assign(c, {
                top: a.top + o,
                left: a.left + i
            })
        }

        function L(t, e) {
            if (t instanceof SVGElement) {
                var n = t.getAttribute("class") || "";
                t.setAttribute("class", n.replace(e, "").replace(/^\s+|\s+$/g, ""))
            } else
                t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, "")
        }

        function T(t, e) {
            var n = "";
            if (t.style.cssText && (n += t.style.cssText),
            "string" == typeof e)
                n += e;
            else
                for (var r in e)
                    n += "".concat(r, ":").concat(e[r], ";");
            t.style.cssText = n
        }

        function I(t, e, n) {
            if (n && e) {
                var r = N(e.element, t._targetElement)
                    , o = t._options.helperElementPadding;
                e.element instanceof Element && E(e.element) ? _(n, "introjs-fixedTooltip") : L(n, "introjs-fixedTooltip"),
                "floating" === e.position && (o = 0),
                    T(n, {
                        width: "".concat(r.width + o, "px"),
                        height: "".concat(r.height + o, "px"),
                        top: "".concat(r.top - o / 2, "px"),
                        left: "".concat(r.left - o / 2, "px")
                    })
            }
        }

        function P(t, e, n, r, o) {
            return t.left + e + n.width > r.width ? (o.style.left = "".concat(r.width - n.width - t.left, "px"),
                !1) : (o.style.left = "".concat(e, "px"),
                !0)
        }

        function O(t, e, n, r) {
            return t.left + t.width - e - n.width < 0 ? (r.style.left = "".concat(-t.left, "px"),
                !1) : (r.style.right = "".concat(e, "px"),
                !0)
        }

        function q(t, e) {
            t.includes(e) && t.splice(t.indexOf(e), 1)
        }

        function B(t, e, n, r) {
            var o = t.slice()
                , i = S()
                , a = N(n).height + 10
                , s = N(n).width + 20
                , l = e.getBoundingClientRect()
                , c = "floating";
            if (l.bottom + a > i.height && q(o, "bottom"),
            l.top - a < 0 && q(o, "top"),
            l.right + s > i.width && q(o, "right"),
            l.left - s < 0 && q(o, "left"),
            r && (r = r.split("-")[0]),
            o.length && (c = o[0],
            o.includes(r) && (c = r)),
            "top" === c || "bottom" === c) {
                var u, p = [];
                "top" === c ? (u = "top-middle-aligned",
                    p = ["top-left-aligned", "top-middle-aligned", "top-right-aligned"]) : (u = "bottom-middle-aligned",
                    p = ["bottom-left-aligned", "bottom-middle-aligned", "bottom-right-aligned"]),
                    c = function (t, e, n, r) {
                        var o = e / 2
                            , i = Math.min(n, window.screen.width);
                        return i - t < e && (q(r, "top-left-aligned"),
                            q(r, "bottom-left-aligned")),
                        (t < o || i - t < o) && (q(r, "top-middle-aligned"),
                            q(r, "bottom-middle-aligned")),
                        t < e && (q(r, "top-right-aligned"),
                            q(r, "bottom-right-aligned")),
                            r.length ? r[0] : null
                    }(l.left, s, i.width, p) || u
            }
            return c
        }

        function H(t, e, n, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (e) {
                var i, a, s, l, c = "";
                n.style.top = "",
                    n.style.right = "",
                    n.style.bottom = "",
                    n.style.left = "",
                    n.style.marginLeft = "",
                    n.style.marginTop = "",
                    r.style.display = "inherit",
                    c = "string" == typeof e.tooltipClass ? e.tooltipClass : t._options.tooltipClass,
                    n.className = ["introjs-tooltip", c].filter(Boolean).join(" "),
                    n.setAttribute("role", "dialog"),
                "floating" !== (l = e.position) && t._options.autoPosition && (l = B(t._options.positionPrecedence, e.element, n, l)),
                    a = N(e.element),
                    i = N(n),
                    s = S(),
                    _(n, "introjs-".concat(l));
                var u = a.width / 2 - i.width / 2;
                switch (l) {
                    case "top-right-aligned":
                        r.className = "introjs-arrow bottom-right";
                        var p = 0;
                        O(a, p, i, n),
                            n.style.bottom = "".concat(a.height + 20, "px");
                        break;
                    case "top-middle-aligned":
                        r.className = "introjs-arrow bottom-middle",
                        o && (u += 5),
                        O(a, u, i, n) && (n.style.right = "",
                            P(a, u, i, s, n)),
                            n.style.bottom = "".concat(a.height + 20, "px");
                        break;
                    case "top-left-aligned":
                    case "top":
                        r.className = "introjs-arrow bottom",
                            P(a, o ? 0 : 15, i, s, n),
                            n.style.bottom = "".concat(a.height + 20, "px");
                        break;
                    case "right":
                        n.style.left = "".concat(a.width + 20, "px"),
                            a.top + i.height > s.height ? (r.className = "introjs-arrow left-bottom",
                                n.style.top = "-".concat(i.height - a.height - 20, "px")) : r.className = "introjs-arrow left";
                        break;
                    case "left":
                        o || !0 !== t._options.showStepNumbers || (n.style.top = "15px"),
                            a.top + i.height > s.height ? (n.style.top = "-".concat(i.height - a.height - 20, "px"),
                                r.className = "introjs-arrow right-bottom") : r.className = "introjs-arrow right",
                            n.style.right = "".concat(a.width + 20, "px");
                        break;
                    case "floating":
                        r.style.display = "none",
                            n.style.left = "50%",
                            n.style.top = "50%",
                            n.style.marginLeft = "-".concat(i.width / 2, "px"),
                            n.style.marginTop = "-".concat(i.height / 2, "px");
                        break;
                    case "bottom-right-aligned":
                        r.className = "introjs-arrow top-right",
                            O(a, p = 0, i, n),
                            n.style.top = "".concat(a.height + 20, "px");
                        break;
                    case "bottom-middle-aligned":
                        r.className = "introjs-arrow top-middle",
                        o && (u += 5),
                        O(a, u, i, n) && (n.style.right = "",
                            P(a, u, i, s, n)),
                            n.style.top = "".concat(a.height + 20, "px");
                        break;
                    default:
                        r.className = "introjs-arrow top",
                            P(a, 0, i, s, n),
                            n.style.top = "".concat(a.height + 20, "px")
                }
            }
        }

        function R() {
            for (var t = 0, e = Array.from(document.querySelectorAll(".introjs-showElement")); t < e.length; t++) {
                L(e[t], /introjs-[a-zA-Z]+/g)
            }
        }

        function M(t, e) {
            var n = document.createElement(t);
            e = e || {};
            var r = /^(?:role|data-|aria-)/;
            for (var o in e) {
                var i = e[o];
                "style" === o && "function" != typeof i ? T(n, i) : "string" == typeof i && o.match(r) ? n.setAttribute(o, i) : n[o] = i
            }
            return n
        }

        function F(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (n) {
                var r = e.style.opacity || "1";
                T(e, {
                    opacity: "0"
                }),
                    window.setTimeout((function () {
                            T(e, {
                                opacity: r
                            })
                        }
                    ), 10)
            }
            t.appendChild(e)
        }

        function D(t, e) {
            return (t + 1) / e * 100
        }

        function G(t, e) {
            var n = document.querySelector(".introjs-disableInteraction");
            null === n && (n = M("div", {
                className: "introjs-disableInteraction"
            }),
                t._targetElement.appendChild(n)),
                I(t, e, n)
        }

        function V(t, e) {
            var n = M("div", {
                className: "introjs-bullets"
            });
            !1 === t._options.showBullets && (n.style.display = "none");
            var r = M("ul");
            r.setAttribute("role", "tablist");
            for (var o = function () {
                var e = this.getAttribute("data-step-number");
                null != e && t.goToStep(parseInt(e, 10))
            }, i = 0; i < t._introItems.length; i++) {
                var a = t._introItems[i].step
                    , s = M("li")
                    , l = M("a");
                s.setAttribute("role", "presentation"),
                    l.setAttribute("role", "tab"),
                    l.onclick = o,
                i === e.step - 1 && (l.className = "active"),
                    A(l),
                    l.innerHTML = "&nbsp;",
                    l.setAttribute("data-step-number", a.toString()),
                    s.appendChild(l),
                    r.appendChild(s)
            }
            return n.appendChild(r),
                n
        }

        function z(t, e, n) {
            if (t) {
                var r = e.querySelector(".introjs-bullets li > a.active")
                    , o = e.querySelector('.introjs-bullets li > a[data-step-number="'.concat(n.step, '"]'));
                r && o && (r.className = "",
                    o.className = "active")
            }
        }

        function W(t) {
            var e = M("div");
            e.className = "introjs-progress",
            !1 === t._options.showProgress && (e.style.display = "none");
            var n = M("div", {
                className: "introjs-progressbar"
            });
            t._options.progressBarAdditionalClass && (n.className += " " + t._options.progressBarAdditionalClass);
            var r = D(t._currentStep, t._introItems.length);
            return n.setAttribute("role", "progress"),
                n.setAttribute("aria-valuemin", "0"),
                n.setAttribute("aria-valuemax", "100"),
                n.setAttribute("aria-valuenow", r.toString()),
                n.style.cssText = "width:".concat(r, "%;"),
                e.appendChild(n),
                e
        }

        function Y(t, e, n) {
            var r = t.querySelector(".introjs-progress .introjs-progressbar");
            if (r) {
                var o = D(e, n);
                r.style.cssText = "width:".concat(o, "%;"),
                    r.setAttribute("aria-valuenow", o.toString())
            }
        }

        function $(t, e) {
            return Q.apply(this, arguments)
        }

        function Q() {
            return (Q = r(t().mark((function e(n, o) {
                    var i, a, s, l, c, u, p, h, f, d, m, v, b, y, g, k, S, E, N, L, P, O, q, B;
                    return t().wrap((function (e) {
                            for (; ;)
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (!w(n._introChangeCallback)) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3,
                                            n._introChangeCallback.call(n, o.element);
                                    case 3:
                                        if (i = document.querySelector(".introjs-helperLayer"),
                                            a = document.querySelector(".introjs-tooltipReferenceLayer"),
                                            s = "introjs-helperLayer",
                                        "string" == typeof o.highlightClass && (s += " ".concat(o.highlightClass)),
                                        "string" == typeof n._options.highlightClass && (s += " ".concat(n._options.highlightClass)),
                                            null !== i && null !== a ? (p = a.querySelector(".introjs-helperNumberLayer"),
                                                h = a.querySelector(".introjs-tooltiptext"),
                                                f = a.querySelector(".introjs-tooltip-title"),
                                                d = a.querySelector(".introjs-arrow"),
                                                m = a.querySelector(".introjs-tooltip"),
                                                u = a.querySelector(".introjs-skipbutton"),
                                                c = a.querySelector(".introjs-prevbutton"),
                                                l = a.querySelector(".introjs-nextbutton"),
                                                i.className = s,
                                                m.style.opacity = "0",
                                                m.style.display = "none",
                                                C(n._options.scrollToElement, o.element),
                                                I(n, o, i),
                                                I(n, o, a),
                                                R(),
                                            n._lastShowElementTimer && window.clearTimeout(n._lastShowElementTimer),
                                                n._lastShowElementTimer = window.setTimeout((function () {
                                                        null !== p && (p.innerHTML = "".concat(o.step, " ").concat(n._options.stepNumbersOfLabel, " ").concat(n._introItems.length)),
                                                            h.innerHTML = o.intro || "",
                                                            f.innerHTML = o.title || "",
                                                            m.style.display = "block",
                                                            H(n, o, m, d),
                                                            z(n._options.showBullets, a, o),
                                                            Y(a, n._currentStep, n._introItems.length),
                                                            m.style.opacity = "1",
                                                        (null != l && /introjs-donebutton/gi.test(l.className) || null != l) && l.focus(),
                                                            j(n._options.scrollToElement, o.scrollTo, n._options.scrollPadding, o.element, h)
                                                    }
                                                ), 350)) : (v = M("div", {
                                                className: s
                                            }),
                                                b = M("div", {
                                                    className: "introjs-tooltipReferenceLayer"
                                                }),
                                                y = M("div", {
                                                    className: "introjs-arrow"
                                                }),
                                                g = M("div", {
                                                    className: "introjs-tooltip"
                                                }),
                                                k = M("div", {
                                                    className: "introjs-tooltiptext"
                                                }),
                                                S = M("div", {
                                                    className: "introjs-tooltip-header"
                                                }),
                                                E = M("h1", {
                                                    className: "introjs-tooltip-title"
                                                }),
                                                N = M("div"),
                                                T(v, {
                                                    "box-shadow": "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(n._options.overlayOpacity.toString(), ") 0 0 0 5000px")
                                                }),
                                                C(n._options.scrollToElement, o.element),
                                                I(n, o, v),
                                                I(n, o, b),
                                                F(n._targetElement, v, !0),
                                                F(n._targetElement, b),
                                                k.innerHTML = o.intro,
                                                E.innerHTML = o.title,
                                                N.className = "introjs-tooltipbuttons",
                                            !1 === n._options.showButtons && (N.style.display = "none"),
                                                S.appendChild(E),
                                                g.appendChild(S),
                                                g.appendChild(k),
                                            n._options.dontShowAgain && (L = M("div", {
                                                className: "introjs-dontShowAgain"
                                            }),
                                                (P = M("input", {
                                                    type: "checkbox",
                                                    id: "introjs-dontShowAgain",
                                                    name: "introjs-dontShowAgain"
                                                })).onchange = function (t) {
                                                    n.setDontShowAgain(t.target.checked)
                                                }
                                                ,
                                                (O = M("label", {
                                                    htmlFor: "introjs-dontShowAgain"
                                                })).innerText = n._options.dontShowAgainLabel,
                                                L.appendChild(P),
                                                L.appendChild(O),
                                                g.appendChild(L)),
                                                g.appendChild(V(n, o)),
                                                g.appendChild(W(n)),
                                                q = M("div"),
                                            !0 === n._options.showStepNumbers && (q.className = "introjs-helperNumberLayer",
                                                q.innerHTML = "".concat(o.step, " ").concat(n._options.stepNumbersOfLabel, " ").concat(n._introItems.length),
                                                g.appendChild(q)),
                                                g.appendChild(y),
                                                b.appendChild(g),
                                                (l = M("a")).onclick = r(t().mark((function e() {
                                                        return t().wrap((function (t) {
                                                                for (; ;)
                                                                    switch (t.prev = t.next) {
                                                                        case 0:
                                                                            if (n._introItems.length - 1 === n._currentStep) {
                                                                                t.next = 5;
                                                                                break
                                                                            }
                                                                            return t.next = 3,
                                                                                K(n);
                                                                        case 3:
                                                                            t.next = 11;
                                                                            break;
                                                                        case 5:
                                                                            if (!/introjs-donebutton/gi.test(l.className)) {
                                                                                t.next = 11;
                                                                                break
                                                                            }
                                                                            if (!w(n._introCompleteCallback)) {
                                                                                t.next = 9;
                                                                                break
                                                                            }
                                                                            return t.next = 9,
                                                                                n._introCompleteCallback.call(n, n._currentStep, "done");
                                                                        case 9:
                                                                            return t.next = 11,
                                                                                Nt(n, n._targetElement);
                                                                        case 11:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                            }
                                                        ), e)
                                                    }
                                                ))),
                                                A(l),
                                                l.innerHTML = n._options.nextLabel,
                                                (c = M("a")).onclick = r(t().mark((function e() {
                                                        return t().wrap((function (t) {
                                                                for (; ;)
                                                                    switch (t.prev = t.next) {
                                                                        case 0:
                                                                            if (!(n._currentStep > 0)) {
                                                                                t.next = 3;
                                                                                break
                                                                            }
                                                                            return t.next = 3,
                                                                                et(n);
                                                                        case 3:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                            }
                                                        ), e)
                                                    }
                                                ))),
                                                A(c),
                                                c.innerHTML = n._options.prevLabel,
                                                A(u = M("a", {
                                                    className: "introjs-skipbutton"
                                                })),
                                                u.innerHTML = n._options.skipLabel,
                                                u.onclick = r(t().mark((function e() {
                                                        return t().wrap((function (t) {
                                                                for (; ;)
                                                                    switch (t.prev = t.next) {
                                                                        case 0:
                                                                            if (n._introItems.length - 1 !== n._currentStep || !w(n._introCompleteCallback)) {
                                                                                t.next = 3;
                                                                                break
                                                                            }
                                                                            return t.next = 3,
                                                                                n._introCompleteCallback.call(n, n._currentStep, "skip");
                                                                        case 3:
                                                                            if (!w(n._introSkipCallback)) {
                                                                                t.next = 6;
                                                                                break
                                                                            }
                                                                            return t.next = 6,
                                                                                n._introSkipCallback.call(n, n._currentStep);
                                                                        case 6:
                                                                            return t.next = 8,
                                                                                Nt(n, n._targetElement);
                                                                        case 8:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                            }
                                                        ), e)
                                                    }
                                                ))),
                                                S.appendChild(u),
                                            n._introItems.length > 1 && N.appendChild(c),
                                                N.appendChild(l),
                                                g.appendChild(N),
                                                H(n, o, g, y),
                                                j(n._options.scrollToElement, o.scrollTo, n._options.scrollPadding, o.element, g)),
                                        (B = n._targetElement.querySelector(".introjs-disableInteraction")) && B.parentNode && B.parentNode.removeChild(B),
                                        o.disableInteraction && G(n, o),
                                            0 === n._currentStep && n._introItems.length > 1 ? (null != l && (l.className = "".concat(n._options.buttonClass, " introjs-nextbutton"),
                                                l.innerHTML = n._options.nextLabel),
                                                !0 === n._options.hidePrev ? (null != c && (c.className = "".concat(n._options.buttonClass, " introjs-prevbutton introjs-hidden")),
                                                null != l && _(l, "introjs-fullbutton")) : null != c && (c.className = "".concat(n._options.buttonClass, " introjs-prevbutton introjs-disabled"))) : n._introItems.length - 1 === n._currentStep || 1 === n._introItems.length ? (null != c && (c.className = "".concat(n._options.buttonClass, " introjs-prevbutton")),
                                                !0 === n._options.hideNext ? (null != l && (l.className = "".concat(n._options.buttonClass, " introjs-nextbutton introjs-hidden")),
                                                null != c && _(c, "introjs-fullbutton")) : null != l && (!0 === n._options.nextToDone ? (l.innerHTML = n._options.doneLabel,
                                                    _(l, "".concat(n._options.buttonClass, " introjs-nextbutton introjs-donebutton"))) : l.className = "".concat(n._options.buttonClass, " introjs-nextbutton introjs-disabled"))) : (null != c && (c.className = "".concat(n._options.buttonClass, " introjs-prevbutton")),
                                            null != l && (l.className = "".concat(n._options.buttonClass, " introjs-nextbutton"),
                                                l.innerHTML = n._options.nextLabel)),
                                        null != c && c.setAttribute("role", "button"),
                                        null != l && l.setAttribute("role", "button"),
                                        null != u && u.setAttribute("role", "button"),
                                        null != l && l.focus(),
                                            x(o.element),
                                            !w(n._introAfterChangeCallback)) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.next = 21,
                                            n._introAfterChangeCallback.call(n, o.element);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function U(t, e) {
            return X.apply(this, arguments)
        }

        function X() {
            return (X = r(t().mark((function e(n, r) {
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n._currentStep = r - 2,
                                        void 0 === n._introItems) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4,
                                            K(n);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function J(t, e) {
            return Z.apply(this, arguments)
        }

        function Z() {
            return (Z = r(t().mark((function e(n, r) {
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n._currentStepNumber = r,
                                        void 0 === n._introItems) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.next = 4,
                                            K(n);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function K(t) {
            return tt.apply(this, arguments)
        }

        function tt() {
            return tt = r(t().mark((function e(n) {
                    var r, o, i;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n._direction = "forward",
                                        void 0 !== n._currentStepNumber)
                                            for (r = 0; r < n._introItems.length; r++)
                                                n._introItems[r].step === n._currentStepNumber && (n._currentStep = r - 1,
                                                    n._currentStepNumber = void 0);
                                        if (-1 === n._currentStep ? n._currentStep = 0 : ++n._currentStep,
                                            o = n._introItems[n._currentStep],
                                            i = !0,
                                            !w(n._introBeforeChangeCallback)) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.next = 8,
                                            n._introBeforeChangeCallback.call(n, o && o.element, n._currentStep, n._direction);
                                    case 8:
                                        i = t.sent;
                                    case 9:
                                        if (!1 !== i) {
                                            t.next = 12;
                                            break
                                        }
                                        return --n._currentStep,
                                            t.abrupt("return", !1);
                                    case 12:
                                        if (!(n._introItems.length <= n._currentStep)) {
                                            t.next = 19;
                                            break
                                        }
                                        if (!w(n._introCompleteCallback)) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 16,
                                            n._introCompleteCallback.call(n, n._currentStep, "end");
                                    case 16:
                                        return t.next = 18,
                                            Nt(n, n._targetElement);
                                    case 18:
                                        return t.abrupt("return", !1);
                                    case 19:
                                        return t.next = 21,
                                            $(n, o);
                                    case 21:
                                        return t.abrupt("return", !0);
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            ))),
                tt.apply(this, arguments)
        }

        function et(t) {
            return nt.apply(this, arguments)
        }

        function nt() {
            return nt = r(t().mark((function e(n) {
                    var r, o;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n._direction = "backward",
                                            !(n._currentStep <= 0)) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 3:
                                        if (--n._currentStep,
                                            r = n._introItems[n._currentStep],
                                            o = !0,
                                            !w(n._introBeforeChangeCallback)) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.next = 9,
                                            n._introBeforeChangeCallback.call(n, r && r.element, n._currentStep, n._direction);
                                    case 9:
                                        o = t.sent;
                                    case 10:
                                        if (!1 !== o) {
                                            t.next = 13;
                                            break
                                        }
                                        return ++n._currentStep,
                                            t.abrupt("return", !1);
                                    case 13:
                                        return t.next = 15,
                                            $(n, r);
                                    case 15:
                                        return t.abrupt("return", !0);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            ))),
                nt.apply(this, arguments)
        }

        function rt(t, e) {
            return ot.apply(this, arguments)
        }

        function ot() {
            return (ot = r(t().mark((function e(n, r) {
                    var o, i;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (null === (o = void 0 === r.code ? r.which : r.code) && (o = null === r.charCode ? r.keyCode : r.charCode),
                                        "Escape" !== o && 27 !== o || !0 !== n._options.exitOnEsc) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.next = 5,
                                            Nt(n, n._targetElement);
                                    case 5:
                                        t.next = 39;
                                        break;
                                    case 7:
                                        if ("ArrowLeft" !== o && 37 !== o) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 10,
                                            et(n);
                                    case 10:
                                        t.next = 39;
                                        break;
                                    case 12:
                                        if ("ArrowRight" !== o && 39 !== o) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.next = 15,
                                            K(n);
                                    case 15:
                                        t.next = 39;
                                        break;
                                    case 17:
                                        if ("Enter" !== o && "NumpadEnter" !== o && 13 !== o) {
                                            t.next = 39;
                                            break
                                        }
                                        if (!(i = r.target || r.srcElement) || !i.className.match("introjs-prevbutton")) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.next = 22,
                                            et(n);
                                    case 22:
                                        t.next = 38;
                                        break;
                                    case 24:
                                        if (!i || !i.className.match("introjs-skipbutton")) {
                                            t.next = 32;
                                            break
                                        }
                                        if (n._introItems.length - 1 !== n._currentStep || !w(n._introCompleteCallback)) {
                                            t.next = 28;
                                            break
                                        }
                                        return t.next = 28,
                                            n._introCompleteCallback.call(n, n._currentStep, "skip");
                                    case 28:
                                        return t.next = 30,
                                            Nt(n, n._targetElement);
                                    case 30:
                                        t.next = 38;
                                        break;
                                    case 32:
                                        if (!i || !i.getAttribute("data-step-number")) {
                                            t.next = 36;
                                            break
                                        }
                                        i.click(),
                                            t.next = 38;
                                        break;
                                    case 36:
                                        return t.next = 38,
                                            K(n);
                                    case 38:
                                        r.preventDefault ? r.preventDefault() : r.returnValue = !1;
                                    case 39:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function it(t) {
            if (null === t || "object" !== e(t) || "nodeType" in t)
                return t;
            var n = {};
            for (var r in t)
                "jQuery" in window && t[r] instanceof window.jQuery ? n[r] = t[r] : n[r] = it(t[r]);
            return n
        }

        function at(t, e) {
            var n;
            return function () {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                window.clearTimeout(n),
                    n = window.setTimeout((function () {
                            t(o)
                        }
                    ), e)
            }
        }

        function st(t) {
            var e = document.querySelector(".introjs-hints");
            return e ? Array.from(e.querySelectorAll(t)) : []
        }

        function lt(t, e) {
            return ct.apply(this, arguments)
        }

        function ct() {
            return (ct = r(t().mark((function e(n, r) {
                    var o;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (o = st('.introjs-hint[data-step="'.concat(r, '"]'))[0],
                                            _t(),
                                        o && _(o, "introjs-hidehint"),
                                            !w(n._hintCloseCallback)) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 6,
                                            n._hintCloseCallback.call(n, r);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function ut(t) {
            return pt.apply(this, arguments)
        }

        function pt() {
            return (pt = r(t().mark((function e(n) {
                    var r, o, i, a, s;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        r = st(".introjs-hint"),
                                            o = p(r),
                                            t.prev = 2,
                                            o.s();
                                    case 4:
                                        if ((i = o.n()).done) {
                                            t.next = 13;
                                            break
                                        }
                                        if (a = i.value,
                                            s = a.getAttribute("data-step")) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("continue", 11);
                                    case 9:
                                        return t.next = 11,
                                            lt(n, parseInt(s, 10));
                                    case 11:
                                        t.next = 4;
                                        break;
                                    case 13:
                                        t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15,
                                            t.t0 = t.catch(2),
                                            o.e(t.t0);
                                    case 18:
                                        return t.prev = 18,
                                            o.f(),
                                            t.finish(18);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e, null, [[2, 15, 18, 21]])
                }
            )))).apply(this, arguments)
        }

        function ht(t) {
            return ft.apply(this, arguments)
        }

        function ft() {
            return (ft = r(t().mark((function e(n) {
                    var r, o, i, a, s;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (!(r = st(".introjs-hint")) || !r.length) {
                                            t.next = 23;
                                            break
                                        }
                                        o = p(r),
                                            t.prev = 3,
                                            o.s();
                                    case 5:
                                        if ((i = o.n()).done) {
                                            t.next = 13;
                                            break
                                        }
                                        if (a = i.value,
                                            s = a.getAttribute("data-step")) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("continue", 11);
                                    case 10:
                                        dt(parseInt(s, 10));
                                    case 11:
                                        t.next = 5;
                                        break;
                                    case 13:
                                        t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15,
                                            t.t0 = t.catch(3),
                                            o.e(t.t0);
                                    case 18:
                                        return t.prev = 18,
                                            o.f(),
                                            t.finish(18);
                                    case 21:
                                        t.next = 25;
                                        break;
                                    case 23:
                                        return t.next = 25,
                                            kt(n, n._targetElement);
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e, null, [[3, 15, 18, 21]])
                }
            )))).apply(this, arguments)
        }

        function dt(t) {
            var e = st('.introjs-hint[data-step="'.concat(t, '"]'))[0];
            e && L(e, /introjs-hidehint/g)
        }

        function mt(t) {
            var e = st('.introjs-hint[data-step="'.concat(t, '"]'))[0];
            e && e.parentNode && e.parentNode.removeChild(e)
        }

        function vt(t) {
            return bt.apply(this, arguments)
        }

        function bt() {
            return (bt = r(t().mark((function e(n) {
                    var r, o, i, a, s, l, c;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        null === (r = document.querySelector(".introjs-hints")) && (r = M("div", {
                                            className: "introjs-hints"
                                        })),
                                            o = function (t) {
                                                return function (e) {
                                                    var r = e || window.event;
                                                    r && r.stopPropagation && r.stopPropagation(),
                                                    r && null !== r.cancelBubble && (r.cancelBubble = !0),
                                                        gt(n, t)
                                                }
                                            }
                                            ,
                                            i = 0;
                                    case 4:
                                        if (!(i < n._hintItems.length)) {
                                            t.next = 25;
                                            break
                                        }
                                        if (a = n._hintItems[i],
                                            !document.querySelector('.introjs-hint[data-step="'.concat(i, '"]'))) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        A(s = M("a", {
                                            className: "introjs-hint"
                                        })),
                                            s.onclick = o(i),
                                        a.hintAnimation || _(s, "introjs-hint-no-anim"),
                                        E(a.element) && _(s, "introjs-fixedhint"),
                                            l = M("div", {
                                                className: "introjs-hint-dot"
                                            }),
                                            c = M("div", {
                                                className: "introjs-hint-pulse"
                                            }),
                                            s.appendChild(l),
                                            s.appendChild(c),
                                            s.setAttribute("data-step", i.toString()),
                                            a.hintTargetElement = a.element,
                                            a.element = s,
                                            yt(a.hintPosition, s, a.hintTargetElement),
                                            r.appendChild(s);
                                    case 22:
                                        i++,
                                            t.next = 4;
                                        break;
                                    case 25:
                                        if (document.body.appendChild(r),
                                            !w(n._hintsAddedCallback)) {
                                            t.next = 29;
                                            break
                                        }
                                        return t.next = 29,
                                            n._hintsAddedCallback.call(n);
                                    case 29:
                                        n._options.hintAutoRefreshInterval >= 0 && (n._hintsAutoRefreshFunction = at((function () {
                                                return Ct(n)
                                            }
                                        ), n._options.hintAutoRefreshInterval),
                                            g.on(window, "scroll", n._hintsAutoRefreshFunction, n, !0));
                                    case 30:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function yt(t, e, n) {
            if (void 0 !== n) {
                var r = N(n)
                    , o = 20
                    , i = 20;
                switch (t) {
                    default:
                    case "top-left":
                        e.style.left = "".concat(r.left, "px"),
                            e.style.top = "".concat(r.top, "px");
                        break;
                    case "top-right":
                        e.style.left = "".concat(r.left + r.width - o, "px"),
                            e.style.top = "".concat(r.top, "px");
                        break;
                    case "bottom-left":
                        e.style.left = "".concat(r.left, "px"),
                            e.style.top = "".concat(r.top + r.height - i, "px");
                        break;
                    case "bottom-right":
                        e.style.left = "".concat(r.left + r.width - o, "px"),
                            e.style.top = "".concat(r.top + r.height - i, "px");
                        break;
                    case "middle-left":
                        e.style.left = "".concat(r.left, "px"),
                            e.style.top = "".concat(r.top + (r.height - i) / 2, "px");
                        break;
                    case "middle-right":
                        e.style.left = "".concat(r.left + r.width - o, "px"),
                            e.style.top = "".concat(r.top + (r.height - i) / 2, "px");
                        break;
                    case "middle-middle":
                        e.style.left = "".concat(r.left + (r.width - o) / 2, "px"),
                            e.style.top = "".concat(r.top + (r.height - i) / 2, "px");
                        break;
                    case "bottom-middle":
                        e.style.left = "".concat(r.left + (r.width - o) / 2, "px"),
                            e.style.top = "".concat(r.top + r.height - i, "px");
                        break;
                    case "top-middle":
                        e.style.left = "".concat(r.left + (r.width - o) / 2, "px"),
                            e.style.top = "".concat(r.top, "px")
                }
            }
        }

        function gt(t, e) {
            return wt.apply(this, arguments)
        }

        function wt() {
            return (wt = r(t().mark((function e(n, r) {
                    var o, i, a, s, l, c, u, p, h, f, d;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (o = document.querySelector('.introjs-hint[data-step="'.concat(r, '"]')),
                                            i = n._hintItems[r],
                                            !w(n._hintClickCallback)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 5,
                                            n._hintClickCallback.call(n, o, i, r);
                                    case 5:
                                        if (void 0 === (a = _t()) || parseInt(a, 10) !== r) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        s = M("div", {
                                            className: "introjs-tooltip"
                                        }),
                                            l = M("div"),
                                            c = M("div"),
                                            u = M("div"),
                                            s.onclick = function (t) {
                                                t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                                            }
                                            ,
                                            l.className = "introjs-tooltiptext",
                                            (p = M("p")).innerHTML = i.hint || "",
                                            l.appendChild(p),
                                        n._options.hintShowButton && ((h = M("a")).className = n._options.buttonClass,
                                            h.setAttribute("role", "button"),
                                            h.innerHTML = n._options.hintButtonLabel,
                                            h.onclick = function () {
                                                return lt(n, r)
                                            }
                                            ,
                                            l.appendChild(h)),
                                            c.className = "introjs-arrow",
                                            s.appendChild(c),
                                            s.appendChild(l),
                                            f = o.getAttribute("data-step") || "",
                                            n._currentStep = parseInt(f, 10),
                                            d = n._hintItems[n._currentStep],
                                            u.className = "introjs-tooltipReferenceLayer introjs-hintReference",
                                            u.setAttribute("data-step", f),
                                            I(n, d, u),
                                            u.appendChild(s),
                                            document.body.appendChild(u),
                                            H(n, d, s, c, !0);
                                    case 30:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function _t() {
            var t = document.querySelector(".introjs-hintReference");
            if (t && t.parentNode) {
                var e = t.getAttribute("data-step");
                if (!e)
                    return;
                return t.parentNode.removeChild(t),
                    e
            }
        }

        function kt(t, e) {
            return xt.apply(this, arguments)
        }

        function xt() {
            return (xt = r(t().mark((function e(n, r) {
                    var o, i, a, s, l, c, u, h, f, d;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n._hintItems = [],
                                            !(n._options.hints && n._options.hints.length > 0)) {
                                            t.next = 6;
                                            break
                                        }
                                        o = p(n._options.hints);
                                        try {
                                            for (o.s(); !(i = o.n()).done;)
                                                a = i.value,
                                                "string" == typeof (s = it(a)).element && (s.element = document.querySelector(s.element)),
                                                    s.hintPosition = s.hintPosition || n._options.hintPosition,
                                                    s.hintAnimation = s.hintAnimation || n._options.hintAnimation,
                                                null !== s.element && n._hintItems.push(s)
                                        } catch (t) {
                                            o.e(t)
                                        } finally {
                                            o.f()
                                        }
                                        t.next = 10;
                                        break;
                                    case 6:
                                        if ((l = Array.from(r.querySelectorAll("*[data-hint]"))) && l.length) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 9:
                                        for (c = 0,
                                                 u = l; c < u.length; c++)
                                            h = u[c],
                                                f = h.getAttribute("data-hint-animation"),
                                                d = n._options.hintAnimation,
                                            f && (d = "true" === f),
                                                n._hintItems.push({
                                                    element: h,
                                                    hint: h.getAttribute("data-hint") || "",
                                                    hintPosition: h.getAttribute("data-hint-position") || n._options.hintPosition,
                                                    hintAnimation: d,
                                                    tooltipClass: h.getAttribute("data-tooltip-class") || void 0,
                                                    position: h.getAttribute("data-position") || n._options.tooltipPosition
                                                });
                                    case 10:
                                        return t.next = 12,
                                            vt(n);
                                    case 12:
                                        return g.on(document, "click", _t, n, !1),
                                            g.on(window, "resize", Ct, n, !0),
                                            t.abrupt("return", !0);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function Ct(t) {
            var e, n = p(t._hintItems);
            try {
                for (n.s(); !(e = n.n()).done;) {
                    var r = e.value
                        , o = r.hintTargetElement;
                    yt(r.hintPosition, r.element, o)
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
        }

        function St(t, e) {
            var n = Array.from(e.querySelectorAll("*[data-intro]"))
                , r = [];
            if (t._options.steps && t._options.steps.length) {
                var o, i = p(t._options.steps);
                try {
                    for (i.s(); !(o = i.n()).done;) {
                        var a = it(o.value);
                        if (a.step = r.length + 1,
                            a.title = a.title || "",
                        "string" == typeof a.element && (a.element = document.querySelector(a.element) || void 0),
                        void 0 === a.element || null === a.element) {
                            var s = document.querySelector(".introjsFloatingElement");
                            null === s && (s = M("div", {
                                className: "introjsFloatingElement"
                            }),
                                document.body.appendChild(s)),
                                a.element = s,
                                a.position = "floating"
                        }
                        a.position = a.position || t._options.tooltipPosition,
                            a.scrollTo = a.scrollTo || t._options.scrollTo,
                        void 0 === a.disableInteraction && (a.disableInteraction = t._options.disableInteraction),
                        null !== a.element && r.push(a)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
            } else {
                var l;
                if (n.length < 1)
                    return [];
                var c, u = p(n);
                try {
                    for (u.s(); !(c = u.n()).done;) {
                        var h = c.value;
                        if ((!t._options.group || h.getAttribute("data-intro-group") === t._options.group) && "none" !== h.style.display) {
                            var f = parseInt(h.getAttribute("data-step") || "", 10);
                            l = t._options.disableInteraction,
                            h.hasAttribute("data-disable-interaction") && (l = !!h.getAttribute("data-disable-interaction")),
                            f > 0 && (r[f - 1] = {
                                step: f,
                                element: h,
                                title: h.getAttribute("data-title") || "",
                                intro: h.getAttribute("data-intro") || "",
                                tooltipClass: h.getAttribute("data-tooltip-class") || void 0,
                                highlightClass: h.getAttribute("data-highlight-class") || void 0,
                                position: h.getAttribute("data-position") || t._options.tooltipPosition,
                                scrollTo: h.getAttribute("data-scroll-to") || t._options.scrollTo,
                                disableInteraction: l
                            })
                        }
                    }
                } catch (t) {
                    u.e(t)
                } finally {
                    u.f()
                }
                var d, m = 0, v = p(n);
                try {
                    for (v.s(); !(d = v.n()).done;) {
                        var b = d.value;
                        if ((!t._options.group || b.getAttribute("data-intro-group") === t._options.group) && null === b.getAttribute("data-step")) {
                            for (; void 0 !== r[m];)
                                m++;
                            l = b.hasAttribute("data-disable-interaction") ? !!b.getAttribute("data-disable-interaction") : t._options.disableInteraction,
                                r[m] = {
                                    element: b,
                                    title: b.getAttribute("data-title") || "",
                                    intro: b.getAttribute("data-intro") || "",
                                    step: m + 1,
                                    tooltipClass: b.getAttribute("data-tooltip-class") || void 0,
                                    highlightClass: b.getAttribute("data-highlight-class") || void 0,
                                    position: b.getAttribute("data-position") || t._options.tooltipPosition,
                                    scrollTo: b.getAttribute("data-scroll-to") || t._options.scrollTo,
                                    disableInteraction: l
                                }
                        }
                    }
                } catch (t) {
                    v.e(t)
                } finally {
                    v.f()
                }
            }
            for (var y = [], g = 0; g < r.length; g++)
                r[g] && y.push(r[g]);
            return (r = y).sort((function (t, e) {
                    return t.step - e.step
                }
            )),
                r
        }

        function jt(t, e) {
            var n = t._currentStep;
            if (null != n && -1 != n) {
                var r = t._introItems[n]
                    , o = document.querySelector(".introjs-tooltipReferenceLayer")
                    , i = document.querySelector(".introjs-helperLayer")
                    , a = document.querySelector(".introjs-disableInteraction");
                I(t, r, i),
                    I(t, r, o),
                    I(t, r, a),
                e && (t._introItems = St(t, t._targetElement),
                    function (t, e) {
                        if (t._options.showBullets) {
                            var n = document.querySelector(".introjs-bullets");
                            n && n.parentNode && n.parentNode.replaceChild(V(t, e), n)
                        }
                    }(t, r),
                    Y(o, n, t._introItems.length));
                var s = document.querySelector(".introjs-arrow")
                    , l = document.querySelector(".introjs-tooltip");
                return l && s && H(t, t._introItems[n], l, s),
                    Ct(t),
                    t
            }
        }

        function At(t) {
            jt(t)
        }

        function Et(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (t && t.parentElement) {
                var n = t.parentElement;
                e ? (T(t, {
                    opacity: "0"
                }),
                    window.setTimeout((function () {
                            try {
                                n.removeChild(t)
                            } catch (t) {
                            }
                        }
                    ), 500)) : n.removeChild(t)
            }
        }

        function Nt(t, e) {
            return Lt.apply(this, arguments)
        }

        function Lt() {
            return Lt = r(t().mark((function e(n, r) {
                    var o, i, a, s, l, c = arguments;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (o = c.length > 2 && void 0 !== c[2] && c[2],
                                            i = !0,
                                        void 0 === n._introBeforeExitCallback) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 5,
                                            n._introBeforeExitCallback.call(n, r);
                                    case 5:
                                        i = t.sent;
                                    case 6:
                                        if (o || !1 !== i) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        if ((a = Array.from(r.querySelectorAll(".introjs-overlay"))) && a.length) {
                                            s = p(a);
                                            try {
                                                for (s.s(); !(l = s.n()).done;)
                                                    Et(l.value)
                                            } catch (t) {
                                                s.e(t)
                                            } finally {
                                                s.f()
                                            }
                                        }
                                        if (Et(r.querySelector(".introjs-helperLayer"), !0),
                                            Et(r.querySelector(".introjs-tooltipReferenceLayer")),
                                            Et(r.querySelector(".introjs-disableInteraction")),
                                            Et(document.querySelector(".introjsFloatingElement")),
                                            R(),
                                            g.off(window, "keydown", rt, n, !0),
                                            g.off(window, "resize", At, n, !0),
                                            !w(n._introExitCallback)) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.next = 24,
                                            n._introExitCallback.call(n);
                                    case 24:
                                        n._currentStep = -1;
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            ))),
                Lt.apply(this, arguments)
        }

        function Tt(e, n) {
            var o = M("div", {
                className: "introjs-overlay"
            });
            return T(o, {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: "fixed"
            }),
                n.appendChild(o),
            !0 === e._options.exitOnOverlayClick && (T(o, {
                cursor: "pointer"
            }),
                o.onclick = r(t().mark((function r() {
                        return t().wrap((function (t) {
                                for (; ;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2,
                                                Nt(e, n);
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                            }
                        ), r)
                    }
                )))),
                !0
        }

        function It(t, e) {
            return Pt.apply(this, arguments)
        }

        function Pt() {
            return (Pt = r(t().mark((function e(n, r) {
                    var o;
                    return t().wrap((function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n.isActive()) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 2:
                                        if (!w(n._introStartCallback)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 5,
                                            n._introStartCallback.call(n, r);
                                    case 5:
                                        if (0 !== (o = St(n, r)).length) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 8:
                                        return n._introItems = o,
                                            Tt(n, r),
                                            t.next = 12,
                                            K(n);
                                    case 12:
                                        r.addEventListener,
                                        n._options.keyboardNavigation && g.on(window, "keydown", rt, n, !0),
                                            g.on(window, "resize", At, n, !0);
                                    case 15:
                                        return t.abrupt("return", !1);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                        }
                    ), e)
                }
            )))).apply(this, arguments)
        }

        function Ot(t, e, n) {
            return t[e] = n,
                t
        }

        var qt = function () {
            function e(t) {
                o(this, e),
                    s(this, "_currentStep", -1),
                    s(this, "_currentStepNumber", void 0),
                    s(this, "_direction", void 0),
                    s(this, "_targetElement", void 0),
                    s(this, "_introItems", []),
                    s(this, "_hintItems", []),
                    s(this, "_options", void 0),
                    s(this, "_introBeforeChangeCallback", void 0),
                    s(this, "_introChangeCallback", void 0),
                    s(this, "_introAfterChangeCallback", void 0),
                    s(this, "_introCompleteCallback", void 0),
                    s(this, "_introStartCallback", void 0),
                    s(this, "_introExitCallback", void 0),
                    s(this, "_introSkipCallback", void 0),
                    s(this, "_introBeforeExitCallback", void 0),
                    s(this, "_hintsAddedCallback", void 0),
                    s(this, "_hintClickCallback", void 0),
                    s(this, "_hintCloseCallback", void 0),
                    s(this, "_lastShowElementTimer", void 0),
                    s(this, "_hintsAutoRefreshFunction", void 0),
                    this._targetElement = t,
                    this._options = {
                        steps: [],
                        hints: [],
                        isActive: !0,
                        nextLabel: "Next",
                        prevLabel: "Back",
                        skipLabel: "×",
                        doneLabel: "Done",
                        hidePrev: !1,
                        hideNext: !1,
                        nextToDone: !0,
                        tooltipPosition: "bottom",
                        tooltipClass: "",
                        group: "",
                        highlightClass: "",
                        exitOnEsc: !0,
                        exitOnOverlayClick: !0,
                        showStepNumbers: !1,
                        stepNumbersOfLabel: "of",
                        keyboardNavigation: !0,
                        showButtons: !0,
                        showBullets: !0,
                        showProgress: !1,
                        scrollToElement: !0,
                        scrollTo: "element",
                        scrollPadding: 30,
                        overlayOpacity: .5,
                        autoPosition: !0,
                        positionPrecedence: ["bottom", "top", "right", "left"],
                        disableInteraction: !1,
                        dontShowAgain: !1,
                        dontShowAgainLabel: "Don't show this again",
                        dontShowAgainCookie: "introjs-dontShowAgain",
                        dontShowAgainCookieDays: 365,
                        helperElementPadding: 10,
                        hintPosition: "top-middle",
                        hintButtonLabel: "Got it",
                        hintShowButton: !0,
                        hintAutoRefreshInterval: 10,
                        hintAnimation: !0,
                        buttonClass: "introjs-button",
                        progressBarAdditionalClass: !1
                    }
            }

            var n, i, c, u, h, f, b, y, _, k;
            return a(e, [{
                key: "isActive",
                value: function () {
                    return (!this._options.dontShowAgain || "" === (t = d(this._options.dontShowAgainCookie)) || t !== m) && this._options.isActive;
                    var t
                }
            }, {
                key: "clone",
                value: function () {
                    return new e(this._targetElement)
                }
            }, {
                key: "setOption",
                value: function (t, e) {
                    return this._options = Ot(this._options, t, e),
                        this
                }
            }, {
                key: "setOptions",
                value: function (t) {
                    return this._options = function (t, e) {
                        for (var n = 0, r = Object.entries(e); n < r.length; n++) {
                            var o = l(r[n], 2);
                            t = Ot(t, o[0], o[1])
                        }
                        return t
                    }(this._options, t),
                        this
                }
            }, {
                key: "start",
                value: (k = r(t().mark((function e() {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    It(this, this._targetElement);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function () {
                            return k.apply(this, arguments)
                        }
                )
            }, {
                key: "goToStep",
                value: (_ = r(t().mark((function e(n) {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    U(this, n);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function (t) {
                            return _.apply(this, arguments)
                        }
                )
            }, {
                key: "addStep",
                value: function (t) {
                    return this._options.steps || (this._options.steps = []),
                        this._options.steps.push(t),
                        this
                }
            }, {
                key: "addSteps",
                value: function (t) {
                    if (!t.length)
                        return this;
                    for (var e = 0; e < t.length; e++)
                        this.addStep(t[e]);
                    return this
                }
            }, {
                key: "goToStepNumber",
                value: (y = r(t().mark((function e(n) {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    J(this, n);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function (t) {
                            return y.apply(this, arguments)
                        }
                )
            }, {
                key: "nextStep",
                value: (b = r(t().mark((function e() {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    K(this);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function () {
                            return b.apply(this, arguments)
                        }
                )
            }, {
                key: "previousStep",
                value: (f = r(t().mark((function e() {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    et(this);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function () {
                            return f.apply(this, arguments)
                        }
                )
            }, {
                key: "currentStep",
                value: function () {
                    return this._currentStep
                }
            }, {
                key: "exit",
                value: (h = r(t().mark((function e(n) {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    Nt(this, this._targetElement, n);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function (t) {
                            return h.apply(this, arguments)
                        }
                )
            }, {
                key: "refresh",
                value: function (t) {
                    return jt(this, t),
                        this
                }
            }, {
                key: "setDontShowAgain",
                value: function (t) {
                    return v(this, t),
                        this
                }
            }, {
                key: "onbeforechange",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onbeforechange was not a function");
                    return this._introBeforeChangeCallback = t,
                        this
                }
            }, {
                key: "onchange",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onchange was not a function.");
                    return this._introChangeCallback = t,
                        this
                }
            }, {
                key: "onafterchange",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onafterchange was not a function");
                    return this._introAfterChangeCallback = t,
                        this
                }
            }, {
                key: "oncomplete",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for oncomplete was not a function.");
                    return this._introCompleteCallback = t,
                        this
                }
            }, {
                key: "onhintsadded",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onhintsadded was not a function.");
                    return this._hintsAddedCallback = t,
                        this
                }
            }, {
                key: "onhintclick",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onhintclick was not a function.");
                    return this._hintClickCallback = t,
                        this
                }
            }, {
                key: "onhintclose",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onhintclose was not a function.");
                    return this._hintCloseCallback = t,
                        this
                }
            }, {
                key: "onstart",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onstart was not a function.");
                    return this._introStartCallback = t,
                        this
                }
            }, {
                key: "onexit",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onexit was not a function.");
                    return this._introExitCallback = t,
                        this
                }
            }, {
                key: "onskip",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onskip was not a function.");
                    return this._introSkipCallback = t,
                        this
                }
            }, {
                key: "onbeforeexit",
                value: function (t) {
                    if (!w(t))
                        throw new Error("Provided callback for onbeforeexit was not a function.");
                    return this._introBeforeExitCallback = t,
                        this
                }
            }, {
                key: "addHints",
                value: function () {
                    var e = r(t().mark((function e() {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    kt(this, this._targetElement);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    )));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "hideHint",
                value: (u = r(t().mark((function e(n) {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    lt(this, n);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function (t) {
                            return u.apply(this, arguments)
                        }
                )
            }, {
                key: "hideHints",
                value: (c = r(t().mark((function e() {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    ut(this);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function () {
                            return c.apply(this, arguments)
                        }
                )
            }, {
                key: "showHint",
                value: function (t) {
                    return dt(t),
                        this
                }
            }, {
                key: "showHints",
                value: (i = r(t().mark((function e() {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    ht(this);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function () {
                            return i.apply(this, arguments)
                        }
                )
            }, {
                key: "removeHints",
                value: function () {
                    return function (t) {
                        var e, n = p(st(".introjs-hint"));
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var r = e.value.getAttribute("data-step");
                                r && mt(parseInt(r, 10))
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        g.off(document, "click", _t, t, !1),
                            g.off(window, "resize", Ct, t, !0),
                        t._hintsAutoRefreshFunction && g.off(window, "scroll", t._hintsAutoRefreshFunction, t, !0)
                    }(this),
                        this
                }
            }, {
                key: "removeHint",
                value: function (t) {
                    return mt(t),
                        this
                }
            }, {
                key: "showHintDialog",
                value: (n = r(t().mark((function e(n) {
                            return t().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                    gt(this, n);
                                            case 2:
                                                return t.abrupt("return", this);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                            ), e, this)
                        }
                    ))),
                        function (t) {
                            return n.apply(this, arguments)
                        }
                )
            }]),
                e
        }()
            , Bt = function t(n) {
            var r;
            if ("object" === e(n))
                r = new qt(n);
            else if ("string" == typeof n) {
                var o = document.querySelector(n);
                if (!o)
                    throw new Error("There is no element with given selector.");
                r = new qt(o)
            } else
                r = new qt(document.body);
            return t.instances[y(r, "introjs-instance")] = r,
                r
        };
        return Bt.version = "7.2.0",
            Bt.instances = {},
            Bt
    }
));
//# sourceMappingURL=intro.min.js.map
