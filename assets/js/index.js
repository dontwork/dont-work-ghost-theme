(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! highlight.js v9.9.0 | BSD3 License | git.io/hljslicense */
!function (e) {
    var n = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self;"undefined" != typeof exports ? e(exports) : n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
        return n.hljs;
    }));
}(function (e) {
    function n(e) {
        return e.replace(/[&<>]/gm, function (e) {
            return I[e];
        });
    }function t(e) {
        return e.nodeName.toLowerCase();
    }function r(e, n) {
        var t = e && e.exec(n);return t && 0 === t.index;
    }function i(e) {
        return k.test(e);
    }function a(e) {
        var n,
            t,
            r,
            a,
            o = e.className + " ";if (o += e.parentNode ? e.parentNode.className : "", t = B.exec(o)) return R(t[1]) ? t[1] : "no-highlight";for (o = o.split(/\s+/), n = 0, r = o.length; r > n; n++) {
            if (a = o[n], i(a) || R(a)) return a;
        }
    }function o(e, n) {
        var t,
            r = {};for (t in e) {
            r[t] = e[t];
        }if (n) for (t in n) {
            r[t] = n[t];
        }return r;
    }function u(e) {
        var n = [];return function r(e, i) {
            for (var a = e.firstChild; a; a = a.nextSibling) {
                3 === a.nodeType ? i += a.nodeValue.length : 1 === a.nodeType && (n.push({ event: "start", offset: i, node: a }), i = r(a, i), t(a).match(/br|hr|img|input/) || n.push({ event: "stop", offset: i, node: a }));
            }return i;
        }(e, 0), n;
    }function c(e, r, i) {
        function a() {
            return e.length && r.length ? e[0].offset !== r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" === r[0].event ? e : r : e.length ? e : r;
        }function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"';
            }l += "<" + t(e) + w.map.call(e.attributes, r).join("") + ">";
        }function u(e) {
            l += "</" + t(e) + ">";
        }function c(e) {
            ("start" === e.event ? o : u)(e.node);
        }for (var s = 0, l = "", f = []; e.length || r.length;) {
            var g = a();if (l += n(i.substring(s, g[0].offset)), s = g[0].offset, g === e) {
                f.reverse().forEach(u);do {
                    c(g.splice(0, 1)[0]), g = a();
                } while (g === e && g.length && g[0].offset === s);f.reverse().forEach(o);
            } else "start" === g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0]);
        }return l + n(i.substr(s));
    }function s(e) {
        function n(e) {
            return e && e.source || e;
        }function t(t, r) {
            return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""));
        }function r(i, a) {
            if (!i.compiled) {
                if (i.compiled = !0, i.k = i.k || i.bK, i.k) {
                    var u = {},
                        c = function c(n, t) {
                        e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) {
                            var t = e.split("|");u[t[0]] = [n, t[1] ? Number(t[1]) : 1];
                        });
                    };"string" == typeof i.k ? c("keyword", i.k) : E(i.k).forEach(function (e) {
                        c(e, i.k[e]);
                    }), i.k = u;
                }i.lR = t(i.l || /\w+/, !0), a && (i.bK && (i.b = "\\b(" + i.bK.split(" ").join("|") + ")\\b"), i.b || (i.b = /\B|\b/), i.bR = t(i.b), i.e || i.eW || (i.e = /\B|\b/), i.e && (i.eR = t(i.e)), i.tE = n(i.e) || "", i.eW && a.tE && (i.tE += (i.e ? "|" : "") + a.tE)), i.i && (i.iR = t(i.i)), null == i.r && (i.r = 1), i.c || (i.c = []);var s = [];i.c.forEach(function (e) {
                    e.v ? e.v.forEach(function (n) {
                        s.push(o(e, n));
                    }) : s.push("self" === e ? i : e);
                }), i.c = s, i.c.forEach(function (e) {
                    r(e, i);
                }), i.starts && r(i.starts, a);var l = i.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
                }).concat([i.tE, i.i]).map(n).filter(Boolean);i.t = l.length ? t(l.join("|"), !0) : { exec: function exec() {
                        return null;
                    } };
            }
        }r(e);
    }function l(e, t, i, a) {
        function o(e, n) {
            var t, i;for (t = 0, i = n.c.length; i > t; t++) {
                if (r(n.c[t].bR, e)) return n.c[t];
            }
        }function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent;) {
                    e = e.parent;
                }return e;
            }return e.eW ? u(e.parent, n) : void 0;
        }function c(e, n) {
            return !i && r(n.iR, e);
        }function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];return e.k.hasOwnProperty(t) && e.k[t];
        }function h(e, n, t, r) {
            var i = r ? "" : y.classPrefix,
                a = '<span class="' + i,
                o = t ? "" : C;return a += e + '">', a + n + o;
        }function p() {
            var e, t, r, i;if (!E.k) return n(B);for (i = "", t = 0, E.lR.lastIndex = 0, r = E.lR.exec(B); r;) {
                i += n(B.substring(t, r.index)), e = g(E, r), e ? (M += e[1], i += h(e[0], n(r[0]))) : i += n(r[0]), t = E.lR.lastIndex, r = E.lR.exec(B);
            }return i + n(B.substr(t));
        }function d() {
            var e = "string" == typeof E.sL;if (e && !x[E.sL]) return n(B);var t = e ? l(E.sL, B, !0, L[E.sL]) : f(B, E.sL.length ? E.sL : void 0);return E.r > 0 && (M += t.r), e && (L[E.sL] = t.top), h(t.language, t.value, !1, !0);
        }function b() {
            k += null != E.sL ? d() : p(), B = "";
        }function v(e) {
            k += e.cN ? h(e.cN, "", !0) : "", E = Object.create(e, { parent: { value: E } });
        }function m(e, n) {
            if (B += e, null == n) return b(), 0;var t = o(n, E);if (t) return t.skip ? B += n : (t.eB && (B += n), b(), t.rB || t.eB || (B = n)), v(t, n), t.rB ? 0 : n.length;var r = u(E, n);if (r) {
                var i = E;i.skip ? B += n : (i.rE || i.eE || (B += n), b(), i.eE && (B = n));do {
                    E.cN && (k += C), E.skip || (M += E.r), E = E.parent;
                } while (E !== r.parent);return r.starts && v(r.starts, ""), i.rE ? 0 : n.length;
            }if (c(n, E)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.cN || "<unnamed>") + '"');return B += n, n.length || 1;
        }var N = R(e);if (!N) throw new Error('Unknown language: "' + e + '"');s(N);var w,
            E = a || N,
            L = {},
            k = "";for (w = E; w !== N; w = w.parent) {
            w.cN && (k = h(w.cN, "", !0) + k);
        }var B = "",
            M = 0;try {
            for (var I, j, O = 0;;) {
                if (E.t.lastIndex = O, I = E.t.exec(t), !I) break;j = m(t.substring(O, I.index), I[0]), O = I.index + j;
            }for (m(t.substr(O)), w = E; w.parent; w = w.parent) {
                w.cN && (k += C);
            }return { r: M, value: k, language: e, top: E };
        } catch (T) {
            if (T.message && -1 !== T.message.indexOf("Illegal")) return { r: 0, value: n(t) };throw T;
        }
    }function f(e, t) {
        t = t || y.languages || E(x);var r = { r: 0, value: n(e) },
            i = r;return t.filter(R).forEach(function (n) {
            var t = l(n, e, !1);t.language = n, t.r > i.r && (i = t), t.r > r.r && (i = r, r = t);
        }), i.language && (r.second_best = i), r;
    }function g(e) {
        return y.tabReplace || y.useBR ? e.replace(M, function (e, n) {
            return y.useBR && "\n" === e ? "<br>" : y.tabReplace ? n.replace(/\t/g, y.tabReplace) : void 0;
        }) : e;
    }function h(e, n, t) {
        var r = n ? L[n] : t,
            i = [e.trim()];return e.match(/\bhljs\b/) || i.push("hljs"), -1 === e.indexOf(r) && i.push(r), i.join(" ").trim();
    }function p(e) {
        var n,
            t,
            r,
            o,
            s,
            p = a(e);i(p) || (y.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e, s = n.textContent, r = p ? l(p, s, !0) : f(s), t = u(n), t.length && (o = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), o.innerHTML = r.value, r.value = c(t, u(o), s)), r.value = g(r.value), e.innerHTML = r.value, e.className = h(e.className, p, r.language), e.result = { language: r.language, re: r.r }, r.second_best && (e.second_best = { language: r.second_best.language, re: r.second_best.r }));
    }function d(e) {
        y = o(y, e);
    }function b() {
        if (!b.called) {
            b.called = !0;var e = document.querySelectorAll("pre code");w.forEach.call(e, p);
        }
    }function v() {
        addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1);
    }function m(n, t) {
        var r = x[n] = t(e);r.aliases && r.aliases.forEach(function (e) {
            L[e] = n;
        });
    }function N() {
        return E(x);
    }function R(e) {
        return e = (e || "").toLowerCase(), x[e] || x[L[e]];
    }var w = [],
        E = Object.keys,
        x = {},
        L = {},
        k = /^(no-?highlight|plain|text)$/i,
        B = /\blang(?:uage)?-([\w-]+)\b/i,
        M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
        C = "</span>",
        y = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 },
        I = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };return e.highlight = l, e.highlightAuto = f, e.fixMarkup = g, e.highlightBlock = p, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = R, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = { b: "\\\\[\\s\\S]", r: 0 }, e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }, e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }, e.PWM = { b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/ }, e.C = function (n, t, r) {
        var i = e.inherit({ cN: "comment", b: n, e: t, c: [] }, r || {});return i.c.push(e.PWM), i.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }), i;
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = { cN: "number", b: e.NR, r: 0 }, e.CNM = { cN: "number", b: e.CNR, r: 0 }, e.BNM = { cN: "number", b: e.BNR, r: 0 }, e.CSSNM = { cN: "number", b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", r: 0 }, e.RM = { cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }, e.TM = { cN: "title", b: e.IR, r: 0 }, e.UTM = { cN: "title", b: e.UIR, r: 0 }, e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }, e;
});hljs.registerLanguage("xml", function (s) {
    var e = "[A-Za-z0-9\\._:-]+",
        t = { eW: !0, i: /</, r: 0, c: [{ cN: "attr", b: e, r: 0 }, { b: /=\s*/, r: 0, c: [{ cN: "string", endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }] }] };return { aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"], cI: !0, c: [{ cN: "meta", b: "<!DOCTYPE", e: ">", r: 10, c: [{ b: "\\[", e: "\\]" }] }, s.C("<!--", "-->", { r: 10 }), { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 }, { b: /<\?(php)?/, e: /\?>/, sL: "php", c: [{ b: "/\\*", e: "\\*/", skip: !0 }] }, { cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: { name: "style" }, c: [t], starts: { e: "</style>", rE: !0, sL: ["css", "xml"] } }, { cN: "tag", b: "<script(?=\\s|>|$)", e: ">", k: { name: "script" }, c: [t], starts: { e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"] } }, { cN: "meta", v: [{ b: /<\?xml/, e: /\?>/, r: 10 }, { b: /<\?\w+/, e: /\?>/ }] }, { cN: "tag", b: "</?", e: "/?>", c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, t] }] };
});hljs.registerLanguage("handlebars", function (e) {
    var a = { "builtin-name": "each in with if else unless bindattr action collection debugger log outlet template unbound view yield" };return { aliases: ["hbs", "html.hbs", "html.handlebars"], cI: !0, sL: "xml", c: [e.C("{{!(--)?", "(--)?}}"), { cN: "template-tag", b: /\{\{[#\/]/, e: /\}\}/, c: [{ cN: "name", b: /[a-zA-Z\.-]+/, k: a, starts: { eW: !0, r: 0, c: [e.QSM] } }] }, { cN: "template-variable", b: /\{\{/, e: /\}\}/, k: a }] };
});hljs.registerLanguage("css", function (e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
        t = { b: /[A-Z\_\.\-]+\s*:/, rB: !0, e: ";", eW: !0, c: [{ cN: "attribute", b: /\S/, e: ":", eE: !0, starts: { eW: !0, eE: !0, c: [{ b: /[\w-]+\(/, rB: !0, c: [{ cN: "built_in", b: /[\w-]+/ }, { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] }] }, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: "number", b: "#[0-9A-Fa-f]+" }, { cN: "meta", b: "!important" }] } }] };return { cI: !0, i: /[=\/|'\$]/, c: [e.CBCM, { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ }, { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ }, { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" }, { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ }, { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" }, { b: "@", e: "[{;]", i: /:/, c: [{ cN: "keyword", b: /\w+/ }, { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] }] }, { cN: "selector-tag", b: c, r: 0 }, { b: "{", e: "}", i: /\S/, c: [e.CBCM, t] }] };
});hljs.registerLanguage("nginx", function (e) {
    var r = { cN: "variable", v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: "[\\$\\@]" + e.UIR }] },
        b = { eW: !0, l: "[a-z/_]+", k: { literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll" }, r: 0, i: "=>", c: [e.HCM, { cN: "string", c: [e.BE, r], v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }] }, { b: "([a-z]+):/", e: "\\s", eW: !0, eE: !0, c: [r] }, { cN: "regexp", c: [e.BE, r], v: [{ b: "\\s\\^", e: "\\s|{|;", rE: !0 }, { b: "~\\*?\\s+", e: "\\s|{|;", rE: !0 }, { b: "\\*(\\.[a-z\\-]+)+" }, { b: "([a-z\\-]+\\.)+\\*" }] }, { cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b" }, { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", r: 0 }, r] };return { aliases: ["nginxconf"], c: [e.HCM, { b: e.UIR + "\\s+{", rB: !0, e: "{", c: [{ cN: "section", b: e.UIR }], r: 0 }, { b: e.UIR + "\\s", e: ";|{", rB: !0, c: [{ cN: "attribute", b: e.UIR, starts: b }], r: 0 }], i: "[^\\s\\}]" };
});hljs.registerLanguage("processing", function (e) {
    return { k: { keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private", literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI", title: "setup draw", built_in: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed" }, c: [e.CLCM, e.CBCM, e.ASM, e.QSM, e.CNM] };
});hljs.registerLanguage("cs", function (e) {
    var i = { keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield", literal: "null false true" },
        r = { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
        t = e.inherit(r, { i: /\n/ }),
        a = { cN: "subst", b: "{", e: "}", k: i },
        n = e.inherit(a, { i: /\n/ }),
        c = { cN: "string", b: /\$"/, e: '"', i: /\n/, c: [{ b: "{{" }, { b: "}}" }, e.BE, n] },
        s = { cN: "string", b: /\$@"/, e: '"', c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, a] },
        o = e.inherit(s, { i: /\n/, c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, n] });a.c = [s, c, r, e.ASM, e.QSM, e.CNM, e.CBCM], n.c = [o, c, t, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, { i: /\n/ })];var l = { v: [s, c, r, e.ASM, e.QSM] },
        b = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";return { aliases: ["csharp"], k: i, i: /::/, c: [e.C("///", "$", { rB: !0, c: [{ cN: "doctag", v: [{ b: "///", r: 0 }, { b: "<!--|-->" }, { b: "</?", e: ">" }] }] }), e.CLCM, e.CBCM, { cN: "meta", b: "#", e: "$", k: { "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum" } }, l, e.CNM, { bK: "class interface", e: /[{;=]/, i: /[^\s:]/, c: [e.TM, e.CLCM, e.CBCM] }, { bK: "namespace", e: /[{;=]/, i: /[^\s:]/, c: [e.inherit(e.TM, { b: "[a-zA-Z](\\.?\\w)*" }), e.CLCM, e.CBCM] }, { bK: "new return throw await", r: 0 }, { cN: "function", b: "(" + b + "\\s+)+" + e.IR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: i, c: [{ b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0 }, { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, k: i, r: 0, c: [l, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }] };
});hljs.registerLanguage("scss", function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
        i = { cN: "variable", b: "(\\$" + t + ")\\b" },
        r = { cN: "number", b: "#[0-9A-Fa-f]+" };({ cN: "attribute", b: "[A-Z\\_\\.\\-]+", e: ":", eE: !0, i: "[^\\s]", starts: { eW: !0, eE: !0, c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: "meta", b: "!important" }] } });return { cI: !0, i: "[=/|']", c: [e.CLCM, e.CBCM, { cN: "selector-id", b: "\\#[A-Za-z0-9_-]+", r: 0 }, { cN: "selector-class", b: "\\.[A-Za-z0-9_-]+", r: 0 }, { cN: "selector-attr", b: "\\[", e: "\\]", i: "$" }, { cN: "selector-tag", b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b", r: 0 }, { b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)" }, { b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)" }, i, { cN: "attribute", b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b", i: "[^\\s]" }, { b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" }, { b: ":", e: ";", c: [i, r, e.CSSNM, e.QSM, e.ASM, { cN: "meta", b: "!important" }] }, { b: "@", e: "[{;]", k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn", c: [i, e.QSM, e.ASM, r, e.CSSNM, { b: "\\s[A-Za-z0-9_.-]+", r: 0 }] }] };
});hljs.registerLanguage("json", function (e) {
    var i = { literal: "true false null" },
        n = [e.QSM, e.CNM],
        r = { e: ",", eW: !0, eE: !0, c: n, k: i },
        t = { b: "{", e: "}", c: [{ cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" }, e.inherit(r, { b: /:/ })], i: "\\S" },
        c = { b: "\\[", e: "\\]", c: [e.inherit(r)], i: "\\S" };return n.splice(n.length, 0, t, c), { c: n, k: i, i: "\\S" };
});hljs.registerLanguage("bash", function (e) {
    var t = { cN: "variable", v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
        s = { cN: "string", b: /"/, e: /"/, c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }] },
        a = { cN: "string", b: /'/, e: /'/ };return { aliases: ["sh", "zsh"], l: /-?[a-z\._]+/, k: { keyword: "if then else elif fi for while in do done case esac function", literal: "true false", built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp", _: "-ne -eq -lt -gt -f -d -e -s -l -a" }, c: [{ cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 }, { cN: "function", b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0 }, e.HCM, s, a, t] };
});hljs.registerLanguage("http", function (e) {
    var t = "HTTP/[0-9\\.]+";return { aliases: ["https"], i: "\\S", c: [{ b: "^" + t, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] }, { b: "^[A-Z]+ (.*?) " + t + "$", rB: !0, e: "$", c: [{ cN: "string", b: " ", e: " ", eB: !0, eE: !0 }, { b: t }, { cN: "keyword", b: "[A-Z]+" }] }, { cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: { e: "$", r: 0 } }, { b: "\\n\\n", starts: { sL: [], eW: !0 } }] };
});hljs.registerLanguage("javascript", function (e) {
    var r = "[A-Za-z$_][0-9A-Za-z$_]*",
        t = { keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as", literal: "true false null undefined NaN Infinity", built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise" },
        a = { cN: "number", v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }], r: 0 },
        n = { cN: "subst", b: "\\$\\{", e: "\\}", k: t, c: [] },
        c = { cN: "string", b: "`", e: "`", c: [e.BE, n] };n.c = [e.ASM, e.QSM, c, a, e.RM];var s = n.c.concat([e.CBCM, e.CLCM]);return { aliases: ["js", "jsx"], k: t, c: [{ cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ }, { cN: "meta", b: /^#!/, e: /$/ }, e.ASM, e.QSM, c, e.CLCM, e.CBCM, a, { b: /[{,]\s*/, r: 0, c: [{ b: r + "\\s*:", rB: !0, r: 0, c: [{ cN: "attr", b: r, r: 0 }] }] }, { b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*", k: "return throw case", c: [e.CLCM, e.CBCM, e.RM, { cN: "function", b: "(\\(.*?\\)|" + r + ")\\s*=>", rB: !0, e: "\\s*=>", c: [{ cN: "params", v: [{ b: r }, { b: /\(\s*\)/ }, { b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, c: s }] }] }, { b: /</, e: /(\/\w+|\w+\/)>/, sL: "xml", c: [{ b: /<\w+\s*\/>/, skip: !0 }, { b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: [{ b: /<\w+\s*\/>/, skip: !0 }, "self"] }] }], r: 0 }, { cN: "function", bK: "function", e: /\{/, eE: !0, c: [e.inherit(e.TM, { b: r }), { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s }], i: /\[|%/ }, { b: /\$[(.]/ }, e.METHOD_GUARD, { cN: "class", bK: "class", e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [{ bK: "extends" }, e.UTM] }, { bK: "constructor", e: /\{/, eE: !0 }], i: /#(?!!)/ };
});

hljs.initHighlightingOnLoad();

},{}]},{},[1]);
