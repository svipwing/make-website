class CustomCategory extends Blockly.ToolboxCategory {
    constructor(categoryDef, toolbox, opt_parent) {
        super(categoryDef, toolbox, opt_parent);
    }

    createIconDom_() {
        // 这里新建了一个iconpark-icon元素，也可以自己修改为别的元素
        const img = document.createElement("iconpark-icon");
        // 这里的name属性获取的内容是toolbox定义的中的categorystyle，也可以是别的值/属性
        img.name = this.toolboxItemDef_.categorystyle;
        // 设置图标大小
        img.size = "15";
        // 最后返回的应是一个元素
        return img;
    }
}

Blockly.registry.register(Blockly.registry.Type.TOOLBOX_ITEM, Blockly.ToolboxCategory.registrationName, CustomCategory, true);

//icons

(function () {
    window.__iconpark__ = window.__iconpark__ || {};
    var obj = JSON.parse("{\"992139\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10Z\\\" clip-rule=\\\"evenodd\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z\\\" clip-rule=\\\"evenodd\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"m15 24 5 4 6-7 17 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4l10-10Z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/></g>\"},\"992140\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"M40 4H8a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"#FFF\\\" fill=\\\"#FFF\\\" d=\\\"M35 10H13v9h22v-9Z\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"#FFF\\\" d=\\\"m12 28 7 7M19 28l-7 7M28 35h8M28 29h8\\\"/></g>\"},\"992141\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M23 43h20V5H14v10\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"M5 15h18v28H5V15Z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"#FFF\\\" d=\\\"M13 37h2\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M28 37h2\\\" data-follow-stroke=\\\"currentColor\\\"/></g>\"},\"992142\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"M8 44V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v38l-16-8.273L8 44Z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"#FFF\\\" d=\\\"M16 18h16\\\"/></g>\"},\"992143\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"m4 42 4.941-12M32 42l-4.941-12m0 0L25 25 18 8l-7 17-2.059 5m18.118 0H8.94M28 10h16M32 20h12M36 30h8M40 40h4\\\" data-follow-stroke=\\\"currentColor\\\"/></g>\"},\"992144\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"M36 4H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16ZM36 28H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"#FFF\\\" fill=\\\"#FFF\\\" d=\\\"M36 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 38a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\\\"/></g>\"},\"992145\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M16 13 4 25.432 16 37M32 13l12 12.432L32 37\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"m28 4-7 40\\\" data-follow-stroke=\\\"currentColor\\\"/></g>\"},\"992146\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"M5 28h38v14H5zM5 6h38v14H5z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/><rect fill=\\\"#FFF\\\" rx=\\\"2\\\" height=\\\"4\\\" width=\\\"4\\\" y=\\\"11\\\" x=\\\"11\\\"/><rect fill=\\\"#FFF\\\" rx=\\\"2\\\" height=\\\"4\\\" width=\\\"4\\\" y=\\\"33\\\" x=\\\"11\\\"/><rect fill=\\\"#FFF\\\" rx=\\\"2\\\" height=\\\"4\\\" width=\\\"4\\\" y=\\\"11\\\" x=\\\"19\\\"/><rect fill=\\\"#FFF\\\" rx=\\\"2\\\" height=\\\"4\\\" width=\\\"4\\\" y=\\\"33\\\" x=\\\"19\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"#FFF\\\" d=\\\"M31 13h4M31 35h4\\\"/></g>\"},\"992147\":{\"viewBox\":\"0 0 49 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"M24.778 8c-11.046 0-20 8.954-20 20h40c0-11.046-8.954-20-20-20Z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M24.778 4v4M24.778 38c-5.523 0-10-4.477-10-10h20c0 5.523-4.477 10-10 10ZM40.812 38.977l-2.068-2.954M11.053 36.225l-2.55 2.55M34.778 42l-1.147-1.638M15.911 40.474l-1.414 1.414\\\" data-follow-stroke=\\\"currentColor\\\"/></g>\"},\"992148\":{\"viewBox\":\"0 0 48 48\",\"fill\":\"none\",\"content\":\"<g><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" fill=\\\"currentColor\\\" d=\\\"M8 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z\\\" data-follow-fill=\\\"currentColor\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M42 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM42 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM42 44a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z\\\" data-follow-stroke=\\\"currentColor\\\"/><path stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" stroke=\\\"currentColor\\\" d=\\\"M32 6H20v36h12M12 24h20\\\" data-follow-stroke=\\\"currentColor\\\"/></g>\"}}");
    for (var _k in obj) {
        window.__iconpark__[_k] = obj[_k]
    }
    ;var nm = {
        "pic-aiipi3n9": 992139,
        "calculator": 992140,
        "devices": 992141,
        "tag": 992142,
        "text-style-one": 992143,
        "switch-button": 992144,
        "code": 992145,
        "memory-one": 992146,
        "dome-light": 992147,
        "mind-mapping": 992148
    };
    for (var _i in nm) {
        window.__iconpark__[_i] = obj[nm[_i]]
    }
})();
"object" != typeof globalThis && (Object.prototype.__defineGetter__("__magic__", function () {
    return this
}), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
(() => {
    "use strict";
    var t = {
        816: (t, e, i) => {
            var s, r, o, n;
            i.d(e, {Vm: () => z, dy: () => P, Jb: () => x, Ld: () => $, sY: () => T, YP: () => A});
            const l = globalThis.trustedTypes, a = l ? l.createPolicy("lit-html", {createHTML: t => t}) : void 0,
                h = `lit$${(Math.random() + "").slice(9)}$`, c = "?" + h, d = `<${c}>`, u = document,
                p = (t = "") => u.createComment(t),
                v = t => null === t || "object" != typeof t && "function" != typeof t, f = Array.isArray, y = t => {
                    var e;
                    return f(t) || "function" == typeof (null === (e = t) || void 0 === e ? void 0 : e[Symbol.iterator])
                }, m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, g = /-->/g, b = />/g,
                S = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
                w = /'/g, k = /"/g, E = /^(?:script|style|textarea)$/i,
                C = t => (e, ...i) => ({_$litType$: t, strings: e, values: i}), P = C(1), A = C(2),
                x = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), O = new WeakMap, T = (t, e, i) => {
                    var s, r;
                    const o = null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s ? s : e;
                    let n = o._$litPart$;
                    if (void 0 === n) {
                        const t = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : null;
                        o._$litPart$ = n = new H(e.insertBefore(p(), t), t, void 0, i)
                    }
                    return n.I(t), n
                }, R = u.createTreeWalker(u, 129, null, !1), _ = (t, e) => {
                    const i = t.length - 1, s = [];
                    let r, o = 2 === e ? "<svg>" : "", n = m;
                    for (let e = 0; e < i; e++) {
                        const i = t[e];
                        let l, a, c = -1, u = 0;
                        for (; u < i.length && (n.lastIndex = u, a = n.exec(i), null !== a);) u = n.lastIndex, n === m ? "!--" === a[1] ? n = g : void 0 !== a[1] ? n = b : void 0 !== a[2] ? (E.test(a[2]) && (r = RegExp("</" + a[2], "g")), n = S) : void 0 !== a[3] && (n = S) : n === S ? ">" === a[0] ? (n = null != r ? r : m, c = -1) : void 0 === a[1] ? c = -2 : (c = n.lastIndex - a[2].length, l = a[1], n = void 0 === a[3] ? S : '"' === a[3] ? k : w) : n === k || n === w ? n = S : n === g || n === b ? n = m : (n = S, r = void 0);
                        const p = n === S && t[e + 1].startsWith("/>") ? " " : "";
                        o += n === m ? i + d : c >= 0 ? (s.push(l), i.slice(0, c) + "$lit$" + i.slice(c) + h + p) : i + h + (-2 === c ? (s.push(void 0), e) : p)
                    }
                    const l = o + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
                    return [void 0 !== a ? a.createHTML(l) : l, s]
                };

            class N {
                constructor({strings: t, _$litType$: e}, i) {
                    let s;
                    this.parts = [];
                    let r = 0, o = 0;
                    const n = t.length - 1, a = this.parts, [d, u] = _(t, e);
                    if (this.el = N.createElement(d, i), R.currentNode = this.el.content, 2 === e) {
                        const t = this.el.content, e = t.firstChild;
                        e.remove(), t.append(...e.childNodes)
                    }
                    for (; null !== (s = R.nextNode()) && a.length < n;) {
                        if (1 === s.nodeType) {
                            if (s.hasAttributes()) {
                                const t = [];
                                for (const e of s.getAttributeNames()) if (e.endsWith("$lit$") || e.startsWith(h)) {
                                    const i = u[o++];
                                    if (t.push(e), void 0 !== i) {
                                        const t = s.getAttribute(i.toLowerCase() + "$lit$").split(h),
                                            e = /([.?@])?(.*)/.exec(i);
                                        a.push({
                                            type: 1,
                                            index: r,
                                            name: e[2],
                                            strings: t,
                                            ctor: "." === e[1] ? I : "?" === e[1] ? j : "@" === e[1] ? B : M
                                        })
                                    } else a.push({type: 6, index: r})
                                }
                                for (const e of t) s.removeAttribute(e)
                            }
                            if (E.test(s.tagName)) {
                                const t = s.textContent.split(h), e = t.length - 1;
                                if (e > 0) {
                                    s.textContent = l ? l.emptyScript : "";
                                    for (let i = 0; i < e; i++) s.append(t[i], p()), R.nextNode(), a.push({
                                        type: 2,
                                        index: ++r
                                    });
                                    s.append(t[e], p())
                                }
                            }
                        } else if (8 === s.nodeType) if (s.data === c) a.push({type: 2, index: r}); else {
                            let t = -1;
                            for (; -1 !== (t = s.data.indexOf(h, t + 1));) a.push({
                                type: 7,
                                index: r
                            }), t += h.length - 1
                        }
                        r++
                    }
                }

                static createElement(t, e) {
                    const i = u.createElement("template");
                    return i.innerHTML = t, i
                }
            }

            function U(t, e, i = t, s) {
                var r, o, n, l;
                if (e === x) return e;
                let a = void 0 !== s ? null === (r = i.Σi) || void 0 === r ? void 0 : r[s] : i.Σo;
                const h = v(e) ? void 0 : e._$litDirective$;
                return (null == a ? void 0 : a.constructor) !== h && (null === (o = null == a ? void 0 : a.O) || void 0 === o || o.call(a, !1), void 0 === h ? a = void 0 : (a = new h(t), a.T(t, i, s)), void 0 !== s ? (null !== (n = (l = i).Σi) && void 0 !== n ? n : l.Σi = [])[s] = a : i.Σo = a), void 0 !== a && (e = U(t, a.S(t, e.values), a, s)), e
            }

            class L {
                constructor(t, e) {
                    this.l = [], this.N = void 0, this.D = t, this.M = e
                }

                u(t) {
                    var e;
                    const {el: {content: i}, parts: s} = this.D,
                        r = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : u).importNode(i, !0);
                    R.currentNode = r;
                    let o = R.nextNode(), n = 0, l = 0, a = s[0];
                    for (; void 0 !== a;) {
                        if (n === a.index) {
                            let e;
                            2 === a.type ? e = new H(o, o.nextSibling, this, t) : 1 === a.type ? e = new a.ctor(o, a.name, a.strings, this, t) : 6 === a.type && (e = new V(o, this, t)), this.l.push(e), a = s[++l]
                        }
                        n !== (null == a ? void 0 : a.index) && (o = R.nextNode(), n++)
                    }
                    return r
                }

                v(t) {
                    let e = 0;
                    for (const i of this.l) void 0 !== i && (void 0 !== i.strings ? (i.I(t, i, e), e += i.strings.length - 2) : i.I(t[e])), e++
                }
            }

            class H {
                constructor(t, e, i, s) {
                    this.type = 2, this.N = void 0, this.A = t, this.B = e, this.M = i, this.options = s
                }

                get parentNode() {
                    return this.A.parentNode
                }

                get startNode() {
                    return this.A
                }

                get endNode() {
                    return this.B
                }

                setConnected(t) {
                    var e;
                    null === (e = this.P) || void 0 === e || e.call(this, t)
                }

                I(t, e = this) {
                    t = U(this, t, e), v(t) ? t === $ || null == t || "" === t ? (this.H !== $ && this.R(), this.H = $) : t !== this.H && t !== x && this.m(t) : void 0 !== t._$litType$ ? this._(t) : void 0 !== t.nodeType ? this.$(t) : y(t) ? this.g(t) : this.m(t)
                }

                k(t, e = this.B) {
                    return this.A.parentNode.insertBefore(t, e)
                }

                $(t) {
                    this.H !== t && (this.R(), this.H = this.k(t))
                }

                m(t) {
                    const e = this.A.nextSibling;
                    null !== e && 3 === e.nodeType && (null === this.B ? null === e.nextSibling : e === this.B.previousSibling) ? e.data = t : this.$(u.createTextNode(t)), this.H = t
                }

                _(t) {
                    var e;
                    const {values: i, _$litType$: s} = t,
                        r = "number" == typeof s ? this.C(t) : (void 0 === s.el && (s.el = N.createElement(s.h, this.options)), s);
                    if ((null === (e = this.H) || void 0 === e ? void 0 : e.D) === r) this.H.v(i); else {
                        const t = new L(r, this), e = t.u(this.options);
                        t.v(i), this.$(e), this.H = t
                    }
                }

                C(t) {
                    let e = O.get(t.strings);
                    return void 0 === e && O.set(t.strings, e = new N(t)), e
                }

                g(t) {
                    f(this.H) || (this.H = [], this.R());
                    const e = this.H;
                    let i, s = 0;
                    for (const r of t) s === e.length ? e.push(i = new H(this.k(p()), this.k(p()), this, this.options)) : i = e[s], i.I(r), s++;
                    s < e.length && (this.R(i && i.B.nextSibling, s), e.length = s)
                }

                R(t = this.A.nextSibling, e) {
                    var i;
                    for (null === (i = this.P) || void 0 === i || i.call(this, !1, !0, e); t && t !== this.B;) {
                        const e = t.nextSibling;
                        t.remove(), t = e
                    }
                }
            }

            class M {
                constructor(t, e, i, s, r) {
                    this.type = 1, this.H = $, this.N = void 0, this.V = void 0, this.element = t, this.name = e, this.M = s, this.options = r, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this.H = Array(i.length - 1).fill($), this.strings = i) : this.H = $
                }

                get tagName() {
                    return this.element.tagName
                }

                I(t, e = this, i, s) {
                    const r = this.strings;
                    let o = !1;
                    if (void 0 === r) t = U(this, t, e, 0), o = !v(t) || t !== this.H && t !== x, o && (this.H = t); else {
                        const s = t;
                        let n, l;
                        for (t = r[0], n = 0; n < r.length - 1; n++) l = U(this, s[i + n], e, n), l === x && (l = this.H[n]), o || (o = !v(l) || l !== this.H[n]), l === $ ? t = $ : t !== $ && (t += (null != l ? l : "") + r[n + 1]), this.H[n] = l
                    }
                    o && !s && this.W(t)
                }

                W(t) {
                    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
                }
            }

            class I extends M {
                constructor() {
                    super(...arguments), this.type = 3
                }

                W(t) {
                    this.element[this.name] = t === $ ? void 0 : t
                }
            }

            class j extends M {
                constructor() {
                    super(...arguments), this.type = 4
                }

                W(t) {
                    t && t !== $ ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)
                }
            }

            class B extends M {
                constructor() {
                    super(...arguments), this.type = 5
                }

                I(t, e = this) {
                    var i;
                    if ((t = null !== (i = U(this, t, e, 0)) && void 0 !== i ? i : $) === x) return;
                    const s = this.H,
                        r = t === $ && s !== $ || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive,
                        o = t !== $ && (s === $ || r);
                    r && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this.H = t
                }

                handleEvent(t) {
                    var e, i;
                    "function" == typeof this.H ? this.H.call(null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) && void 0 !== i ? i : this.element, t) : this.H.handleEvent(t)
                }
            }

            class V {
                constructor(t, e, i) {
                    this.element = t, this.type = 6, this.N = void 0, this.V = void 0, this.M = e, this.options = i
                }

                I(t) {
                    U(this, t)
                }
            }

            const z = {
                Z: "$lit$",
                U: h,
                Y: c,
                q: 1,
                X: _,
                tt: L,
                it: y,
                st: U,
                et: H,
                ot: M,
                nt: j,
                rt: B,
                lt: I,
                ht: V
            };
            null === (r = (s = globalThis).litHtmlPlatformSupport) || void 0 === r || r.call(s, N, H), (null !== (o = (n = globalThis).litHtmlVersions) && void 0 !== o ? o : n.litHtmlVersions = []).push("2.0.0-rc.2")
        }, 26: (t, e, i) => {
            i.r(e), i.d(e, {
                customElement: () => s,
                eventOptions: () => a,
                property: () => o,
                query: () => h,
                queryAll: () => c,
                queryAssignedNodes: () => v,
                queryAsync: () => d,
                state: () => n
            });
            const s = t => e => "function" == typeof e ? ((t, e) => (window.customElements.define(t, e), e))(t, e) : ((t, e) => {
                const {kind: i, elements: s} = e;
                return {
                    kind: i, elements: s, finisher(e) {
                        window.customElements.define(t, e)
                    }
                }
            })(t, e), r = (t, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
                ...e, finisher(i) {
                    i.createProperty(e.key, t)
                }
            } : {
                kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
                    "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this))
                }, finisher(i) {
                    i.createProperty(e.key, t)
                }
            };

            function o(t) {
                return (e, i) => void 0 !== i ? ((t, e, i) => {
                    e.constructor.createProperty(i, t)
                })(t, e, i) : r(t, e)
            }

            function n(t) {
                return o({...t, state: !0, attribute: !1})
            }

            const l = ({finisher: t, descriptor: e}) => (i, s) => {
                var r;
                if (void 0 === s) {
                    const s = null !== (r = i.originalKey) && void 0 !== r ? r : i.key,
                        o = null != e ? {kind: "method", placement: "prototype", key: s, descriptor: e(i.key)} : {
                            ...i,
                            key: s
                        };
                    return null != t && (o.finisher = function (e) {
                        t(e, s)
                    }), o
                }
                {
                    const r = i.constructor;
                    void 0 !== e && Object.defineProperty(i, s, e(s)), null == t || t(r, s)
                }
            };

            function a(t) {
                return l({
                    finisher: (e, i) => {
                        Object.assign(e.prototype[i], t)
                    }
                })
            }

            function h(t, e) {
                return l({
                    descriptor: i => {
                        const s = {
                            get() {
                                var e;
                                return null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(t)
                            }, enumerable: !0, configurable: !0
                        };
                        if (e) {
                            const e = "symbol" == typeof i ? Symbol() : "__" + i;
                            s.get = function () {
                                var i;
                                return void 0 === this[e] && (this[e] = null === (i = this.renderRoot) || void 0 === i ? void 0 : i.querySelector(t)), this[e]
                            }
                        }
                        return s
                    }
                })
            }

            function c(t) {
                return l({
                    descriptor: e => ({
                        get() {
                            var e;
                            return null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelectorAll(t)
                        }, enumerable: !0, configurable: !0
                    })
                })
            }

            function d(t) {
                return l({
                    descriptor: e => ({
                        async get() {
                            var e;
                            return await this.updateComplete, null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(t)
                        }, enumerable: !0, configurable: !0
                    })
                })
            }

            const u = Element.prototype, p = u.msMatchesSelector || u.webkitMatchesSelector;

            function v(t = "", e = !1, i = "") {
                return l({
                    descriptor: s => ({
                        get() {
                            var s, r;
                            const o = "slot" + (t ? `[name=${t}]` : ":not([name])");
                            let n = null === (r = null === (s = this.renderRoot) || void 0 === s ? void 0 : s.querySelector(o)) || void 0 === r ? void 0 : r.assignedNodes({flatten: e});
                            return n && i && (n = n.filter((t => t.nodeType === Node.ELEMENT_NODE && (t.matches ? t.matches(i) : p.call(t, i))))), n
                        }, enumerable: !0, configurable: !0
                    })
                })
            }
        }, 23: (t, e, i) => {
            i.r(e), i.d(e, {unsafeSVG: () => l});
            const s = t => (...e) => ({_$litDirective$: t, values: e});
            var r = i(816);

            class o extends class {
                constructor(t) {
                }

                T(t, e, i) {
                    this.Σdt = t, this.M = e, this.Σct = i
                }

                S(t, e) {
                    return this.update(t, e)
                }

                update(t, e) {
                    return this.render(...e)
                }
            } {
                constructor(t) {
                    if (super(t), this.vt = r.Ld, 2 !== t.type) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
                }

                render(t) {
                    if (t === r.Ld) return this.Vt = void 0, this.vt = t;
                    if (t === r.Jb) return t;
                    if ("string" != typeof t) throw Error(this.constructor.directiveName + "() called with a non-string value");
                    if (t === this.vt) return this.Vt;
                    this.vt = t;
                    const e = [t];
                    return e.raw = e, this.Vt = {_$litType$: this.constructor.resultType, strings: e, values: []}
                }
            }

            o.directiveName = "unsafeHTML", o.resultType = 1, s(o);

            class n extends o {
            }

            n.directiveName = "unsafeSVG", n.resultType = 2;
            const l = s(n)
        }, 249: (t, e, i) => {
            i.r(e), i.d(e, {
                CSSResult: () => n,
                LitElement: () => x,
                ReactiveElement: () => b,
                UpdatingElement: () => A,
                _Σ: () => s.Vm,
                _Φ: () => $,
                adoptStyles: () => c,
                css: () => h,
                defaultConverter: () => y,
                getCompatibleStyle: () => d,
                html: () => s.dy,
                noChange: () => s.Jb,
                notEqual: () => m,
                nothing: () => s.Ld,
                render: () => s.sY,
                supportsAdoptingStyleSheets: () => r,
                svg: () => s.YP,
                unsafeCSS: () => l
            });
            var s = i(816);
            const r = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                o = Symbol();

            class n {
                constructor(t, e) {
                    if (e !== o) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = t
                }

                get styleSheet() {
                    return r && void 0 === this.t && (this.t = new CSSStyleSheet, this.t.replaceSync(this.cssText)), this.t
                }

                toString() {
                    return this.cssText
                }
            }

            const l = t => new n(t + "", o), a = new Map, h = (t, ...e) => {
                const i = e.reduce(((e, i, s) => e + (t => {
                    if (t instanceof n) return t.cssText;
                    if ("number" == typeof t) return t;
                    throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)
                })(i) + t[s + 1]), t[0]);
                let s = a.get(i);
                return void 0 === s && a.set(i, s = new n(i, o)), s
            }, c = (t, e) => {
                r ? t.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : e.forEach((e => {
                    const i = document.createElement("style");
                    i.textContent = e.cssText, t.appendChild(i)
                }))
            }, d = r ? t => t : t => t instanceof CSSStyleSheet ? (t => {
                let e = "";
                for (const i of t.cssRules) e += i.cssText;
                return l(e)
            })(t) : t;
            var u, p, v, f;
            const y = {
                    toAttribute(t, e) {
                        switch (e) {
                            case Boolean:
                                t = t ? "" : null;
                                break;
                            case Object:
                            case Array:
                                t = null == t ? t : JSON.stringify(t)
                        }
                        return t
                    }, fromAttribute(t, e) {
                        let i = t;
                        switch (e) {
                            case Boolean:
                                i = null !== t;
                                break;
                            case Number:
                                i = null === t ? null : Number(t);
                                break;
                            case Object:
                            case Array:
                                try {
                                    i = JSON.parse(t)
                                } catch (t) {
                                    i = null
                                }
                        }
                        return i
                    }
                }, m = (t, e) => e !== t && (e == e || t == t),
                g = {attribute: !0, type: String, converter: y, reflect: !1, hasChanged: m};

            class b extends HTMLElement {
                constructor() {
                    super(), this.Πi = new Map, this.Πo = void 0, this.Πl = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this.Πh = null, this.u()
                }

                static get observedAttributes() {
                    this.finalize();
                    const t = [];
                    return this.elementProperties.forEach(((e, i) => {
                        const s = this.Πp(i, e);
                        void 0 !== s && (this.Πm.set(s, i), t.push(s))
                    })), t
                }

                get updateComplete() {
                    return this.getUpdateComplete()
                }

                static addInitializer(t) {
                    var e;
                    null !== (e = this.v) && void 0 !== e || (this.v = []), this.v.push(t)
                }

                static createProperty(t, e = g) {
                    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
                        const i = "symbol" == typeof t ? Symbol() : "__" + t, s = this.getPropertyDescriptor(t, i, e);
                        void 0 !== s && Object.defineProperty(this.prototype, t, s)
                    }
                }

                static getPropertyDescriptor(t, e, i) {
                    return {
                        get() {
                            return this[e]
                        }, set(s) {
                            const r = this[t];
                            this[e] = s, this.requestUpdate(t, r, i)
                        }, configurable: !0, enumerable: !0
                    }
                }

                static getPropertyOptions(t) {
                    return this.elementProperties.get(t) || g
                }

                static finalize() {
                    if (this.hasOwnProperty("finalized")) return !1;
                    this.finalized = !0;
                    const t = Object.getPrototypeOf(this);
                    if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this.Πm = new Map, this.hasOwnProperty("properties")) {
                        const t = this.properties,
                            e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
                        for (const i of e) this.createProperty(i, t[i])
                    }
                    return this.elementStyles = this.finalizeStyles(this.styles), !0
                }

                static finalizeStyles(t) {
                    const e = [];
                    if (Array.isArray(t)) {
                        const i = new Set(t.flat(1 / 0).reverse());
                        for (const t of i) e.unshift(d(t))
                    } else void 0 !== t && e.push(d(t));
                    return e
                }

                static Πp(t, e) {
                    const i = e.attribute;
                    return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0
                }

                u() {
                    var t;
                    this.Πg = new Promise((t => this.enableUpdating = t)), this.L = new Map, this.Π_(), this.requestUpdate(), null === (t = this.constructor.v) || void 0 === t || t.forEach((t => t(this)))
                }

                addController(t) {
                    var e, i;
                    (null !== (e = this.ΠU) && void 0 !== e ? e : this.ΠU = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (i = t.hostConnected) || void 0 === i || i.call(t))
                }

                removeController(t) {
                    var e;
                    null === (e = this.ΠU) || void 0 === e || e.splice(this.ΠU.indexOf(t) >>> 0, 1)
                }

                Π_() {
                    this.constructor.elementProperties.forEach(((t, e) => {
                        this.hasOwnProperty(e) && (this.Πi.set(e, this[e]), delete this[e])
                    }))
                }

                createRenderRoot() {
                    var t;
                    const e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                    return c(e, this.constructor.elementStyles), e
                }

                connectedCallback() {
                    var t;
                    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this.ΠU) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t)
                    })), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0)
                }

                enableUpdating(t) {
                }

                disconnectedCallback() {
                    var t;
                    null === (t = this.ΠU) || void 0 === t || t.forEach((t => {
                        var e;
                        return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t)
                    })), this.Πo = new Promise((t => this.Πl = t))
                }

                attributeChangedCallback(t, e, i) {
                    this.K(t, i)
                }

                Πj(t, e, i = g) {
                    var s, r;
                    const o = this.constructor.Πp(t, i);
                    if (void 0 !== o && !0 === i.reflect) {
                        const n = (null !== (r = null === (s = i.converter) || void 0 === s ? void 0 : s.toAttribute) && void 0 !== r ? r : y.toAttribute)(e, i.type);
                        this.Πh = t, null == n ? this.removeAttribute(o) : this.setAttribute(o, n), this.Πh = null
                    }
                }

                K(t, e) {
                    var i, s, r;
                    const o = this.constructor, n = o.Πm.get(t);
                    if (void 0 !== n && this.Πh !== n) {
                        const t = o.getPropertyOptions(n), l = t.converter,
                            a = null !== (r = null !== (s = null === (i = l) || void 0 === i ? void 0 : i.fromAttribute) && void 0 !== s ? s : "function" == typeof l ? l : null) && void 0 !== r ? r : y.fromAttribute;
                        this.Πh = n, this[n] = a(e, t.type), this.Πh = null
                    }
                }

                requestUpdate(t, e, i) {
                    let s = !0;
                    void 0 !== t && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || m)(this[t], e) ? (this.L.has(t) || this.L.set(t, e), !0 === i.reflect && this.Πh !== t && (void 0 === this.Πk && (this.Πk = new Map), this.Πk.set(t, i))) : s = !1), !this.isUpdatePending && s && (this.Πg = this.Πq())
                }

                async Πq() {
                    this.isUpdatePending = !0;
                    try {
                        for (await this.Πg; this.Πo;) await this.Πo
                    } catch (t) {
                        Promise.reject(t)
                    }
                    const t = this.performUpdate();
                    return null != t && await t, !this.isUpdatePending
                }

                performUpdate() {
                    var t;
                    if (!this.isUpdatePending) return;
                    this.hasUpdated, this.Πi && (this.Πi.forEach(((t, e) => this[e] = t)), this.Πi = void 0);
                    let e = !1;
                    const i = this.L;
                    try {
                        e = this.shouldUpdate(i), e ? (this.willUpdate(i), null === (t = this.ΠU) || void 0 === t || t.forEach((t => {
                            var e;
                            return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t)
                        })), this.update(i)) : this.Π$()
                    } catch (t) {
                        throw e = !1, this.Π$(), t
                    }
                    e && this.E(i)
                }

                willUpdate(t) {
                }

                E(t) {
                    var e;
                    null === (e = this.ΠU) || void 0 === e || e.forEach((t => {
                        var e;
                        return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t)
                    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
                }

                Π$() {
                    this.L = new Map, this.isUpdatePending = !1
                }

                getUpdateComplete() {
                    return this.Πg
                }

                shouldUpdate(t) {
                    return !0
                }

                update(t) {
                    void 0 !== this.Πk && (this.Πk.forEach(((t, e) => this.Πj(e, this[e], t))), this.Πk = void 0), this.Π$()
                }

                updated(t) {
                }

                firstUpdated(t) {
                }
            }

            var S, w, k, E, C, P;
            b.finalized = !0, b.shadowRootOptions = {mode: "open"}, null === (p = (u = globalThis).reactiveElementPlatformSupport) || void 0 === p || p.call(u, {ReactiveElement: b}), (null !== (v = (f = globalThis).reactiveElementVersions) && void 0 !== v ? v : f.reactiveElementVersions = []).push("1.0.0-rc.1");
            const A = b;
            (null !== (S = (P = globalThis).litElementVersions) && void 0 !== S ? S : P.litElementVersions = []).push("3.0.0-rc.1");

            class x extends b {
                constructor() {
                    super(...arguments), this.renderOptions = {host: this}, this.Φt = void 0
                }

                createRenderRoot() {
                    var t, e;
                    const i = super.createRenderRoot();
                    return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i
                }

                update(t) {
                    const e = this.render();
                    super.update(t), this.Φt = (0, s.sY)(e, this.renderRoot, this.renderOptions)
                }

                connectedCallback() {
                    var t;
                    super.connectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!0)
                }

                disconnectedCallback() {
                    var t;
                    super.disconnectedCallback(), null === (t = this.Φt) || void 0 === t || t.setConnected(!1)
                }

                render() {
                    return s.Jb
                }
            }

            x.finalized = !0, x._$litElement$ = !0, null === (k = (w = globalThis).litElementHydrateSupport) || void 0 === k || k.call(w, {LitElement: x}), null === (C = (E = globalThis).litElementPlatformSupport) || void 0 === C || C.call(E, {LitElement: x});
            const $ = {
                K: (t, e, i) => {
                    t.K(e, i)
                }, L: t => t.L
            }
        }, 409: function (t, e, i) {
            var s = this && this.__decorate || function (t, e, i, s) {
                var r, o = arguments.length, n = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, s); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (n = (o < 3 ? r(n) : o > 3 ? r(e, i, n) : r(e, i)) || n);
                return o > 3 && n && Object.defineProperty(e, i, n), n
            };
            Object.defineProperty(e, "__esModule", {value: !0}), e.IconparkIconElement = void 0;
            const r = i(249), o = i(26), n = i(23), l = {color: 1, fill: 1, stroke: 1}, a = {
                STROKE: {trackAttr: "data-follow-stroke", rawAttr: "stroke"},
                FILL: {trackAttr: "data-follow-fill", rawAttr: "fill"}
            };

            class h extends r.LitElement {
                constructor() {
                    super(...arguments), this.name = "", this.identifyer = "", this.size = "1em"
                }

                get _width() {
                    return this.width || this.size
                }

                get _height() {
                    return this.height || this.size
                }

                get _stroke() {
                    return this.stroke || this.color
                }

                get _fill() {
                    return this.fill || this.color
                }

                get SVGConfig() {
                    return (window.__iconpark__ || {})[this.identifyer] || (window.__iconpark__ || {})[this.name] || {
                        viewBox: "0 0 0 0",
                        content: ""
                    }
                }

                connectedCallback() {
                    super.connectedCallback(), setTimeout((() => {
                        this.monkeyPatch("STROKE", !0), this.monkeyPatch("FILL", !0)
                    }))
                }

                monkeyPatch(t, e) {
                    switch (t) {
                        case"STROKE":
                            this.updateDOMByHand(this.strokeAppliedNodes, "STROKE", this._stroke, !!e);
                            break;
                        case"FILL":
                            this.updateDOMByHand(this.fillAppliedNodes, "FILL", this._fill, !!e)
                    }
                }

                updateDOMByHand(t, e, i, s) {
                    !i && s || t && t.forEach((t => {
                        i && i === t.getAttribute(a[e].rawAttr) || t.setAttribute(a[e].rawAttr, i || t.getAttribute(a[e].trackAttr))
                    }))
                }

                attributeChangedCallback(t, e, i) {
                    super.attributeChangedCallback(t, e, i), "name" === t || "identifyer" === t ? setTimeout((() => {
                        this.monkeyPatch("STROKE"), this.monkeyPatch("FILL")
                    })) : l[t] && (this.monkeyPatch("STROKE"), this.monkeyPatch("FILL"))
                }

                render() {
                    return r.svg`<svg width=${this._width} height=${this._height} preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill=${this.SVGConfig.fill} viewBox=${this.SVGConfig.viewBox}>${n.unsafeSVG(this.SVGConfig.content)}</svg>`
                }
            }

            h.styles = r.css`:host {display: inline-flex; align-items: center; justify-content: center;} :host([spin]) svg {animation: iconpark-spin 1s infinite linear;} :host([spin][rtl]) svg {animation: iconpark-spin-rtl 1s infinite linear;} :host([rtl]) svg {transform: scaleX(-1);} @keyframes iconpark-spin {0% { -webkit-transform: rotate(0); transform: rotate(0);} 100% {-webkit-transform: rotate(360deg); transform: rotate(360deg);}} @keyframes iconpark-spin-rtl {0% {-webkit-transform: scaleX(-1) rotate(0); transform: scaleX(-1) rotate(0);} 100% {-webkit-transform: scaleX(-1) rotate(360deg); transform: scaleX(-1) rotate(360deg);}}`, s([o.property({reflect: !0})], h.prototype, "name", void 0), s([o.property({
                reflect: !0,
                attribute: "icon-id"
            })], h.prototype, "identifyer", void 0), s([o.property({reflect: !0})], h.prototype, "color", void 0), s([o.property({reflect: !0})], h.prototype, "stroke", void 0), s([o.property({reflect: !0})], h.prototype, "fill", void 0), s([o.property({reflect: !0})], h.prototype, "size", void 0), s([o.property({reflect: !0})], h.prototype, "width", void 0), s([o.property({reflect: !0})], h.prototype, "height", void 0), s([o.queryAll(`[${a.STROKE.trackAttr}]`)], h.prototype, "strokeAppliedNodes", void 0), s([o.queryAll(`[${a.FILL.trackAttr}]`)], h.prototype, "fillAppliedNodes", void 0), e.IconparkIconElement = h, customElements.get("iconpark-icon") || customElements.define("iconpark-icon", h)
        }
    }, e = {};

    function i(s) {
        var r = e[s];
        if (void 0 !== r) return r.exports;
        var o = e[s] = {exports: {}};
        return t[s].call(o.exports, o, o.exports, i), o.exports
    }

    i.d = (t, e) => {
        for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {enumerable: !0, get: e[s]})
    }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i(409)
})();