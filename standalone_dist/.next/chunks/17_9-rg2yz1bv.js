(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  29873,
  (t, e, r) => {
    e.exports = function (t) {
      return null == t;
    };
  },
  236,
  (t, e, r) => {
    e.exports = t.g && t.g.Object === Object && t.g;
  },
  39088,
  (t, e, r) => {
    var n = t.r(236),
      i = "object" == typeof self && self && self.Object === Object && self;
    e.exports = n || i || Function("return this")();
  },
  30353,
  (t, e, r) => {
    e.exports = t.r(39088).Symbol;
  },
  43436,
  (t, e, r) => {
    var n = t.r(30353),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      l = n ? n.toStringTag : void 0;
    e.exports = function (t) {
      var e = o.call(t, l),
        r = t[l];
      try {
        t[l] = void 0;
        var n = !0;
      } catch (t) {}
      var i = a.call(t);
      return (n && (e ? (t[l] = r) : delete t[l]), i);
    };
  },
  23243,
  (t, e, r) => {
    var n = Object.prototype.toString;
    e.exports = function (t) {
      return n.call(t);
    };
  },
  77684,
  (t, e, r) => {
    var n = t.r(30353),
      i = t.r(43436),
      o = t.r(23243),
      a = n ? n.toStringTag : void 0;
    e.exports = function (t) {
      return null == t
        ? void 0 === t
          ? "[object Undefined]"
          : "[object Null]"
        : a && a in Object(t)
          ? i(t)
          : o(t);
    };
  },
  12447,
  (t, e, r) => {
    e.exports = function (t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    };
  },
  71223,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(12447);
    e.exports = function (t) {
      if (!i(t)) return !1;
      var e = n(t);
      return (
        "[object Function]" == e ||
        "[object GeneratorFunction]" == e ||
        "[object AsyncFunction]" == e ||
        "[object Proxy]" == e
      );
    };
  },
  93440,
  (t, e, r) => {
    var n = Math.ceil,
      i = Math.max;
    e.exports = function (t, e, r, o) {
      for (var a = -1, l = i(n((e - t) / (r || 1)), 0), c = Array(l); l--; )
        ((c[o ? l : ++a] = t), (t += r));
      return c;
    };
  },
  25172,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  98376,
  (t, e, r) => {
    e.exports = function (t) {
      return (
        "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
      );
    };
  },
  51095,
  (t, e, r) => {
    var n = t.r(71223),
      i = t.r(98376);
    e.exports = function (t) {
      return null != t && i(t.length) && !n(t);
    };
  },
  66397,
  (t, e, r) => {
    var n = /^(?:0|[1-9]\d*)$/;
    e.exports = function (t, e) {
      var r = typeof t;
      return (
        !!(e = null == e ? 0x1fffffffffffff : e) &&
        ("number" == r || ("symbol" != r && n.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  70237,
  (t, e, r) => {
    var n = t.r(25172),
      i = t.r(51095),
      o = t.r(66397),
      a = t.r(12447);
    e.exports = function (t, e, r) {
      if (!a(r)) return !1;
      var l = typeof e;
      return (
        ("number" == l
          ? !!(i(r) && o(e, r.length))
          : "string" == l && e in r) && n(r[e], t)
      );
    };
  },
  48891,
  (t, e, r) => {
    var n = /\s/;
    e.exports = function (t) {
      for (var e = t.length; e-- && n.test(t.charAt(e)); );
      return e;
    };
  },
  30364,
  (t, e, r) => {
    var n = t.r(48891),
      i = /^\s+/;
    e.exports = function (t) {
      return t ? t.slice(0, n(t) + 1).replace(i, "") : t;
    };
  },
  77289,
  (t, e, r) => {
    e.exports = function (t) {
      return null != t && "object" == typeof t;
    };
  },
  61884,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(77289);
    e.exports = function (t) {
      return "symbol" == typeof t || (i(t) && "[object Symbol]" == n(t));
    };
  },
  73759,
  (t, e, r) => {
    var n = t.r(30364),
      i = t.r(12447),
      o = t.r(61884),
      a = 0 / 0,
      l = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      u = /^0o[0-7]+$/i,
      s = parseInt;
    e.exports = function (t) {
      if ("number" == typeof t) return t;
      if (o(t)) return a;
      if (i(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = i(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = n(t);
      var r = c.test(t);
      return r || u.test(t) ? s(t.slice(2), r ? 2 : 8) : l.test(t) ? a : +t;
    };
  },
  82560,
  (t, e, r) => {
    var n = t.r(73759),
      i = 1 / 0;
    e.exports = function (t) {
      return t
        ? (t = n(t)) === i || t === -i
          ? (t < 0 ? -1 : 1) * 17976931348623157e292
          : t == t
            ? t
            : 0
        : 0 === t
          ? t
          : 0;
    };
  },
  69523,
  (t, e, r) => {
    var n = t.r(93440),
      i = t.r(70237),
      o = t.r(82560);
    e.exports = function (t) {
      return function (e, r, a) {
        return (
          a && "number" != typeof a && i(e, r, a) && (r = a = void 0),
          (e = o(e)),
          void 0 === r ? ((r = e), (e = 0)) : (r = o(r)),
          (a = void 0 === a ? (e < r ? 1 : -1) : o(a)),
          n(e, r, a, t)
        );
      };
    };
  },
  44950,
  (t, e, r) => {
    e.exports = t.r(69523)();
  },
  45350,
  (t, e, r) => {
    e.exports = Array.isArray;
  },
  9903,
  (t, e, r) => {
    var n = t.r(45350),
      i = t.r(61884),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    e.exports = function (t, e) {
      if (n(t)) return !1;
      var r = typeof t;
      return (
        !!(
          "number" == r ||
          "symbol" == r ||
          "boolean" == r ||
          null == t ||
          i(t)
        ) ||
        a.test(t) ||
        !o.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  53789,
  (t, e, r) => {
    e.exports = t.r(39088)["__core-js_shared__"];
  },
  69553,
  (t, e, r) => {
    var n,
      i = t.r(53789),
      o = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + n
        : "";
    e.exports = function (t) {
      return !!o && o in t;
    };
  },
  76366,
  (t, e, r) => {
    var n = Function.prototype.toString;
    e.exports = function (t) {
      if (null != t) {
        try {
          return n.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    };
  },
  54368,
  (t, e, r) => {
    var n = t.r(71223),
      i = t.r(69553),
      o = t.r(12447),
      a = t.r(76366),
      l = /^\[object .+?Constructor\]$/,
      c = Object.prototype,
      u = Function.prototype.toString,
      s = c.hasOwnProperty,
      f = RegExp(
        "^" +
          u
            .call(s)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?",
            ) +
          "$",
      );
    e.exports = function (t) {
      return !(!o(t) || i(t)) && (n(t) ? f : l).test(a(t));
    };
  },
  63958,
  (t, e, r) => {
    e.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  41920,
  (t, e, r) => {
    var n = t.r(54368),
      i = t.r(63958);
    e.exports = function (t, e) {
      var r = i(t, e);
      return n(r) ? r : void 0;
    };
  },
  32760,
  (t, e, r) => {
    e.exports = t.r(41920)(Object, "create");
  },
  50514,
  (t, e, r) => {
    var n = t.r(32760);
    e.exports = function () {
      ((this.__data__ = n ? n(null) : {}), (this.size = 0));
    };
  },
  97617,
  (t, e, r) => {
    e.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return ((this.size -= !!e), e);
    };
  },
  57412,
  (t, e, r) => {
    var n = t.r(32760),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (t) {
      var e = this.__data__;
      if (n) {
        var r = e[t];
        return "__lodash_hash_undefined__" === r ? void 0 : r;
      }
      return i.call(e, t) ? e[t] : void 0;
    };
  },
  23592,
  (t, e, r) => {
    var n = t.r(32760),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (t) {
      var e = this.__data__;
      return n ? void 0 !== e[t] : i.call(e, t);
    };
  },
  39004,
  (t, e, r) => {
    var n = t.r(32760);
    e.exports = function (t, e) {
      var r = this.__data__;
      return (
        (this.size += +!this.has(t)),
        (r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e),
        this
      );
    };
  },
  34421,
  (t, e, r) => {
    var n = t.r(50514),
      i = t.r(97617),
      o = t.r(57412),
      a = t.r(23592),
      l = t.r(39004);
    function c(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    ((c.prototype.clear = n),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = l),
      (e.exports = c));
  },
  65742,
  (t, e, r) => {
    e.exports = function () {
      ((this.__data__ = []), (this.size = 0));
    };
  },
  34314,
  (t, e, r) => {
    var n = t.r(25172);
    e.exports = function (t, e) {
      for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
      return -1;
    };
  },
  19206,
  (t, e, r) => {
    var n = t.r(34314),
      i = Array.prototype.splice;
    e.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return (
        !(r < 0) &&
        (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, !0)
      );
    };
  },
  67763,
  (t, e, r) => {
    var n = t.r(34314);
    e.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
  },
  23407,
  (t, e, r) => {
    var n = t.r(34314);
    e.exports = function (t) {
      return n(this.__data__, t) > -1;
    };
  },
  53833,
  (t, e, r) => {
    var n = t.r(34314);
    e.exports = function (t, e) {
      var r = this.__data__,
        i = n(r, t);
      return (i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this);
    };
  },
  29039,
  (t, e, r) => {
    var n = t.r(65742),
      i = t.r(19206),
      o = t.r(67763),
      a = t.r(23407),
      l = t.r(53833);
    function c(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    ((c.prototype.clear = n),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = l),
      (e.exports = c));
  },
  87362,
  (t, e, r) => {
    e.exports = t.r(41920)(t.r(39088), "Map");
  },
  48994,
  (t, e, r) => {
    var n = t.r(34421),
      i = t.r(29039),
      o = t.r(87362);
    e.exports = function () {
      ((this.size = 0),
        (this.__data__ = {
          hash: new n(),
          map: new (o || i)(),
          string: new n(),
        }));
    };
  },
  24053,
  (t, e, r) => {
    e.exports = function (t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e
        ? "__proto__" !== t
        : null === t;
    };
  },
  87994,
  (t, e, r) => {
    var n = t.r(24053);
    e.exports = function (t, e) {
      var r = t.__data__;
      return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
    };
  },
  96768,
  (t, e, r) => {
    var n = t.r(87994);
    e.exports = function (t) {
      var e = n(this, t).delete(t);
      return ((this.size -= !!e), e);
    };
  },
  29932,
  (t, e, r) => {
    var n = t.r(87994);
    e.exports = function (t) {
      return n(this, t).get(t);
    };
  },
  92647,
  (t, e, r) => {
    var n = t.r(87994);
    e.exports = function (t) {
      return n(this, t).has(t);
    };
  },
  46644,
  (t, e, r) => {
    var n = t.r(87994);
    e.exports = function (t, e) {
      var r = n(this, t),
        i = r.size;
      return (r.set(t, e), (this.size += +(r.size != i)), this);
    };
  },
  87547,
  (t, e, r) => {
    var n = t.r(48994),
      i = t.r(96768),
      o = t.r(29932),
      a = t.r(92647),
      l = t.r(46644);
    function c(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    ((c.prototype.clear = n),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = l),
      (e.exports = c));
  },
  57588,
  (t, e, r) => {
    var n = t.r(87547);
    function i(t, e) {
      if ("function" != typeof t || (null != e && "function" != typeof e))
        throw TypeError("Expected a function");
      var r = function () {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, n);
        return ((r.cache = o.set(i, a) || o), a);
      };
      return ((r.cache = new (i.Cache || n)()), r);
    }
    ((i.Cache = n), (e.exports = i));
  },
  88832,
  (t, e, r) => {
    var n = t.r(57588);
    e.exports = function (t) {
      var e = n(t, function (t) {
          return (500 === r.size && r.clear(), t);
        }),
        r = e.cache;
      return e;
    };
  },
  2677,
  (t, e, r) => {
    var n = t.r(88832),
      i =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g;
    e.exports = n(function (t) {
      var e = [];
      return (
        46 === t.charCodeAt(0) && e.push(""),
        t.replace(i, function (t, r, n, i) {
          e.push(n ? i.replace(o, "$1") : r || t);
        }),
        e
      );
    });
  },
  92708,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; )
        i[r] = e(t[r], r, t);
      return i;
    };
  },
  72537,
  (t, e, r) => {
    var n = t.r(30353),
      i = t.r(92708),
      o = t.r(45350),
      a = t.r(61884),
      l = 1 / 0,
      c = n ? n.prototype : void 0,
      u = c ? c.toString : void 0;
    e.exports = function t(e) {
      if ("string" == typeof e) return e;
      if (o(e)) return i(e, t) + "";
      if (a(e)) return u ? u.call(e) : "";
      var r = e + "";
      return "0" == r && 1 / e == -l ? "-0" : r;
    };
  },
  2922,
  (t, e, r) => {
    var n = t.r(72537);
    e.exports = function (t) {
      return null == t ? "" : n(t);
    };
  },
  86287,
  (t, e, r) => {
    var n = t.r(45350),
      i = t.r(9903),
      o = t.r(2677),
      a = t.r(2922);
    e.exports = function (t, e) {
      return n(t) ? t : i(t, e) ? [t] : o(a(t));
    };
  },
  2054,
  (t, e, r) => {
    var n = t.r(61884),
      i = 1 / 0;
    e.exports = function (t) {
      if ("string" == typeof t || n(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -i ? "-0" : e;
    };
  },
  33141,
  (t, e, r) => {
    var n = t.r(86287),
      i = t.r(2054);
    e.exports = function (t, e) {
      e = n(e, t);
      for (var r = 0, o = e.length; null != t && r < o; ) t = t[i(e[r++])];
      return r && r == o ? t : void 0;
    };
  },
  82820,
  (t, e, r) => {
    var n = t.r(33141);
    e.exports = function (t, e, r) {
      var i = null == t ? void 0 : n(t, e);
      return void 0 === i ? r : i;
    };
  },
  69102,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
      return t;
    };
  },
  66645,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(77289);
    e.exports = function (t) {
      return i(t) && "[object Arguments]" == n(t);
    };
  },
  73250,
  (t, e, r) => {
    var n = t.r(66645),
      i = t.r(77289),
      o = Object.prototype,
      a = o.hasOwnProperty,
      l = o.propertyIsEnumerable;
    e.exports = n(
      (function () {
        return arguments;
      })(),
    )
      ? n
      : function (t) {
          return i(t) && a.call(t, "callee") && !l.call(t, "callee");
        };
  },
  33803,
  (t, e, r) => {
    var n = t.r(30353),
      i = t.r(73250),
      o = t.r(45350),
      a = n ? n.isConcatSpreadable : void 0;
    e.exports = function (t) {
      return o(t) || i(t) || !!(a && t && t[a]);
    };
  },
  41891,
  (t, e, r) => {
    var n = t.r(69102),
      i = t.r(33803);
    e.exports = function t(e, r, o, a, l) {
      var c = -1,
        u = e.length;
      for (o || (o = i), l || (l = []); ++c < u; ) {
        var s = e[c];
        r > 0 && o(s)
          ? r > 1
            ? t(s, r - 1, o, a, l)
            : n(l, s)
          : a || (l[l.length] = s);
      }
      return l;
    };
  },
  5400,
  (t, e, r) => {
    var n = t.r(29039);
    e.exports = function () {
      ((this.__data__ = new n()), (this.size = 0));
    };
  },
  86238,
  (t, e, r) => {
    e.exports = function (t) {
      var e = this.__data__,
        r = e.delete(t);
      return ((this.size = e.size), r);
    };
  },
  57831,
  (t, e, r) => {
    e.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  77802,
  (t, e, r) => {
    e.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  20517,
  (t, e, r) => {
    var n = t.r(29039),
      i = t.r(87362),
      o = t.r(87547);
    e.exports = function (t, e) {
      var r = this.__data__;
      if (r instanceof n) {
        var a = r.__data__;
        if (!i || a.length < 199)
          return (a.push([t, e]), (this.size = ++r.size), this);
        r = this.__data__ = new o(a);
      }
      return (r.set(t, e), (this.size = r.size), this);
    };
  },
  1551,
  (t, e, r) => {
    var n = t.r(29039),
      i = t.r(5400),
      o = t.r(86238),
      a = t.r(57831),
      l = t.r(77802),
      c = t.r(20517);
    function u(t) {
      var e = (this.__data__ = new n(t));
      this.size = e.size;
    }
    ((u.prototype.clear = i),
      (u.prototype.delete = o),
      (u.prototype.get = a),
      (u.prototype.has = l),
      (u.prototype.set = c),
      (e.exports = u));
  },
  21274,
  (t, e, r) => {
    e.exports = function (t) {
      return (this.__data__.set(t, "__lodash_hash_undefined__"), this);
    };
  },
  39805,
  (t, e, r) => {
    e.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  27493,
  (t, e, r) => {
    var n = t.r(87547),
      i = t.r(21274),
      o = t.r(39805);
    function a(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
    }
    ((a.prototype.add = a.prototype.push = i),
      (a.prototype.has = o),
      (e.exports = a));
  },
  51477,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
        if (e(t[r], r, t)) return !0;
      return !1;
    };
  },
  15262,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t.has(e);
    };
  },
  6856,
  (t, e, r) => {
    var n = t.r(27493),
      i = t.r(51477),
      o = t.r(15262);
    e.exports = function (t, e, r, a, l, c) {
      var u = 1 & r,
        s = t.length,
        f = e.length;
      if (s != f && !(u && f > s)) return !1;
      var p = c.get(t),
        d = c.get(e);
      if (p && d) return p == e && d == t;
      var h = -1,
        y = !0,
        v = 2 & r ? new n() : void 0;
      for (c.set(t, e), c.set(e, t); ++h < s; ) {
        var m = t[h],
          b = e[h];
        if (a) var g = u ? a(b, m, h, e, t, c) : a(m, b, h, t, e, c);
        if (void 0 !== g) {
          if (g) continue;
          y = !1;
          break;
        }
        if (v) {
          if (
            !i(e, function (t, e) {
              if (!o(v, e) && (m === t || l(m, t, r, a, c))) return v.push(e);
            })
          ) {
            y = !1;
            break;
          }
        } else if (!(m === b || l(m, b, r, a, c))) {
          y = !1;
          break;
        }
      }
      return (c.delete(t), c.delete(e), y);
    };
  },
  63750,
  (t, e, r) => {
    e.exports = t.r(39088).Uint8Array;
  },
  75331,
  (t, e, r) => {
    e.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t, n) {
          r[++e] = [n, t];
        }),
        r
      );
    };
  },
  99850,
  (t, e, r) => {
    e.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t) {
          r[++e] = t;
        }),
        r
      );
    };
  },
  78012,
  (t, e, r) => {
    var n = t.r(30353),
      i = t.r(63750),
      o = t.r(25172),
      a = t.r(6856),
      l = t.r(75331),
      c = t.r(99850),
      u = n ? n.prototype : void 0,
      s = u ? u.valueOf : void 0;
    e.exports = function (t, e, r, n, u, f, p) {
      switch (r) {
        case "[object DataView]":
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            break;
          ((t = t.buffer), (e = e.buffer));
        case "[object ArrayBuffer]":
          if (t.byteLength != e.byteLength || !f(new i(t), new i(e))) break;
          return !0;
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return o(+t, +e);
        case "[object Error]":
          return t.name == e.name && t.message == e.message;
        case "[object RegExp]":
        case "[object String]":
          return t == e + "";
        case "[object Map]":
          var d = l;
        case "[object Set]":
          var h = 1 & n;
          if ((d || (d = c), t.size != e.size && !h)) break;
          var y = p.get(t);
          if (y) return y == e;
          ((n |= 2), p.set(t, e));
          var v = a(d(t), d(e), n, u, f, p);
          return (p.delete(t), v);
        case "[object Symbol]":
          if (s) return s.call(t) == s.call(e);
      }
      return !1;
    };
  },
  23403,
  (t, e, r) => {
    var n = t.r(69102),
      i = t.r(45350);
    e.exports = function (t, e, r) {
      var o = e(t);
      return i(t) ? o : n(o, r(t));
    };
  },
  36100,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n; ) {
        var a = t[r];
        e(a, r, t) && (o[i++] = a);
      }
      return o;
    };
  },
  45159,
  (t, e, r) => {
    e.exports = function () {
      return [];
    };
  },
  17332,
  (t, e, r) => {
    var n = t.r(36100),
      i = t.r(45159),
      o = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols;
    e.exports = a
      ? function (t) {
          return null == t
            ? []
            : n(a((t = Object(t))), function (e) {
                return o.call(t, e);
              });
        }
      : i;
  },
  55803,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    };
  },
  24013,
  (t, e, r) => {
    e.exports = function () {
      return !1;
    };
  },
  56956,
  (t, e, r) => {
    var n = t.r(39088),
      i = t.r(24013),
      o = r && !r.nodeType && r,
      a = o && e && !e.nodeType && e,
      l = a && a.exports === o ? n.Buffer : void 0;
    e.exports = (l ? l.isBuffer : void 0) || i;
  },
  76602,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(98376),
      o = t.r(77289),
      a = {};
    ((a["[object Float32Array]"] =
      a["[object Float64Array]"] =
      a["[object Int8Array]"] =
      a["[object Int16Array]"] =
      a["[object Int32Array]"] =
      a["[object Uint8Array]"] =
      a["[object Uint8ClampedArray]"] =
      a["[object Uint16Array]"] =
      a["[object Uint32Array]"] =
        !0),
      (a["[object Arguments]"] =
        a["[object Array]"] =
        a["[object ArrayBuffer]"] =
        a["[object Boolean]"] =
        a["[object DataView]"] =
        a["[object Date]"] =
        a["[object Error]"] =
        a["[object Function]"] =
        a["[object Map]"] =
        a["[object Number]"] =
        a["[object Object]"] =
        a["[object RegExp]"] =
        a["[object Set]"] =
        a["[object String]"] =
        a["[object WeakMap]"] =
          !1),
      (e.exports = function (t) {
        return o(t) && i(t.length) && !!a[n(t)];
      }));
  },
  33999,
  (t, e, r) => {
    e.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  80156,
  (t, e, r) => {
    var n = t.r(236),
      i = r && !r.nodeType && r,
      o = i && e && !e.nodeType && e,
      a = o && o.exports === i && n.process;
    e.exports = (function () {
      try {
        var t = o && o.require && o.require("util").types;
        if (t) return t;
        return a && a.binding && a.binding("util");
      } catch (t) {}
    })();
  },
  3023,
  (t, e, r) => {
    var n = t.r(76602),
      i = t.r(33999),
      o = t.r(80156),
      a = o && o.isTypedArray;
    e.exports = a ? i(a) : n;
  },
  58877,
  (t, e, r) => {
    var n = t.r(55803),
      i = t.r(73250),
      o = t.r(45350),
      a = t.r(56956),
      l = t.r(66397),
      c = t.r(3023),
      u = Object.prototype.hasOwnProperty;
    e.exports = function (t, e) {
      var r = o(t),
        s = !r && i(t),
        f = !r && !s && a(t),
        p = !r && !s && !f && c(t),
        d = r || s || f || p,
        h = d ? n(t.length, String) : [],
        y = h.length;
      for (var v in t)
        (e || u.call(t, v)) &&
          !(
            d &&
            ("length" == v ||
              (f && ("offset" == v || "parent" == v)) ||
              (p &&
                ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
              l(v, y))
          ) &&
          h.push(v);
      return h;
    };
  },
  63996,
  (t, e, r) => {
    var n = Object.prototype;
    e.exports = function (t) {
      var e = t && t.constructor;
      return t === (("function" == typeof e && e.prototype) || n);
    };
  },
  25717,
  (t, e, r) => {
    e.exports = function (t, e) {
      return function (r) {
        return t(e(r));
      };
    };
  },
  42369,
  (t, e, r) => {
    e.exports = t.r(25717)(Object.keys, Object);
  },
  48477,
  (t, e, r) => {
    var n = t.r(63996),
      i = t.r(42369),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (t) {
      if (!n(t)) return i(t);
      var e = [];
      for (var r in Object(t)) o.call(t, r) && "constructor" != r && e.push(r);
      return e;
    };
  },
  33679,
  (t, e, r) => {
    var n = t.r(58877),
      i = t.r(48477),
      o = t.r(51095);
    e.exports = function (t) {
      return o(t) ? n(t) : i(t);
    };
  },
  13370,
  (t, e, r) => {
    var n = t.r(23403),
      i = t.r(17332),
      o = t.r(33679);
    e.exports = function (t) {
      return n(t, o, i);
    };
  },
  30698,
  (t, e, r) => {
    var n = t.r(13370),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (t, e, r, o, a, l) {
      var c = 1 & r,
        u = n(t),
        s = u.length;
      if (s != n(e).length && !c) return !1;
      for (var f = s; f--; ) {
        var p = u[f];
        if (!(c ? p in e : i.call(e, p))) return !1;
      }
      var d = l.get(t),
        h = l.get(e);
      if (d && h) return d == e && h == t;
      var y = !0;
      (l.set(t, e), l.set(e, t));
      for (var v = c; ++f < s; ) {
        var m = t[(p = u[f])],
          b = e[p];
        if (o) var g = c ? o(b, m, p, e, t, l) : o(m, b, p, t, e, l);
        if (!(void 0 === g ? m === b || a(m, b, r, o, l) : g)) {
          y = !1;
          break;
        }
        v || (v = "constructor" == p);
      }
      if (y && !v) {
        var x = t.constructor,
          w = e.constructor;
        x != w &&
          "constructor" in t &&
          "constructor" in e &&
          !(
            "function" == typeof x &&
            x instanceof x &&
            "function" == typeof w &&
            w instanceof w
          ) &&
          (y = !1);
      }
      return (l.delete(t), l.delete(e), y);
    };
  },
  1419,
  (t, e, r) => {
    e.exports = t.r(41920)(t.r(39088), "DataView");
  },
  17074,
  (t, e, r) => {
    e.exports = t.r(41920)(t.r(39088), "Promise");
  },
  6966,
  (t, e, r) => {
    e.exports = t.r(41920)(t.r(39088), "Set");
  },
  73895,
  (t, e, r) => {
    e.exports = t.r(41920)(t.r(39088), "WeakMap");
  },
  67426,
  (t, e, r) => {
    var n = t.r(1419),
      i = t.r(87362),
      o = t.r(17074),
      a = t.r(6966),
      l = t.r(73895),
      c = t.r(77684),
      u = t.r(76366),
      s = "[object Map]",
      f = "[object Promise]",
      p = "[object Set]",
      d = "[object WeakMap]",
      h = "[object DataView]",
      y = u(n),
      v = u(i),
      m = u(o),
      b = u(a),
      g = u(l),
      x = c;
    (((n && x(new n(new ArrayBuffer(1))) != h) ||
      (i && x(new i()) != s) ||
      (o && x(o.resolve()) != f) ||
      (a && x(new a()) != p) ||
      (l && x(new l()) != d)) &&
      (x = function (t) {
        var e = c(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          n = r ? u(r) : "";
        if (n)
          switch (n) {
            case y:
              return h;
            case v:
              return s;
            case m:
              return f;
            case b:
              return p;
            case g:
              return d;
          }
        return e;
      }),
      (e.exports = x));
  },
  78353,
  (t, e, r) => {
    var n = t.r(1551),
      i = t.r(6856),
      o = t.r(78012),
      a = t.r(30698),
      l = t.r(67426),
      c = t.r(45350),
      u = t.r(56956),
      s = t.r(3023),
      f = "[object Arguments]",
      p = "[object Array]",
      d = "[object Object]",
      h = Object.prototype.hasOwnProperty;
    e.exports = function (t, e, r, y, v, m) {
      var b = c(t),
        g = c(e),
        x = b ? p : l(t),
        w = g ? p : l(e);
      ((x = x == f ? d : x), (w = w == f ? d : w));
      var O = x == d,
        j = w == d,
        S = x == w;
      if (S && u(t)) {
        if (!u(e)) return !1;
        ((b = !0), (O = !1));
      }
      if (S && !O)
        return (
          m || (m = new n()),
          b || s(t) ? i(t, e, r, y, v, m) : o(t, e, x, r, y, v, m)
        );
      if (!(1 & r)) {
        var k = O && h.call(t, "__wrapped__"),
          P = j && h.call(e, "__wrapped__");
        if (k || P) {
          var A = k ? t.value() : t,
            E = P ? e.value() : e;
          return (m || (m = new n()), v(A, E, r, y, m));
        }
      }
      return !!S && (m || (m = new n()), a(t, e, r, y, v, m));
    };
  },
  21885,
  (t, e, r) => {
    var n = t.r(78353),
      i = t.r(77289);
    e.exports = function t(e, r, o, a, l) {
      return (
        e === r ||
        (null != e && null != r && (i(e) || i(r))
          ? n(e, r, o, a, t, l)
          : e != e && r != r)
      );
    };
  },
  48299,
  (t, e, r) => {
    var n = t.r(1551),
      i = t.r(21885);
    e.exports = function (t, e, r, o) {
      var a = r.length,
        l = a,
        c = !o;
      if (null == t) return !l;
      for (t = Object(t); a--; ) {
        var u = r[a];
        if (c && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
      }
      for (; ++a < l; ) {
        var s = (u = r[a])[0],
          f = t[s],
          p = u[1];
        if (c && u[2]) {
          if (void 0 === f && !(s in t)) return !1;
        } else {
          var d = new n();
          if (o) var h = o(f, p, s, t, e, d);
          if (!(void 0 === h ? i(p, f, 3, o, d) : h)) return !1;
        }
      }
      return !0;
    };
  },
  15782,
  (t, e, r) => {
    var n = t.r(12447);
    e.exports = function (t) {
      return t == t && !n(t);
    };
  },
  41903,
  (t, e, r) => {
    var n = t.r(15782),
      i = t.r(33679);
    e.exports = function (t) {
      for (var e = i(t), r = e.length; r--; ) {
        var o = e[r],
          a = t[o];
        e[r] = [o, a, n(a)];
      }
      return e;
    };
  },
  65570,
  (t, e, r) => {
    e.exports = function (t, e) {
      return function (r) {
        return null != r && r[t] === e && (void 0 !== e || t in Object(r));
      };
    };
  },
  23426,
  (t, e, r) => {
    var n = t.r(48299),
      i = t.r(41903),
      o = t.r(65570);
    e.exports = function (t) {
      var e = i(t);
      return 1 == e.length && e[0][2]
        ? o(e[0][0], e[0][1])
        : function (r) {
            return r === t || n(r, t, e);
          };
    };
  },
  40688,
  (t, e, r) => {
    e.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  15359,
  (t, e, r) => {
    var n = t.r(86287),
      i = t.r(73250),
      o = t.r(45350),
      a = t.r(66397),
      l = t.r(98376),
      c = t.r(2054);
    e.exports = function (t, e, r) {
      e = n(e, t);
      for (var u = -1, s = e.length, f = !1; ++u < s; ) {
        var p = c(e[u]);
        if (!(f = null != t && r(t, p))) break;
        t = t[p];
      }
      return f || ++u != s
        ? f
        : !!(s = null == t ? 0 : t.length) && l(s) && a(p, s) && (o(t) || i(t));
    };
  },
  76590,
  (t, e, r) => {
    var n = t.r(40688),
      i = t.r(15359);
    e.exports = function (t, e) {
      return null != t && i(t, e, n);
    };
  },
  72298,
  (t, e, r) => {
    var n = t.r(21885),
      i = t.r(82820),
      o = t.r(76590),
      a = t.r(9903),
      l = t.r(15782),
      c = t.r(65570),
      u = t.r(2054);
    e.exports = function (t, e) {
      return a(t) && l(e)
        ? c(u(t), e)
        : function (r) {
            var a = i(r, t);
            return void 0 === a && a === e ? o(r, t) : n(e, a, 3);
          };
    };
  },
  53336,
  (t, e, r) => {
    e.exports = function (t) {
      return t;
    };
  },
  1079,
  (t, e, r) => {
    e.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  30970,
  (t, e, r) => {
    var n = t.r(33141);
    e.exports = function (t) {
      return function (e) {
        return n(e, t);
      };
    };
  },
  33906,
  (t, e, r) => {
    var n = t.r(1079),
      i = t.r(30970),
      o = t.r(9903),
      a = t.r(2054);
    e.exports = function (t) {
      return o(t) ? n(a(t)) : i(t);
    };
  },
  66305,
  (t, e, r) => {
    var n = t.r(23426),
      i = t.r(72298),
      o = t.r(53336),
      a = t.r(45350),
      l = t.r(33906);
    e.exports = function (t) {
      return "function" == typeof t
        ? t
        : null == t
          ? o
          : "object" == typeof t
            ? a(t)
              ? i(t[0], t[1])
              : n(t)
            : l(t);
    };
  },
  36755,
  (t, e, r) => {
    e.exports = function (t) {
      return function (e, r, n) {
        for (var i = -1, o = Object(e), a = n(e), l = a.length; l--; ) {
          var c = a[t ? l : ++i];
          if (!1 === r(o[c], c, o)) break;
        }
        return e;
      };
    };
  },
  98728,
  (t, e, r) => {
    e.exports = t.r(36755)();
  },
  63799,
  (t, e, r) => {
    var n = t.r(98728),
      i = t.r(33679);
    e.exports = function (t, e) {
      return t && n(t, e, i);
    };
  },
  73554,
  (t, e, r) => {
    var n = t.r(51095);
    e.exports = function (t, e) {
      return function (r, i) {
        if (null == r) return r;
        if (!n(r)) return t(r, i);
        for (
          var o = r.length, a = e ? o : -1, l = Object(r);
          (e ? a-- : ++a < o) && !1 !== i(l[a], a, l);
        );
        return r;
      };
    };
  },
  53587,
  (t, e, r) => {
    var n = t.r(63799);
    e.exports = t.r(73554)(n);
  },
  7073,
  (t, e, r) => {
    var n = t.r(53587),
      i = t.r(51095);
    e.exports = function (t, e) {
      var r = -1,
        o = i(t) ? Array(t.length) : [];
      return (
        n(t, function (t, n, i) {
          o[++r] = e(t, n, i);
        }),
        o
      );
    };
  },
  83629,
  (t, e, r) => {
    e.exports = function (t, e) {
      var r = t.length;
      for (t.sort(e); r--; ) t[r] = t[r].value;
      return t;
    };
  },
  4886,
  (t, e, r) => {
    var n = t.r(61884);
    e.exports = function (t, e) {
      if (t !== e) {
        var r = void 0 !== t,
          i = null === t,
          o = t == t,
          a = n(t),
          l = void 0 !== e,
          c = null === e,
          u = e == e,
          s = n(e);
        if (
          (!c && !s && !a && t > e) ||
          (a && l && u && !c && !s) ||
          (i && l && u) ||
          (!r && u) ||
          !o
        )
          return 1;
        if (
          (!i && !a && !s && t < e) ||
          (s && r && o && !i && !a) ||
          (c && r && o) ||
          (!l && o) ||
          !u
        )
          return -1;
      }
      return 0;
    };
  },
  58322,
  (t, e, r) => {
    var n = t.r(4886);
    e.exports = function (t, e, r) {
      for (
        var i = -1, o = t.criteria, a = e.criteria, l = o.length, c = r.length;
        ++i < l;
      ) {
        var u = n(o[i], a[i]);
        if (u) {
          if (i >= c) return u;
          return u * ("desc" == r[i] ? -1 : 1);
        }
      }
      return t.index - e.index;
    };
  },
  28138,
  (t, e, r) => {
    var n = t.r(92708),
      i = t.r(33141),
      o = t.r(66305),
      a = t.r(7073),
      l = t.r(83629),
      c = t.r(33999),
      u = t.r(58322),
      s = t.r(53336),
      f = t.r(45350);
    e.exports = function (t, e, r) {
      e = e.length
        ? n(e, function (t) {
            return f(t)
              ? function (e) {
                  return i(e, 1 === t.length ? t[0] : t);
                }
              : t;
          })
        : [s];
      var p = -1;
      return (
        (e = n(e, c(o))),
        l(
          a(t, function (t, r, i) {
            return {
              criteria: n(e, function (e) {
                return e(t);
              }),
              index: ++p,
              value: t,
            };
          }),
          function (t, e) {
            return u(t, e, r);
          },
        )
      );
    };
  },
  87160,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    };
  },
  72953,
  (t, e, r) => {
    var n = t.r(87160),
      i = Math.max;
    e.exports = function (t, e, r) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (
            var o = arguments, a = -1, l = i(o.length - e, 0), c = Array(l);
            ++a < l;
          )
            c[a] = o[e + a];
          a = -1;
          for (var u = Array(e + 1); ++a < e; ) u[a] = o[a];
          return ((u[e] = r(c)), n(t, this, u));
        }
      );
    };
  },
  56751,
  (t, e, r) => {
    e.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  24251,
  (t, e, r) => {
    var n = t.r(41920);
    e.exports = (function () {
      try {
        var t = n(Object, "defineProperty");
        return (t({}, "", {}), t);
      } catch (t) {}
    })();
  },
  1647,
  (t, e, r) => {
    var n = t.r(56751),
      i = t.r(24251),
      o = t.r(53336);
    e.exports = i
      ? function (t, e) {
          return i(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(e),
            writable: !0,
          });
        }
      : o;
  },
  51994,
  (t, e, r) => {
    var n = Date.now;
    e.exports = function (t) {
      var e = 0,
        r = 0;
      return function () {
        var i = n(),
          o = 16 - (i - r);
        if (((r = i), o > 0)) {
          if (++e >= 800) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  84665,
  (t, e, r) => {
    var n = t.r(1647);
    e.exports = t.r(51994)(n);
  },
  95059,
  (t, e, r) => {
    var n = t.r(53336),
      i = t.r(72953),
      o = t.r(84665);
    e.exports = function (t, e) {
      return o(i(t, e, n), t + "");
    };
  },
  31195,
  (t, e, r) => {
    var n = t.r(41891),
      i = t.r(28138),
      o = t.r(95059),
      a = t.r(70237);
    e.exports = o(function (t, e) {
      if (null == t) return [];
      var r = e.length;
      return (
        r > 1 && a(t, e[0], e[1])
          ? (e = [])
          : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
        i(t, n(e, 1), [])
      );
    });
  },
  31926,
  (t, e, r) => {
    var n = t.r(39088);
    e.exports = function () {
      return n.Date.now();
    };
  },
  74009,
  (t, e, r) => {
    var n = t.r(12447),
      i = t.r(31926),
      o = t.r(73759),
      a = Math.max,
      l = Math.min;
    e.exports = function (t, e, r) {
      var c,
        u,
        s,
        f,
        p,
        d,
        h = 0,
        y = !1,
        v = !1,
        m = !0;
      if ("function" != typeof t) throw TypeError("Expected a function");
      function b(e) {
        var r = c,
          n = u;
        return ((c = u = void 0), (h = e), (f = t.apply(n, r)));
      }
      function g(t) {
        var r = t - d,
          n = t - h;
        return void 0 === d || r >= e || r < 0 || (v && n >= s);
      }
      function x() {
        var t,
          r,
          n,
          o = i();
        if (g(o)) return w(o);
        p = setTimeout(
          x,
          ((t = o - d), (r = o - h), (n = e - t), v ? l(n, s - r) : n),
        );
      }
      function w(t) {
        return ((p = void 0), m && c) ? b(t) : ((c = u = void 0), f);
      }
      function O() {
        var t,
          r = i(),
          n = g(r);
        if (((c = arguments), (u = this), (d = r), n)) {
          if (void 0 === p)
            return ((h = t = d), (p = setTimeout(x, e)), y ? b(t) : f);
          if (v) return (clearTimeout(p), (p = setTimeout(x, e)), b(d));
        }
        return (void 0 === p && (p = setTimeout(x, e)), f);
      }
      return (
        (e = o(e) || 0),
        n(r) &&
          ((y = !!r.leading),
          (s = (v = "maxWait" in r) ? a(o(r.maxWait) || 0, e) : s),
          (m = "trailing" in r ? !!r.trailing : m)),
        (O.cancel = function () {
          (void 0 !== p && clearTimeout(p), (h = 0), (c = d = u = p = void 0));
        }),
        (O.flush = function () {
          return void 0 === p ? f : w(i());
        }),
        O
      );
    };
  },
  24283,
  (t, e, r) => {
    var n = t.r(74009),
      i = t.r(12447);
    e.exports = function (t, e, r) {
      var o = !0,
        a = !0;
      if ("function" != typeof t) throw TypeError("Expected a function");
      return (
        i(r) &&
          ((o = "leading" in r ? !!r.leading : o),
          (a = "trailing" in r ? !!r.trailing : a)),
        n(t, e, { leading: o, maxWait: e, trailing: a })
      );
    };
  },
  85845,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(45350),
      o = t.r(77289);
    e.exports = function (t) {
      return (
        "string" == typeof t || (!i(t) && o(t) && "[object String]" == n(t))
      );
    };
  },
  15888,
  (t, e, r) => {
    "use strict";
    var n,
      i = Symbol.for("react.element"),
      o = Symbol.for("react.portal"),
      a = Symbol.for("react.fragment"),
      l = Symbol.for("react.strict_mode"),
      c = Symbol.for("react.profiler"),
      u = Symbol.for("react.provider"),
      s = Symbol.for("react.context"),
      f = Symbol.for("react.server_context"),
      p = Symbol.for("react.forward_ref"),
      d = Symbol.for("react.suspense"),
      h = Symbol.for("react.suspense_list"),
      y = Symbol.for("react.memo"),
      v = Symbol.for("react.lazy"),
      m = Symbol.for("react.offscreen");
    function b(t) {
      if ("object" == typeof t && null !== t) {
        var e = t.$$typeof;
        switch (e) {
          case i:
            switch ((t = t.type)) {
              case a:
              case c:
              case l:
              case d:
              case h:
                return t;
              default:
                switch ((t = t && t.$$typeof)) {
                  case f:
                  case s:
                  case p:
                  case v:
                  case y:
                  case u:
                    return t;
                  default:
                    return e;
                }
            }
          case o:
            return e;
        }
      }
    }
    ((n = Symbol.for("react.module.reference")),
      (r.ContextConsumer = s),
      (r.ContextProvider = u),
      (r.Element = i),
      (r.ForwardRef = p),
      (r.Fragment = a),
      (r.Lazy = v),
      (r.Memo = y),
      (r.Portal = o),
      (r.Profiler = c),
      (r.StrictMode = l),
      (r.Suspense = d),
      (r.SuspenseList = h),
      (r.isAsyncMode = function () {
        return !1;
      }),
      (r.isConcurrentMode = function () {
        return !1;
      }),
      (r.isContextConsumer = function (t) {
        return b(t) === s;
      }),
      (r.isContextProvider = function (t) {
        return b(t) === u;
      }),
      (r.isElement = function (t) {
        return "object" == typeof t && null !== t && t.$$typeof === i;
      }),
      (r.isForwardRef = function (t) {
        return b(t) === p;
      }),
      (r.isFragment = function (t) {
        return b(t) === a;
      }),
      (r.isLazy = function (t) {
        return b(t) === v;
      }),
      (r.isMemo = function (t) {
        return b(t) === y;
      }),
      (r.isPortal = function (t) {
        return b(t) === o;
      }),
      (r.isProfiler = function (t) {
        return b(t) === c;
      }),
      (r.isStrictMode = function (t) {
        return b(t) === l;
      }),
      (r.isSuspense = function (t) {
        return b(t) === d;
      }),
      (r.isSuspenseList = function (t) {
        return b(t) === h;
      }),
      (r.isValidElementType = function (t) {
        return (
          "string" == typeof t ||
          "function" == typeof t ||
          t === a ||
          t === c ||
          t === l ||
          t === d ||
          t === h ||
          t === m ||
          ("object" == typeof t &&
            null !== t &&
            (t.$$typeof === v ||
              t.$$typeof === y ||
              t.$$typeof === u ||
              t.$$typeof === s ||
              t.$$typeof === p ||
              t.$$typeof === n ||
              void 0 !== t.getModuleId)) ||
          !1
        );
      }),
      (r.typeOf = b));
  },
  79367,
  (t, e, r) => {
    "use strict";
    e.exports = t.r(15888);
  },
  94241,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(77289);
    e.exports = function (t) {
      return "number" == typeof t || (i(t) && "[object Number]" == n(t));
    };
  },
  78948,
  (t, e, r) => {
    var n = t.r(94241);
    e.exports = function (t) {
      return n(t) && t != +t;
    };
  },
  56445,
  (t, e, r) => {
    e.exports = function (t, e, r, n) {
      for (var i = t.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (e(t[o], o, t)) return o;
      return -1;
    };
  },
  4078,
  (t, e, r) => {
    e.exports = function (t) {
      return t != t;
    };
  },
  1987,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
      return -1;
    };
  },
  49719,
  (t, e, r) => {
    var n = t.r(56445),
      i = t.r(4078),
      o = t.r(1987);
    e.exports = function (t, e, r) {
      return e == e ? o(t, e, r) : n(t, i, r);
    };
  },
  46515,
  (t, e, r) => {
    var n = t.r(49719);
    e.exports = function (t, e) {
      return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
    };
  },
  29584,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
        if (r(e, t[n])) return !0;
      return !1;
    };
  },
  91692,
  (t, e, r) => {
    e.exports = function () {};
  },
  8484,
  (t, e, r) => {
    var n = t.r(6966),
      i = t.r(91692),
      o = t.r(99850);
    e.exports =
      n && 1 / o(new n([, -0]))[1] == 1 / 0
        ? function (t) {
            return new n(t);
          }
        : i;
  },
  10339,
  (t, e, r) => {
    var n = t.r(27493),
      i = t.r(46515),
      o = t.r(29584),
      a = t.r(15262),
      l = t.r(8484),
      c = t.r(99850);
    e.exports = function (t, e, r) {
      var u = -1,
        s = i,
        f = t.length,
        p = !0,
        d = [],
        h = d;
      if (r) ((p = !1), (s = o));
      else if (f >= 200) {
        var y = e ? null : l(t);
        if (y) return c(y);
        ((p = !1), (s = a), (h = new n()));
      } else h = e ? [] : d;
      t: for (; ++u < f; ) {
        var v = t[u],
          m = e ? e(v) : v;
        if (((v = r || 0 !== v ? v : 0), p && m == m)) {
          for (var b = h.length; b--; ) if (h[b] === m) continue t;
          (e && h.push(m), d.push(v));
        } else s(h, m, r) || (h !== d && h.push(m), d.push(v));
      }
      return d;
    };
  },
  74010,
  (t, e, r) => {
    var n = t.r(66305),
      i = t.r(10339);
    e.exports = function (t, e) {
      return t && t.length ? i(t, n(e, 2)) : [];
    };
  },
  95014,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      var n = -1,
        i = t.length;
      (e < 0 && (e = -e > i ? 0 : i + e),
        (r = r > i ? i : r) < 0 && (r += i),
        (i = e > r ? 0 : (r - e) >>> 0),
        (e >>>= 0));
      for (var o = Array(i); ++n < i; ) o[n] = t[n + e];
      return o;
    };
  },
  84357,
  (t, e, r) => {
    var n = t.r(95014);
    e.exports = function (t, e, r) {
      var i = t.length;
      return ((r = void 0 === r ? i : r), !e && r >= i ? t : n(t, e, r));
    };
  },
  79589,
  (t, e, r) => {
    var n = RegExp(
      "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]",
    );
    e.exports = function (t) {
      return n.test(t);
    };
  },
  58672,
  (t, e, r) => {
    e.exports = function (t) {
      return t.split("");
    };
  },
  95365,
  (t, e, r) => {
    var n = "\\ud800-\\udfff",
      i = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      o = "\\ud83c[\\udffb-\\udfff]",
      a = "[^" + n + "]",
      l = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      c = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      u = "(?:" + i + "|" + o + ")?",
      s = "[\\ufe0e\\ufe0f]?",
      f = "(?:\\u200d(?:" + [a, l, c].join("|") + ")" + s + u + ")*",
      p = RegExp(
        o +
          "(?=" +
          o +
          ")|" +
          ("(?:" + [a + i + "?", i, l, c, "[" + n + "]"].join("|")) +
          ")" +
          (s + u + f),
        "g",
      );
    e.exports = function (t) {
      return t.match(p) || [];
    };
  },
  34170,
  (t, e, r) => {
    var n = t.r(58672),
      i = t.r(79589),
      o = t.r(95365);
    e.exports = function (t) {
      return i(t) ? o(t) : n(t);
    };
  },
  29821,
  (t, e, r) => {
    var n = t.r(84357),
      i = t.r(79589),
      o = t.r(34170),
      a = t.r(2922);
    e.exports = function (t) {
      return function (e) {
        var r = i((e = a(e))) ? o(e) : void 0,
          l = r ? r[0] : e.charAt(0),
          c = r ? n(r, 1).join("") : e.slice(1);
        return l[t]() + c;
      };
    };
  },
  32241,
  (t, e, r) => {
    e.exports = t.r(29821)("toUpperCase");
  },
  32189,
  (t, e, r) => {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  65156,
  (t, e, r) => {
    "use strict";
    var n = t.r(32189);
    function i() {}
    function o() {}
    ((o.resetWarningCache = i),
      (e.exports = function () {
        function t(t, e, r, i, o, a) {
          if (a !== n) {
            var l = Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
            );
            throw ((l.name = "Invariant Violation"), l);
          }
        }
        function e() {
          return t;
        }
        t.isRequired = t;
        var r = {
          array: t,
          bigint: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: o,
          resetWarningCache: i,
        };
        return ((r.PropTypes = r), r);
      }));
  },
  45009,
  (t, e, r) => {
    e.exports = t.r(65156)();
  },
  41015,
  (t, e, r) => {
    var n = t.r(61884);
    e.exports = function (t, e, r) {
      for (var i = -1, o = t.length; ++i < o; ) {
        var a = t[i],
          l = e(a);
        if (null != l && (void 0 === c ? l == l && !n(l) : r(l, c)))
          var c = l,
            u = a;
      }
      return u;
    };
  },
  80957,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t > e;
    };
  },
  86966,
  (t, e, r) => {
    var n = t.r(41015),
      i = t.r(80957),
      o = t.r(53336);
    e.exports = function (t) {
      return t && t.length ? n(t, o, i) : void 0;
    };
  },
  98128,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t < e;
    };
  },
  37544,
  (t, e, r) => {
    var n = t.r(41015),
      i = t.r(98128),
      o = t.r(53336);
    e.exports = function (t) {
      return t && t.length ? n(t, o, i) : void 0;
    };
  },
  10632,
  (t, e, r) => {
    var n = t.r(92708),
      i = t.r(66305),
      o = t.r(7073),
      a = t.r(45350);
    e.exports = function (t, e) {
      return (a(t) ? n : o)(t, i(e, 3));
    };
  },
  33303,
  (t, e, r) => {
    var n = t.r(41891),
      i = t.r(10632);
    e.exports = function (t, e) {
      return n(i(t, e), 1);
    };
  },
  98892,
  (t, e, r) => {
    var n = t.r(21885);
    e.exports = function (t, e) {
      return n(t, e);
    };
  },
  51655,
  (t, e, r) => {
    !(function (r) {
      "use strict";
      var n,
        i = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
        },
        o = !0,
        a = "[DecimalError] ",
        l = a + "Invalid argument: ",
        c = a + "Exponent out of range: ",
        u = Math.floor,
        s = Math.pow,
        f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        p = u(1286742750677284.5),
        d = {};
      function h(t, e) {
        var r,
          n,
          i,
          a,
          l,
          c,
          u,
          s,
          f = t.constructor,
          p = f.precision;
        if (!t.s || !e.s) return (e.s || (e = new f(t)), o ? S(e, p) : e);
        if (
          ((u = t.d),
          (s = e.d),
          (l = t.e),
          (i = e.e),
          (u = u.slice()),
          (a = l - i))
        ) {
          for (
            a < 0
              ? ((n = u), (a = -a), (c = s.length))
              : ((n = s), (i = l), (c = u.length)),
              a > (c = (l = Math.ceil(p / 7)) > c ? l + 1 : c + 1) &&
                ((a = c), (n.length = 1)),
              n.reverse();
            a--;
          )
            n.push(0);
          n.reverse();
        }
        for (
          (c = u.length) - (a = s.length) < 0 &&
            ((a = c), (n = s), (s = u), (u = n)),
            r = 0;
          a;
        )
          ((r = ((u[--a] = u[a] + s[a] + r) / 1e7) | 0), (u[a] %= 1e7));
        for (r && (u.unshift(r), ++i), c = u.length; 0 == u[--c]; ) u.pop();
        return ((e.d = u), (e.e = i), o ? S(e, p) : e);
      }
      function y(t, e, r) {
        if (t !== ~~t || t < e || t > r) throw Error(l + t);
      }
      function v(t) {
        var e,
          r,
          n,
          i = t.length - 1,
          o = "",
          a = t[0];
        if (i > 0) {
          for (o += a, e = 1; e < i; e++)
            ((r = 7 - (n = t[e] + "").length) && (o += w(r)), (o += n));
          (r = 7 - (n = (a = t[e]) + "").length) && (o += w(r));
        } else if (0 === a) return "0";
        for (; a % 10 == 0; ) a /= 10;
        return o + a;
      }
      ((d.absoluteValue = d.abs =
        function () {
          var t = new this.constructor(this);
          return (t.s && (t.s = 1), t);
        }),
        (d.comparedTo = d.cmp =
          function (t) {
            var e, r, n, i;
            if (((t = new this.constructor(t)), this.s !== t.s))
              return this.s || -t.s;
            if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
            for (
              e = 0, r = (n = this.d.length) < (i = t.d.length) ? n : i;
              e < r;
              ++e
            )
              if (this.d[e] !== t.d[e])
                return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (this.s < 0) ? 1 : -1;
          }),
        (d.decimalPlaces = d.dp =
          function () {
            var t = this.d.length - 1,
              e = (t - this.e) * 7;
            if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
            return e < 0 ? 0 : e;
          }),
        (d.dividedBy = d.div =
          function (t) {
            return m(this, new this.constructor(t));
          }),
        (d.dividedToIntegerBy = d.idiv =
          function (t) {
            var e = this.constructor;
            return S(m(this, new e(t), 0, 1), e.precision);
          }),
        (d.equals = d.eq =
          function (t) {
            return !this.cmp(t);
          }),
        (d.exponent = function () {
          return g(this);
        }),
        (d.greaterThan = d.gt =
          function (t) {
            return this.cmp(t) > 0;
          }),
        (d.greaterThanOrEqualTo = d.gte =
          function (t) {
            return this.cmp(t) >= 0;
          }),
        (d.isInteger = d.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (d.isNegative = d.isneg =
          function () {
            return this.s < 0;
          }),
        (d.isPositive = d.ispos =
          function () {
            return this.s > 0;
          }),
        (d.isZero = function () {
          return 0 === this.s;
        }),
        (d.lessThan = d.lt =
          function (t) {
            return 0 > this.cmp(t);
          }),
        (d.lessThanOrEqualTo = d.lte =
          function (t) {
            return 1 > this.cmp(t);
          }),
        (d.logarithm = d.log =
          function (t) {
            var e,
              r = this.constructor,
              i = r.precision,
              l = i + 5;
            if (void 0 === t) t = new r(10);
            else if ((t = new r(t)).s < 1 || t.eq(n)) throw Error(a + "NaN");
            if (this.s < 1) throw Error(a + (this.s ? "NaN" : "-Infinity"));
            return this.eq(n)
              ? new r(0)
              : ((o = !1), (e = m(O(this, l), O(t, l), l)), (o = !0), S(e, i));
          }),
        (d.minus = d.sub =
          function (t) {
            return (
              (t = new this.constructor(t)),
              this.s == t.s ? k(this, t) : h(this, ((t.s = -t.s), t))
            );
          }),
        (d.modulo = d.mod =
          function (t) {
            var e,
              r = this.constructor,
              n = r.precision;
            if (!(t = new r(t)).s) throw Error(a + "NaN");
            return this.s
              ? ((o = !1),
                (e = m(this, t, 0, 1).times(t)),
                (o = !0),
                this.minus(e))
              : S(new r(this), n);
          }),
        (d.naturalExponential = d.exp =
          function () {
            return b(this);
          }),
        (d.naturalLogarithm = d.ln =
          function () {
            return O(this);
          }),
        (d.negated = d.neg =
          function () {
            var t = new this.constructor(this);
            return ((t.s = -t.s || 0), t);
          }),
        (d.plus = d.add =
          function (t) {
            return (
              (t = new this.constructor(t)),
              this.s == t.s ? h(this, t) : k(this, ((t.s = -t.s), t))
            );
          }),
        (d.precision = d.sd =
          function (t) {
            var e, r, n;
            if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
              throw Error(l + t);
            if (
              ((e = g(this) + 1),
              (r = 7 * (n = this.d.length - 1) + 1),
              (n = this.d[n]))
            ) {
              for (; n % 10 == 0; n /= 10) r--;
              for (n = this.d[0]; n >= 10; n /= 10) r++;
            }
            return t && e > r ? e : r;
          }),
        (d.squareRoot = d.sqrt =
          function () {
            var t,
              e,
              r,
              n,
              i,
              l,
              c,
              s = this.constructor;
            if (this.s < 1) {
              if (!this.s) return new s(0);
              throw Error(a + "NaN");
            }
            for (
              t = g(this),
                o = !1,
                0 == (i = Math.sqrt(+this)) || i == 1 / 0
                  ? (((e = v(this.d)).length + t) % 2 == 0 && (e += "0"),
                    (i = Math.sqrt(e)),
                    (t = u((t + 1) / 2) - (t < 0 || t % 2)),
                    (n = new s(
                      (e =
                        i == 1 / 0
                          ? "5e" + t
                          : (e = i.toExponential()).slice(
                              0,
                              e.indexOf("e") + 1,
                            ) + t),
                    )))
                  : (n = new s(i.toString())),
                i = c = (r = s.precision) + 3;
              ;
            )
              if (
                ((n = (l = n).plus(m(this, l, c + 2)).times(0.5)),
                v(l.d).slice(0, c) === (e = v(n.d)).slice(0, c))
              ) {
                if (((e = e.slice(c - 3, c + 1)), i == c && "4999" == e)) {
                  if ((S(l, r + 1, 0), l.times(l).eq(this))) {
                    n = l;
                    break;
                  }
                } else if ("9999" != e) break;
                c += 4;
              }
            return ((o = !0), S(n, r));
          }),
        (d.times = d.mul =
          function (t) {
            var e,
              r,
              n,
              i,
              a,
              l,
              c,
              u,
              s,
              f = this.constructor,
              p = this.d,
              d = (t = new f(t)).d;
            if (!this.s || !t.s) return new f(0);
            for (
              t.s *= this.s,
                r = this.e + t.e,
                (u = p.length) < (s = d.length) &&
                  ((a = p), (p = d), (d = a), (l = u), (u = s), (s = l)),
                a = [],
                n = l = u + s;
              n--;
            )
              a.push(0);
            for (n = s; --n >= 0; ) {
              for (e = 0, i = u + n; i > n; )
                ((c = a[i] + d[n] * p[i - n - 1] + e),
                  (a[i--] = (c % 1e7) | 0),
                  (e = (c / 1e7) | 0));
              a[i] = ((a[i] + e) % 1e7) | 0;
            }
            for (; !a[--l]; ) a.pop();
            return (
              e ? ++r : a.shift(),
              (t.d = a),
              (t.e = r),
              o ? S(t, f.precision) : t
            );
          }),
        (d.toDecimalPlaces = d.todp =
          function (t, e) {
            var r = this,
              n = r.constructor;
            return ((r = new n(r)), void 0 === t)
              ? r
              : (y(t, 0, 1e9),
                void 0 === e ? (e = n.rounding) : y(e, 0, 8),
                S(r, t + g(r) + 1, e));
          }),
        (d.toExponential = function (t, e) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === t
              ? (r = P(n, !0))
              : (y(t, 0, 1e9),
                void 0 === e ? (e = i.rounding) : y(e, 0, 8),
                (r = P((n = S(new i(n), t + 1, e)), !0, t + 1))),
            r
          );
        }),
        (d.toFixed = function (t, e) {
          var r,
            n,
            i = this.constructor;
          return void 0 === t
            ? P(this)
            : (y(t, 0, 1e9),
              void 0 === e ? (e = i.rounding) : y(e, 0, 8),
              (r = P(
                (n = S(new i(this), t + g(this) + 1, e)).abs(),
                !1,
                t + g(n) + 1,
              )),
              this.isneg() && !this.isZero() ? "-" + r : r);
        }),
        (d.toInteger = d.toint =
          function () {
            var t = this.constructor;
            return S(new t(this), g(this) + 1, t.rounding);
          }),
        (d.toNumber = function () {
          return +this;
        }),
        (d.toPower = d.pow =
          function (t) {
            var e,
              r,
              i,
              l,
              c,
              s,
              f = this,
              p = f.constructor,
              d = +(t = new p(t));
            if (!t.s) return new p(n);
            if (!(f = new p(f)).s) {
              if (t.s < 1) throw Error(a + "Infinity");
              return f;
            }
            if (f.eq(n)) return f;
            if (((i = p.precision), t.eq(n))) return S(f, i);
            if (((s = (e = t.e) >= (r = t.d.length - 1)), (c = f.s), s)) {
              if ((r = d < 0 ? -d : d) <= 0x1fffffffffffff) {
                for (
                  l = new p(n), e = Math.ceil(i / 7 + 4), o = !1;
                  r % 2 && A((l = l.times(f)).d, e), 0 !== (r = u(r / 2));
                )
                  A((f = f.times(f)).d, e);
                return ((o = !0), t.s < 0 ? new p(n).div(l) : S(l, i));
              }
            } else if (c < 0) throw Error(a + "NaN");
            return (
              (c = c < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
              (f.s = 1),
              (o = !1),
              (l = t.times(O(f, i + 12))),
              (o = !0),
              ((l = b(l)).s = c),
              l
            );
          }),
        (d.toPrecision = function (t, e) {
          var r,
            n,
            i = this,
            o = i.constructor;
          return (
            void 0 === t
              ? ((r = g(i)), (n = P(i, r <= o.toExpNeg || r >= o.toExpPos)))
              : (y(t, 1, 1e9),
                void 0 === e ? (e = o.rounding) : y(e, 0, 8),
                (r = g((i = S(new o(i), t, e)))),
                (n = P(i, t <= r || r <= o.toExpNeg, t))),
            n
          );
        }),
        (d.toSignificantDigits = d.tosd =
          function (t, e) {
            var r = this.constructor;
            return (
              void 0 === t
                ? ((t = r.precision), (e = r.rounding))
                : (y(t, 1, 1e9), void 0 === e ? (e = r.rounding) : y(e, 0, 8)),
              S(new r(this), t, e)
            );
          }),
        (d.toString =
          d.valueOf =
          d.val =
          d.toJSON =
            function () {
              var t = g(this),
                e = this.constructor;
              return P(this, t <= e.toExpNeg || t >= e.toExpPos);
            }));
      var m = (function () {
        function t(t, e) {
          var r,
            n = 0,
            i = t.length;
          for (t = t.slice(); i--; )
            ((r = t[i] * e + n), (t[i] = (r % 1e7) | 0), (n = (r / 1e7) | 0));
          return (n && t.unshift(n), t);
        }
        function e(t, e, r, n) {
          var i, o;
          if (r != n) o = r > n ? 1 : -1;
          else
            for (i = o = 0; i < r; i++)
              if (t[i] != e[i]) {
                o = t[i] > e[i] ? 1 : -1;
                break;
              }
          return o;
        }
        function r(t, e, r) {
          for (var n = 0; r--; )
            ((t[r] -= n), (n = +(t[r] < e[r])), (t[r] = 1e7 * n + t[r] - e[r]));
          for (; !t[0] && t.length > 1; ) t.shift();
        }
        return function (n, i, o, l) {
          var c,
            u,
            s,
            f,
            p,
            d,
            h,
            y,
            v,
            m,
            b,
            x,
            w,
            O,
            j,
            k,
            P,
            A,
            E = n.constructor,
            _ = n.s == i.s ? 1 : -1,
            M = n.d,
            T = i.d;
          if (!n.s) return new E(n);
          if (!i.s) throw Error(a + "Division by zero");
          for (
            s = 0,
              u = n.e - i.e,
              P = T.length,
              j = M.length,
              y = (h = new E(_)).d = [];
            T[s] == (M[s] || 0);
          )
            ++s;
          if (
            (T[s] > (M[s] || 0) && --u,
            (x =
              null == o ? (o = E.precision) : l ? o + (g(n) - g(i)) + 1 : o) <
              0)
          )
            return new E(0);
          if (((x = (x / 7 + 2) | 0), (s = 0), 1 == P))
            for (f = 0, T = T[0], x++; (s < j || f) && x--; s++)
              ((w = 1e7 * f + (M[s] || 0)),
                (y[s] = (w / T) | 0),
                (f = (w % T) | 0));
          else {
            for (
              (f = (1e7 / (T[0] + 1)) | 0) > 1 &&
                ((T = t(T, f)), (M = t(M, f)), (P = T.length), (j = M.length)),
                O = P,
                m = (v = M.slice(0, P)).length;
              m < P;
            )
              v[m++] = 0;
            ((A = T.slice()).unshift(0), (k = T[0]), T[1] >= 1e7 / 2 && ++k);
            do
              ((f = 0),
                (c = e(T, v, P, m)) < 0
                  ? ((b = v[0]),
                    P != m && (b = 1e7 * b + (v[1] || 0)),
                    (f = (b / k) | 0) > 1
                      ? (f >= 1e7 && (f = 1e7 - 1),
                        (d = (p = t(T, f)).length),
                        (m = v.length),
                        1 == (c = e(p, v, d, m)) &&
                          (f--, r(p, P < d ? A : T, d)))
                      : (0 == f && (c = f = 1), (p = T.slice())),
                    (d = p.length) < m && p.unshift(0),
                    r(v, p, m),
                    -1 == c &&
                      ((m = v.length),
                      (c = e(T, v, P, m)) < 1 && (f++, r(v, P < m ? A : T, m))),
                    (m = v.length))
                  : 0 === c && (f++, (v = [0])),
                (y[s++] = f),
                c && v[0] ? (v[m++] = M[O] || 0) : ((v = [M[O]]), (m = 1)));
            while ((O++ < j || void 0 !== v[0]) && x--);
          }
          return (y[0] || y.shift(), (h.e = u), S(h, l ? o + g(h) + 1 : o));
        };
      })();
      function b(t, e) {
        var r,
          i,
          a,
          l,
          u,
          f = 0,
          p = 0,
          d = t.constructor,
          h = d.precision;
        if (g(t) > 16) throw Error(c + g(t));
        if (!t.s) return new d(n);
        for (
          null == e ? ((o = !1), (u = h)) : (u = e), l = new d(0.03125);
          t.abs().gte(0.1);
        )
          ((t = t.times(l)), (p += 5));
        for (
          u += ((Math.log(s(2, p)) / Math.LN10) * 2 + 5) | 0,
            r = i = a = new d(n),
            d.precision = u;
          ;
        ) {
          if (
            ((i = S(i.times(t), u)),
            (r = r.times(++f)),
            v((l = a.plus(m(i, r, u))).d).slice(0, u) === v(a.d).slice(0, u))
          ) {
            for (; p--; ) a = S(a.times(a), u);
            return ((d.precision = h), null == e ? ((o = !0), S(a, h)) : a);
          }
          a = l;
        }
      }
      function g(t) {
        for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
        return e;
      }
      function x(t, e, r) {
        if (e > t.LN10.sd())
          throw (
            (o = !0),
            r && (t.precision = r),
            Error(a + "LN10 precision limit exceeded")
          );
        return S(new t(t.LN10), e);
      }
      function w(t) {
        for (var e = ""; t--; ) e += "0";
        return e;
      }
      function O(t, e) {
        var r,
          i,
          l,
          c,
          u,
          s,
          f,
          p,
          d,
          h = 1,
          y = t,
          b = y.d,
          w = y.constructor,
          j = w.precision;
        if (y.s < 1) throw Error(a + (y.s ? "NaN" : "-Infinity"));
        if (y.eq(n)) return new w(0);
        if ((null == e ? ((o = !1), (p = j)) : (p = e), y.eq(10)))
          return (null == e && (o = !0), x(w, p));
        if (
          ((w.precision = p += 10),
          (i = (r = v(b)).charAt(0)),
          !(15e14 > Math.abs((c = g(y)))))
        )
          return (
            (f = x(w, p + 2, j).times(c + "")),
            (y = O(new w(i + "." + r.slice(1)), p - 10).plus(f)),
            (w.precision = j),
            null == e ? ((o = !0), S(y, j)) : y
          );
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); )
          ((i = (r = v((y = y.times(t)).d)).charAt(0)), h++);
        for (
          c = g(y),
            i > 1
              ? ((y = new w("0." + r)), c++)
              : (y = new w(i + "." + r.slice(1))),
            s = u = y = m(y.minus(n), y.plus(n), p),
            d = S(y.times(y), p),
            l = 3;
          ;
        ) {
          if (
            ((u = S(u.times(d), p)),
            v((f = s.plus(m(u, new w(l), p))).d).slice(0, p) ===
              v(s.d).slice(0, p))
          )
            return (
              (s = s.times(2)),
              0 !== c && (s = s.plus(x(w, p + 2, j).times(c + ""))),
              (s = m(s, new w(h), p)),
              (w.precision = j),
              null == e ? ((o = !0), S(s, j)) : s
            );
          ((s = f), (l += 2));
        }
      }
      function j(t, e) {
        var r, n, i;
        for (
          (r = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
            (n = e.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +e.slice(n + 1)),
                (e = e.substring(0, n)))
              : r < 0 && (r = e.length),
            n = 0;
          48 === e.charCodeAt(n);
        )
          ++n;
        for (i = e.length; 48 === e.charCodeAt(i - 1); ) --i;
        if ((e = e.slice(n, i))) {
          if (
            ((i -= n),
            (t.e = u((r = r - n - 1) / 7)),
            (t.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && t.d.push(+e.slice(0, n)), i -= 7; n < i; )
              t.d.push(+e.slice(n, (n += 7)));
            n = 7 - (e = e.slice(n)).length;
          } else n -= i;
          for (; n--; ) e += "0";
          if ((t.d.push(+e), o && (t.e > p || t.e < -p))) throw Error(c + r);
        } else ((t.s = 0), (t.e = 0), (t.d = [0]));
        return t;
      }
      function S(t, e, r) {
        var n,
          i,
          a,
          l,
          f,
          d,
          h,
          y,
          v = t.d;
        for (l = 1, a = v[0]; a >= 10; a /= 10) l++;
        if ((n = e - l) < 0) ((n += 7), (i = e), (h = v[(y = 0)]));
        else {
          if ((y = Math.ceil((n + 1) / 7)) >= (a = v.length)) return t;
          for (l = 1, h = a = v[y]; a >= 10; a /= 10) l++;
          ((n %= 7), (i = n - 7 + l));
        }
        if (
          (void 0 !== r &&
            ((f = ((h / (a = s(10, l - i - 1))) % 10) | 0),
            (d = e < 0 || void 0 !== v[y + 1] || h % a),
            (d =
              r < 4
                ? (f || d) && (0 == r || r == (t.s < 0 ? 3 : 2))
                : f > 5 ||
                  (5 == f &&
                    (4 == r ||
                      d ||
                      (6 == r &&
                        ((n > 0 ? (i > 0 ? h / s(10, l - i) : 0) : v[y - 1]) %
                          10) &
                          1) ||
                      r == (t.s < 0 ? 8 : 7))))),
          e < 1 || !v[0])
        )
          return (
            d
              ? ((a = g(t)),
                (v.length = 1),
                (e = e - a - 1),
                (v[0] = s(10, (7 - (e % 7)) % 7)),
                (t.e = u(-e / 7) || 0))
              : ((v.length = 1), (v[0] = t.e = t.s = 0)),
            t
          );
        if (
          (0 == n
            ? ((v.length = y), (a = 1), y--)
            : ((v.length = y + 1),
              (a = s(10, 7 - n)),
              (v[y] = i > 0 ? (((h / s(10, l - i)) % s(10, i)) | 0) * a : 0)),
          d)
        )
          for (;;)
            if (0 == y) {
              1e7 == (v[0] += a) && ((v[0] = 1), ++t.e);
              break;
            } else {
              if (((v[y] += a), 1e7 != v[y])) break;
              ((v[y--] = 0), (a = 1));
            }
        for (n = v.length; 0 === v[--n]; ) v.pop();
        if (o && (t.e > p || t.e < -p)) throw Error(c + g(t));
        return t;
      }
      function k(t, e) {
        var r,
          n,
          i,
          a,
          l,
          c,
          u,
          s,
          f,
          p,
          d = t.constructor,
          h = d.precision;
        if (!t.s || !e.s)
          return (e.s ? (e.s = -e.s) : (e = new d(t)), o ? S(e, h) : e);
        if (
          ((u = t.d),
          (p = e.d),
          (n = e.e),
          (s = t.e),
          (u = u.slice()),
          (l = s - n))
        ) {
          for (
            (f = l < 0)
              ? ((r = u), (l = -l), (c = p.length))
              : ((r = p), (n = s), (c = u.length)),
              l > (i = Math.max(Math.ceil(h / 7), c) + 2) &&
                ((l = i), (r.length = 1)),
              r.reverse(),
              i = l;
            i--;
          )
            r.push(0);
          r.reverse();
        } else {
          for (
            (f = (i = u.length) < (c = p.length)) && (c = i), i = 0;
            i < c;
            i++
          )
            if (u[i] != p[i]) {
              f = u[i] < p[i];
              break;
            }
          l = 0;
        }
        for (
          f && ((r = u), (u = p), (p = r), (e.s = -e.s)),
            c = u.length,
            i = p.length - c;
          i > 0;
          --i
        )
          u[c++] = 0;
        for (i = p.length; i > l; ) {
          if (u[--i] < p[i]) {
            for (a = i; a && 0 === u[--a]; ) u[a] = 1e7 - 1;
            (--u[a], (u[i] += 1e7));
          }
          u[i] -= p[i];
        }
        for (; 0 === u[--c]; ) u.pop();
        for (; 0 === u[0]; u.shift()) --n;
        return u[0] ? ((e.d = u), (e.e = n), o ? S(e, h) : e) : new d(0);
      }
      function P(t, e, r) {
        var n,
          i = g(t),
          o = v(t.d),
          a = o.length;
        return (
          e
            ? (r && (n = r - a) > 0
                ? (o = o.charAt(0) + "." + o.slice(1) + w(n))
                : a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
              (o = o + (i < 0 ? "e" : "e+") + i))
            : i < 0
              ? ((o = "0." + w(-i - 1) + o),
                r && (n = r - a) > 0 && (o += w(n)))
              : i >= a
                ? ((o += w(i + 1 - a)),
                  r && (n = r - i - 1) > 0 && (o = o + "." + w(n)))
                : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)),
                  r &&
                    (n = r - a) > 0 &&
                    (i + 1 === a && (o += "."), (o += w(n)))),
          t.s < 0 ? "-" + o : o
        );
      }
      function A(t, e) {
        if (t.length > e) return ((t.length = e), !0);
      }
      function E(t) {
        if (!t || "object" != typeof t) throw Error(a + "Object expected");
        var e,
          r,
          n,
          i = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -1 / 0,
            0,
            "toExpPos",
            0,
            1 / 0,
          ];
        for (e = 0; e < i.length; e += 3)
          if (void 0 !== (n = t[(r = i[e])]))
            if (u(n) === n && n >= i[e + 1] && n <= i[e + 2]) this[r] = n;
            else throw Error(l + r + ": " + n);
        if (void 0 !== (n = t[(r = "LN10")]))
          if (n == Math.LN10) this[r] = new this(n);
          else throw Error(l + r + ": " + n);
        return this;
      }
      if (
        (((i = (function t(e) {
          var r, n, i;
          function o(t) {
            if (!(this instanceof o)) return new o(t);
            if (((this.constructor = o), t instanceof o)) {
              ((this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t));
              return;
            }
            if ("number" == typeof t) {
              if (0 * t != 0) throw Error(l + t);
              if (t > 0) this.s = 1;
              else if (t < 0) ((t = -t), (this.s = -1));
              else {
                ((this.s = 0), (this.e = 0), (this.d = [0]));
                return;
              }
              if (t === ~~t && t < 1e7) {
                ((this.e = 0), (this.d = [t]));
                return;
              }
              return j(this, t.toString());
            }
            if ("string" != typeof t) throw Error(l + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              f.test(t))
            )
              j(this, t);
            else throw Error(l + t);
          }
          if (
            ((o.prototype = d),
            (o.ROUND_UP = 0),
            (o.ROUND_DOWN = 1),
            (o.ROUND_CEIL = 2),
            (o.ROUND_FLOOR = 3),
            (o.ROUND_HALF_UP = 4),
            (o.ROUND_HALF_DOWN = 5),
            (o.ROUND_HALF_EVEN = 6),
            (o.ROUND_HALF_CEIL = 7),
            (o.ROUND_HALF_FLOOR = 8),
            (o.clone = t),
            (o.config = o.set = E),
            void 0 === e && (e = {}),
            e)
          )
            for (
              r = 0,
                i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < i.length;
            )
              e.hasOwnProperty((n = i[r++])) || (e[n] = this[n]);
          return (o.config(e), o);
        })(i)).default = i.Decimal =
          i),
        (n = new i(1)),
        "function" == typeof define && define.amd)
      ) {
        let e;
        (t.r, void 0 !== (e = i) && t.v(e));
      } else
        e.exports
          ? (e.exports = i)
          : (r ||
              (r =
                "u" > typeof self && self && self.self == self
                  ? self
                  : Function("return this")()),
            (r.Decimal = i));
    })(t.e);
  },
  74548,
  (t, e, r) => {
    var n = t.r(24251);
    e.exports = function (t, e, r) {
      "__proto__" == e && n
        ? n(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    };
  },
  60793,
  (t, e, r) => {
    var n = t.r(74548),
      i = t.r(63799),
      o = t.r(66305);
    e.exports = function (t, e) {
      var r = {};
      return (
        (e = o(e, 3)),
        i(t, function (t, i, o) {
          n(r, i, e(t, i, o));
        }),
        r
      );
    };
  },
  38199,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
        if (!e(t[r], r, t)) return !1;
      return !0;
    };
  },
  8088,
  (t, e, r) => {
    var n = t.r(53587);
    e.exports = function (t, e) {
      var r = !0;
      return (
        n(t, function (t, n, i) {
          return (r = !!e(t, n, i));
        }),
        r
      );
    };
  },
  26063,
  (t, e, r) => {
    var n = t.r(38199),
      i = t.r(8088),
      o = t.r(66305),
      a = t.r(45350),
      l = t.r(70237);
    e.exports = function (t, e, r) {
      var c = a(t) ? n : i;
      return (r && l(t, e, r) && (e = void 0), c(t, o(e, 3)));
    };
  },
  4879,
  (t, e, r) => {
    e.exports = function (t) {
      var e = null == t ? 0 : t.length;
      return e ? t[e - 1] : void 0;
    };
  },
  62413,
  (t, e, r) => {
    e.exports = t.r(25717)(Object.getPrototypeOf, Object);
  },
  1320,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(62413),
      o = t.r(77289),
      a = Object.prototype,
      l = Function.prototype.toString,
      c = a.hasOwnProperty,
      u = l.call(Object);
    e.exports = function (t) {
      if (!o(t) || "[object Object]" != n(t)) return !1;
      var e = i(t);
      if (null === e) return !0;
      var r = c.call(e, "constructor") && e.constructor;
      return "function" == typeof r && r instanceof r && l.call(r) == u;
    };
  },
  20164,
  (t, e, r) => {
    var n = t.r(77684),
      i = t.r(77289);
    e.exports = function (t) {
      return !0 === t || !1 === t || (i(t) && "[object Boolean]" == n(t));
    };
  },
  49379,
  (t, e, r) => {
    var n = t.r(53587);
    e.exports = function (t, e) {
      var r;
      return (
        n(t, function (t, n, i) {
          return !(r = e(t, n, i));
        }),
        !!r
      );
    };
  },
  88099,
  (t, e, r) => {
    var n = t.r(51477),
      i = t.r(66305),
      o = t.r(49379),
      a = t.r(45350),
      l = t.r(70237);
    e.exports = function (t, e, r) {
      var c = a(t) ? n : o;
      return (r && l(t, e, r) && (e = void 0), c(t, i(e, 3)));
    };
  },
  95200,
  (t, e, r) => {
    var n = t.r(66305),
      i = t.r(51095),
      o = t.r(33679);
    e.exports = function (t) {
      return function (e, r, a) {
        var l = Object(e);
        if (!i(e)) {
          var c = n(r, 3);
          ((e = o(e)),
            (r = function (t) {
              return c(l[t], t, l);
            }));
        }
        var u = t(e, r, a);
        return u > -1 ? l[c ? e[u] : u] : void 0;
      };
    };
  },
  4653,
  (t, e, r) => {
    var n = t.r(82560);
    e.exports = function (t) {
      var e = n(t),
        r = e % 1;
      return e == e ? (r ? e - r : e) : 0;
    };
  },
  26965,
  (t, e, r) => {
    var n = t.r(56445),
      i = t.r(66305),
      o = t.r(4653),
      a = Math.max;
    e.exports = function (t, e, r) {
      var l = null == t ? 0 : t.length;
      if (!l) return -1;
      var c = null == r ? 0 : o(r);
      return (c < 0 && (c = a(l + c, 0)), n(t, i(e, 3), c));
    };
  },
  60191,
  (t, e, r) => {
    e.exports = t.r(95200)(t.r(26965));
  },
  78492,
  (t, e, r) => {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      i = "~";
    function o() {}
    function a(t, e, r) {
      ((this.fn = t), (this.context = e), (this.once = r || !1));
    }
    function l(t, e, r, n, o) {
      if ("function" != typeof r)
        throw TypeError("The listener must be a function");
      var l = new a(r, n || t, o),
        c = i ? i + e : e;
      return (
        t._events[c]
          ? t._events[c].fn
            ? (t._events[c] = [t._events[c], l])
            : t._events[c].push(l)
          : ((t._events[c] = l), t._eventsCount++),
        t
      );
    }
    function c(t, e) {
      0 == --t._eventsCount ? (t._events = new o()) : delete t._events[e];
    }
    function u() {
      ((this._events = new o()), (this._eventsCount = 0));
    }
    (Object.create &&
      ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
      (u.prototype.eventNames = function () {
        var t,
          e,
          r = [];
        if (0 === this._eventsCount) return r;
        for (e in (t = this._events))
          n.call(t, e) && r.push(i ? e.slice(1) : e);
        return Object.getOwnPropertySymbols
          ? r.concat(Object.getOwnPropertySymbols(t))
          : r;
      }),
      (u.prototype.listeners = function (t) {
        var e = i ? i + t : t,
          r = this._events[e];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, o = r.length, a = Array(o); n < o; n++) a[n] = r[n].fn;
        return a;
      }),
      (u.prototype.listenerCount = function (t) {
        var e = i ? i + t : t,
          r = this._events[e];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (u.prototype.emit = function (t, e, r, n, o, a) {
        var l = i ? i + t : t;
        if (!this._events[l]) return !1;
        var c,
          u,
          s = this._events[l],
          f = arguments.length;
        if (s.fn) {
          switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
            case 1:
              return (s.fn.call(s.context), !0);
            case 2:
              return (s.fn.call(s.context, e), !0);
            case 3:
              return (s.fn.call(s.context, e, r), !0);
            case 4:
              return (s.fn.call(s.context, e, r, n), !0);
            case 5:
              return (s.fn.call(s.context, e, r, n, o), !0);
            case 6:
              return (s.fn.call(s.context, e, r, n, o, a), !0);
          }
          for (u = 1, c = Array(f - 1); u < f; u++) c[u - 1] = arguments[u];
          s.fn.apply(s.context, c);
        } else {
          var p,
            d = s.length;
          for (u = 0; u < d; u++)
            switch (
              (s[u].once && this.removeListener(t, s[u].fn, void 0, !0), f)
            ) {
              case 1:
                s[u].fn.call(s[u].context);
                break;
              case 2:
                s[u].fn.call(s[u].context, e);
                break;
              case 3:
                s[u].fn.call(s[u].context, e, r);
                break;
              case 4:
                s[u].fn.call(s[u].context, e, r, n);
                break;
              default:
                if (!c)
                  for (p = 1, c = Array(f - 1); p < f; p++)
                    c[p - 1] = arguments[p];
                s[u].fn.apply(s[u].context, c);
            }
        }
        return !0;
      }),
      (u.prototype.on = function (t, e, r) {
        return l(this, t, e, r, !1);
      }),
      (u.prototype.once = function (t, e, r) {
        return l(this, t, e, r, !0);
      }),
      (u.prototype.removeListener = function (t, e, r, n) {
        var o = i ? i + t : t;
        if (!this._events[o]) return this;
        if (!e) return (c(this, o), this);
        var a = this._events[o];
        if (a.fn)
          a.fn !== e || (n && !a.once) || (r && a.context !== r) || c(this, o);
        else {
          for (var l = 0, u = [], s = a.length; l < s; l++)
            (a[l].fn !== e || (n && !a[l].once) || (r && a[l].context !== r)) &&
              u.push(a[l]);
          u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : c(this, o);
        }
        return this;
      }),
      (u.prototype.removeAllListeners = function (t) {
        var e;
        return (
          t
            ? ((e = i ? i + t : t), this._events[e] && c(this, e))
            : ((this._events = new o()), (this._eventsCount = 0)),
          this
        );
      }),
      (u.prototype.off = u.prototype.removeListener),
      (u.prototype.addListener = u.prototype.on),
      (u.prefixed = i),
      (u.EventEmitter = u),
      (e.exports = u));
  },
  19530,
  (t, e, r) => {
    var n = t.r(41015),
      i = t.r(80957),
      o = t.r(66305);
    e.exports = function (t, e) {
      return t && t.length ? n(t, o(e, 2), i) : void 0;
    };
  },
  49673,
  (t, e, r) => {
    var n = t.r(41015),
      i = t.r(66305),
      o = t.r(98128);
    e.exports = function (t, e) {
      return t && t.length ? n(t, i(e, 2), o) : void 0;
    };
  },
  78928,
  (t) => {
    "use strict";
    var e,
      r,
      n,
      i,
      o,
      a,
      l,
      c,
      u,
      s = t.i(43476),
      f = t.i(71645);
    let p = {
      blue: {
        bg: "bg-blue-50",
        icon: "text-blue-500",
        ring: "group-hover:ring-blue-200",
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-500",
        ring: "group-hover:ring-purple-200",
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-500",
        ring: "group-hover:ring-green-200",
      },
      amber: {
        bg: "bg-amber-50",
        icon: "text-amber-500",
        ring: "group-hover:ring-amber-200",
      },
      red: {
        bg: "bg-red-50",
        icon: "text-red-500",
        ring: "group-hover:ring-red-200",
      },
    };
    function d({
      title: t,
      value: e,
      subtitle: r,
      icon: n,
      trend: i,
      color: o = "blue",
    }) {
      let a = p[o];
      return (0, s.jsxs)("div", {
        className: `group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-2 ${a.ring}`,
        children: [
          (0, s.jsx)("div", {
            className: `absolute -right-4 -top-4 h-24 w-24 rounded-full ${a.bg} opacity-50`,
          }),
          (0, s.jsxs)("div", {
            className: "relative flex items-start justify-between",
            children: [
              (0, s.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-sm font-medium text-slate-500",
                    children: t,
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-2 flex items-baseline gap-2",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-3xl font-bold text-slate-900",
                        children: e,
                      }),
                      r &&
                        (0, s.jsx)("span", {
                          className: "text-sm text-slate-400",
                          children: r,
                        }),
                    ],
                  }),
                  i &&
                    (0, s.jsxs)("div", {
                      className: "mt-3 flex items-center gap-1",
                      children: [
                        (0, s.jsxs)("span", {
                          className: `inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${i.isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                          children: [
                            (0, s.jsx)("svg", {
                              className: `h-3 w-3 ${i.isPositive ? "" : "rotate-180"}`,
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              strokeWidth: 2,
                              children: (0, s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M5 10l7-7m0 0l7 7m-7-7v18",
                              }),
                            }),
                            Math.abs(i.value),
                            "%",
                          ],
                        }),
                        (0, s.jsx)("span", {
                          className: "text-xs text-slate-400",
                          children: "vs last period",
                        }),
                      ],
                    }),
                ],
              }),
              (0, s.jsx)("div", {
                className: `rounded-lg ${a.bg} p-3`,
                children: (0, s.jsx)("div", {
                  className: `${a.icon}`,
                  children: n,
                }),
              }),
            ],
          }),
        ],
      });
    }
    let h = () =>
        (0, s.jsx)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
          }),
        }),
      y = () =>
        (0, s.jsxs)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: [
            (0, s.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
            }),
            (0, s.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
            }),
          ],
        }),
      v = () =>
        (0, s.jsx)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
          }),
        }),
      m = () =>
        (0, s.jsx)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          }),
        }),
      b = () =>
        (0, s.jsx)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
          }),
        }),
      g = () =>
        (0, s.jsx)("svg", {
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 14l-7 7m0 0l-7-7m7 7V3",
          }),
        });
    t.i(47167);
    var x = t.i(29873),
      w = t.i(71223),
      O = t.i(44950),
      j = t.i(82820),
      S = t.i(31195),
      k = t.i(24283);
    let P = function () {
      for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)
        (t = arguments[r]) &&
          (e = (function t(e) {
            var r,
              n,
              i = "";
            if ("string" == typeof e || "number" == typeof e) i += e;
            else if ("object" == typeof e)
              if (Array.isArray(e)) {
                var o = e.length;
                for (r = 0; r < o; r++)
                  e[r] && (n = t(e[r])) && (i && (i += " "), (i += n));
              } else for (n in e) e[n] && (i && (i += " "), (i += n));
            return i;
          })(t)) &&
          (n && (n += " "), (n += e));
      return n;
    };
    function A(t, e) {
      if (!t) throw Error("Invariant failed");
    }
    var E = t.i(85845),
      _ = t.i(12447),
      M = t.i(79367),
      T = t.i(78948),
      N = t.i(94241),
      C = function (t) {
        return 0 === t ? 0 : t > 0 ? 1 : -1;
      },
      D = function (t) {
        return (0, E.default)(t) && t.indexOf("%") === t.length - 1;
      },
      I = function (t) {
        return (0, N.default)(t) && !(0, T.default)(t);
      },
      L = function (t) {
        return I(t) || (0, E.default)(t);
      },
      B = 0,
      R = function (t) {
        var e = ++B;
        return "".concat(t || "").concat(e);
      },
      z = function (t, e) {
        var r,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!I(t) && !(0, E.default)(t)) return n;
        if (D(t)) {
          var o = t.indexOf("%");
          r = (e * parseFloat(t.slice(0, o))) / 100;
        } else r = +t;
        return ((0, T.default)(r) && (r = n), i && r > e && (r = e), r);
      },
      F = function (t) {
        if (!t) return null;
        var e = Object.keys(t);
        return e && e.length ? t[e[0]] : null;
      },
      U = function (t) {
        if (!Array.isArray(t)) return !1;
        for (var e = t.length, r = {}, n = 0; n < e; n++)
          if (r[t[n]]) return !0;
          else r[t[n]] = !0;
        return !1;
      },
      $ = function (t, e) {
        return I(t) && I(e)
          ? function (r) {
              return t + r * (e - t);
            }
          : function () {
              return e;
            };
      };
    function W(t, e, r) {
      return t && t.length
        ? t.find(function (t) {
            return (
              t && ("function" == typeof e ? e(t) : (0, j.default)(t, e)) === r
            );
          })
        : null;
    }
    var V = function (t, e) {
      return I(t) && I(e)
        ? t - e
        : (0, E.default)(t) && (0, E.default)(e)
          ? t.localeCompare(e)
          : t instanceof Date && e instanceof Date
            ? t.getTime() - e.getTime()
            : String(t).localeCompare(String(e));
    };
    function q(t, e) {
      for (var r in t)
        if (
          {}.hasOwnProperty.call(t, r) &&
          (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
        )
          return !1;
      for (var n in e)
        if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
          return !1;
      return !0;
    }
    function H(t) {
      return (H =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var X = [
        "aria-activedescendant",
        "aria-atomic",
        "aria-autocomplete",
        "aria-busy",
        "aria-checked",
        "aria-colcount",
        "aria-colindex",
        "aria-colspan",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-disabled",
        "aria-errormessage",
        "aria-expanded",
        "aria-flowto",
        "aria-haspopup",
        "aria-hidden",
        "aria-invalid",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-level",
        "aria-live",
        "aria-modal",
        "aria-multiline",
        "aria-multiselectable",
        "aria-orientation",
        "aria-owns",
        "aria-placeholder",
        "aria-posinset",
        "aria-pressed",
        "aria-readonly",
        "aria-relevant",
        "aria-required",
        "aria-roledescription",
        "aria-rowcount",
        "aria-rowindex",
        "aria-rowspan",
        "aria-selected",
        "aria-setsize",
        "aria-sort",
        "aria-valuemax",
        "aria-valuemin",
        "aria-valuenow",
        "aria-valuetext",
        "className",
        "color",
        "height",
        "id",
        "lang",
        "max",
        "media",
        "method",
        "min",
        "name",
        "style",
        "target",
        "width",
        "role",
        "tabIndex",
        "accentHeight",
        "accumulate",
        "additive",
        "alignmentBaseline",
        "allowReorder",
        "alphabetic",
        "amplitude",
        "arabicForm",
        "ascent",
        "attributeName",
        "attributeType",
        "autoReverse",
        "azimuth",
        "baseFrequency",
        "baselineShift",
        "baseProfile",
        "bbox",
        "begin",
        "bias",
        "by",
        "calcMode",
        "capHeight",
        "clip",
        "clipPath",
        "clipPathUnits",
        "clipRule",
        "colorInterpolation",
        "colorInterpolationFilters",
        "colorProfile",
        "colorRendering",
        "contentScriptType",
        "contentStyleType",
        "cursor",
        "cx",
        "cy",
        "d",
        "decelerate",
        "descent",
        "diffuseConstant",
        "direction",
        "display",
        "divisor",
        "dominantBaseline",
        "dur",
        "dx",
        "dy",
        "edgeMode",
        "elevation",
        "enableBackground",
        "end",
        "exponent",
        "externalResourcesRequired",
        "fill",
        "fillOpacity",
        "fillRule",
        "filter",
        "filterRes",
        "filterUnits",
        "floodColor",
        "floodOpacity",
        "focusable",
        "fontFamily",
        "fontSize",
        "fontSizeAdjust",
        "fontStretch",
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "format",
        "from",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyphName",
        "glyphOrientationHorizontal",
        "glyphOrientationVertical",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "hanging",
        "horizAdvX",
        "horizOriginX",
        "href",
        "ideographic",
        "imageRendering",
        "in2",
        "in",
        "intercept",
        "k1",
        "k2",
        "k3",
        "k4",
        "k",
        "kernelMatrix",
        "kernelUnitLength",
        "kerning",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "letterSpacing",
        "lightingColor",
        "limitingConeAngle",
        "local",
        "markerEnd",
        "markerHeight",
        "markerMid",
        "markerStart",
        "markerUnits",
        "markerWidth",
        "mask",
        "maskContentUnits",
        "maskUnits",
        "mathematical",
        "mode",
        "numOctaves",
        "offset",
        "opacity",
        "operator",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "overlinePosition",
        "overlineThickness",
        "paintOrder",
        "panose1",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointerEvents",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "r",
        "radius",
        "refX",
        "refY",
        "renderingIntent",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "restart",
        "result",
        "rotate",
        "rx",
        "ry",
        "seed",
        "shapeRendering",
        "slope",
        "spacing",
        "specularConstant",
        "specularExponent",
        "speed",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stemh",
        "stemv",
        "stitchTiles",
        "stopColor",
        "stopOpacity",
        "strikethroughPosition",
        "strikethroughThickness",
        "string",
        "stroke",
        "strokeDasharray",
        "strokeDashoffset",
        "strokeLinecap",
        "strokeLinejoin",
        "strokeMiterlimit",
        "strokeOpacity",
        "strokeWidth",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textAnchor",
        "textDecoration",
        "textLength",
        "textRendering",
        "to",
        "transform",
        "u1",
        "u2",
        "underlinePosition",
        "underlineThickness",
        "unicode",
        "unicodeBidi",
        "unicodeRange",
        "unitsPerEm",
        "vAlphabetic",
        "values",
        "vectorEffect",
        "version",
        "vertAdvY",
        "vertOriginX",
        "vertOriginY",
        "vHanging",
        "vIdeographic",
        "viewTarget",
        "visibility",
        "vMathematical",
        "widths",
        "wordSpacing",
        "writingMode",
        "x1",
        "x2",
        "x",
        "xChannelSelector",
        "xHeight",
        "xlinkActuate",
        "xlinkArcrole",
        "xlinkHref",
        "xlinkRole",
        "xlinkShow",
        "xlinkTitle",
        "xlinkType",
        "xmlBase",
        "xmlLang",
        "xmlns",
        "xmlnsXlink",
        "xmlSpace",
        "y1",
        "y2",
        "y",
        "yChannelSelector",
        "z",
        "zoomAndPan",
        "ref",
        "key",
        "angle",
      ],
      K = ["points", "pathLength"],
      G = { svg: ["viewBox", "children"], polygon: K, polyline: K },
      Y = [
        "dangerouslySetInnerHTML",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onPaste",
        "onPasteCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onFocus",
        "onFocusCapture",
        "onBlur",
        "onBlurCapture",
        "onChange",
        "onChangeCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onInput",
        "onInputCapture",
        "onReset",
        "onResetCapture",
        "onSubmit",
        "onSubmitCapture",
        "onInvalid",
        "onInvalidCapture",
        "onLoad",
        "onLoadCapture",
        "onError",
        "onErrorCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onAbort",
        "onAbortCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onStalled",
        "onStalledCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onClick",
        "onClickCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onSelect",
        "onSelectCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onScroll",
        "onScrollCapture",
        "onWheel",
        "onWheelCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
      ],
      Z = function (t, e) {
        if (!t || "function" == typeof t || "boolean" == typeof t) return null;
        var r = t;
        if (((0, f.isValidElement)(t) && (r = t.props), !(0, _.default)(r)))
          return null;
        var n = {};
        return (
          Object.keys(r).forEach(function (t) {
            Y.includes(t) &&
              (n[t] =
                e ||
                function (e) {
                  return r[t](r, e);
                });
          }),
          n
        );
      },
      J = function (t, e, r) {
        if (!(0, _.default)(t) || "object" !== H(t)) return null;
        var n = null;
        return (
          Object.keys(t).forEach(function (i) {
            var o = t[i];
            Y.includes(i) &&
              "function" == typeof o &&
              (n || (n = {}),
              (n[i] = function (t) {
                return (o(e, r, t), null);
              }));
          }),
          n
        );
      },
      Q = ["children"],
      tt = ["children"];
    function te(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    function tr(t) {
      return (tr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var tn = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
        contextmenu: "onContextMenu",
        dblclick: "onDoubleClick",
      },
      ti = function (t) {
        return "string" == typeof t
          ? t
          : t
            ? t.displayName || t.name || "Component"
            : "";
      },
      to = null,
      ta = null,
      tl = function t(e) {
        if (e === to && Array.isArray(ta)) return ta;
        var r = [];
        return (
          f.Children.forEach(e, function (e) {
            (0, x.default)(e) ||
              ((0, M.isFragment)(e)
                ? (r = r.concat(t(e.props.children)))
                : r.push(e));
          }),
          (ta = r),
          (to = e),
          r
        );
      };
    function tc(t, e) {
      var r = [],
        n = [];
      return (
        (n = Array.isArray(e)
          ? e.map(function (t) {
              return ti(t);
            })
          : [ti(e)]),
        tl(t).forEach(function (t) {
          var e =
            (0, j.default)(t, "type.displayName") ||
            (0, j.default)(t, "type.name");
          -1 !== n.indexOf(e) && r.push(t);
        }),
        r
      );
    }
    function tu(t, e) {
      var r = tc(t, e);
      return r && r[0];
    }
    var ts = function (t) {
        if (!t || !t.props) return !1;
        var e = t.props,
          r = e.width,
          n = e.height;
        return !!I(r) && !(r <= 0) && !!I(n) && !(n <= 0);
      },
      tf = [
        "a",
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animate",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "circle",
        "clipPath",
        "color-profile",
        "cursor",
        "defs",
        "desc",
        "ellipse",
        "feBlend",
        "feColormatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "filter",
        "font",
        "font-face",
        "font-face-format",
        "font-face-name",
        "font-face-url",
        "foreignObject",
        "g",
        "glyph",
        "glyphRef",
        "hkern",
        "image",
        "line",
        "lineGradient",
        "marker",
        "mask",
        "metadata",
        "missing-glyph",
        "mpath",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "script",
        "set",
        "stop",
        "style",
        "svg",
        "switch",
        "symbol",
        "text",
        "textPath",
        "title",
        "tref",
        "tspan",
        "use",
        "view",
        "vkern",
      ],
      tp = function (t, e, r, n) {
        var i,
          o = null != (i = null == G ? void 0 : G[n]) ? i : [];
        return (
          e.startsWith("data-") ||
          (!(0, w.default)(t) && ((n && o.includes(e)) || X.includes(e))) ||
          (r && Y.includes(e))
        );
      },
      td = function (t, e, r) {
        if (!t || "function" == typeof t || "boolean" == typeof t) return null;
        var n = t;
        if (((0, f.isValidElement)(t) && (n = t.props), !(0, _.default)(n)))
          return null;
        var i = {};
        return (
          Object.keys(n).forEach(function (t) {
            var o;
            tp(null == (o = n) ? void 0 : o[t], t, e, r) && (i[t] = n[t]);
          }),
          i
        );
      },
      th = function t(e, r) {
        if (e === r) return !0;
        var n = f.Children.count(e);
        if (n !== f.Children.count(r)) return !1;
        if (0 === n) return !0;
        if (1 === n)
          return ty(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
        for (var i = 0; i < n; i++) {
          var o = e[i],
            a = r[i];
          if (Array.isArray(o) || Array.isArray(a)) {
            if (!t(o, a)) return !1;
          } else if (!ty(o, a)) return !1;
        }
        return !0;
      },
      ty = function (t, e) {
        if ((0, x.default)(t) && (0, x.default)(e)) return !0;
        if (!(0, x.default)(t) && !(0, x.default)(e)) {
          var r = t.props || {},
            n = r.children,
            i = te(r, Q),
            o = e.props || {},
            a = o.children,
            l = te(o, tt);
          if (n && a) return q(i, l) && th(n, a);
          if (!n && !a) return q(i, l);
        }
        return !1;
      },
      tv = function (t, e) {
        var r = [],
          n = {};
        return (
          tl(t).forEach(function (t, i) {
            if (
              t &&
              t.type &&
              (0, E.default)(t.type) &&
              tf.indexOf(t.type) >= 0
            )
              r.push(t);
            else if (t) {
              var o = ti(t.type),
                a = e[o] || {},
                l = a.handler,
                c = a.once;
              if (l && (!c || !n[o])) {
                var u = l(t, o, i);
                (r.push(u), (n[o] = !0));
              }
            }
          }),
          r
        );
      },
      tm = function (t) {
        var e = t && t.type;
        return e && tn[e] ? tn[e] : null;
      },
      tb = [
        "children",
        "width",
        "height",
        "viewBox",
        "className",
        "style",
        "title",
        "desc",
      ];
    function tg() {
      return (tg = Object.assign.bind()).apply(this, arguments);
    }
    function tx(t) {
      var e = t.children,
        r = t.width,
        n = t.height,
        i = t.viewBox,
        o = t.className,
        a = t.style,
        l = t.title,
        c = t.desc,
        u = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            i = (function (t, e) {
              if (null == t) return {};
              var r = {};
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (e.indexOf(n) >= 0) continue;
                  r[n] = t[n];
                }
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                !(e.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
          }
          return i;
        })(t, tb),
        s = i || { width: r, height: n, x: 0, y: 0 },
        p = P("recharts-surface", o);
      return f.default.createElement(
        "svg",
        tg({}, td(u, !0, "svg"), {
          className: p,
          width: r,
          height: n,
          style: a,
          viewBox: ""
            .concat(s.x, " ")
            .concat(s.y, " ")
            .concat(s.width, " ")
            .concat(s.height),
        }),
        f.default.createElement("title", null, l),
        f.default.createElement("desc", null, c),
        e,
      );
    }
    var tw = ["children", "className"];
    function tO() {
      return (tO = Object.assign.bind()).apply(this, arguments);
    }
    var tj = f.default.forwardRef(function (t, e) {
      var r = t.children,
        n = t.className,
        i = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            i = (function (t, e) {
              if (null == t) return {};
              var r = {};
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (e.indexOf(n) >= 0) continue;
                  r[n] = t[n];
                }
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                !(e.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
          }
          return i;
        })(t, tw),
        o = P("recharts-layer", n);
      return f.default.createElement(
        "g",
        tO({ className: o }, td(i, !0), { ref: e }),
        r,
      );
    });
    function tS(t) {
      return (tS =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function tk() {
      return (tk = Object.assign.bind()).apply(this, arguments);
    }
    function tP(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function tA(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function tE(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? tA(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != tS(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != tS(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == tS(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tA(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function t_(t) {
      return Array.isArray(t) && L(t[0]) && L(t[1]) ? t.join(" ~ ") : t;
    }
    var tM = function (t) {
      var e = t.separator,
        r = void 0 === e ? " : " : e,
        n = t.contentStyle,
        i = t.itemStyle,
        o = void 0 === i ? {} : i,
        a = t.labelStyle,
        l = t.payload,
        c = t.formatter,
        u = t.itemSorter,
        s = t.wrapperClassName,
        p = t.labelClassName,
        d = t.label,
        h = t.labelFormatter,
        y = t.accessibilityLayer,
        v = tE(
          {
            margin: 0,
            padding: 10,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            whiteSpace: "nowrap",
          },
          void 0 === n ? {} : n,
        ),
        m = tE({ margin: 0 }, void 0 === a ? {} : a),
        b = !(0, x.default)(d),
        g = b ? d : "",
        w = P("recharts-default-tooltip", s),
        O = P("recharts-tooltip-label", p);
      return (
        b && h && null != l && (g = h(d, l)),
        f.default.createElement(
          "div",
          tk(
            { className: w, style: v },
            void 0 !== y && y
              ? { role: "status", "aria-live": "assertive" }
              : {},
          ),
          f.default.createElement(
            "p",
            { className: O, style: m },
            f.default.isValidElement(g) ? g : "".concat(g),
          ),
          (function () {
            if (l && l.length) {
              var t = (u ? (0, S.default)(l, u) : l).map(function (t, e) {
                if ("none" === t.type) return null;
                var n = tE(
                    {
                      display: "block",
                      paddingTop: 4,
                      paddingBottom: 4,
                      color: t.color || "#000",
                    },
                    o,
                  ),
                  i = t.formatter || c || t_,
                  a = t.value,
                  u = t.name,
                  s = a,
                  p = u;
                if (i && null != s && null != p) {
                  var d = i(a, u, t, e, l);
                  if (Array.isArray(d)) {
                    var h =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(d) ||
                      (function (t) {
                        var e =
                          null == t
                            ? null
                            : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                              t["@@iterator"];
                        if (null != e) {
                          var r,
                            n,
                            i,
                            o,
                            a = [],
                            l = !0,
                            c = !1;
                          try {
                            ((i = (e = e.call(t)).next), !1);
                            for (
                              ;
                              !(l = (r = i.call(e)).done) &&
                              (a.push(r.value), 2 !== a.length);
                              l = !0
                            );
                          } catch (t) {
                            ((c = !0), (n = t));
                          } finally {
                            try {
                              if (
                                !l &&
                                null != e.return &&
                                ((o = e.return()), Object(o) !== o)
                              )
                                return;
                            } finally {
                              if (c) throw n;
                            }
                          }
                          return a;
                        }
                      })(d) ||
                      (function (t) {
                        if (t) {
                          if ("string" == typeof t) return tP(t, 2);
                          var e = Object.prototype.toString
                            .call(t)
                            .slice(8, -1);
                          if (
                            ("Object" === e &&
                              t.constructor &&
                              (e = t.constructor.name),
                            "Map" === e || "Set" === e)
                          )
                            return Array.from(t);
                          if (
                            "Arguments" === e ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                          )
                            return tP(t, 2);
                        }
                      })(d) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })();
                    ((s = h[0]), (p = h[1]));
                  } else s = d;
                }
                return f.default.createElement(
                  "li",
                  {
                    className: "recharts-tooltip-item",
                    key: "tooltip-item-".concat(e),
                    style: n,
                  },
                  L(p)
                    ? f.default.createElement(
                        "span",
                        { className: "recharts-tooltip-item-name" },
                        p,
                      )
                    : null,
                  L(p)
                    ? f.default.createElement(
                        "span",
                        { className: "recharts-tooltip-item-separator" },
                        r,
                      )
                    : null,
                  f.default.createElement(
                    "span",
                    { className: "recharts-tooltip-item-value" },
                    s,
                  ),
                  f.default.createElement(
                    "span",
                    { className: "recharts-tooltip-item-unit" },
                    t.unit || "",
                  ),
                );
              });
              return f.default.createElement(
                "ul",
                {
                  className: "recharts-tooltip-item-list",
                  style: { padding: 0, margin: 0 },
                },
                t,
              );
            }
            return null;
          })(),
        )
      );
    };
    function tT(t) {
      return (tT =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function tN(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ("object" != tT(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != tT(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(e, "string")),
        (e = "symbol" == tT(n) ? n : n + "") in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var tC = "recharts-tooltip-wrapper",
      tD = { visibility: "hidden" };
    function tI(t) {
      var e = t.allowEscapeViewBox,
        r = t.coordinate,
        n = t.key,
        i = t.offsetTopLeft,
        o = t.position,
        a = t.reverseDirection,
        l = t.tooltipDimension,
        c = t.viewBox,
        u = t.viewBoxDimension;
      if (o && I(o[n])) return o[n];
      var s = r[n] - l - i,
        f = r[n] + i;
      return e[n]
        ? a[n]
          ? s
          : f
        : a[n]
          ? s < c[n]
            ? Math.max(f, c[n])
            : Math.max(s, c[n])
          : f + l > c[n] + u
            ? Math.max(s, c[n])
            : Math.max(f, c[n]);
    }
    function tL(t) {
      return (tL =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function tB(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function tR(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? tB(Object(r), !0).forEach(function (e) {
              t$(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tB(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function tz() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (tz = function () {
        return !!t;
      })();
    }
    function tF(t) {
      return (tF = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function tU(t, e) {
      return (tU = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function t$(t, e, r) {
      return (
        (e = tW(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function tW(t) {
      var e = (function (t, e) {
        if ("object" != tL(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != tL(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == tL(e) ? e : e + "";
    }
    var tV = (function (t) {
        var e;
        function r() {
          var t, e, n;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          for (var i = arguments.length, o = Array(i), a = 0; a < i; a++)
            o[a] = arguments[a];
          return (
            (e = r),
            (n = [].concat(o)),
            (e = tF(e)),
            t$(
              (t = (function (t, e) {
                if (e && ("object" === tL(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return r;
              })(
                this,
                tz()
                  ? Reflect.construct(e, n || [], tF(this).constructor)
                  : e.apply(this, n),
              )),
              "state",
              {
                dismissed: !1,
                dismissedAtCoordinate: { x: 0, y: 0 },
                lastBoundingBox: { width: -1, height: -1 },
              },
            ),
            t$(t, "handleKeyDown", function (e) {
              if ("Escape" === e.key) {
                var r, n, i, o;
                t.setState({
                  dismissed: !0,
                  dismissedAtCoordinate: {
                    x:
                      null !=
                      (r = null == (n = t.props.coordinate) ? void 0 : n.x)
                        ? r
                        : 0,
                    y:
                      null !=
                      (i = null == (o = t.props.coordinate) ? void 0 : o.y)
                        ? i
                        : 0,
                  },
                });
              }
            }),
            t
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && tU(r, t),
          (e = [
            {
              key: "updateBBox",
              value: function () {
                if (
                  this.wrapperNode &&
                  this.wrapperNode.getBoundingClientRect
                ) {
                  var t = this.wrapperNode.getBoundingClientRect();
                  (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 ||
                    Math.abs(t.height - this.state.lastBoundingBox.height) >
                      1) &&
                    this.setState({
                      lastBoundingBox: { width: t.width, height: t.height },
                    });
                } else
                  (-1 !== this.state.lastBoundingBox.width ||
                    -1 !== this.state.lastBoundingBox.height) &&
                    this.setState({
                      lastBoundingBox: { width: -1, height: -1 },
                    });
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                (document.addEventListener("keydown", this.handleKeyDown),
                  this.updateBBox());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                document.removeEventListener("keydown", this.handleKeyDown);
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                var t, e;
                (this.props.active && this.updateBBox(),
                  this.state.dismissed &&
                    ((null == (t = this.props.coordinate) ? void 0 : t.x) !==
                      this.state.dismissedAtCoordinate.x ||
                      (null == (e = this.props.coordinate) ? void 0 : e.y) !==
                        this.state.dismissedAtCoordinate.y) &&
                    (this.state.dismissed = !1));
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e,
                  r,
                  n,
                  i,
                  o,
                  a,
                  l,
                  c,
                  u,
                  s,
                  p,
                  d,
                  h,
                  y,
                  v,
                  m,
                  b,
                  g,
                  x = this,
                  w = this.props,
                  O = w.active,
                  j = w.allowEscapeViewBox,
                  S = w.animationDuration,
                  k = w.animationEasing,
                  A = w.children,
                  E = w.coordinate,
                  _ = w.hasPayload,
                  M = w.isAnimationActive,
                  T = w.offset,
                  N = w.position,
                  C = w.reverseDirection,
                  D = w.useTranslate3d,
                  L = w.viewBox,
                  B = w.wrapperStyle,
                  R =
                    ((p = (t = {
                      allowEscapeViewBox: j,
                      coordinate: E,
                      offsetTopLeft: T,
                      position: N,
                      reverseDirection: C,
                      tooltipBox: this.state.lastBoundingBox,
                      useTranslate3d: D,
                      viewBox: L,
                    }).allowEscapeViewBox),
                    (d = t.coordinate),
                    (h = t.offsetTopLeft),
                    (y = t.position),
                    (v = t.reverseDirection),
                    (m = t.tooltipBox),
                    (b = t.useTranslate3d),
                    (g = t.viewBox),
                    m.height > 0 && m.width > 0 && d
                      ? ((r = (e = {
                          translateX: (u = tI({
                            allowEscapeViewBox: p,
                            coordinate: d,
                            key: "x",
                            offsetTopLeft: h,
                            position: y,
                            reverseDirection: v,
                            tooltipDimension: m.width,
                            viewBox: g,
                            viewBoxDimension: g.width,
                          })),
                          translateY: (s = tI({
                            allowEscapeViewBox: p,
                            coordinate: d,
                            key: "y",
                            offsetTopLeft: h,
                            position: y,
                            reverseDirection: v,
                            tooltipDimension: m.height,
                            viewBox: g,
                            viewBoxDimension: g.height,
                          })),
                          useTranslate3d: b,
                        }).translateX),
                        (n = e.translateY),
                        (c = {
                          transform: e.useTranslate3d
                            ? "translate3d("
                                .concat(r, "px, ")
                                .concat(n, "px, 0)")
                            : "translate(".concat(r, "px, ").concat(n, "px)"),
                        }))
                      : (c = tD),
                    {
                      cssProperties: c,
                      cssClasses:
                        ((o = (i = {
                          translateX: u,
                          translateY: s,
                          coordinate: d,
                        }).coordinate),
                        (a = i.translateX),
                        (l = i.translateY),
                        P(
                          tC,
                          tN(
                            tN(
                              tN(
                                tN(
                                  {},
                                  "".concat(tC, "-right"),
                                  I(a) && o && I(o.x) && a >= o.x,
                                ),
                                "".concat(tC, "-left"),
                                I(a) && o && I(o.x) && a < o.x,
                              ),
                              "".concat(tC, "-bottom"),
                              I(l) && o && I(o.y) && l >= o.y,
                            ),
                            "".concat(tC, "-top"),
                            I(l) && o && I(o.y) && l < o.y,
                          ),
                        )),
                    }),
                  z = R.cssClasses,
                  F = R.cssProperties,
                  U = tR(
                    tR(
                      {
                        transition:
                          M && O
                            ? "transform ".concat(S, "ms ").concat(k)
                            : void 0,
                      },
                      F,
                    ),
                    {},
                    {
                      pointerEvents: "none",
                      visibility:
                        !this.state.dismissed && O && _ ? "visible" : "hidden",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    B,
                  );
                return f.default.createElement(
                  "div",
                  {
                    tabIndex: -1,
                    className: z,
                    style: U,
                    ref: function (t) {
                      x.wrapperNode = t;
                    },
                  },
                  A,
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              ((n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, tW(n.key), n));
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(f.PureComponent),
      tq = {
        isSsr: !(
          "u" > typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return tq[t];
        },
        set: function (t, e) {
          if ("string" == typeof t) tq[t] = e;
          else {
            var r = Object.keys(t);
            r &&
              r.length &&
              r.forEach(function (e) {
                tq[e] = t[e];
              });
          }
        },
      },
      tH = t.i(74010);
    function tX(t, e, r) {
      return !0 === e
        ? (0, tH.default)(t, r)
        : (0, w.default)(e)
          ? (0, tH.default)(t, e)
          : t;
    }
    function tK(t) {
      return (tK =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function tG(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function tY(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? tG(Object(r), !0).forEach(function (e) {
              t0(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tG(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function tZ() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (tZ = function () {
        return !!t;
      })();
    }
    function tJ(t) {
      return (tJ = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function tQ(t, e) {
      return (tQ = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function t0(t, e, r) {
      return (
        (e = t1(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function t1(t) {
      var e = (function (t, e) {
        if ("object" != tK(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != tK(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == tK(e) ? e : e + "";
    }
    function t2(t) {
      return t.dataKey;
    }
    var t5 = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError("Cannot call a class as a function");
        return (
          (t = r),
          (e = arguments),
          (t = tJ(t)),
          (function (t, e) {
            if (e && ("object" === tK(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                "Derived constructors may only return object or undefined",
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return r;
          })(
            this,
            tZ()
              ? Reflect.construct(t, e || [], tJ(this).constructor)
              : t.apply(this, e),
          )
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t && tQ(r, t),
        (e = [
          {
            key: "render",
            value: function () {
              var t,
                e = this,
                r = this.props,
                n = r.active,
                i = r.allowEscapeViewBox,
                o = r.animationDuration,
                a = r.animationEasing,
                l = r.content,
                c = r.coordinate,
                u = r.filterNull,
                s = r.isAnimationActive,
                p = r.offset,
                d = r.payload,
                h = r.payloadUniqBy,
                y = r.position,
                v = r.reverseDirection,
                m = r.useTranslate3d,
                b = r.viewBox,
                g = r.wrapperStyle,
                x = null != d ? d : [];
              u &&
                x.length &&
                (x = tX(
                  d.filter(function (t) {
                    return (
                      null != t.value &&
                      (!0 !== t.hide || e.props.includeHidden)
                    );
                  }),
                  h,
                  t2,
                ));
              var w = x.length > 0;
              return f.default.createElement(
                tV,
                {
                  allowEscapeViewBox: i,
                  animationDuration: o,
                  animationEasing: a,
                  isAnimationActive: s,
                  active: n,
                  coordinate: c,
                  hasPayload: w,
                  offset: p,
                  position: y,
                  reverseDirection: v,
                  useTranslate3d: m,
                  viewBox: b,
                  wrapperStyle: g,
                },
                ((t = tY(tY({}, this.props), {}, { payload: x })),
                f.default.isValidElement(l)
                  ? f.default.cloneElement(l, t)
                  : "function" == typeof l
                    ? f.default.createElement(l, t)
                    : f.default.createElement(tM, t)),
              );
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, t1(n.key), n));
          }
        })(r.prototype, e),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
    })(f.PureComponent);
    (t0(t5, "displayName", "Tooltip"),
      t0(t5, "defaultProps", {
        accessibilityLayer: !1,
        allowEscapeViewBox: { x: !1, y: !1 },
        animationDuration: 400,
        animationEasing: "ease",
        contentStyle: {},
        coordinate: { x: 0, y: 0 },
        cursor: !0,
        cursorStyle: {},
        filterNull: !0,
        isAnimationActive: !tq.isSsr,
        itemStyle: {},
        labelStyle: {},
        offset: 10,
        reverseDirection: { x: !1, y: !1 },
        separator: " : ",
        trigger: "hover",
        useTranslate3d: !1,
        viewBox: { x: 0, y: 0, height: 0, width: 0 },
        wrapperStyle: {},
      }));
    var t3 = function (t, e) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          n[i - 2] = arguments[i];
      },
      t4 = t.i(32241);
    function t6(t) {
      return function () {
        return t;
      };
    }
    let t8 = Math.PI,
      t7 = 2 * t8,
      t9 = t7 - 1e-6;
    function et(t) {
      this._ += t[0];
      for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
    }
    class ee {
      constructor(t) {
        ((this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == t
              ? et
              : (function (t) {
                  let e = Math.floor(t);
                  if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                  if (e > 15) return et;
                  let r = 10 ** e;
                  return function (t) {
                    this._ += t[0];
                    for (let e = 1, n = t.length; e < n; ++e)
                      this._ += Math.round(arguments[e] * r) / r + t[e];
                  };
                })(t)));
      }
      moveTo(t, e) {
        this
          ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
      }
      closePath() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
      }
      lineTo(t, e) {
        this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
      }
      quadraticCurveTo(t, e, r, n) {
        this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
      }
      bezierCurveTo(t, e, r, n, i, o) {
        this
          ._append`C${+t},${+e},${+r},${+n},${(this._x1 = +i)},${(this._y1 = +o)}`;
      }
      arcTo(t, e, r, n, i) {
        if (((t *= 1), (e *= 1), (r *= 1), (n *= 1), (i *= 1) < 0))
          throw Error(`negative radius: ${i}`);
        let o = this._x1,
          a = this._y1,
          l = r - t,
          c = n - e,
          u = o - t,
          s = a - e,
          f = u * u + s * s;
        if (null === this._x1)
          this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
        else if (f > 1e-6)
          if (Math.abs(s * l - c * u) > 1e-6 && i) {
            let p = r - o,
              d = n - a,
              h = l * l + c * c,
              y = Math.sqrt(h),
              v = Math.sqrt(f),
              m =
                i *
                Math.tan(
                  (t8 - Math.acos((h + f - (p * p + d * d)) / (2 * y * v))) / 2,
                ),
              b = m / v,
              g = m / y;
            (Math.abs(b - 1) > 1e-6 && this._append`L${t + b * u},${e + b * s}`,
              this
                ._append`A${i},${i},0,0,${+(s * p > u * d)},${(this._x1 = t + g * l)},${(this._y1 = e + g * c)}`);
          } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
      }
      arc(t, e, r, n, i, o) {
        if (((t *= 1), (e *= 1), (r *= 1), (o = !!o), r < 0))
          throw Error(`negative radius: ${r}`);
        let a = r * Math.cos(n),
          l = r * Math.sin(n),
          c = t + a,
          u = e + l,
          s = 1 ^ o,
          f = o ? n - i : i - n;
        (null === this._x1
          ? this._append`M${c},${u}`
          : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) &&
            this._append`L${c},${u}`,
          r &&
            (f < 0 && (f = (f % t7) + t7),
            f > t9
              ? this
                  ._append`A${r},${r},0,1,${s},${t - a},${e - l}A${r},${r},0,1,${s},${(this._x1 = c)},${(this._y1 = u)}`
              : f > 1e-6 &&
                this
                  ._append`A${r},${r},0,${+(f >= t8)},${s},${(this._x1 = t + r * Math.cos(i))},${(this._y1 = e + r * Math.sin(i))}`));
      }
      rect(t, e, r, n) {
        this
          ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}h${(r *= 1)}v${+n}h${-r}Z`;
      }
      toString() {
        return this._;
      }
    }
    function er(t) {
      let e = 3;
      return (
        (t.digits = function (r) {
          if (!arguments.length) return e;
          if (null == r) e = null;
          else {
            let t = Math.floor(r);
            if (!(t >= 0)) throw RangeError(`invalid digits: ${r}`);
            e = t;
          }
          return t;
        }),
        () => new ee(e)
      );
    }
    ee.prototype;
    let en = Math.cos,
      ei = Math.sin,
      eo = Math.sqrt,
      ea = Math.PI,
      el = 2 * ea;
    eo(3);
    let ec = {
        draw(t, e) {
          let r = eo(e / ea);
          (t.moveTo(r, 0), t.arc(0, 0, r, 0, el));
        },
      },
      eu = eo(1 / 3),
      es = 2 * eu,
      ef = ei(ea / 10) / ei((7 * ea) / 10),
      ep = ei(el / 10) * ef,
      ed = -en(el / 10) * ef,
      eh = eo(3);
    eo(3);
    let ey = eo(3) / 2,
      ev = 1 / eo(12),
      em = (ev / 2 + 1) * 3;
    function eb(t) {
      return (eb =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var eg = ["type", "size", "sizeType"];
    function ex() {
      return (ex = Object.assign.bind()).apply(this, arguments);
    }
    function ew(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function eO(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ew(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != eb(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != eb(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == eb(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ew(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    var ej = {
        symbolCircle: ec,
        symbolCross: {
          draw(t, e) {
            let r = eo(e / 5) / 2;
            (t.moveTo(-3 * r, -r),
              t.lineTo(-r, -r),
              t.lineTo(-r, -3 * r),
              t.lineTo(r, -3 * r),
              t.lineTo(r, -r),
              t.lineTo(3 * r, -r),
              t.lineTo(3 * r, r),
              t.lineTo(r, r),
              t.lineTo(r, 3 * r),
              t.lineTo(-r, 3 * r),
              t.lineTo(-r, r),
              t.lineTo(-3 * r, r),
              t.closePath());
          },
        },
        symbolDiamond: {
          draw(t, e) {
            let r = eo(e / es),
              n = r * eu;
            (t.moveTo(0, -r),
              t.lineTo(n, 0),
              t.lineTo(0, r),
              t.lineTo(-n, 0),
              t.closePath());
          },
        },
        symbolSquare: {
          draw(t, e) {
            let r = eo(e),
              n = -r / 2;
            t.rect(n, n, r, r);
          },
        },
        symbolStar: {
          draw(t, e) {
            let r = eo(0.8908130915292852 * e),
              n = ep * r,
              i = ed * r;
            (t.moveTo(0, -r), t.lineTo(n, i));
            for (let e = 1; e < 5; ++e) {
              let o = (el * e) / 5,
                a = en(o),
                l = ei(o);
              (t.lineTo(l * r, -a * r), t.lineTo(a * n - l * i, l * n + a * i));
            }
            t.closePath();
          },
        },
        symbolTriangle: {
          draw(t, e) {
            let r = -eo(e / (3 * eh));
            (t.moveTo(0, 2 * r),
              t.lineTo(-eh * r, -r),
              t.lineTo(eh * r, -r),
              t.closePath());
          },
        },
        symbolWye: {
          draw(t, e) {
            let r = eo(e / em),
              n = r / 2,
              i = r * ev,
              o = r * ev + r,
              a = -n;
            (t.moveTo(n, i),
              t.lineTo(n, o),
              t.lineTo(a, o),
              t.lineTo(-0.5 * n - ey * i, ey * n + -0.5 * i),
              t.lineTo(-0.5 * n - ey * o, ey * n + -0.5 * o),
              t.lineTo(-0.5 * a - ey * o, ey * a + -0.5 * o),
              t.lineTo(-0.5 * n + ey * i, -0.5 * i - ey * n),
              t.lineTo(-0.5 * n + ey * o, -0.5 * o - ey * n),
              t.lineTo(-0.5 * a + ey * o, -0.5 * o - ey * a),
              t.closePath());
          },
        },
      },
      eS = Math.PI / 180,
      ek = function (t, e, r) {
        if ("area" === e) return t;
        switch (r) {
          case "cross":
            return (5 * t * t) / 9;
          case "diamond":
            return (0.5 * t * t) / Math.sqrt(3);
          case "square":
            return t * t;
          case "star":
            var n = 18 * eS;
            return (
              1.25 *
              t *
              t *
              (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2))
            );
          case "triangle":
            return (Math.sqrt(3) * t * t) / 4;
          case "wye":
            return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
          default:
            return (Math.PI * t * t) / 4;
        }
      },
      eP = function (t) {
        var e,
          r = t.type,
          n = void 0 === r ? "circle" : r,
          i = t.size,
          o = void 0 === i ? 64 : i,
          a = t.sizeType,
          l = void 0 === a ? "area" : a,
          c = eO(
            eO(
              {},
              (function (t, e) {
                if (null == t) return {};
                var r,
                  n,
                  i = (function (t, e) {
                    if (null == t) return {};
                    var r = {};
                    for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                        if (e.indexOf(n) >= 0) continue;
                        r[n] = t[n];
                      }
                    return r;
                  })(t, e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(t);
                  for (n = 0; n < o.length; n++)
                    ((r = o[n]),
                      !(e.indexOf(r) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(t, r) &&
                        (i[r] = t[r]));
                }
                return i;
              })(t, eg),
            ),
            {},
            { type: n, size: o, sizeType: l },
          ),
          u = c.className,
          s = c.cx,
          p = c.cy,
          d = td(c, !0);
        return s === +s && p === +p && o === +o
          ? f.default.createElement(
              "path",
              ex({}, d, {
                className: P("recharts-symbols", u),
                transform: "translate(".concat(s, ", ").concat(p, ")"),
                d:
                  ((e = ej["symbol".concat((0, t4.default)(n))] || ec),
                  (function (t, e) {
                    let r = null,
                      n = er(i);
                    function i() {
                      let i;
                      if (
                        (r || (r = i = n()),
                        t
                          .apply(this, arguments)
                          .draw(r, +e.apply(this, arguments)),
                        i)
                      )
                        return ((r = null), i + "" || null);
                    }
                    return (
                      (t = "function" == typeof t ? t : t6(t || ec)),
                      (e =
                        "function" == typeof e
                          ? e
                          : t6(void 0 === e ? 64 : +e)),
                      (i.type = function (e) {
                        return arguments.length
                          ? ((t = "function" == typeof e ? e : t6(e)), i)
                          : t;
                      }),
                      (i.size = function (t) {
                        return arguments.length
                          ? ((e = "function" == typeof t ? t : t6(+t)), i)
                          : e;
                      }),
                      (i.context = function (t) {
                        return arguments.length
                          ? ((r = null == t ? null : t), i)
                          : r;
                      }),
                      i
                    );
                  })()
                    .type(e)
                    .size(ek(o, l, n))()),
              }),
            )
          : null;
      };
    function eA(t) {
      return (eA =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function eE() {
      return (eE = Object.assign.bind()).apply(this, arguments);
    }
    function e_(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    eP.registerSymbol = function (t, e) {
      ej["symbol".concat((0, t4.default)(t))] = e;
    };
    function eM() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (eM = function () {
        return !!t;
      })();
    }
    function eT(t) {
      return (eT = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function eN(t, e) {
      return (eN = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function eC(t, e, r) {
      return (
        (e = eD(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function eD(t) {
      var e = (function (t, e) {
        if ("object" != eA(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != eA(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == eA(e) ? e : e + "";
    }
    var eI = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError("Cannot call a class as a function");
        return (
          (t = r),
          (e = arguments),
          (t = eT(t)),
          (function (t, e) {
            if (e && ("object" === eA(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                "Derived constructors may only return object or undefined",
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return r;
          })(
            this,
            eM()
              ? Reflect.construct(t, e || [], eT(this).constructor)
              : t.apply(this, e),
          )
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t && eN(r, t),
        (e = [
          {
            key: "renderIcon",
            value: function (t) {
              var e = this.props.inactiveColor,
                r = 32 / 6,
                n = 32 / 3,
                i = t.inactive ? e : t.color;
              if ("plainline" === t.type)
                return f.default.createElement("line", {
                  strokeWidth: 4,
                  fill: "none",
                  stroke: i,
                  strokeDasharray: t.payload.strokeDasharray,
                  x1: 0,
                  y1: 16,
                  x2: 32,
                  y2: 16,
                  className: "recharts-legend-icon",
                });
              if ("line" === t.type)
                return f.default.createElement("path", {
                  strokeWidth: 4,
                  fill: "none",
                  stroke: i,
                  d: "M0,"
                    .concat(16, "h")
                    .concat(n, "\n            A")
                    .concat(r, ",")
                    .concat(r, ",0,1,1,")
                    .concat(2 * n, ",")
                    .concat(16, "\n            H")
                    .concat(32, "M")
                    .concat(2 * n, ",")
                    .concat(16, "\n            A")
                    .concat(r, ",")
                    .concat(r, ",0,1,1,")
                    .concat(n, ",")
                    .concat(16),
                  className: "recharts-legend-icon",
                });
              if ("rect" === t.type)
                return f.default.createElement("path", {
                  stroke: "none",
                  fill: i,
                  d: "M0,"
                    .concat(4, "h")
                    .concat(32, "v")
                    .concat(24, "h")
                    .concat(-32, "z"),
                  className: "recharts-legend-icon",
                });
              if (f.default.isValidElement(t.legendIcon)) {
                var o = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? e_(Object(r), !0).forEach(function (e) {
                          eC(t, e, r[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : e_(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e),
                            );
                          });
                  }
                  return t;
                })({}, t);
                return (
                  delete o.legendIcon,
                  f.default.cloneElement(t.legendIcon, o)
                );
              }
              return f.default.createElement(eP, {
                fill: i,
                cx: 16,
                cy: 16,
                size: 32,
                sizeType: "diameter",
                type: t.type,
              });
            },
          },
          {
            key: "renderItems",
            value: function () {
              var t = this,
                e = this.props,
                r = e.payload,
                n = e.iconSize,
                i = e.layout,
                o = e.formatter,
                a = e.inactiveColor,
                l = { x: 0, y: 0, width: 32, height: 32 },
                c = {
                  display: "horizontal" === i ? "inline-block" : "block",
                  marginRight: 10,
                },
                u = {
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginRight: 4,
                };
              return r.map(function (e, r) {
                var i = e.formatter || o,
                  s = P(
                    eC(
                      eC(
                        { "recharts-legend-item": !0 },
                        "legend-item-".concat(r),
                        !0,
                      ),
                      "inactive",
                      e.inactive,
                    ),
                  );
                if ("none" === e.type) return null;
                var p = (0, w.default)(e.value) ? null : e.value;
                t3(
                  !(0, w.default)(e.value),
                  'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>',
                );
                var d = e.inactive ? a : e.color;
                return f.default.createElement(
                  "li",
                  eE(
                    { className: s, style: c, key: "legend-item-".concat(r) },
                    J(t.props, e, r),
                  ),
                  f.default.createElement(
                    tx,
                    { width: n, height: n, viewBox: l, style: u },
                    t.renderIcon(e),
                  ),
                  f.default.createElement(
                    "span",
                    {
                      className: "recharts-legend-item-text",
                      style: { color: d },
                    },
                    i ? i(p, e, r) : p,
                  ),
                );
              });
            },
          },
          {
            key: "render",
            value: function () {
              var t = this.props,
                e = t.payload,
                r = t.layout,
                n = t.align;
              return e && e.length
                ? f.default.createElement(
                    "ul",
                    {
                      className: "recharts-default-legend",
                      style: {
                        padding: 0,
                        margin: 0,
                        textAlign: "horizontal" === r ? n : "left",
                      },
                    },
                    this.renderItems(),
                  )
                : null;
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, eD(n.key), n));
          }
        })(r.prototype, e),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
    })(f.PureComponent);
    function eL(t) {
      return (eL =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    (eC(eI, "displayName", "Legend"),
      eC(eI, "defaultProps", {
        iconSize: 14,
        layout: "horizontal",
        align: "center",
        verticalAlign: "middle",
        inactiveColor: "#ccc",
      }));
    var eB = ["ref"];
    function eR(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ez(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? eR(Object(r), !0).forEach(function (e) {
              eV(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : eR(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function eF(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, eq(n.key), n));
      }
    }
    function eU() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (eU = function () {
        return !!t;
      })();
    }
    function e$(t) {
      return (e$ = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function eW(t, e) {
      return (eW = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function eV(t, e, r) {
      return (
        (e = eq(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function eq(t) {
      var e = (function (t, e) {
        if ("object" != eL(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != eL(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == eL(e) ? e : e + "";
    }
    function eH(t) {
      return t.value;
    }
    var eX = (function (t) {
      var e, r;
      function n() {
        var t, e, r;
        if (!(this instanceof n))
          throw TypeError("Cannot call a class as a function");
        for (var i = arguments.length, o = Array(i), a = 0; a < i; a++)
          o[a] = arguments[a];
        return (
          (e = n),
          (r = [].concat(o)),
          (e = e$(e)),
          eV(
            (t = (function (t, e) {
              if (e && ("object" === eL(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              eU()
                ? Reflect.construct(e, r || [], e$(this).constructor)
                : e.apply(this, r),
            )),
            "lastBoundingBox",
            { width: -1, height: -1 },
          ),
          t
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t && eW(n, t),
        (e = [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var t = this.wrapperNode.getBoundingClientRect();
                return (
                  (t.height = this.wrapperNode.offsetHeight),
                  (t.width = this.wrapperNode.offsetWidth),
                  t
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var t = this.props.onBBoxUpdate,
                e = this.getBBox();
              e
                ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                    Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                  ((this.lastBoundingBox.width = e.width),
                  (this.lastBoundingBox.height = e.height),
                  t && t(e))
                : (-1 !== this.lastBoundingBox.width ||
                    -1 !== this.lastBoundingBox.height) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  t && t(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? ez({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (t) {
              var e,
                r,
                n = this.props,
                i = n.layout,
                o = n.align,
                a = n.verticalAlign,
                l = n.margin,
                c = n.chartWidth,
                u = n.chartHeight;
              return (
                (t &&
                  ((void 0 !== t.left && null !== t.left) ||
                    (void 0 !== t.right && null !== t.right))) ||
                  (e =
                    "center" === o && "vertical" === i
                      ? { left: ((c || 0) - this.getBBoxSnapshot().width) / 2 }
                      : "right" === o
                        ? { right: (l && l.right) || 0 }
                        : { left: (l && l.left) || 0 }),
                (t &&
                  ((void 0 !== t.top && null !== t.top) ||
                    (void 0 !== t.bottom && null !== t.bottom))) ||
                  (r =
                    "middle" === a
                      ? { top: ((u || 0) - this.getBBoxSnapshot().height) / 2 }
                      : "bottom" === a
                        ? { bottom: (l && l.bottom) || 0 }
                        : { top: (l && l.top) || 0 }),
                ez(ez({}, e), r)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var t = this,
                e = this.props,
                r = e.content,
                n = e.width,
                i = e.height,
                o = e.wrapperStyle,
                a = e.payloadUniqBy,
                l = e.payload,
                c = ez(
                  ez(
                    {
                      position: "absolute",
                      width: n || "auto",
                      height: i || "auto",
                    },
                    this.getDefaultPosition(o),
                  ),
                  o,
                );
              return f.default.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: c,
                  ref: function (e) {
                    t.wrapperNode = e;
                  },
                },
                (function (t, e) {
                  if (f.default.isValidElement(t))
                    return f.default.cloneElement(t, e);
                  if ("function" == typeof t)
                    return f.default.createElement(t, e);
                  e.ref;
                  var r = (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      i = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < o.length; n++)
                        ((r = o[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (i[r] = t[r]));
                    }
                    return i;
                  })(e, eB);
                  return f.default.createElement(eI, r);
                })(r, ez(ez({}, this.props), {}, { payload: tX(l, a, eH) })),
              );
            },
          },
        ]),
        (r = [
          {
            key: "getWithHeight",
            value: function (t, e) {
              var r = ez(ez({}, this.defaultProps), t.props).layout;
              return "vertical" === r && I(t.props.height)
                ? { height: t.props.height }
                : "horizontal" === r
                  ? { width: t.props.width || e }
                  : null;
            },
          },
        ]),
        e && eF(n.prototype, e),
        r && eF(n, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        n
      );
    })(f.PureComponent);
    function eK() {
      return (eK = Object.assign.bind()).apply(this, arguments);
    }
    (eV(eX, "displayName", "Legend"),
      eV(eX, "defaultProps", {
        iconSize: 14,
        layout: "horizontal",
        align: "center",
        verticalAlign: "bottom",
      }));
    var eG = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.r,
          i = P("recharts-dot", t.className);
        return e === +e && r === +r && n === +n
          ? f.createElement(
              "circle",
              eK({}, td(t, !1), Z(t), { className: i, cx: e, cy: r, r: n }),
            )
          : null;
      },
      eY = t.i(45009);
    let { getOwnPropertyNames: eZ, getOwnPropertySymbols: eJ } = Object,
      { hasOwnProperty: eQ } = Object.prototype;
    function e0(t, e) {
      return function (r, n, i) {
        return t(r, n, i) && e(r, n, i);
      };
    }
    function e1(t) {
      return function (e, r, n) {
        if (!e || !r || "object" != typeof e || "object" != typeof r)
          return t(e, r, n);
        let { cache: i } = n,
          o = i.get(e),
          a = i.get(r);
        if (o && a) return o === r && a === e;
        (i.set(e, r), i.set(r, e));
        let l = t(e, r, n);
        return (i.delete(e), i.delete(r), l);
      };
    }
    function e2(t) {
      return eZ(t).concat(eJ(t));
    }
    let e5 = Object.hasOwn || ((t, e) => eQ.call(t, e));
    function e3(t, e) {
      return t === e || (!t && !e && t != t && e != e);
    }
    let { getOwnPropertyDescriptor: e4, keys: e6 } = Object;
    function e8(t, e) {
      return (
        t.byteLength === e.byteLength &&
        ru(new Uint8Array(t), new Uint8Array(e))
      );
    }
    function e7(t, e, r) {
      let n = t.length;
      if (e.length !== n) return !1;
      for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
      return !0;
    }
    function e9(t, e) {
      return (
        t.byteLength === e.byteLength &&
        ru(
          new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
          new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
        )
      );
    }
    function rt(t, e) {
      return e3(t.getTime(), e.getTime());
    }
    function re(t, e) {
      return (
        t.name === e.name &&
        t.message === e.message &&
        t.cause === e.cause &&
        t.stack === e.stack
      );
    }
    function rr(t, e) {
      return t === e;
    }
    function rn(t, e, r) {
      let n,
        i,
        o = t.size;
      if (o !== e.size) return !1;
      if (!o) return !0;
      let a = Array(o),
        l = t.entries(),
        c = 0;
      for (; (n = l.next()) && !n.done; ) {
        let o = e.entries(),
          l = !1,
          u = 0;
        for (; (i = o.next()) && !i.done; ) {
          if (a[u]) {
            u++;
            continue;
          }
          let o = n.value,
            s = i.value;
          if (
            r.equals(o[0], s[0], c, u, t, e, r) &&
            r.equals(o[1], s[1], o[0], s[0], t, e, r)
          ) {
            l = a[u] = !0;
            break;
          }
          u++;
        }
        if (!l) return !1;
        c++;
      }
      return !0;
    }
    function ri(t, e, r) {
      let n = e6(t),
        i = n.length;
      if (e6(e).length !== i) return !1;
      for (; i-- > 0; ) if (!rf(t, e, r, n[i])) return !1;
      return !0;
    }
    function ro(t, e, r) {
      let n,
        i,
        o,
        a = e2(t),
        l = a.length;
      if (e2(e).length !== l) return !1;
      for (; l-- > 0; )
        if (
          !rf(t, e, r, (n = a[l])) ||
          ((i = e4(t, n)),
          (o = e4(e, n)),
          (i || o) &&
            (!i ||
              !o ||
              i.configurable !== o.configurable ||
              i.enumerable !== o.enumerable ||
              i.writable !== o.writable))
        )
          return !1;
      return !0;
    }
    function ra(t, e) {
      return e3(t.valueOf(), e.valueOf());
    }
    function rl(t, e) {
      return t.source === e.source && t.flags === e.flags;
    }
    function rc(t, e, r) {
      let n,
        i,
        o = t.size;
      if (o !== e.size) return !1;
      if (!o) return !0;
      let a = Array(o),
        l = t.values();
      for (; (n = l.next()) && !n.done; ) {
        let o = e.values(),
          l = !1,
          c = 0;
        for (; (i = o.next()) && !i.done; ) {
          if (!a[c] && r.equals(n.value, i.value, n.value, i.value, t, e, r)) {
            l = a[c] = !0;
            break;
          }
          c++;
        }
        if (!l) return !1;
      }
      return !0;
    }
    function ru(t, e) {
      let r = t.byteLength;
      if (e.byteLength !== r || t.byteOffset !== e.byteOffset) return !1;
      for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
      return !0;
    }
    function rs(t, e) {
      return (
        t.hostname === e.hostname &&
        t.pathname === e.pathname &&
        t.protocol === e.protocol &&
        t.port === e.port &&
        t.hash === e.hash &&
        t.username === e.username &&
        t.password === e.password
      );
    }
    function rf(t, e, r, n) {
      return (
        (("_owner" === n || "__o" === n || "__v" === n) &&
          (!!t.$$typeof || !!e.$$typeof)) ||
        (e5(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
      );
    }
    let rp = {
        "[object Int8Array]": !0,
        "[object Uint8Array]": !0,
        "[object Uint8ClampedArray]": !0,
        "[object Int16Array]": !0,
        "[object Uint16Array]": !0,
        "[object Int32Array]": !0,
        "[object Uint32Array]": !0,
        "[object Float16Array]": !0,
        "[object Float32Array]": !0,
        "[object Float64Array]": !0,
        "[object BigInt64Array]": !0,
        "[object BigUint64Array]": !0,
      },
      rd = Object.prototype.toString,
      rh = ry();
    function ry(t = {}) {
      let {
          circular: e = !1,
          createInternalComparator: r,
          createState: n,
          strict: i = !1,
        } = t,
        o = (function ({
          areArrayBuffersEqual: t,
          areArraysEqual: e,
          areDataViewsEqual: r,
          areDatesEqual: n,
          areErrorsEqual: i,
          areFunctionsEqual: o,
          areMapsEqual: a,
          areNumbersEqual: l,
          areObjectsEqual: c,
          arePrimitiveWrappersEqual: u,
          areRegExpsEqual: s,
          areSetsEqual: f,
          areTypedArraysEqual: p,
          areUrlsEqual: d,
          unknownTagComparators: h,
        }) {
          return function (y, v, m) {
            if (y === v) return !0;
            if (null == y || null == v) return !1;
            let b = typeof y;
            if (b !== typeof v) return !1;
            if ("object" !== b)
              return "number" === b
                ? l(y, v, m)
                : "function" === b && o(y, v, m);
            let g = y.constructor;
            if (g !== v.constructor) return !1;
            if (g === Object) return c(y, v, m);
            if (Array.isArray(y)) return e(y, v, m);
            if (g === Date) return n(y, v, m);
            if (g === RegExp) return s(y, v, m);
            if (g === Map) return a(y, v, m);
            if (g === Set) return f(y, v, m);
            let x = rd.call(y);
            if ("[object Date]" === x) return n(y, v, m);
            if ("[object RegExp]" === x) return s(y, v, m);
            if ("[object Map]" === x) return a(y, v, m);
            if ("[object Set]" === x) return f(y, v, m);
            if ("[object Object]" === x)
              return (
                "function" != typeof y.then &&
                "function" != typeof v.then &&
                c(y, v, m)
              );
            if ("[object URL]" === x) return d(y, v, m);
            if ("[object Error]" === x) return i(y, v, m);
            if ("[object Arguments]" === x) return c(y, v, m);
            if (rp[x]) return p(y, v, m);
            if ("[object ArrayBuffer]" === x) return t(y, v, m);
            if ("[object DataView]" === x) return r(y, v, m);
            if (
              "[object Boolean]" === x ||
              "[object Number]" === x ||
              "[object String]" === x
            )
              return u(y, v, m);
            if (h) {
              let t = h[x];
              if (!t) {
                let e = null != y ? y[Symbol.toStringTag] : void 0;
                e && (t = h[e]);
              }
              if (t) return t(y, v, m);
            }
            return !1;
          };
        })(
          (function ({ circular: t, createCustomConfig: e, strict: r }) {
            let n = {
              areArrayBuffersEqual: e8,
              areArraysEqual: r ? ro : e7,
              areDataViewsEqual: e9,
              areDatesEqual: rt,
              areErrorsEqual: re,
              areFunctionsEqual: rr,
              areMapsEqual: r ? e0(rn, ro) : rn,
              areNumbersEqual: e3,
              areObjectsEqual: r ? ro : ri,
              arePrimitiveWrappersEqual: ra,
              areRegExpsEqual: rl,
              areSetsEqual: r ? e0(rc, ro) : rc,
              areTypedArraysEqual: r ? e0(ru, ro) : ru,
              areUrlsEqual: rs,
              unknownTagComparators: void 0,
            };
            if ((e && (n = Object.assign({}, n, e(n))), t)) {
              let t = e1(n.areArraysEqual),
                e = e1(n.areMapsEqual),
                r = e1(n.areObjectsEqual),
                i = e1(n.areSetsEqual);
              n = Object.assign({}, n, {
                areArraysEqual: t,
                areMapsEqual: e,
                areObjectsEqual: r,
                areSetsEqual: i,
              });
            }
            return n;
          })(t),
        ),
        a = r
          ? r(o)
          : function (t, e, r, n, i, a, l) {
              return o(t, e, l);
            };
      return (function ({
        circular: t,
        comparator: e,
        createState: r,
        equals: n,
        strict: i,
      }) {
        if (r)
          return function (o, a) {
            let { cache: l = t ? new WeakMap() : void 0, meta: c } = r();
            return e(o, a, { cache: l, equals: n, meta: c, strict: i });
          };
        if (t)
          return function (t, r) {
            return e(t, r, {
              cache: new WeakMap(),
              equals: n,
              meta: void 0,
              strict: i,
            });
          };
        let o = { cache: void 0, equals: n, meta: void 0, strict: i };
        return function (t, r) {
          return e(t, r, o);
        };
      })({ circular: e, comparator: o, createState: n, equals: a, strict: i });
    }
    function rv(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = -1;
      requestAnimationFrame(function n(i) {
        if ((r < 0 && (r = i), i - r > e)) (t(i), (r = -1));
        else {
          var o;
          ((o = n),
            "u" > typeof requestAnimationFrame && requestAnimationFrame(o));
        }
      });
    }
    function rm(t) {
      return (rm =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function rb(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function rg(t) {
      return (rg =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function rx(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function rw(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? rx(Object(r), !0).forEach(function (e) {
              rO(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : rx(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function rO(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ("object" !== rg(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== rg(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(e, "string")),
        (e = "symbol" === rg(n) ? n : String(n)) in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    (ry({ strict: !0 }),
      ry({ circular: !0 }),
      ry({ circular: !0, strict: !0 }),
      ry({ createInternalComparator: () => e3 }),
      ry({ strict: !0, createInternalComparator: () => e3 }),
      ry({ circular: !0, createInternalComparator: () => e3 }),
      ry({ circular: !0, createInternalComparator: () => e3, strict: !0 }));
    var rj = function (t) {
        return t;
      },
      rS = function (t, e) {
        return Object.keys(e).reduce(function (r, n) {
          return rw(rw({}, r), {}, rO({}, n, t(n, e[n])));
        }, {});
      },
      rk = function (t, e, r) {
        return t
          .map(function (t) {
            return ""
              .concat(
                t.replace(/([A-Z])/g, function (t) {
                  return "-".concat(t.toLowerCase());
                }),
                " ",
              )
              .concat(e, "ms ")
              .concat(r);
          })
          .join(",");
      },
      rP = function (t, e, r, n, i, o, a, l) {};
    function rA(t, e) {
      if (t) {
        if ("string" == typeof t) return rE(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ("Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r)
        )
          return Array.from(t);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return rE(t, e);
      }
    }
    function rE(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var r_ = function (t, e) {
        return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
      },
      rM = function (t, e) {
        return t
          .map(function (t, r) {
            return t * Math.pow(e, r);
          })
          .reduce(function (t, e) {
            return t + e;
          });
      },
      rT = function (t, e) {
        return function (r) {
          return rM(r_(t, e), r);
        };
      },
      rN = function () {
        for (var t, e, r = arguments.length, n = Array(r), i = 0; i < r; i++)
          n[i] = arguments[i];
        var o = n[0],
          a = n[1],
          l = n[2],
          c = n[3];
        if (1 === n.length)
          switch (n[0]) {
            case "linear":
              ((o = 0), (a = 0), (l = 1), (c = 1));
              break;
            case "ease":
              ((o = 0.25), (a = 0.1), (l = 0.25), (c = 1));
              break;
            case "ease-in":
              ((o = 0.42), (a = 0), (l = 1), (c = 1));
              break;
            case "ease-out":
              ((o = 0.42), (a = 0), (l = 0.58), (c = 1));
              break;
            case "ease-in-out":
              ((o = 0), (a = 0), (l = 0.58), (c = 1));
              break;
            default:
              var u = n[0].split("(");
              if (
                "cubic-bezier" === u[0] &&
                4 === u[1].split(")")[0].split(",").length
              ) {
                var s,
                  f =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(
                      (s = u[1]
                        .split(")")[0]
                        .split(",")
                        .map(function (t) {
                          return parseFloat(t);
                        })),
                    ) ||
                    (function (t) {
                      var e =
                        null == t
                          ? null
                          : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                            t["@@iterator"];
                      if (null != e) {
                        var r,
                          n,
                          i,
                          o,
                          a = [],
                          l = !0,
                          c = !1;
                        try {
                          ((i = (e = e.call(t)).next), !1);
                          for (
                            ;
                            !(l = (r = i.call(e)).done) &&
                            (a.push(r.value), 4 !== a.length);
                            l = !0
                          );
                        } catch (t) {
                          ((c = !0), (n = t));
                        } finally {
                          try {
                            if (
                              !l &&
                              null != e.return &&
                              ((o = e.return()), Object(o) !== o)
                            )
                              return;
                          } finally {
                            if (c) throw n;
                          }
                        }
                        return a;
                      }
                    })(s) ||
                    rA(s, 4) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })();
                ((o = f[0]), (a = f[1]), (l = f[2]), (c = f[3]));
              } else
                rP(
                  !1,
                  "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                  n,
                );
          }
        rP(
          [o, l, a, c].every(function (t) {
            return "number" == typeof t && t >= 0 && t <= 1;
          }),
          "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
          n,
        );
        var p = rT(o, l),
          d = rT(a, c),
          h =
            ((t = o),
            (e = l),
            function (r) {
              var n;
              return rM(
                [].concat(
                  (function (t) {
                    if (Array.isArray(t)) return rE(t);
                  })(
                    (n = r_(t, e)
                      .map(function (t, e) {
                        return t * e;
                      })
                      .slice(1)),
                  ) ||
                    (function (t) {
                      if (
                        ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
                        null != t["@@iterator"]
                      )
                        return Array.from(t);
                    })(n) ||
                    rA(n) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  [0],
                ),
                r,
              );
            }),
          y = function (t) {
            for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
              var i,
                o = p(r) - e,
                a = h(r);
              if (1e-4 > Math.abs(o - e) || a < 1e-4) break;
              r = (i = r - o / a) > 1 ? 1 : i < 0 ? 0 : i;
            }
            return d(r);
          };
        return ((y.isStepper = !1), y);
      },
      rC = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.stiff,
          r = void 0 === e ? 100 : e,
          n = t.damping,
          i = void 0 === n ? 8 : n,
          o = t.dt,
          a = void 0 === o ? 17 : o,
          l = function (t, e, n) {
            var o = n + ((-(t - e) * r - n * i) * a) / 1e3,
              l = (n * a) / 1e3 + t;
            return 1e-4 > Math.abs(l - e) && 1e-4 > Math.abs(o)
              ? [e, 0]
              : [l, o];
          };
        return ((l.isStepper = !0), (l.dt = a), l);
      },
      rD = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        var n = e[0];
        if ("string" == typeof n)
          switch (n) {
            case "ease":
            case "ease-in-out":
            case "ease-out":
            case "ease-in":
            case "linear":
              return rN(n);
            case "spring":
              return rC();
            default:
              if ("cubic-bezier" === n.split("(")[0]) return rN(n);
              rP(
                !1,
                "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                e,
              );
          }
        return "function" == typeof n
          ? n
          : (rP(
              !1,
              "[configEasing]: first argument type should be function or string, instead received %s",
              e,
            ),
            null);
      };
    function rI(t) {
      return (rI =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function rL(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return rU(t);
        })(t) ||
        (function (t) {
          if (
            ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        rF(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function rB(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function rR(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? rB(Object(r), !0).forEach(function (e) {
              rz(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : rB(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function rz(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ("object" !== rI(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" !== rI(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(e, "string")),
        (e = "symbol" === rI(n) ? n : String(n)) in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function rF(t, e) {
      if (t) {
        if ("string" == typeof t) return rU(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ("Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r)
        )
          return Array.from(t);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return rU(t, e);
      }
    }
    function rU(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var r$ = function (t, e, r) {
        return t + (e - t) * r;
      },
      rW = function (t) {
        return t.from !== t.to;
      },
      rV = function t(e, r, n) {
        var i = rS(function (t, r) {
          if (rW(r)) {
            var n,
              i =
                (function (t) {
                  if (Array.isArray(t)) return t;
                })((n = e(r.from, r.to, r.velocity))) ||
                (function (t) {
                  var e =
                    null == t
                      ? null
                      : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != e) {
                    var r,
                      n,
                      i,
                      o,
                      a = [],
                      l = !0,
                      c = !1;
                    try {
                      ((i = (e = e.call(t)).next), !1);
                      for (
                        ;
                        !(l = (r = i.call(e)).done) &&
                        (a.push(r.value), 2 !== a.length);
                        l = !0
                      );
                    } catch (t) {
                      ((c = !0), (n = t));
                    } finally {
                      try {
                        if (
                          !l &&
                          null != e.return &&
                          ((o = e.return()), Object(o) !== o)
                        )
                          return;
                      } finally {
                        if (c) throw n;
                      }
                    }
                    return a;
                  }
                })(n) ||
                rF(n, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(),
              o = i[0],
              a = i[1];
            return rR(rR({}, r), {}, { from: o, velocity: a });
          }
          return r;
        }, r);
        return n < 1
          ? rS(function (t, e) {
              return rW(e)
                ? rR(
                    rR({}, e),
                    {},
                    {
                      velocity: r$(e.velocity, i[t].velocity, n),
                      from: r$(e.from, i[t].from, n),
                    },
                  )
                : e;
            }, r)
          : t(e, i, n - 1);
      };
    let rq = function (t, e, r, n, i) {
      var o,
        a,
        l = [Object.keys(t), Object.keys(e)].reduce(function (t, e) {
          return t.filter(function (t) {
            return e.includes(t);
          });
        }),
        c = l.reduce(function (r, n) {
          return rR(rR({}, r), {}, rz({}, n, [t[n], e[n]]));
        }, {}),
        u = l.reduce(function (r, n) {
          return rR(
            rR({}, r),
            {},
            rz({}, n, { from: t[n], velocity: 0, to: e[n] }),
          );
        }, {}),
        s = -1,
        f = function () {
          return null;
        };
      return (
        (f = r.isStepper
          ? function (n) {
              o || (o = n);
              var a = (n - o) / r.dt;
              ((u = rV(r, u, a)),
                i(
                  rR(
                    rR(rR({}, t), e),
                    rS(function (t, e) {
                      return e.from;
                    }, u),
                  ),
                ),
                (o = n),
                Object.values(u).filter(rW).length &&
                  (s = requestAnimationFrame(f)));
            }
          : function (o) {
              a || (a = o);
              var l = (o - a) / n,
                u = rS(function (t, e) {
                  return r$.apply(void 0, rL(e).concat([r(l)]));
                }, c);
              if ((i(rR(rR(rR({}, t), e), u)), l < 1))
                s = requestAnimationFrame(f);
              else {
                var p = rS(function (t, e) {
                  return r$.apply(void 0, rL(e).concat([r(1)]));
                }, c);
                i(rR(rR(rR({}, t), e), p));
              }
            }),
        function () {
          return (
            requestAnimationFrame(f),
            function () {
              cancelAnimationFrame(s);
            }
          );
        }
      );
    };
    function rH(t) {
      return (rH =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var rX = [
      "children",
      "begin",
      "duration",
      "attributeName",
      "easing",
      "isActive",
      "steps",
      "from",
      "to",
      "canBegin",
      "onAnimationEnd",
      "shouldReAnimate",
      "onAnimationReStart",
    ];
    function rK(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return rG(t);
        })(t) ||
        (function (t) {
          if (
            ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ("string" == typeof t) return rG(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e)
            )
              return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return rG(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function rG(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function rY(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function rZ(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? rY(Object(r), !0).forEach(function (e) {
              rJ(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : rY(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function rJ(t, e, r) {
      return (
        (e = rQ(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function rQ(t) {
      var e = (function (t, e) {
        if ("object" !== rH(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" !== rH(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" === rH(e) ? e : String(e);
    }
    function r0(t, e) {
      return (r0 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function r1(t, e) {
      if (e && ("object" === rH(e) || "function" == typeof e)) return e;
      if (void 0 !== e)
        throw TypeError(
          "Derived constructors may only return object or undefined",
        );
      return r2(t);
    }
    function r2(t) {
      if (void 0 === t)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function r5(t) {
      return (r5 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var r3 = (function (t) {
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      ((i.prototype = Object.create(t && t.prototype, {
        constructor: { value: i, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(i, "prototype", { writable: !1 }),
        t && r0(i, t));
      var e,
        r,
        n =
          ((e = (function () {
            if (
              "u" < typeof Reflect ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })()),
          function () {
            var t,
              r = r5(i);
            return (
              (t = e
                ? Reflect.construct(r, arguments, r5(this).constructor)
                : r.apply(this, arguments)),
              r1(this, t)
            );
          });
      function i(t, e) {
        if (!(this instanceof i))
          throw TypeError("Cannot call a class as a function");
        var r = n.call(this, t, e),
          o = r.props,
          a = o.isActive,
          l = o.attributeName,
          c = o.from,
          u = o.to,
          s = o.steps,
          f = o.children,
          p = o.duration;
        if (
          ((r.handleStyleChange = r.handleStyleChange.bind(r2(r))),
          (r.changeStyle = r.changeStyle.bind(r2(r))),
          !a || p <= 0)
        )
          return (
            (r.state = { style: {} }),
            "function" == typeof f && (r.state = { style: u }),
            r1(r)
          );
        if (s && s.length) r.state = { style: s[0].style };
        else if (c) {
          if ("function" == typeof f) return ((r.state = { style: c }), r1(r));
          r.state = { style: l ? rJ({}, l, c) : c };
        } else r.state = { style: {} };
        return r;
      }
      return (
        (r = [
          {
            key: "componentDidMount",
            value: function () {
              var t = this.props,
                e = t.isActive,
                r = t.canBegin;
              ((this.mounted = !0), e && r && this.runAnimation(this.props));
            },
          },
          {
            key: "componentDidUpdate",
            value: function (t) {
              var e = this.props,
                r = e.isActive,
                n = e.canBegin,
                i = e.attributeName,
                o = e.shouldReAnimate,
                a = e.to,
                l = e.from,
                c = this.state.style;
              if (n) {
                if (!r) {
                  var u = { style: i ? rJ({}, i, a) : a };
                  this.state &&
                    c &&
                    ((i && c[i] !== a) || (!i && c !== a)) &&
                    this.setState(u);
                  return;
                }
                if (!rh(t.to, a) || !t.canBegin || !t.isActive) {
                  var s = !t.canBegin || !t.isActive;
                  (this.manager && this.manager.stop(),
                    this.stopJSAnimation && this.stopJSAnimation());
                  var f = s || o ? l : t.to;
                  if (this.state && c) {
                    var p = { style: i ? rJ({}, i, f) : f };
                    ((i && c[i] !== f) || (!i && c !== f)) && this.setState(p);
                  }
                  this.runAnimation(
                    rZ(rZ({}, this.props), {}, { from: f, begin: 0 }),
                  );
                }
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.mounted = !1;
              var t = this.props.onAnimationEnd;
              (this.unSubscribe && this.unSubscribe(),
                this.manager && (this.manager.stop(), (this.manager = null)),
                this.stopJSAnimation && this.stopJSAnimation(),
                t && t());
            },
          },
          {
            key: "handleStyleChange",
            value: function (t) {
              this.changeStyle(t);
            },
          },
          {
            key: "changeStyle",
            value: function (t) {
              this.mounted && this.setState({ style: t });
            },
          },
          {
            key: "runJSAnimation",
            value: function (t) {
              var e = this,
                r = t.from,
                n = t.to,
                i = t.duration,
                o = t.easing,
                a = t.begin,
                l = t.onAnimationEnd,
                c = t.onAnimationStart,
                u = rq(r, n, rD(o), i, this.changeStyle);
              this.manager.start([
                c,
                a,
                function () {
                  e.stopJSAnimation = u();
                },
                i,
                l,
              ]);
            },
          },
          {
            key: "runStepAnimation",
            value: function (t) {
              var e = this,
                r = t.steps,
                n = t.begin,
                i = t.onAnimationStart,
                o = r[0],
                a = o.style,
                l = o.duration;
              return this.manager.start(
                [i].concat(
                  rK(
                    r.reduce(
                      function (t, n, i) {
                        if (0 === i) return t;
                        var o = n.duration,
                          a = n.easing,
                          l = void 0 === a ? "ease" : a,
                          c = n.style,
                          u = n.properties,
                          s = n.onAnimationEnd,
                          f = i > 0 ? r[i - 1] : n,
                          p = u || Object.keys(c);
                        if ("function" == typeof l || "spring" === l)
                          return [].concat(rK(t), [
                            e.runJSAnimation.bind(e, {
                              from: f.style,
                              to: c,
                              duration: o,
                              easing: l,
                            }),
                            o,
                          ]);
                        var d = rk(p, o, l),
                          h = rZ(rZ(rZ({}, f.style), c), {}, { transition: d });
                        return [].concat(rK(t), [h, o, s]).filter(rj);
                      },
                      [a, Math.max(void 0 === l ? 0 : l, n)],
                    ),
                  ),
                  [t.onAnimationEnd],
                ),
              );
            },
          },
          {
            key: "runAnimation",
            value: function (t) {
              this.manager ||
                (this.manager =
                  ((e = function () {
                    return null;
                  }),
                  (r = !1),
                  (n = function t(n) {
                    if (!r) {
                      if (Array.isArray(n)) {
                        if (!n.length) return;
                        var i =
                            (function (t) {
                              if (Array.isArray(t)) return t;
                            })(n) ||
                            (function (t) {
                              if (
                                ("u" > typeof Symbol &&
                                  null != t[Symbol.iterator]) ||
                                null != t["@@iterator"]
                              )
                                return Array.from(t);
                            })(n) ||
                            (function (t) {
                              if (t) {
                                if ("string" == typeof t) return rb(t, void 0);
                                var e = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                if (
                                  ("Object" === e &&
                                    t.constructor &&
                                    (e = t.constructor.name),
                                  "Map" === e || "Set" === e)
                                )
                                  return Array.from(t);
                                if (
                                  "Arguments" === e ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    e,
                                  )
                                )
                                  return rb(t, void 0);
                              }
                            })(n) ||
                            (function () {
                              throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })(),
                          o = i[0],
                          a = i.slice(1);
                        return "number" == typeof o
                          ? void rv(t.bind(null, a), o)
                          : (t(o), void rv(t.bind(null, a)));
                      }
                      ("object" === rm(n) && e(n),
                        "function" == typeof n && n());
                    }
                  }),
                  {
                    stop: function () {
                      r = !0;
                    },
                    start: function (t) {
                      ((r = !1), n(t));
                    },
                    subscribe: function (t) {
                      return (
                        (e = t),
                        function () {
                          e = function () {
                            return null;
                          };
                        }
                      );
                    },
                  }));
              var e,
                r,
                n,
                i = t.begin,
                o = t.duration,
                a = t.attributeName,
                l = t.to,
                c = t.easing,
                u = t.onAnimationStart,
                s = t.onAnimationEnd,
                f = t.steps,
                p = t.children,
                d = this.manager;
              if (
                ((this.unSubscribe = d.subscribe(this.handleStyleChange)),
                "function" == typeof c ||
                  "function" == typeof p ||
                  "spring" === c)
              )
                return void this.runJSAnimation(t);
              if (f.length > 1) return void this.runStepAnimation(t);
              var h = a ? rJ({}, a, l) : l,
                y = rk(Object.keys(h), o, c);
              d.start([u, i, rZ(rZ({}, h), {}, { transition: y }), o, s]);
            },
          },
          {
            key: "render",
            value: function () {
              var t = this.props,
                e = t.children,
                r = (t.begin, t.duration),
                n = (t.attributeName, t.easing, t.isActive),
                i =
                  (t.steps,
                  t.from,
                  t.to,
                  t.canBegin,
                  t.onAnimationEnd,
                  t.shouldReAnimate,
                  t.onAnimationReStart,
                  (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      i = (function (t, e) {
                        if (null == t) return {};
                        var r,
                          n,
                          i = {},
                          o = Object.keys(t);
                        for (n = 0; n < o.length; n++)
                          ((r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]));
                        return i;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < o.length; n++)
                        ((r = o[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (i[r] = t[r]));
                    }
                    return i;
                  })(t, rX)),
                o = f.Children.count(e),
                a = this.state.style;
              if ("function" == typeof e) return e(a);
              if (!n || 0 === o || r <= 0) return e;
              var l = function (t) {
                var e = t.props,
                  r = e.style,
                  n = e.className;
                return (0, f.cloneElement)(
                  t,
                  rZ(
                    rZ({}, i),
                    {},
                    {
                      style: rZ(rZ({}, void 0 === r ? {} : r), a),
                      className: n,
                    },
                  ),
                );
              };
              return 1 === o
                ? l(f.Children.only(e))
                : f.default.createElement(
                    "div",
                    null,
                    f.Children.map(e, function (t) {
                      return l(t);
                    }),
                  );
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, rQ(n.key), n));
          }
        })(i.prototype, r),
        Object.defineProperty(i, "prototype", { writable: !1 }),
        i
      );
    })(f.PureComponent);
    function r4(t, e) {
      if (null == t) return {};
      var r = {};
      for (var n in t)
        if ({}.hasOwnProperty.call(t, n)) {
          if (-1 !== e.indexOf(n)) continue;
          r[n] = t[n];
        }
      return r;
    }
    function r6() {
      return (r6 = Object.assign.bind()).apply(null, arguments);
    }
    function r8(t, e) {
      return (r8 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function r7(t, e) {
      ((t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        r8(t, e));
    }
    ((r3.displayName = "Animate"),
      (r3.defaultProps = {
        begin: 0,
        duration: 1e3,
        from: "",
        to: "",
        attributeName: "",
        easing: "ease",
        isActive: !0,
        canBegin: !0,
        steps: [],
        onAnimationEnd: function () {},
        onAnimationStart: function () {},
      }),
      (r3.propTypes = {
        from: eY.default.oneOfType([eY.default.object, eY.default.string]),
        to: eY.default.oneOfType([eY.default.object, eY.default.string]),
        attributeName: eY.default.string,
        duration: eY.default.number,
        begin: eY.default.number,
        easing: eY.default.oneOfType([eY.default.string, eY.default.func]),
        steps: eY.default.arrayOf(
          eY.default.shape({
            duration: eY.default.number.isRequired,
            style: eY.default.object.isRequired,
            easing: eY.default.oneOfType([
              eY.default.oneOf([
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "linear",
              ]),
              eY.default.func,
            ]),
            properties: eY.default.arrayOf("string"),
            onAnimationEnd: eY.default.func,
          }),
        ),
        children: eY.default.oneOfType([eY.default.node, eY.default.func]),
        isActive: eY.default.bool,
        canBegin: eY.default.bool,
        onAnimationEnd: eY.default.func,
        shouldReAnimate: eY.default.bool,
        onAnimationStart: eY.default.func,
        onAnimationReStart: eY.default.func,
      }));
    let r9 = f.default.createContext(null);
    function nt(t, e) {
      var r = Object.create(null);
      return (
        t &&
          f.Children.map(t, function (t) {
            return t;
          }).forEach(function (t) {
            r[t.key] = e && (0, f.isValidElement)(t) ? e(t) : t;
          }),
        r
      );
    }
    function ne(t, e, r) {
      return null != r[e] ? r[e] : t.props[e];
    }
    var nr =
        Object.values ||
        function (t) {
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        },
      nn = (function (t) {
        function e(e, r) {
          var n = t.call(this, e, r) || this,
            i = n.handleExited.bind(
              (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return t;
              })(n),
            );
          return (
            (n.state = {
              contextValue: { isMounting: !0 },
              handleExited: i,
              firstRender: !0,
            }),
            n
          );
        }
        r7(e, t);
        var r = e.prototype;
        return (
          (r.componentDidMount = function () {
            ((this.mounted = !0),
              this.setState({ contextValue: { isMounting: !1 } }));
          }),
          (r.componentWillUnmount = function () {
            this.mounted = !1;
          }),
          (e.getDerivedStateFromProps = function (t, e) {
            var r,
              n,
              i = e.children,
              o = e.handleExited;
            return {
              children: e.firstRender
                ? nt(t.children, function (e) {
                    return (0, f.cloneElement)(e, {
                      onExited: o.bind(null, e),
                      in: !0,
                      appear: ne(e, "appear", t),
                      enter: ne(e, "enter", t),
                      exit: ne(e, "exit", t),
                    });
                  })
                : (Object.keys(
                    (n = (function (t, e) {
                      function r(r) {
                        return r in e ? e[r] : t[r];
                      }
                      ((t = t || {}), (e = e || {}));
                      var n,
                        i = Object.create(null),
                        o = [];
                      for (var a in t)
                        a in e ? o.length && ((i[a] = o), (o = [])) : o.push(a);
                      var l = {};
                      for (var c in e) {
                        if (i[c])
                          for (n = 0; n < i[c].length; n++) {
                            var u = i[c][n];
                            l[i[c][n]] = r(u);
                          }
                        l[c] = r(c);
                      }
                      for (n = 0; n < o.length; n++) l[o[n]] = r(o[n]);
                      return l;
                    })(i, (r = nt(t.children)))),
                  ).forEach(function (e) {
                    var a = n[e];
                    if ((0, f.isValidElement)(a)) {
                      var l = e in i,
                        c = e in r,
                        u = i[e],
                        s = (0, f.isValidElement)(u) && !u.props.in;
                      c && (!l || s)
                        ? (n[e] = (0, f.cloneElement)(a, {
                            onExited: o.bind(null, a),
                            in: !0,
                            exit: ne(a, "exit", t),
                            enter: ne(a, "enter", t),
                          }))
                        : c || !l || s
                          ? c &&
                            l &&
                            (0, f.isValidElement)(u) &&
                            (n[e] = (0, f.cloneElement)(a, {
                              onExited: o.bind(null, a),
                              in: u.props.in,
                              exit: ne(a, "exit", t),
                              enter: ne(a, "enter", t),
                            }))
                          : (n[e] = (0, f.cloneElement)(a, { in: !1 }));
                    }
                  }),
                  n),
              firstRender: !1,
            };
          }),
          (r.handleExited = function (t, e) {
            var r = nt(this.props.children);
            t.key in r ||
              (t.props.onExited && t.props.onExited(e),
              this.mounted &&
                this.setState(function (e) {
                  var r = r6({}, e.children);
                  return (delete r[t.key], { children: r });
                }));
          }),
          (r.render = function () {
            var t = this.props,
              e = t.component,
              r = t.childFactory,
              n = r4(t, ["component", "childFactory"]),
              i = this.state.contextValue,
              o = nr(this.state.children).map(r);
            return (delete n.appear, delete n.enter, delete n.exit, null === e)
              ? f.default.createElement(r9.Provider, { value: i }, o)
              : f.default.createElement(
                  r9.Provider,
                  { value: i },
                  f.default.createElement(e, n, o),
                );
          }),
          e
        );
      })(f.default.Component);
    ((nn.propTypes = {}),
      (nn.defaultProps = {
        component: "div",
        childFactory: function (t) {
          return t;
        },
      }));
    var ni = t.i(74080),
      no = "unmounted",
      na = "exited",
      nl = "entering",
      nc = "entered",
      nu = "exiting",
      ns = (function (t) {
        function e(e, r) {
          var n,
            i = t.call(this, e, r) || this,
            o = r && !r.isMounting ? e.enter : e.appear;
          return (
            (i.appearStatus = null),
            e.in
              ? o
                ? ((n = na), (i.appearStatus = nl))
                : (n = nc)
              : (n = e.unmountOnExit || e.mountOnEnter ? no : na),
            (i.state = { status: n }),
            (i.nextCallback = null),
            i
          );
        }
        (r7(e, t),
          (e.getDerivedStateFromProps = function (t, e) {
            return t.in && e.status === no ? { status: na } : null;
          }));
        var r = e.prototype;
        return (
          (r.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (r.componentDidUpdate = function (t) {
            var e = null;
            if (t !== this.props) {
              var r = this.state.status;
              this.props.in
                ? r !== nl && r !== nc && (e = nl)
                : (r === nl || r === nc) && (e = nu);
            }
            this.updateStatus(!1, e);
          }),
          (r.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (r.getTimeouts = function () {
            var t,
              e,
              r,
              n = this.props.timeout;
            return (
              (t = e = r = n),
              null != n &&
                "number" != typeof n &&
                ((t = n.exit),
                (e = n.enter),
                (r = void 0 !== n.appear ? n.appear : e)),
              { exit: t, enter: e, appear: r }
            );
          }),
          (r.updateStatus = function (t, e) {
            if ((void 0 === t && (t = !1), null !== e))
              if ((this.cancelNextCallback(), e === nl)) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  var r = this.props.nodeRef
                    ? this.props.nodeRef.current
                    : ni.default.findDOMNode(this);
                  r && r.scrollTop;
                }
                this.performEnter(t);
              } else this.performExit();
            else
              this.props.unmountOnExit &&
                this.state.status === na &&
                this.setState({ status: no });
          }),
          (r.performEnter = function (t) {
            var e = this,
              r = this.props.enter,
              n = this.context ? this.context.isMounting : t,
              i = this.props.nodeRef ? [n] : [ni.default.findDOMNode(this), n],
              o = i[0],
              a = i[1],
              l = this.getTimeouts(),
              c = n ? l.appear : l.enter;
            (t || r) && 1
              ? (this.props.onEnter(o, a),
                this.safeSetState({ status: nl }, function () {
                  (e.props.onEntering(o, a),
                    e.onTransitionEnd(c, function () {
                      e.safeSetState({ status: nc }, function () {
                        e.props.onEntered(o, a);
                      });
                    }));
                }))
              : this.safeSetState({ status: nc }, function () {
                  e.props.onEntered(o);
                });
          }),
          (r.performExit = function () {
            var t = this,
              e = this.props.exit,
              r = this.getTimeouts(),
              n = this.props.nodeRef ? void 0 : ni.default.findDOMNode(this);
            e
              ? (this.props.onExit(n),
                this.safeSetState({ status: nu }, function () {
                  (t.props.onExiting(n),
                    t.onTransitionEnd(r.exit, function () {
                      t.safeSetState({ status: na }, function () {
                        t.props.onExited(n);
                      });
                    }));
                }))
              : this.safeSetState({ status: na }, function () {
                  t.props.onExited(n);
                });
          }),
          (r.cancelNextCallback = function () {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (r.safeSetState = function (t, e) {
            ((e = this.setNextCallback(e)), this.setState(t, e));
          }),
          (r.setNextCallback = function (t) {
            var e = this,
              r = !0;
            return (
              (this.nextCallback = function (n) {
                r && ((r = !1), (e.nextCallback = null), t(n));
              }),
              (this.nextCallback.cancel = function () {
                r = !1;
              }),
              this.nextCallback
            );
          }),
          (r.onTransitionEnd = function (t, e) {
            this.setNextCallback(e);
            var r = this.props.nodeRef
                ? this.props.nodeRef.current
                : ni.default.findDOMNode(this),
              n = null == t && !this.props.addEndListener;
            if (!r || n) return void setTimeout(this.nextCallback, 0);
            if (this.props.addEndListener) {
              var i = this.props.nodeRef
                  ? [this.nextCallback]
                  : [r, this.nextCallback],
                o = i[0],
                a = i[1];
              this.props.addEndListener(o, a);
            }
            null != t && setTimeout(this.nextCallback, t);
          }),
          (r.render = function () {
            var t = this.state.status;
            if (t === no) return null;
            var e = this.props,
              r = e.children,
              n =
                (e.in,
                e.mountOnEnter,
                e.unmountOnExit,
                e.appear,
                e.enter,
                e.exit,
                e.timeout,
                e.addEndListener,
                e.onEnter,
                e.onEntering,
                e.onEntered,
                e.onExit,
                e.onExiting,
                e.onExited,
                e.nodeRef,
                r4(e, [
                  "children",
                  "in",
                  "mountOnEnter",
                  "unmountOnExit",
                  "appear",
                  "enter",
                  "exit",
                  "timeout",
                  "addEndListener",
                  "onEnter",
                  "onEntering",
                  "onEntered",
                  "onExit",
                  "onExiting",
                  "onExited",
                  "nodeRef",
                ]));
            return f.default.createElement(
              r9.Provider,
              { value: null },
              "function" == typeof r
                ? r(t, n)
                : f.default.cloneElement(f.default.Children.only(r), n),
            );
          }),
          e
        );
      })(f.default.Component);
    function nf() {}
    ((ns.contextType = r9),
      (ns.propTypes = {}),
      (ns.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: nf,
        onEntering: nf,
        onEntered: nf,
        onExit: nf,
        onExiting: nf,
        onExited: nf,
      }),
      (ns.UNMOUNTED = no),
      (ns.EXITED = na),
      (ns.ENTERING = nl),
      (ns.ENTERED = nc),
      (ns.EXITING = nu));
    var np = ["children", "appearOptions", "enterOptions", "leaveOptions"];
    function nd(t) {
      return (nd =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function nh() {
      return (nh = Object.assign.bind()).apply(this, arguments);
    }
    function ny(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function nv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ny(Object(r), !0).forEach(function (e) {
              nx(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ny(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function nm(t, e) {
      return (nm = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function nb(t) {
      if (void 0 === t)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function ng(t) {
      return (ng = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function nx(t, e, r) {
      return (
        (e = nw(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function nw(t) {
      var e = (function (t, e) {
        if ("object" !== nd(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" !== nd(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" === nd(e) ? e : String(e);
    }
    var nO = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.steps,
          r = t.duration;
        return e && e.length
          ? e.reduce(function (t, e) {
              return (
                t +
                (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0)
              );
            }, 0)
          : Number.isFinite(r)
            ? r
            : 0;
      },
      nj = (function (t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        ((i.prototype = Object.create(t && t.prototype, {
          constructor: { value: i, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          t && nm(i, t));
        var e,
          r,
          n =
            ((e = (function () {
              if (
                "u" < typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                r = ng(i);
              return (
                (t = e
                  ? Reflect.construct(r, arguments, ng(this).constructor)
                  : r.apply(this, arguments)),
                (function (t, e) {
                  if (e && ("object" === nd(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      "Derived constructors may only return object or undefined",
                    );
                  return nb(t);
                })(this, t)
              );
            });
        function i() {
          var t;
          if (!(this instanceof i))
            throw TypeError("Cannot call a class as a function");
          return (
            nx(nb((t = n.call(this))), "handleEnter", function (e, r) {
              var n = t.props,
                i = n.appearOptions,
                o = n.enterOptions;
              t.handleStyleActive(r ? i : o);
            }),
            nx(nb(t), "handleExit", function () {
              var e = t.props.leaveOptions;
              t.handleStyleActive(e);
            }),
            (t.state = { isActive: !1 }),
            t
          );
        }
        return (
          (r = [
            {
              key: "handleStyleActive",
              value: function (t) {
                if (t) {
                  var e = t.onAnimationEnd
                    ? function () {
                        t.onAnimationEnd();
                      }
                    : null;
                  this.setState(
                    nv(nv({}, t), {}, { onAnimationEnd: e, isActive: !0 }),
                  );
                }
              },
            },
            {
              key: "parseTimeout",
              value: function () {
                var t = this.props,
                  e = t.appearOptions,
                  r = t.enterOptions,
                  n = t.leaveOptions;
                return nO(e) + nO(r) + nO(n);
              },
            },
            {
              key: "render",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.children,
                  n =
                    (e.appearOptions,
                    e.enterOptions,
                    e.leaveOptions,
                    (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        i = (function (t, e) {
                          if (null == t) return {};
                          var r,
                            n,
                            i = {},
                            o = Object.keys(t);
                          for (n = 0; n < o.length; n++)
                            ((r = o[n]), e.indexOf(r) >= 0 || (i[r] = t[r]));
                          return i;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < o.length; n++)
                          ((r = o[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r,
                              ) &&
                              (i[r] = t[r]));
                      }
                      return i;
                    })(e, np));
                return f.default.createElement(
                  ns,
                  nh({}, n, {
                    onEnter: this.handleEnter,
                    onExit: this.handleExit,
                    timeout: this.parseTimeout(),
                  }),
                  function () {
                    return f.default.createElement(
                      r3,
                      t.state,
                      f.Children.only(r),
                    );
                  },
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              ((n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, nw(n.key), n));
            }
          })(i.prototype, r),
          Object.defineProperty(i, "prototype", { writable: !1 }),
          i
        );
      })(f.Component);
    function nS(t) {
      var e = t.component,
        r = t.children,
        n = t.appear,
        i = t.enter,
        o = t.leave;
      return f.default.createElement(
        nn,
        { component: e },
        f.Children.map(r, function (t, e) {
          return f.default.createElement(
            nj,
            {
              appearOptions: n,
              enterOptions: i,
              leaveOptions: o,
              key: "child-".concat(e),
            },
            t,
          );
        }),
      );
    }
    function nk(t) {
      return (nk =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function nP() {
      return (nP = Object.assign.bind()).apply(this, arguments);
    }
    function nA(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function nE(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function n_(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? nE(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != nk(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != nk(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == nk(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : nE(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    ((nj.propTypes = {
      appearOptions: eY.default.object,
      enterOptions: eY.default.object,
      leaveOptions: eY.default.object,
      children: eY.default.element,
    }),
      (nS.propTypes = {
        appear: eY.default.object,
        enter: eY.default.object,
        leave: eY.default.object,
        children: eY.default.oneOfType([eY.default.array, eY.default.element]),
        component: eY.default.any,
      }),
      (nS.defaultProps = { component: "span" }));
    var nM = function (t, e, r, n, i) {
        var o,
          a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
          l = n >= 0 ? 1 : -1,
          c = r >= 0 ? 1 : -1,
          u = +((n >= 0 && r >= 0) || (n < 0 && r < 0));
        if (a > 0 && i instanceof Array) {
          for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
            s[f] = i[f] > a ? a : i[f];
          ((o = "M".concat(t, ",").concat(e + l * s[0])),
            s[0] > 0 &&
              (o += "A "
                .concat(s[0], ",")
                .concat(s[0], ",0,0,")
                .concat(u, ",")
                .concat(t + c * s[0], ",")
                .concat(e)),
            (o += "L ".concat(t + r - c * s[1], ",").concat(e)),
            s[1] > 0 &&
              (o += "A "
                .concat(s[1], ",")
                .concat(s[1], ",0,0,")
                .concat(u, ",\n        ")
                .concat(t + r, ",")
                .concat(e + l * s[1])),
            (o += "L ".concat(t + r, ",").concat(e + n - l * s[2])),
            s[2] > 0 &&
              (o += "A "
                .concat(s[2], ",")
                .concat(s[2], ",0,0,")
                .concat(u, ",\n        ")
                .concat(t + r - c * s[2], ",")
                .concat(e + n)),
            (o += "L ".concat(t + c * s[3], ",").concat(e + n)),
            s[3] > 0 &&
              (o += "A "
                .concat(s[3], ",")
                .concat(s[3], ",0,0,")
                .concat(u, ",\n        ")
                .concat(t, ",")
                .concat(e + n - l * s[3])),
            (o += "Z"));
        } else if (a > 0 && i === +i && i > 0) {
          var p = Math.min(a, i);
          o = "M "
            .concat(t, ",")
            .concat(e + l * p, "\n            A ")
            .concat(p, ",")
            .concat(p, ",0,0,")
            .concat(u, ",")
            .concat(t + c * p, ",")
            .concat(e, "\n            L ")
            .concat(t + r - c * p, ",")
            .concat(e, "\n            A ")
            .concat(p, ",")
            .concat(p, ",0,0,")
            .concat(u, ",")
            .concat(t + r, ",")
            .concat(e + l * p, "\n            L ")
            .concat(t + r, ",")
            .concat(e + n - l * p, "\n            A ")
            .concat(p, ",")
            .concat(p, ",0,0,")
            .concat(u, ",")
            .concat(t + r - c * p, ",")
            .concat(e + n, "\n            L ")
            .concat(t + c * p, ",")
            .concat(e + n, "\n            A ")
            .concat(p, ",")
            .concat(p, ",0,0,")
            .concat(u, ",")
            .concat(t, ",")
            .concat(e + n - l * p, " Z");
        } else
          o = "M "
            .concat(t, ",")
            .concat(e, " h ")
            .concat(r, " v ")
            .concat(n, " h ")
            .concat(-r, " Z");
        return o;
      },
      nT = function (t, e) {
        if (!t || !e) return !1;
        var r = t.x,
          n = t.y,
          i = e.x,
          o = e.y,
          a = e.width,
          l = e.height;
        if (Math.abs(a) > 0 && Math.abs(l) > 0) {
          var c = Math.min(i, i + a),
            u = Math.max(i, i + a),
            s = Math.min(o, o + l),
            f = Math.max(o, o + l);
          return r >= c && r <= u && n >= s && n <= f;
        }
        return !1;
      },
      nN = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
      },
      nC = function (t) {
        var e,
          r = n_(n_({}, nN), t),
          n = (0, f.useRef)(),
          i =
            (function (t) {
              if (Array.isArray(t)) return t;
            })((e = (0, f.useState)(-1))) ||
            (function (t) {
              var e =
                null == t
                  ? null
                  : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != e) {
                var r,
                  n,
                  i,
                  o,
                  a = [],
                  l = !0,
                  c = !1;
                try {
                  ((i = (e = e.call(t)).next), !1);
                  for (
                    ;
                    !(l = (r = i.call(e)).done) &&
                    (a.push(r.value), 2 !== a.length);
                    l = !0
                  );
                } catch (t) {
                  ((c = !0), (n = t));
                } finally {
                  try {
                    if (
                      !l &&
                      null != e.return &&
                      ((o = e.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw n;
                  }
                }
                return a;
              }
            })(e) ||
            (function (t) {
              if (t) {
                if ("string" == typeof t) return nA(t, 2);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === e && t.constructor && (e = t.constructor.name),
                  "Map" === e || "Set" === e)
                )
                  return Array.from(t);
                if (
                  "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return nA(t, 2);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          o = i[0],
          a = i[1];
        (0, f.useEffect)(function () {
          if (n.current && n.current.getTotalLength)
            try {
              var t = n.current.getTotalLength();
              t && a(t);
            } catch (t) {}
        }, []);
        var l = r.x,
          c = r.y,
          u = r.width,
          s = r.height,
          p = r.radius,
          d = r.className,
          h = r.animationEasing,
          y = r.animationDuration,
          v = r.animationBegin,
          m = r.isAnimationActive,
          b = r.isUpdateAnimationActive;
        if (l !== +l || c !== +c || u !== +u || s !== +s || 0 === u || 0 === s)
          return null;
        var g = P("recharts-rectangle", d);
        return b
          ? f.default.createElement(
              r3,
              {
                canBegin: o > 0,
                from: { width: u, height: s, x: l, y: c },
                to: { width: u, height: s, x: l, y: c },
                duration: y,
                animationEasing: h,
                isActive: b,
              },
              function (t) {
                var e = t.width,
                  i = t.height,
                  a = t.x,
                  l = t.y;
                return f.default.createElement(
                  r3,
                  {
                    canBegin: o > 0,
                    from: "0px ".concat(-1 === o ? 1 : o, "px"),
                    to: "".concat(o, "px 0px"),
                    attributeName: "strokeDasharray",
                    begin: v,
                    duration: y,
                    isActive: m,
                    easing: h,
                  },
                  f.default.createElement(
                    "path",
                    nP({}, td(r, !0), {
                      className: g,
                      d: nM(a, l, e, i, p),
                      ref: n,
                    }),
                  ),
                );
              },
            )
          : f.default.createElement(
              "path",
              nP({}, td(r, !0), { className: g, d: nM(l, c, u, s, p) }),
            );
      };
    function nD(t, e) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(e).domain(t);
      }
      return this;
    }
    function nI(t, e) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" == typeof t ? this.interpolator(t) : this.range(t);
          break;
        default:
          (this.domain(t),
            "function" == typeof e ? this.interpolator(e) : this.range(e));
      }
      return this;
    }
    class nL extends Map {
      constructor(t, e = nR) {
        if (
          (super(),
          Object.defineProperties(this, {
            _intern: { value: new Map() },
            _key: { value: e },
          }),
          null != t)
        )
          for (const [e, r] of t) this.set(e, r);
      }
      get(t) {
        return super.get(nB(this, t));
      }
      has(t) {
        return super.has(nB(this, t));
      }
      set(t, e) {
        return super.set(
          (function ({ _intern: t, _key: e }, r) {
            let n = e(r);
            return t.has(n) ? t.get(n) : (t.set(n, r), r);
          })(this, t),
          e,
        );
      }
      delete(t) {
        return super.delete(
          (function ({ _intern: t, _key: e }, r) {
            let n = e(r);
            return (t.has(n) && ((r = t.get(n)), t.delete(n)), r);
          })(this, t),
        );
      }
    }
    function nB({ _intern: t, _key: e }, r) {
      let n = e(r);
      return t.has(n) ? t.get(n) : r;
    }
    function nR(t) {
      return null !== t && "object" == typeof t ? t.valueOf() : t;
    }
    let nz = Symbol("implicit");
    function nF() {
      var t = new nL(),
        e = [],
        r = [],
        n = nz;
      function i(i) {
        let o = t.get(i);
        if (void 0 === o) {
          if (n !== nz) return n;
          t.set(i, (o = e.push(i) - 1));
        }
        return r[o % r.length];
      }
      return (
        (i.domain = function (r) {
          if (!arguments.length) return e.slice();
          for (let n of ((e = []), (t = new nL()), r))
            t.has(n) || t.set(n, e.push(n) - 1);
          return i;
        }),
        (i.range = function (t) {
          return arguments.length ? ((r = Array.from(t)), i) : r.slice();
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((n = t), i) : n;
        }),
        (i.copy = function () {
          return nF(e, r).unknown(n);
        }),
        nD.apply(i, arguments),
        i
      );
    }
    function nU() {
      var t,
        e,
        r = nF().unknown(void 0),
        n = r.domain,
        i = r.range,
        o = 0,
        a = 1,
        l = !1,
        c = 0,
        u = 0,
        s = 0.5;
      function f() {
        var r = n().length,
          f = a < o,
          p = f ? a : o,
          d = f ? o : a;
        ((t = (d - p) / Math.max(1, r - c + 2 * u)),
          l && (t = Math.floor(t)),
          (p += (d - p - t * (r - c)) * s),
          (e = t * (1 - c)),
          l && ((p = Math.round(p)), (e = Math.round(e))));
        var h = (function (t, e, r) {
          ((t *= 1),
            (e *= 1),
            (r =
              (i = arguments.length) < 2
                ? ((e = t), (t = 0), 1)
                : i < 3
                  ? 1
                  : +r));
          for (
            var n = -1,
              i = 0 | Math.max(0, Math.ceil((e - t) / r)),
              o = Array(i);
            ++n < i;
          )
            o[n] = t + n * r;
          return o;
        })(r).map(function (e) {
          return p + t * e;
        });
        return i(f ? h.reverse() : h);
      }
      return (
        delete r.unknown,
        (r.domain = function (t) {
          return arguments.length ? (n(t), f()) : n();
        }),
        (r.range = function (t) {
          return arguments.length
            ? (([o, a] = t), (o *= 1), (a *= 1), f())
            : [o, a];
        }),
        (r.rangeRound = function (t) {
          return (([o, a] = t), (o *= 1), (a *= 1), (l = !0), f());
        }),
        (r.bandwidth = function () {
          return e;
        }),
        (r.step = function () {
          return t;
        }),
        (r.round = function (t) {
          return arguments.length ? ((l = !!t), f()) : l;
        }),
        (r.padding = function (t) {
          return arguments.length ? ((c = Math.min(1, (u = +t))), f()) : c;
        }),
        (r.paddingInner = function (t) {
          return arguments.length ? ((c = Math.min(1, t)), f()) : c;
        }),
        (r.paddingOuter = function (t) {
          return arguments.length ? ((u = +t), f()) : u;
        }),
        (r.align = function (t) {
          return arguments.length
            ? ((s = Math.max(0, Math.min(1, t))), f())
            : s;
        }),
        (r.copy = function () {
          return nU(n(), [o, a])
            .round(l)
            .paddingInner(c)
            .paddingOuter(u)
            .align(s);
        }),
        nD.apply(f(), arguments)
      );
    }
    function n$() {
      return (function t(e) {
        var r = e.copy;
        return (
          (e.padding = e.paddingOuter),
          delete e.paddingInner,
          delete e.paddingOuter,
          (e.copy = function () {
            return t(r());
          }),
          e
        );
      })(nU.apply(null, arguments).paddingInner(1));
    }
    function nW(t) {
      return (nW =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function nV(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function nq(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? nV(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != nW(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != nW(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == nW(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : nV(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    var nH = { widthCache: {}, cacheCount: 0 },
      nX = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre",
      },
      nK = "recharts_measurement_span",
      nG = function (t) {
        var e,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == t || tq.isSsr) return { width: 0, height: 0 };
        var n =
            (Object.keys((e = nq({}, r))).forEach(function (t) {
              e[t] || delete e[t];
            }),
            e),
          i = JSON.stringify({ text: t, copyStyle: n });
        if (nH.widthCache[i]) return nH.widthCache[i];
        try {
          var o = document.getElementById(nK);
          o ||
            ((o = document.createElement("span")).setAttribute("id", nK),
            o.setAttribute("aria-hidden", "true"),
            document.body.appendChild(o));
          var a = nq(nq({}, nX), n);
          (Object.assign(o.style, a), (o.textContent = "".concat(t)));
          var l = o.getBoundingClientRect(),
            c = { width: l.width, height: l.height };
          return (
            (nH.widthCache[i] = c),
            ++nH.cacheCount > 2e3 &&
              ((nH.cacheCount = 0), (nH.widthCache = {})),
            c
          );
        } catch (t) {
          return { width: 0, height: 0 };
        }
      };
    function nY(t) {
      return (nY =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function nZ(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var r =
            null == t
              ? null
              : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (null != r) {
            var n,
              i,
              o,
              a,
              l = [],
              c = !0,
              u = !1;
            try {
              if (((o = (r = r.call(t)).next), 0 === e)) {
                if (Object(r) !== r) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (n = o.call(r)).done) &&
                  (l.push(n.value), l.length !== e);
                  c = !0
                );
            } catch (t) {
              ((u = !0), (i = t));
            } finally {
              try {
                if (
                  !c &&
                  null != r.return &&
                  ((a = r.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw i;
              }
            }
            return l;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return nJ(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return nJ(t, e);
          }
        })(t, e) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function nJ(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function nQ(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(
            t,
            (function (t) {
              var e = (function (t, e) {
                if ("object" != nY(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || "default");
                  if ("object" != nY(n)) return n;
                  throw TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return ("string" === e ? String : Number)(t);
              })(t, "string");
              return "symbol" == nY(e) ? e : e + "";
            })(n.key),
            n,
          ));
      }
    }
    var n0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      n1 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      n2 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      n5 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      n3 = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1,
      },
      n4 = Object.keys(n3),
      n6 = (function () {
        var t, e;
        function r(t, e) {
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          ((this.num = t),
            (this.unit = e),
            (this.num = t),
            (this.unit = e),
            Number.isNaN(t) && (this.unit = ""),
            "" === e || n2.test(e) || ((this.num = NaN), (this.unit = "")),
            n4.includes(e) && ((this.num = t * n3[e]), (this.unit = "px")));
        }
        return (
          (t = [
            {
              key: "add",
              value: function (t) {
                return this.unit !== t.unit
                  ? new r(NaN, "")
                  : new r(this.num + t.num, this.unit);
              },
            },
            {
              key: "subtract",
              value: function (t) {
                return this.unit !== t.unit
                  ? new r(NaN, "")
                  : new r(this.num - t.num, this.unit);
              },
            },
            {
              key: "multiply",
              value: function (t) {
                return "" !== this.unit && "" !== t.unit && this.unit !== t.unit
                  ? new r(NaN, "")
                  : new r(this.num * t.num, this.unit || t.unit);
              },
            },
            {
              key: "divide",
              value: function (t) {
                return "" !== this.unit && "" !== t.unit && this.unit !== t.unit
                  ? new r(NaN, "")
                  : new r(this.num / t.num, this.unit || t.unit);
              },
            },
            {
              key: "toString",
              value: function () {
                return "".concat(this.num).concat(this.unit);
              },
            },
            {
              key: "isNaN",
              value: function () {
                return Number.isNaN(this.num);
              },
            },
          ]),
          (e = [
            {
              key: "parse",
              value: function (t) {
                var e,
                  n = nZ(null != (e = n5.exec(t)) ? e : [], 3),
                  i = n[1],
                  o = n[2];
                return new r(parseFloat(i), null != o ? o : "");
              },
            },
          ]),
          t && nQ(r.prototype, t),
          e && nQ(r, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })();
    function n8(t) {
      if (t.includes("NaN")) return "NaN";
      for (var e = t; e.includes("*") || e.includes("/"); ) {
        var r,
          n = nZ(null != (r = n0.exec(e)) ? r : [], 4),
          i = n[1],
          o = n[2],
          a = n[3],
          l = n6.parse(null != i ? i : ""),
          c = n6.parse(null != a ? a : ""),
          u = "*" === o ? l.multiply(c) : l.divide(c);
        if (u.isNaN()) return "NaN";
        e = e.replace(n0, u.toString());
      }
      for (; e.includes("+") || /.-\d+(?:\.\d+)?/.test(e); ) {
        var s,
          f = nZ(null != (s = n1.exec(e)) ? s : [], 4),
          p = f[1],
          d = f[2],
          h = f[3],
          y = n6.parse(null != p ? p : ""),
          v = n6.parse(null != h ? h : ""),
          m = "+" === d ? y.add(v) : y.subtract(v);
        if (m.isNaN()) return "NaN";
        e = e.replace(n1, m.toString());
      }
      return e;
    }
    var n7 = /\(([^()]*)\)/;
    function n9(t) {
      var e = (function (t) {
        try {
          var e;
          return (
            (e = t.replace(/\s+/g, "")),
            (e = (function (t) {
              for (var e = t; e.includes("("); ) {
                var r = nZ(n7.exec(e), 2)[1];
                e = e.replace(n7, n8(r));
              }
              return e;
            })(e)),
            (e = n8(e))
          );
        } catch (t) {
          return "NaN";
        }
      })(t.slice(5, -1));
      return "NaN" === e ? "" : e;
    }
    var it = [
        "x",
        "y",
        "lineHeight",
        "capHeight",
        "scaleToFit",
        "textAnchor",
        "verticalAnchor",
        "fill",
      ],
      ie = ["dx", "dy", "angle", "className", "breakAll"];
    function ir() {
      return (ir = Object.assign.bind()).apply(this, arguments);
    }
    function ii(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    function io(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var r =
            null == t
              ? null
              : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (null != r) {
            var n,
              i,
              o,
              a,
              l = [],
              c = !0,
              u = !1;
            try {
              if (((o = (r = r.call(t)).next), 0 === e)) {
                if (Object(r) !== r) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (n = o.call(r)).done) &&
                  (l.push(n.value), l.length !== e);
                  c = !0
                );
            } catch (t) {
              ((u = !0), (i = t));
            } finally {
              try {
                if (
                  !c &&
                  null != r.return &&
                  ((a = r.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw i;
              }
            }
            return l;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return ia(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r)
            )
              return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return ia(t, e);
          }
        })(t, e) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function ia(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var il = /[ \f\n\r\t\v\u2028\u2029]+/,
      ic = function (t) {
        var e = t.children,
          r = t.breakAll,
          n = t.style;
        try {
          var i = [];
          (0, x.default)(e) ||
            (i = r ? e.toString().split("") : e.toString().split(il));
          var o = i.map(function (t) {
              return { word: t, width: nG(t, n).width };
            }),
            a = r ? 0 : nG(" ", n).width;
          return { wordsWithComputedWidth: o, spaceWidth: a };
        } catch (t) {
          return null;
        }
      },
      iu = function (t, e, r, n, i) {
        var o,
          a = t.maxLines,
          l = t.children,
          c = t.style,
          u = t.breakAll,
          s = I(a),
          f = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return t.reduce(function (t, e) {
              var o = e.word,
                a = e.width,
                l = t[t.length - 1];
              return (
                l && (null == n || i || l.width + a + r < Number(n))
                  ? (l.words.push(o), (l.width += a + r))
                  : t.push({ words: [o], width: a }),
                t
              );
            }, []);
          },
          p = f(e);
        if (!s) return p;
        for (
          var d = function (t) {
              var e = f(
                ic({ breakAll: u, style: c, children: l.slice(0, t) + "…" })
                  .wordsWithComputedWidth,
              );
              return [
                e.length > a ||
                  e.reduce(function (t, e) {
                    return t.width > e.width ? t : e;
                  }).width > Number(n),
                e,
              ];
            },
            h = 0,
            y = l.length - 1,
            v = 0;
          h <= y && v <= l.length - 1;
        ) {
          var m = Math.floor((h + y) / 2),
            b = io(d(m - 1), 2),
            g = b[0],
            x = b[1],
            w = io(d(m), 1)[0];
          if ((g || w || (h = m + 1), g && w && (y = m - 1), !g && w)) {
            o = x;
            break;
          }
          v++;
        }
        return o || p;
      },
      is = function (t) {
        return [{ words: (0, x.default)(t) ? [] : t.toString().split(il) }];
      },
      ip = function (t) {
        var e = t.width,
          r = t.scaleToFit,
          n = t.children,
          i = t.style,
          o = t.breakAll,
          a = t.maxLines;
        if ((e || r) && !tq.isSsr) {
          var l = ic({ breakAll: o, children: n, style: i });
          if (!l) return is(n);
          var c = l.wordsWithComputedWidth,
            u = l.spaceWidth;
          return iu(
            { breakAll: o, children: n, maxLines: a, style: i },
            c,
            u,
            e,
            r,
          );
        }
        return is(n);
      },
      id = "#808080",
      ih = function (t) {
        var e,
          r = t.x,
          n = void 0 === r ? 0 : r,
          i = t.y,
          o = void 0 === i ? 0 : i,
          a = t.lineHeight,
          l = void 0 === a ? "1em" : a,
          c = t.capHeight,
          u = void 0 === c ? "0.71em" : c,
          s = t.scaleToFit,
          p = void 0 !== s && s,
          d = t.textAnchor,
          h = t.verticalAnchor,
          y = t.fill,
          v = void 0 === y ? id : y,
          m = ii(t, it),
          b = (0, f.useMemo)(
            function () {
              return ip({
                breakAll: m.breakAll,
                children: m.children,
                maxLines: m.maxLines,
                scaleToFit: p,
                style: m.style,
                width: m.width,
              });
            },
            [m.breakAll, m.children, m.maxLines, p, m.style, m.width],
          ),
          g = m.dx,
          x = m.dy,
          w = m.angle,
          O = m.className,
          j = m.breakAll,
          S = ii(m, ie);
        if (!L(n) || !L(o)) return null;
        var k = n + (I(g) ? g : 0),
          A = o + (I(x) ? x : 0);
        switch (void 0 === h ? "end" : h) {
          case "start":
            e = n9("calc(".concat(u, ")"));
            break;
          case "middle":
            e = n9(
              "calc("
                .concat((b.length - 1) / 2, " * -")
                .concat(l, " + (")
                .concat(u, " / 2))"),
            );
            break;
          default:
            e = n9("calc(".concat(b.length - 1, " * -").concat(l, ")"));
        }
        var E = [];
        if (p) {
          var _ = b[0].width,
            M = m.width;
          E.push("scale(".concat((I(M) ? M / _ : 1) / _, ")"));
        }
        return (
          w && E.push("rotate(".concat(w, ", ").concat(k, ", ").concat(A, ")")),
          E.length && (S.transform = E.join(" ")),
          f.default.createElement(
            "text",
            ir({}, td(S, !0), {
              x: k,
              y: A,
              className: P("recharts-text", O),
              textAnchor: void 0 === d ? "start" : d,
              fill: v.includes("url") ? id : v,
            }),
            b.map(function (t, r) {
              var n = t.words.join(j ? "" : " ");
              return f.default.createElement(
                "tspan",
                { x: k, dy: 0 === r ? e : l, key: "".concat(n, "-").concat(r) },
                n,
              );
            }),
          )
        );
      };
    (t.s([], 25212), t.i(25212), t.s([], 67155), t.i(67155));
    let iy = Math.sqrt(50),
      iv = Math.sqrt(10),
      im = Math.sqrt(2);
    function ib(t, e, r) {
      let n,
        i,
        o,
        a = (e - t) / Math.max(0, r),
        l = Math.floor(Math.log10(a)),
        c = a / Math.pow(10, l),
        u = c >= iy ? 10 : c >= iv ? 5 : c >= im ? 2 : 1;
      return (l < 0
        ? ((n = Math.round(t * (o = Math.pow(10, -l) / u))),
          (i = Math.round(e * o)),
          n / o < t && ++n,
          i / o > e && --i,
          (o = -o))
        : ((n = Math.round(t / (o = Math.pow(10, l) * u))),
          (i = Math.round(e / o)),
          n * o < t && ++n,
          i * o > e && --i),
      i < n && 0.5 <= r && r < 2)
        ? ib(t, e, 2 * r)
        : [n, i, o];
    }
    function ig(t, e, r) {
      if (((e *= 1), (t *= 1), !((r *= 1) > 0))) return [];
      if (t === e) return [t];
      let n = e < t,
        [i, o, a] = n ? ib(e, t, r) : ib(t, e, r);
      if (!(o >= i)) return [];
      let l = o - i + 1,
        c = Array(l);
      if (n)
        if (a < 0) for (let t = 0; t < l; ++t) c[t] = -((o - t) / a);
        else for (let t = 0; t < l; ++t) c[t] = (o - t) * a;
      else if (a < 0) for (let t = 0; t < l; ++t) c[t] = -((i + t) / a);
      else for (let t = 0; t < l; ++t) c[t] = (i + t) * a;
      return c;
    }
    function ix(t, e, r) {
      return ib((t *= 1), (e *= 1), (r *= 1))[2];
    }
    function iw(t, e, r) {
      ((e *= 1), (t *= 1), (r *= 1));
      let n = e < t,
        i = n ? ix(e, t, r) : ix(t, e, r);
      return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i);
    }
    function iO(t, e) {
      return null == t || null == e
        ? NaN
        : t < e
          ? -1
          : t > e
            ? 1
            : t >= e
              ? 0
              : NaN;
    }
    function ij(t, e) {
      return null == t || null == e
        ? NaN
        : e < t
          ? -1
          : e > t
            ? 1
            : e >= t
              ? 0
              : NaN;
    }
    function iS(t) {
      let e, r, n;
      function i(t, n, o = 0, a = t.length) {
        if (o < a) {
          if (0 !== e(n, n)) return a;
          do {
            let e = (o + a) >>> 1;
            0 > r(t[e], n) ? (o = e + 1) : (a = e);
          } while (o < a);
        }
        return o;
      }
      return (
        2 !== t.length
          ? ((e = iO), (r = (e, r) => iO(t(e), r)), (n = (e, r) => t(e) - r))
          : ((e = t === iO || t === ij ? t : ik), (r = t), (n = t)),
        {
          left: i,
          center: function (t, e, r = 0, o = t.length) {
            let a = i(t, e, r, o - 1);
            return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a;
          },
          right: function (t, n, i = 0, o = t.length) {
            if (i < o) {
              if (0 !== e(n, n)) return o;
              do {
                let e = (i + o) >>> 1;
                0 >= r(t[e], n) ? (i = e + 1) : (o = e);
              } while (i < o);
            }
            return i;
          },
        }
      );
    }
    function ik() {
      return 0;
    }
    function iP(t) {
      return null === t ? NaN : +t;
    }
    let iA = iS(iO),
      iE = iA.right;
    function i_(t, e, r) {
      ((t.prototype = e.prototype = r), (r.constructor = t));
    }
    function iM(t, e) {
      var r = Object.create(t.prototype);
      for (var n in e) r[n] = e[n];
      return r;
    }
    function iT() {}
    (iA.left, iS(iP).center);
    var iN = "\\s*([+-]?\\d+)\\s*",
      iC = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      iD = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      iI = /^#([0-9a-f]{3,8})$/,
      iL = RegExp(`^rgb\\(${iN},${iN},${iN}\\)$`),
      iB = RegExp(`^rgb\\(${iD},${iD},${iD}\\)$`),
      iR = RegExp(`^rgba\\(${iN},${iN},${iN},${iC}\\)$`),
      iz = RegExp(`^rgba\\(${iD},${iD},${iD},${iC}\\)$`),
      iF = RegExp(`^hsl\\(${iC},${iD},${iD}\\)$`),
      iU = RegExp(`^hsla\\(${iC},${iD},${iD},${iC}\\)$`),
      i$ = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0,
        blanchedalmond: 0xffebcd,
        blue: 255,
        blueviolet: 9055202,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 6591981,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 25600,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 9109504,
        darksalmon: 0xe9967a,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 0xff1493,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 2263842,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 8421504,
        green: 32768,
        greenyellow: 0xadff2f,
        grey: 8421504,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 4915330,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 8190976,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 9498256,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 65280,
        limegreen: 3329330,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 0xba55d3,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 0xc71585,
        midnightblue: 1644912,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 128,
        oldlace: 0xfdf5e6,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 3050327,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 0xfffafa,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 0xd2b48c,
        teal: 32896,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 4251856,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32,
      };
    function iW() {
      return this.rgb().formatHex();
    }
    function iV() {
      return this.rgb().formatRgb();
    }
    function iq(t) {
      var e, r;
      return (
        (t = (t + "").trim().toLowerCase()),
        (e = iI.exec(t))
          ? ((r = e[1].length),
            (e = parseInt(e[1], 16)),
            6 === r
              ? iH(e)
              : 3 === r
                ? new iG(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1,
                  )
                : 8 === r
                  ? iX(
                      (e >> 24) & 255,
                      (e >> 16) & 255,
                      (e >> 8) & 255,
                      (255 & e) / 255,
                    )
                  : 4 === r
                    ? iX(
                        ((e >> 12) & 15) | ((e >> 8) & 240),
                        ((e >> 8) & 15) | ((e >> 4) & 240),
                        ((e >> 4) & 15) | (240 & e),
                        (((15 & e) << 4) | (15 & e)) / 255,
                      )
                    : null)
          : (e = iL.exec(t))
            ? new iG(e[1], e[2], e[3], 1)
            : (e = iB.exec(t))
              ? new iG(
                  (255 * e[1]) / 100,
                  (255 * e[2]) / 100,
                  (255 * e[3]) / 100,
                  1,
                )
              : (e = iR.exec(t))
                ? iX(e[1], e[2], e[3], e[4])
                : (e = iz.exec(t))
                  ? iX(
                      (255 * e[1]) / 100,
                      (255 * e[2]) / 100,
                      (255 * e[3]) / 100,
                      e[4],
                    )
                  : (e = iF.exec(t))
                    ? i1(e[1], e[2] / 100, e[3] / 100, 1)
                    : (e = iU.exec(t))
                      ? i1(e[1], e[2] / 100, e[3] / 100, e[4])
                      : i$.hasOwnProperty(t)
                        ? iH(i$[t])
                        : "transparent" === t
                          ? new iG(NaN, NaN, NaN, 0)
                          : null
      );
    }
    function iH(t) {
      return new iG((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function iX(t, e, r, n) {
      return (n <= 0 && (t = e = r = NaN), new iG(t, e, r, n));
    }
    function iK(t, e, r, n) {
      var i;
      return 1 == arguments.length
        ? ((i = t) instanceof iT || (i = iq(i)), i)
          ? new iG((i = i.rgb()).r, i.g, i.b, i.opacity)
          : new iG()
        : new iG(t, e, r, null == n ? 1 : n);
    }
    function iG(t, e, r, n) {
      ((this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n));
    }
    function iY() {
      return `#${i0(this.r)}${i0(this.g)}${i0(this.b)}`;
    }
    function iZ() {
      let t = iJ(this.opacity);
      return `${1 === t ? "rgb(" : "rgba("}${iQ(this.r)}, ${iQ(this.g)}, ${iQ(this.b)}${1 === t ? ")" : `, ${t})`}`;
    }
    function iJ(t) {
      return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
    }
    function iQ(t) {
      return Math.max(0, Math.min(255, Math.round(t) || 0));
    }
    function i0(t) {
      return ((t = iQ(t)) < 16 ? "0" : "") + t.toString(16);
    }
    function i1(t, e, r, n) {
      return (
        n <= 0
          ? (t = e = r = NaN)
          : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
        new i5(t, e, r, n)
      );
    }
    function i2(t) {
      if (t instanceof i5) return new i5(t.h, t.s, t.l, t.opacity);
      if ((t instanceof iT || (t = iq(t)), !t)) return new i5();
      if (t instanceof i5) return t;
      var e = (t = t.rgb()).r / 255,
        r = t.g / 255,
        n = t.b / 255,
        i = Math.min(e, r, n),
        o = Math.max(e, r, n),
        a = NaN,
        l = o - i,
        c = (o + i) / 2;
      return (
        l
          ? ((a =
              e === o
                ? (r - n) / l + (r < n) * 6
                : r === o
                  ? (n - e) / l + 2
                  : (e - r) / l + 4),
            (l /= c < 0.5 ? o + i : 2 - o - i),
            (a *= 60))
          : (l = c > 0 && c < 1 ? 0 : a),
        new i5(a, l, c, t.opacity)
      );
    }
    function i5(t, e, r, n) {
      ((this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n));
    }
    function i3(t) {
      return (t = (t || 0) % 360) < 0 ? t + 360 : t;
    }
    function i4(t) {
      return Math.max(0, Math.min(1, t || 0));
    }
    function i6(t, e, r) {
      return (
        (t < 60
          ? e + ((r - e) * t) / 60
          : t < 180
            ? r
            : t < 240
              ? e + ((r - e) * (240 - t)) / 60
              : e) * 255
      );
    }
    function i8(t, e, r, n, i) {
      var o = t * t,
        a = o * t;
      return (
        ((1 - 3 * t + 3 * o - a) * e +
          (4 - 6 * o + 3 * a) * r +
          (1 + 3 * t + 3 * o - 3 * a) * n +
          a * i) /
        6
      );
    }
    (i_(iT, iq, {
      copy(t) {
        return Object.assign(new this.constructor(), this, t);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: iW,
      formatHex: iW,
      formatHex8: function () {
        return this.rgb().formatHex8();
      },
      formatHsl: function () {
        return i2(this).formatHsl();
      },
      formatRgb: iV,
      toString: iV,
    }),
      i_(
        iG,
        iK,
        iM(iT, {
          brighter(t) {
            return (
              (t =
                null == t
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, t)),
              new iG(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new iG(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb() {
            return this;
          },
          clamp() {
            return new iG(iQ(this.r), iQ(this.g), iQ(this.b), iJ(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: iY,
          formatHex: iY,
          formatHex8: function () {
            return `#${i0(this.r)}${i0(this.g)}${i0(this.b)}${i0((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
          },
          formatRgb: iZ,
          toString: iZ,
        }),
      ),
      i_(
        i5,
        function (t, e, r, n) {
          return 1 == arguments.length
            ? i2(t)
            : new i5(t, e, r, null == n ? 1 : n);
        },
        iM(iT, {
          brighter(t) {
            return (
              (t =
                null == t
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, t)),
              new i5(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new i5(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb() {
            var t = (this.h % 360) + (this.h < 0) * 360,
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              r = this.l,
              n = r + (r < 0.5 ? r : 1 - r) * e,
              i = 2 * r - n;
            return new iG(
              i6(t >= 240 ? t - 240 : t + 120, i, n),
              i6(t, i, n),
              i6(t < 120 ? t + 240 : t - 120, i, n),
              this.opacity,
            );
          },
          clamp() {
            return new i5(i3(this.h), i4(this.s), i4(this.l), iJ(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            let t = iJ(this.opacity);
            return `${1 === t ? "hsl(" : "hsla("}${i3(this.h)}, ${100 * i4(this.s)}%, ${100 * i4(this.l)}%${1 === t ? ")" : `, ${t})`}`;
          },
        }),
      ));
    let i7 = (t) => () => t;
    function i9(t, e) {
      var r = e - t;
      return r
        ? function (e) {
            return t + e * r;
          }
        : i7(isNaN(t) ? e : t);
    }
    let ot = (function t(e) {
      var r,
        n =
          1 == (r = +e)
            ? i9
            : function (t, e) {
                var n, i, o;
                return e - t
                  ? ((n = t),
                    (i = e),
                    (n = Math.pow(n, (o = r))),
                    (i = Math.pow(i, o) - n),
                    (o = 1 / o),
                    function (t) {
                      return Math.pow(n + t * i, o);
                    })
                  : i7(isNaN(t) ? e : t);
              };
      function i(t, e) {
        var r = n((t = iK(t)).r, (e = iK(e)).r),
          i = n(t.g, e.g),
          o = n(t.b, e.b),
          a = i9(t.opacity, e.opacity);
        return function (e) {
          return (
            (t.r = r(e)),
            (t.g = i(e)),
            (t.b = o(e)),
            (t.opacity = a(e)),
            t + ""
          );
        };
      }
      return ((i.gamma = t), i);
    })(1);
    function oe(t) {
      return function (e) {
        var r,
          n,
          i = e.length,
          o = Array(i),
          a = Array(i),
          l = Array(i);
        for (r = 0; r < i; ++r)
          ((n = iK(e[r])),
            (o[r] = n.r || 0),
            (a[r] = n.g || 0),
            (l[r] = n.b || 0));
        return (
          (o = t(o)),
          (a = t(a)),
          (l = t(l)),
          (n.opacity = 1),
          function (t) {
            return ((n.r = o(t)), (n.g = a(t)), (n.b = l(t)), n + "");
          }
        );
      };
    }
    function or(t, e) {
      return (
        (t *= 1),
        (e *= 1),
        function (r) {
          return t * (1 - r) + e * r;
        }
      );
    }
    (oe(function (t) {
      var e = t.length - 1;
      return function (r) {
        var n =
            r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
          i = t[n],
          o = t[n + 1],
          a = n > 0 ? t[n - 1] : 2 * i - o,
          l = n < e - 1 ? t[n + 2] : 2 * o - i;
        return i8((r - n / e) * e, a, i, o, l);
      };
    }),
      oe(function (t) {
        var e = t.length;
        return function (r) {
          var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
            i = t[(n + e - 1) % e],
            o = t[n % e],
            a = t[(n + 1) % e],
            l = t[(n + 2) % e];
          return i8((r - n / e) * e, i, o, a, l);
        };
      }));
    var on = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      oi = RegExp(on.source, "g");
    function oo(t, e) {
      var r,
        n,
        i = typeof e;
      return null == e || "boolean" === i
        ? i7(e)
        : ("number" === i
            ? or
            : "string" === i
              ? (n = iq(e))
                ? ((e = n), ot)
                : function (t, e) {
                    var r,
                      n,
                      i,
                      o,
                      a,
                      l = (on.lastIndex = oi.lastIndex = 0),
                      c = -1,
                      u = [],
                      s = [];
                    for (
                      t += "", e += "";
                      (i = on.exec(t)) && (o = oi.exec(e));
                    )
                      ((a = o.index) > l &&
                        ((a = e.slice(l, a)),
                        u[c] ? (u[c] += a) : (u[++c] = a)),
                        (i = i[0]) === (o = o[0])
                          ? u[c]
                            ? (u[c] += o)
                            : (u[++c] = o)
                          : ((u[++c] = null), s.push({ i: c, x: or(i, o) })),
                        (l = oi.lastIndex));
                    return (
                      l < e.length &&
                        ((a = e.slice(l)), u[c] ? (u[c] += a) : (u[++c] = a)),
                      u.length < 2
                        ? s[0]
                          ? ((r = s[0].x),
                            function (t) {
                              return r(t) + "";
                            })
                          : ((n = e),
                            function () {
                              return n;
                            })
                        : ((e = s.length),
                          function (t) {
                            for (var r, n = 0; n < e; ++n)
                              u[(r = s[n]).i] = r.x(t);
                            return u.join("");
                          })
                    );
                  }
              : e instanceof iq
                ? ot
                : e instanceof Date
                  ? function (t, e) {
                      var r = new Date();
                      return (
                        (t *= 1),
                        (e *= 1),
                        function (n) {
                          return (r.setTime(t * (1 - n) + e * n), r);
                        }
                      );
                    }
                  : !ArrayBuffer.isView((r = e)) || r instanceof DataView
                    ? Array.isArray(e)
                      ? function (t, e) {
                          var r,
                            n = e ? e.length : 0,
                            i = t ? Math.min(n, t.length) : 0,
                            o = Array(i),
                            a = Array(n);
                          for (r = 0; r < i; ++r) o[r] = oo(t[r], e[r]);
                          for (; r < n; ++r) a[r] = e[r];
                          return function (t) {
                            for (r = 0; r < i; ++r) a[r] = o[r](t);
                            return a;
                          };
                        }
                      : ("function" != typeof e.valueOf &&
                            "function" != typeof e.toString) ||
                          isNaN(e)
                        ? function (t, e) {
                            var r,
                              n = {},
                              i = {};
                            for (r in ((null === t || "object" != typeof t) &&
                              (t = {}),
                            (null === e || "object" != typeof e) && (e = {}),
                            e))
                              r in t ? (n[r] = oo(t[r], e[r])) : (i[r] = e[r]);
                            return function (t) {
                              for (r in n) i[r] = n[r](t);
                              return i;
                            };
                          }
                        : or
                    : function (t, e) {
                        e || (e = []);
                        var r,
                          n = t ? Math.min(e.length, t.length) : 0,
                          i = e.slice();
                        return function (o) {
                          for (r = 0; r < n; ++r)
                            i[r] = t[r] * (1 - o) + e[r] * o;
                          return i;
                        };
                      })(t, e);
    }
    function oa(t, e) {
      return (
        (t *= 1),
        (e *= 1),
        function (r) {
          return Math.round(t * (1 - r) + e * r);
        }
      );
    }
    function ol(t) {
      return +t;
    }
    var oc = [0, 1];
    function ou(t) {
      return t;
    }
    function os(t, e) {
      var r;
      return (e -= t *= 1)
        ? function (r) {
            return (r - t) / e;
          }
        : ((r = isNaN(e) ? NaN : 0.5),
          function () {
            return r;
          });
    }
    function of(t, e, r) {
      var n = t[0],
        i = t[1],
        o = e[0],
        a = e[1];
      return (
        i < n
          ? ((n = os(i, n)), (o = r(a, o)))
          : ((n = os(n, i)), (o = r(o, a))),
        function (t) {
          return o(n(t));
        }
      );
    }
    function op(t, e, r) {
      var n = Math.min(t.length, e.length) - 1,
        i = Array(n),
        o = Array(n),
        a = -1;
      for (
        t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
        ++a < n;
      )
        ((i[a] = os(t[a], t[a + 1])), (o[a] = r(e[a], e[a + 1])));
      return function (e) {
        var r = iE(t, e, 1, n) - 1;
        return o[r](i[r](e));
      };
    }
    function od(t, e) {
      return e
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function oh() {
      var t,
        e,
        r,
        n,
        i,
        o,
        a = oc,
        l = oc,
        c = oo,
        u = ou;
      function s() {
        var t,
          e,
          r,
          c = Math.min(a.length, l.length);
        return (
          u !== ou &&
            ((t = a[0]),
            (e = a[c - 1]),
            t > e && ((r = t), (t = e), (e = r)),
            (u = function (r) {
              return Math.max(t, Math.min(e, r));
            })),
          (n = c > 2 ? op : of),
          (i = o = null),
          f
        );
      }
      function f(e) {
        return null == e || isNaN((e *= 1))
          ? r
          : (i || (i = n(a.map(t), l, c)))(t(u(e)));
      }
      return (
        (f.invert = function (r) {
          return u(e((o || (o = n(l, a.map(t), or)))(r)));
        }),
        (f.domain = function (t) {
          return arguments.length ? ((a = Array.from(t, ol)), s()) : a.slice();
        }),
        (f.range = function (t) {
          return arguments.length ? ((l = Array.from(t)), s()) : l.slice();
        }),
        (f.rangeRound = function (t) {
          return ((l = Array.from(t)), (c = oa), s());
        }),
        (f.clamp = function (t) {
          return arguments.length ? ((u = !!t || ou), s()) : u !== ou;
        }),
        (f.interpolate = function (t) {
          return arguments.length ? ((c = t), s()) : c;
        }),
        (f.unknown = function (t) {
          return arguments.length ? ((r = t), f) : r;
        }),
        function (r, n) {
          return ((t = r), (e = n), s());
        }
      );
    }
    function oy() {
      return oh()(ou, ou);
    }
    function ov(t, e) {
      if (!isFinite(t) || 0 === t) return null;
      var r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e"),
        n = t.slice(0, r);
      return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
    }
    function om(t) {
      return (t = ov(Math.abs(t))) ? t[1] : NaN;
    }
    var ob =
      /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function og(t) {
      var e;
      if (!(e = ob.exec(t))) throw Error("invalid format: " + t);
      return new ox({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10],
      });
    }
    function ox(t) {
      ((this.fill = void 0 === t.fill ? " " : t.fill + ""),
        (this.align = void 0 === t.align ? ">" : t.align + ""),
        (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
        (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
        (this.zero = !!t.zero),
        (this.width = void 0 === t.width ? void 0 : +t.width),
        (this.comma = !!t.comma),
        (this.precision = void 0 === t.precision ? void 0 : +t.precision),
        (this.trim = !!t.trim),
        (this.type = void 0 === t.type ? "" : t.type + ""));
    }
    function ow(t, e) {
      var r = ov(t, e);
      if (!r) return t + "";
      var n = r[0],
        i = r[1];
      return i < 0
        ? "0." + Array(-i).join("0") + n
        : n.length > i + 1
          ? n.slice(0, i + 1) + "." + n.slice(i + 1)
          : n + Array(i - n.length + 2).join("0");
    }
    ((og.prototype = ox.prototype),
      (ox.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      }));
    let oO = {
      "%": (t, e) => (100 * t).toFixed(e),
      b: (t) => Math.round(t).toString(2),
      c: (t) => t + "",
      d: function (t) {
        return Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString("en").replace(/,/g, "")
          : t.toString(10);
      },
      e: (t, e) => t.toExponential(e),
      f: (t, e) => t.toFixed(e),
      g: (t, e) => t.toPrecision(e),
      o: (t) => Math.round(t).toString(8),
      p: (t, e) => ow(100 * t, e),
      r: ow,
      s: function (t, e) {
        var r = ov(t, e);
        if (!r) return ((n = void 0), t.toPrecision(e));
        var i = r[0],
          o = r[1],
          a = o - (n = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
          l = i.length;
        return a === l
          ? i
          : a > l
            ? i + Array(a - l + 1).join("0")
            : a > 0
              ? i.slice(0, a) + "." + i.slice(a)
              : "0." +
                Array(1 - a).join("0") +
                ov(t, Math.max(0, e + a - 1))[0];
      },
      X: (t) => Math.round(t).toString(16).toUpperCase(),
      x: (t) => Math.round(t).toString(16),
    };
    function oj(t) {
      return t;
    }
    var oS = Array.prototype.map,
      ok = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    function oP(t, e, r, n) {
      var i,
        l,
        c = iw(t, e, r);
      switch ((n = og(null == n ? ",f" : n)).type) {
        case "s":
          var u = Math.max(Math.abs(t), Math.abs(e));
          return (
            null != n.precision ||
              isNaN(
                (l = Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(om(u) / 3))) -
                    om(Math.abs(c)),
                )),
              ) ||
              (n.precision = l),
            a(n, u)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != n.precision ||
            isNaN(
              (l =
                Math.max(
                  0,
                  om(
                    Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                      (i = Math.abs((i = c))),
                  ) - om(i),
                ) + 1),
            ) ||
            (n.precision = l - ("e" === n.type));
          break;
        case "f":
        case "%":
          null != n.precision ||
            isNaN((l = Math.max(0, -om(Math.abs(c))))) ||
            (n.precision = l - ("%" === n.type) * 2);
      }
      return o(n);
    }
    function oA(t) {
      var e = t.domain;
      return (
        (t.ticks = function (t) {
          var r = e();
          return ig(r[0], r[r.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function (t, r) {
          var n = e();
          return oP(n[0], n[n.length - 1], null == t ? 10 : t, r);
        }),
        (t.nice = function (r) {
          null == r && (r = 10);
          var n,
            i,
            o = e(),
            a = 0,
            l = o.length - 1,
            c = o[a],
            u = o[l],
            s = 10;
          for (
            u < c && ((i = c), (c = u), (u = i), (i = a), (a = l), (l = i));
            s-- > 0;
          ) {
            if ((i = ix(c, u, r)) === n) return ((o[a] = c), (o[l] = u), e(o));
            if (i > 0)
              ((c = Math.floor(c / i) * i), (u = Math.ceil(u / i) * i));
            else if (i < 0)
              ((c = Math.ceil(c * i) / i), (u = Math.floor(u * i) / i));
            else break;
            n = i;
          }
          return t;
        }),
        t
      );
    }
    function oE() {
      var t = oy();
      return (
        (t.copy = function () {
          return od(t, oE());
        }),
        nD.apply(t, arguments),
        oA(t)
      );
    }
    function o_(t) {
      var e;
      function r(t) {
        return null == t || isNaN((t *= 1)) ? e : t;
      }
      return (
        (r.invert = r),
        (r.domain = r.range =
          function (e) {
            return arguments.length ? ((t = Array.from(e, ol)), r) : t.slice();
          }),
        (r.unknown = function (t) {
          return arguments.length ? ((e = t), r) : e;
        }),
        (r.copy = function () {
          return o_(t).unknown(e);
        }),
        (t = arguments.length ? Array.from(t, ol) : [0, 1]),
        oA(r)
      );
    }
    function oM(t, e) {
      t = t.slice();
      var r,
        n = 0,
        i = t.length - 1,
        o = t[n],
        a = t[i];
      return (
        a < o && ((r = n), (n = i), (i = r), (r = o), (o = a), (a = r)),
        (t[n] = e.floor(o)),
        (t[i] = e.ceil(a)),
        t
      );
    }
    function oT(t) {
      return Math.log(t);
    }
    function oN(t) {
      return Math.exp(t);
    }
    function oC(t) {
      return -Math.log(-t);
    }
    function oD(t) {
      return -Math.exp(-t);
    }
    function oI(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    }
    function oL(t) {
      return (e, r) => -t(-e, r);
    }
    function oB(t) {
      let e,
        r,
        n = t(oT, oN),
        i = n.domain,
        a = 10;
      function l() {
        var o, l;
        return (
          (e =
            (o = a) === Math.E
              ? Math.log
              : (10 === o && Math.log10) ||
                (2 === o && Math.log2) ||
                ((o = Math.log(o)), (t) => Math.log(t) / o)),
          (r =
            10 === (l = a)
              ? oI
              : l === Math.E
                ? Math.exp
                : (t) => Math.pow(l, t)),
          i()[0] < 0 ? ((e = oL(e)), (r = oL(r)), t(oC, oD)) : t(oT, oN),
          n
        );
      }
      return (
        (n.base = function (t) {
          return arguments.length ? ((a = +t), l()) : a;
        }),
        (n.domain = function (t) {
          return arguments.length ? (i(t), l()) : i();
        }),
        (n.ticks = (t) => {
          let n,
            o,
            l = i(),
            c = l[0],
            u = l[l.length - 1],
            s = u < c;
          s && ([c, u] = [u, c]);
          let f = e(c),
            p = e(u),
            d = null == t ? 10 : +t,
            h = [];
          if (!(a % 1) && p - f < d) {
            if (((f = Math.floor(f)), (p = Math.ceil(p)), c > 0)) {
              for (; f <= p; ++f)
                for (n = 1; n < a; ++n)
                  if (!((o = f < 0 ? n / r(-f) : n * r(f)) < c)) {
                    if (o > u) break;
                    h.push(o);
                  }
            } else
              for (; f <= p; ++f)
                for (n = a - 1; n >= 1; --n)
                  if (!((o = f > 0 ? n / r(-f) : n * r(f)) < c)) {
                    if (o > u) break;
                    h.push(o);
                  }
            2 * h.length < d && (h = ig(c, u, d));
          } else h = ig(f, p, Math.min(p - f, d)).map(r);
          return s ? h.reverse() : h;
        }),
        (n.tickFormat = (t, i) => {
          if (
            (null == t && (t = 10),
            null == i && (i = 10 === a ? "s" : ","),
            "function" != typeof i &&
              (a % 1 || null != (i = og(i)).precision || (i.trim = !0),
              (i = o(i))),
            t === 1 / 0)
          )
            return i;
          let l = Math.max(1, (a * t) / n.ticks().length);
          return (t) => {
            let n = t / r(Math.round(e(t)));
            return (n * a < a - 0.5 && (n *= a), n <= l ? i(t) : "");
          };
        }),
        (n.nice = () =>
          i(
            oM(i(), {
              floor: (t) => r(Math.floor(e(t))),
              ceil: (t) => r(Math.ceil(e(t))),
            }),
          )),
        n
      );
    }
    function oR() {
      let t = oB(oh()).domain([1, 10]);
      return (
        (t.copy = () => od(t, oR()).base(t.base())),
        nD.apply(t, arguments),
        t
      );
    }
    function oz(t) {
      return function (e) {
        return Math.sign(e) * Math.log1p(Math.abs(e / t));
      };
    }
    function oF(t) {
      return function (e) {
        return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
      };
    }
    function oU(t) {
      var e = 1,
        r = t(oz(1), oF(e));
      return (
        (r.constant = function (r) {
          return arguments.length ? t(oz((e = +r)), oF(e)) : e;
        }),
        oA(r)
      );
    }
    function o$() {
      var t = oU(oh());
      return (
        (t.copy = function () {
          return od(t, o$()).constant(t.constant());
        }),
        nD.apply(t, arguments)
      );
    }
    function oW(t) {
      return function (e) {
        return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
      };
    }
    function oV(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }
    function oq(t) {
      return t < 0 ? -t * t : t * t;
    }
    function oH(t) {
      var e = t(ou, ou),
        r = 1;
      return (
        (e.exponent = function (e) {
          return arguments.length
            ? 1 == (r = +e)
              ? t(ou, ou)
              : 0.5 === r
                ? t(oV, oq)
                : t(oW(r), oW(1 / r))
            : r;
        }),
        oA(e)
      );
    }
    function oX() {
      var t = oH(oh());
      return (
        (t.copy = function () {
          return od(t, oX()).exponent(t.exponent());
        }),
        nD.apply(t, arguments),
        t
      );
    }
    function oK() {
      return oX.apply(null, arguments).exponent(0.5);
    }
    function oG(t) {
      return Math.sign(t) * t * t;
    }
    function oY() {
      var t,
        e = oy(),
        r = [0, 1],
        n = !1;
      function i(r) {
        var i,
          o = Math.sign((i = e(r))) * Math.sqrt(Math.abs(i));
        return isNaN(o) ? t : n ? Math.round(o) : o;
      }
      return (
        (i.invert = function (t) {
          return e.invert(oG(t));
        }),
        (i.domain = function (t) {
          return arguments.length ? (e.domain(t), i) : e.domain();
        }),
        (i.range = function (t) {
          return arguments.length
            ? (e.range((r = Array.from(t, ol)).map(oG)), i)
            : r.slice();
        }),
        (i.rangeRound = function (t) {
          return i.range(t).round(!0);
        }),
        (i.round = function (t) {
          return arguments.length ? ((n = !!t), i) : n;
        }),
        (i.clamp = function (t) {
          return arguments.length ? (e.clamp(t), i) : e.clamp();
        }),
        (i.unknown = function (e) {
          return arguments.length ? ((t = e), i) : t;
        }),
        (i.copy = function () {
          return oY(e.domain(), r).round(n).clamp(e.clamp()).unknown(t);
        }),
        nD.apply(i, arguments),
        oA(i)
      );
    }
    function oZ(t, e) {
      let r;
      if (void 0 === e)
        for (let e of t)
          null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
      else {
        let n = -1;
        for (let i of t)
          null != (i = e(i, ++n, t)) &&
            (r < i || (void 0 === r && i >= i)) &&
            (r = i);
      }
      return r;
    }
    function oJ(t, e) {
      let r;
      if (void 0 === e)
        for (let e of t)
          null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
      else {
        let n = -1;
        for (let i of t)
          null != (i = e(i, ++n, t)) &&
            (r > i || (void 0 === r && i >= i)) &&
            (r = i);
      }
      return r;
    }
    function oQ(t, e) {
      return (
        (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
        (t < e ? -1 : +(t > e))
      );
    }
    function o0(t, e, r) {
      let n = t[e];
      ((t[e] = t[r]), (t[r] = n));
    }
    function o1() {
      var t,
        e = [],
        r = [],
        n = [];
      function i() {
        var t = 0,
          i = Math.max(1, r.length);
        for (n = Array(i - 1); ++t < i; )
          n[t - 1] = (function (t, e, r = iP) {
            if (!(!(n = t.length) || isNaN((e *= 1)))) {
              if (e <= 0 || n < 2) return +r(t[0], 0, t);
              if (e >= 1) return +r(t[n - 1], n - 1, t);
              var n,
                i = (n - 1) * e,
                o = Math.floor(i),
                a = +r(t[o], o, t);
              return a + (r(t[o + 1], o + 1, t) - a) * (i - o);
            }
          })(e, t / i);
        return o;
      }
      function o(e) {
        return null == e || isNaN((e *= 1)) ? t : r[iE(n, e)];
      }
      return (
        (o.invertExtent = function (t) {
          var i = r.indexOf(t);
          return i < 0
            ? [NaN, NaN]
            : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
        }),
        (o.domain = function (t) {
          if (!arguments.length) return e.slice();
          for (let r of ((e = []), t))
            null == r || isNaN((r *= 1)) || e.push(r);
          return (e.sort(iO), i());
        }),
        (o.range = function (t) {
          return arguments.length ? ((r = Array.from(t)), i()) : r.slice();
        }),
        (o.unknown = function (e) {
          return arguments.length ? ((t = e), o) : t;
        }),
        (o.quantiles = function () {
          return n.slice();
        }),
        (o.copy = function () {
          return o1().domain(e).range(r).unknown(t);
        }),
        nD.apply(o, arguments)
      );
    }
    function o2() {
      var t,
        e = 0,
        r = 1,
        n = 1,
        i = [0.5],
        o = [0, 1];
      function a(e) {
        return null != e && e <= e ? o[iE(i, e, 0, n)] : t;
      }
      function l() {
        var t = -1;
        for (i = Array(n); ++t < n; )
          i[t] = ((t + 1) * r - (t - n) * e) / (n + 1);
        return a;
      }
      return (
        (a.domain = function (t) {
          return arguments.length
            ? (([e, r] = t), (e *= 1), (r *= 1), l())
            : [e, r];
        }),
        (a.range = function (t) {
          return arguments.length
            ? ((n = (o = Array.from(t)).length - 1), l())
            : o.slice();
        }),
        (a.invertExtent = function (t) {
          var a = o.indexOf(t);
          return a < 0
            ? [NaN, NaN]
            : a < 1
              ? [e, i[0]]
              : a >= n
                ? [i[n - 1], r]
                : [i[a - 1], i[a]];
        }),
        (a.unknown = function (e) {
          return (arguments.length && (t = e), a);
        }),
        (a.thresholds = function () {
          return i.slice();
        }),
        (a.copy = function () {
          return o2().domain([e, r]).range(o).unknown(t);
        }),
        nD.apply(oA(a), arguments)
      );
    }
    function o5() {
      var t,
        e = [0.5],
        r = [0, 1],
        n = 1;
      function i(i) {
        return null != i && i <= i ? r[iE(e, i, 0, n)] : t;
      }
      return (
        (i.domain = function (t) {
          return arguments.length
            ? ((n = Math.min((e = Array.from(t)).length, r.length - 1)), i)
            : e.slice();
        }),
        (i.range = function (t) {
          return arguments.length
            ? ((r = Array.from(t)), (n = Math.min(e.length, r.length - 1)), i)
            : r.slice();
        }),
        (i.invertExtent = function (t) {
          var n = r.indexOf(t);
          return [e[n - 1], e[n]];
        }),
        (i.unknown = function (e) {
          return arguments.length ? ((t = e), i) : t;
        }),
        (i.copy = function () {
          return o5().domain(e).range(r).unknown(t);
        }),
        nD.apply(i, arguments)
      );
    }
    ((o = (i = (function (t) {
      var e,
        r,
        i,
        o =
          void 0 === t.grouping || void 0 === t.thousands
            ? oj
            : ((e = oS.call(t.grouping, Number)),
              (r = t.thousands + ""),
              function (t, n) {
                for (
                  var i = t.length, o = [], a = 0, l = e[0], c = 0;
                  i > 0 &&
                  l > 0 &&
                  (c + l + 1 > n && (l = Math.max(1, n - c)),
                  o.push(t.substring((i -= l), i + l)),
                  !((c += l + 1) > n));
                )
                  l = e[(a = (a + 1) % e.length)];
                return o.reverse().join(r);
              }),
        a = void 0 === t.currency ? "" : t.currency[0] + "",
        l = void 0 === t.currency ? "" : t.currency[1] + "",
        c = void 0 === t.decimal ? "." : t.decimal + "",
        u =
          void 0 === t.numerals
            ? oj
            : ((i = oS.call(t.numerals, String)),
              function (t) {
                return t.replace(/[0-9]/g, function (t) {
                  return i[+t];
                });
              }),
        s = void 0 === t.percent ? "%" : t.percent + "",
        f = void 0 === t.minus ? "−" : t.minus + "",
        p = void 0 === t.nan ? "NaN" : t.nan + "";
      function d(t, e) {
        var r = (t = og(t)).fill,
          i = t.align,
          d = t.sign,
          h = t.symbol,
          y = t.zero,
          v = t.width,
          m = t.comma,
          b = t.precision,
          g = t.trim,
          x = t.type;
        ("n" === x
          ? ((m = !0), (x = "g"))
          : oO[x] || (void 0 === b && (b = 12), (g = !0), (x = "g")),
          (y || ("0" === r && "=" === i)) && ((y = !0), (r = "0"), (i = "=")));
        var w =
            (e && void 0 !== e.prefix ? e.prefix : "") +
            ("$" === h
              ? a
              : "#" === h && /[boxX]/.test(x)
                ? "0" + x.toLowerCase()
                : ""),
          O =
            ("$" === h ? l : /[%p]/.test(x) ? s : "") +
            (e && void 0 !== e.suffix ? e.suffix : ""),
          j = oO[x],
          S = /[defgprs%]/.test(x);
        function k(t) {
          var e,
            a,
            l,
            s = w,
            h = O;
          if ("c" === x) ((h = j(t) + h), (t = ""));
          else {
            var k = (t *= 1) < 0 || 1 / t < 0;
            if (
              ((t = isNaN(t) ? p : j(Math.abs(t), b)),
              g &&
                (t = (function (t) {
                  e: for (var e, r = t.length, n = 1, i = -1; n < r; ++n)
                    switch (t[n]) {
                      case ".":
                        i = e = n;
                        break;
                      case "0":
                        (0 === i && (i = n), (e = n));
                        break;
                      default:
                        if (!+t[n]) break e;
                        i > 0 && (i = 0);
                    }
                  return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                })(t)),
              k && 0 == +t && "+" !== d && (k = !1),
              (s =
                (k ? ("(" === d ? d : f) : "-" === d || "(" === d ? "" : d) +
                s),
              (h =
                ("s" !== x || isNaN(t) || void 0 === n ? "" : ok[8 + n / 3]) +
                h +
                (k && "(" === d ? ")" : "")),
              S)
            ) {
              for (e = -1, a = t.length; ++e < a; )
                if (48 > (l = t.charCodeAt(e)) || l > 57) {
                  ((h = (46 === l ? c + t.slice(e + 1) : t.slice(e)) + h),
                    (t = t.slice(0, e)));
                  break;
                }
            }
          }
          m && !y && (t = o(t, 1 / 0));
          var P = s.length + t.length + h.length,
            A = P < v ? Array(v - P + 1).join(r) : "";
          switch (
            (m &&
              y &&
              ((t = o(A + t, A.length ? v - h.length : 1 / 0)), (A = "")),
            i)
          ) {
            case "<":
              t = s + t + h + A;
              break;
            case "=":
              t = s + A + t + h;
              break;
            case "^":
              t = A.slice(0, (P = A.length >> 1)) + s + t + h + A.slice(P);
              break;
            default:
              t = A + s + t + h;
          }
          return u(t);
        }
        return (
          (b =
            void 0 === b
              ? 6
              : /[gprs]/.test(x)
                ? Math.max(1, Math.min(21, b))
                : Math.max(0, Math.min(20, b))),
          (k.toString = function () {
            return t + "";
          }),
          k
        );
      }
      return {
        format: d,
        formatPrefix: function (t, e) {
          var r = 3 * Math.max(-8, Math.min(8, Math.floor(om(e) / 3))),
            n = Math.pow(10, -r),
            i = d((((t = og(t)).type = "f"), t), { suffix: ok[8 + r / 3] });
          return function (t) {
            return i(n * t);
          };
        },
      };
    })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
      (a = i.formatPrefix));
    let o3 = new Date(),
      o4 = new Date();
    function o6(t, e, r, n) {
      function i(e) {
        return (t((e = 0 == arguments.length ? new Date() : new Date(+e))), e);
      }
      return (
        (i.floor = (e) => (t((e = new Date(+e))), e)),
        (i.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
        (i.round = (t) => {
          let e = i(t),
            r = i.ceil(t);
          return t - e < r - t ? e : r;
        }),
        (i.offset = (t, r) => (
          e((t = new Date(+t)), null == r ? 1 : Math.floor(r)),
          t
        )),
        (i.range = (r, n, o) => {
          let a,
            l = [];
          if (
            ((r = i.ceil(r)),
            (o = null == o ? 1 : Math.floor(o)),
            !(r < n) || !(o > 0))
          )
            return l;
          do (l.push((a = new Date(+r))), e(r, o), t(r));
          while (a < r && r < n);
          return l;
        }),
        (i.filter = (r) =>
          o6(
            (e) => {
              if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
            },
            (t, n) => {
              if (t >= t)
                if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
                else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
            },
          )),
        r &&
          ((i.count = (e, n) => (
            o3.setTime(+e),
            o4.setTime(+n),
            t(o3),
            t(o4),
            Math.floor(r(o3, o4))
          )),
          (i.every = (t) =>
            isFinite((t = Math.floor(t))) && t > 0
              ? t > 1
                ? i.filter(
                    n ? (e) => n(e) % t == 0 : (e) => i.count(0, e) % t == 0,
                  )
                : i
              : null)),
        i
      );
    }
    let o8 = o6(
      (t) => {
        (t.setMonth(0, 1), t.setHours(0, 0, 0, 0));
      },
      (t, e) => {
        t.setFullYear(t.getFullYear() + e);
      },
      (t, e) => e.getFullYear() - t.getFullYear(),
      (t) => t.getFullYear(),
    );
    ((o8.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? o6(
            (e) => {
              (e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                e.setMonth(0, 1),
                e.setHours(0, 0, 0, 0));
            },
            (e, r) => {
              e.setFullYear(e.getFullYear() + r * t);
            },
          )
        : null),
      o8.range);
    let o7 = o6(
      (t) => {
        (t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0));
      },
      (t, e) => {
        t.setUTCFullYear(t.getUTCFullYear() + e);
      },
      (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
      (t) => t.getUTCFullYear(),
    );
    ((o7.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? o6(
            (e) => {
              (e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                e.setUTCMonth(0, 1),
                e.setUTCHours(0, 0, 0, 0));
            },
            (e, r) => {
              e.setUTCFullYear(e.getUTCFullYear() + r * t);
            },
          )
        : null),
      o7.range);
    let o9 = o6(
      (t) => {
        (t.setDate(1), t.setHours(0, 0, 0, 0));
      },
      (t, e) => {
        t.setMonth(t.getMonth() + e);
      },
      (t, e) =>
        e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12,
      (t) => t.getMonth(),
    );
    o9.range;
    let at = o6(
      (t) => {
        (t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0));
      },
      (t, e) => {
        t.setUTCMonth(t.getUTCMonth() + e);
      },
      (t, e) =>
        e.getUTCMonth() -
        t.getUTCMonth() +
        (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
      (t) => t.getUTCMonth(),
    );
    at.range;
    function ae(t) {
      return o6(
        (e) => {
          (e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
            e.setHours(0, 0, 0, 0));
        },
        (t, e) => {
          t.setDate(t.getDate() + 7 * e);
        },
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
          6048e5,
      );
    }
    let ar = ae(0),
      an = ae(1),
      ai = ae(2),
      ao = ae(3),
      aa = ae(4),
      al = ae(5),
      ac = ae(6);
    function au(t) {
      return o6(
        (e) => {
          (e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
            e.setUTCHours(0, 0, 0, 0));
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + 7 * e);
        },
        (t, e) => (e - t) / 6048e5,
      );
    }
    (ar.range, an.range, ai.range, ao.range, aa.range, al.range, ac.range);
    let as = au(0),
      af = au(1),
      ap = au(2),
      ad = au(3),
      ah = au(4),
      ay = au(5),
      av = au(6);
    (as.range, af.range, ap.range, ad.range, ah.range, ay.range, av.range);
    let am = o6(
      (t) => t.setHours(0, 0, 0, 0),
      (t, e) => t.setDate(t.getDate() + e),
      (t, e) =>
        (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5,
      (t) => t.getDate() - 1,
    );
    am.range;
    let ab = o6(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCDate(t.getUTCDate() + e);
      },
      (t, e) => (e - t) / 864e5,
      (t) => t.getUTCDate() - 1,
    );
    ab.range;
    let ag = o6(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCDate(t.getUTCDate() + e);
      },
      (t, e) => (e - t) / 864e5,
      (t) => Math.floor(t / 864e5),
    );
    ag.range;
    let ax = o6(
      (t) => {
        t.setTime(
          t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes(),
        );
      },
      (t, e) => {
        t.setTime(+t + 36e5 * e);
      },
      (t, e) => (e - t) / 36e5,
      (t) => t.getHours(),
    );
    ax.range;
    let aw = o6(
      (t) => {
        t.setUTCMinutes(0, 0, 0);
      },
      (t, e) => {
        t.setTime(+t + 36e5 * e);
      },
      (t, e) => (e - t) / 36e5,
      (t) => t.getUTCHours(),
    );
    aw.range;
    let aO = o6(
      (t) => {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
      },
      (t, e) => {
        t.setTime(+t + 6e4 * e);
      },
      (t, e) => (e - t) / 6e4,
      (t) => t.getMinutes(),
    );
    aO.range;
    let aj = o6(
      (t) => {
        t.setUTCSeconds(0, 0);
      },
      (t, e) => {
        t.setTime(+t + 6e4 * e);
      },
      (t, e) => (e - t) / 6e4,
      (t) => t.getUTCMinutes(),
    );
    aj.range;
    let aS = o6(
      (t) => {
        t.setTime(t - t.getMilliseconds());
      },
      (t, e) => {
        t.setTime(+t + 1e3 * e);
      },
      (t, e) => (e - t) / 1e3,
      (t) => t.getUTCSeconds(),
    );
    aS.range;
    let ak = o6(
      () => {},
      (t, e) => {
        t.setTime(+t + e);
      },
      (t, e) => e - t,
    );
    function aP(t, e, r, n, i, o) {
      let a = [
        [aS, 1, 1e3],
        [aS, 5, 5e3],
        [aS, 15, 15e3],
        [aS, 30, 3e4],
        [o, 1, 6e4],
        [o, 5, 3e5],
        [o, 15, 9e5],
        [o, 30, 18e5],
        [i, 1, 36e5],
        [i, 3, 108e5],
        [i, 6, 216e5],
        [i, 12, 432e5],
        [n, 1, 864e5],
        [n, 2, 1728e5],
        [r, 1, 6048e5],
        [e, 1, 2592e6],
        [e, 3, 7776e6],
        [t, 1, 31536e6],
      ];
      function l(e, r, n) {
        let i = Math.abs(r - e) / n,
          o = iS(([, , t]) => t).right(a, i);
        if (o === a.length) return t.every(iw(e / 31536e6, r / 31536e6, n));
        if (0 === o) return ak.every(Math.max(iw(e, r, n), 1));
        let [l, c] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
        return l.every(c);
      }
      return [
        function (t, e, r) {
          let n = e < t;
          n && ([t, e] = [e, t]);
          let i = r && "function" == typeof r.range ? r : l(t, e, r),
            o = i ? i.range(t, +e + 1) : [];
          return n ? o.reverse() : o;
        },
        l,
      ];
    }
    ((ak.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? t > 1
          ? o6(
              (e) => {
                e.setTime(Math.floor(e / t) * t);
              },
              (e, r) => {
                e.setTime(+e + r * t);
              },
              (e, r) => (r - e) / t,
            )
          : ak
        : null),
      ak.range);
    let [aA, aE] = aP(o7, at, as, ag, aw, aj),
      [a_, aM] = aP(o8, o9, ar, am, ax, aO);
    function aT(t) {
      if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return (e.setFullYear(t.y), e);
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function aN(t) {
      if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return (e.setUTCFullYear(t.y), e);
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function aC(t, e, r) {
      return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
    }
    var aD = { "-": "", _: " ", 0: "0" },
      aI = /^\s*\d+/,
      aL = /^%/,
      aB = /[\\^$*+?|[\]().{}]/g;
    function aR(t, e, r) {
      var n = t < 0 ? "-" : "",
        i = (n ? -t : t) + "",
        o = i.length;
      return n + (o < r ? Array(r - o + 1).join(e) + i : i);
    }
    function az(t) {
      return t.replace(aB, "\\$&");
    }
    function aF(t) {
      return RegExp("^(?:" + t.map(az).join("|") + ")", "i");
    }
    function aU(t) {
      return new Map(t.map((t, e) => [t.toLowerCase(), e]));
    }
    function a$(t, e, r) {
      var n = aI.exec(e.slice(r, r + 1));
      return n ? ((t.w = +n[0]), r + n[0].length) : -1;
    }
    function aW(t, e, r) {
      var n = aI.exec(e.slice(r, r + 1));
      return n ? ((t.u = +n[0]), r + n[0].length) : -1;
    }
    function aV(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.U = +n[0]), r + n[0].length) : -1;
    }
    function aq(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.V = +n[0]), r + n[0].length) : -1;
    }
    function aH(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.W = +n[0]), r + n[0].length) : -1;
    }
    function aX(t, e, r) {
      var n = aI.exec(e.slice(r, r + 4));
      return n ? ((t.y = +n[0]), r + n[0].length) : -1;
    }
    function aK(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n
        ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
        : -1;
    }
    function aG(t, e, r) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
      return n
        ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
        : -1;
    }
    function aY(t, e, r) {
      var n = aI.exec(e.slice(r, r + 1));
      return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
    }
    function aZ(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
    }
    function aJ(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.d = +n[0]), r + n[0].length) : -1;
    }
    function aQ(t, e, r) {
      var n = aI.exec(e.slice(r, r + 3));
      return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
    }
    function a0(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.H = +n[0]), r + n[0].length) : -1;
    }
    function a1(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.M = +n[0]), r + n[0].length) : -1;
    }
    function a2(t, e, r) {
      var n = aI.exec(e.slice(r, r + 2));
      return n ? ((t.S = +n[0]), r + n[0].length) : -1;
    }
    function a5(t, e, r) {
      var n = aI.exec(e.slice(r, r + 3));
      return n ? ((t.L = +n[0]), r + n[0].length) : -1;
    }
    function a3(t, e, r) {
      var n = aI.exec(e.slice(r, r + 6));
      return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
    }
    function a4(t, e, r) {
      var n = aL.exec(e.slice(r, r + 1));
      return n ? r + n[0].length : -1;
    }
    function a6(t, e, r) {
      var n = aI.exec(e.slice(r));
      return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
    }
    function a8(t, e, r) {
      var n = aI.exec(e.slice(r));
      return n ? ((t.s = +n[0]), r + n[0].length) : -1;
    }
    function a7(t, e) {
      return aR(t.getDate(), e, 2);
    }
    function a9(t, e) {
      return aR(t.getHours(), e, 2);
    }
    function lt(t, e) {
      return aR(t.getHours() % 12 || 12, e, 2);
    }
    function le(t, e) {
      return aR(1 + am.count(o8(t), t), e, 3);
    }
    function lr(t, e) {
      return aR(t.getMilliseconds(), e, 3);
    }
    function ln(t, e) {
      return lr(t, e) + "000";
    }
    function li(t, e) {
      return aR(t.getMonth() + 1, e, 2);
    }
    function lo(t, e) {
      return aR(t.getMinutes(), e, 2);
    }
    function la(t, e) {
      return aR(t.getSeconds(), e, 2);
    }
    function ll(t) {
      var e = t.getDay();
      return 0 === e ? 7 : e;
    }
    function lc(t, e) {
      return aR(ar.count(o8(t) - 1, t), e, 2);
    }
    function lu(t) {
      var e = t.getDay();
      return e >= 4 || 0 === e ? aa(t) : aa.ceil(t);
    }
    function ls(t, e) {
      return (
        (t = lu(t)),
        aR(aa.count(o8(t), t) + (4 === o8(t).getDay()), e, 2)
      );
    }
    function lf(t) {
      return t.getDay();
    }
    function lp(t, e) {
      return aR(an.count(o8(t) - 1, t), e, 2);
    }
    function ld(t, e) {
      return aR(t.getFullYear() % 100, e, 2);
    }
    function lh(t, e) {
      return aR((t = lu(t)).getFullYear() % 100, e, 2);
    }
    function ly(t, e) {
      return aR(t.getFullYear() % 1e4, e, 4);
    }
    function lv(t, e) {
      var r = t.getDay();
      return aR(
        (t = r >= 4 || 0 === r ? aa(t) : aa.ceil(t)).getFullYear() % 1e4,
        e,
        4,
      );
    }
    function lm(t) {
      var e = t.getTimezoneOffset();
      return (
        (e > 0 ? "-" : ((e *= -1), "+")) +
        aR((e / 60) | 0, "0", 2) +
        aR(e % 60, "0", 2)
      );
    }
    function lb(t, e) {
      return aR(t.getUTCDate(), e, 2);
    }
    function lg(t, e) {
      return aR(t.getUTCHours(), e, 2);
    }
    function lx(t, e) {
      return aR(t.getUTCHours() % 12 || 12, e, 2);
    }
    function lw(t, e) {
      return aR(1 + ab.count(o7(t), t), e, 3);
    }
    function lO(t, e) {
      return aR(t.getUTCMilliseconds(), e, 3);
    }
    function lj(t, e) {
      return lO(t, e) + "000";
    }
    function lS(t, e) {
      return aR(t.getUTCMonth() + 1, e, 2);
    }
    function lk(t, e) {
      return aR(t.getUTCMinutes(), e, 2);
    }
    function lP(t, e) {
      return aR(t.getUTCSeconds(), e, 2);
    }
    function lA(t) {
      var e = t.getUTCDay();
      return 0 === e ? 7 : e;
    }
    function lE(t, e) {
      return aR(as.count(o7(t) - 1, t), e, 2);
    }
    function l_(t) {
      var e = t.getUTCDay();
      return e >= 4 || 0 === e ? ah(t) : ah.ceil(t);
    }
    function lM(t, e) {
      return (
        (t = l_(t)),
        aR(ah.count(o7(t), t) + (4 === o7(t).getUTCDay()), e, 2)
      );
    }
    function lT(t) {
      return t.getUTCDay();
    }
    function lN(t, e) {
      return aR(af.count(o7(t) - 1, t), e, 2);
    }
    function lC(t, e) {
      return aR(t.getUTCFullYear() % 100, e, 2);
    }
    function lD(t, e) {
      return aR((t = l_(t)).getUTCFullYear() % 100, e, 2);
    }
    function lI(t, e) {
      return aR(t.getUTCFullYear() % 1e4, e, 4);
    }
    function lL(t, e) {
      var r = t.getUTCDay();
      return aR(
        (t = r >= 4 || 0 === r ? ah(t) : ah.ceil(t)).getUTCFullYear() % 1e4,
        e,
        4,
      );
    }
    function lB() {
      return "+0000";
    }
    function lR() {
      return "%";
    }
    function lz(t) {
      return +t;
    }
    function lF(t) {
      return Math.floor(t / 1e3);
    }
    function lU(t) {
      return new Date(t);
    }
    function l$(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function lW(t, e, r, n, i, o, a, l, c, u) {
      var s = oy(),
        f = s.invert,
        p = s.domain,
        d = u(".%L"),
        h = u(":%S"),
        y = u("%I:%M"),
        v = u("%I %p"),
        m = u("%a %d"),
        b = u("%b %d"),
        g = u("%B"),
        x = u("%Y");
      function w(t) {
        return (
          c(t) < t
            ? d
            : l(t) < t
              ? h
              : a(t) < t
                ? y
                : o(t) < t
                  ? v
                  : n(t) < t
                    ? i(t) < t
                      ? m
                      : b
                    : r(t) < t
                      ? g
                      : x
        )(t);
      }
      return (
        (s.invert = function (t) {
          return new Date(f(t));
        }),
        (s.domain = function (t) {
          return arguments.length ? p(Array.from(t, l$)) : p().map(lU);
        }),
        (s.ticks = function (e) {
          var r = p();
          return t(r[0], r[r.length - 1], null == e ? 10 : e);
        }),
        (s.tickFormat = function (t, e) {
          return null == e ? w : u(e);
        }),
        (s.nice = function (t) {
          var r = p();
          return (
            (t && "function" == typeof t.range) ||
              (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
            t ? p(oM(r, t)) : s
          );
        }),
        (s.copy = function () {
          return od(s, lW(t, e, r, n, i, o, a, l, c, u));
        }),
        s
      );
    }
    function lV() {
      return nD.apply(
        lW(a_, aM, o8, o9, ar, am, ax, aO, aS, c).domain([
          new Date(2e3, 0, 1),
          new Date(2e3, 0, 2),
        ]),
        arguments,
      );
    }
    function lq() {
      return nD.apply(
        lW(aA, aE, o7, at, as, ab, aw, aj, aS, u).domain([
          Date.UTC(2e3, 0, 1),
          Date.UTC(2e3, 0, 2),
        ]),
        arguments,
      );
    }
    function lH() {
      var t,
        e,
        r,
        n,
        i,
        o = 0,
        a = 1,
        l = ou,
        c = !1;
      function u(e) {
        return null == e || isNaN((e *= 1))
          ? i
          : l(
              0 === r
                ? 0.5
                : ((e = (n(e) - t) * r), c ? Math.max(0, Math.min(1, e)) : e),
            );
      }
      function s(t) {
        return function (e) {
          var r, n;
          return arguments.length
            ? (([r, n] = e), (l = t(r, n)), u)
            : [l(0), l(1)];
        };
      }
      return (
        (u.domain = function (i) {
          return arguments.length
            ? (([o, a] = i),
              (t = n((o *= 1))),
              (e = n((a *= 1))),
              (r = t === e ? 0 : 1 / (e - t)),
              u)
            : [o, a];
        }),
        (u.clamp = function (t) {
          return arguments.length ? ((c = !!t), u) : c;
        }),
        (u.interpolator = function (t) {
          return arguments.length ? ((l = t), u) : l;
        }),
        (u.range = s(oo)),
        (u.rangeRound = s(oa)),
        (u.unknown = function (t) {
          return arguments.length ? ((i = t), u) : i;
        }),
        function (i) {
          return (
            (n = i),
            (t = i(o)),
            (e = i(a)),
            (r = t === e ? 0 : 1 / (e - t)),
            u
          );
        }
      );
    }
    function lX(t, e) {
      return e
        .domain(t.domain())
        .interpolator(t.interpolator())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function lK() {
      var t = oA(lH()(ou));
      return (
        (t.copy = function () {
          return lX(t, lK());
        }),
        nI.apply(t, arguments)
      );
    }
    function lG() {
      var t = oB(lH()).domain([1, 10]);
      return (
        (t.copy = function () {
          return lX(t, lG()).base(t.base());
        }),
        nI.apply(t, arguments)
      );
    }
    function lY() {
      var t = oU(lH());
      return (
        (t.copy = function () {
          return lX(t, lY()).constant(t.constant());
        }),
        nI.apply(t, arguments)
      );
    }
    function lZ() {
      var t = oH(lH());
      return (
        (t.copy = function () {
          return lX(t, lZ()).exponent(t.exponent());
        }),
        nI.apply(t, arguments)
      );
    }
    function lJ() {
      return lZ.apply(null, arguments).exponent(0.5);
    }
    function lQ() {
      var t = [],
        e = ou;
      function r(r) {
        if (null != r && !isNaN((r *= 1)))
          return e((iE(t, r, 1) - 1) / (t.length - 1));
      }
      return (
        (r.domain = function (e) {
          if (!arguments.length) return t.slice();
          for (let r of ((t = []), e))
            null == r || isNaN((r *= 1)) || t.push(r);
          return (t.sort(iO), r);
        }),
        (r.interpolator = function (t) {
          return arguments.length ? ((e = t), r) : e;
        }),
        (r.range = function () {
          return t.map((r, n) => e(n / (t.length - 1)));
        }),
        (r.quantiles = function (e) {
          return Array.from({ length: e + 1 }, (r, n) =>
            (function (t, e) {
              if (
                !(
                  !(r = (t = Float64Array.from(
                    (function* (t, e) {
                      if (void 0 === e)
                        for (let e of t)
                          null != e && (e *= 1) >= e && (yield e);
                      else {
                        let r = -1;
                        for (let n of t)
                          null != (n = e(n, ++r, t)) &&
                            (n *= 1) >= n &&
                            (yield n);
                      }
                    })(t, void 0),
                  )).length) || isNaN((e *= 1))
                )
              ) {
                if (e <= 0 || r < 2) return oJ(t);
                if (e >= 1) return oZ(t);
                var r,
                  n = (r - 1) * e,
                  i = Math.floor(n),
                  o = oZ(
                    (function t(e, r, n = 0, i = 1 / 0, o) {
                      if (
                        ((r = Math.floor(r)),
                        (n = Math.floor(Math.max(0, n))),
                        (i = Math.floor(Math.min(e.length - 1, i))),
                        !(n <= r && r <= i))
                      )
                        return e;
                      for (
                        o =
                          void 0 === o
                            ? oQ
                            : (function (t = iO) {
                                if (t === iO) return oQ;
                                if ("function" != typeof t)
                                  throw TypeError("compare is not a function");
                                return (e, r) => {
                                  let n = t(e, r);
                                  return n || 0 === n
                                    ? n
                                    : (0 === t(r, r)) - (0 === t(e, e));
                                };
                              })(o);
                        i > n;
                      ) {
                        if (i - n > 600) {
                          let a = i - n + 1,
                            l = r - n + 1,
                            c = Math.log(a),
                            u = 0.5 * Math.exp((2 * c) / 3),
                            s =
                              0.5 *
                              Math.sqrt((c * u * (a - u)) / a) *
                              (l - a / 2 < 0 ? -1 : 1),
                            f = Math.max(n, Math.floor(r - (l * u) / a + s)),
                            p = Math.min(
                              i,
                              Math.floor(r + ((a - l) * u) / a + s),
                            );
                          t(e, r, f, p, o);
                        }
                        let a = e[r],
                          l = n,
                          c = i;
                        for (
                          o0(e, n, r), o(e[i], a) > 0 && o0(e, n, i);
                          l < c;
                        ) {
                          for (o0(e, l, c), ++l, --c; 0 > o(e[l], a); ) ++l;
                          for (; o(e[c], a) > 0; ) --c;
                        }
                        (0 === o(e[n], a) ? o0(e, n, c) : o0(e, ++c, i),
                          c <= r && (n = c + 1),
                          r <= c && (i = c - 1));
                      }
                      return e;
                    })(t, i).subarray(0, i + 1),
                  );
                return o + (oJ(t.subarray(i + 1)) - o) * (n - i);
              }
            })(t, n / e),
          );
        }),
        (r.copy = function () {
          return lQ(e).domain(t);
        }),
        nI.apply(r, arguments)
      );
    }
    function l0() {
      var t,
        e,
        r,
        n,
        i,
        o,
        a,
        l = 0,
        c = 0.5,
        u = 1,
        s = 1,
        f = ou,
        p = !1;
      function d(t) {
        return isNaN((t *= 1))
          ? a
          : ((t = 0.5 + ((t = +o(t)) - e) * (s * t < s * e ? n : i)),
            f(p ? Math.max(0, Math.min(1, t)) : t));
      }
      function h(t) {
        return function (e) {
          var r, n, i;
          return arguments.length
            ? (([r, n, i] = e),
              (f = (function (t, e) {
                void 0 === e && ((e = t), (t = oo));
                for (
                  var r = 0,
                    n = e.length - 1,
                    i = e[0],
                    o = Array(n < 0 ? 0 : n);
                  r < n;
                )
                  o[r] = t(i, (i = e[++r]));
                return function (t) {
                  var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
                  return o[e](t - e);
                };
              })(t, [r, n, i])),
              d)
            : [f(0), f(0.5), f(1)];
        };
      }
      return (
        (d.domain = function (a) {
          return arguments.length
            ? (([l, c, u] = a),
              (t = o((l *= 1))),
              (e = o((c *= 1))),
              (r = o((u *= 1))),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (i = e === r ? 0 : 0.5 / (r - e)),
              (s = e < t ? -1 : 1),
              d)
            : [l, c, u];
        }),
        (d.clamp = function (t) {
          return arguments.length ? ((p = !!t), d) : p;
        }),
        (d.interpolator = function (t) {
          return arguments.length ? ((f = t), d) : f;
        }),
        (d.range = h(oo)),
        (d.rangeRound = h(oa)),
        (d.unknown = function (t) {
          return arguments.length ? ((a = t), d) : a;
        }),
        function (a) {
          return (
            (o = a),
            (t = a(l)),
            (e = a(c)),
            (r = a(u)),
            (n = t === e ? 0 : 0.5 / (e - t)),
            (i = e === r ? 0 : 0.5 / (r - e)),
            (s = e < t ? -1 : 1),
            d
          );
        }
      );
    }
    function l1() {
      var t = oA(l0()(ou));
      return (
        (t.copy = function () {
          return lX(t, l1());
        }),
        nI.apply(t, arguments)
      );
    }
    function l2() {
      var t = oB(l0()).domain([0.1, 1, 10]);
      return (
        (t.copy = function () {
          return lX(t, l2()).base(t.base());
        }),
        nI.apply(t, arguments)
      );
    }
    function l5() {
      var t = oU(l0());
      return (
        (t.copy = function () {
          return lX(t, l5()).constant(t.constant());
        }),
        nI.apply(t, arguments)
      );
    }
    function l3() {
      var t = oH(l0());
      return (
        (t.copy = function () {
          return lX(t, l3()).exponent(t.exponent());
        }),
        nI.apply(t, arguments)
      );
    }
    function l4() {
      return l3.apply(null, arguments).exponent(0.5);
    }
    ((c = (l = (function (t) {
      var e = t.dateTime,
        r = t.date,
        n = t.time,
        i = t.periods,
        o = t.days,
        a = t.shortDays,
        l = t.months,
        c = t.shortMonths,
        u = aF(i),
        s = aU(i),
        f = aF(o),
        p = aU(o),
        d = aF(a),
        h = aU(a),
        y = aF(l),
        v = aU(l),
        m = aF(c),
        b = aU(c),
        g = {
          a: function (t) {
            return a[t.getDay()];
          },
          A: function (t) {
            return o[t.getDay()];
          },
          b: function (t) {
            return c[t.getMonth()];
          },
          B: function (t) {
            return l[t.getMonth()];
          },
          c: null,
          d: a7,
          e: a7,
          f: ln,
          g: lh,
          G: lv,
          H: a9,
          I: lt,
          j: le,
          L: lr,
          m: li,
          M: lo,
          p: function (t) {
            return i[+(t.getHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getMonth() / 3);
          },
          Q: lz,
          s: lF,
          S: la,
          u: ll,
          U: lc,
          V: ls,
          w: lf,
          W: lp,
          x: null,
          X: null,
          y: ld,
          Y: ly,
          Z: lm,
          "%": lR,
        },
        x = {
          a: function (t) {
            return a[t.getUTCDay()];
          },
          A: function (t) {
            return o[t.getUTCDay()];
          },
          b: function (t) {
            return c[t.getUTCMonth()];
          },
          B: function (t) {
            return l[t.getUTCMonth()];
          },
          c: null,
          d: lb,
          e: lb,
          f: lj,
          g: lD,
          G: lL,
          H: lg,
          I: lx,
          j: lw,
          L: lO,
          m: lS,
          M: lk,
          p: function (t) {
            return i[+(t.getUTCHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3);
          },
          Q: lz,
          s: lF,
          S: lP,
          u: lA,
          U: lE,
          V: lM,
          w: lT,
          W: lN,
          x: null,
          X: null,
          y: lC,
          Y: lI,
          Z: lB,
          "%": lR,
        },
        w = {
          a: function (t, e, r) {
            var n = d.exec(e.slice(r));
            return n
              ? ((t.w = h.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          A: function (t, e, r) {
            var n = f.exec(e.slice(r));
            return n
              ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          b: function (t, e, r) {
            var n = m.exec(e.slice(r));
            return n
              ? ((t.m = b.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          B: function (t, e, r) {
            var n = y.exec(e.slice(r));
            return n
              ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          c: function (t, r, n) {
            return S(t, e, r, n);
          },
          d: aJ,
          e: aJ,
          f: a3,
          g: aK,
          G: aX,
          H: a0,
          I: a0,
          j: aQ,
          L: a5,
          m: aZ,
          M: a1,
          p: function (t, e, r) {
            var n = u.exec(e.slice(r));
            return n
              ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          q: aY,
          Q: a6,
          s: a8,
          S: a2,
          u: aW,
          U: aV,
          V: aq,
          w: a$,
          W: aH,
          x: function (t, e, n) {
            return S(t, r, e, n);
          },
          X: function (t, e, r) {
            return S(t, n, e, r);
          },
          y: aK,
          Y: aX,
          Z: aG,
          "%": a4,
        };
      function O(t, e) {
        return function (r) {
          var n,
            i,
            o,
            a = [],
            l = -1,
            c = 0,
            u = t.length;
          for (r instanceof Date || (r = new Date(+r)); ++l < u; )
            37 === t.charCodeAt(l) &&
              (a.push(t.slice(c, l)),
              null != (i = aD[(n = t.charAt(++l))])
                ? (n = t.charAt(++l))
                : (i = "e" === n ? " " : "0"),
              (o = e[n]) && (n = o(r, i)),
              a.push(n),
              (c = l + 1));
          return (a.push(t.slice(c, l)), a.join(""));
        };
      }
      function j(t, e) {
        return function (r) {
          var n,
            i,
            o = aC(1900, void 0, 1);
          if (S(o, t, (r += ""), 0) != r.length) return null;
          if ("Q" in o) return new Date(o.Q);
          if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
          if (
            (!e || "Z" in o || (o.Z = 0),
            "p" in o && (o.H = (o.H % 12) + 12 * o.p),
            void 0 === o.m && (o.m = "q" in o ? o.q : 0),
            "V" in o)
          ) {
            if (o.V < 1 || o.V > 53) return null;
            ("w" in o || (o.w = 1),
              "Z" in o
                ? ((n =
                    (i = (n = aN(aC(o.y, 0, 1))).getUTCDay()) > 4 || 0 === i
                      ? af.ceil(n)
                      : af(n)),
                  (n = ab.offset(n, (o.V - 1) * 7)),
                  (o.y = n.getUTCFullYear()),
                  (o.m = n.getUTCMonth()),
                  (o.d = n.getUTCDate() + ((o.w + 6) % 7)))
                : ((n =
                    (i = (n = aT(aC(o.y, 0, 1))).getDay()) > 4 || 0 === i
                      ? an.ceil(n)
                      : an(n)),
                  (n = am.offset(n, (o.V - 1) * 7)),
                  (o.y = n.getFullYear()),
                  (o.m = n.getMonth()),
                  (o.d = n.getDate() + ((o.w + 6) % 7))));
          } else
            ("W" in o || "U" in o) &&
              ("w" in o || (o.w = "u" in o ? o.u % 7 : +("W" in o)),
              (i =
                "Z" in o
                  ? aN(aC(o.y, 0, 1)).getUTCDay()
                  : aT(aC(o.y, 0, 1)).getDay()),
              (o.m = 0),
              (o.d =
                "W" in o
                  ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                  : o.w + 7 * o.U - ((i + 6) % 7)));
          return "Z" in o
            ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), aN(o))
            : aT(o);
        };
      }
      function S(t, e, r, n) {
        for (var i, o, a = 0, l = e.length, c = r.length; a < l; ) {
          if (n >= c) return -1;
          if (37 === (i = e.charCodeAt(a++))) {
            if (
              !(o = w[(i = e.charAt(a++)) in aD ? e.charAt(a++) : i]) ||
              (n = o(t, r, n)) < 0
            )
              return -1;
          } else if (i != r.charCodeAt(n++)) return -1;
        }
        return n;
      }
      return (
        (g.x = O(r, g)),
        (g.X = O(n, g)),
        (g.c = O(e, g)),
        (x.x = O(r, x)),
        (x.X = O(n, x)),
        (x.c = O(e, x)),
        {
          format: function (t) {
            var e = O((t += ""), g);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          parse: function (t) {
            var e = j((t += ""), !1);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          utcFormat: function (t) {
            var e = O((t += ""), x);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          utcParse: function (t) {
            var e = j((t += ""), !0);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
        }
      );
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    })).format),
      l.parse,
      (u = l.utcFormat),
      l.utcParse,
      t.s(
        [
          "scaleBand",
          0,
          nU,
          "scaleDiverging",
          0,
          l1,
          "scaleDivergingLog",
          0,
          l2,
          "scaleDivergingPow",
          0,
          l3,
          "scaleDivergingSqrt",
          0,
          l4,
          "scaleDivergingSymlog",
          0,
          l5,
          "scaleIdentity",
          0,
          o_,
          "scaleImplicit",
          0,
          nz,
          "scaleLinear",
          0,
          oE,
          "scaleLog",
          0,
          oR,
          "scaleOrdinal",
          0,
          nF,
          "scalePoint",
          0,
          n$,
          "scalePow",
          0,
          oX,
          "scaleQuantile",
          0,
          o1,
          "scaleQuantize",
          0,
          o2,
          "scaleRadial",
          0,
          oY,
          "scaleSequential",
          0,
          lK,
          "scaleSequentialLog",
          0,
          lG,
          "scaleSequentialPow",
          0,
          lZ,
          "scaleSequentialQuantile",
          0,
          lQ,
          "scaleSequentialSqrt",
          0,
          lJ,
          "scaleSequentialSymlog",
          0,
          lY,
          "scaleSqrt",
          0,
          oK,
          "scaleSymlog",
          0,
          o$,
          "scaleThreshold",
          0,
          o5,
          "scaleTime",
          0,
          lV,
          "scaleUtc",
          0,
          lq,
          "tickFormat",
          0,
          oP,
        ],
        29061,
      ),
      t.i(29061),
      t.s(
        [
          "scaleBand",
          0,
          nU,
          "scaleDiverging",
          0,
          l1,
          "scaleDivergingLog",
          0,
          l2,
          "scaleDivergingPow",
          0,
          l3,
          "scaleDivergingSqrt",
          0,
          l4,
          "scaleDivergingSymlog",
          0,
          l5,
          "scaleIdentity",
          0,
          o_,
          "scaleImplicit",
          0,
          nz,
          "scaleLinear",
          0,
          oE,
          "scaleLog",
          0,
          oR,
          "scaleOrdinal",
          0,
          nF,
          "scalePoint",
          0,
          n$,
          "scalePow",
          0,
          oX,
          "scaleQuantile",
          0,
          o1,
          "scaleQuantize",
          0,
          o2,
          "scaleRadial",
          0,
          oY,
          "scaleSequential",
          0,
          lK,
          "scaleSequentialLog",
          0,
          lG,
          "scaleSequentialPow",
          0,
          lZ,
          "scaleSequentialQuantile",
          0,
          lQ,
          "scaleSequentialSqrt",
          0,
          lJ,
          "scaleSequentialSymlog",
          0,
          lY,
          "scaleSqrt",
          0,
          oK,
          "scaleSymlog",
          0,
          o$,
          "scaleThreshold",
          0,
          o5,
          "scaleTime",
          0,
          lV,
          "scaleUtc",
          0,
          lq,
          "tickFormat",
          0,
          oP,
        ],
        79357,
      ));
    var l6 = t.i(79357);
    function l8(t) {
      return "object" == typeof t && "length" in t ? t : Array.from(t);
    }
    function l7(t, e) {
      if ((i = t.length) > 1)
        for (var r, n, i, o = 1, a = t[e[0]], l = a.length; o < i; ++o)
          for (n = a, a = t[e[o]], r = 0; r < l; ++r)
            a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
    }
    function l9(t) {
      for (var e = t.length, r = Array(e); --e >= 0; ) r[e] = e;
      return r;
    }
    function ct(t, e) {
      return t[e];
    }
    function ce(t) {
      let e = [];
      return ((e.key = t), e);
    }
    Array.prototype.slice;
    var cr = t.i(86966),
      cn = t.i(37544),
      ci = t.i(33303),
      co = t.i(98892),
      ca = t.i(51655);
    function cl(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var cc = function (t) {
        return t;
      },
      cu = {},
      cs = function (t) {
        return t === cu;
      },
      cf = function (t) {
        return function e() {
          return 0 == arguments.length ||
            (1 == arguments.length &&
              cs(arguments.length <= 0 ? void 0 : arguments[0]))
            ? e
            : t.apply(void 0, arguments);
        };
      },
      cp = function (t) {
        return (function t(e, r) {
          return 1 === e
            ? r
            : cf(function () {
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
                  i[o] = arguments[o];
                var a = i.filter(function (t) {
                  return t !== cu;
                }).length;
                return a >= e
                  ? r.apply(void 0, i)
                  : t(
                      e - a,
                      cf(function () {
                        for (
                          var t = arguments.length, e = Array(t), n = 0;
                          n < t;
                          n++
                        )
                          e[n] = arguments[n];
                        var o = i.map(function (t) {
                          return cs(t) ? e.shift() : t;
                        });
                        return r.apply(
                          void 0,
                          (
                            (function (t) {
                              if (Array.isArray(t)) return cl(t);
                            })(o) ||
                            (function (t) {
                              if (
                                "u" > typeof Symbol &&
                                Symbol.iterator in Object(t)
                              )
                                return Array.from(t);
                            })(o) ||
                            (function (t) {
                              if (t) {
                                if ("string" == typeof t) return cl(t, void 0);
                                var e = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                if (
                                  ("Object" === e &&
                                    t.constructor &&
                                    (e = t.constructor.name),
                                  "Map" === e || "Set" === e)
                                )
                                  return Array.from(t);
                                if (
                                  "Arguments" === e ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    e,
                                  )
                                )
                                  return cl(t, void 0);
                              }
                            })(o) ||
                            (function () {
                              throw TypeError(
                                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })()
                          ).concat(e),
                        );
                      }),
                    );
              });
        })(t.length, t);
      },
      cd = function (t, e) {
        for (var r = [], n = t; n < e; ++n) r[n - t] = n;
        return r;
      },
      ch = cp(function (t, e) {
        return Array.isArray(e)
          ? e.map(t)
          : Object.keys(e)
              .map(function (t) {
                return e[t];
              })
              .map(t);
      }),
      cy = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        if (!e.length) return cc;
        var n = e.reverse(),
          i = n[0],
          o = n.slice(1);
        return function () {
          return o.reduce(
            function (t, e) {
              return e(t);
            },
            i.apply(void 0, arguments),
          );
        };
      },
      cv = function (t) {
        return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
      },
      cm = function (t) {
        var e = null,
          r = null;
        return function () {
          for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return e &&
            i.every(function (t, r) {
              return t === e[r];
            })
            ? r
            : ((e = i), (r = t.apply(void 0, i)));
        };
      };
    (cp(function (t, e, r) {
      var n = +t;
      return n + r * (e - n);
    }),
      cp(function (t, e, r) {
        var n = e - t;
        return (r - t) / (n = n || 1 / 0);
      }),
      cp(function (t, e, r) {
        var n = e - t;
        return Math.max(0, Math.min(1, (r - t) / (n = n || 1 / 0)));
      }));
    let cb = function (t, e, r) {
        for (var n = new ca.default(t), i = 0, o = []; n.lt(e) && i < 1e5; )
          (o.push(n.toNumber()), (n = n.add(r)), i++);
        return o;
      },
      cg = function (t) {
        return 0 === t
          ? 1
          : Math.floor(new ca.default(t).abs().log(10).toNumber()) + 1;
      };
    function cx(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return cj(t);
        })(t) ||
        (function (t) {
          if ("u" > typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        cO(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function cw(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ("u" > typeof Symbol && Symbol.iterator in Object(t)) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, l = t[Symbol.iterator]();
                !(n = (a = l.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (t) {
              ((i = !0), (o = t));
            } finally {
              try {
                n || null == l.return || l.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          }
        })(t, e) ||
        cO(t, e) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function cO(t, e) {
      if (t) {
        if ("string" == typeof t) return cj(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ("Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r)
        )
          return Array.from(t);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return cj(t, e);
      }
    }
    function cj(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function cS(t) {
      var e = cw(t, 2),
        r = e[0],
        n = e[1],
        i = r,
        o = n;
      return (r > n && ((i = n), (o = r)), [i, o]);
    }
    function ck(t, e, r) {
      if (t.lte(0)) return new ca.default(0);
      var n = cg(t.toNumber()),
        i = new ca.default(10).pow(n),
        o = t.div(i),
        a = 1 !== n ? 0.05 : 0.1,
        l = new ca.default(Math.ceil(o.div(a).toNumber())).add(r).mul(a).mul(i);
      return e ? l : new ca.default(Math.ceil(l));
    }
    function cP(t, e, r) {
      var n = 1,
        i = new ca.default(t);
      if (!i.isint() && r) {
        var o = Math.abs(t);
        o < 1
          ? ((n = new ca.default(10).pow(cg(t) - 1)),
            (i = new ca.default(Math.floor(i.div(n).toNumber())).mul(n)))
          : o > 1 && (i = new ca.default(Math.floor(t)));
      } else
        0 === t
          ? (i = new ca.default(Math.floor((e - 1) / 2)))
          : r || (i = new ca.default(Math.floor(t)));
      var a = Math.floor((e - 1) / 2);
      return cy(
        ch(function (t) {
          return i.add(new ca.default(t - a).mul(n)).toNumber();
        }),
        cd,
      )(0, e);
    }
    var cA = cm(function (t) {
      var e = cw(t, 2),
        r = e[0],
        n = e[1],
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = Math.max(i, 2),
        l = cw(cS([r, n]), 2),
        c = l[0],
        u = l[1];
      if (c === -1 / 0 || u === 1 / 0) {
        var s =
          u === 1 / 0
            ? [c].concat(
                cx(
                  cd(0, i - 1).map(function () {
                    return 1 / 0;
                  }),
                ),
              )
            : [].concat(
                cx(
                  cd(0, i - 1).map(function () {
                    return -1 / 0;
                  }),
                ),
                [u],
              );
        return r > n ? cv(s) : s;
      }
      if (c === u) return cP(c, i, o);
      var f = (function t(e, r, n, i) {
          var o,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
          if (!Number.isFinite((r - e) / (n - 1)))
            return {
              step: new ca.default(0),
              tickMin: new ca.default(0),
              tickMax: new ca.default(0),
            };
          var l = ck(new ca.default(r).sub(e).div(n - 1), i, a),
            c = Math.ceil(
              (o =
                e <= 0 && r >= 0
                  ? new ca.default(0)
                  : (o = new ca.default(e).add(r).div(2)).sub(
                      new ca.default(o).mod(l),
                    ))
                .sub(e)
                .div(l)
                .toNumber(),
            ),
            u = Math.ceil(new ca.default(r).sub(o).div(l).toNumber()),
            s = c + u + 1;
          return s > n
            ? t(e, r, n, i, a + 1)
            : (s < n &&
                ((u = r > 0 ? u + (n - s) : u), (c = r > 0 ? c : c + (n - s))),
              {
                step: l,
                tickMin: o.sub(new ca.default(c).mul(l)),
                tickMax: o.add(new ca.default(u).mul(l)),
              });
        })(c, u, a, o),
        p = f.step,
        d = cb(f.tickMin, f.tickMax.add(new ca.default(0.1).mul(p)), p);
      return r > n ? cv(d) : d;
    });
    cm(function (t) {
      var e = cw(t, 2),
        r = e[0],
        n = e[1],
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
        o = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = Math.max(i, 2),
        l = cw(cS([r, n]), 2),
        c = l[0],
        u = l[1];
      if (c === -1 / 0 || u === 1 / 0) return [r, n];
      if (c === u) return cP(c, i, o);
      var s = ck(new ca.default(u).sub(c).div(a - 1), o, 0),
        f = cy(
          ch(function (t) {
            return new ca.default(c).add(new ca.default(t).mul(s)).toNumber();
          }),
          cd,
        )(0, a).filter(function (t) {
          return t >= c && t <= u;
        });
      return r > n ? cv(f) : f;
    });
    var cE = cm(function (t, e) {
        var r = cw(t, 2),
          n = r[0],
          i = r[1],
          o =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = cw(cS([n, i]), 2),
          l = a[0],
          c = a[1];
        if (l === -1 / 0 || c === 1 / 0) return [n, i];
        if (l === c) return [l];
        var u = Math.max(e, 2),
          s = ck(new ca.default(c).sub(l).div(u - 1), o, 0),
          f = [].concat(
            cx(
              cb(
                new ca.default(l),
                new ca.default(c).sub(new ca.default(0.99).mul(s)),
                s,
              ),
            ),
            [c],
          );
        return n > i ? cv(f) : f;
      }),
      c_ = [
        "offset",
        "layout",
        "width",
        "dataKey",
        "data",
        "dataPointFormatter",
        "xAxis",
        "yAxis",
      ];
    function cM(t) {
      return (cM =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function cT() {
      return (cT = Object.assign.bind()).apply(this, arguments);
    }
    function cN(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function cC() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (cC = function () {
        return !!t;
      })();
    }
    function cD(t) {
      return (cD = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function cI(t, e) {
      return (cI = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function cL(t, e, r) {
      return (
        (e = cB(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function cB(t) {
      var e = (function (t, e) {
        if ("object" != cM(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != cM(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == cM(e) ? e : e + "";
    }
    var cR = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError("Cannot call a class as a function");
        return (
          (t = r),
          (e = arguments),
          (t = cD(t)),
          (function (t, e) {
            if (e && ("object" === cM(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                "Derived constructors may only return object or undefined",
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return r;
          })(
            this,
            cC()
              ? Reflect.construct(t, e || [], cD(this).constructor)
              : t.apply(this, e),
          )
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t && cI(r, t),
        (e = [
          {
            key: "render",
            value: function () {
              var t = this.props,
                e = t.offset,
                r = t.layout,
                n = t.width,
                i = t.dataKey,
                o = t.data,
                a = t.dataPointFormatter,
                l = t.xAxis,
                c = t.yAxis,
                u = td(
                  (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      i = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < o.length; n++)
                        ((r = o[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (i[r] = t[r]));
                    }
                    return i;
                  })(t, c_),
                  !1,
                );
              "x" === this.props.direction && "number" !== l.type && A(!1);
              var s = o.map(function (t) {
                var o,
                  s,
                  p = a(t, i),
                  d = p.x,
                  h = p.y,
                  y = p.value,
                  v = p.errorVal;
                if (!v) return null;
                var m = [];
                if (Array.isArray(v)) {
                  var b =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(v) ||
                    (function (t) {
                      var e =
                        null == t
                          ? null
                          : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                            t["@@iterator"];
                      if (null != e) {
                        var r,
                          n,
                          i,
                          o,
                          a = [],
                          l = !0,
                          c = !1;
                        try {
                          ((i = (e = e.call(t)).next), !1);
                          for (
                            ;
                            !(l = (r = i.call(e)).done) &&
                            (a.push(r.value), 2 !== a.length);
                            l = !0
                          );
                        } catch (t) {
                          ((c = !0), (n = t));
                        } finally {
                          try {
                            if (
                              !l &&
                              null != e.return &&
                              ((o = e.return()), Object(o) !== o)
                            )
                              return;
                          } finally {
                            if (c) throw n;
                          }
                        }
                        return a;
                      }
                    })(v) ||
                    (function (t) {
                      if (t) {
                        if ("string" == typeof t) return cN(t, 2);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === e &&
                            t.constructor &&
                            (e = t.constructor.name),
                          "Map" === e || "Set" === e)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === e ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                        )
                          return cN(t, 2);
                      }
                    })(v) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })();
                  ((o = b[0]), (s = b[1]));
                } else o = s = v;
                if ("vertical" === r) {
                  var g = l.scale,
                    x = h + e,
                    w = x + n,
                    O = x - n,
                    j = g(y - o),
                    S = g(y + s);
                  (m.push({ x1: S, y1: w, x2: S, y2: O }),
                    m.push({ x1: j, y1: x, x2: S, y2: x }),
                    m.push({ x1: j, y1: w, x2: j, y2: O }));
                } else if ("horizontal" === r) {
                  var k = c.scale,
                    P = d + e,
                    A = P - n,
                    E = P + n,
                    _ = k(y - o),
                    M = k(y + s);
                  (m.push({ x1: A, y1: M, x2: E, y2: M }),
                    m.push({ x1: P, y1: _, x2: P, y2: M }),
                    m.push({ x1: A, y1: _, x2: E, y2: _ }));
                }
                return f.default.createElement(
                  tj,
                  cT(
                    {
                      className: "recharts-errorBar",
                      key: "bar-".concat(
                        m.map(function (t) {
                          return ""
                            .concat(t.x1, "-")
                            .concat(t.x2, "-")
                            .concat(t.y1, "-")
                            .concat(t.y2);
                        }),
                      ),
                    },
                    u,
                  ),
                  m.map(function (t) {
                    return f.default.createElement(
                      "line",
                      cT({}, t, {
                        key: "line-"
                          .concat(t.x1, "-")
                          .concat(t.x2, "-")
                          .concat(t.y1, "-")
                          .concat(t.y2),
                      }),
                    );
                  }),
                );
              });
              return f.default.createElement(
                tj,
                { className: "recharts-errorBars" },
                s,
              );
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, cB(n.key), n));
          }
        })(r.prototype, e),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
    })(f.default.Component);
    function cz(t) {
      return (cz =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function cF(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function cU(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cF(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != cz(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != cz(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == cz(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : cF(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    (cL(cR, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal",
    }),
      cL(cR, "displayName", "ErrorBar"));
    var c$ = function (t) {
      var e,
        r = t.children,
        n = t.formattedGraphicalItems,
        i = t.legendWidth,
        o = t.legendContent,
        a = tu(r, eX);
      if (!a) return null;
      var l = eX.defaultProps,
        c = void 0 !== l ? cU(cU({}, l), a.props) : {};
      return (
        (e =
          a.props && a.props.payload
            ? a.props && a.props.payload
            : "children" === o
              ? (n || []).reduce(function (t, e) {
                  var r = e.item,
                    n = e.props,
                    i = n.sectors || n.data || [];
                  return t.concat(
                    i.map(function (t) {
                      return {
                        type: a.props.iconType || r.props.legendType,
                        value: t.name,
                        color: t.fill,
                        payload: t,
                      };
                    }),
                  );
                }, [])
              : (n || []).map(function (t) {
                  var e = t.item,
                    r = e.type.defaultProps,
                    n = void 0 !== r ? cU(cU({}, r), e.props) : {},
                    i = n.dataKey,
                    o = n.name,
                    a = n.legendType;
                  return {
                    inactive: n.hide,
                    dataKey: i,
                    type: c.iconType || a || "square",
                    color: cJ(e),
                    value: o || i,
                    payload: n,
                  };
                })),
        cU(cU(cU({}, c), eX.getWithHeight(a, i)), {}, { payload: e, item: a })
      );
    };
    function cW(t) {
      return (cW =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function cV(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return cq(t);
        })(t) ||
        (function (t) {
          if (
            ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ("string" == typeof t) return cq(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e)
            )
              return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return cq(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function cq(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function cH(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function cX(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cH(Object(r), !0).forEach(function (e) {
              cK(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : cH(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function cK(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ("object" != cW(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != cW(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(e, "string")),
        (e = "symbol" == cW(n) ? n : n + "") in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function cG(t, e, r) {
      return (0, x.default)(t) || (0, x.default)(e)
        ? r
        : L(e)
          ? (0, j.default)(t, e, r)
          : (0, w.default)(e)
            ? e(t)
            : r;
    }
    function cY(t, e, r, n) {
      var i = (0, ci.default)(t, function (t) {
        return cG(t, e);
      });
      if ("number" === r) {
        var o = i.filter(function (t) {
          return I(t) || parseFloat(t);
        });
        return o.length
          ? [(0, cn.default)(o), (0, cr.default)(o)]
          : [1 / 0, -1 / 0];
      }
      return (
        n
          ? i.filter(function (t) {
              return !(0, x.default)(t);
            })
          : i
      ).map(function (t) {
        return L(t) || t instanceof Date ? t : "";
      });
    }
    var cZ = function (t) {
        var e,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0,
          o = -1,
          a = null != (e = null == r ? void 0 : r.length) ? e : 0;
        if (a <= 1) return 0;
        if (
          i &&
          "angleAxis" === i.axisType &&
          1e-6 >= Math.abs(Math.abs(i.range[1] - i.range[0]) - 360)
        )
          for (var l = i.range, c = 0; c < a; c++) {
            var u = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
              s = n[c].coordinate,
              f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
              p = void 0;
            if (C(s - u) !== C(f - s)) {
              var d = [];
              if (C(f - s) === C(l[1] - l[0])) {
                p = f;
                var h = s + l[1] - l[0];
                ((d[0] = Math.min(h, (h + u) / 2)),
                  (d[1] = Math.max(h, (h + u) / 2)));
              } else {
                p = u;
                var y = f + l[1] - l[0];
                ((d[0] = Math.min(s, (y + s) / 2)),
                  (d[1] = Math.max(s, (y + s) / 2)));
              }
              var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
              if ((t > v[0] && t <= v[1]) || (t >= d[0] && t <= d[1])) {
                o = n[c].index;
                break;
              }
            } else {
              var m = Math.min(u, f),
                b = Math.max(u, f);
              if (t > (m + s) / 2 && t <= (b + s) / 2) {
                o = n[c].index;
                break;
              }
            }
          }
        else
          for (var g = 0; g < a; g++)
            if (
              (0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
              (g > 0 &&
                g < a - 1 &&
                t > (r[g].coordinate + r[g - 1].coordinate) / 2 &&
                t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
              (g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2)
            ) {
              o = r[g].index;
              break;
            }
        return o;
      },
      cJ = function (t) {
        var e,
          r,
          n = t.type.displayName,
          i =
            null != (e = t.type) && e.defaultProps
              ? cX(cX({}, t.type.defaultProps), t.props)
              : t.props,
          o = i.stroke,
          a = i.fill;
        switch (n) {
          case "Line":
            r = o;
            break;
          case "Area":
          case "Radar":
            r = o && "none" !== o ? o : a;
            break;
          default:
            r = a;
        }
        return r;
      },
      cQ = function (t) {
        var e = t.barSize,
          r = t.totalSize,
          n = t.stackGroups,
          i = void 0 === n ? {} : n;
        if (!i) return {};
        for (var o = {}, a = Object.keys(i), l = 0, c = a.length; l < c; l++)
          for (
            var u = i[a[l]].stackGroups,
              s = Object.keys(u),
              f = 0,
              p = s.length;
            f < p;
            f++
          ) {
            var d = u[s[f]],
              h = d.items,
              y = d.cateAxisId,
              v = h.filter(function (t) {
                return ti(t.type).indexOf("Bar") >= 0;
              });
            if (v && v.length) {
              var m = v[0].type.defaultProps,
                b = void 0 !== m ? cX(cX({}, m), v[0].props) : v[0].props,
                g = b.barSize,
                w = b[y];
              o[w] || (o[w] = []);
              var O = (0, x.default)(g) ? e : g;
              o[w].push({
                item: v[0],
                stackList: v.slice(1),
                barSize: (0, x.default)(O) ? void 0 : z(O, r, 0),
              });
            }
          }
        return o;
      },
      c0 = function (t) {
        var e,
          r = t.barGap,
          n = t.barCategoryGap,
          i = t.bandSize,
          o = t.sizeList,
          a = void 0 === o ? [] : o,
          l = t.maxBarSize,
          c = a.length;
        if (c < 1) return null;
        var u = z(r, i, 0, !0),
          s = [];
        if (a[0].barSize === +a[0].barSize) {
          var f = !1,
            p = i / c,
            d = a.reduce(function (t, e) {
              return t + e.barSize || 0;
            }, 0);
          ((d += (c - 1) * u) >= i && ((d -= (c - 1) * u), (u = 0)),
            d >= i && p > 0 && ((f = !0), (p *= 0.9), (d = c * p)));
          var h = { offset: (((i - d) / 2) | 0) - u, size: 0 };
          e = a.reduce(function (t, e) {
            var r = {
                item: e.item,
                position: {
                  offset: h.offset + h.size + u,
                  size: f ? p : e.barSize,
                },
              },
              n = [].concat(cV(t), [r]);
            return (
              (h = n[n.length - 1].position),
              e.stackList &&
                e.stackList.length &&
                e.stackList.forEach(function (t) {
                  n.push({ item: t, position: h });
                }),
              n
            );
          }, s);
        } else {
          var y = z(n, i, 0, !0);
          i - 2 * y - (c - 1) * u <= 0 && (u = 0);
          var v = (i - 2 * y - (c - 1) * u) / c;
          v > 1 && (v >>= 0);
          var m = l === +l ? Math.min(v, l) : v;
          e = a.reduce(function (t, e, r) {
            var n = [].concat(cV(t), [
              {
                item: e.item,
                position: { offset: y + (v + u) * r + (v - m) / 2, size: m },
              },
            ]);
            return (
              e.stackList &&
                e.stackList.length &&
                e.stackList.forEach(function (t) {
                  n.push({ item: t, position: n[n.length - 1].position });
                }),
              n
            );
          }, s);
        }
        return e;
      },
      c1 = function (t, e, r, n) {
        var i = r.children,
          o = r.width,
          a = r.margin,
          l = c$({
            children: i,
            legendWidth: o - (a.left || 0) - (a.right || 0),
          });
        if (l) {
          var c = n || {},
            u = c.width,
            s = c.height,
            f = l.align,
            p = l.verticalAlign,
            d = l.layout;
          if (
            ("vertical" === d || ("horizontal" === d && "middle" === p)) &&
            "center" !== f &&
            I(t[f])
          )
            return cX(cX({}, t), {}, cK({}, f, t[f] + (u || 0)));
          if (
            ("horizontal" === d || ("vertical" === d && "center" === f)) &&
            "middle" !== p &&
            I(t[p])
          )
            return cX(cX({}, t), {}, cK({}, p, t[p] + (s || 0)));
        }
        return t;
      },
      c2 = function (t, e, r, n, i) {
        var o = tc(e.props.children, cR).filter(function (t) {
          var e;
          return (
            (e = t.props.direction),
            !!(0, x.default)(i) ||
              ("horizontal" === n
                ? "yAxis" === i
                : "vertical" === n || "x" === e
                  ? "xAxis" === i
                  : "y" !== e || "yAxis" === i)
          );
        });
        if (o && o.length) {
          var a = o.map(function (t) {
            return t.props.dataKey;
          });
          return t.reduce(
            function (t, e) {
              var n = cG(e, r);
              if ((0, x.default)(n)) return t;
              var i = Array.isArray(n)
                  ? [(0, cn.default)(n), (0, cr.default)(n)]
                  : [n, n],
                o = a.reduce(
                  function (t, r) {
                    var n = cG(e, r, 0),
                      o = i[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                      a = i[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                    return [Math.min(o, t[0]), Math.max(a, t[1])];
                  },
                  [1 / 0, -1 / 0],
                );
              return [Math.min(o[0], t[0]), Math.max(o[1], t[1])];
            },
            [1 / 0, -1 / 0],
          );
        }
        return null;
      },
      c5 = function (t, e, r, n, i) {
        var o = e
          .map(function (e) {
            return c2(t, e, r, i, n);
          })
          .filter(function (t) {
            return !(0, x.default)(t);
          });
        return o && o.length
          ? o.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0],
            )
          : null;
      },
      c3 = function (t, e, r, n, i) {
        var o = e.map(function (e) {
          var o = e.props.dataKey;
          return ("number" === r && o && c2(t, e, o, n)) || cY(t, o, r, i);
        });
        if ("number" === r)
          return o.reduce(
            function (t, e) {
              return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
            },
            [1 / 0, -1 / 0],
          );
        var a = {};
        return o.reduce(function (t, e) {
          for (var r = 0, n = e.length; r < n; r++)
            a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
          return t;
        }, []);
      },
      c4 = function (t, e) {
        return (
          ("horizontal" === t && "xAxis" === e) ||
          ("vertical" === t && "yAxis" === e) ||
          ("centric" === t && "angleAxis" === e) ||
          ("radial" === t && "radiusAxis" === e)
        );
      },
      c6 = function (t, e, r, n) {
        if (n)
          return t.map(function (t) {
            return t.coordinate;
          });
        var i,
          o,
          a = t.map(function (t) {
            return (
              t.coordinate === e && (i = !0),
              t.coordinate === r && (o = !0),
              t.coordinate
            );
          });
        return (i || a.push(e), o || a.push(r), a);
      },
      c8 = function (t, e, r) {
        if (!t) return null;
        var n = t.scale,
          i = t.duplicateDomain,
          o = t.type,
          a = t.range,
          l = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
          c =
            (e || r) && "category" === o && n.bandwidth ? n.bandwidth() / l : 0;
        return ((c =
          "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2
            ? 2 * C(a[0] - a[1]) * c
            : c),
        e && (t.ticks || t.niceTicks))
          ? (t.ticks || t.niceTicks)
              .map(function (t) {
                return {
                  coordinate: n(i ? i.indexOf(t) : t) + c,
                  value: t,
                  offset: c,
                };
              })
              .filter(function (t) {
                return !(0, T.default)(t.coordinate);
              })
          : t.isCategorical && t.categoricalDomain
            ? t.categoricalDomain.map(function (t, e) {
                return { coordinate: n(t) + c, value: t, index: e, offset: c };
              })
            : n.ticks && !r
              ? n.ticks(t.tickCount).map(function (t) {
                  return { coordinate: n(t) + c, value: t, offset: c };
                })
              : n.domain().map(function (t, e) {
                  return {
                    coordinate: n(t) + c,
                    value: i ? i[t] : t,
                    index: e,
                    offset: c,
                  };
                });
      },
      c7 = new WeakMap(),
      c9 = function (t, e) {
        if ("function" != typeof e) return t;
        c7.has(t) || c7.set(t, new WeakMap());
        var r = c7.get(t);
        if (r.has(e)) return r.get(e);
        var n = function () {
          (t.apply(void 0, arguments), e.apply(void 0, arguments));
        };
        return (r.set(e, n), n);
      },
      ut = function (t, e, r) {
        var n = t.scale,
          i = t.type,
          o = t.layout,
          a = t.axisType;
        if ("auto" === n)
          return "radial" === o && "radiusAxis" === a
            ? { scale: l6.scaleBand(), realScaleType: "band" }
            : "radial" === o && "angleAxis" === a
              ? { scale: l6.scaleLinear(), realScaleType: "linear" }
              : "category" === i &&
                  e &&
                  (e.indexOf("LineChart") >= 0 ||
                    e.indexOf("AreaChart") >= 0 ||
                    (e.indexOf("ComposedChart") >= 0 && !r))
                ? { scale: l6.scalePoint(), realScaleType: "point" }
                : "category" === i
                  ? { scale: l6.scaleBand(), realScaleType: "band" }
                  : { scale: l6.scaleLinear(), realScaleType: "linear" };
        if ((0, E.default)(n)) {
          var l = "scale".concat((0, t4.default)(n));
          return {
            scale: (l6[l] || l6.scalePoint)(),
            realScaleType: l6[l] ? l : "point",
          };
        }
        return (0, w.default)(n)
          ? { scale: n }
          : { scale: l6.scalePoint(), realScaleType: "point" };
      },
      ue = function (t) {
        var e = t.domain();
        if (e && !(e.length <= 2)) {
          var r = e.length,
            n = t.range(),
            i = Math.min(n[0], n[1]) - 1e-4,
            o = Math.max(n[0], n[1]) + 1e-4,
            a = t(e[0]),
            l = t(e[r - 1]);
          (a < i || a > o || l < i || l > o) && t.domain([e[0], e[r - 1]]);
        }
      },
      ur = function (t, e) {
        if (!t) return null;
        for (var r = 0, n = t.length; r < n; r++)
          if (t[r].item === e) return t[r].position;
        return null;
      },
      un = function (t, e) {
        if (!e || 2 !== e.length || !I(e[0]) || !I(e[1])) return t;
        var r = Math.min(e[0], e[1]),
          n = Math.max(e[0], e[1]),
          i = [t[0], t[1]];
        return (
          (!I(t[0]) || t[0] < r) && (i[0] = r),
          (!I(t[1]) || t[1] > n) && (i[1] = n),
          i[0] > n && (i[0] = n),
          i[1] < r && (i[1] = r),
          i
        );
      },
      ui = {
        sign: function (t) {
          var e = t.length;
          if (!(e <= 0))
            for (var r = 0, n = t[0].length; r < n; ++r)
              for (var i = 0, o = 0, a = 0; a < e; ++a) {
                var l = (0, T.default)(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                l >= 0
                  ? ((t[a][r][0] = i), (t[a][r][1] = i + l), (i = t[a][r][1]))
                  : ((t[a][r][0] = o), (t[a][r][1] = o + l), (o = t[a][r][1]));
              }
        },
        expand: function (t, e) {
          if ((n = t.length) > 0) {
            for (var r, n, i, o = 0, a = t[0].length; o < a; ++o) {
              for (i = r = 0; r < n; ++r) i += t[r][o][1] || 0;
              if (i) for (r = 0; r < n; ++r) t[r][o][1] /= i;
            }
            l7(t, e);
          }
        },
        none: l7,
        silhouette: function (t, e) {
          if ((r = t.length) > 0) {
            for (var r, n = 0, i = t[e[0]], o = i.length; n < o; ++n) {
              for (var a = 0, l = 0; a < r; ++a) l += t[a][n][1] || 0;
              i[n][1] += i[n][0] = -l / 2;
            }
            l7(t, e);
          }
        },
        wiggle: function (t, e) {
          if ((i = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
            for (var r, n, i, o = 0, a = 1; a < n; ++a) {
              for (var l = 0, c = 0, u = 0; l < i; ++l) {
                for (
                  var s = t[e[l]],
                    f = s[a][1] || 0,
                    p = (f - (s[a - 1][1] || 0)) / 2,
                    d = 0;
                  d < l;
                  ++d
                ) {
                  var h = t[e[d]];
                  p += (h[a][1] || 0) - (h[a - 1][1] || 0);
                }
                ((c += f), (u += p * f));
              }
              ((r[a - 1][1] += r[a - 1][0] = o), c && (o -= u / c));
            }
            ((r[a - 1][1] += r[a - 1][0] = o), l7(t, e));
          }
        },
        positive: function (t) {
          var e = t.length;
          if (!(e <= 0))
            for (var r = 0, n = t[0].length; r < n; ++r)
              for (var i = 0, o = 0; o < e; ++o) {
                var a = (0, T.default)(t[o][r][1]) ? t[o][r][0] : t[o][r][1];
                a >= 0
                  ? ((t[o][r][0] = i), (t[o][r][1] = i + a), (i = t[o][r][1]))
                  : ((t[o][r][0] = 0), (t[o][r][1] = 0));
              }
        },
      },
      uo = function (t, e, r) {
        var n = e.map(function (t) {
            return t.props.dataKey;
          }),
          i = ui[r];
        return (function () {
          var t = t6([]),
            e = l9,
            r = l7,
            n = ct;
          function i(i) {
            var o,
              a,
              l = Array.from(t.apply(this, arguments), ce),
              c = l.length,
              u = -1;
            for (let t of i)
              for (o = 0, ++u; o < c; ++o)
                (l[o][u] = [0, +n(t, l[o].key, u, i)]).data = t;
            for (o = 0, a = l8(e(l)); o < c; ++o) l[a[o]].index = o;
            return (r(l, a), l);
          }
          return (
            (i.keys = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : t6(Array.from(e))), i)
                : t;
            }),
            (i.value = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : t6(+t)), i)
                : n;
            }),
            (i.order = function (t) {
              return arguments.length
                ? ((e =
                    null == t
                      ? l9
                      : "function" == typeof t
                        ? t
                        : t6(Array.from(t))),
                  i)
                : e;
            }),
            (i.offset = function (t) {
              return arguments.length ? ((r = null == t ? l7 : t), i) : r;
            }),
            i
          );
        })()
          .keys(n)
          .value(function (t, e) {
            return +cG(t, e, 0);
          })
          .order(l9)
          .offset(i)(t);
      },
      ua = function (t, e, r, n, i, o) {
        if (!t) return null;
        var a = (o ? e.reverse() : e).reduce(function (t, e) {
          var i,
            o =
              null != (i = e.type) && i.defaultProps
                ? cX(cX({}, e.type.defaultProps), e.props)
                : e.props,
            a = o.stackId;
          if (o.hide) return t;
          var l = o[r],
            c = t[l] || { hasStack: !1, stackGroups: {} };
          if (L(a)) {
            var u = c.stackGroups[a] || {
              numericAxisId: r,
              cateAxisId: n,
              items: [],
            };
            (u.items.push(e), (c.hasStack = !0), (c.stackGroups[a] = u));
          } else
            c.stackGroups[R("_stackId_")] = {
              numericAxisId: r,
              cateAxisId: n,
              items: [e],
            };
          return cX(cX({}, t), {}, cK({}, l, c));
        }, {});
        return Object.keys(a).reduce(function (e, o) {
          var l = a[o];
          return (
            l.hasStack &&
              (l.stackGroups = Object.keys(l.stackGroups).reduce(function (
                e,
                o,
              ) {
                var a = l.stackGroups[o];
                return cX(
                  cX({}, e),
                  {},
                  cK({}, o, {
                    numericAxisId: r,
                    cateAxisId: n,
                    items: a.items,
                    stackedData: uo(t, a.items, i),
                  }),
                );
              }, {})),
            cX(cX({}, e), {}, cK({}, o, l))
          );
        }, {});
      },
      ul = function (t, e) {
        var r = e.realScaleType,
          n = e.type,
          i = e.tickCount,
          o = e.originalDomain,
          a = e.allowDecimals,
          l = r || e.scale;
        if ("auto" !== l && "linear" !== l) return null;
        if (i && "number" === n && o && ("auto" === o[0] || "auto" === o[1])) {
          var c = t.domain();
          if (!c.length) return null;
          var u = cA(c, i, a);
          return (
            t.domain([(0, cn.default)(u), (0, cr.default)(u)]),
            { niceTicks: u }
          );
        }
        return i && "number" === n ? { niceTicks: cE(t.domain(), i, a) } : null;
      };
    function uc(t) {
      var e = t.axis,
        r = t.ticks,
        n = t.bandSize,
        i = t.entry,
        o = t.index,
        a = t.dataKey;
      if ("category" === e.type) {
        if (
          !e.allowDuplicatedCategory &&
          e.dataKey &&
          !(0, x.default)(i[e.dataKey])
        ) {
          var l = W(r, "value", i[e.dataKey]);
          if (l) return l.coordinate + n / 2;
        }
        return r[o] ? r[o].coordinate + n / 2 : null;
      }
      var c = cG(i, (0, x.default)(a) ? e.dataKey : a);
      return (0, x.default)(c) ? null : e.scale(c);
    }
    var uu = function (t) {
        var e = t.axis,
          r = t.ticks,
          n = t.offset,
          i = t.bandSize,
          o = t.entry,
          a = t.index;
        if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
        var l = cG(o, e.dataKey, e.domain[a]);
        return (0, x.default)(l) ? null : e.scale(l) - i / 2 + n;
      },
      us = function (t) {
        var e = t.numericAxis,
          r = e.scale.domain();
        if ("number" === e.type) {
          var n = Math.min(r[0], r[1]),
            i = Math.max(r[0], r[1]);
          return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
        }
        return r[0];
      },
      uf = function (t, e) {
        var r,
          n = (
            null != (r = t.type) && r.defaultProps
              ? cX(cX({}, t.type.defaultProps), t.props)
              : t.props
          ).stackId;
        if (L(n)) {
          var i = e[n];
          if (i) {
            var o = i.items.indexOf(t);
            return o >= 0 ? i.stackedData[o] : null;
          }
        }
        return null;
      },
      up = function (t, e, r) {
        return Object.keys(t)
          .reduce(
            function (n, i) {
              var o = t[i].stackedData.reduce(
                function (t, n) {
                  var i = n.slice(e, r + 1).reduce(
                    function (t, e) {
                      return [
                        (0, cn.default)(e.concat([t[0]]).filter(I)),
                        (0, cr.default)(e.concat([t[1]]).filter(I)),
                      ];
                    },
                    [1 / 0, -1 / 0],
                  );
                  return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
                },
                [1 / 0, -1 / 0],
              );
              return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
            },
            [1 / 0, -1 / 0],
          )
          .map(function (t) {
            return t === 1 / 0 || t === -1 / 0 ? 0 : t;
          });
      },
      ud = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      uh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      uy = function (t, e, r) {
        if ((0, w.default)(t)) return t(e, r);
        if (!Array.isArray(t)) return e;
        var n = [];
        if (I(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
        else if (ud.test(t[0])) {
          var i = +ud.exec(t[0])[1];
          n[0] = e[0] - i;
        } else (0, w.default)(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
        if (I(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
        else if (uh.test(t[1])) {
          var o = +uh.exec(t[1])[1];
          n[1] = e[1] + o;
        } else (0, w.default)(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
        return n;
      },
      uv = function (t, e, r) {
        if (t && t.scale && t.scale.bandwidth) {
          var n = t.scale.bandwidth();
          if (!r || n > 0) return n;
        }
        if (t && e && e.length >= 2) {
          for (
            var i = (0, S.default)(e, function (t) {
                return t.coordinate;
              }),
              o = 1 / 0,
              a = 1,
              l = i.length;
            a < l;
            a++
          ) {
            var c = i[a],
              u = i[a - 1];
            o = Math.min((c.coordinate || 0) - (u.coordinate || 0), o);
          }
          return o === 1 / 0 ? 0 : o;
        }
        return r ? void 0 : 0;
      },
      um = function (t, e, r) {
        return !t ||
          !t.length ||
          (0, co.default)(t, (0, j.default)(r, "type.defaultProps.domain"))
          ? e
          : t;
      },
      ub = function (t, e) {
        var r = t.type.defaultProps
            ? cX(cX({}, t.type.defaultProps), t.props)
            : t.props,
          n = r.dataKey,
          i = r.name,
          o = r.unit,
          a = r.formatter,
          l = r.tooltipType,
          c = r.chartType,
          u = r.hide;
        return cX(
          cX({}, td(t, !1)),
          {},
          {
            dataKey: n,
            unit: o,
            formatter: a,
            name: i || n,
            color: cJ(t),
            value: cG(e, n),
            type: l,
            payload: e,
            chartType: c,
            hide: u,
          },
        );
      };
    function ug(t) {
      return (ug =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function ux(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function uw(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ux(Object(r), !0).forEach(function (e) {
              uO(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ux(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function uO(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ("object" != ug(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != ug(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(e, "string")),
        (e = "symbol" == ug(n) ? n : n + "") in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var uj = ["Webkit", "Moz", "O", "ms"],
      uS = function (t, e) {
        if (!t) return null;
        var r = t.replace(/(\w)/, function (t) {
            return t.toUpperCase();
          }),
          n = uj.reduce(function (t, n) {
            return uw(uw({}, t), {}, uO({}, n + r, e));
          }, {});
        return ((n[t] = e), n);
      };
    function uk(t) {
      return (uk =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function uP() {
      return (uP = Object.assign.bind()).apply(this, arguments);
    }
    function uA(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function uE(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? uA(Object(r), !0).forEach(function (e) {
              uC(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : uA(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function u_(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, uD(n.key), n));
      }
    }
    function uM() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (uM = function () {
        return !!t;
      })();
    }
    function uT(t) {
      return (uT = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function uN(t, e) {
      return (uN = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function uC(t, e, r) {
      return (
        (e = uD(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function uD(t) {
      var e = (function (t, e) {
        if ("object" != uk(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != uk(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == uk(e) ? e : e + "";
    }
    var uI = function (t) {
        var e = t.data,
          r = t.startIndex,
          n = t.endIndex,
          i = t.x,
          o = t.width,
          a = t.travellerWidth;
        if (!e || !e.length) return {};
        var l = e.length,
          c = n$()
            .domain((0, O.default)(0, l))
            .range([i, i + o - a]),
          u = c.domain().map(function (t) {
            return c(t);
          });
        return {
          isTextActive: !1,
          isSlideMoving: !1,
          isTravellerMoving: !1,
          isTravellerFocused: !1,
          startX: c(r),
          endX: c(n),
          scale: c,
          scaleValues: u,
        };
      },
      uL = function (t) {
        return t.changedTouches && !!t.changedTouches.length;
      },
      uB = (function (t) {
        var e, r;
        function n(t) {
          var e, r, i;
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          return (
            (r = n),
            (i = [t]),
            (r = uT(r)),
            uC(
              (e = (function (t, e) {
                if (e && ("object" === uk(e) || "function" == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return r;
              })(
                this,
                uM()
                  ? Reflect.construct(r, i || [], uT(this).constructor)
                  : r.apply(this, i),
              )),
              "handleDrag",
              function (t) {
                (e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t));
              },
            ),
            uC(e, "handleTouchMove", function (t) {
              null != t.changedTouches &&
                t.changedTouches.length > 0 &&
                e.handleDrag(t.changedTouches[0]);
            }),
            uC(e, "handleDragEnd", function () {
              (e.setState(
                { isTravellerMoving: !1, isSlideMoving: !1 },
                function () {
                  var t = e.props,
                    r = t.endIndex,
                    n = t.onDragEnd,
                    i = t.startIndex;
                  null == n || n({ endIndex: r, startIndex: i });
                },
              ),
                e.detachDragEndListener());
            }),
            uC(e, "handleLeaveWrapper", function () {
              (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                (e.leaveTimer = window.setTimeout(
                  e.handleDragEnd,
                  e.props.leaveTimeOut,
                ));
            }),
            uC(e, "handleEnterSlideOrTraveller", function () {
              e.setState({ isTextActive: !0 });
            }),
            uC(e, "handleLeaveSlideOrTraveller", function () {
              e.setState({ isTextActive: !1 });
            }),
            uC(e, "handleSlideDragStart", function (t) {
              var r = uL(t) ? t.changedTouches[0] : t;
              (e.setState({
                isTravellerMoving: !1,
                isSlideMoving: !0,
                slideMoveStartX: r.pageX,
              }),
                e.attachDragEndListener());
            }),
            (e.travellerDragStartHandlers = {
              startX: e.handleTravellerDragStart.bind(e, "startX"),
              endX: e.handleTravellerDragStart.bind(e, "endX"),
            }),
            (e.state = {}),
            e
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (n.prototype = Object.create(t && t.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t && uN(n, t),
          (e = [
            {
              key: "componentWillUnmount",
              value: function () {
                (this.leaveTimer &&
                  (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                  this.detachDragEndListener());
              },
            },
            {
              key: "getIndex",
              value: function (t) {
                var e = t.startX,
                  r = t.endX,
                  i = this.state.scaleValues,
                  o = this.props,
                  a = o.gap,
                  l = o.data.length - 1,
                  c = Math.min(e, r),
                  u = Math.max(e, r),
                  s = n.getIndexInRange(i, c),
                  f = n.getIndexInRange(i, u);
                return {
                  startIndex: s - (s % a),
                  endIndex: f === l ? l : f - (f % a),
                };
              },
            },
            {
              key: "getTextOfTick",
              value: function (t) {
                var e = this.props,
                  r = e.data,
                  n = e.tickFormatter,
                  i = e.dataKey,
                  o = cG(r[t], i, t);
                return (0, w.default)(n) ? n(o, t) : o;
              },
            },
            {
              key: "attachDragEndListener",
              value: function () {
                (window.addEventListener("mouseup", this.handleDragEnd, !0),
                  window.addEventListener("touchend", this.handleDragEnd, !0),
                  window.addEventListener("mousemove", this.handleDrag, !0));
              },
            },
            {
              key: "detachDragEndListener",
              value: function () {
                (window.removeEventListener("mouseup", this.handleDragEnd, !0),
                  window.removeEventListener(
                    "touchend",
                    this.handleDragEnd,
                    !0,
                  ),
                  window.removeEventListener("mousemove", this.handleDrag, !0));
              },
            },
            {
              key: "handleSlideDrag",
              value: function (t) {
                var e = this.state,
                  r = e.slideMoveStartX,
                  n = e.startX,
                  i = e.endX,
                  o = this.props,
                  a = o.x,
                  l = o.width,
                  c = o.travellerWidth,
                  u = o.startIndex,
                  s = o.endIndex,
                  f = o.onChange,
                  p = t.pageX - r;
                p > 0
                  ? (p = Math.min(p, a + l - c - i, a + l - c - n))
                  : p < 0 && (p = Math.max(p, a - n, a - i));
                var d = this.getIndex({ startX: n + p, endX: i + p });
                ((d.startIndex !== u || d.endIndex !== s) && f && f(d),
                  this.setState({
                    startX: n + p,
                    endX: i + p,
                    slideMoveStartX: t.pageX,
                  }));
              },
            },
            {
              key: "handleTravellerDragStart",
              value: function (t, e) {
                var r = uL(e) ? e.changedTouches[0] : e;
                (this.setState({
                  isSlideMoving: !1,
                  isTravellerMoving: !0,
                  movingTravellerId: t,
                  brushMoveStartX: r.pageX,
                }),
                  this.attachDragEndListener());
              },
            },
            {
              key: "handleTravellerMove",
              value: function (t) {
                var e = this.state,
                  r = e.brushMoveStartX,
                  n = e.movingTravellerId,
                  i = e.endX,
                  o = e.startX,
                  a = this.state[n],
                  l = this.props,
                  c = l.x,
                  u = l.width,
                  s = l.travellerWidth,
                  f = l.onChange,
                  p = l.gap,
                  d = l.data,
                  h = { startX: this.state.startX, endX: this.state.endX },
                  y = t.pageX - r;
                (y > 0
                  ? (y = Math.min(y, c + u - s - a))
                  : y < 0 && (y = Math.max(y, c - a)),
                  (h[n] = a + y));
                var v = this.getIndex(h),
                  m = v.startIndex,
                  b = v.endIndex,
                  g = function () {
                    var t = d.length - 1;
                    return (
                      ("startX" === n && (i > o ? m % p == 0 : b % p == 0)) ||
                      (!!(i < o) && b === t) ||
                      ("endX" === n && (i > o ? b % p == 0 : m % p == 0)) ||
                      (!!(i > o) && b === t)
                    );
                  };
                this.setState(
                  uC(uC({}, n, a + y), "brushMoveStartX", t.pageX),
                  function () {
                    f && g() && f(v);
                  },
                );
              },
            },
            {
              key: "handleTravellerMoveKeyboard",
              value: function (t, e) {
                var r = this,
                  n = this.state,
                  i = n.scaleValues,
                  o = n.startX,
                  a = n.endX,
                  l = this.state[e],
                  c = i.indexOf(l);
                if (-1 !== c) {
                  var u = c + t;
                  if (-1 !== u && !(u >= i.length)) {
                    var s = i[u];
                    ("startX" === e && s >= a) ||
                      ("endX" === e && s <= o) ||
                      this.setState(uC({}, e, s), function () {
                        r.props.onChange(
                          r.getIndex({
                            startX: r.state.startX,
                            endX: r.state.endX,
                          }),
                        );
                      });
                  }
                }
              },
            },
            {
              key: "renderBackground",
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  n = t.width,
                  i = t.height,
                  o = t.fill,
                  a = t.stroke;
                return f.default.createElement("rect", {
                  stroke: a,
                  fill: o,
                  x: e,
                  y: r,
                  width: n,
                  height: i,
                });
              },
            },
            {
              key: "renderPanorama",
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  n = t.width,
                  i = t.height,
                  o = t.data,
                  a = t.children,
                  l = t.padding,
                  c = f.Children.only(a);
                return c
                  ? f.default.cloneElement(c, {
                      x: e,
                      y: r,
                      width: n,
                      height: i,
                      margin: l,
                      compact: !0,
                      data: o,
                    })
                  : null;
              },
            },
            {
              key: "renderTravellerLayer",
              value: function (t, e) {
                var r,
                  i,
                  o = this,
                  a = this.props,
                  l = a.y,
                  c = a.travellerWidth,
                  u = a.height,
                  s = a.traveller,
                  p = a.ariaLabel,
                  d = a.data,
                  h = a.startIndex,
                  y = a.endIndex,
                  v = Math.max(t, this.props.x),
                  m = uE(
                    uE({}, td(this.props, !1)),
                    {},
                    { x: v, y: l, width: c, height: u },
                  ),
                  b =
                    p ||
                    "Min value: "
                      .concat(
                        null == (r = d[h]) ? void 0 : r.name,
                        ", Max value: ",
                      )
                      .concat(null == (i = d[y]) ? void 0 : i.name);
                return f.default.createElement(
                  tj,
                  {
                    tabIndex: 0,
                    role: "slider",
                    "aria-label": b,
                    "aria-valuenow": t,
                    className: "recharts-brush-traveller",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[e],
                    onTouchStart: this.travellerDragStartHandlers[e],
                    onKeyDown: function (t) {
                      ["ArrowLeft", "ArrowRight"].includes(t.key) &&
                        (t.preventDefault(),
                        t.stopPropagation(),
                        o.handleTravellerMoveKeyboard(
                          "ArrowRight" === t.key ? 1 : -1,
                          e,
                        ));
                    },
                    onFocus: function () {
                      o.setState({ isTravellerFocused: !0 });
                    },
                    onBlur: function () {
                      o.setState({ isTravellerFocused: !1 });
                    },
                    style: { cursor: "col-resize" },
                  },
                  n.renderTraveller(s, m),
                );
              },
            },
            {
              key: "renderSlide",
              value: function (t, e) {
                var r = this.props,
                  n = r.y,
                  i = r.height,
                  o = r.stroke,
                  a = r.travellerWidth,
                  l = Math.min(t, e) + a,
                  c = Math.max(Math.abs(e - t) - a, 0);
                return f.default.createElement("rect", {
                  className: "recharts-brush-slide",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.handleSlideDragStart,
                  onTouchStart: this.handleSlideDragStart,
                  style: { cursor: "move" },
                  stroke: "none",
                  fill: o,
                  fillOpacity: 0.2,
                  x: l,
                  y: n,
                  width: c,
                  height: i,
                });
              },
            },
            {
              key: "renderText",
              value: function () {
                var t = this.props,
                  e = t.startIndex,
                  r = t.endIndex,
                  n = t.y,
                  i = t.height,
                  o = t.travellerWidth,
                  a = t.stroke,
                  l = this.state,
                  c = l.startX,
                  u = l.endX,
                  s = { pointerEvents: "none", fill: a };
                return f.default.createElement(
                  tj,
                  { className: "recharts-brush-texts" },
                  f.default.createElement(
                    ih,
                    uP(
                      {
                        textAnchor: "end",
                        verticalAnchor: "middle",
                        x: Math.min(c, u) - 5,
                        y: n + i / 2,
                      },
                      s,
                    ),
                    this.getTextOfTick(e),
                  ),
                  f.default.createElement(
                    ih,
                    uP(
                      {
                        textAnchor: "start",
                        verticalAnchor: "middle",
                        x: Math.max(c, u) + o + 5,
                        y: n + i / 2,
                      },
                      s,
                    ),
                    this.getTextOfTick(r),
                  ),
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.data,
                  r = t.className,
                  n = t.children,
                  i = t.x,
                  o = t.y,
                  a = t.width,
                  l = t.height,
                  c = t.alwaysShowText,
                  u = this.state,
                  s = u.startX,
                  p = u.endX,
                  d = u.isTextActive,
                  h = u.isSlideMoving,
                  y = u.isTravellerMoving,
                  v = u.isTravellerFocused;
                if (
                  !e ||
                  !e.length ||
                  !I(i) ||
                  !I(o) ||
                  !I(a) ||
                  !I(l) ||
                  a <= 0 ||
                  l <= 0
                )
                  return null;
                var m = P("recharts-brush", r),
                  b = 1 === f.default.Children.count(n),
                  g = uS("userSelect", "none");
                return f.default.createElement(
                  tj,
                  {
                    className: m,
                    onMouseLeave: this.handleLeaveWrapper,
                    onTouchMove: this.handleTouchMove,
                    style: g,
                  },
                  this.renderBackground(),
                  b && this.renderPanorama(),
                  this.renderSlide(s, p),
                  this.renderTravellerLayer(s, "startX"),
                  this.renderTravellerLayer(p, "endX"),
                  (d || h || y || v || c) && this.renderText(),
                );
              },
            },
          ]),
          (r = [
            {
              key: "renderDefaultTraveller",
              value: function (t) {
                var e = t.x,
                  r = t.y,
                  n = t.width,
                  i = t.height,
                  o = t.stroke,
                  a = Math.floor(r + i / 2) - 1;
                return f.default.createElement(
                  f.default.Fragment,
                  null,
                  f.default.createElement("rect", {
                    x: e,
                    y: r,
                    width: n,
                    height: i,
                    fill: o,
                    stroke: "none",
                  }),
                  f.default.createElement("line", {
                    x1: e + 1,
                    y1: a,
                    x2: e + n - 1,
                    y2: a,
                    fill: "none",
                    stroke: "#fff",
                  }),
                  f.default.createElement("line", {
                    x1: e + 1,
                    y1: a + 2,
                    x2: e + n - 1,
                    y2: a + 2,
                    fill: "none",
                    stroke: "#fff",
                  }),
                );
              },
            },
            {
              key: "renderTraveller",
              value: function (t, e) {
                return f.default.isValidElement(t)
                  ? f.default.cloneElement(t, e)
                  : (0, w.default)(t)
                    ? t(e)
                    : n.renderDefaultTraveller(e);
              },
            },
            {
              key: "getDerivedStateFromProps",
              value: function (t, e) {
                var r = t.data,
                  n = t.width,
                  i = t.x,
                  o = t.travellerWidth,
                  a = t.updateId,
                  l = t.startIndex,
                  c = t.endIndex;
                if (r !== e.prevData || a !== e.prevUpdateId)
                  return uE(
                    {
                      prevData: r,
                      prevTravellerWidth: o,
                      prevUpdateId: a,
                      prevX: i,
                      prevWidth: n,
                    },
                    r && r.length
                      ? uI({
                          data: r,
                          width: n,
                          x: i,
                          travellerWidth: o,
                          startIndex: l,
                          endIndex: c,
                        })
                      : { scale: null, scaleValues: null },
                  );
                if (
                  e.scale &&
                  (n !== e.prevWidth ||
                    i !== e.prevX ||
                    o !== e.prevTravellerWidth)
                ) {
                  e.scale.range([i, i + n - o]);
                  var u = e.scale.domain().map(function (t) {
                    return e.scale(t);
                  });
                  return {
                    prevData: r,
                    prevTravellerWidth: o,
                    prevUpdateId: a,
                    prevX: i,
                    prevWidth: n,
                    startX: e.scale(t.startIndex),
                    endX: e.scale(t.endIndex),
                    scaleValues: u,
                  };
                }
                return null;
              },
            },
            {
              key: "getIndexInRange",
              value: function (t, e) {
                for (var r = t.length, n = 0, i = r - 1; i - n > 1; ) {
                  var o = Math.floor((n + i) / 2);
                  t[o] > e ? (i = o) : (n = o);
                }
                return e >= t[i] ? i : n;
              },
            },
          ]),
          e && u_(n.prototype, e),
          r && u_(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(f.PureComponent);
    function uR(t) {
      return (uR =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function uz(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function uF(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? uz(Object(r), !0).forEach(function (e) {
              uU(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : uz(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function uU(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ("object" != uR(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != uR(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(e, "string")),
        (e = "symbol" == uR(n) ? n : n + "") in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function u$(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    (uC(uB, "displayName", "Brush"),
      uC(uB, "defaultProps", {
        height: 40,
        travellerWidth: 5,
        gap: 1,
        fill: "#fff",
        stroke: "#666",
        padding: { top: 1, right: 1, bottom: 1, left: 1 },
        leaveTimeOut: 1e3,
        alwaysShowText: !1,
      }));
    var uW = Math.PI / 180,
      uV = function (t, e, r, n) {
        return { x: t + Math.cos(-uW * n) * r, y: e + Math.sin(-uW * n) * r };
      },
      uq = function (t, e) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { top: 0, right: 0, bottom: 0, left: 0 };
        return (
          Math.min(
            Math.abs(t - (r.left || 0) - (r.right || 0)),
            Math.abs(e - (r.top || 0) - (r.bottom || 0)),
          ) / 2
        );
      },
      uH = function (t, e) {
        var r = t.x,
          n = t.y;
        return Math.sqrt(Math.pow(r - e.x, 2) + Math.pow(n - e.y, 2));
      },
      uX = function (t, e) {
        var r = t.x,
          n = t.y,
          i = e.cx,
          o = e.cy,
          a = uH({ x: r, y: n }, { x: i, y: o });
        if (a <= 0) return { radius: a };
        var l = Math.acos((r - i) / a);
        return (
          n > o && (l = 2 * Math.PI - l),
          { radius: a, angle: (180 * l) / Math.PI, angleInRadian: l }
        );
      },
      uK = function (t) {
        var e = t.startAngle,
          r = t.endAngle,
          n = Math.min(Math.floor(e / 360), Math.floor(r / 360));
        return { startAngle: e - 360 * n, endAngle: r - 360 * n };
      },
      uG = function (t, e) {
        var r,
          n = uX({ x: t.x, y: t.y }, e),
          i = n.radius,
          o = n.angle,
          a = e.innerRadius,
          l = e.outerRadius;
        if (i < a || i > l) return !1;
        if (0 === i) return !0;
        var c = uK(e),
          u = c.startAngle,
          s = c.endAngle,
          f = o;
        if (u <= s) {
          for (; f > s; ) f -= 360;
          for (; f < u; ) f += 360;
          r = f >= u && f <= s;
        } else {
          for (; f > u; ) f -= 360;
          for (; f < s; ) f += 360;
          r = f >= s && f <= u;
        }
        return r
          ? uF(
              uF({}, e),
              {},
              {
                radius: i,
                angle:
                  f +
                  360 *
                    Math.min(
                      Math.floor(e.startAngle / 360),
                      Math.floor(e.endAngle / 360),
                    ),
              },
            )
          : null;
      },
      uY = function (t) {
        return (0, f.isValidElement)(t) ||
          (0, w.default)(t) ||
          "boolean" == typeof t
          ? ""
          : t.className;
      };
    function uZ(t) {
      return (uZ =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var uJ = ["offset"];
    function uQ(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function u0(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function u1(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u0(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != uZ(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != uZ(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == uZ(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u0(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function u2() {
      return (u2 = Object.assign.bind()).apply(this, arguments);
    }
    var u5 = function (t) {
        var e = t.value,
          r = t.formatter,
          n = (0, x.default)(t.children) ? e : t.children;
        return (0, w.default)(r) ? r(n) : n;
      },
      u3 = function (t, e, r) {
        var n,
          i,
          o = t.position,
          a = t.viewBox,
          l = t.offset,
          c = t.className,
          u = a.cx,
          s = a.cy,
          p = a.innerRadius,
          d = a.outerRadius,
          h = a.startAngle,
          y = a.endAngle,
          v = a.clockWise,
          m = (p + d) / 2,
          b = C(y - h) * Math.min(Math.abs(y - h), 360),
          g = b >= 0 ? 1 : -1;
        ("insideStart" === o
          ? ((n = h + g * l), (i = v))
          : "insideEnd" === o
            ? ((n = y - g * l), (i = !v))
            : "end" === o && ((n = y + g * l), (i = v)),
          (i = b <= 0 ? i : !i));
        var w = uV(u, s, m, n),
          O = uV(u, s, m, n + (i ? 1 : -1) * 359),
          j = "M"
            .concat(w.x, ",")
            .concat(w.y, "\n    A")
            .concat(m, ",")
            .concat(m, ",0,1,")
            .concat(+!i, ",\n    ")
            .concat(O.x, ",")
            .concat(O.y),
          S = (0, x.default)(t.id) ? R("recharts-radial-line-") : t.id;
        return f.default.createElement(
          "text",
          u2({}, r, {
            dominantBaseline: "central",
            className: P("recharts-radial-bar-label", c),
          }),
          f.default.createElement(
            "defs",
            null,
            f.default.createElement("path", { id: S, d: j }),
          ),
          f.default.createElement("textPath", { xlinkHref: "#".concat(S) }, e),
        );
      },
      u4 = function (t) {
        var e = t.viewBox,
          r = t.offset,
          n = t.position,
          i = e.cx,
          o = e.cy,
          a = e.innerRadius,
          l = e.outerRadius,
          c = (e.startAngle + e.endAngle) / 2;
        if ("outside" === n) {
          var u = uV(i, o, l + r, c),
            s = u.x;
          return {
            x: s,
            y: u.y,
            textAnchor: s >= i ? "start" : "end",
            verticalAnchor: "middle",
          };
        }
        if ("center" === n)
          return { x: i, y: o, textAnchor: "middle", verticalAnchor: "middle" };
        if ("centerTop" === n)
          return { x: i, y: o, textAnchor: "middle", verticalAnchor: "start" };
        if ("centerBottom" === n)
          return { x: i, y: o, textAnchor: "middle", verticalAnchor: "end" };
        var f = uV(i, o, (a + l) / 2, c);
        return {
          x: f.x,
          y: f.y,
          textAnchor: "middle",
          verticalAnchor: "middle",
        };
      },
      u6 = function (t) {
        var e = t.viewBox,
          r = t.parentViewBox,
          n = t.offset,
          i = t.position,
          o = e.x,
          a = e.y,
          l = e.width,
          c = e.height,
          u = c >= 0 ? 1 : -1,
          s = u * n,
          f = u > 0 ? "end" : "start",
          p = u > 0 ? "start" : "end",
          d = l >= 0 ? 1 : -1,
          h = d * n,
          y = d > 0 ? "end" : "start",
          v = d > 0 ? "start" : "end";
        if ("top" === i)
          return u1(
            u1(
              {},
              {
                x: o + l / 2,
                y: a - u * n,
                textAnchor: "middle",
                verticalAnchor: f,
              },
            ),
            r ? { height: Math.max(a - r.y, 0), width: l } : {},
          );
        if ("bottom" === i)
          return u1(
            u1(
              {},
              {
                x: o + l / 2,
                y: a + c + s,
                textAnchor: "middle",
                verticalAnchor: p,
              },
            ),
            r
              ? { height: Math.max(r.y + r.height - (a + c), 0), width: l }
              : {},
          );
        if ("left" === i) {
          var m = {
            x: o - h,
            y: a + c / 2,
            textAnchor: y,
            verticalAnchor: "middle",
          };
          return u1(
            u1({}, m),
            r ? { width: Math.max(m.x - r.x, 0), height: c } : {},
          );
        }
        if ("right" === i) {
          var b = {
            x: o + l + h,
            y: a + c / 2,
            textAnchor: v,
            verticalAnchor: "middle",
          };
          return u1(
            u1({}, b),
            r ? { width: Math.max(r.x + r.width - b.x, 0), height: c } : {},
          );
        }
        var g = r ? { width: l, height: c } : {};
        return "insideLeft" === i
          ? u1(
              {
                x: o + h,
                y: a + c / 2,
                textAnchor: v,
                verticalAnchor: "middle",
              },
              g,
            )
          : "insideRight" === i
            ? u1(
                {
                  x: o + l - h,
                  y: a + c / 2,
                  textAnchor: y,
                  verticalAnchor: "middle",
                },
                g,
              )
            : "insideTop" === i
              ? u1(
                  {
                    x: o + l / 2,
                    y: a + s,
                    textAnchor: "middle",
                    verticalAnchor: p,
                  },
                  g,
                )
              : "insideBottom" === i
                ? u1(
                    {
                      x: o + l / 2,
                      y: a + c - s,
                      textAnchor: "middle",
                      verticalAnchor: f,
                    },
                    g,
                  )
                : "insideTopLeft" === i
                  ? u1(
                      { x: o + h, y: a + s, textAnchor: v, verticalAnchor: p },
                      g,
                    )
                  : "insideTopRight" === i
                    ? u1(
                        {
                          x: o + l - h,
                          y: a + s,
                          textAnchor: y,
                          verticalAnchor: p,
                        },
                        g,
                      )
                    : "insideBottomLeft" === i
                      ? u1(
                          {
                            x: o + h,
                            y: a + c - s,
                            textAnchor: v,
                            verticalAnchor: f,
                          },
                          g,
                        )
                      : "insideBottomRight" === i
                        ? u1(
                            {
                              x: o + l - h,
                              y: a + c - s,
                              textAnchor: y,
                              verticalAnchor: f,
                            },
                            g,
                          )
                        : (0, _.default)(i) &&
                            (I(i.x) || D(i.x)) &&
                            (I(i.y) || D(i.y))
                          ? u1(
                              {
                                x: o + z(i.x, l),
                                y: a + z(i.y, c),
                                textAnchor: "end",
                                verticalAnchor: "end",
                              },
                              g,
                            )
                          : u1(
                              {
                                x: o + l / 2,
                                y: a + c / 2,
                                textAnchor: "middle",
                                verticalAnchor: "middle",
                              },
                              g,
                            );
      };
    function u8(t) {
      var e,
        r = t.offset,
        n = u1(
          { offset: void 0 === r ? 5 : r },
          (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (n = 0; n < o.length; n++)
                ((r = o[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (i[r] = t[r]));
            }
            return i;
          })(t, uJ),
        ),
        i = n.viewBox,
        o = n.position,
        a = n.value,
        l = n.children,
        c = n.content,
        u = n.className,
        s = n.textBreakAll;
      if (
        !i ||
        ((0, x.default)(a) &&
          (0, x.default)(l) &&
          !(0, f.isValidElement)(c) &&
          !(0, w.default)(c))
      )
        return null;
      if ((0, f.isValidElement)(c)) return (0, f.cloneElement)(c, n);
      if ((0, w.default)(c)) {
        if (((e = (0, f.createElement)(c, n)), (0, f.isValidElement)(e)))
          return e;
      } else e = u5(n);
      var p = "cx" in i && I(i.cx),
        d = td(n, !0);
      if (p && ("insideStart" === o || "insideEnd" === o || "end" === o))
        return u3(n, e, d);
      var h = p ? u4(n) : u6(n);
      return f.default.createElement(
        ih,
        u2({ className: P("recharts-label", void 0 === u ? "" : u) }, d, h, {
          breakAll: s,
        }),
        e,
      );
    }
    u8.displayName = "Label";
    var u7 = function (t) {
      var e = t.cx,
        r = t.cy,
        n = t.angle,
        i = t.startAngle,
        o = t.endAngle,
        a = t.r,
        l = t.radius,
        c = t.innerRadius,
        u = t.outerRadius,
        s = t.x,
        f = t.y,
        p = t.top,
        d = t.left,
        h = t.width,
        y = t.height,
        v = t.clockWise,
        m = t.labelViewBox;
      if (m) return m;
      if (I(h) && I(y)) {
        if (I(s) && I(f)) return { x: s, y: f, width: h, height: y };
        if (I(p) && I(d)) return { x: p, y: d, width: h, height: y };
      }
      return I(s) && I(f)
        ? { x: s, y: f, width: 0, height: 0 }
        : I(e) && I(r)
          ? {
              cx: e,
              cy: r,
              startAngle: i || n || 0,
              endAngle: o || n || 0,
              innerRadius: c || 0,
              outerRadius: u || l || a || 0,
              clockWise: v,
            }
          : t.viewBox
            ? t.viewBox
            : {};
    };
    ((u8.parseViewBox = u7),
      (u8.renderCallByParent = function (t, e) {
        var r,
          n,
          i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!t || (!t.children && i && !t.label)) return null;
        var o = t.children,
          a = u7(t),
          l = tc(o, u8).map(function (t, r) {
            return (0, f.cloneElement)(t, {
              viewBox: e || a,
              key: "label-".concat(r),
            });
          });
        if (!i) return l;
        return [
          ((r = t.label),
          (n = e || a),
          !r
            ? null
            : !0 === r
              ? f.default.createElement(u8, {
                  key: "label-implicit",
                  viewBox: n,
                })
              : L(r)
                ? f.default.createElement(u8, {
                    key: "label-implicit",
                    viewBox: n,
                    value: r,
                  })
                : (0, f.isValidElement)(r)
                  ? r.type === u8
                    ? (0, f.cloneElement)(r, {
                        key: "label-implicit",
                        viewBox: n,
                      })
                    : f.default.createElement(u8, {
                        key: "label-implicit",
                        content: r,
                        viewBox: n,
                      })
                  : (0, w.default)(r)
                    ? f.default.createElement(u8, {
                        key: "label-implicit",
                        content: r,
                        viewBox: n,
                      })
                    : (0, _.default)(r)
                      ? f.default.createElement(
                          u8,
                          u2({ viewBox: n }, r, { key: "label-implicit" }),
                        )
                      : null),
        ].concat(
          (function (t) {
            if (Array.isArray(t)) return uQ(t);
          })(l) ||
            (function (t) {
              if (
                ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(l) ||
            (function (t) {
              if (t) {
                if ("string" == typeof t) return uQ(t, void 0);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === e && t.constructor && (e = t.constructor.name),
                  "Map" === e || "Set" === e)
                )
                  return Array.from(t);
                if (
                  "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return uQ(t, void 0);
              }
            })(l) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
        );
      }));
    var u9 = function (t, e) {
        var r = t.alwaysShow,
          n = t.ifOverflow;
        return (r && (n = "extendDomain"), n === e);
      },
      st = t.i(60793),
      se = t.i(26063),
      sr = function (t) {
        return null;
      };
    sr.displayName = "Cell";
    var sn = t.i(4879);
    function si(t) {
      return (si =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var so = ["valueAccessor"],
      sa = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
    function sl(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function sc() {
      return (sc = Object.assign.bind()).apply(this, arguments);
    }
    function su(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function ss(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? su(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != si(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != si(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == si(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : su(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function sf(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    var sp = function (t) {
      return Array.isArray(t.value) ? (0, sn.default)(t.value) : t.value;
    };
    function sd(t) {
      var e = t.valueAccessor,
        r = void 0 === e ? sp : e,
        n = sf(t, so),
        i = n.data,
        o = n.dataKey,
        a = n.clockWise,
        l = n.id,
        c = n.textBreakAll,
        u = sf(n, sa);
      return i && i.length
        ? f.default.createElement(
            tj,
            { className: "recharts-label-list" },
            i.map(function (t, e) {
              var n = (0, x.default)(o) ? r(t, e) : cG(t && t.payload, o),
                i = (0, x.default)(l)
                  ? {}
                  : { id: "".concat(l, "-").concat(e) };
              return f.default.createElement(
                u8,
                sc({}, td(t, !0), u, i, {
                  parentViewBox: t.parentViewBox,
                  value: n,
                  textBreakAll: c,
                  viewBox: u8.parseViewBox(
                    (0, x.default)(a) ? t : ss(ss({}, t), {}, { clockWise: a }),
                  ),
                  key: "label-".concat(e),
                  index: e,
                }),
              );
            }),
          )
        : null;
    }
    ((sd.displayName = "LabelList"),
      (sd.renderCallByParent = function (t, e) {
        var r,
          n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!t || (!t.children && n && !t.label)) return null;
        var i = tc(t.children, sd).map(function (t, r) {
          return (0, f.cloneElement)(t, {
            data: e,
            key: "labelList-".concat(r),
          });
        });
        return n
          ? [
              ((r = t.label),
              !r
                ? null
                : !0 === r
                  ? f.default.createElement(sd, {
                      key: "labelList-implicit",
                      data: e,
                    })
                  : f.default.isValidElement(r) || (0, w.default)(r)
                    ? f.default.createElement(sd, {
                        key: "labelList-implicit",
                        data: e,
                        content: r,
                      })
                    : (0, _.default)(r)
                      ? f.default.createElement(
                          sd,
                          sc({ data: e }, r, { key: "labelList-implicit" }),
                        )
                      : null),
            ].concat(
              (function (t) {
                if (Array.isArray(t)) return sl(t);
              })(i) ||
                (function (t) {
                  if (
                    ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                  )
                    return Array.from(t);
                })(i) ||
                (function (t) {
                  if (t) {
                    if ("string" == typeof t) return sl(t, void 0);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    if (
                      ("Object" === e &&
                        t.constructor &&
                        (e = t.constructor.name),
                      "Map" === e || "Set" === e)
                    )
                      return Array.from(t);
                    if (
                      "Arguments" === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    )
                      return sl(t, void 0);
                  }
                })(i) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(),
            )
          : i;
      }));
    var sh = t.i(1320),
      sy = t.i(20164);
    function sv(t) {
      return (sv =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function sm() {
      return (sm = Object.assign.bind()).apply(this, arguments);
    }
    function sb(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function sg(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function sx(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sg(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != sv(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != sv(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == sv(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sg(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    var sw = function (t, e, r, n, i) {
        var o = r - n;
        return (
          "M ".concat(t, ",").concat(e) +
          "L ".concat(t + r, ",").concat(e) +
          "L ".concat(t + r - o / 2, ",").concat(e + i) +
          "L ".concat(t + r - o / 2 - n, ",").concat(e + i) +
          "L ".concat(t, ",").concat(e, " Z")
        );
      },
      sO = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
      },
      sj = function (t) {
        var e,
          r = sx(sx({}, sO), t),
          n = (0, f.useRef)(),
          i =
            (function (t) {
              if (Array.isArray(t)) return t;
            })((e = (0, f.useState)(-1))) ||
            (function (t) {
              var e =
                null == t
                  ? null
                  : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != e) {
                var r,
                  n,
                  i,
                  o,
                  a = [],
                  l = !0,
                  c = !1;
                try {
                  ((i = (e = e.call(t)).next), !1);
                  for (
                    ;
                    !(l = (r = i.call(e)).done) &&
                    (a.push(r.value), 2 !== a.length);
                    l = !0
                  );
                } catch (t) {
                  ((c = !0), (n = t));
                } finally {
                  try {
                    if (
                      !l &&
                      null != e.return &&
                      ((o = e.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw n;
                  }
                }
                return a;
              }
            })(e) ||
            (function (t) {
              if (t) {
                if ("string" == typeof t) return sb(t, 2);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === e && t.constructor && (e = t.constructor.name),
                  "Map" === e || "Set" === e)
                )
                  return Array.from(t);
                if (
                  "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return sb(t, 2);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          o = i[0],
          a = i[1];
        (0, f.useEffect)(function () {
          if (n.current && n.current.getTotalLength)
            try {
              var t = n.current.getTotalLength();
              t && a(t);
            } catch (t) {}
        }, []);
        var l = r.x,
          c = r.y,
          u = r.upperWidth,
          s = r.lowerWidth,
          p = r.height,
          d = r.className,
          h = r.animationEasing,
          y = r.animationDuration,
          v = r.animationBegin,
          m = r.isUpdateAnimationActive;
        if (
          l !== +l ||
          c !== +c ||
          u !== +u ||
          s !== +s ||
          p !== +p ||
          (0 === u && 0 === s) ||
          0 === p
        )
          return null;
        var b = P("recharts-trapezoid", d);
        return m
          ? f.default.createElement(
              r3,
              {
                canBegin: o > 0,
                from: { upperWidth: 0, lowerWidth: 0, height: p, x: l, y: c },
                to: { upperWidth: u, lowerWidth: s, height: p, x: l, y: c },
                duration: y,
                animationEasing: h,
                isActive: m,
              },
              function (t) {
                var e = t.upperWidth,
                  i = t.lowerWidth,
                  a = t.height,
                  l = t.x,
                  c = t.y;
                return f.default.createElement(
                  r3,
                  {
                    canBegin: o > 0,
                    from: "0px ".concat(-1 === o ? 1 : o, "px"),
                    to: "".concat(o, "px 0px"),
                    attributeName: "strokeDasharray",
                    begin: v,
                    duration: y,
                    easing: h,
                  },
                  f.default.createElement(
                    "path",
                    sm({}, td(r, !0), {
                      className: b,
                      d: sw(l, c, e, i, a),
                      ref: n,
                    }),
                  ),
                );
              },
            )
          : f.default.createElement(
              "g",
              null,
              f.default.createElement(
                "path",
                sm({}, td(r, !0), { className: b, d: sw(l, c, u, s, p) }),
              ),
            );
      };
    function sS(t) {
      return (sS =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function sk() {
      return (sk = Object.assign.bind()).apply(this, arguments);
    }
    function sP(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function sA(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sP(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != sS(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != sS(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == sS(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sP(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    var sE = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          i = t.angle,
          o = t.sign,
          a = t.isExternal,
          l = t.cornerRadius,
          c = t.cornerIsExternal,
          u = l * (a ? 1 : -1) + n,
          s = Math.asin(l / u) / uW,
          f = c ? i : i + o * s;
        return {
          center: uV(e, r, u, f),
          circleTangency: uV(e, r, n, f),
          lineTangency: uV(e, r, u * Math.cos(s * uW), c ? i - o * s : i),
          theta: s,
        };
      },
      s_ = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.innerRadius,
          i = t.outerRadius,
          o = t.startAngle,
          a = t.endAngle,
          l = C(a - o) * Math.min(Math.abs(a - o), 359.999),
          c = o + l,
          u = uV(e, r, i, o),
          s = uV(e, r, i, c),
          f = "M "
            .concat(u.x, ",")
            .concat(u.y, "\n    A ")
            .concat(i, ",")
            .concat(i, ",0,\n    ")
            .concat(+(Math.abs(l) > 180), ",")
            .concat(+(o > c), ",\n    ")
            .concat(s.x, ",")
            .concat(s.y, "\n  ");
        if (n > 0) {
          var p = uV(e, r, n, o),
            d = uV(e, r, n, c);
          f += "L "
            .concat(d.x, ",")
            .concat(d.y, "\n            A ")
            .concat(n, ",")
            .concat(n, ",0,\n            ")
            .concat(+(Math.abs(l) > 180), ",")
            .concat(+(o <= c), ",\n            ")
            .concat(p.x, ",")
            .concat(p.y, " Z");
        } else f += "L ".concat(e, ",").concat(r, " Z");
        return f;
      },
      sM = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.innerRadius,
          i = t.outerRadius,
          o = t.cornerRadius,
          a = t.forceCornerRadius,
          l = t.cornerIsExternal,
          c = t.startAngle,
          u = t.endAngle,
          s = C(u - c),
          f = sE({
            cx: e,
            cy: r,
            radius: i,
            angle: c,
            sign: s,
            cornerRadius: o,
            cornerIsExternal: l,
          }),
          p = f.circleTangency,
          d = f.lineTangency,
          h = f.theta,
          y = sE({
            cx: e,
            cy: r,
            radius: i,
            angle: u,
            sign: -s,
            cornerRadius: o,
            cornerIsExternal: l,
          }),
          v = y.circleTangency,
          m = y.lineTangency,
          b = y.theta,
          g = l ? Math.abs(c - u) : Math.abs(c - u) - h - b;
        if (g < 0)
          return a
            ? "M "
                .concat(d.x, ",")
                .concat(d.y, "\n        a")
                .concat(o, ",")
                .concat(o, ",0,0,1,")
                .concat(2 * o, ",0\n        a")
                .concat(o, ",")
                .concat(o, ",0,0,1,")
                .concat(-(2 * o), ",0\n      ")
            : s_({
                cx: e,
                cy: r,
                innerRadius: n,
                outerRadius: i,
                startAngle: c,
                endAngle: u,
              });
        var x = "M "
          .concat(d.x, ",")
          .concat(d.y, "\n    A")
          .concat(o, ",")
          .concat(o, ",0,0,")
          .concat(+(s < 0), ",")
          .concat(p.x, ",")
          .concat(p.y, "\n    A")
          .concat(i, ",")
          .concat(i, ",0,")
          .concat(+(g > 180), ",")
          .concat(+(s < 0), ",")
          .concat(v.x, ",")
          .concat(v.y, "\n    A")
          .concat(o, ",")
          .concat(o, ",0,0,")
          .concat(+(s < 0), ",")
          .concat(m.x, ",")
          .concat(m.y, "\n  ");
        if (n > 0) {
          var w = sE({
              cx: e,
              cy: r,
              radius: n,
              angle: c,
              sign: s,
              isExternal: !0,
              cornerRadius: o,
              cornerIsExternal: l,
            }),
            O = w.circleTangency,
            j = w.lineTangency,
            S = w.theta,
            k = sE({
              cx: e,
              cy: r,
              radius: n,
              angle: u,
              sign: -s,
              isExternal: !0,
              cornerRadius: o,
              cornerIsExternal: l,
            }),
            P = k.circleTangency,
            A = k.lineTangency,
            E = k.theta,
            _ = l ? Math.abs(c - u) : Math.abs(c - u) - S - E;
          if (_ < 0 && 0 === o)
            return "".concat(x, "L").concat(e, ",").concat(r, "Z");
          x += "L"
            .concat(A.x, ",")
            .concat(A.y, "\n      A")
            .concat(o, ",")
            .concat(o, ",0,0,")
            .concat(+(s < 0), ",")
            .concat(P.x, ",")
            .concat(P.y, "\n      A")
            .concat(n, ",")
            .concat(n, ",0,")
            .concat(+(_ > 180), ",")
            .concat(+(s > 0), ",")
            .concat(O.x, ",")
            .concat(O.y, "\n      A")
            .concat(o, ",")
            .concat(o, ",0,0,")
            .concat(+(s < 0), ",")
            .concat(j.x, ",")
            .concat(j.y, "Z");
        } else x += "L".concat(e, ",").concat(r, "Z");
        return x;
      },
      sT = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1,
      },
      sN = function (t) {
        var e,
          r = sA(sA({}, sT), t),
          n = r.cx,
          i = r.cy,
          o = r.innerRadius,
          a = r.outerRadius,
          l = r.cornerRadius,
          c = r.forceCornerRadius,
          u = r.cornerIsExternal,
          s = r.startAngle,
          p = r.endAngle,
          d = r.className;
        if (a < o || s === p) return null;
        var h = P("recharts-sector", d),
          y = a - o,
          v = z(l, y, 0, !0);
        return (
          (e =
            v > 0 && 360 > Math.abs(s - p)
              ? sM({
                  cx: n,
                  cy: i,
                  innerRadius: o,
                  outerRadius: a,
                  cornerRadius: Math.min(v, y / 2),
                  forceCornerRadius: c,
                  cornerIsExternal: u,
                  startAngle: s,
                  endAngle: p,
                })
              : s_({
                  cx: n,
                  cy: i,
                  innerRadius: o,
                  outerRadius: a,
                  startAngle: s,
                  endAngle: p,
                })),
          f.default.createElement(
            "path",
            sk({}, td(r, !0), { className: h, d: e, role: "img" }),
          )
        );
      },
      sC = [
        "option",
        "shapeType",
        "propTransformer",
        "activeClassName",
        "isActive",
      ];
    function sD(t) {
      return (sD =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function sI(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function sL(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sI(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != sD(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != sD(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == sD(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sI(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function sB(t) {
      var e = t.shapeType,
        r = t.elementProps;
      switch (e) {
        case "rectangle":
          return f.default.createElement(nC, r);
        case "trapezoid":
          return f.default.createElement(sj, r);
        case "sector":
          return f.default.createElement(sN, r);
        case "symbols":
          if ("symbols" === e) return f.default.createElement(eP, r);
          break;
        default:
          return null;
      }
    }
    function sR(t) {
      var e,
        r = t.option,
        n = t.shapeType,
        i = t.propTransformer,
        o = t.activeClassName,
        a = t.isActive,
        l = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            i = (function (t, e) {
              if (null == t) return {};
              var r = {};
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (e.indexOf(n) >= 0) continue;
                  r[n] = t[n];
                }
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                !(e.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
          }
          return i;
        })(t, sC);
      if ((0, f.isValidElement)(r))
        e = (0, f.cloneElement)(
          r,
          sL(sL({}, l), (0, f.isValidElement)(r) ? r.props : r),
        );
      else if ((0, w.default)(r)) e = r(l);
      else if ((0, sh.default)(r) && !(0, sy.default)(r)) {
        var c = (
          void 0 === i
            ? function (t, e) {
                return sL(sL({}, e), t);
              }
            : i
        )(r, l);
        e = f.default.createElement(sB, { shapeType: n, elementProps: c });
      } else e = f.default.createElement(sB, { shapeType: n, elementProps: l });
      return a
        ? f.default.createElement(
            tj,
            { className: void 0 === o ? "recharts-active-shape" : o },
            e,
          )
        : e;
    }
    function sz(t, e) {
      return null != e && "trapezoids" in t.props;
    }
    function sF(t, e) {
      return null != e && "sectors" in t.props;
    }
    function sU(t, e) {
      return null != e && "points" in t.props;
    }
    function s$(t, e) {
      var r,
        n,
        i =
          t.x === (null == e || null == (r = e.labelViewBox) ? void 0 : r.x) ||
          t.x === e.x,
        o =
          t.y === (null == e || null == (n = e.labelViewBox) ? void 0 : n.y) ||
          t.y === e.y;
      return i && o;
    }
    function sW(t, e) {
      var r = t.endAngle === e.endAngle,
        n = t.startAngle === e.startAngle;
      return r && n;
    }
    function sV(t, e) {
      var r = t.x === e.x,
        n = t.y === e.y,
        i = t.z === e.z;
      return r && n && i;
    }
    var sq = ["x", "y"];
    function sH(t) {
      return (sH =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function sX() {
      return (sX = Object.assign.bind()).apply(this, arguments);
    }
    function sK(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function sG(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sK(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != sH(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != sH(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == sH(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sK(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function sY(t, e) {
      var r = t.x,
        n = t.y,
        i = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            i = (function (t, e) {
              if (null == t) return {};
              var r = {};
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (e.indexOf(n) >= 0) continue;
                  r[n] = t[n];
                }
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for (n = 0; n < o.length; n++)
              ((r = o[n]),
                !(e.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (i[r] = t[r]));
          }
          return i;
        })(t, sq),
        o = parseInt("".concat(r), 10),
        a = parseInt("".concat(n), 10),
        l = parseInt("".concat(e.height || i.height), 10),
        c = parseInt("".concat(e.width || i.width), 10);
      return sG(
        sG(sG(sG(sG({}, e), i), o ? { x: o } : {}), a ? { y: a } : {}),
        {},
        { height: l, width: c, name: e.name, radius: e.radius },
      );
    }
    function sZ(t) {
      return f.default.createElement(
        sR,
        sX(
          {
            shapeType: "rectangle",
            propTransformer: sY,
            activeClassName: "recharts-active-bar",
          },
          t,
        ),
      );
    }
    var sJ = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return function (r, n) {
          if ("number" == typeof t) return t;
          var i = I(r) || (0, x.default)(r);
          return i ? t(r, n) : (i || A(!1), e);
        };
      },
      sQ = ["value", "background"];
    function s0(t) {
      return (s0 =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function s1() {
      return (s1 = Object.assign.bind()).apply(this, arguments);
    }
    function s2(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function s5(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s2(Object(r), !0).forEach(function (e) {
              s7(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s2(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function s3(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, s9(n.key), n));
      }
    }
    function s4() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (s4 = function () {
        return !!t;
      })();
    }
    function s6(t) {
      return (s6 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function s8(t, e) {
      return (s8 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function s7(t, e, r) {
      return (
        (e = s9(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function s9(t) {
      var e = (function (t, e) {
        if ("object" != s0(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != s0(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == s0(e) ? e : e + "";
    }
    var ft = (function (t) {
      var e, r;
      function n() {
        var t, e, r;
        if (!(this instanceof n))
          throw TypeError("Cannot call a class as a function");
        for (var i = arguments.length, o = Array(i), a = 0; a < i; a++)
          o[a] = arguments[a];
        return (
          (e = n),
          (r = [].concat(o)),
          (e = s6(e)),
          s7(
            (t = (function (t, e) {
              if (e && ("object" === s0(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              s4()
                ? Reflect.construct(e, r || [], s6(this).constructor)
                : e.apply(this, r),
            )),
            "state",
            { isAnimationFinished: !1 },
          ),
          s7(t, "id", R("recharts-bar-")),
          s7(t, "handleAnimationEnd", function () {
            var e = t.props.onAnimationEnd;
            (t.setState({ isAnimationFinished: !0 }), e && e());
          }),
          s7(t, "handleAnimationStart", function () {
            var e = t.props.onAnimationStart;
            (t.setState({ isAnimationFinished: !1 }), e && e());
          }),
          t
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t && s8(n, t),
        (e = [
          {
            key: "renderRectanglesStatically",
            value: function (t) {
              var e = this,
                r = this.props,
                n = r.shape,
                i = r.dataKey,
                o = r.activeIndex,
                a = r.activeBar,
                l = td(this.props, !1);
              return (
                t &&
                t.map(function (t, r) {
                  var c = r === o,
                    u = s5(
                      s5(s5({}, l), t),
                      {},
                      {
                        isActive: c,
                        option: c ? a : n,
                        index: r,
                        dataKey: i,
                        onAnimationStart: e.handleAnimationStart,
                        onAnimationEnd: e.handleAnimationEnd,
                      },
                    );
                  return f.default.createElement(
                    tj,
                    s1(
                      { className: "recharts-bar-rectangle" },
                      J(e.props, t, r),
                      {
                        key: "rectangle-"
                          .concat(null == t ? void 0 : t.x, "-")
                          .concat(null == t ? void 0 : t.y, "-")
                          .concat(null == t ? void 0 : t.value, "-")
                          .concat(r),
                      },
                    ),
                    f.default.createElement(sZ, u),
                  );
                })
              );
            },
          },
          {
            key: "renderRectanglesWithAnimation",
            value: function () {
              var t = this,
                e = this.props,
                r = e.data,
                n = e.layout,
                i = e.isAnimationActive,
                o = e.animationBegin,
                a = e.animationDuration,
                l = e.animationEasing,
                c = e.animationId,
                u = this.state.prevData;
              return f.default.createElement(
                r3,
                {
                  begin: o,
                  duration: a,
                  isActive: i,
                  easing: l,
                  from: { t: 0 },
                  to: { t: 1 },
                  key: "bar-".concat(c),
                  onAnimationEnd: this.handleAnimationEnd,
                  onAnimationStart: this.handleAnimationStart,
                },
                function (e) {
                  var i = e.t,
                    o = r.map(function (t, e) {
                      var r = u && u[e];
                      if (r) {
                        var o = $(r.x, t.x),
                          a = $(r.y, t.y),
                          l = $(r.width, t.width),
                          c = $(r.height, t.height);
                        return s5(
                          s5({}, t),
                          {},
                          { x: o(i), y: a(i), width: l(i), height: c(i) },
                        );
                      }
                      if ("horizontal" === n) {
                        var s = $(0, t.height)(i);
                        return s5(
                          s5({}, t),
                          {},
                          { y: t.y + t.height - s, height: s },
                        );
                      }
                      var f = $(0, t.width)(i);
                      return s5(s5({}, t), {}, { width: f });
                    });
                  return f.default.createElement(
                    tj,
                    null,
                    t.renderRectanglesStatically(o),
                  );
                },
              );
            },
          },
          {
            key: "renderRectangles",
            value: function () {
              var t = this.props,
                e = t.data,
                r = t.isAnimationActive,
                n = this.state.prevData;
              return r && e && e.length && (!n || !(0, co.default)(n, e))
                ? this.renderRectanglesWithAnimation()
                : this.renderRectanglesStatically(e);
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var t = this,
                e = this.props,
                r = e.data,
                n = e.dataKey,
                i = e.activeIndex,
                o = td(this.props.background, !1);
              return r.map(function (e, r) {
                e.value;
                var a = e.background,
                  l = (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      i = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < o.length; n++)
                        ((r = o[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (i[r] = t[r]));
                    }
                    return i;
                  })(e, sQ);
                if (!a) return null;
                var c = s5(
                  s5(
                    s5(s5(s5({}, l), {}, { fill: "#eee" }, a), o),
                    J(t.props, e, r),
                  ),
                  {},
                  {
                    onAnimationStart: t.handleAnimationStart,
                    onAnimationEnd: t.handleAnimationEnd,
                    dataKey: n,
                    index: r,
                    className: "recharts-bar-background-rectangle",
                  },
                );
                return f.default.createElement(
                  sZ,
                  s1(
                    {
                      key: "background-bar-".concat(r),
                      option: t.props.background,
                      isActive: r === i,
                    },
                    c,
                  ),
                );
              });
            },
          },
          {
            key: "renderErrorBar",
            value: function (t, e) {
              if (
                this.props.isAnimationActive &&
                !this.state.isAnimationFinished
              )
                return null;
              var r = this.props,
                n = r.data,
                i = r.xAxis,
                o = r.yAxis,
                a = r.layout,
                l = tc(r.children, cR);
              if (!l) return null;
              var c = "vertical" === a ? n[0].height / 2 : n[0].width / 2,
                u = function (t, e) {
                  var r = Array.isArray(t.value) ? t.value[1] : t.value;
                  return { x: t.x, y: t.y, value: r, errorVal: cG(t, e) };
                };
              return f.default.createElement(
                tj,
                { clipPath: t ? "url(#clipPath-".concat(e, ")") : null },
                l.map(function (t) {
                  return f.default.cloneElement(t, {
                    key: "error-bar-".concat(e, "-").concat(t.props.dataKey),
                    data: n,
                    xAxis: i,
                    yAxis: o,
                    layout: a,
                    offset: c,
                    dataPointFormatter: u,
                  });
                }),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var t = this.props,
                e = t.hide,
                r = t.data,
                n = t.className,
                i = t.xAxis,
                o = t.yAxis,
                a = t.left,
                l = t.top,
                c = t.width,
                u = t.height,
                s = t.isAnimationActive,
                p = t.background,
                d = t.id;
              if (e || !r || !r.length) return null;
              var h = this.state.isAnimationFinished,
                y = P("recharts-bar", n),
                v = i && i.allowDataOverflow,
                m = o && o.allowDataOverflow,
                b = v || m,
                g = (0, x.default)(d) ? this.id : d;
              return f.default.createElement(
                tj,
                { className: y },
                v || m
                  ? f.default.createElement(
                      "defs",
                      null,
                      f.default.createElement(
                        "clipPath",
                        { id: "clipPath-".concat(g) },
                        f.default.createElement("rect", {
                          x: v ? a : a - c / 2,
                          y: m ? l : l - u / 2,
                          width: v ? c : 2 * c,
                          height: m ? u : 2 * u,
                        }),
                      ),
                    )
                  : null,
                f.default.createElement(
                  tj,
                  {
                    className: "recharts-bar-rectangles",
                    clipPath: b ? "url(#clipPath-".concat(g, ")") : null,
                  },
                  p ? this.renderBackground() : null,
                  this.renderRectangles(),
                ),
                this.renderErrorBar(b, g),
                (!s || h) && sd.renderCallByParent(this.props, r),
              );
            },
          },
        ]),
        (r = [
          {
            key: "getDerivedStateFromProps",
            value: function (t, e) {
              return t.animationId !== e.prevAnimationId
                ? {
                    prevAnimationId: t.animationId,
                    curData: t.data,
                    prevData: e.curData,
                  }
                : t.data !== e.curData
                  ? { curData: t.data }
                  : null;
            },
          },
        ]),
        e && s3(n.prototype, e),
        r && s3(n, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        n
      );
    })(f.PureComponent);
    function fe(t) {
      return (fe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function fr(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, fa(n.key), n));
      }
    }
    function fn(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function fi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fn(Object(r), !0).forEach(function (e) {
              fo(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fn(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function fo(t, e, r) {
      return (
        (e = fa(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function fa(t) {
      var e = (function (t, e) {
        if ("object" != fe(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != fe(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == fe(e) ? e : e + "";
    }
    (s7(ft, "displayName", "Bar"),
      s7(ft, "defaultProps", {
        xAxisId: 0,
        yAxisId: 0,
        legendType: "rect",
        minPointSize: 0,
        hide: !1,
        data: [],
        layout: "vertical",
        activeBar: !1,
        isAnimationActive: !tq.isSsr,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: "ease",
      }),
      s7(ft, "getComposedData", function (t) {
        var e = t.props,
          r = t.item,
          n = t.barPosition,
          i = t.bandSize,
          o = t.xAxis,
          a = t.yAxis,
          l = t.xAxisTicks,
          c = t.yAxisTicks,
          u = t.stackedData,
          s = t.dataStartIndex,
          f = t.displayedData,
          p = t.offset,
          d = ur(n, r);
        if (!d) return null;
        var h = e.layout,
          y = r.type.defaultProps,
          v = void 0 !== y ? s5(s5({}, y), r.props) : r.props,
          m = v.dataKey,
          b = v.children,
          g = v.minPointSize,
          x = "horizontal" === h ? a : o,
          w = u ? x.scale.domain() : null,
          O = us({ numericAxis: x }),
          j = tc(b, sr),
          S = f.map(function (t, e) {
            u
              ? (f = un(u[s + e], w))
              : Array.isArray((f = cG(t, m))) || (f = [O, f]);
            var n = sJ(g, ft.defaultProps.minPointSize)(f[1], e);
            if ("horizontal" === h) {
              var f,
                p,
                y,
                v,
                b,
                x,
                S,
                k = [a.scale(f[0]), a.scale(f[1])],
                P = k[0],
                A = k[1];
              ((p = uu({
                axis: o,
                ticks: l,
                bandSize: i,
                offset: d.offset,
                entry: t,
                index: e,
              })),
                (y = null != (S = null != A ? A : P) ? S : void 0),
                (v = d.size));
              var E = P - A;
              if (
                ((b = Number.isNaN(E) ? 0 : E),
                (x = { x: p, y: a.y, width: v, height: a.height }),
                Math.abs(n) > 0 && Math.abs(b) < Math.abs(n))
              ) {
                var _ = C(b || n) * (Math.abs(n) - Math.abs(b));
                ((y -= _), (b += _));
              }
            } else {
              var M = [o.scale(f[0]), o.scale(f[1])],
                T = M[0],
                N = M[1];
              if (
                ((p = T),
                (y = uu({
                  axis: a,
                  ticks: c,
                  bandSize: i,
                  offset: d.offset,
                  entry: t,
                  index: e,
                })),
                (v = N - T),
                (b = d.size),
                (x = { x: o.x, y: y, width: o.width, height: b }),
                Math.abs(n) > 0 && Math.abs(v) < Math.abs(n))
              ) {
                var D = C(v || n) * (Math.abs(n) - Math.abs(v));
                v += D;
              }
            }
            return s5(
              s5(
                s5({}, t),
                {},
                {
                  x: p,
                  y: y,
                  width: v,
                  height: b,
                  value: u ? f : f[1],
                  payload: t,
                  background: x,
                },
                j && j[e] && j[e].props,
              ),
              {},
              {
                tooltipPayload: [ub(r, t)],
                tooltipPosition: { x: p + v / 2, y: y + b / 2 },
              },
            );
          });
        return s5({ data: S, layout: h }, p);
      }));
    var fl = function (t, e, r, n, i) {
        var o = t.width,
          a = t.height,
          l = t.layout,
          c = t.children,
          u = Object.keys(e),
          s = {
            left: r.left,
            leftMirror: r.left,
            right: o - r.right,
            rightMirror: o - r.right,
            top: r.top,
            topMirror: r.top,
            bottom: a - r.bottom,
            bottomMirror: a - r.bottom,
          },
          f = !!tu(c, ft);
        return u.reduce(function (o, a) {
          var c,
            u,
            p,
            d,
            h,
            y = e[a],
            v = y.orientation,
            m = y.domain,
            b = y.padding,
            g = void 0 === b ? {} : b,
            x = y.mirror,
            w = y.reversed,
            O = "".concat(v).concat(x ? "Mirror" : "");
          if (
            "number" === y.type &&
            ("gap" === y.padding || "no-gap" === y.padding)
          ) {
            var j = m[1] - m[0],
              S = 1 / 0,
              k = y.categoricalDomain.sort(V);
            if (
              (k.forEach(function (t, e) {
                e > 0 && (S = Math.min((t || 0) - (k[e - 1] || 0), S));
              }),
              Number.isFinite(S))
            ) {
              var P = S / j,
                A = "vertical" === y.layout ? r.height : r.width;
              if (
                ("gap" === y.padding && (c = (P * A) / 2),
                "no-gap" === y.padding)
              ) {
                var E = z(t.barCategoryGap, P * A),
                  _ = (P * A) / 2;
                c = _ - E - ((_ - E) / A) * E;
              }
            }
          }
          ((u =
            "xAxis" === n
              ? [
                  r.left + (g.left || 0) + (c || 0),
                  r.left + r.width - (g.right || 0) - (c || 0),
                ]
              : "yAxis" === n
                ? "horizontal" === l
                  ? [r.top + r.height - (g.bottom || 0), r.top + (g.top || 0)]
                  : [
                      r.top + (g.top || 0) + (c || 0),
                      r.top + r.height - (g.bottom || 0) - (c || 0),
                    ]
                : y.range),
            w && (u = [u[1], u[0]]));
          var M = ut(y, i, f),
            T = M.scale,
            N = M.realScaleType;
          (T.domain(m).range(u), ue(T));
          var C = ul(T, fi(fi({}, y), {}, { realScaleType: N }));
          "xAxis" === n
            ? ((h = ("top" === v && !x) || ("bottom" === v && x)),
              (p = r.left),
              (d = s[O] - h * y.height))
            : "yAxis" === n &&
              ((h = ("left" === v && !x) || ("right" === v && x)),
              (p = s[O] - h * y.width),
              (d = r.top));
          var D = fi(
            fi(fi({}, y), C),
            {},
            {
              realScaleType: N,
              x: p,
              y: d,
              scale: T,
              width: "xAxis" === n ? r.width : y.width,
              height: "yAxis" === n ? r.height : y.height,
            },
          );
          return (
            (D.bandSize = uv(D, C)),
            y.hide || "xAxis" !== n
              ? y.hide || (s[O] += (h ? -1 : 1) * D.width)
              : (s[O] += (h ? -1 : 1) * D.height),
            fi(fi({}, o), {}, fo({}, a, D))
          );
        }, {});
      },
      fc = function (t, e) {
        var r = t.x,
          n = t.y,
          i = e.x,
          o = e.y;
        return {
          x: Math.min(r, i),
          y: Math.min(n, o),
          width: Math.abs(i - r),
          height: Math.abs(o - n),
        };
      },
      fu = (function () {
        var t, e;
        function r(t) {
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          this.scale = t;
        }
        return (
          (t = [
            {
              key: "domain",
              get: function () {
                return this.scale.domain;
              },
            },
            {
              key: "range",
              get: function () {
                return this.scale.range;
              },
            },
            {
              key: "rangeMin",
              get: function () {
                return this.range()[0];
              },
            },
            {
              key: "rangeMax",
              get: function () {
                return this.range()[1];
              },
            },
            {
              key: "bandwidth",
              get: function () {
                return this.scale.bandwidth;
              },
            },
            {
              key: "apply",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = e.bandAware,
                  n = e.position;
                if (void 0 !== t) {
                  if (n)
                    switch (n) {
                      case "start":
                      default:
                        return this.scale(t);
                      case "middle":
                        var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(t) + i;
                      case "end":
                        var o = this.bandwidth ? this.bandwidth() : 0;
                        return this.scale(t) + o;
                    }
                  if (r) {
                    var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(t) + a;
                  }
                  return this.scale(t);
                }
              },
            },
            {
              key: "isInRange",
              value: function (t) {
                var e = this.range(),
                  r = e[0],
                  n = e[e.length - 1];
                return r <= n ? t >= r && t <= n : t >= n && t <= r;
              },
            },
          ]),
          (e = [
            {
              key: "create",
              value: function (t) {
                return new r(t);
              },
            },
          ]),
          t && fr(r.prototype, t),
          e && fr(r, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })();
    fo(fu, "EPS", 1e-4);
    var fs = function (t) {
        var e = Object.keys(t).reduce(function (e, r) {
          return fi(fi({}, e), {}, fo({}, r, fu.create(t[r])));
        }, {});
        return fi(
          fi({}, e),
          {},
          {
            apply: function (t) {
              var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = r.bandAware,
                i = r.position;
              return (0, st.default)(t, function (t, r) {
                return e[r].apply(t, { bandAware: n, position: i });
              });
            },
            isInRange: function (t) {
              return (0, se.default)(t, function (t, r) {
                return e[r].isInRange(t);
              });
            },
          },
        );
      },
      ff = function (t) {
        var e = t.width,
          r = t.height,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = ((((n % 180) + 180) % 180) * Math.PI) / 180,
          o = Math.atan(r / e);
        return Math.abs(
          i > o && i < Math.PI - o ? r / Math.sin(i) : e / Math.cos(i),
        );
      };
    function fp() {
      return (fp = Object.assign.bind()).apply(this, arguments);
    }
    function fd(t) {
      return (fd =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function fh(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function fy(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fh(Object(r), !0).forEach(function (e) {
              fg(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fh(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function fv() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (fv = function () {
        return !!t;
      })();
    }
    function fm(t) {
      return (fm = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function fb(t, e) {
      return (fb = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function fg(t, e, r) {
      return (
        (e = fx(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function fx(t) {
      var e = (function (t, e) {
        if ("object" != fd(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != fd(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == fd(e) ? e : e + "";
    }
    var fw = function (t) {
        var e = t.x,
          r = t.y,
          n = t.xAxis,
          i = t.yAxis,
          o = fs({ x: n.scale, y: i.scale }),
          a = o.apply({ x: e, y: r }, { bandAware: !0 });
        return u9(t, "discard") && !o.isInRange(a) ? null : a;
      },
      fO = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = fm(t)),
            (function (t, e) {
              if (e && ("object" === fd(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              fv()
                ? Reflect.construct(t, e || [], fm(this).constructor)
                : t.apply(this, e),
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && fb(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.x,
                  n = t.y,
                  i = t.r,
                  o = t.alwaysShow,
                  a = t.clipPathId,
                  l = L(e),
                  c = L(n);
                if (
                  (t3(
                    void 0 === o,
                    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                  ),
                  !l || !c)
                )
                  return null;
                var u = fw(this.props);
                if (!u) return null;
                var s = u.x,
                  p = u.y,
                  d = this.props,
                  h = d.shape,
                  y = d.className,
                  v = fy(
                    fy(
                      {
                        clipPath: u9(this.props, "hidden")
                          ? "url(#".concat(a, ")")
                          : void 0,
                      },
                      td(this.props, !0),
                    ),
                    {},
                    { cx: s, cy: p },
                  );
                return f.default.createElement(
                  tj,
                  { className: P("recharts-reference-dot", y) },
                  r.renderDot(h, v),
                  u8.renderCallByParent(this.props, {
                    x: s - i,
                    y: p - i,
                    width: 2 * i,
                    height: 2 * i,
                  }),
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              ((n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, fx(n.key), n));
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(f.default.Component);
    (fg(fO, "displayName", "ReferenceDot"),
      fg(fO, "defaultProps", {
        isFront: !1,
        ifOverflow: "discard",
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: "#fff",
        stroke: "#ccc",
        fillOpacity: 1,
        strokeWidth: 1,
      }),
      fg(fO, "renderDot", function (t, e) {
        return f.default.isValidElement(t)
          ? f.default.cloneElement(t, e)
          : (0, w.default)(t)
            ? t(e)
            : f.default.createElement(
                eG,
                fp({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: "recharts-reference-dot-dot",
                }),
              );
      }));
    var fj = t.i(88099),
      fS = t.i(60191),
      fk = (0, t.i(57588).default)(
        function (t) {
          return { x: t.left, y: t.top, width: t.width, height: t.height };
        },
        function (t) {
          return "l" + t.left + "t" + t.top + "w" + t.width + "h" + t.height;
        },
      ),
      fP = (0, f.createContext)(void 0),
      fA = (0, f.createContext)(void 0),
      fE = (0, f.createContext)(void 0),
      f_ = (0, f.createContext)({}),
      fM = (0, f.createContext)(void 0),
      fT = (0, f.createContext)(0),
      fN = (0, f.createContext)(0),
      fC = function (t) {
        var e = t.state,
          r = e.xAxisMap,
          n = e.yAxisMap,
          i = e.offset,
          o = t.clipPathId,
          a = t.children,
          l = t.width,
          c = t.height,
          u = fk(i);
        return f.default.createElement(
          fP.Provider,
          { value: r },
          f.default.createElement(
            fA.Provider,
            { value: n },
            f.default.createElement(
              f_.Provider,
              { value: i },
              f.default.createElement(
                fE.Provider,
                { value: u },
                f.default.createElement(
                  fM.Provider,
                  { value: o },
                  f.default.createElement(
                    fT.Provider,
                    { value: c },
                    f.default.createElement(fN.Provider, { value: l }, a),
                  ),
                ),
              ),
            ),
          ),
        );
      },
      fD = function (t) {
        var e = (0, f.useContext)(fP);
        null == e && A(!1);
        var r = e[t];
        return (null == r && A(!1), r);
      },
      fI = function () {
        var t = (0, f.useContext)(fA);
        return (
          (0, fS.default)(t, function (t) {
            return (0, se.default)(t.domain, Number.isFinite);
          }) || F(t)
        );
      },
      fL = function (t) {
        var e = (0, f.useContext)(fA);
        null == e && A(!1);
        var r = e[t];
        return (null == r && A(!1), r);
      },
      fB = function () {
        return (0, f.useContext)(fN);
      },
      fR = function () {
        return (0, f.useContext)(fT);
      };
    function fz(t) {
      return (fz =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function fF() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (fF = function () {
        return !!t;
      })();
    }
    function fU(t) {
      return (fU = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function f$(t, e) {
      return (f$ = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function fW(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function fV(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fW(Object(r), !0).forEach(function (e) {
              fq(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fW(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function fq(t, e, r) {
      return (
        (e = fH(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function fH(t) {
      var e = (function (t, e) {
        if ("object" != fz(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != fz(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == fz(e) ? e : e + "";
    }
    function fX(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function fK() {
      return (fK = Object.assign.bind()).apply(this, arguments);
    }
    var fG = function (t, e) {
        return f.default.isValidElement(t)
          ? f.default.cloneElement(t, e)
          : (0, w.default)(t)
            ? t(e)
            : f.default.createElement(
                "line",
                fK({}, e, { className: "recharts-reference-line-line" }),
              );
      },
      fY = function (t, e, r, n, i, o, a, l, c) {
        var u = i.x,
          s = i.y,
          f = i.width,
          p = i.height;
        if (r) {
          var d = c.y,
            h = t.y.apply(d, { position: o });
          if (u9(c, "discard") && !t.y.isInRange(h)) return null;
          var y = [
            { x: u + f, y: h },
            { x: u, y: h },
          ];
          return "left" === l ? y.reverse() : y;
        }
        if (e) {
          var v = c.x,
            m = t.x.apply(v, { position: o });
          if (u9(c, "discard") && !t.x.isInRange(m)) return null;
          var b = [
            { x: m, y: s + p },
            { x: m, y: s },
          ];
          return "top" === a ? b.reverse() : b;
        }
        if (n) {
          var g = c.segment.map(function (e) {
            return t.apply(e, { position: o });
          });
          return u9(c, "discard") &&
            (0, fj.default)(g, function (e) {
              return !t.isInRange(e);
            })
            ? null
            : g;
        }
        return null;
      };
    function fZ(t) {
      var e,
        r = t.x,
        n = t.y,
        i = t.segment,
        o = t.xAxisId,
        a = t.yAxisId,
        l = t.shape,
        c = t.className,
        u = t.alwaysShow,
        s = (0, f.useContext)(fM),
        p = fD(o),
        d = fL(a),
        h = (0, f.useContext)(fE);
      if (!s || !h) return null;
      t3(
        void 0 === u,
        'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
      );
      var y = fY(
        fs({ x: p.scale, y: d.scale }),
        L(r),
        L(n),
        i && 2 === i.length,
        h,
        t.position,
        p.orientation,
        d.orientation,
        t,
      );
      if (!y) return null;
      var v =
          (function (t) {
            if (Array.isArray(t)) return t;
          })(y) ||
          (function (t) {
            var e =
              null == t
                ? null
                : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var r,
                n,
                i,
                o,
                a = [],
                l = !0,
                c = !1;
              try {
                ((i = (e = e.call(t)).next), !1);
                for (
                  ;
                  !(l = (r = i.call(e)).done) &&
                  (a.push(r.value), 2 !== a.length);
                  l = !0
                );
              } catch (t) {
                ((c = !0), (n = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != e.return &&
                    ((o = e.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw n;
                }
              }
              return a;
            }
          })(y) ||
          (function (t) {
            if (t) {
              if ("string" == typeof t) return fX(t, 2);
              var e = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ("Object" === e && t.constructor && (e = t.constructor.name),
                "Map" === e || "Set" === e)
              )
                return Array.from(t);
              if (
                "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              )
                return fX(t, 2);
            }
          })(y) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })(),
        m = v[0],
        b = m.x,
        g = m.y,
        x = v[1],
        w = x.x,
        O = x.y,
        j = fV(
          fV(
            { clipPath: u9(t, "hidden") ? "url(#".concat(s, ")") : void 0 },
            td(t, !0),
          ),
          {},
          { x1: b, y1: g, x2: w, y2: O },
        );
      return f.default.createElement(
        tj,
        { className: P("recharts-reference-line", c) },
        fG(l, j),
        u8.renderCallByParent(
          t,
          fc(
            { x: (e = { x1: b, y1: g, x2: w, y2: O }).x1, y: e.y1 },
            { x: e.x2, y: e.y2 },
          ),
        ),
      );
    }
    var fJ = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError("Cannot call a class as a function");
        return (
          (t = r),
          (e = arguments),
          (t = fU(t)),
          (function (t, e) {
            if (e && ("object" === fz(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                "Derived constructors may only return object or undefined",
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return r;
          })(
            this,
            fF()
              ? Reflect.construct(t, e || [], fU(this).constructor)
              : t.apply(this, e),
          )
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t && f$(r, t),
        (e = [
          {
            key: "render",
            value: function () {
              return f.default.createElement(fZ, this.props);
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, fH(n.key), n));
          }
        })(r.prototype, e),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
    })(f.default.Component);
    function fQ() {
      return (fQ = Object.assign.bind()).apply(this, arguments);
    }
    function f0(t) {
      return (f0 =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function f1(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function f2(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? f1(Object(r), !0).forEach(function (e) {
              f6(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f1(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    (fq(fJ, "displayName", "ReferenceLine"),
      fq(fJ, "defaultProps", {
        isFront: !1,
        ifOverflow: "discard",
        xAxisId: 0,
        yAxisId: 0,
        fill: "none",
        stroke: "#ccc",
        fillOpacity: 1,
        strokeWidth: 1,
        position: "middle",
      }));
    function f5() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (f5 = function () {
        return !!t;
      })();
    }
    function f3(t) {
      return (f3 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function f4(t, e) {
      return (f4 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function f6(t, e, r) {
      return (
        (e = f8(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function f8(t) {
      var e = (function (t, e) {
        if ("object" != f0(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != f0(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == f0(e) ? e : e + "";
    }
    var f7 = function (t, e, r, n, i) {
        var o = i.x1,
          a = i.x2,
          l = i.y1,
          c = i.y2,
          u = i.xAxis,
          s = i.yAxis;
        if (!u || !s) return null;
        var f = fs({ x: u.scale, y: s.scale }),
          p = {
            x: t ? f.x.apply(o, { position: "start" }) : f.x.rangeMin,
            y: r ? f.y.apply(l, { position: "start" }) : f.y.rangeMin,
          },
          d = {
            x: e ? f.x.apply(a, { position: "end" }) : f.x.rangeMax,
            y: n ? f.y.apply(c, { position: "end" }) : f.y.rangeMax,
          };
        return !u9(i, "discard") || (f.isInRange(p) && f.isInRange(d))
          ? fc(p, d)
          : null;
      },
      f9 = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = f3(t)),
            (function (t, e) {
              if (e && ("object" === f0(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              f5()
                ? Reflect.construct(t, e || [], f3(this).constructor)
                : t.apply(this, e),
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && f4(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.x1,
                  n = t.x2,
                  i = t.y1,
                  o = t.y2,
                  a = t.className,
                  l = t.alwaysShow,
                  c = t.clipPathId;
                t3(
                  void 0 === l,
                  'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                );
                var u = L(e),
                  s = L(n),
                  p = L(i),
                  d = L(o),
                  h = this.props.shape;
                if (!u && !s && !p && !d && !h) return null;
                var y = f7(u, s, p, d, this.props);
                if (!y && !h) return null;
                var v = u9(this.props, "hidden")
                  ? "url(#".concat(c, ")")
                  : void 0;
                return f.default.createElement(
                  tj,
                  { className: P("recharts-reference-area", a) },
                  r.renderRect(
                    h,
                    f2(f2({ clipPath: v }, td(this.props, !0)), y),
                  ),
                  u8.renderCallByParent(this.props, y),
                );
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              ((n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, f8(n.key), n));
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(f.default.Component);
    function pt(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return pe(t);
        })(t) ||
        (function (t) {
          if (
            ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ("string" == typeof t) return pe(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e)
            )
              return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return pe(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function pe(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    (f6(f9, "displayName", "ReferenceArea"),
      f6(f9, "defaultProps", {
        isFront: !1,
        ifOverflow: "discard",
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: "#ccc",
        fillOpacity: 0.5,
        stroke: "none",
        strokeWidth: 1,
      }),
      f6(f9, "renderRect", function (t, e) {
        return f.default.isValidElement(t)
          ? f.default.cloneElement(t, e)
          : (0, w.default)(t)
            ? t(e)
            : f.default.createElement(
                nC,
                fQ({}, e, { className: "recharts-reference-area-rect" }),
              );
      }));
    var pr = function (t, e, r, n, i) {
        var o = tc(t, fJ),
          a = tc(t, fO),
          l = [].concat(pt(o), pt(a)),
          c = tc(t, f9),
          u = "".concat(n, "Id"),
          s = n[0],
          f = e;
        if (
          (l.length &&
            (f = l.reduce(function (t, e) {
              if (
                e.props[u] === r &&
                u9(e.props, "extendDomain") &&
                I(e.props[s])
              ) {
                var n = e.props[s];
                return [Math.min(t[0], n), Math.max(t[1], n)];
              }
              return t;
            }, f)),
          c.length)
        ) {
          var p = "".concat(s, "1"),
            d = "".concat(s, "2");
          f = c.reduce(function (t, e) {
            if (
              e.props[u] === r &&
              u9(e.props, "extendDomain") &&
              I(e.props[p]) &&
              I(e.props[d])
            ) {
              var n = e.props[p],
                i = e.props[d];
              return [Math.min(t[0], n, i), Math.max(t[1], n, i)];
            }
            return t;
          }, f);
        }
        return (
          i &&
            i.length &&
            (f = i.reduce(function (t, e) {
              return I(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t;
            }, f)),
          f
        );
      },
      pn = new (t.i(78492).default)(),
      pi = "recharts.syncMouseEvents";
    function po(t) {
      return (po =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function pa(t, e, r) {
      return (
        (e = pl(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function pl(t) {
      var e = (function (t, e) {
        if ("object" != po(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != po(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == po(e) ? e : e + "";
    }
    var pc =
      ((e = function t() {
        if (!(this instanceof t))
          throw TypeError("Cannot call a class as a function");
        (pa(this, "activeIndex", 0),
          pa(this, "coordinateList", []),
          pa(this, "layout", "horizontal"));
      }),
      (r = [
        {
          key: "setDetails",
          value: function (t) {
            var e,
              r = t.coordinateList,
              n = void 0 === r ? null : r,
              i = t.container,
              o = void 0 === i ? null : i,
              a = t.layout,
              l = void 0 === a ? null : a,
              c = t.offset,
              u = void 0 === c ? null : c,
              s = t.mouseHandlerCallback,
              f = void 0 === s ? null : s;
            ((this.coordinateList =
              null != (e = null != n ? n : this.coordinateList) ? e : []),
              (this.container = null != o ? o : this.container),
              (this.layout = null != l ? l : this.layout),
              (this.offset = null != u ? u : this.offset),
              (this.mouseHandlerCallback =
                null != f ? f : this.mouseHandlerCallback),
              (this.activeIndex = Math.min(
                Math.max(this.activeIndex, 0),
                this.coordinateList.length - 1,
              )));
          },
        },
        {
          key: "focus",
          value: function () {
            this.spoofMouse();
          },
        },
        {
          key: "keyboardEvent",
          value: function (t) {
            if (0 !== this.coordinateList.length)
              switch (t.key) {
                case "ArrowRight":
                  if ("horizontal" !== this.layout) return;
                  ((this.activeIndex = Math.min(
                    this.activeIndex + 1,
                    this.coordinateList.length - 1,
                  )),
                    this.spoofMouse());
                  break;
                case "ArrowLeft":
                  if ("horizontal" !== this.layout) return;
                  ((this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                    this.spoofMouse());
              }
          },
        },
        {
          key: "setIndex",
          value: function (t) {
            this.activeIndex = t;
          },
        },
        {
          key: "spoofMouse",
          value: function () {
            if (
              "horizontal" === this.layout &&
              0 !== this.coordinateList.length
            ) {
              var t,
                e,
                r = this.container.getBoundingClientRect(),
                n = r.x,
                i = r.y,
                o = r.height,
                a = this.coordinateList[this.activeIndex].coordinate,
                l = (null == (t = window) ? void 0 : t.scrollX) || 0,
                c = (null == (e = window) ? void 0 : e.scrollY) || 0,
                u = i + this.offset.top + o / 2 + c;
              this.mouseHandlerCallback({ pageX: n + a + l, pageY: u });
            }
          },
        },
      ]),
      (function (t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, pl(n.key), n));
        }
      })(e.prototype, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e);
    function pu(t) {
      this._context = t;
    }
    function ps(t) {
      return new pu(t);
    }
    function pf(t) {
      return t[0];
    }
    function pp(t) {
      return t[1];
    }
    function pd(t, e) {
      var r = t6(!0),
        n = null,
        i = ps,
        o = null,
        a = er(l);
      function l(l) {
        var c,
          u,
          s,
          f = (l = l8(l)).length,
          p = !1;
        for (null == n && (o = i((s = a()))), c = 0; c <= f; ++c)
          (!(c < f && r((u = l[c]), c, l)) === p &&
            ((p = !p) ? o.lineStart() : o.lineEnd()),
            p && o.point(+t(u, c, l), +e(u, c, l)));
        if (s) return ((o = null), s + "" || null);
      }
      return (
        (t = "function" == typeof t ? t : void 0 === t ? pf : t6(t)),
        (e = "function" == typeof e ? e : void 0 === e ? pp : t6(e)),
        (l.x = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : t6(+e)), l)
            : t;
        }),
        (l.y = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : t6(+t)), l)
            : e;
        }),
        (l.defined = function (t) {
          return arguments.length
            ? ((r = "function" == typeof t ? t : t6(!!t)), l)
            : r;
        }),
        (l.curve = function (t) {
          return arguments.length ? ((i = t), null != n && (o = i(n)), l) : i;
        }),
        (l.context = function (t) {
          return arguments.length
            ? (null == t ? (n = o = null) : (o = i((n = t))), l)
            : n;
        }),
        l
      );
    }
    function ph(t, e, r) {
      var n = null,
        i = t6(!0),
        o = null,
        a = ps,
        l = null,
        c = er(u);
      function u(u) {
        var s,
          f,
          p,
          d,
          h,
          y = (u = l8(u)).length,
          v = !1,
          m = Array(y),
          b = Array(y);
        for (null == o && (l = a((h = c()))), s = 0; s <= y; ++s) {
          if (!(s < y && i((d = u[s]), s, u)) === v)
            if ((v = !v)) ((f = s), l.areaStart(), l.lineStart());
            else {
              for (l.lineEnd(), l.lineStart(), p = s - 1; p >= f; --p)
                l.point(m[p], b[p]);
              (l.lineEnd(), l.areaEnd());
            }
          v &&
            ((m[s] = +t(d, s, u)),
            (b[s] = +e(d, s, u)),
            l.point(n ? +n(d, s, u) : m[s], r ? +r(d, s, u) : b[s]));
        }
        if (h) return ((l = null), h + "" || null);
      }
      function s() {
        return pd().defined(i).curve(a).context(o);
      }
      return (
        (t = "function" == typeof t ? t : void 0 === t ? pf : t6(+t)),
        (e = "function" == typeof e ? e : void 0 === e ? t6(0) : t6(+e)),
        (r = "function" == typeof r ? r : void 0 === r ? pp : t6(+r)),
        (u.x = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : t6(+e)), (n = null), u)
            : t;
        }),
        (u.x0 = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : t6(+e)), u)
            : t;
        }),
        (u.x1 = function (t) {
          return arguments.length
            ? ((n = null == t ? null : "function" == typeof t ? t : t6(+t)), u)
            : n;
        }),
        (u.y = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : t6(+t)), (r = null), u)
            : e;
        }),
        (u.y0 = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : t6(+t)), u)
            : e;
        }),
        (u.y1 = function (t) {
          return arguments.length
            ? ((r = null == t ? null : "function" == typeof t ? t : t6(+t)), u)
            : r;
        }),
        (u.lineX0 = u.lineY0 =
          function () {
            return s().x(t).y(e);
          }),
        (u.lineY1 = function () {
          return s().x(t).y(r);
        }),
        (u.lineX1 = function () {
          return s().x(n).y(e);
        }),
        (u.defined = function (t) {
          return arguments.length
            ? ((i = "function" == typeof t ? t : t6(!!t)), u)
            : i;
        }),
        (u.curve = function (t) {
          return arguments.length ? ((a = t), null != o && (l = a(o)), u) : a;
        }),
        (u.context = function (t) {
          return arguments.length
            ? (null == t ? (o = l = null) : (l = a((o = t))), u)
            : o;
        }),
        u
      );
    }
    function py() {}
    function pv(t, e, r) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + e) / 6,
        (t._y0 + 4 * t._y1 + r) / 6,
      );
    }
    function pm(t) {
      this._context = t;
    }
    function pb(t) {
      this._context = t;
    }
    function pg(t) {
      this._context = t;
    }
    ((pu.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        ((this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line));
      },
      point: function (t, e) {
        switch (((t *= 1), (e *= 1), this._point)) {
          case 0:
            ((this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e));
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, e);
        }
      },
    }),
      (pm.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              pv(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          ((this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6,
                ));
            default:
              pv(this, t, e);
          }
          ((this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e));
        },
      }),
      (pb.prototype = {
        areaStart: py,
        areaEnd: py,
        lineStart: function () {
          ((this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              (this._context.moveTo(this._x2, this._y2),
                this._context.closePath());
              break;
            case 2:
              (this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3,
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3,
                ),
                this._context.closePath());
              break;
            case 3:
              (this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4));
          }
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              ((this._point = 1), (this._x2 = t), (this._y2 = e));
              break;
            case 1:
              ((this._point = 2), (this._x3 = t), (this._y3 = e));
              break;
            case 2:
              ((this._point = 3),
                (this._x4 = t),
                (this._y4 = e),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + t) / 6,
                  (this._y0 + 4 * this._y1 + e) / 6,
                ));
              break;
            default:
              pv(this, t, e);
          }
          ((this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e));
        },
      }),
      (pg.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN),
            (this._point = 0));
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var r = (this._x0 + 4 * this._x1 + t) / 6,
                n = (this._y0 + 4 * this._y1 + e) / 6;
              this._line
                ? this._context.lineTo(r, n)
                : this._context.moveTo(r, n);
              break;
            case 3:
              this._point = 4;
            default:
              pv(this, t, e);
          }
          ((this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e));
        },
      }));
    class px {
      constructor(t, e) {
        ((this._context = t), (this._x = e));
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        ((this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line));
      }
      point(t, e) {
        switch (((t *= 1), (e *= 1), this._point)) {
          case 0:
            ((this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e));
            break;
          case 1:
            this._point = 2;
          default:
            this._x
              ? this._context.bezierCurveTo(
                  (this._x0 = (this._x0 + t) / 2),
                  this._y0,
                  this._x0,
                  e,
                  t,
                  e,
                )
              : this._context.bezierCurveTo(
                  this._x0,
                  (this._y0 = (this._y0 + e) / 2),
                  t,
                  this._y0,
                  t,
                  e,
                );
        }
        ((this._x0 = t), (this._y0 = e));
      }
    }
    function pw(t) {
      this._context = t;
    }
    pw.prototype = {
      areaStart: py,
      areaEnd: py,
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        this._point && this._context.closePath();
      },
      point: function (t, e) {
        ((t *= 1),
          (e *= 1),
          this._point
            ? this._context.lineTo(t, e)
            : ((this._point = 1), this._context.moveTo(t, e)));
      },
    };
    function pO(t, e, r) {
      var n = t._x1 - t._x0,
        i = e - t._x1,
        o = (t._y1 - t._y0) / (n || (i < 0 && -0)),
        a = (r - t._y1) / (i || (n < 0 && -0));
      return (
        ((o < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
          Math.min(
            Math.abs(o),
            Math.abs(a),
            0.5 * Math.abs((o * i + a * n) / (n + i)),
          ) || 0
      );
    }
    function pj(t, e) {
      var r = t._x1 - t._x0;
      return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
    }
    function pS(t, e, r) {
      var n = t._x0,
        i = t._y0,
        o = t._x1,
        a = t._y1,
        l = (o - n) / 3;
      t._context.bezierCurveTo(n + l, i + l * e, o - l, a - l * r, o, a);
    }
    function pk(t) {
      this._context = t;
    }
    function pP(t) {
      this._context = new pA(t);
    }
    function pA(t) {
      this._context = t;
    }
    function pE(t) {
      this._context = t;
    }
    function p_(t) {
      var e,
        r,
        n = t.length - 1,
        i = Array(n),
        o = Array(n),
        a = Array(n);
      for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
        ((i[e] = 1), (o[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]));
      for (
        i[n - 1] = 2, o[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1;
        e < n;
        ++e
      )
        ((r = i[e] / o[e - 1]), (o[e] -= r), (a[e] -= r * a[e - 1]));
      for (i[n - 1] = a[n - 1] / o[n - 1], e = n - 2; e >= 0; --e)
        i[e] = (a[e] - i[e + 1]) / o[e];
      for (e = 0, o[n - 1] = (t[n] + i[n - 1]) / 2; e < n - 1; ++e)
        o[e] = 2 * t[e + 1] - i[e + 1];
      return [i, o];
    }
    function pM(t, e) {
      ((this._context = t), (this._t = e));
    }
    function pT(t) {
      return (pT =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function pN() {
      return (pN = Object.assign.bind()).apply(this, arguments);
    }
    function pC(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function pD(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pC(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != pT(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != pT(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == pT(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : pC(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    ((pk.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0));
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            pS(this, this._t0, pj(this, this._t0));
        }
        ((this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line));
      },
      point: function (t, e) {
        var r = NaN;
        if (((e *= 1), (t *= 1) !== this._x1 || e !== this._y1)) {
          switch (this._point) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3), pS(this, pj(this, (r = pO(this, t, e))), r));
              break;
            default:
              pS(this, this._t0, (r = pO(this, t, e)));
          }
          ((this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e),
            (this._t0 = r));
        }
      },
    }),
      ((pP.prototype = Object.create(pk.prototype)).point = function (t, e) {
        pk.prototype.point.call(this, e, t);
      }),
      (pA.prototype = {
        moveTo: function (t, e) {
          this._context.moveTo(e, t);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (t, e) {
          this._context.lineTo(e, t);
        },
        bezierCurveTo: function (t, e, r, n, i, o) {
          this._context.bezierCurveTo(e, t, n, r, o, i);
        },
      }),
      (pE.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x = []), (this._y = []));
        },
        lineEnd: function () {
          var t = this._x,
            e = this._y,
            r = t.length;
          if (r)
            if (
              (this._line
                ? this._context.lineTo(t[0], e[0])
                : this._context.moveTo(t[0], e[0]),
              2 === r)
            )
              this._context.lineTo(t[1], e[1]);
            else
              for (var n = p_(t), i = p_(e), o = 0, a = 1; a < r; ++o, ++a)
                this._context.bezierCurveTo(
                  n[0][o],
                  i[0][o],
                  n[1][o],
                  i[1][o],
                  t[a],
                  e[a],
                );
          ((this._line || (0 !== this._line && 1 === r)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null));
        },
        point: function (t, e) {
          (this._x.push(+t), this._y.push(+e));
        },
      }),
      (pM.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x = this._y = NaN), (this._point = 0));
        },
        lineEnd: function () {
          (0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line)));
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e));
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                (this._context.lineTo(this._x, e), this._context.lineTo(t, e));
              else {
                var r = this._x * (1 - this._t) + t * this._t;
                (this._context.lineTo(r, this._y), this._context.lineTo(r, e));
              }
          }
          ((this._x = t), (this._y = e));
        },
      }));
    var pI = {
        curveBasisClosed: function (t) {
          return new pb(t);
        },
        curveBasisOpen: function (t) {
          return new pg(t);
        },
        curveBasis: function (t) {
          return new pm(t);
        },
        curveBumpX: function (t) {
          return new px(t, !0);
        },
        curveBumpY: function (t) {
          return new px(t, !1);
        },
        curveLinearClosed: function (t) {
          return new pw(t);
        },
        curveLinear: ps,
        curveMonotoneX: function (t) {
          return new pk(t);
        },
        curveMonotoneY: function (t) {
          return new pP(t);
        },
        curveNatural: function (t) {
          return new pE(t);
        },
        curveStep: function (t) {
          return new pM(t, 0.5);
        },
        curveStepAfter: function (t) {
          return new pM(t, 1);
        },
        curveStepBefore: function (t) {
          return new pM(t, 0);
        },
      },
      pL = function (t) {
        return t.x === +t.x && t.y === +t.y;
      },
      pB = function (t) {
        return t.x;
      },
      pR = function (t) {
        return t.y;
      },
      pz = function (t, e) {
        if ((0, w.default)(t)) return t;
        var r = "curve".concat((0, t4.default)(t));
        return ("curveMonotone" === r || "curveBump" === r) && e
          ? pI["".concat(r).concat("vertical" === e ? "Y" : "X")]
          : pI[r] || ps;
      },
      pF = function (t) {
        var e,
          r = t.type,
          n = t.points,
          i = void 0 === n ? [] : n,
          o = t.baseLine,
          a = t.layout,
          l = t.connectNulls,
          c = void 0 !== l && l,
          u = pz(void 0 === r ? "linear" : r, a),
          s = c
            ? i.filter(function (t) {
                return pL(t);
              })
            : i;
        if (Array.isArray(o)) {
          var f = c
              ? o.filter(function (t) {
                  return pL(t);
                })
              : o,
            p = s.map(function (t, e) {
              return pD(pD({}, t), {}, { base: f[e] });
            });
          return (
            (e =
              "vertical" === a
                ? ph()
                    .y(pR)
                    .x1(pB)
                    .x0(function (t) {
                      return t.base.x;
                    })
                : ph()
                    .x(pB)
                    .y1(pR)
                    .y0(function (t) {
                      return t.base.y;
                    }))
              .defined(pL)
              .curve(u),
            e(p)
          );
        }
        return (
          (e =
            "vertical" === a && I(o)
              ? ph().y(pR).x1(pB).x0(o)
              : I(o)
                ? ph().x(pB).y1(pR).y0(o)
                : pd().x(pB).y(pR))
            .defined(pL)
            .curve(u),
          e(s)
        );
      },
      pU = function (t) {
        var e = t.className,
          r = t.points,
          n = t.path,
          i = t.pathRef;
        if ((!r || !r.length) && !n) return null;
        var o = r && r.length ? pF(t) : n;
        return f.createElement(
          "path",
          pN({}, td(t, !1), Z(t), {
            className: P("recharts-curve", e),
            d: o,
            ref: i,
          }),
        );
      };
    function p$(t) {
      return (p$ =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var pW = ["x", "y", "top", "left", "width", "height", "className"];
    function pV() {
      return (pV = Object.assign.bind()).apply(this, arguments);
    }
    function pq(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    var pH = function (t) {
      var e = t.x,
        r = void 0 === e ? 0 : e,
        n = t.y,
        i = void 0 === n ? 0 : n,
        o = t.top,
        a = void 0 === o ? 0 : o,
        l = t.left,
        c = void 0 === l ? 0 : l,
        u = t.width,
        s = void 0 === u ? 0 : u,
        p = t.height,
        d = void 0 === p ? 0 : p,
        h = t.className,
        y = (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? pq(Object(r), !0).forEach(function (e) {
                  var n, i, o;
                  ((n = t),
                    (i = e),
                    (o = r[e]),
                    (i = (function (t) {
                      var e = (function (t, e) {
                        if ("object" != p$(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(t, e || "default");
                          if ("object" != p$(n)) return n;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value.",
                          );
                        }
                        return ("string" === e ? String : Number)(t);
                      })(t, "string");
                      return "symbol" == p$(e) ? e : e + "";
                    })(i)) in n
                      ? Object.defineProperty(n, i, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[i] = o));
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : pq(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
          }
          return t;
        })(
          { x: r, y: i, top: a, left: c, width: s, height: d },
          (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (n = 0; n < o.length; n++)
                ((r = o[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (i[r] = t[r]));
            }
            return i;
          })(t, pW),
        );
      return I(r) && I(i) && I(s) && I(d) && I(a) && I(c)
        ? f.default.createElement(
            "path",
            pV({}, td(y, !0), {
              className: P("recharts-cross", h),
              d: "M"
                .concat(r, ",")
                .concat(a, "v")
                .concat(d, "M")
                .concat(c, ",")
                .concat(i, "h")
                .concat(s),
            }),
          )
        : null;
    };
    function pX(t) {
      var e = t.cx,
        r = t.cy,
        n = t.radius,
        i = t.startAngle,
        o = t.endAngle;
      return {
        points: [uV(e, r, n, i), uV(e, r, n, o)],
        cx: e,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: o,
      };
    }
    function pK(t) {
      return (pK =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function pG(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function pY(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pG(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != pK(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != pK(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == pK(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : pG(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function pZ(t) {
      var e,
        r,
        n,
        i,
        o = t.element,
        a = t.tooltipEventType,
        l = t.isActive,
        c = t.activeCoordinate,
        u = t.activePayload,
        s = t.offset,
        p = t.activeTooltipIndex,
        d = t.tooltipAxisBandSize,
        h = t.layout,
        y = t.chartName,
        v =
          null != (r = o.props.cursor)
            ? r
            : null == (n = o.type.defaultProps)
              ? void 0
              : n.cursor;
      if (!o || !v || !l || !c || ("ScatterChart" !== y && "axis" !== a))
        return null;
      var m = pU;
      if ("ScatterChart" === y) ((i = c), (m = pH));
      else if ("BarChart" === y)
        ((e = d / 2),
          (i = {
            stroke: "none",
            fill: "#ccc",
            x: "horizontal" === h ? c.x - e : s.left + 0.5,
            y: "horizontal" === h ? s.top + 0.5 : c.y - e,
            width: "horizontal" === h ? d : s.width - 1,
            height: "horizontal" === h ? s.height - 1 : d,
          }),
          (m = nC));
      else if ("radial" === h) {
        var b = pX(c),
          g = b.cx,
          x = b.cy,
          w = b.radius;
        ((i = {
          cx: g,
          cy: x,
          startAngle: b.startAngle,
          endAngle: b.endAngle,
          innerRadius: w,
          outerRadius: w,
        }),
          (m = sN));
      } else
        ((i = {
          points: (function (t, e, r) {
            var n, i, o, a;
            if ("horizontal" === t)
              ((o = n = e.x), (i = r.top), (a = r.top + r.height));
            else if ("vertical" === t)
              ((a = i = e.y), (n = r.left), (o = r.left + r.width));
            else if (null != e.cx && null != e.cy)
              if ("centric" !== t) return pX(e);
              else {
                var l = e.cx,
                  c = e.cy,
                  u = e.innerRadius,
                  s = e.outerRadius,
                  f = e.angle,
                  p = uV(l, c, u, f),
                  d = uV(l, c, s, f);
                ((n = p.x), (i = p.y), (o = d.x), (a = d.y));
              }
            return [
              { x: n, y: i },
              { x: o, y: a },
            ];
          })(h, c, s),
        }),
          (m = pU));
      var O = pY(
        pY(pY(pY({ stroke: "#ccc", pointerEvents: "none" }, s), i), td(v, !1)),
        {},
        {
          payload: u,
          payloadIndex: p,
          className: P("recharts-tooltip-cursor", v.className),
        },
      );
      return (0, f.isValidElement)(v)
        ? (0, f.cloneElement)(v, O)
        : (0, f.createElement)(m, O);
    }
    var pJ = ["item"],
      pQ = [
        "children",
        "className",
        "width",
        "height",
        "style",
        "compact",
        "title",
        "desc",
      ];
    function p0(t) {
      return (p0 =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function p1() {
      return (p1 = Object.assign.bind()).apply(this, arguments);
    }
    function p2(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var r =
            null == t
              ? null
              : ("u" > typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (null != r) {
            var n,
              i,
              o,
              a,
              l = [],
              c = !0,
              u = !1;
            try {
              if (((o = (r = r.call(t)).next), 0 === e)) {
                if (Object(r) !== r) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (n = o.call(r)).done) &&
                  (l.push(n.value), l.length !== e);
                  c = !0
                );
            } catch (t) {
              ((u = !0), (i = t));
            } finally {
              try {
                if (
                  !c &&
                  null != r.return &&
                  ((a = r.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw i;
              }
            }
            return l;
          }
        })(t, e) ||
        p7(t, e) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function p5(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    function p3() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (p3 = function () {
        return !!t;
      })();
    }
    function p4(t) {
      return (p4 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function p6(t, e) {
      return (p6 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function p8(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return p9(t);
        })(t) ||
        (function (t) {
          if (
            ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        p7(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function p7(t, e) {
      if (t) {
        if ("string" == typeof t) return p9(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ("Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r)
        )
          return Array.from(t);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return p9(t, e);
      }
    }
    function p9(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function dt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function de(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? dt(Object(r), !0).forEach(function (e) {
              dr(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : dt(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function dr(t, e, r) {
      return (
        (e = dn(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function dn(t) {
      var e = (function (t, e) {
        if ("object" != p0(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != p0(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == p0(e) ? e : e + "";
    }
    var di = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
      da = { width: "100%", height: "100%" },
      dl = { x: 0, y: 0 };
    function dc(t) {
      return t;
    }
    var du = function (t, e, r, n) {
        var i = e.find(function (t) {
          return t && t.index === r;
        });
        if (i) {
          if ("horizontal" === t) return { x: i.coordinate, y: n.y };
          if ("vertical" === t) return { x: n.x, y: i.coordinate };
          if ("centric" === t) {
            var o = i.coordinate,
              a = n.radius;
            return de(
              de(de({}, n), uV(n.cx, n.cy, a, o)),
              {},
              { angle: o, radius: a },
            );
          }
          var l = i.coordinate,
            c = n.angle;
          return de(
            de(de({}, n), uV(n.cx, n.cy, l, c)),
            {},
            { angle: c, radius: l },
          );
        }
        return dl;
      },
      ds = function (t, e) {
        var r = e.graphicalItems,
          n = e.dataStartIndex,
          i = e.dataEndIndex,
          o = (null != r ? r : []).reduce(function (t, e) {
            var r = e.props.data;
            return r && r.length ? [].concat(p8(t), p8(r)) : t;
          }, []);
        return o.length > 0
          ? o
          : t && t.length && I(n) && I(i)
            ? t.slice(n, i + 1)
            : [];
      };
    function df(t) {
      return "number" === t ? [0, "auto"] : void 0;
    }
    var dp = function (t, e, r, n) {
        var i = t.graphicalItems,
          o = t.tooltipAxis,
          a = ds(e, t);
        return r < 0 || !i || !i.length || r >= a.length
          ? null
          : i.reduce(function (i, l) {
              var c,
                u,
                s = null != (c = l.props.data) ? c : e;
              return (s &&
                t.dataStartIndex + t.dataEndIndex !== 0 &&
                t.dataEndIndex - t.dataStartIndex >= r &&
                (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
              (u =
                o.dataKey && !o.allowDuplicatedCategory
                  ? W(void 0 === s ? a : s, o.dataKey, n)
                  : (s && s[r]) || a[r]))
                ? [].concat(p8(i), [ub(l, u)])
                : i;
            }, []);
      },
      dd = function (t, e, r, n) {
        var i = n || { x: t.chartX, y: t.chartY },
          o =
            "horizontal" === r
              ? i.x
              : "vertical" === r
                ? i.y
                : "centric" === r
                  ? i.angle
                  : i.radius,
          a = t.orderedTooltipTicks,
          l = t.tooltipAxis,
          c = t.tooltipTicks,
          u = cZ(o, a, c, l);
        if (u >= 0 && c) {
          var s = c[u] && c[u].value,
            f = dp(t, e, u, s),
            p = du(r, a, u, i);
          return {
            activeTooltipIndex: u,
            activeLabel: s,
            activePayload: f,
            activeCoordinate: p,
          };
        }
        return null;
      },
      dh = function (t, e) {
        var r = e.axes,
          n = e.graphicalItems,
          i = e.axisType,
          o = e.axisIdKey,
          a = e.stackGroups,
          l = e.dataStartIndex,
          c = e.dataEndIndex,
          u = t.layout,
          s = t.children,
          f = t.stackOffset,
          p = c4(u, i);
        return r.reduce(function (e, r) {
          var d =
              void 0 !== r.type.defaultProps
                ? de(de({}, r.type.defaultProps), r.props)
                : r.props,
            h = d.type,
            y = d.dataKey,
            v = d.allowDataOverflow,
            m = d.allowDuplicatedCategory,
            b = d.scale,
            g = d.ticks,
            w = d.includeHidden,
            j = d[o];
          if (e[j]) return e;
          var S = ds(t.data, {
              graphicalItems: n.filter(function (t) {
                var e;
                return (
                  (o in t.props
                    ? t.props[o]
                    : null == (e = t.type.defaultProps)
                      ? void 0
                      : e[o]) === j
                );
              }),
              dataStartIndex: l,
              dataEndIndex: c,
            }),
            k = S.length;
          (function (t, e, r) {
            if ("number" === r && !0 === e && Array.isArray(t)) {
              var n = null == t ? void 0 : t[0],
                i = null == t ? void 0 : t[1];
              if (n && i && I(n) && I(i)) return !0;
            }
            return !1;
          })(d.domain, v, h) &&
            ((E = uy(d.domain, null, v)),
            p &&
              ("number" === h || "auto" !== b) &&
              (M = cY(S, y, "category")));
          var P = df(h);
          if (!E || 0 === E.length) {
            var A,
              E,
              _,
              M,
              T,
              N = null != (T = d.domain) ? T : P;
            if (y) {
              if (((E = cY(S, y, h)), "category" === h && p)) {
                var C = U(E);
                m && C
                  ? ((_ = E), (E = (0, O.default)(0, k)))
                  : m ||
                    (E = um(N, E, r).reduce(function (t, e) {
                      return t.indexOf(e) >= 0 ? t : [].concat(p8(t), [e]);
                    }, []));
              } else if ("category" === h)
                E = m
                  ? E.filter(function (t) {
                      return "" !== t && !(0, x.default)(t);
                    })
                  : um(N, E, r).reduce(function (t, e) {
                      return t.indexOf(e) >= 0 || "" === e || (0, x.default)(e)
                        ? t
                        : [].concat(p8(t), [e]);
                    }, []);
              else if ("number" === h) {
                var D = c5(
                  S,
                  n.filter(function (t) {
                    var e,
                      r,
                      n =
                        o in t.props
                          ? t.props[o]
                          : null == (e = t.type.defaultProps)
                            ? void 0
                            : e[o],
                      i =
                        "hide" in t.props
                          ? t.props.hide
                          : null == (r = t.type.defaultProps)
                            ? void 0
                            : r.hide;
                    return n === j && (w || !i);
                  }),
                  y,
                  i,
                  u,
                );
                D && (E = D);
              }
              p &&
                ("number" === h || "auto" !== b) &&
                (M = cY(S, y, "category"));
            } else
              E = p
                ? (0, O.default)(0, k)
                : a && a[j] && a[j].hasStack && "number" === h
                  ? "expand" === f
                    ? [0, 1]
                    : up(a[j].stackGroups, l, c)
                  : c3(
                      S,
                      n.filter(function (t) {
                        var e =
                            o in t.props ? t.props[o] : t.type.defaultProps[o],
                          r =
                            "hide" in t.props
                              ? t.props.hide
                              : t.type.defaultProps.hide;
                        return e === j && (w || !r);
                      }),
                      h,
                      u,
                      !0,
                    );
            "number" === h
              ? ((E = pr(s, E, j, i, g)), N && (E = uy(N, E, v)))
              : "category" === h &&
                N &&
                E.every(function (t) {
                  return N.indexOf(t) >= 0;
                }) &&
                (E = N);
          }
          return de(
            de({}, e),
            {},
            dr(
              {},
              j,
              de(
                de({}, d),
                {},
                {
                  axisType: i,
                  domain: E,
                  categoricalDomain: M,
                  duplicateDomain: _,
                  originalDomain: null != (A = d.domain) ? A : P,
                  isCategorical: p,
                  layout: u,
                },
              ),
            ),
          );
        }, {});
      },
      dy = function (t, e) {
        var r = e.graphicalItems,
          n = e.Axis,
          i = e.axisType,
          o = e.axisIdKey,
          a = e.stackGroups,
          l = e.dataStartIndex,
          c = e.dataEndIndex,
          u = t.layout,
          s = t.children,
          f = ds(t.data, {
            graphicalItems: r,
            dataStartIndex: l,
            dataEndIndex: c,
          }),
          p = f.length,
          d = c4(u, i),
          h = -1;
        return r.reduce(function (t, e) {
          var y,
            v = (
              void 0 !== e.type.defaultProps
                ? de(de({}, e.type.defaultProps), e.props)
                : e.props
            )[o],
            m = df("number");
          return t[v]
            ? t
            : (h++,
              (y = d
                ? (0, O.default)(0, p)
                : a && a[v] && a[v].hasStack
                  ? pr(s, (y = up(a[v].stackGroups, l, c)), v, i)
                  : pr(
                      s,
                      (y = uy(
                        m,
                        c3(
                          f,
                          r.filter(function (t) {
                            var e,
                              r,
                              n =
                                o in t.props
                                  ? t.props[o]
                                  : null == (e = t.type.defaultProps)
                                    ? void 0
                                    : e[o],
                              i =
                                "hide" in t.props
                                  ? t.props.hide
                                  : null == (r = t.type.defaultProps)
                                    ? void 0
                                    : r.hide;
                            return n === v && !i;
                          }),
                          "number",
                          u,
                        ),
                        n.defaultProps.allowDataOverflow,
                      )),
                      v,
                      i,
                    )),
              de(
                de({}, t),
                {},
                dr(
                  {},
                  v,
                  de(
                    de({ axisType: i }, n.defaultProps),
                    {},
                    {
                      hide: !0,
                      orientation: (0, j.default)(
                        di,
                        "".concat(i, ".").concat(h % 2),
                        null,
                      ),
                      domain: y,
                      originalDomain: m,
                      isCategorical: d,
                      layout: u,
                    },
                  ),
                ),
              ));
        }, {});
      },
      dv = function (t, e) {
        var r = e.axisType,
          n = void 0 === r ? "xAxis" : r,
          i = e.AxisComp,
          o = e.graphicalItems,
          a = e.stackGroups,
          l = e.dataStartIndex,
          c = e.dataEndIndex,
          u = t.children,
          s = "".concat(n, "Id"),
          f = tc(u, i),
          p = {};
        return (
          f && f.length
            ? (p = dh(t, {
                axes: f,
                graphicalItems: o,
                axisType: n,
                axisIdKey: s,
                stackGroups: a,
                dataStartIndex: l,
                dataEndIndex: c,
              }))
            : o &&
              o.length &&
              (p = dy(t, {
                Axis: i,
                graphicalItems: o,
                axisType: n,
                axisIdKey: s,
                stackGroups: a,
                dataStartIndex: l,
                dataEndIndex: c,
              })),
          p
        );
      },
      dm = function (t) {
        var e = F(t),
          r = c8(e, !1, !0);
        return {
          tooltipTicks: r,
          orderedTooltipTicks: (0, S.default)(r, function (t) {
            return t.coordinate;
          }),
          tooltipAxis: e,
          tooltipAxisBandSize: uv(e, r),
        };
      },
      db = function (t) {
        var e = t.children,
          r = t.defaultShowTooltip,
          n = tu(e, uB),
          i = 0,
          o = 0;
        return (
          t.data && 0 !== t.data.length && (o = t.data.length - 1),
          n &&
            n.props &&
            (n.props.startIndex >= 0 && (i = n.props.startIndex),
            n.props.endIndex >= 0 && (o = n.props.endIndex)),
          {
            chartX: 0,
            chartY: 0,
            dataStartIndex: i,
            dataEndIndex: o,
            activeTooltipIndex: -1,
            isTooltipActive: !!r,
          }
        );
      },
      dg = function (t) {
        return "horizontal" === t
          ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
          : "vertical" === t
            ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
            : "centric" === t
              ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
              : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
      },
      dx = function (t, e) {
        var r = t.props,
          n = t.graphicalItems,
          i = t.xAxisMap,
          o = void 0 === i ? {} : i,
          a = t.yAxisMap,
          l = void 0 === a ? {} : a,
          c = r.width,
          u = r.height,
          s = r.children,
          f = r.margin || {},
          p = tu(s, uB),
          d = tu(s, eX),
          h = Object.keys(l).reduce(
            function (t, e) {
              var r = l[e],
                n = r.orientation;
              return r.mirror || r.hide
                ? t
                : de(de({}, t), {}, dr({}, n, t[n] + r.width));
            },
            { left: f.left || 0, right: f.right || 0 },
          ),
          y = Object.keys(o).reduce(
            function (t, e) {
              var r = o[e],
                n = r.orientation;
              return r.mirror || r.hide
                ? t
                : de(
                    de({}, t),
                    {},
                    dr({}, n, (0, j.default)(t, "".concat(n)) + r.height),
                  );
            },
            { top: f.top || 0, bottom: f.bottom || 0 },
          ),
          v = de(de({}, y), h),
          m = v.bottom;
        (p && (v.bottom += p.props.height || uB.defaultProps.height),
          d && e && (v = c1(v, n, r, e)));
        var b = c - v.left - v.right,
          g = u - v.top - v.bottom;
        return de(
          de({ brushBottom: m }, v),
          {},
          { width: Math.max(b, 0), height: Math.max(g, 0) },
        );
      },
      dw = function (t) {
        var e = t.chartName,
          r = t.GraphicalChild,
          n = t.defaultTooltipEventType,
          i = void 0 === n ? "axis" : n,
          o = t.validateTooltipEventTypes,
          a = void 0 === o ? ["axis"] : o,
          l = t.axisComponents,
          c = t.legendContent,
          u = t.formatAxisMap,
          s = t.defaultProps,
          p = function (t, e) {
            var r = e.graphicalItems,
              n = e.stackGroups,
              i = e.offset,
              o = e.updateId,
              a = e.dataStartIndex,
              c = e.dataEndIndex,
              u = t.barSize,
              s = t.layout,
              f = t.barGap,
              p = t.barCategoryGap,
              d = t.maxBarSize,
              h = dg(s),
              y = h.numericAxisName,
              v = h.cateAxisName,
              m =
                !!r &&
                !!r.length &&
                r.some(function (t) {
                  var e = ti(t && t.type);
                  return e && e.indexOf("Bar") >= 0;
                }),
              b = [];
            return (
              r.forEach(function (r, h) {
                var g = ds(t.data, {
                    graphicalItems: [r],
                    dataStartIndex: a,
                    dataEndIndex: c,
                  }),
                  w =
                    void 0 !== r.type.defaultProps
                      ? de(de({}, r.type.defaultProps), r.props)
                      : r.props,
                  O = w.dataKey,
                  j = w.maxBarSize,
                  S = w["".concat(y, "Id")],
                  k = w["".concat(v, "Id")],
                  P = l.reduce(function (t, r) {
                    var n = e["".concat(r.axisType, "Map")],
                      i = w["".concat(r.axisType, "Id")];
                    (n && n[i]) || "zAxis" === r.axisType || A(!1);
                    var o = n[i];
                    return de(
                      de({}, t),
                      {},
                      dr(
                        dr({}, r.axisType, o),
                        "".concat(r.axisType, "Ticks"),
                        c8(o),
                      ),
                    );
                  }, {}),
                  E = P[v],
                  _ = P["".concat(v, "Ticks")],
                  M = n && n[S] && n[S].hasStack && uf(r, n[S].stackGroups),
                  T = ti(r.type).indexOf("Bar") >= 0,
                  N = uv(E, _),
                  C = [],
                  D =
                    m &&
                    cQ({
                      barSize: u,
                      stackGroups: n,
                      totalSize:
                        "xAxis" === v
                          ? P[v].width
                          : "yAxis" === v
                            ? P[v].height
                            : void 0,
                    });
                if (T) {
                  var I,
                    L,
                    B = (0, x.default)(j) ? d : j,
                    R =
                      null != (I = null != (L = uv(E, _, !0)) ? L : B) ? I : 0;
                  ((C = c0({
                    barGap: f,
                    barCategoryGap: p,
                    bandSize: R !== N ? R : N,
                    sizeList: D[k],
                    maxBarSize: B,
                  })),
                    R !== N &&
                      (C = C.map(function (t) {
                        return de(
                          de({}, t),
                          {},
                          {
                            position: de(
                              de({}, t.position),
                              {},
                              { offset: t.position.offset - R / 2 },
                            ),
                          },
                        );
                      })));
                }
                var z = r && r.type && r.type.getComposedData;
                z &&
                  b.push({
                    props: de(
                      de(
                        {},
                        z(
                          de(
                            de({}, P),
                            {},
                            {
                              displayedData: g,
                              props: t,
                              dataKey: O,
                              item: r,
                              bandSize: N,
                              barPosition: C,
                              offset: i,
                              stackedData: M,
                              layout: s,
                              dataStartIndex: a,
                              dataEndIndex: c,
                            },
                          ),
                        ),
                      ),
                      {},
                      dr(
                        dr(
                          dr({ key: r.key || "item-".concat(h) }, y, P[y]),
                          v,
                          P[v],
                        ),
                        "animationId",
                        o,
                      ),
                    ),
                    childIndex: tl(t.children).indexOf(r),
                    item: r,
                  });
              }),
              b
            );
          },
          d = function (t, n) {
            var i = t.props,
              o = t.dataStartIndex,
              a = t.dataEndIndex,
              c = t.updateId;
            if (!ts({ props: i })) return null;
            var s = i.children,
              f = i.layout,
              d = i.stackOffset,
              h = i.data,
              y = i.reverseStackOrder,
              v = dg(f),
              m = v.numericAxisName,
              b = v.cateAxisName,
              g = tc(s, r),
              x = ua(h, g, "".concat(m, "Id"), "".concat(b, "Id"), d, y),
              w = l.reduce(function (t, e) {
                var r = "".concat(e.axisType, "Map");
                return de(
                  de({}, t),
                  {},
                  dr(
                    {},
                    r,
                    dv(
                      i,
                      de(
                        de({}, e),
                        {},
                        {
                          graphicalItems: g,
                          stackGroups: e.axisType === m && x,
                          dataStartIndex: o,
                          dataEndIndex: a,
                        },
                      ),
                    ),
                  ),
                );
              }, {}),
              O = dx(
                de(de({}, w), {}, { props: i, graphicalItems: g }),
                null == n ? void 0 : n.legendBBox,
              );
            Object.keys(w).forEach(function (t) {
              w[t] = u(i, w[t], O, t.replace("Map", ""), e);
            });
            var j = dm(w["".concat(b, "Map")]),
              S = p(
                i,
                de(
                  de({}, w),
                  {},
                  {
                    dataStartIndex: o,
                    dataEndIndex: a,
                    updateId: c,
                    graphicalItems: g,
                    stackGroups: x,
                    offset: O,
                  },
                ),
              );
            return de(
              de(
                {
                  formattedGraphicalItems: S,
                  graphicalItems: g,
                  offset: O,
                  stackGroups: x,
                },
                j,
              ),
              w,
            );
          },
          h = (function (t) {
            var r;
            function n(t) {
              var r, i, o, a, l;
              if (!(this instanceof n))
                throw TypeError("Cannot call a class as a function");
              return (
                (a = n),
                (l = [t]),
                (a = p4(a)),
                dr(
                  (o = (function (t, e) {
                    if (e && ("object" === p0(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    var r = t;
                    if (void 0 === r)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return r;
                  })(
                    this,
                    p3()
                      ? Reflect.construct(a, l || [], p4(this).constructor)
                      : a.apply(this, l),
                  )),
                  "eventEmitterSymbol",
                  Symbol("rechartsEventEmitter"),
                ),
                dr(o, "accessibilityManager", new pc()),
                dr(o, "handleLegendBBoxUpdate", function (t) {
                  if (t) {
                    var e = o.state,
                      r = e.dataStartIndex,
                      n = e.dataEndIndex,
                      i = e.updateId;
                    o.setState(
                      de(
                        { legendBBox: t },
                        d(
                          {
                            props: o.props,
                            dataStartIndex: r,
                            dataEndIndex: n,
                            updateId: i,
                          },
                          de(de({}, o.state), {}, { legendBBox: t }),
                        ),
                      ),
                    );
                  }
                }),
                dr(o, "handleReceiveSyncEvent", function (t, e, r) {
                  o.props.syncId === t &&
                    (r !== o.eventEmitterSymbol ||
                      "function" == typeof o.props.syncMethod) &&
                    o.applySyncEvent(e);
                }),
                dr(o, "handleBrushChange", function (t) {
                  var e = t.startIndex,
                    r = t.endIndex;
                  if (
                    e !== o.state.dataStartIndex ||
                    r !== o.state.dataEndIndex
                  ) {
                    var n = o.state.updateId;
                    (o.setState(function () {
                      return de(
                        { dataStartIndex: e, dataEndIndex: r },
                        d(
                          {
                            props: o.props,
                            dataStartIndex: e,
                            dataEndIndex: r,
                            updateId: n,
                          },
                          o.state,
                        ),
                      );
                    }),
                      o.triggerSyncEvent({
                        dataStartIndex: e,
                        dataEndIndex: r,
                      }));
                  }
                }),
                dr(o, "handleMouseEnter", function (t) {
                  var e = o.getMouseInfo(t);
                  if (e) {
                    var r = de(de({}, e), {}, { isTooltipActive: !0 });
                    (o.setState(r), o.triggerSyncEvent(r));
                    var n = o.props.onMouseEnter;
                    (0, w.default)(n) && n(r, t);
                  }
                }),
                dr(o, "triggeredAfterMouseMove", function (t) {
                  var e = o.getMouseInfo(t),
                    r = e
                      ? de(de({}, e), {}, { isTooltipActive: !0 })
                      : { isTooltipActive: !1 };
                  (o.setState(r), o.triggerSyncEvent(r));
                  var n = o.props.onMouseMove;
                  (0, w.default)(n) && n(r, t);
                }),
                dr(o, "handleItemMouseEnter", function (t) {
                  o.setState(function () {
                    return {
                      isTooltipActive: !0,
                      activeItem: t,
                      activePayload: t.tooltipPayload,
                      activeCoordinate: t.tooltipPosition || {
                        x: t.cx,
                        y: t.cy,
                      },
                    };
                  });
                }),
                dr(o, "handleItemMouseLeave", function () {
                  o.setState(function () {
                    return { isTooltipActive: !1 };
                  });
                }),
                dr(o, "handleMouseMove", function (t) {
                  (t.persist(), o.throttleTriggeredAfterMouseMove(t));
                }),
                dr(o, "handleMouseLeave", function (t) {
                  o.throttleTriggeredAfterMouseMove.cancel();
                  var e = { isTooltipActive: !1 };
                  (o.setState(e), o.triggerSyncEvent(e));
                  var r = o.props.onMouseLeave;
                  (0, w.default)(r) && r(e, t);
                }),
                dr(o, "handleOuterEvent", function (t) {
                  var e,
                    r = tm(t),
                    n = (0, j.default)(o.props, "".concat(r));
                  r &&
                    (0, w.default)(n) &&
                    n(
                      null !=
                        (e = /.*touch.*/i.test(r)
                          ? o.getMouseInfo(t.changedTouches[0])
                          : o.getMouseInfo(t))
                        ? e
                        : {},
                      t,
                    );
                }),
                dr(o, "handleClick", function (t) {
                  var e = o.getMouseInfo(t);
                  if (e) {
                    var r = de(de({}, e), {}, { isTooltipActive: !0 });
                    (o.setState(r), o.triggerSyncEvent(r));
                    var n = o.props.onClick;
                    (0, w.default)(n) && n(r, t);
                  }
                }),
                dr(o, "handleMouseDown", function (t) {
                  var e = o.props.onMouseDown;
                  (0, w.default)(e) && e(o.getMouseInfo(t), t);
                }),
                dr(o, "handleMouseUp", function (t) {
                  var e = o.props.onMouseUp;
                  (0, w.default)(e) && e(o.getMouseInfo(t), t);
                }),
                dr(o, "handleTouchMove", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    o.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
                }),
                dr(o, "handleTouchStart", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    o.handleMouseDown(t.changedTouches[0]);
                }),
                dr(o, "handleTouchEnd", function (t) {
                  null != t.changedTouches &&
                    t.changedTouches.length > 0 &&
                    o.handleMouseUp(t.changedTouches[0]);
                }),
                dr(o, "handleDoubleClick", function (t) {
                  var e = o.props.onDoubleClick;
                  (0, w.default)(e) && e(o.getMouseInfo(t), t);
                }),
                dr(o, "handleContextMenu", function (t) {
                  var e = o.props.onContextMenu;
                  (0, w.default)(e) && e(o.getMouseInfo(t), t);
                }),
                dr(o, "triggerSyncEvent", function (t) {
                  void 0 !== o.props.syncId &&
                    pn.emit(pi, o.props.syncId, t, o.eventEmitterSymbol);
                }),
                dr(o, "applySyncEvent", function (t) {
                  var e = o.props,
                    r = e.layout,
                    n = e.syncMethod,
                    i = o.state.updateId,
                    a = t.dataStartIndex,
                    l = t.dataEndIndex;
                  if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex)
                    o.setState(
                      de(
                        { dataStartIndex: a, dataEndIndex: l },
                        d(
                          {
                            props: o.props,
                            dataStartIndex: a,
                            dataEndIndex: l,
                            updateId: i,
                          },
                          o.state,
                        ),
                      ),
                    );
                  else if (void 0 !== t.activeTooltipIndex) {
                    var c = t.chartX,
                      u = t.chartY,
                      s = t.activeTooltipIndex,
                      f = o.state,
                      p = f.offset,
                      h = f.tooltipTicks;
                    if (!p) return;
                    if ("function" == typeof n) s = n(h, t);
                    else if ("value" === n) {
                      s = -1;
                      for (var y = 0; y < h.length; y++)
                        if (h[y].value === t.activeLabel) {
                          s = y;
                          break;
                        }
                    }
                    var v = de(de({}, p), {}, { x: p.left, y: p.top }),
                      m = Math.min(c, v.x + v.width),
                      b = Math.min(u, v.y + v.height),
                      g = h[s] && h[s].value,
                      x = dp(o.state, o.props.data, s),
                      w = h[s]
                        ? {
                            x: "horizontal" === r ? h[s].coordinate : m,
                            y: "horizontal" === r ? b : h[s].coordinate,
                          }
                        : dl;
                    o.setState(
                      de(
                        de({}, t),
                        {},
                        {
                          activeLabel: g,
                          activeCoordinate: w,
                          activePayload: x,
                          activeTooltipIndex: s,
                        },
                      ),
                    );
                  } else o.setState(t);
                }),
                dr(o, "renderCursor", function (t) {
                  var r,
                    n = o.state,
                    i = n.isTooltipActive,
                    a = n.activeCoordinate,
                    l = n.activePayload,
                    c = n.offset,
                    u = n.activeTooltipIndex,
                    s = n.tooltipAxisBandSize,
                    p = o.getTooltipEventType(),
                    d = null != (r = t.props.active) ? r : i,
                    h = o.props.layout,
                    y = t.key || "_recharts-cursor";
                  return f.default.createElement(pZ, {
                    key: y,
                    activeCoordinate: a,
                    activePayload: l,
                    activeTooltipIndex: u,
                    chartName: e,
                    element: t,
                    isActive: d,
                    layout: h,
                    offset: c,
                    tooltipAxisBandSize: s,
                    tooltipEventType: p,
                  });
                }),
                dr(o, "renderPolarAxis", function (t, e, r) {
                  var n = (0, j.default)(t, "type.axisType"),
                    i = (0, j.default)(o.state, "".concat(n, "Map")),
                    a = t.type.defaultProps,
                    l = void 0 !== a ? de(de({}, a), t.props) : t.props,
                    c = i && i[l["".concat(n, "Id")]];
                  return (0, f.cloneElement)(
                    t,
                    de(
                      de({}, c),
                      {},
                      {
                        className: P(n, c.className),
                        key: t.key || "".concat(e, "-").concat(r),
                        ticks: c8(c, !0),
                      },
                    ),
                  );
                }),
                dr(o, "renderPolarGrid", function (t) {
                  var e = t.props,
                    r = e.radialLines,
                    n = e.polarAngles,
                    i = e.polarRadius,
                    a = o.state,
                    l = a.radiusAxisMap,
                    c = a.angleAxisMap,
                    u = F(l),
                    s = F(c),
                    p = s.cx,
                    d = s.cy,
                    h = s.innerRadius,
                    y = s.outerRadius;
                  return (0, f.cloneElement)(t, {
                    polarAngles: Array.isArray(n)
                      ? n
                      : c8(s, !0).map(function (t) {
                          return t.coordinate;
                        }),
                    polarRadius: Array.isArray(i)
                      ? i
                      : c8(u, !0).map(function (t) {
                          return t.coordinate;
                        }),
                    cx: p,
                    cy: d,
                    innerRadius: h,
                    outerRadius: y,
                    key: t.key || "polar-grid",
                    radialLines: r,
                  });
                }),
                dr(o, "renderLegend", function () {
                  var t = o.state.formattedGraphicalItems,
                    e = o.props,
                    r = e.children,
                    n = e.width,
                    i = e.height,
                    a = o.props.margin || {},
                    l = c$({
                      children: r,
                      formattedGraphicalItems: t,
                      legendWidth: n - (a.left || 0) - (a.right || 0),
                      legendContent: c,
                    });
                  if (!l) return null;
                  var u = l.item,
                    s = p5(l, pJ);
                  return (0, f.cloneElement)(
                    u,
                    de(
                      de({}, s),
                      {},
                      {
                        chartWidth: n,
                        chartHeight: i,
                        margin: a,
                        onBBoxUpdate: o.handleLegendBBoxUpdate,
                      },
                    ),
                  );
                }),
                dr(o, "renderTooltip", function () {
                  var t,
                    e = o.props,
                    r = e.children,
                    n = e.accessibilityLayer,
                    i = tu(r, t5);
                  if (!i) return null;
                  var a = o.state,
                    l = a.isTooltipActive,
                    c = a.activeCoordinate,
                    u = a.activePayload,
                    s = a.activeLabel,
                    p = a.offset,
                    d = null != (t = i.props.active) ? t : l;
                  return (0, f.cloneElement)(i, {
                    viewBox: de(de({}, p), {}, { x: p.left, y: p.top }),
                    active: d,
                    label: s,
                    payload: d ? u : [],
                    coordinate: c,
                    accessibilityLayer: n,
                  });
                }),
                dr(o, "renderBrush", function (t) {
                  var e = o.props,
                    r = e.margin,
                    n = e.data,
                    i = o.state,
                    a = i.offset,
                    l = i.dataStartIndex,
                    c = i.dataEndIndex,
                    u = i.updateId;
                  return (0, f.cloneElement)(t, {
                    key: t.key || "_recharts-brush",
                    onChange: c9(o.handleBrushChange, t.props.onChange),
                    data: n,
                    x: I(t.props.x) ? t.props.x : a.left,
                    y: I(t.props.y)
                      ? t.props.y
                      : a.top + a.height + a.brushBottom - (r.bottom || 0),
                    width: I(t.props.width) ? t.props.width : a.width,
                    startIndex: l,
                    endIndex: c,
                    updateId: "brush-".concat(u),
                  });
                }),
                dr(o, "renderReferenceElement", function (t, e, r) {
                  if (!t) return null;
                  var n = o.clipPathId,
                    i = o.state,
                    a = i.xAxisMap,
                    l = i.yAxisMap,
                    c = i.offset,
                    u = t.type.defaultProps || {},
                    s = t.props,
                    p = s.xAxisId,
                    d = void 0 === p ? u.xAxisId : p,
                    h = s.yAxisId,
                    y = void 0 === h ? u.yAxisId : h;
                  return (0, f.cloneElement)(t, {
                    key: t.key || "".concat(e, "-").concat(r),
                    xAxis: a[d],
                    yAxis: l[y],
                    viewBox: {
                      x: c.left,
                      y: c.top,
                      width: c.width,
                      height: c.height,
                    },
                    clipPathId: n,
                  });
                }),
                dr(o, "renderActivePoints", function (t) {
                  var e = t.item,
                    r = t.activePoint,
                    i = t.basePoint,
                    o = t.childIndex,
                    a = t.isRange,
                    l = [],
                    c = e.props.key,
                    u =
                      void 0 !== e.item.type.defaultProps
                        ? de(de({}, e.item.type.defaultProps), e.item.props)
                        : e.item.props,
                    s = u.activeDot,
                    f = de(
                      de(
                        {
                          index: o,
                          dataKey: u.dataKey,
                          cx: r.x,
                          cy: r.y,
                          r: 4,
                          fill: cJ(e.item),
                          strokeWidth: 2,
                          stroke: "#fff",
                          payload: r.payload,
                          value: r.value,
                        },
                        td(s, !1),
                      ),
                      Z(s),
                    );
                  return (
                    l.push(
                      n.renderActiveDot(
                        s,
                        f,
                        "".concat(c, "-activePoint-").concat(o),
                      ),
                    ),
                    i
                      ? l.push(
                          n.renderActiveDot(
                            s,
                            de(de({}, f), {}, { cx: i.x, cy: i.y }),
                            "".concat(c, "-basePoint-").concat(o),
                          ),
                        )
                      : a && l.push(null),
                    l
                  );
                }),
                dr(o, "renderGraphicChild", function (t, e, r) {
                  var n = o.filterFormatItem(t, e, r);
                  if (!n) return null;
                  var i = o.getTooltipEventType(),
                    a = o.state,
                    l = a.isTooltipActive,
                    c = a.tooltipAxis,
                    u = a.activeTooltipIndex,
                    s = a.activeLabel,
                    p = tu(o.props.children, t5),
                    d = n.props,
                    h = d.points,
                    y = d.isRange,
                    v = d.baseLine,
                    m =
                      void 0 !== n.item.type.defaultProps
                        ? de(de({}, n.item.type.defaultProps), n.item.props)
                        : n.item.props,
                    b = m.activeDot,
                    g = m.hide,
                    w = m.activeBar,
                    O = m.activeShape,
                    j = !!(!g && l && p && (b || w || O)),
                    S = {};
                  "axis" !== i && p && "click" === p.props.trigger
                    ? (S = {
                        onClick: c9(o.handleItemMouseEnter, t.props.onClick),
                      })
                    : "axis" !== i &&
                      (S = {
                        onMouseLeave: c9(
                          o.handleItemMouseLeave,
                          t.props.onMouseLeave,
                        ),
                        onMouseEnter: c9(
                          o.handleItemMouseEnter,
                          t.props.onMouseEnter,
                        ),
                      });
                  var k = (0, f.cloneElement)(t, de(de({}, n.props), S));
                  if (j)
                    if (u >= 0) {
                      if (c.dataKey && !c.allowDuplicatedCategory) {
                        var P =
                          "function" == typeof c.dataKey
                            ? function (t) {
                                return "function" == typeof c.dataKey
                                  ? c.dataKey(t.payload)
                                  : null;
                              }
                            : "payload.".concat(c.dataKey.toString());
                        ((E = W(h, P, s)), (_ = y && v && W(v, P, s)));
                      } else
                        ((E = null == h ? void 0 : h[u]), (_ = y && v && v[u]));
                      if (O || w) {
                        var A =
                          void 0 !== t.props.activeIndex
                            ? t.props.activeIndex
                            : u;
                        return [
                          (0, f.cloneElement)(
                            t,
                            de(de(de({}, n.props), S), {}, { activeIndex: A }),
                          ),
                          null,
                          null,
                        ];
                      }
                      if (!(0, x.default)(E))
                        return [k].concat(
                          p8(
                            o.renderActivePoints({
                              item: n,
                              activePoint: E,
                              basePoint: _,
                              childIndex: u,
                              isRange: y,
                            }),
                          ),
                        );
                    } else {
                      var E,
                        _,
                        M,
                        T = (
                          null != (M = o.getItemByXY(o.state.activeCoordinate))
                            ? M
                            : { graphicalItem: k }
                        ).graphicalItem,
                        N = T.item,
                        C = void 0 === N ? t : N,
                        D = T.childIndex,
                        I = de(de(de({}, n.props), S), {}, { activeIndex: D });
                      return [(0, f.cloneElement)(C, I), null, null];
                    }
                  return y ? [k, null, null] : [k, null];
                }),
                dr(o, "renderCustomized", function (t, e, r) {
                  return (0, f.cloneElement)(
                    t,
                    de(
                      de({ key: "recharts-customized-".concat(r) }, o.props),
                      o.state,
                    ),
                  );
                }),
                dr(o, "renderMap", {
                  CartesianGrid: { handler: dc, once: !0 },
                  ReferenceArea: { handler: o.renderReferenceElement },
                  ReferenceLine: { handler: dc },
                  ReferenceDot: { handler: o.renderReferenceElement },
                  XAxis: { handler: dc },
                  YAxis: { handler: dc },
                  Brush: { handler: o.renderBrush, once: !0 },
                  Bar: { handler: o.renderGraphicChild },
                  Line: { handler: o.renderGraphicChild },
                  Area: { handler: o.renderGraphicChild },
                  Radar: { handler: o.renderGraphicChild },
                  RadialBar: { handler: o.renderGraphicChild },
                  Scatter: { handler: o.renderGraphicChild },
                  Pie: { handler: o.renderGraphicChild },
                  Funnel: { handler: o.renderGraphicChild },
                  Tooltip: { handler: o.renderCursor, once: !0 },
                  PolarGrid: { handler: o.renderPolarGrid, once: !0 },
                  PolarAngleAxis: { handler: o.renderPolarAxis },
                  PolarRadiusAxis: { handler: o.renderPolarAxis },
                  Customized: { handler: o.renderCustomized },
                }),
                (o.clipPathId = "".concat(
                  null != (r = t.id) ? r : R("recharts"),
                  "-clip",
                )),
                (o.throttleTriggeredAfterMouseMove = (0, k.default)(
                  o.triggeredAfterMouseMove,
                  null != (i = t.throttleDelay) ? i : 1e3 / 60,
                )),
                (o.state = {}),
                o
              );
            }
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function",
              );
            return (
              (n.prototype = Object.create(t && t.prototype, {
                constructor: { value: n, writable: !0, configurable: !0 },
              })),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              t && p6(n, t),
              (r = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var t, e;
                    (this.addListener(),
                      this.accessibilityManager.setDetails({
                        container: this.container,
                        offset: {
                          left: null != (t = this.props.margin.left) ? t : 0,
                          top: null != (e = this.props.margin.top) ? e : 0,
                        },
                        coordinateList: this.state.tooltipTicks,
                        mouseHandlerCallback: this.triggeredAfterMouseMove,
                        layout: this.props.layout,
                      }),
                      this.displayDefaultTooltip());
                  },
                },
                {
                  key: "displayDefaultTooltip",
                  value: function () {
                    var t = this.props,
                      e = t.children,
                      r = t.data,
                      n = t.height,
                      i = t.layout,
                      o = tu(e, t5);
                    if (o) {
                      var a = o.props.defaultIndex;
                      if (
                        "number" == typeof a &&
                        !(a < 0) &&
                        !(a > this.state.tooltipTicks.length - 1)
                      ) {
                        var l =
                            this.state.tooltipTicks[a] &&
                            this.state.tooltipTicks[a].value,
                          c = dp(this.state, r, a, l),
                          u = this.state.tooltipTicks[a].coordinate,
                          s = (this.state.offset.top + n) / 2,
                          f =
                            "horizontal" === i
                              ? { x: u, y: s }
                              : { y: u, x: s },
                          p = this.state.formattedGraphicalItems.find(
                            function (t) {
                              return "Scatter" === t.item.type.name;
                            },
                          );
                        p &&
                          ((f = de(
                            de({}, f),
                            p.props.points[a].tooltipPosition,
                          )),
                          (c = p.props.points[a].tooltipPayload));
                        var d = {
                          activeTooltipIndex: a,
                          isTooltipActive: !0,
                          activeLabel: l,
                          activePayload: c,
                          activeCoordinate: f,
                        };
                        (this.setState(d),
                          this.renderCursor(o),
                          this.accessibilityManager.setIndex(a));
                      }
                    }
                  },
                },
                {
                  key: "getSnapshotBeforeUpdate",
                  value: function (t, e) {
                    if (!this.props.accessibilityLayer) return null;
                    if (
                      (this.state.tooltipTicks !== e.tooltipTicks &&
                        this.accessibilityManager.setDetails({
                          coordinateList: this.state.tooltipTicks,
                        }),
                      this.props.layout !== t.layout &&
                        this.accessibilityManager.setDetails({
                          layout: this.props.layout,
                        }),
                      this.props.margin !== t.margin)
                    ) {
                      var r, n;
                      this.accessibilityManager.setDetails({
                        offset: {
                          left: null != (r = this.props.margin.left) ? r : 0,
                          top: null != (n = this.props.margin.top) ? n : 0,
                        },
                      });
                    }
                    return null;
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t) {
                    th([tu(t.children, t5)], [tu(this.props.children, t5)]) ||
                      this.displayDefaultTooltip();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    (this.removeListener(),
                      this.throttleTriggeredAfterMouseMove.cancel());
                  },
                },
                {
                  key: "getTooltipEventType",
                  value: function () {
                    var t = tu(this.props.children, t5);
                    if (t && "boolean" == typeof t.props.shared) {
                      var e = t.props.shared ? "axis" : "item";
                      return a.indexOf(e) >= 0 ? e : i;
                    }
                    return i;
                  },
                },
                {
                  key: "getMouseInfo",
                  value: function (t) {
                    if (!this.container) return null;
                    var e = this.container,
                      r = e.getBoundingClientRect(),
                      n = {
                        top:
                          r.top +
                          window.scrollY -
                          document.documentElement.clientTop,
                        left:
                          r.left +
                          window.scrollX -
                          document.documentElement.clientLeft,
                      },
                      i = {
                        chartX: Math.round(t.pageX - n.left),
                        chartY: Math.round(t.pageY - n.top),
                      },
                      o = r.width / e.offsetWidth || 1,
                      a = this.inRange(i.chartX, i.chartY, o);
                    if (!a) return null;
                    var l = this.state,
                      c = l.xAxisMap,
                      u = l.yAxisMap,
                      s = this.getTooltipEventType(),
                      f = dd(this.state, this.props.data, this.props.layout, a);
                    if ("axis" !== s && c && u) {
                      var p = F(c).scale,
                        d = F(u).scale,
                        h = p && p.invert ? p.invert(i.chartX) : null,
                        y = d && d.invert ? d.invert(i.chartY) : null;
                      return de(de({}, i), {}, { xValue: h, yValue: y }, f);
                    }
                    return f ? de(de({}, i), f) : null;
                  },
                },
                {
                  key: "inRange",
                  value: function (t, e) {
                    var r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1,
                      n = this.props.layout,
                      i = t / r,
                      o = e / r;
                    if ("horizontal" === n || "vertical" === n) {
                      var a = this.state.offset;
                      return i >= a.left &&
                        i <= a.left + a.width &&
                        o >= a.top &&
                        o <= a.top + a.height
                        ? { x: i, y: o }
                        : null;
                    }
                    var l = this.state,
                      c = l.angleAxisMap,
                      u = l.radiusAxisMap;
                    return c && u ? uG({ x: i, y: o }, F(c)) : null;
                  },
                },
                {
                  key: "parseEventsOfWrapper",
                  value: function () {
                    var t = this.props.children,
                      e = this.getTooltipEventType(),
                      r = tu(t, t5),
                      n = {};
                    return (
                      r &&
                        "axis" === e &&
                        (n =
                          "click" === r.props.trigger
                            ? { onClick: this.handleClick }
                            : {
                                onMouseEnter: this.handleMouseEnter,
                                onDoubleClick: this.handleDoubleClick,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd,
                                onContextMenu: this.handleContextMenu,
                              }),
                      de(de({}, Z(this.props, this.handleOuterEvent)), n)
                    );
                  },
                },
                {
                  key: "addListener",
                  value: function () {
                    pn.on(pi, this.handleReceiveSyncEvent);
                  },
                },
                {
                  key: "removeListener",
                  value: function () {
                    pn.removeListener(pi, this.handleReceiveSyncEvent);
                  },
                },
                {
                  key: "filterFormatItem",
                  value: function (t, e, r) {
                    for (
                      var n = this.state.formattedGraphicalItems,
                        i = 0,
                        o = n.length;
                      i < o;
                      i++
                    ) {
                      var a = n[i];
                      if (
                        a.item === t ||
                        a.props.key === t.key ||
                        (e === ti(a.item.type) && r === a.childIndex)
                      )
                        return a;
                    }
                    return null;
                  },
                },
                {
                  key: "renderClipPath",
                  value: function () {
                    var t = this.clipPathId,
                      e = this.state.offset,
                      r = e.left,
                      n = e.top,
                      i = e.height,
                      o = e.width;
                    return f.default.createElement(
                      "defs",
                      null,
                      f.default.createElement(
                        "clipPath",
                        { id: t },
                        f.default.createElement("rect", {
                          x: r,
                          y: n,
                          height: i,
                          width: o,
                        }),
                      ),
                    );
                  },
                },
                {
                  key: "getXScales",
                  value: function () {
                    var t = this.state.xAxisMap;
                    return t
                      ? Object.entries(t).reduce(function (t, e) {
                          var r = p2(e, 2),
                            n = r[0],
                            i = r[1];
                          return de(de({}, t), {}, dr({}, n, i.scale));
                        }, {})
                      : null;
                  },
                },
                {
                  key: "getYScales",
                  value: function () {
                    var t = this.state.yAxisMap;
                    return t
                      ? Object.entries(t).reduce(function (t, e) {
                          var r = p2(e, 2),
                            n = r[0],
                            i = r[1];
                          return de(de({}, t), {}, dr({}, n, i.scale));
                        }, {})
                      : null;
                  },
                },
                {
                  key: "getXScaleByAxisId",
                  value: function (t) {
                    var e;
                    return null == (e = this.state.xAxisMap) ||
                      null == (e = e[t])
                      ? void 0
                      : e.scale;
                  },
                },
                {
                  key: "getYScaleByAxisId",
                  value: function (t) {
                    var e;
                    return null == (e = this.state.yAxisMap) ||
                      null == (e = e[t])
                      ? void 0
                      : e.scale;
                  },
                },
                {
                  key: "getItemByXY",
                  value: function (t) {
                    var e = this.state,
                      r = e.formattedGraphicalItems,
                      n = e.activeItem;
                    if (r && r.length)
                      for (var i = 0, o = r.length; i < o; i++) {
                        var a = r[i],
                          l = a.props,
                          c = a.item,
                          u =
                            void 0 !== c.type.defaultProps
                              ? de(de({}, c.type.defaultProps), c.props)
                              : c.props,
                          s = ti(c.type);
                        if ("Bar" === s) {
                          var f = (l.data || []).find(function (e) {
                            return nT(t, e);
                          });
                          if (f) return { graphicalItem: a, payload: f };
                        } else if ("RadialBar" === s) {
                          var p = (l.data || []).find(function (e) {
                            return uG(t, e);
                          });
                          if (p) return { graphicalItem: a, payload: p };
                        } else if (sz(a, n) || sF(a, n) || sU(a, n)) {
                          var d = (function (t) {
                              var e,
                                r,
                                n,
                                i = t.activeTooltipItem,
                                o = t.graphicalItem,
                                a = t.itemData,
                                l =
                                  (sz(o, i)
                                    ? (e = "trapezoids")
                                    : sF(o, i)
                                      ? (e = "sectors")
                                      : sU(o, i) && (e = "points"),
                                  e),
                                c = sz(o, i)
                                  ? null == (r = i.tooltipPayload) ||
                                    null == (r = r[0]) ||
                                    null == (r = r.payload)
                                    ? void 0
                                    : r.payload
                                  : sF(o, i)
                                    ? null == (n = i.tooltipPayload) ||
                                      null == (n = n[0]) ||
                                      null == (n = n.payload)
                                      ? void 0
                                      : n.payload
                                    : sU(o, i)
                                      ? i.payload
                                      : {},
                                u = a.filter(function (t, e) {
                                  var r = (0, co.default)(c, t),
                                    n = o.props[l].filter(function (t) {
                                      var e;
                                      return (sz(o, i)
                                        ? (e = s$)
                                        : sF(o, i)
                                          ? (e = sW)
                                          : sU(o, i) && (e = sV),
                                      e)(t, i);
                                    }),
                                    a = o.props[l].indexOf(n[n.length - 1]);
                                  return r && e === a;
                                });
                              return a.indexOf(u[u.length - 1]);
                            })({
                              graphicalItem: a,
                              activeTooltipItem: n,
                              itemData: u.data,
                            }),
                            h = void 0 === u.activeIndex ? d : u.activeIndex;
                          return {
                            graphicalItem: de(de({}, a), {}, { childIndex: h }),
                            payload: sU(a, n) ? u.data[d] : a.props.data[d],
                          };
                        }
                      }
                    return null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t,
                      e,
                      r = this;
                    if (!ts(this)) return null;
                    var n = this.props,
                      i = n.children,
                      o = n.className,
                      a = n.width,
                      l = n.height,
                      c = n.style,
                      u = n.compact,
                      s = n.title,
                      p = n.desc,
                      d = td(p5(n, pQ), !1);
                    if (u)
                      return f.default.createElement(
                        fC,
                        {
                          state: this.state,
                          width: this.props.width,
                          height: this.props.height,
                          clipPathId: this.clipPathId,
                        },
                        f.default.createElement(
                          tx,
                          p1({}, d, { width: a, height: l, title: s, desc: p }),
                          this.renderClipPath(),
                          tv(i, this.renderMap),
                        ),
                      );
                    this.props.accessibilityLayer &&
                      ((d.tabIndex = null != (t = this.props.tabIndex) ? t : 0),
                      (d.role =
                        null != (e = this.props.role) ? e : "application"),
                      (d.onKeyDown = function (t) {
                        r.accessibilityManager.keyboardEvent(t);
                      }),
                      (d.onFocus = function () {
                        r.accessibilityManager.focus();
                      }));
                    var h = this.parseEventsOfWrapper();
                    return f.default.createElement(
                      fC,
                      {
                        state: this.state,
                        width: this.props.width,
                        height: this.props.height,
                        clipPathId: this.clipPathId,
                      },
                      f.default.createElement(
                        "div",
                        p1(
                          {
                            className: P("recharts-wrapper", o),
                            style: de(
                              {
                                position: "relative",
                                cursor: "default",
                                width: a,
                                height: l,
                              },
                              c,
                            ),
                          },
                          h,
                          {
                            ref: function (t) {
                              r.container = t;
                            },
                          },
                        ),
                        f.default.createElement(
                          tx,
                          p1({}, d, {
                            width: a,
                            height: l,
                            title: s,
                            desc: p,
                            style: da,
                          }),
                          this.renderClipPath(),
                          tv(i, this.renderMap),
                        ),
                        this.renderLegend(),
                        this.renderTooltip(),
                      ),
                    );
                  },
                },
              ]),
              (function (t, e) {
                for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  ((n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(t, dn(n.key), n));
                }
              })(n.prototype, r),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              n
            );
          })(f.Component);
        (dr(h, "displayName", e),
          dr(
            h,
            "defaultProps",
            de(
              {
                layout: "horizontal",
                stackOffset: "none",
                barCategoryGap: "10%",
                barGap: 4,
                margin: { top: 5, right: 5, bottom: 5, left: 5 },
                reverseStackOrder: !1,
                syncMethod: "index",
              },
              s,
            ),
          ),
          dr(h, "getDerivedStateFromProps", function (t, e) {
            var r = t.dataKey,
              n = t.data,
              i = t.children,
              o = t.width,
              a = t.height,
              l = t.layout,
              c = t.stackOffset,
              u = t.margin,
              s = e.dataStartIndex,
              f = e.dataEndIndex;
            if (void 0 === e.updateId) {
              var p = db(t);
              return de(
                de(
                  de({}, p),
                  {},
                  { updateId: 0 },
                  d(de(de({ props: t }, p), {}, { updateId: 0 }), e),
                ),
                {},
                {
                  prevDataKey: r,
                  prevData: n,
                  prevWidth: o,
                  prevHeight: a,
                  prevLayout: l,
                  prevStackOffset: c,
                  prevMargin: u,
                  prevChildren: i,
                },
              );
            }
            if (
              r !== e.prevDataKey ||
              n !== e.prevData ||
              o !== e.prevWidth ||
              a !== e.prevHeight ||
              l !== e.prevLayout ||
              c !== e.prevStackOffset ||
              !q(u, e.prevMargin)
            ) {
              var h = db(t),
                y = {
                  chartX: e.chartX,
                  chartY: e.chartY,
                  isTooltipActive: e.isTooltipActive,
                },
                v = de(de({}, dd(e, n, l)), {}, { updateId: e.updateId + 1 }),
                m = de(de(de({}, h), y), v);
              return de(
                de(de({}, m), d(de({ props: t }, m), e)),
                {},
                {
                  prevDataKey: r,
                  prevData: n,
                  prevWidth: o,
                  prevHeight: a,
                  prevLayout: l,
                  prevStackOffset: c,
                  prevMargin: u,
                  prevChildren: i,
                },
              );
            }
            if (!th(i, e.prevChildren)) {
              var b,
                g,
                w,
                O,
                j = tu(i, uB),
                S =
                  j &&
                  null != (b = null == (g = j.props) ? void 0 : g.startIndex)
                    ? b
                    : s,
                k =
                  j && null != (w = null == (O = j.props) ? void 0 : O.endIndex)
                    ? w
                    : f,
                P =
                  (0, x.default)(n) || S !== s || k !== f
                    ? e.updateId + 1
                    : e.updateId;
              return de(
                de(
                  { updateId: P },
                  d(
                    de(
                      de({ props: t }, e),
                      {},
                      { updateId: P, dataStartIndex: S, dataEndIndex: k },
                    ),
                    e,
                  ),
                ),
                {},
                { prevChildren: i, dataStartIndex: S, dataEndIndex: k },
              );
            }
            return null;
          }),
          dr(h, "renderActiveDot", function (t, e, r) {
            var n;
            return (
              (n = (0, f.isValidElement)(t)
                ? (0, f.cloneElement)(t, e)
                : (0, w.default)(t)
                  ? t(e)
                  : f.default.createElement(eG, e)),
              f.default.createElement(
                tj,
                { className: "recharts-active-dot", key: r },
                n,
              )
            );
          }));
        var y = (0, f.forwardRef)(function (t, e) {
          return f.default.createElement(h, p1({}, t, { ref: e }));
        });
        return ((y.displayName = h.displayName), y);
      };
    function dO(t, e, r) {
      if (e < 1) return [];
      if (1 === e && void 0 === r) return t;
      for (var n = [], i = 0; i < t.length; i += e)
        if (void 0 !== r && !0 !== r(t[i])) return;
        else n.push(t[i]);
      return n;
    }
    function dj(t, e, r, n, i) {
      if (t * e < t * n || t * e > t * i) return !1;
      var o = r();
      return t * (e - (t * o) / 2 - n) >= 0 && t * (e + (t * o) / 2 - i) <= 0;
    }
    function dS(t) {
      return (dS =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function dk(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function dP(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? dk(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != dS(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != dS(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == dS(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : dk(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function dA(t, e, r) {
      var n,
        i,
        o,
        a,
        l,
        c = t.tick,
        u = t.ticks,
        s = t.viewBox,
        f = t.minTickGap,
        p = t.orientation,
        d = t.interval,
        h = t.tickFormatter,
        y = t.unit,
        v = t.angle;
      if (!u || !u.length || !c) return [];
      if (I(d) || tq.isSsr)
        return dO(u, ("number" == typeof d && I(d) ? d : 0) + 1);
      var m = "top" === p || "bottom" === p ? "width" : "height",
        b =
          y && "width" === m
            ? nG(y, { fontSize: e, letterSpacing: r })
            : { width: 0, height: 0 },
        g = function (t, n) {
          var i,
            o = (0, w.default)(h) ? h(t.value, n) : t.value;
          return "width" === m
            ? ((i = nG(o, { fontSize: e, letterSpacing: r })),
              ff({ width: i.width + b.width, height: i.height + b.height }, v))
            : nG(o, { fontSize: e, letterSpacing: r })[m];
        },
        x = u.length >= 2 ? C(u[1].coordinate - u[0].coordinate) : 1,
        O =
          ((n = "width" === m),
          (i = s.x),
          (o = s.y),
          (a = s.width),
          (l = s.height),
          1 === x
            ? { start: n ? i : o, end: n ? i + a : o + l }
            : { start: n ? i + a : o + l, end: n ? i : o });
      return "equidistantPreserveStart" === d
        ? (function (t, e, r, n, i) {
            for (
              var o,
                a = (n || []).slice(),
                l = e.start,
                c = e.end,
                u = 0,
                s = 1,
                f = l;
              s <= a.length;
            )
              if (
                (o = (function () {
                  var e,
                    o = null == n ? void 0 : n[u];
                  if (void 0 === o) return { v: dO(n, s) };
                  var a = u,
                    p = function () {
                      return (void 0 === e && (e = r(o, a)), e);
                    },
                    d = o.coordinate,
                    h = 0 === u || dj(t, d, p, f, c);
                  (h || ((u = 0), (f = l), (s += 1)),
                    h && ((f = d + t * (p() / 2 + i)), (u += s)));
                })())
              )
                return o.v;
            return [];
          })(x, O, g, u, f)
        : ("preserveStart" === d || "preserveStartEnd" === d
            ? (function (t, e, r, n, i, o) {
                var a = (n || []).slice(),
                  l = a.length,
                  c = e.start,
                  u = e.end;
                if (o) {
                  var s = n[l - 1],
                    f = r(s, l - 1),
                    p = t * (s.coordinate + (t * f) / 2 - u);
                  ((a[l - 1] = s =
                    dP(
                      dP({}, s),
                      {},
                      {
                        tickCoord: p > 0 ? s.coordinate - p * t : s.coordinate,
                      },
                    )),
                    dj(
                      t,
                      s.tickCoord,
                      function () {
                        return f;
                      },
                      c,
                      u,
                    ) &&
                      ((u = s.tickCoord - t * (f / 2 + i)),
                      (a[l - 1] = dP(dP({}, s), {}, { isShow: !0 }))));
                }
                for (
                  var d = o ? l - 1 : l,
                    h = function (e) {
                      var n,
                        o = a[e],
                        l = function () {
                          return (void 0 === n && (n = r(o, e)), n);
                        };
                      if (0 === e) {
                        var s = t * (o.coordinate - (t * l()) / 2 - c);
                        a[e] = o = dP(
                          dP({}, o),
                          {},
                          {
                            tickCoord:
                              s < 0 ? o.coordinate - s * t : o.coordinate,
                          },
                        );
                      } else
                        a[e] = o = dP(
                          dP({}, o),
                          {},
                          { tickCoord: o.coordinate },
                        );
                      dj(t, o.tickCoord, l, c, u) &&
                        ((c = o.tickCoord + t * (l() / 2 + i)),
                        (a[e] = dP(dP({}, o), {}, { isShow: !0 })));
                    },
                    y = 0;
                  y < d;
                  y++
                )
                  h(y);
                return a;
              })(x, O, g, u, f, "preserveStartEnd" === d)
            : (function (t, e, r, n, i) {
                for (
                  var o = (n || []).slice(),
                    a = o.length,
                    l = e.start,
                    c = e.end,
                    u = function (e) {
                      var n,
                        u = o[e],
                        s = function () {
                          return (void 0 === n && (n = r(u, e)), n);
                        };
                      if (e === a - 1) {
                        var f = t * (u.coordinate + (t * s()) / 2 - c);
                        o[e] = u = dP(
                          dP({}, u),
                          {},
                          {
                            tickCoord:
                              f > 0 ? u.coordinate - f * t : u.coordinate,
                          },
                        );
                      } else
                        o[e] = u = dP(
                          dP({}, u),
                          {},
                          { tickCoord: u.coordinate },
                        );
                      dj(t, u.tickCoord, s, l, c) &&
                        ((c = u.tickCoord - t * (s() / 2 + i)),
                        (o[e] = dP(dP({}, u), {}, { isShow: !0 })));
                    },
                    s = a - 1;
                  s >= 0;
                  s--
                )
                  u(s);
                return o;
              })(x, O, g, u, f)
          ).filter(function (t) {
            return t.isShow;
          });
    }
    var dE = ["viewBox"],
      d_ = ["viewBox"],
      dM = ["ticks"];
    function dT(t) {
      return (dT =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function dN() {
      return (dN = Object.assign.bind()).apply(this, arguments);
    }
    function dC(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function dD(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? dC(Object(r), !0).forEach(function (e) {
              dF(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : dC(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function dI(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    function dL(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, dU(n.key), n));
      }
    }
    function dB() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (dB = function () {
        return !!t;
      })();
    }
    function dR(t) {
      return (dR = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function dz(t, e) {
      return (dz = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function dF(t, e, r) {
      return (
        (e = dU(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function dU(t) {
      var e = (function (t, e) {
        if ("object" != dT(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != dT(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == dT(e) ? e : e + "";
    }
    var d$ = (function (t) {
      var e, r;
      function n(t) {
        var e, r, i;
        if (!(this instanceof n))
          throw TypeError("Cannot call a class as a function");
        return (
          (r = n),
          (i = [t]),
          (r = dR(r)),
          ((e = (function (t, e) {
            if (e && ("object" === dT(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                "Derived constructors may only return object or undefined",
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return r;
          })(
            this,
            dB()
              ? Reflect.construct(r, i || [], dR(this).constructor)
              : r.apply(this, i),
          )).state = { fontSize: "", letterSpacing: "" }),
          e
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t && dz(n, t),
        (e = [
          {
            key: "shouldComponentUpdate",
            value: function (t, e) {
              var r = t.viewBox,
                n = dI(t, dE),
                i = this.props,
                o = i.viewBox,
                a = dI(i, d_);
              return !q(r, o) || !q(n, a) || !q(e, this.state);
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              var t = this.layerReference;
              if (t) {
                var e = t.getElementsByClassName(
                  "recharts-cartesian-axis-tick-value",
                )[0];
                e &&
                  this.setState({
                    fontSize: window.getComputedStyle(e).fontSize,
                    letterSpacing: window.getComputedStyle(e).letterSpacing,
                  });
              }
            },
          },
          {
            key: "getTickLineCoord",
            value: function (t) {
              var e,
                r,
                n,
                i,
                o,
                a,
                l = this.props,
                c = l.x,
                u = l.y,
                s = l.width,
                f = l.height,
                p = l.orientation,
                d = l.tickSize,
                h = l.mirror,
                y = l.tickMargin,
                v = h ? -1 : 1,
                m = t.tickSize || d,
                b = I(t.tickCoord) ? t.tickCoord : t.coordinate;
              switch (p) {
                case "top":
                  ((e = r = t.coordinate),
                    (a = (n = (i = u + !h * f) - v * m) - v * y),
                    (o = b));
                  break;
                case "left":
                  ((n = i = t.coordinate),
                    (o = (e = (r = c + !h * s) - v * m) - v * y),
                    (a = b));
                  break;
                case "right":
                  ((n = i = t.coordinate),
                    (o = (e = (r = c + h * s) + v * m) + v * y),
                    (a = b));
                  break;
                default:
                  ((e = r = t.coordinate),
                    (a = (n = (i = u + h * f) + v * m) + v * y),
                    (o = b));
              }
              return {
                line: { x1: e, y1: n, x2: r, y2: i },
                tick: { x: o, y: a },
              };
            },
          },
          {
            key: "getTickTextAnchor",
            value: function () {
              var t,
                e = this.props,
                r = e.orientation,
                n = e.mirror;
              switch (r) {
                case "left":
                  t = n ? "start" : "end";
                  break;
                case "right":
                  t = n ? "end" : "start";
                  break;
                default:
                  t = "middle";
              }
              return t;
            },
          },
          {
            key: "getTickVerticalAnchor",
            value: function () {
              var t = this.props,
                e = t.orientation,
                r = t.mirror,
                n = "end";
              switch (e) {
                case "left":
                case "right":
                  n = "middle";
                  break;
                case "top":
                  n = r ? "start" : "end";
                  break;
                default:
                  n = r ? "end" : "start";
              }
              return n;
            },
          },
          {
            key: "renderAxisLine",
            value: function () {
              var t = this.props,
                e = t.x,
                r = t.y,
                n = t.width,
                i = t.height,
                o = t.orientation,
                a = t.mirror,
                l = t.axisLine,
                c = dD(
                  dD(dD({}, td(this.props, !1)), td(l, !1)),
                  {},
                  { fill: "none" },
                );
              if ("top" === o || "bottom" === o) {
                var u = +(("top" === o && !a) || ("bottom" === o && a));
                c = dD(
                  dD({}, c),
                  {},
                  { x1: e, y1: r + u * i, x2: e + n, y2: r + u * i },
                );
              } else {
                var s = +(("left" === o && !a) || ("right" === o && a));
                c = dD(
                  dD({}, c),
                  {},
                  { x1: e + s * n, y1: r, x2: e + s * n, y2: r + i },
                );
              }
              return f.default.createElement(
                "line",
                dN({}, c, {
                  className: P(
                    "recharts-cartesian-axis-line",
                    (0, j.default)(l, "className"),
                  ),
                }),
              );
            },
          },
          {
            key: "renderTicks",
            value: function (t, e, r) {
              var i = this,
                o = this.props,
                a = o.tickLine,
                l = o.stroke,
                c = o.tick,
                u = o.tickFormatter,
                s = o.unit,
                p = dA(dD(dD({}, this.props), {}, { ticks: t }), e, r),
                d = this.getTickTextAnchor(),
                h = this.getTickVerticalAnchor(),
                y = td(this.props, !1),
                v = td(c, !1),
                m = dD(dD({}, y), {}, { fill: "none" }, td(a, !1)),
                b = p.map(function (t, e) {
                  var r = i.getTickLineCoord(t),
                    o = r.line,
                    b = r.tick,
                    g = dD(
                      dD(
                        dD(
                          dD({ textAnchor: d, verticalAnchor: h }, y),
                          {},
                          { stroke: "none", fill: l },
                          v,
                        ),
                        b,
                      ),
                      {},
                      {
                        index: e,
                        payload: t,
                        visibleTicksCount: p.length,
                        tickFormatter: u,
                      },
                    );
                  return f.default.createElement(
                    tj,
                    dN(
                      {
                        className: "recharts-cartesian-axis-tick",
                        key: "tick-"
                          .concat(t.value, "-")
                          .concat(t.coordinate, "-")
                          .concat(t.tickCoord),
                      },
                      J(i.props, t, e),
                    ),
                    a &&
                      f.default.createElement(
                        "line",
                        dN({}, m, o, {
                          className: P(
                            "recharts-cartesian-axis-tick-line",
                            (0, j.default)(a, "className"),
                          ),
                        }),
                      ),
                    c &&
                      n.renderTickItem(
                        c,
                        g,
                        ""
                          .concat((0, w.default)(u) ? u(t.value, e) : t.value)
                          .concat(s || ""),
                      ),
                  );
                });
              return f.default.createElement(
                "g",
                { className: "recharts-cartesian-axis-ticks" },
                b,
              );
            },
          },
          {
            key: "render",
            value: function () {
              var t = this,
                e = this.props,
                r = e.axisLine,
                n = e.width,
                i = e.height,
                o = e.ticksGenerator,
                a = e.className;
              if (e.hide) return null;
              var l = this.props,
                c = l.ticks,
                u = dI(l, dM),
                s = c;
              return ((0, w.default)(o) &&
                (s = o(c && c.length > 0 ? this.props : u)),
              n <= 0 || i <= 0 || !s || !s.length)
                ? null
                : f.default.createElement(
                    tj,
                    {
                      className: P("recharts-cartesian-axis", a),
                      ref: function (e) {
                        t.layerReference = e;
                      },
                    },
                    r && this.renderAxisLine(),
                    this.renderTicks(
                      s,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    u8.renderCallByParent(this.props),
                  );
            },
          },
        ]),
        (r = [
          {
            key: "renderTickItem",
            value: function (t, e, r) {
              var n = P(e.className, "recharts-cartesian-axis-tick-value");
              return f.default.isValidElement(t)
                ? f.default.cloneElement(t, dD(dD({}, e), {}, { className: n }))
                : (0, w.default)(t)
                  ? t(dD(dD({}, e), {}, { className: n }))
                  : f.default.createElement(
                      ih,
                      dN({}, e, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      r,
                    );
            },
          },
        ]),
        e && dL(n.prototype, e),
        r && dL(n, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        n
      );
    })(f.Component);
    function dW(t) {
      return (dW =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    (dF(d$, "displayName", "CartesianAxis"),
      dF(d$, "defaultProps", {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        viewBox: { x: 0, y: 0, width: 0, height: 0 },
        orientation: "bottom",
        ticks: [],
        stroke: "#666",
        tickLine: !0,
        axisLine: !0,
        tick: !0,
        mirror: !1,
        minTickGap: 5,
        tickSize: 6,
        tickMargin: 2,
        interval: "preserveEnd",
      }));
    function dV() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (dV = function () {
        return !!t;
      })();
    }
    function dq(t) {
      return (dq = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function dH(t, e) {
      return (dH = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function dX(t, e, r) {
      return (
        (e = dK(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function dK(t) {
      var e = (function (t, e) {
        if ("object" != dW(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != dW(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == dW(e) ? e : e + "";
    }
    function dG() {
      return (dG = Object.assign.bind()).apply(this, arguments);
    }
    function dY(t) {
      var e = t.xAxisId,
        r = fB(),
        n = fR(),
        i = fD(e);
      return null == i
        ? null
        : f.createElement(
            d$,
            dG({}, i, {
              className: P(
                "recharts-".concat(i.axisType, " ").concat(i.axisType),
                i.className,
              ),
              viewBox: { x: 0, y: 0, width: r, height: n },
              ticksGenerator: function (t) {
                return c8(t, !0);
              },
            }),
          );
    }
    var dZ = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError("Cannot call a class as a function");
        return (
          (t = r),
          (e = arguments),
          (t = dq(t)),
          (function (t, e) {
            if (e && ("object" === dW(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                "Derived constructors may only return object or undefined",
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return r;
          })(
            this,
            dV()
              ? Reflect.construct(t, e || [], dq(this).constructor)
              : t.apply(this, e),
          )
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        t && dH(r, t),
        (e = [
          {
            key: "render",
            value: function () {
              return f.createElement(dY, this.props);
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            ((n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, dK(n.key), n));
          }
        })(r.prototype, e),
        Object.defineProperty(r, "prototype", { writable: !1 }),
        r
      );
    })(f.Component);
    function dJ(t) {
      return (dJ =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    (dX(dZ, "displayName", "XAxis"),
      dX(dZ, "defaultProps", {
        allowDecimals: !0,
        hide: !1,
        orientation: "bottom",
        width: 0,
        height: 30,
        mirror: !1,
        xAxisId: 0,
        tickCount: 5,
        type: "category",
        padding: { left: 0, right: 0 },
        allowDataOverflow: !1,
        scale: "auto",
        reversed: !1,
        allowDuplicatedCategory: !0,
      }));
    function dQ() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (dQ = function () {
        return !!t;
      })();
    }
    function d0(t) {
      return (d0 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function d1(t, e) {
      return (d1 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function d2(t, e, r) {
      return (
        (e = d5(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function d5(t) {
      var e = (function (t, e) {
        if ("object" != dJ(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != dJ(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == dJ(e) ? e : e + "";
    }
    function d3() {
      return (d3 = Object.assign.bind()).apply(this, arguments);
    }
    var d4 = function (t) {
        var e = t.yAxisId,
          r = fB(),
          n = fR(),
          i = fL(e);
        return null == i
          ? null
          : f.createElement(
              d$,
              d3({}, i, {
                className: P(
                  "recharts-".concat(i.axisType, " ").concat(i.axisType),
                  i.className,
                ),
                viewBox: { x: 0, y: 0, width: r, height: n },
                ticksGenerator: function (t) {
                  return c8(t, !0);
                },
              }),
            );
      },
      d6 = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = r),
            (e = arguments),
            (t = d0(t)),
            (function (t, e) {
              if (e && ("object" === dJ(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              dQ()
                ? Reflect.construct(t, e || [], d0(this).constructor)
                : t.apply(this, e),
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          t && d1(r, t),
          (e = [
            {
              key: "render",
              value: function () {
                return f.createElement(d4, this.props);
              },
            },
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              ((n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, d5(n.key), n));
            }
          })(r.prototype, e),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          r
        );
      })(f.Component);
    (d2(d6, "displayName", "YAxis"),
      d2(d6, "defaultProps", {
        allowDuplicatedCategory: !0,
        allowDecimals: !0,
        hide: !1,
        orientation: "left",
        width: 60,
        height: 0,
        mirror: !1,
        yAxisId: 0,
        tickCount: 5,
        type: "number",
        padding: { top: 0, bottom: 0 },
        allowDataOverflow: !1,
        scale: "auto",
        reversed: !1,
      }));
    var d8 = dw({
        chartName: "BarChart",
        GraphicalChild: ft,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [
          { axisType: "xAxis", AxisComp: dZ },
          { axisType: "yAxis", AxisComp: d6 },
        ],
        formatAxisMap: fl,
      }),
      d7 = ["x1", "y1", "x2", "y2", "key"],
      d9 = ["offset"];
    function ht(t) {
      return (ht =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function he(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function hr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? he(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != ht(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != ht(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == ht(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function hn() {
      return (hn = Object.assign.bind()).apply(this, arguments);
    }
    function hi(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    var ho = function (t) {
      var e = t.fill;
      if (!e || "none" === e) return null;
      var r = t.fillOpacity,
        n = t.x,
        i = t.y,
        o = t.width,
        a = t.height,
        l = t.ry;
      return f.default.createElement("rect", {
        x: n,
        y: i,
        ry: l,
        width: o,
        height: a,
        stroke: "none",
        fill: e,
        fillOpacity: r,
        className: "recharts-cartesian-grid-bg",
      });
    };
    function ha(t, e) {
      var r;
      if (f.default.isValidElement(t)) r = f.default.cloneElement(t, e);
      else if ((0, w.default)(t)) r = t(e);
      else {
        var n = e.x1,
          i = e.y1,
          o = e.x2,
          a = e.y2,
          l = e.key,
          c = td(hi(e, d7), !1),
          u = (c.offset, hi(c, d9));
        r = f.default.createElement(
          "line",
          hn({}, u, { x1: n, y1: i, x2: o, y2: a, fill: "none", key: l }),
        );
      }
      return r;
    }
    function hl(t) {
      var e = t.x,
        r = t.width,
        n = t.horizontal,
        i = void 0 === n || n,
        o = t.horizontalPoints;
      if (!i || !o || !o.length) return null;
      var a = o.map(function (n, o) {
        return ha(
          i,
          hr(
            hr({}, t),
            {},
            {
              x1: e,
              y1: n,
              x2: e + r,
              y2: n,
              key: "line-".concat(o),
              index: o,
            },
          ),
        );
      });
      return f.default.createElement(
        "g",
        { className: "recharts-cartesian-grid-horizontal" },
        a,
      );
    }
    function hc(t) {
      var e = t.y,
        r = t.height,
        n = t.vertical,
        i = void 0 === n || n,
        o = t.verticalPoints;
      if (!i || !o || !o.length) return null;
      var a = o.map(function (n, o) {
        return ha(
          i,
          hr(
            hr({}, t),
            {},
            {
              x1: n,
              y1: e,
              x2: n,
              y2: e + r,
              key: "line-".concat(o),
              index: o,
            },
          ),
        );
      });
      return f.default.createElement(
        "g",
        { className: "recharts-cartesian-grid-vertical" },
        a,
      );
    }
    function hu(t) {
      var e = t.horizontalFill,
        r = t.fillOpacity,
        n = t.x,
        i = t.y,
        o = t.width,
        a = t.height,
        l = t.horizontalPoints,
        c = t.horizontal;
      if (!(void 0 === c || c) || !e || !e.length) return null;
      var u = l
        .map(function (t) {
          return Math.round(t + i - i);
        })
        .sort(function (t, e) {
          return t - e;
        });
      i !== u[0] && u.unshift(0);
      var s = u.map(function (t, l) {
        var c = u[l + 1] ? u[l + 1] - t : i + a - t;
        if (c <= 0) return null;
        var s = l % e.length;
        return f.default.createElement("rect", {
          key: "react-".concat(l),
          y: t,
          x: n,
          height: c,
          width: o,
          stroke: "none",
          fill: e[s],
          fillOpacity: r,
          className: "recharts-cartesian-grid-bg",
        });
      });
      return f.default.createElement(
        "g",
        { className: "recharts-cartesian-gridstripes-horizontal" },
        s,
      );
    }
    function hs(t) {
      var e = t.vertical,
        r = t.verticalFill,
        n = t.fillOpacity,
        i = t.x,
        o = t.y,
        a = t.width,
        l = t.height,
        c = t.verticalPoints;
      if (!(void 0 === e || e) || !r || !r.length) return null;
      var u = c
        .map(function (t) {
          return Math.round(t + i - i);
        })
        .sort(function (t, e) {
          return t - e;
        });
      i !== u[0] && u.unshift(0);
      var s = u.map(function (t, e) {
        var c = u[e + 1] ? u[e + 1] - t : i + a - t;
        if (c <= 0) return null;
        var s = e % r.length;
        return f.default.createElement("rect", {
          key: "react-".concat(e),
          x: t,
          y: o,
          width: c,
          height: l,
          stroke: "none",
          fill: r[s],
          fillOpacity: n,
          className: "recharts-cartesian-grid-bg",
        });
      });
      return f.default.createElement(
        "g",
        { className: "recharts-cartesian-gridstripes-vertical" },
        s,
      );
    }
    var hf = function (t, e) {
        var r = t.xAxis,
          n = t.width,
          i = t.height,
          o = t.offset;
        return c6(
          dA(
            hr(
              hr(hr({}, d$.defaultProps), r),
              {},
              {
                ticks: c8(r, !0),
                viewBox: { x: 0, y: 0, width: n, height: i },
              },
            ),
          ),
          o.left,
          o.left + o.width,
          e,
        );
      },
      hp = function (t, e) {
        var r = t.yAxis,
          n = t.width,
          i = t.height,
          o = t.offset;
        return c6(
          dA(
            hr(
              hr(hr({}, d$.defaultProps), r),
              {},
              {
                ticks: c8(r, !0),
                viewBox: { x: 0, y: 0, width: n, height: i },
              },
            ),
          ),
          o.top,
          o.top + o.height,
          e,
        );
      },
      hd = [],
      hh = [];
    function hy(t) {
      var e,
        r,
        n,
        i,
        o,
        a,
        l = fB(),
        c = fR(),
        u = (0, f.useContext)(f_),
        s = hr(
          hr({}, t),
          {},
          {
            stroke: null != (e = t.stroke) ? e : "#ccc",
            fill: null != (r = t.fill) ? r : "none",
            horizontal: null == (n = t.horizontal) || n,
            horizontalFill: null != (i = t.horizontalFill) ? i : hh,
            vertical: null == (o = t.vertical) || o,
            verticalFill: null != (a = t.verticalFill) ? a : hd,
            x: I(t.x) ? t.x : u.left,
            y: I(t.y) ? t.y : u.top,
            width: I(t.width) ? t.width : u.width,
            height: I(t.height) ? t.height : u.height,
          },
        ),
        p = s.x,
        d = s.y,
        h = s.width,
        y = s.height,
        v = s.syncWithTicks,
        m = s.horizontalValues,
        b = s.verticalValues,
        g = F((0, f.useContext)(fP)),
        x = fI();
      if (
        !I(h) ||
        h <= 0 ||
        !I(y) ||
        y <= 0 ||
        !I(p) ||
        p !== +p ||
        !I(d) ||
        d !== +d
      )
        return null;
      var O = s.verticalCoordinatesGenerator || hf,
        j = s.horizontalCoordinatesGenerator || hp,
        S = s.horizontalPoints,
        k = s.verticalPoints;
      if ((!S || !S.length) && (0, w.default)(j)) {
        var P = m && m.length,
          A = j(
            {
              yAxis: x ? hr(hr({}, x), {}, { ticks: P ? m : x.ticks }) : void 0,
              width: l,
              height: c,
              offset: u,
            },
            !!P || v,
          );
        (t3(
          Array.isArray(A),
          "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
            ht(A),
            "]",
          ),
        ),
          Array.isArray(A) && (S = A));
      }
      if ((!k || !k.length) && (0, w.default)(O)) {
        var E = b && b.length,
          _ = O(
            {
              xAxis: g ? hr(hr({}, g), {}, { ticks: E ? b : g.ticks }) : void 0,
              width: l,
              height: c,
              offset: u,
            },
            !!E || v,
          );
        (t3(
          Array.isArray(_),
          "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
            ht(_),
            "]",
          ),
        ),
          Array.isArray(_) && (k = _));
      }
      return f.default.createElement(
        "g",
        { className: "recharts-cartesian-grid" },
        f.default.createElement(ho, {
          fill: s.fill,
          fillOpacity: s.fillOpacity,
          x: s.x,
          y: s.y,
          width: s.width,
          height: s.height,
          ry: s.ry,
        }),
        f.default.createElement(
          hl,
          hn({}, s, { offset: u, horizontalPoints: S, xAxis: g, yAxis: x }),
        ),
        f.default.createElement(
          hc,
          hn({}, s, { offset: u, verticalPoints: k, xAxis: g, yAxis: x }),
        ),
        f.default.createElement(hu, hn({}, s, { horizontalPoints: S })),
        f.default.createElement(hs, hn({}, s, { verticalPoints: k })),
      );
    }
    function hv(t) {
      return (hv =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function hm(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function hb(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? hm(Object(r), !0).forEach(function (e) {
              var n, i, o;
              ((n = t),
                (i = e),
                (o = r[e]),
                (i = (function (t) {
                  var e = (function (t, e) {
                    if ("object" != hv(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || "default");
                      if ("object" != hv(n)) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == hv(e) ? e : e + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = o));
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : hm(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function hg(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    hy.displayName = "CartesianGrid";
    var hx = (0, f.forwardRef)(function (t, e) {
        var r,
          n = t.aspect,
          i = t.initialDimension,
          o = void 0 === i ? { width: -1, height: -1 } : i,
          a = t.width,
          l = void 0 === a ? "100%" : a,
          c = t.height,
          u = void 0 === c ? "100%" : c,
          s = t.minWidth,
          p = void 0 === s ? 0 : s,
          d = t.minHeight,
          h = t.maxHeight,
          y = t.children,
          v = t.debounce,
          m = void 0 === v ? 0 : v,
          b = t.id,
          g = t.className,
          x = t.onResize,
          w = t.style,
          O = (0, f.useRef)(null),
          j = (0, f.useRef)();
        ((j.current = x),
          (0, f.useImperativeHandle)(e, function () {
            return Object.defineProperty(O.current, "current", {
              get: function () {
                return (
                  console.warn(
                    "The usage of ref.current.current is deprecated and will no longer be supported.",
                  ),
                  O.current
                );
              },
              configurable: !0,
            });
          }));
        var S =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(
              (r = (0, f.useState)({
                containerWidth: o.width,
                containerHeight: o.height,
              })),
            ) ||
            (function (t) {
              var e =
                null == t
                  ? null
                  : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != e) {
                var r,
                  n,
                  i,
                  o,
                  a = [],
                  l = !0,
                  c = !1;
                try {
                  ((i = (e = e.call(t)).next), !1);
                  for (
                    ;
                    !(l = (r = i.call(e)).done) &&
                    (a.push(r.value), 2 !== a.length);
                    l = !0
                  );
                } catch (t) {
                  ((c = !0), (n = t));
                } finally {
                  try {
                    if (
                      !l &&
                      null != e.return &&
                      ((o = e.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw n;
                  }
                }
                return a;
              }
            })(r) ||
            (function (t) {
              if (t) {
                if ("string" == typeof t) return hg(t, 2);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ("Object" === e && t.constructor && (e = t.constructor.name),
                  "Map" === e || "Set" === e)
                )
                  return Array.from(t);
                if (
                  "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return hg(t, 2);
              }
            })(r) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(),
          A = S[0],
          E = S[1],
          _ = (0, f.useCallback)(function (t, e) {
            E(function (r) {
              var n = Math.round(t),
                i = Math.round(e);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, f.useEffect)(
          function () {
            var t = function (t) {
              var e,
                r = t[0].contentRect,
                n = r.width,
                i = r.height;
              (_(n, i), null == (e = j.current) || e.call(j, n, i));
            };
            m > 0 && (t = (0, k.default)(t, m, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = O.current.getBoundingClientRect();
            return (
              _(r.width, r.height),
              e.observe(O.current),
              function () {
                e.disconnect();
              }
            );
          },
          [_, m],
        );
        var M = (0, f.useMemo)(
          function () {
            var t = A.containerWidth,
              e = A.containerHeight;
            if (t < 0 || e < 0) return null;
            (t3(
              D(l) || D(u),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              l,
              u,
            ),
              t3(!n || n > 0, "The aspect(%s) must be greater than zero.", n));
            var r = D(l) ? t : l,
              i = D(u) ? e : u;
            (n &&
              n > 0 &&
              (r ? (i = r / n) : i && (r = i * n), h && i > h && (i = h)),
              t3(
                r > 0 || i > 0,
                "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
                r,
                i,
                l,
                u,
                p,
                d,
                n,
              ));
            var o = !Array.isArray(y) && ti(y.type).endsWith("Chart");
            return f.default.Children.map(y, function (t) {
              return f.default.isValidElement(t)
                ? (0, f.cloneElement)(
                    t,
                    hb(
                      { width: r, height: i },
                      o
                        ? {
                            style: hb(
                              {
                                height: "100%",
                                width: "100%",
                                maxHeight: i,
                                maxWidth: r,
                              },
                              t.props.style,
                            ),
                          }
                        : {},
                    ),
                  )
                : t;
            });
          },
          [n, y, u, h, d, p, A, l],
        );
        return f.default.createElement(
          "div",
          {
            id: b ? "".concat(b) : void 0,
            className: P("recharts-responsive-container", g),
            style: hb(
              hb({}, void 0 === w ? {} : w),
              {},
              { width: l, height: u, minWidth: p, minHeight: d, maxHeight: h },
            ),
            ref: O,
          },
          M,
        );
      }),
      hw = ["type", "layout", "connectNulls", "ref"],
      hO = ["key"];
    function hj(t) {
      return (hj =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function hS(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    function hk() {
      return (hk = Object.assign.bind()).apply(this, arguments);
    }
    function hP(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function hA(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? hP(Object(r), !0).forEach(function (e) {
              hD(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : hP(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function hE(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return h_(t);
        })(t) ||
        (function (t) {
          if (
            ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ("string" == typeof t) return h_(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e)
            )
              return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return h_(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function h_(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function hM(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, hI(n.key), n));
      }
    }
    function hT() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (hT = function () {
        return !!t;
      })();
    }
    function hN(t) {
      return (hN = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function hC(t, e) {
      return (hC = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function hD(t, e, r) {
      return (
        (e = hI(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function hI(t) {
      var e = (function (t, e) {
        if ("object" != hj(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != hj(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == hj(e) ? e : e + "";
    }
    var hL = (function (t) {
      var e, r;
      function n() {
        var t, e, r;
        if (!(this instanceof n))
          throw TypeError("Cannot call a class as a function");
        for (var i = arguments.length, o = Array(i), a = 0; a < i; a++)
          o[a] = arguments[a];
        return (
          (e = n),
          (r = [].concat(o)),
          (e = hN(e)),
          hD(
            (t = (function (t, e) {
              if (e && ("object" === hj(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              hT()
                ? Reflect.construct(e, r || [], hN(this).constructor)
                : e.apply(this, r),
            )),
            "state",
            { isAnimationFinished: !0, totalLength: 0 },
          ),
          hD(t, "generateSimpleStrokeDasharray", function (t, e) {
            return "".concat(e, "px ").concat(t - e, "px");
          }),
          hD(t, "getStrokeDasharray", function (e, r, i) {
            var o = i.reduce(function (t, e) {
              return t + e;
            });
            if (!o) return t.generateSimpleStrokeDasharray(r, e);
            for (
              var a = Math.floor(e / o),
                l = e % o,
                c = r - e,
                u = [],
                s = 0,
                f = 0;
              s < i.length;
              f += i[s], ++s
            )
              if (f + i[s] > l) {
                u = [].concat(hE(i.slice(0, s)), [l - f]);
                break;
              }
            var p = u.length % 2 == 0 ? [0, c] : [c];
            return []
              .concat(hE(n.repeat(i, a)), hE(u), p)
              .map(function (t) {
                return "".concat(t, "px");
              })
              .join(", ");
          }),
          hD(t, "id", R("recharts-line-")),
          hD(t, "pathRef", function (e) {
            t.mainCurve = e;
          }),
          hD(t, "handleAnimationEnd", function () {
            (t.setState({ isAnimationFinished: !0 }),
              t.props.onAnimationEnd && t.props.onAnimationEnd());
          }),
          hD(t, "handleAnimationStart", function () {
            (t.setState({ isAnimationFinished: !1 }),
              t.props.onAnimationStart && t.props.onAnimationStart());
          }),
          t
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t && hC(n, t),
        (e = [
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.isAnimationActive) {
                var t = this.getTotalLength();
                this.setState({ totalLength: t });
              }
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              if (this.props.isAnimationActive) {
                var t = this.getTotalLength();
                t !== this.state.totalLength &&
                  this.setState({ totalLength: t });
              }
            },
          },
          {
            key: "getTotalLength",
            value: function () {
              var t = this.mainCurve;
              try {
                return (t && t.getTotalLength && t.getTotalLength()) || 0;
              } catch (t) {
                return 0;
              }
            },
          },
          {
            key: "renderErrorBar",
            value: function (t, e) {
              if (
                this.props.isAnimationActive &&
                !this.state.isAnimationFinished
              )
                return null;
              var r = this.props,
                n = r.points,
                i = r.xAxis,
                o = r.yAxis,
                a = r.layout,
                l = tc(r.children, cR);
              if (!l) return null;
              var c = function (t, e) {
                return {
                  x: t.x,
                  y: t.y,
                  value: t.value,
                  errorVal: cG(t.payload, e),
                };
              };
              return f.default.createElement(
                tj,
                { clipPath: t ? "url(#clipPath-".concat(e, ")") : null },
                l.map(function (t) {
                  return f.default.cloneElement(t, {
                    key: "bar-".concat(t.props.dataKey),
                    data: n,
                    xAxis: i,
                    yAxis: o,
                    layout: a,
                    dataPointFormatter: c,
                  });
                }),
              );
            },
          },
          {
            key: "renderDots",
            value: function (t, e, r) {
              if (
                this.props.isAnimationActive &&
                !this.state.isAnimationFinished
              )
                return null;
              var i = this.props,
                o = i.dot,
                a = i.points,
                l = i.dataKey,
                c = td(this.props, !1),
                u = td(o, !0),
                s = a.map(function (t, e) {
                  var r = hA(
                    hA(hA({ key: "dot-".concat(e), r: 3 }, c), u),
                    {},
                    {
                      index: e,
                      cx: t.x,
                      cy: t.y,
                      value: t.value,
                      dataKey: l,
                      payload: t.payload,
                      points: a,
                    },
                  );
                  return n.renderDotItem(o, r);
                }),
                p = {
                  clipPath: t
                    ? "url(#clipPath-".concat(e ? "" : "dots-").concat(r, ")")
                    : null,
                };
              return f.default.createElement(
                tj,
                hk({ className: "recharts-line-dots", key: "dots" }, p),
                s,
              );
            },
          },
          {
            key: "renderCurveStatically",
            value: function (t, e, r, n) {
              var i = this.props,
                o = i.type,
                a = i.layout,
                l = i.connectNulls,
                c = hA(
                  hA(
                    hA({}, td((i.ref, hS(i, hw)), !0)),
                    {},
                    {
                      fill: "none",
                      className: "recharts-line-curve",
                      clipPath: e ? "url(#clipPath-".concat(r, ")") : null,
                      points: t,
                    },
                    n,
                  ),
                  {},
                  { type: o, layout: a, connectNulls: l },
                );
              return f.default.createElement(
                pU,
                hk({}, c, { pathRef: this.pathRef }),
              );
            },
          },
          {
            key: "renderCurveWithAnimation",
            value: function (t, e) {
              var r = this,
                n = this.props,
                i = n.points,
                o = n.strokeDasharray,
                a = n.isAnimationActive,
                l = n.animationBegin,
                c = n.animationDuration,
                u = n.animationEasing,
                s = n.animationId,
                p = n.animateNewValues,
                d = n.width,
                h = n.height,
                y = this.state,
                v = y.prevPoints,
                m = y.totalLength;
              return f.default.createElement(
                r3,
                {
                  begin: l,
                  duration: c,
                  isActive: a,
                  easing: u,
                  from: { t: 0 },
                  to: { t: 1 },
                  key: "line-".concat(s),
                  onAnimationEnd: this.handleAnimationEnd,
                  onAnimationStart: this.handleAnimationStart,
                },
                function (n) {
                  var a,
                    l = n.t;
                  if (v) {
                    var c = v.length / i.length,
                      u = i.map(function (t, e) {
                        var r = Math.floor(e * c);
                        if (v[r]) {
                          var n = v[r],
                            i = $(n.x, t.x),
                            o = $(n.y, t.y);
                          return hA(hA({}, t), {}, { x: i(l), y: o(l) });
                        }
                        if (p) {
                          var a = $(2 * d, t.x),
                            u = $(h / 2, t.y);
                          return hA(hA({}, t), {}, { x: a(l), y: u(l) });
                        }
                        return hA(hA({}, t), {}, { x: t.x, y: t.y });
                      });
                    return r.renderCurveStatically(u, t, e);
                  }
                  var s = $(0, m)(l);
                  if (o) {
                    var f = ""
                      .concat(o)
                      .split(/[,\s]+/gim)
                      .map(function (t) {
                        return parseFloat(t);
                      });
                    a = r.getStrokeDasharray(s, m, f);
                  } else a = r.generateSimpleStrokeDasharray(m, s);
                  return r.renderCurveStatically(i, t, e, {
                    strokeDasharray: a,
                  });
                },
              );
            },
          },
          {
            key: "renderCurve",
            value: function (t, e) {
              var r = this.props,
                n = r.points,
                i = r.isAnimationActive,
                o = this.state,
                a = o.prevPoints,
                l = o.totalLength;
              return i &&
                n &&
                n.length &&
                ((!a && l > 0) || !(0, co.default)(a, n))
                ? this.renderCurveWithAnimation(t, e)
                : this.renderCurveStatically(n, t, e);
            },
          },
          {
            key: "render",
            value: function () {
              var t,
                e = this.props,
                r = e.hide,
                n = e.dot,
                i = e.points,
                o = e.className,
                a = e.xAxis,
                l = e.yAxis,
                c = e.top,
                u = e.left,
                s = e.width,
                p = e.height,
                d = e.isAnimationActive,
                h = e.id;
              if (r || !i || !i.length) return null;
              var y = this.state.isAnimationFinished,
                v = 1 === i.length,
                m = P("recharts-line", o),
                b = a && a.allowDataOverflow,
                g = l && l.allowDataOverflow,
                w = b || g,
                O = (0, x.default)(h) ? this.id : h,
                j = null != (t = td(n, !1)) ? t : { r: 3, strokeWidth: 2 },
                S = j.r,
                k = j.strokeWidth,
                A = (n && "object" === tr(n) && "clipDot" in n ? n : {})
                  .clipDot,
                E = void 0 === A || A,
                _ = 2 * (void 0 === S ? 3 : S) + (void 0 === k ? 2 : k);
              return f.default.createElement(
                tj,
                { className: m },
                b || g
                  ? f.default.createElement(
                      "defs",
                      null,
                      f.default.createElement(
                        "clipPath",
                        { id: "clipPath-".concat(O) },
                        f.default.createElement("rect", {
                          x: b ? u : u - s / 2,
                          y: g ? c : c - p / 2,
                          width: b ? s : 2 * s,
                          height: g ? p : 2 * p,
                        }),
                      ),
                      !E &&
                        f.default.createElement(
                          "clipPath",
                          { id: "clipPath-dots-".concat(O) },
                          f.default.createElement("rect", {
                            x: u - _ / 2,
                            y: c - _ / 2,
                            width: s + _,
                            height: p + _,
                          }),
                        ),
                    )
                  : null,
                !v && this.renderCurve(w, O),
                this.renderErrorBar(w, O),
                (v || n) && this.renderDots(w, E, O),
                (!d || y) && sd.renderCallByParent(this.props, i),
              );
            },
          },
        ]),
        (r = [
          {
            key: "getDerivedStateFromProps",
            value: function (t, e) {
              return t.animationId !== e.prevAnimationId
                ? {
                    prevAnimationId: t.animationId,
                    curPoints: t.points,
                    prevPoints: e.curPoints,
                  }
                : t.points !== e.curPoints
                  ? { curPoints: t.points }
                  : null;
            },
          },
          {
            key: "repeat",
            value: function (t, e) {
              for (
                var r = t.length % 2 != 0 ? [].concat(hE(t), [0]) : t,
                  n = [],
                  i = 0;
                i < e;
                ++i
              )
                n = [].concat(hE(n), hE(r));
              return n;
            },
          },
          {
            key: "renderDotItem",
            value: function (t, e) {
              var r;
              if (f.default.isValidElement(t)) r = f.default.cloneElement(t, e);
              else if ((0, w.default)(t)) r = t(e);
              else {
                var n = e.key,
                  i = hS(e, hO),
                  o = P(
                    "recharts-line-dot",
                    "boolean" != typeof t ? t.className : "",
                  );
                r = f.default.createElement(
                  eG,
                  hk({ key: n }, i, { className: o }),
                );
              }
              return r;
            },
          },
        ]),
        e && hM(n.prototype, e),
        r && hM(n, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        n
      );
    })(f.PureComponent);
    (hD(hL, "displayName", "Line"),
      hD(hL, "defaultProps", {
        xAxisId: 0,
        yAxisId: 0,
        connectNulls: !1,
        activeDot: !0,
        dot: !0,
        legendType: "line",
        stroke: "#3182bd",
        strokeWidth: 1,
        fill: "#fff",
        points: [],
        isAnimationActive: !tq.isSsr,
        animateNewValues: !0,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
        hide: !1,
        label: !1,
      }),
      hD(hL, "getComposedData", function (t) {
        var e = t.props,
          r = t.xAxis,
          n = t.yAxis,
          i = t.xAxisTicks,
          o = t.yAxisTicks,
          a = t.dataKey,
          l = t.bandSize,
          c = t.displayedData,
          u = t.offset,
          s = e.layout;
        return hA(
          {
            points: c.map(function (t, e) {
              var c = cG(t, a);
              return "horizontal" === s
                ? {
                    x: uc({
                      axis: r,
                      ticks: i,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    y: (0, x.default)(c) ? null : n.scale(c),
                    value: c,
                    payload: t,
                  }
                : {
                    x: (0, x.default)(c) ? null : r.scale(c),
                    y: uc({
                      axis: n,
                      ticks: o,
                      bandSize: l,
                      entry: t,
                      index: e,
                    }),
                    value: c,
                    payload: t,
                  };
            }),
            layout: s,
          },
          u,
        );
      }));
    var hB = dw({
        chartName: "LineChart",
        GraphicalChild: hL,
        axisComponents: [
          { axisType: "xAxis", AxisComp: dZ },
          { axisType: "yAxis", AxisComp: d6 },
        ],
        formatAxisMap: fl,
      }),
      hR = ["points", "className", "baseLinePoints", "connectNulls"];
    function hz() {
      return (hz = Object.assign.bind()).apply(this, arguments);
    }
    function hF(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return hU(t);
        })(t) ||
        (function (t) {
          if (
            ("u" > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ("string" == typeof t) return hU(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ("Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e)
            )
              return Array.from(t);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return hU(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function hU(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var h$ = function (t) {
        return t && t.x === +t.x && t.y === +t.y;
      },
      hW = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = [[]];
        return (
          t.forEach(function (t) {
            h$(t)
              ? e[e.length - 1].push(t)
              : e[e.length - 1].length > 0 && e.push([]);
          }),
          h$(t[0]) && e[e.length - 1].push(t[0]),
          e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
          e
        );
      },
      hV = function (t, e) {
        var r = hW(t);
        e &&
          (r = [
            r.reduce(function (t, e) {
              return [].concat(hF(t), hF(e));
            }, []),
          ]);
        var n = r
          .map(function (t) {
            return t.reduce(function (t, e, r) {
              return ""
                .concat(t)
                .concat(0 === r ? "M" : "L")
                .concat(e.x, ",")
                .concat(e.y);
            }, "");
          })
          .join("");
        return 1 === r.length ? "".concat(n, "Z") : n;
      },
      hq = function (t, e, r) {
        var n = hV(t, r);
        return ""
          .concat("Z" === n.slice(-1) ? n.slice(0, -1) : n, "L")
          .concat(hV(e.reverse(), r).slice(1));
      },
      hH = function (t) {
        var e = t.points,
          r = t.className,
          n = t.baseLinePoints,
          i = t.connectNulls,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              i = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(t);
              for (n = 0; n < o.length; n++)
                ((r = o[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (i[r] = t[r]));
            }
            return i;
          })(t, hR);
        if (!e || !e.length) return null;
        var a = P("recharts-polygon", r);
        if (n && n.length) {
          var l = o.stroke && "none" !== o.stroke,
            c = hq(e, n, i);
          return f.default.createElement(
            "g",
            { className: a },
            f.default.createElement(
              "path",
              hz({}, td(o, !0), {
                fill: "Z" === c.slice(-1) ? o.fill : "none",
                stroke: "none",
                d: c,
              }),
            ),
            l
              ? f.default.createElement(
                  "path",
                  hz({}, td(o, !0), { fill: "none", d: hV(e, i) }),
                )
              : null,
            l
              ? f.default.createElement(
                  "path",
                  hz({}, td(o, !0), { fill: "none", d: hV(n, i) }),
                )
              : null,
          );
        }
        var u = hV(e, i);
        return f.default.createElement(
          "path",
          hz({}, td(o, !0), {
            fill: "Z" === u.slice(-1) ? o.fill : "none",
            className: a,
            d: u,
          }),
        );
      };
    function hX(t) {
      return (hX =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function hK() {
      return (hK = Object.assign.bind()).apply(this, arguments);
    }
    function hG(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function hY(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? hG(Object(r), !0).forEach(function (e) {
              h1(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : hG(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function hZ(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, h2(n.key), n));
      }
    }
    function hJ() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (hJ = function () {
        return !!t;
      })();
    }
    function hQ(t) {
      return (hQ = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function h0(t, e) {
      return (h0 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function h1(t, e, r) {
      return (
        (e = h2(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function h2(t) {
      var e = (function (t, e) {
        if ("object" != hX(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != hX(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == hX(e) ? e : e + "";
    }
    var h5 = Math.PI / 180,
      h3 = (function (t) {
        var e, r;
        function n() {
          var t, e;
          if (!(this instanceof n))
            throw TypeError("Cannot call a class as a function");
          return (
            (t = n),
            (e = arguments),
            (t = hQ(t)),
            (function (t, e) {
              if (e && ("object" === hX(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              hJ()
                ? Reflect.construct(t, e || [], hQ(this).constructor)
                : t.apply(this, e),
            )
          );
        }
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        return (
          (n.prototype = Object.create(t && t.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t && h0(n, t),
          (e = [
            {
              key: "getTickLineCoord",
              value: function (t) {
                var e = this.props,
                  r = e.cx,
                  n = e.cy,
                  i = e.radius,
                  o = e.orientation,
                  a = e.tickSize,
                  l = uV(r, n, i, t.coordinate),
                  c = uV(
                    r,
                    n,
                    i + ("inner" === o ? -1 : 1) * (a || 8),
                    t.coordinate,
                  );
                return { x1: l.x, y1: l.y, x2: c.x, y2: c.y };
              },
            },
            {
              key: "getTickTextAnchor",
              value: function (t) {
                var e = this.props.orientation,
                  r = Math.cos(-t.coordinate * h5);
                return r > 1e-5
                  ? "outer" === e
                    ? "start"
                    : "end"
                  : r < -1e-5
                    ? "outer" === e
                      ? "end"
                      : "start"
                    : "middle";
              },
            },
            {
              key: "renderAxisLine",
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  n = t.radius,
                  i = t.axisLine,
                  o = t.axisLineType,
                  a = hY(
                    hY({}, td(this.props, !1)),
                    {},
                    { fill: "none" },
                    td(i, !1),
                  );
                if ("circle" === o)
                  return f.default.createElement(
                    eG,
                    hK({ className: "recharts-polar-angle-axis-line" }, a, {
                      cx: e,
                      cy: r,
                      r: n,
                    }),
                  );
                var l = this.props.ticks.map(function (t) {
                  return uV(e, r, n, t.coordinate);
                });
                return f.default.createElement(
                  hH,
                  hK({ className: "recharts-polar-angle-axis-line" }, a, {
                    points: l,
                  }),
                );
              },
            },
            {
              key: "renderTicks",
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.ticks,
                  i = e.tick,
                  o = e.tickLine,
                  a = e.tickFormatter,
                  l = e.stroke,
                  c = td(this.props, !1),
                  u = td(i, !1),
                  s = hY(hY({}, c), {}, { fill: "none" }, td(o, !1)),
                  p = r.map(function (e, r) {
                    var p = t.getTickLineCoord(e),
                      d = hY(
                        hY(
                          hY({ textAnchor: t.getTickTextAnchor(e) }, c),
                          {},
                          { stroke: "none", fill: l },
                          u,
                        ),
                        {},
                        { index: r, payload: e, x: p.x2, y: p.y2 },
                      );
                    return f.default.createElement(
                      tj,
                      hK(
                        {
                          className: P("recharts-polar-angle-axis-tick", uY(i)),
                          key: "tick-".concat(e.coordinate),
                        },
                        J(t.props, e, r),
                      ),
                      o &&
                        f.default.createElement(
                          "line",
                          hK(
                            {
                              className: "recharts-polar-angle-axis-tick-line",
                            },
                            s,
                            p,
                          ),
                        ),
                      i && n.renderTickItem(i, d, a ? a(e.value, r) : e.value),
                    );
                  });
                return f.default.createElement(
                  tj,
                  { className: "recharts-polar-angle-axis-ticks" },
                  p,
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  r = t.radius,
                  n = t.axisLine;
                return !(r <= 0) && e && e.length
                  ? f.default.createElement(
                      tj,
                      {
                        className: P(
                          "recharts-polar-angle-axis",
                          this.props.className,
                        ),
                      },
                      n && this.renderAxisLine(),
                      this.renderTicks(),
                    )
                  : null;
              },
            },
          ]),
          (r = [
            {
              key: "renderTickItem",
              value: function (t, e, r) {
                return f.default.isValidElement(t)
                  ? f.default.cloneElement(t, e)
                  : (0, w.default)(t)
                    ? t(e)
                    : f.default.createElement(
                        ih,
                        hK({}, e, {
                          className: "recharts-polar-angle-axis-tick-value",
                        }),
                        r,
                      );
              },
            },
          ]),
          e && hZ(n.prototype, e),
          r && hZ(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      })(f.PureComponent);
    (h1(h3, "displayName", "PolarAngleAxis"),
      h1(h3, "axisType", "angleAxis"),
      h1(h3, "defaultProps", {
        type: "category",
        angleAxisId: 0,
        scale: "auto",
        cx: 0,
        cy: 0,
        orientation: "outer",
        axisLine: !0,
        tickLine: !0,
        tickSize: 8,
        tick: !0,
        hide: !1,
        allowDuplicatedCategory: !0,
      }));
    var h4 = t.i(19530),
      h6 = t.i(49673),
      h8 = ["cx", "cy", "angle", "ticks", "axisLine"],
      h7 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
    function h9(t) {
      return (h9 =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function yt() {
      return (yt = Object.assign.bind()).apply(this, arguments);
    }
    function ye(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function yr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ye(Object(r), !0).forEach(function (e) {
              yc(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ye(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function yn(t, e) {
      if (null == t) return {};
      var r,
        n,
        i = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (n = 0; n < o.length; n++)
          ((r = o[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (i[r] = t[r]));
      }
      return i;
    }
    function yi(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, yu(n.key), n));
      }
    }
    function yo() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (yo = function () {
        return !!t;
      })();
    }
    function ya(t) {
      return (ya = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function yl(t, e) {
      return (yl = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function yc(t, e, r) {
      return (
        (e = yu(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function yu(t) {
      var e = (function (t, e) {
        if ("object" != h9(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != h9(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == h9(e) ? e : e + "";
    }
    var ys = (function (t) {
      var e, r;
      function n() {
        var t, e;
        if (!(this instanceof n))
          throw TypeError("Cannot call a class as a function");
        return (
          (t = n),
          (e = arguments),
          (t = ya(t)),
          (function (t, e) {
            if (e && ("object" === h9(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                "Derived constructors may only return object or undefined",
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return r;
          })(
            this,
            yo()
              ? Reflect.construct(t, e || [], ya(this).constructor)
              : t.apply(this, e),
          )
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t && yl(n, t),
        (e = [
          {
            key: "getTickValueCoord",
            value: function (t) {
              var e = t.coordinate,
                r = this.props,
                n = r.angle;
              return uV(r.cx, r.cy, e, n);
            },
          },
          {
            key: "getTickTextAnchor",
            value: function () {
              var t;
              switch (this.props.orientation) {
                case "left":
                  t = "end";
                  break;
                case "right":
                  t = "start";
                  break;
                default:
                  t = "middle";
              }
              return t;
            },
          },
          {
            key: "getViewBox",
            value: function () {
              var t = this.props,
                e = t.cx,
                r = t.cy,
                n = t.angle,
                i = t.ticks,
                o = (0, h4.default)(i, function (t) {
                  return t.coordinate || 0;
                });
              return {
                cx: e,
                cy: r,
                startAngle: n,
                endAngle: n,
                innerRadius:
                  (0, h6.default)(i, function (t) {
                    return t.coordinate || 0;
                  }).coordinate || 0,
                outerRadius: o.coordinate || 0,
              };
            },
          },
          {
            key: "renderAxisLine",
            value: function () {
              var t = this.props,
                e = t.cx,
                r = t.cy,
                n = t.angle,
                i = t.ticks,
                o = t.axisLine,
                a = yn(t, h8),
                l = i.reduce(
                  function (t, e) {
                    return [
                      Math.min(t[0], e.coordinate),
                      Math.max(t[1], e.coordinate),
                    ];
                  },
                  [1 / 0, -1 / 0],
                ),
                c = uV(e, r, l[0], n),
                u = uV(e, r, l[1], n),
                s = yr(
                  yr(yr({}, td(a, !1)), {}, { fill: "none" }, td(o, !1)),
                  {},
                  { x1: c.x, y1: c.y, x2: u.x, y2: u.y },
                );
              return f.default.createElement(
                "line",
                yt({ className: "recharts-polar-radius-axis-line" }, s),
              );
            },
          },
          {
            key: "renderTicks",
            value: function () {
              var t = this,
                e = this.props,
                r = e.ticks,
                i = e.tick,
                o = e.angle,
                a = e.tickFormatter,
                l = e.stroke,
                c = yn(e, h7),
                u = this.getTickTextAnchor(),
                s = td(c, !1),
                p = td(i, !1),
                d = r.map(function (e, r) {
                  var c = t.getTickValueCoord(e),
                    d = yr(
                      yr(
                        yr(
                          yr(
                            {
                              textAnchor: u,
                              transform: "rotate("
                                .concat(90 - o, ", ")
                                .concat(c.x, ", ")
                                .concat(c.y, ")"),
                            },
                            s,
                          ),
                          {},
                          { stroke: "none", fill: l },
                          p,
                        ),
                        {},
                        { index: r },
                        c,
                      ),
                      {},
                      { payload: e },
                    );
                  return f.default.createElement(
                    tj,
                    yt(
                      {
                        className: P("recharts-polar-radius-axis-tick", uY(i)),
                        key: "tick-".concat(e.coordinate),
                      },
                      J(t.props, e, r),
                    ),
                    n.renderTickItem(i, d, a ? a(e.value, r) : e.value),
                  );
                });
              return f.default.createElement(
                tj,
                { className: "recharts-polar-radius-axis-ticks" },
                d,
              );
            },
          },
          {
            key: "render",
            value: function () {
              var t = this.props,
                e = t.ticks,
                r = t.axisLine,
                n = t.tick;
              return e && e.length
                ? f.default.createElement(
                    tj,
                    {
                      className: P(
                        "recharts-polar-radius-axis",
                        this.props.className,
                      ),
                    },
                    r && this.renderAxisLine(),
                    n && this.renderTicks(),
                    u8.renderCallByParent(this.props, this.getViewBox()),
                  )
                : null;
            },
          },
        ]),
        (r = [
          {
            key: "renderTickItem",
            value: function (t, e, r) {
              return f.default.isValidElement(t)
                ? f.default.cloneElement(t, e)
                : (0, w.default)(t)
                  ? t(e)
                  : f.default.createElement(
                      ih,
                      yt({}, e, {
                        className: "recharts-polar-radius-axis-tick-value",
                      }),
                      r,
                    );
            },
          },
        ]),
        e && yi(n.prototype, e),
        r && yi(n, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        n
      );
    })(f.PureComponent);
    function yf(t) {
      return (yf =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function yp() {
      return (yp = Object.assign.bind()).apply(this, arguments);
    }
    function yd(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    function yh(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? yd(Object(r), !0).forEach(function (e) {
              yg(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : yd(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                );
              });
      }
      return t;
    }
    function yy(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        ((n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, yx(n.key), n));
      }
    }
    function yv() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (t) {}
      return (yv = function () {
        return !!t;
      })();
    }
    function ym(t) {
      return (ym = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function yb(t, e) {
      return (yb = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
    }
    function yg(t, e, r) {
      return (
        (e = yx(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function yx(t) {
      var e = (function (t, e) {
        if ("object" != yf(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || "default");
          if ("object" != yf(n)) return n;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      })(t, "string");
      return "symbol" == yf(e) ? e : e + "";
    }
    (yc(ys, "displayName", "PolarRadiusAxis"),
      yc(ys, "axisType", "radiusAxis"),
      yc(ys, "defaultProps", {
        type: "number",
        radiusAxisId: 0,
        cx: 0,
        cy: 0,
        angle: 0,
        orientation: "right",
        stroke: "#ccc",
        axisLine: !0,
        tick: !0,
        tickCount: 5,
        allowDataOverflow: !1,
        scale: "auto",
        allowDuplicatedCategory: !0,
      }));
    var yw = (function (t) {
      var e, r;
      function n(t) {
        var e, r, i;
        if (!(this instanceof n))
          throw TypeError("Cannot call a class as a function");
        return (
          (r = n),
          (i = [t]),
          (r = ym(r)),
          yg(
            (e = (function (t, e) {
              if (e && ("object" === yf(e) || "function" == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  "Derived constructors may only return object or undefined",
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return r;
            })(
              this,
              yv()
                ? Reflect.construct(r, i || [], ym(this).constructor)
                : r.apply(this, i),
            )),
            "pieRef",
            null,
          ),
          yg(e, "sectorRefs", []),
          yg(e, "id", R("recharts-pie-")),
          yg(e, "handleAnimationEnd", function () {
            var t = e.props.onAnimationEnd;
            (e.setState({ isAnimationFinished: !0 }), (0, w.default)(t) && t());
          }),
          yg(e, "handleAnimationStart", function () {
            var t = e.props.onAnimationStart;
            (e.setState({ isAnimationFinished: !1 }), (0, w.default)(t) && t());
          }),
          (e.state = {
            isAnimationFinished: !t.isAnimationActive,
            prevIsAnimationActive: t.isAnimationActive,
            prevAnimationId: t.animationId,
            sectorToFocus: 0,
          }),
          e
        );
      }
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        t && yb(n, t),
        (e = [
          {
            key: "isActiveIndex",
            value: function (t) {
              var e = this.props.activeIndex;
              return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
            },
          },
          {
            key: "hasActiveIndex",
            value: function () {
              var t = this.props.activeIndex;
              return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
            },
          },
          {
            key: "renderLabels",
            value: function (t) {
              if (
                this.props.isAnimationActive &&
                !this.state.isAnimationFinished
              )
                return null;
              var e = this.props,
                r = e.label,
                i = e.labelLine,
                o = e.dataKey,
                a = e.valueKey,
                l = td(this.props, !1),
                c = td(r, !1),
                u = td(i, !1),
                s = (r && r.offsetRadius) || 20,
                p = t.map(function (t, e) {
                  var p = (t.startAngle + t.endAngle) / 2,
                    d = uV(t.cx, t.cy, t.outerRadius + s, p),
                    h = yh(
                      yh(yh(yh({}, l), t), {}, { stroke: "none" }, c),
                      {},
                      { index: e, textAnchor: n.getTextAnchor(d.x, t.cx) },
                      d,
                    ),
                    y = yh(
                      yh(
                        yh(yh({}, l), t),
                        {},
                        { fill: "none", stroke: t.fill },
                        u,
                      ),
                      {},
                      {
                        index: e,
                        points: [uV(t.cx, t.cy, t.outerRadius, p), d],
                      },
                    ),
                    v = o;
                  return (
                    (0, x.default)(o) && (0, x.default)(a)
                      ? (v = "value")
                      : (0, x.default)(o) && (v = a),
                    f.default.createElement(
                      tj,
                      {
                        key: "label-"
                          .concat(t.startAngle, "-")
                          .concat(t.endAngle, "-")
                          .concat(t.midAngle, "-")
                          .concat(e),
                      },
                      i && n.renderLabelLineItem(i, y, "line"),
                      n.renderLabelItem(r, h, cG(t, v)),
                    )
                  );
                });
              return f.default.createElement(
                tj,
                { className: "recharts-pie-labels" },
                p,
              );
            },
          },
          {
            key: "renderSectorsStatically",
            value: function (t) {
              var e = this,
                r = this.props,
                n = r.activeShape,
                i = r.blendStroke,
                o = r.inactiveShape;
              return t.map(function (r, a) {
                if (
                  (null == r ? void 0 : r.startAngle) === 0 &&
                  (null == r ? void 0 : r.endAngle) === 0 &&
                  1 !== t.length
                )
                  return null;
                var l = e.isActiveIndex(a),
                  c = o && e.hasActiveIndex() ? o : null,
                  u = yh(
                    yh({}, r),
                    {},
                    { stroke: i ? r.fill : r.stroke, tabIndex: -1 },
                  );
                return f.default.createElement(
                  tj,
                  yp(
                    {
                      ref: function (t) {
                        t && !e.sectorRefs.includes(t) && e.sectorRefs.push(t);
                      },
                      tabIndex: -1,
                      className: "recharts-pie-sector",
                    },
                    J(e.props, r, a),
                    {
                      key: "sector-"
                        .concat(null == r ? void 0 : r.startAngle, "-")
                        .concat(null == r ? void 0 : r.endAngle, "-")
                        .concat(r.midAngle, "-")
                        .concat(a),
                    },
                  ),
                  f.default.createElement(
                    sR,
                    yp(
                      { option: l ? n : c, isActive: l, shapeType: "sector" },
                      u,
                    ),
                  ),
                );
              });
            },
          },
          {
            key: "renderSectorsWithAnimation",
            value: function () {
              var t = this,
                e = this.props,
                r = e.sectors,
                n = e.isAnimationActive,
                i = e.animationBegin,
                o = e.animationDuration,
                a = e.animationEasing,
                l = e.animationId,
                c = this.state,
                u = c.prevSectors,
                s = c.prevIsAnimationActive;
              return f.default.createElement(
                r3,
                {
                  begin: i,
                  duration: o,
                  isActive: n,
                  easing: a,
                  from: { t: 0 },
                  to: { t: 1 },
                  key: "pie-".concat(l, "-").concat(s),
                  onAnimationStart: this.handleAnimationStart,
                  onAnimationEnd: this.handleAnimationEnd,
                },
                function (e) {
                  var n = e.t,
                    i = [],
                    o = (r && r[0]).startAngle;
                  return (
                    r.forEach(function (t, e) {
                      var r = u && u[e],
                        a = e > 0 ? (0, j.default)(t, "paddingAngle", 0) : 0;
                      if (r) {
                        var l = $(
                            r.endAngle - r.startAngle,
                            t.endAngle - t.startAngle,
                          ),
                          c = yh(
                            yh({}, t),
                            {},
                            { startAngle: o + a, endAngle: o + l(n) + a },
                          );
                        (i.push(c), (o = c.endAngle));
                      } else {
                        var s = $(0, t.endAngle - t.startAngle)(n),
                          f = yh(
                            yh({}, t),
                            {},
                            { startAngle: o + a, endAngle: o + s + a },
                          );
                        (i.push(f), (o = f.endAngle));
                      }
                    }),
                    f.default.createElement(
                      tj,
                      null,
                      t.renderSectorsStatically(i),
                    )
                  );
                },
              );
            },
          },
          {
            key: "attachKeyboardHandlers",
            value: function (t) {
              var e = this;
              t.onkeydown = function (t) {
                if (!t.altKey)
                  switch (t.key) {
                    case "ArrowLeft":
                      var r = ++e.state.sectorToFocus % e.sectorRefs.length;
                      (e.sectorRefs[r].focus(),
                        e.setState({ sectorToFocus: r }));
                      break;
                    case "ArrowRight":
                      var n =
                        --e.state.sectorToFocus < 0
                          ? e.sectorRefs.length - 1
                          : e.state.sectorToFocus % e.sectorRefs.length;
                      (e.sectorRefs[n].focus(),
                        e.setState({ sectorToFocus: n }));
                      break;
                    case "Escape":
                      (e.sectorRefs[e.state.sectorToFocus].blur(),
                        e.setState({ sectorToFocus: 0 }));
                  }
              };
            },
          },
          {
            key: "renderSectors",
            value: function () {
              var t = this.props,
                e = t.sectors,
                r = t.isAnimationActive,
                n = this.state.prevSectors;
              return r && e && e.length && (!n || !(0, co.default)(n, e))
                ? this.renderSectorsWithAnimation()
                : this.renderSectorsStatically(e);
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              this.pieRef && this.attachKeyboardHandlers(this.pieRef);
            },
          },
          {
            key: "render",
            value: function () {
              var t = this,
                e = this.props,
                r = e.hide,
                n = e.sectors,
                i = e.className,
                o = e.label,
                a = e.cx,
                l = e.cy,
                c = e.innerRadius,
                u = e.outerRadius,
                s = e.isAnimationActive,
                p = this.state.isAnimationFinished;
              if (r || !n || !n.length || !I(a) || !I(l) || !I(c) || !I(u))
                return null;
              var d = P("recharts-pie", i);
              return f.default.createElement(
                tj,
                {
                  tabIndex: this.props.rootTabIndex,
                  className: d,
                  ref: function (e) {
                    t.pieRef = e;
                  },
                },
                this.renderSectors(),
                o && this.renderLabels(n),
                u8.renderCallByParent(this.props, null, !1),
                (!s || p) && sd.renderCallByParent(this.props, n, !1),
              );
            },
          },
        ]),
        (r = [
          {
            key: "getDerivedStateFromProps",
            value: function (t, e) {
              return e.prevIsAnimationActive !== t.isAnimationActive
                ? {
                    prevIsAnimationActive: t.isAnimationActive,
                    prevAnimationId: t.animationId,
                    curSectors: t.sectors,
                    prevSectors: [],
                    isAnimationFinished: !0,
                  }
                : t.isAnimationActive && t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: e.curSectors,
                      isAnimationFinished: !0,
                    }
                  : t.sectors !== e.curSectors
                    ? { curSectors: t.sectors, isAnimationFinished: !0 }
                    : null;
            },
          },
          {
            key: "getTextAnchor",
            value: function (t, e) {
              return t > e ? "start" : t < e ? "end" : "middle";
            },
          },
          {
            key: "renderLabelLineItem",
            value: function (t, e, r) {
              if (f.default.isValidElement(t))
                return f.default.cloneElement(t, e);
              if ((0, w.default)(t)) return t(e);
              var n = P(
                "recharts-pie-label-line",
                "boolean" != typeof t ? t.className : "",
              );
              return f.default.createElement(
                pU,
                yp({}, e, { key: r, type: "linear", className: n }),
              );
            },
          },
          {
            key: "renderLabelItem",
            value: function (t, e, r) {
              if (f.default.isValidElement(t))
                return f.default.cloneElement(t, e);
              var n = r;
              if (
                (0, w.default)(t) &&
                ((n = t(e)), f.default.isValidElement(n))
              )
                return n;
              var i = P(
                "recharts-pie-label-text",
                "boolean" == typeof t || (0, w.default)(t) ? "" : t.className,
              );
              return f.default.createElement(
                ih,
                yp({}, e, { alignmentBaseline: "middle", className: i }),
                n,
              );
            },
          },
        ]),
        e && yy(n.prototype, e),
        r && yy(n, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        n
      );
    })(f.PureComponent);
    (yg(yw, "displayName", "Pie"),
      yg(yw, "defaultProps", {
        stroke: "#fff",
        fill: "#808080",
        legendType: "rect",
        cx: "50%",
        cy: "50%",
        startAngle: 0,
        endAngle: 360,
        innerRadius: 0,
        outerRadius: "80%",
        paddingAngle: 0,
        labelLine: !0,
        hide: !1,
        minAngle: 0,
        isAnimationActive: !tq.isSsr,
        animationBegin: 400,
        animationDuration: 1500,
        animationEasing: "ease",
        nameKey: "name",
        blendStroke: !1,
        rootTabIndex: 0,
      }),
      yg(yw, "parseDeltaAngle", function (t, e) {
        return C(e - t) * Math.min(Math.abs(e - t), 360);
      }),
      yg(yw, "getRealPieData", function (t) {
        var e = t.data,
          r = t.children,
          n = td(t, !1),
          i = tc(r, sr);
        return e && e.length
          ? e.map(function (t, e) {
              return yh(yh(yh({ payload: t }, n), t), i && i[e] && i[e].props);
            })
          : i && i.length
            ? i.map(function (t) {
                return yh(yh({}, n), t.props);
              })
            : [];
      }),
      yg(yw, "parseCoordinateOfPie", function (t, e) {
        var r = e.top,
          n = e.left,
          i = e.width,
          o = e.height,
          a = uq(i, o);
        return {
          cx: n + z(t.cx, i, i / 2),
          cy: r + z(t.cy, o, o / 2),
          innerRadius: z(t.innerRadius, a, 0),
          outerRadius: z(t.outerRadius, a, 0.8 * a),
          maxRadius: t.maxRadius || Math.sqrt(i * i + o * o) / 2,
        };
      }),
      yg(yw, "getComposedData", function (t) {
        var e,
          r,
          n = t.item,
          i = t.offset,
          o =
            void 0 !== n.type.defaultProps
              ? yh(yh({}, n.type.defaultProps), n.props)
              : n.props,
          a = yw.getRealPieData(o);
        if (!a || !a.length) return null;
        var l = o.cornerRadius,
          c = o.startAngle,
          u = o.endAngle,
          s = o.paddingAngle,
          f = o.dataKey,
          p = o.nameKey,
          d = o.valueKey,
          h = o.tooltipType,
          y = Math.abs(o.minAngle),
          v = yw.parseCoordinateOfPie(o, i),
          m = yw.parseDeltaAngle(c, u),
          b = Math.abs(m),
          g = f;
        (0, x.default)(f) && (0, x.default)(d)
          ? (t3(
              !1,
              'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
            ),
            (g = "value"))
          : (0, x.default)(f) &&
            (t3(
              !1,
              'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0',
            ),
            (g = d));
        var w = a.filter(function (t) {
            return 0 !== cG(t, g, 0);
          }).length,
          O = b - w * y - (b >= 360 ? w : w - 1) * s,
          j = a.reduce(function (t, e) {
            var r = cG(e, g, 0);
            return t + (I(r) ? r : 0);
          }, 0);
        return (
          j > 0 &&
            (e = a.map(function (t, e) {
              var n,
                i = cG(t, g, 0),
                o = cG(t, p, e),
                a = (I(i) ? i : 0) / j,
                u =
                  (n = e ? r.endAngle + C(m) * s * (0 !== i) : c) +
                  C(m) * ((0 !== i ? y : 0) + a * O),
                f = (n + u) / 2,
                d = (v.innerRadius + v.outerRadius) / 2,
                b = [{ name: o, value: i, payload: t, dataKey: g, type: h }],
                x = uV(v.cx, v.cy, d, f);
              return (r = yh(
                yh(
                  yh(
                    {
                      percent: a,
                      cornerRadius: l,
                      name: o,
                      tooltipPayload: b,
                      midAngle: f,
                      middleRadius: d,
                      tooltipPosition: x,
                    },
                    t,
                  ),
                  v,
                ),
                {},
                {
                  value: cG(t, g),
                  startAngle: n,
                  endAngle: u,
                  payload: t,
                  paddingAngle: C(m) * s,
                },
              ));
            })),
          yh(yh({}, v), {}, { sectors: e, data: a })
        );
      }));
    var yO = dw({
      chartName: "PieChart",
      GraphicalChild: yw,
      validateTooltipEventTypes: ["item"],
      defaultTooltipEventType: "item",
      legendContent: "children",
      axisComponents: [
        { axisType: "angleAxis", AxisComp: h3 },
        { axisType: "radiusAxis", AxisComp: ys },
      ],
      formatAxisMap: function (t, e, r, n, i) {
        var o = t.width,
          a = t.height,
          l = t.startAngle,
          c = t.endAngle,
          u = z(t.cx, o, o / 2),
          s = z(t.cy, a, a / 2),
          f = uq(o, a, r),
          p = z(t.innerRadius, f, 0),
          d = z(t.outerRadius, f, 0.8 * f);
        return Object.keys(e).reduce(function (t, r) {
          var o,
            a = e[r],
            f = a.domain,
            h = a.reversed;
          if ((0, x.default)(a.range))
            ("angleAxis" === n
              ? (o = [l, c])
              : "radiusAxis" === n && (o = [p, d]),
              h && (o = [o[1], o[0]]));
          else {
            var y,
              v =
                (function (t) {
                  if (Array.isArray(t)) return t;
                })((y = o = a.range)) ||
                (function (t) {
                  var e =
                    null == t
                      ? null
                      : ("u" > typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != e) {
                    var r,
                      n,
                      i,
                      o,
                      a = [],
                      l = !0,
                      c = !1;
                    try {
                      ((i = (e = e.call(t)).next), !1);
                      for (
                        ;
                        !(l = (r = i.call(e)).done) &&
                        (a.push(r.value), 2 !== a.length);
                        l = !0
                      );
                    } catch (t) {
                      ((c = !0), (n = t));
                    } finally {
                      try {
                        if (
                          !l &&
                          null != e.return &&
                          ((o = e.return()), Object(o) !== o)
                        )
                          return;
                      } finally {
                        if (c) throw n;
                      }
                    }
                    return a;
                  }
                })(y) ||
                (function (t) {
                  if (t) {
                    if ("string" == typeof t) return u$(t, 2);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    if (
                      ("Object" === e &&
                        t.constructor &&
                        (e = t.constructor.name),
                      "Map" === e || "Set" === e)
                    )
                      return Array.from(t);
                    if (
                      "Arguments" === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    )
                      return u$(t, 2);
                  }
                })(y) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })();
            ((l = v[0]), (c = v[1]));
          }
          var m = ut(a, i),
            b = m.realScaleType,
            g = m.scale;
          (g.domain(f).range(o), ue(g));
          var w = ul(g, uF(uF({}, a), {}, { realScaleType: b })),
            O = uF(
              uF(uF({}, a), w),
              {},
              {
                range: o,
                radius: d,
                realScaleType: b,
                scale: g,
                cx: u,
                cy: s,
                innerRadius: p,
                outerRadius: d,
                startAngle: l,
                endAngle: c,
              },
            );
          return uF(uF({}, t), {}, uU({}, r, O));
        }, {});
      },
      defaultProps: {
        layout: "centric",
        startAngle: 0,
        endAngle: 360,
        cx: "50%",
        cy: "50%",
        innerRadius: 0,
        outerRadius: "80%",
      },
    });
    let yj = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#6366F1"];
    function yS({ data: t }) {
      let e = t[0]?.count || 1;
      return (0, s.jsxs)("div", {
        className: "rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
        children: [
          (0, s.jsx)("h3", {
            className: "text-lg font-semibold text-slate-900",
            children: "Conversion Funnel",
          }),
          (0, s.jsx)("p", {
            className: "mt-1 text-sm text-slate-500",
            children: "User journey through conversion steps",
          }),
          (0, s.jsx)("div", {
            className: "mt-6 space-y-4",
            children: t.map((r, n) => {
              let i = (r.count / e) * 100,
                o = n === t.length - 1;
              return (0, s.jsxs)(
                "div",
                {
                  className: "relative",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, s.jsx)("span", {
                          className: "text-sm font-medium text-slate-700",
                          children: r.step,
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, s.jsx)("span", {
                              className: "text-sm font-semibold text-slate-900",
                              children: r.count.toLocaleString(),
                            }),
                            (0, s.jsxs)("span", {
                              className:
                                "rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700",
                              children: [r.percentage, "%"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "mt-2 h-8 w-full overflow-hidden rounded-lg bg-slate-100",
                      children: (0, s.jsx)("div", {
                        className: `h-full rounded-lg transition-all duration-500 ${o ? "bg-gradient-to-r from-green-500 to-green-400" : "bg-gradient-to-r from-blue-500 to-blue-400"}`,
                        style: { width: `${Math.max(i, 5)}%` },
                      }),
                    }),
                  ],
                },
                r.step,
              );
            }),
          }),
        ],
      });
    }
    function yk({ data: t }) {
      return (0, s.jsxs)("div", {
        className: "rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
        children: [
          (0, s.jsx)("h3", {
            className: "text-lg font-semibold text-slate-900",
            children: "Scroll Depth",
          }),
          (0, s.jsx)("p", {
            className: "mt-1 text-sm text-slate-500",
            children: "Distribution of user scroll behavior",
          }),
          (0, s.jsx)("div", {
            className: "mt-6 h-64",
            children: (0, s.jsx)(hx, {
              width: "100%",
              height: "100%",
              children: (0, s.jsxs)(d8, {
                data: t,
                layout: "vertical",
                children: [
                  (0, s.jsx)(hy, {
                    strokeDasharray: "3 3",
                    horizontal: !0,
                    vertical: !1,
                    stroke: "#E2E8F0",
                  }),
                  (0, s.jsx)(dZ, {
                    type: "number",
                    tick: { fontSize: 12, fill: "#64748B" },
                    tickFormatter: (t) => `${t}%`,
                    axisLine: { stroke: "#E2E8F0" },
                  }),
                  (0, s.jsx)(d6, {
                    dataKey: "range",
                    type: "category",
                    tick: { fontSize: 12, fill: "#64748B" },
                    axisLine: { stroke: "#E2E8F0" },
                    width: 70,
                  }),
                  (0, s.jsx)(t5, {
                    formatter: (t) => [`${t}%`, "Percentage"],
                    contentStyle: {
                      backgroundColor: "#fff",
                      border: "1px solid #E2E8F0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    },
                  }),
                  (0, s.jsx)(ft, {
                    dataKey: "percentage",
                    fill: "#8B5CF6",
                    radius: [0, 4, 4, 0],
                    barSize: 32,
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    function yP({ data: t }) {
      let e = (t) =>
        new Date(t).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      return (0, s.jsxs)("div", {
        className: "rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
        children: [
          (0, s.jsx)("h3", {
            className: "text-lg font-semibold text-slate-900",
            children: "Session Duration",
          }),
          (0, s.jsx)("p", {
            className: "mt-1 text-sm text-slate-500",
            children: "Average session duration over time",
          }),
          (0, s.jsx)("div", {
            className: "mt-6 h-64",
            children: (0, s.jsx)(hx, {
              width: "100%",
              height: "100%",
              children: (0, s.jsxs)(hB, {
                data: t,
                children: [
                  (0, s.jsx)(hy, { strokeDasharray: "3 3", stroke: "#E2E8F0" }),
                  (0, s.jsx)(dZ, {
                    dataKey: "date",
                    tick: { fontSize: 12, fill: "#64748B" },
                    tickFormatter: e,
                    axisLine: { stroke: "#E2E8F0" },
                    interval: "preserveStartEnd",
                  }),
                  (0, s.jsx)(d6, {
                    tick: { fontSize: 12, fill: "#64748B" },
                    tickFormatter: (t) => `${t}s`,
                    axisLine: { stroke: "#E2E8F0" },
                  }),
                  (0, s.jsx)(t5, {
                    formatter: (t) => [`${t}s`, "Avg Duration"],
                    labelFormatter: e,
                    contentStyle: {
                      backgroundColor: "#fff",
                      border: "1px solid #E2E8F0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    },
                  }),
                  (0, s.jsx)(hL, {
                    type: "monotone",
                    dataKey: "avgDuration",
                    stroke: "#3B82F6",
                    strokeWidth: 2,
                    dot: { fill: "#3B82F6", strokeWidth: 2, r: 4 },
                    activeDot: { r: 6, fill: "#3B82F6" },
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    function yA({ data: t }) {
      let e = t.reduce((t, e) => t + e.count, 0);
      return (0, s.jsxs)("div", {
        className: "rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
        children: [
          (0, s.jsx)("h3", {
            className: "text-lg font-semibold text-slate-900",
            children: "Traffic Sources",
          }),
          (0, s.jsx)("p", {
            className: "mt-1 text-sm text-slate-500",
            children: "Distribution by acquisition channel",
          }),
          (0, s.jsx)("div", {
            className: "mt-6 h-64",
            children: (0, s.jsx)(hx, {
              width: "100%",
              height: "100%",
              children: (0, s.jsxs)(yO, {
                children: [
                  (0, s.jsx)(yw, {
                    data: t,
                    cx: "50%",
                    cy: "50%",
                    innerRadius: 60,
                    outerRadius: 90,
                    paddingAngle: 2,
                    dataKey: "count",
                    nameKey: "source",
                    children: t.map((t, e) =>
                      (0, s.jsx)(sr, { fill: yj[e % yj.length] }, `cell-${e}`),
                    ),
                  }),
                  (0, s.jsx)(t5, {
                    formatter: (t, r) => [
                      `${((t / e) * 100).toFixed(1)}%`,
                      r.charAt(0).toUpperCase() + r.slice(1),
                    ],
                    contentStyle: {
                      backgroundColor: "#fff",
                      border: "1px solid #E2E8F0",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    },
                  }),
                  (0, s.jsx)(eX, {
                    verticalAlign: "bottom",
                    height: 36,
                    formatter: (t) =>
                      (0, s.jsx)("span", {
                        className: "text-sm text-slate-600",
                        children: t.charAt(0).toUpperCase() + t.slice(1),
                      }),
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    function yE({ scrollData: t, sessionData: e }) {
      return (0, s.jsxs)("div", {
        className: "grid gap-6 lg:grid-cols-2",
        children: [(0, s.jsx)(yk, { data: t }), (0, s.jsx)(yP, { data: e })],
      });
    }
    let y_ = {
        page_view: "Page View",
        presale_click_cta: "Presale Click",
        online_shop_click: "Online Shop Click",
        documents_click: "Documents Click",
        newsletter_signup: "Newsletter Signup",
        social_click: "Social Click",
        trustpilot_click: "Trustpilot Click",
        scroll_depth: "Scroll Depth",
        session_end: "Session End",
      },
      yM = {
        page_view: (0, s.jsxs)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: [
            (0, s.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
            }),
            (0, s.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
            }),
          ],
        }),
        presale_click_cta: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 15l-2 5L9 9l11 4-5 2z",
          }),
        }),
        online_shop_click: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
          }),
        }),
        documents_click: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          }),
        }),
        newsletter_signup: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
          }),
        }),
        social_click: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
          }),
        }),
        trustpilot_click: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
          }),
        }),
        scroll_depth: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 14l-7 7m0 0l-7-7m7 7V3",
          }),
        }),
        session_end: (0, s.jsx)("svg", {
          className: "h-4 w-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: 2,
          children: (0, s.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
          }),
        }),
      };
    function yT({ data: t }) {
      return 0 === t.length
        ? (0, s.jsxs)("div", {
            className:
              "rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
            children: [
              (0, s.jsx)("h3", {
                className: "text-lg font-semibold text-slate-900",
                children: "Events Overview",
              }),
              (0, s.jsx)("p", {
                className: "mt-1 text-sm text-slate-500",
                children: "Distribution of tracked events",
              }),
              (0, s.jsxs)("div", {
                className:
                  "mt-8 flex flex-col items-center justify-center py-12",
                children: [
                  (0, s.jsx)("svg", {
                    className: "h-12 w-12 text-slate-300",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 1.5,
                      d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-4 text-sm text-slate-500",
                    children: "No event data available",
                  }),
                ],
              }),
            ],
          })
        : (0, s.jsxs)("div", {
            className: "rounded-xl bg-white shadow-sm ring-1 ring-slate-200",
            children: [
              (0, s.jsxs)("div", {
                className: "border-b border-slate-200 px-6 py-4",
                children: [
                  (0, s.jsx)("h3", {
                    className: "text-lg font-semibold text-slate-900",
                    children: "Events Overview",
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-1 text-sm text-slate-500",
                    children: "Distribution of tracked events",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "overflow-x-auto",
                children: (0, s.jsxs)("table", {
                  className: "w-full",
                  children: [
                    (0, s.jsx)("thead", {
                      className: "bg-slate-50",
                      children: (0, s.jsxs)("tr", {
                        children: [
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Event Name",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Count",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "% of Total",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Conversion Rate",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("tbody", {
                      className: "divide-y divide-slate-200",
                      children: t.map((t, e) =>
                        (0, s.jsxs)(
                          "tr",
                          {
                            className: "hover:bg-slate-50",
                            children: [
                              (0, s.jsx)("td", {
                                className: "whitespace-nowrap px-6 py-4",
                                children: (0, s.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "rounded-lg bg-blue-50 p-2 text-blue-600",
                                      children:
                                        yM[t.eventName] ||
                                        (0, s.jsx)("svg", {
                                          className: "h-4 w-4",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: 2,
                                          children: (0, s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                          }),
                                        }),
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-sm font-medium text-slate-900",
                                      children: y_[t.eventName] || t.eventName,
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600",
                                children: t.count.toLocaleString(),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right",
                                children: (0, s.jsxs)("span", {
                                  className:
                                    "inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-sm font-medium text-slate-700",
                                  children: [t.percentage, "%"],
                                }),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right",
                                children: (0, s.jsxs)("span", {
                                  className: `text-sm font-medium ${t.conversionRate > 5 ? "text-green-600" : t.conversionRate > 1 ? "text-amber-600" : "text-slate-600"}`,
                                  children: [t.conversionRate, "%"],
                                }),
                              }),
                            ],
                          },
                          t.eventName,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
    }
    function yN({ data: t }) {
      return 0 === t.length
        ? (0, s.jsxs)("div", {
            className:
              "rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
            children: [
              (0, s.jsx)("h3", {
                className: "text-lg font-semibold text-slate-900",
                children: "Campaign Performance",
              }),
              (0, s.jsx)("p", {
                className: "mt-1 text-sm text-slate-500",
                children: "Analytics by marketing campaign",
              }),
              (0, s.jsxs)("div", {
                className:
                  "mt-8 flex flex-col items-center justify-center py-12",
                children: [
                  (0, s.jsxs)("svg", {
                    className: "h-12 w-12 text-slate-300",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: [
                      (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
                      }),
                      (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-4 text-sm text-slate-500",
                    children: "No campaign data available",
                  }),
                ],
              }),
            ],
          })
        : (0, s.jsxs)("div", {
            className: "rounded-xl bg-white shadow-sm ring-1 ring-slate-200",
            children: [
              (0, s.jsxs)("div", {
                className: "border-b border-slate-200 px-6 py-4",
                children: [
                  (0, s.jsx)("h3", {
                    className: "text-lg font-semibold text-slate-900",
                    children: "Campaign Performance",
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-1 text-sm text-slate-500",
                    children: "Analytics by marketing campaign",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "overflow-x-auto",
                children: (0, s.jsxs)("table", {
                  className: "w-full",
                  children: [
                    (0, s.jsx)("thead", {
                      className: "bg-slate-50",
                      children: (0, s.jsxs)("tr", {
                        children: [
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Campaign",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Impressions",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Clicks",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "CTR",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Conversions",
                          }),
                          (0, s.jsx)("th", {
                            className:
                              "whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500",
                            children: "Conv. Rate",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("tbody", {
                      className: "divide-y divide-slate-200",
                      children: t.map((t, e) =>
                        (0, s.jsxs)(
                          "tr",
                          {
                            className: "hover:bg-slate-50",
                            children: [
                              (0, s.jsx)("td", {
                                className: "whitespace-nowrap px-6 py-4",
                                children: (0, s.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: `flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${0 === e ? "bg-purple-100 text-purple-700" : 1 === e ? "bg-blue-100 text-blue-700" : 2 === e ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`,
                                      children: e + 1,
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "text-sm font-medium text-slate-900",
                                      children: t.name,
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600",
                                children: t.impressions.toLocaleString(),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600",
                                children: t.clicks.toLocaleString(),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right",
                                children: (0, s.jsxs)("span", {
                                  className: `inline-flex rounded-full px-2.5 py-0.5 text-sm font-medium ${t.ctr > 5 ? "bg-green-100 text-green-700" : t.ctr > 2 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-700"}`,
                                  children: [t.ctr, "%"],
                                }),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right text-sm text-slate-600",
                                children: t.conversions.toLocaleString(),
                              }),
                              (0, s.jsx)("td", {
                                className:
                                  "whitespace-nowrap px-6 py-4 text-right",
                                children: (0, s.jsxs)("span", {
                                  className: `text-sm font-medium ${t.conversionRate > 10 ? "text-green-600" : t.conversionRate > 5 ? "text-amber-600" : "text-slate-600"}`,
                                  children: [t.conversionRate, "%"],
                                }),
                              }),
                            ],
                          },
                          t.name,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
    }
    let yC = [
        { value: "all", label: "All Devices" },
        { value: "mobile", label: "Mobile" },
        { value: "desktop", label: "Desktop" },
        { value: "tablet", label: "Tablet" },
      ],
      yD = [
        { value: "all", label: "All Sources" },
        { value: "google", label: "Google" },
        { value: "twitter", label: "Twitter" },
        { value: "facebook", label: "Facebook" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "direct", label: "Direct" },
        { value: "referral", label: "Referral" },
      ],
      yI = [
        { value: "all", label: "All Countries" },
        { value: "United States", label: "United States" },
        { value: "United Kingdom", label: "United Kingdom" },
        { value: "Germany", label: "Germany" },
        { value: "France", label: "France" },
        { value: "Spain", label: "Spain" },
        { value: "Italy", label: "Italy" },
        { value: "Canada", label: "Canada" },
        { value: "Australia", label: "Australia" },
        { value: "Japan", label: "Japan" },
        { value: "Brazil", label: "Brazil" },
      ];
    function yL({ onFilterChange: t, isLoading: e }) {
      let [r, n] = (0, f.useState)({
          start_date: "",
          end_date: "",
          device_type: "all",
          traffic_source: "all",
          campaign_name: "all",
          country: "all",
        }),
        [i, o] = (0, f.useState)(null),
        a = (0, f.useCallback)(
          (e, a) => {
            (n((t) => ({ ...t, [e]: a })),
              i && clearTimeout(i),
              o(
                setTimeout(() => {
                  t({ ...r, [e]: a });
                }, 300),
              ));
          },
          [r, t, i],
        );
      (0, f.useEffect)(
        () => () => {
          i && clearTimeout(i);
        },
        [i],
      );
      let l =
        r.start_date ||
        r.end_date ||
        "all" !== r.device_type ||
        "all" !== r.traffic_source ||
        "all" !== r.campaign_name ||
        "all" !== r.country;
      return (0, s.jsxs)("div", {
        className: "rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200",
        children: [
          (0, s.jsxs)("div", {
            className:
              "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
            children: [
              (0, s.jsxs)("div", {
                className: "space-y-1",
                children: [
                  (0, s.jsx)("label", {
                    htmlFor: "start_date",
                    className: "block text-xs font-medium text-slate-600",
                    children: "Start Date",
                  }),
                  (0, s.jsx)("div", {
                    className: "relative",
                    children: (0, s.jsx)("input", {
                      type: "date",
                      id: "start_date",
                      value: r.start_date || "",
                      onChange: (t) => a("start_date", t.target.value),
                      className:
                        "w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "space-y-1",
                children: [
                  (0, s.jsx)("label", {
                    htmlFor: "end_date",
                    className: "block text-xs font-medium text-slate-600",
                    children: "End Date",
                  }),
                  (0, s.jsx)("div", {
                    className: "relative",
                    children: (0, s.jsx)("input", {
                      type: "date",
                      id: "end_date",
                      value: r.end_date || "",
                      onChange: (t) => a("end_date", t.target.value),
                      className:
                        "w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "space-y-1",
                children: [
                  (0, s.jsx)("label", {
                    htmlFor: "device_type",
                    className: "block text-xs font-medium text-slate-600",
                    children: "Device Type",
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsx)("select", {
                        id: "device_type",
                        value: r.device_type,
                        onChange: (t) => a("device_type", t.target.value),
                        className:
                          "w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                        children: yC.map((t) =>
                          (0, s.jsx)(
                            "option",
                            { value: t.value, children: t.label },
                            t.value,
                          ),
                        ),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",
                        children: (0, s.jsx)("svg", {
                          className: "h-4 w-4 text-slate-400",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "space-y-1",
                children: [
                  (0, s.jsx)("label", {
                    htmlFor: "traffic_source",
                    className: "block text-xs font-medium text-slate-600",
                    children: "Traffic Source",
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsx)("select", {
                        id: "traffic_source",
                        value: r.traffic_source,
                        onChange: (t) => a("traffic_source", t.target.value),
                        className:
                          "w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                        children: yD.map((t) =>
                          (0, s.jsx)(
                            "option",
                            { value: t.value, children: t.label },
                            t.value,
                          ),
                        ),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",
                        children: (0, s.jsx)("svg", {
                          className: "h-4 w-4 text-slate-400",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "space-y-1",
                children: [
                  (0, s.jsx)("label", {
                    htmlFor: "country",
                    className: "block text-xs font-medium text-slate-600",
                    children: "Country",
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsx)("select", {
                        id: "country",
                        value: r.country,
                        onChange: (t) => a("country", t.target.value),
                        className:
                          "w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                        children: yI.map((t) =>
                          (0, s.jsx)(
                            "option",
                            { value: t.value, children: t.label },
                            t.value,
                          ),
                        ),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",
                        children: (0, s.jsx)("svg", {
                          className: "h-4 w-4 text-slate-400",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex items-end",
                children: (0, s.jsxs)("button", {
                  onClick: () => {
                    let e = {
                      start_date: "",
                      end_date: "",
                      device_type: "all",
                      traffic_source: "all",
                      campaign_name: "all",
                      country: "all",
                    };
                    (n(e), t(e));
                  },
                  disabled: !l || e,
                  className: `flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${l ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-slate-50 text-slate-400 cursor-not-allowed"}`,
                  children: [
                    (0, s.jsx)("svg", {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      children: (0, s.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                      }),
                    }),
                    "Reset",
                  ],
                }),
              }),
            ],
          }),
          l &&
            (0, s.jsxs)("div", {
              className:
                "mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4",
              children: [
                (0, s.jsx)("span", {
                  className: "text-xs text-slate-500",
                  children: "Active filters:",
                }),
                r.start_date &&
                  (0, s.jsxs)("span", {
                    className:
                      "inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700",
                    children: ["From: ", r.start_date],
                  }),
                r.end_date &&
                  (0, s.jsxs)("span", {
                    className:
                      "inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700",
                    children: ["To: ", r.end_date],
                  }),
                "all" !== r.device_type &&
                  (0, s.jsxs)("span", {
                    className:
                      "inline-flex items-center gap-1 rounded-full bg-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700",
                    children: ["Device: ", r.device_type],
                  }),
                "all" !== r.traffic_source &&
                  (0, s.jsxs)("span", {
                    className:
                      "inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700",
                    children: ["Source: ", r.traffic_source],
                  }),
                "all" !== r.country &&
                  (0, s.jsxs)("span", {
                    className:
                      "inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700",
                    children: ["Country: ", r.country],
                  }),
              ],
            }),
          e &&
            (0, s.jsxs)("div", {
              className:
                "mt-4 flex items-center gap-2 border-t border-slate-100 pt-4",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent",
                }),
                (0, s.jsx)("span", {
                  className: "text-sm text-slate-500",
                  children: "Updating data...",
                }),
              ],
            }),
        ],
      });
    }
    function yB(t) {
      return t.filter((t) => "page_view" === t.event_name).length;
    }
    t.s(
      [
        "default",
        0,
        function () {
          let [t, e] = (0, f.useState)([]),
            [r, n] = (0, f.useState)({}),
            [i, o] = (0, f.useState)(!0),
            [a, l] = (0, f.useState)(null);
          (0, f.useEffect)(() => {
            (async () => {
              (o(!0), l(null));
              try {
                let t = new URLSearchParams();
                (r.start_date && t.append("start_date", r.start_date),
                  r.end_date && t.append("end_date", r.end_date),
                  r.device_type &&
                    "all" !== r.device_type &&
                    t.append("device_type", r.device_type),
                  r.traffic_source &&
                    "all" !== r.traffic_source &&
                    t.append("traffic_source", r.traffic_source),
                  r.campaign_name &&
                    "all" !== r.campaign_name &&
                    t.append("campaign_name", r.campaign_name),
                  r.country &&
                    "all" !== r.country &&
                    t.append("country", r.country));
                let n = await fetch(`/api/analytics?${t.toString()}`);
                if (!n.ok) throw Error("Failed to fetch analytics data");
                let i = await n.json();
                e(i.events);
              } catch (t) {
                (l(t instanceof Error ? t.message : "An error occurred"),
                  console.error("Dashboard error:", t));
              } finally {
                o(!1);
              }
            })();
          }, [r]);
          let c = (0, f.useMemo)(
              () =>
                (function (t) {
                  let e, r, n, i, o, a, l, c;
                  return {
                    totalUsers: new Set(t.map((t) => t.session_id)).size,
                    pageViews: yB(t),
                    presaleCTR:
                      Math.round(
                        10 *
                          (0 === (e = yB(t))
                            ? 0
                            : (t.filter(
                                (t) => "presale_click_cta" === t.event_name,
                              ).length /
                                e) *
                              100),
                      ) / 10,
                    newsletterConversion:
                      Math.round(
                        10 *
                          (0 === (r = yB(t))
                            ? 0
                            : (t.filter(
                                (t) =>
                                  "newsletter_signup" === t.event_name &&
                                  "success" === t.signup_status,
                              ).length /
                                r) *
                              100),
                      ) / 10,
                    bounceRate:
                      Math.round(
                        10 *
                          (function (t) {
                            let e = (function (t) {
                                let e = {};
                                for (let r of t)
                                  (e[r.session_id] || (e[r.session_id] = []),
                                    e[r.session_id].push(r));
                                return e;
                              })(t),
                              r = 0;
                            for (let t in e) {
                              let n = new Set(e[t].map((t) => t.event_name));
                              1 === n.size && n.has("page_view") && r++;
                            }
                            let n = Object.keys(e).length;
                            return 0 === n ? 0 : (r / n) * 100;
                          })(t),
                      ) / 10,
                    avgSessionDuration:
                      0 ===
                      (n = t.filter(
                        (t) =>
                          "session_end" === t.event_name &&
                          void 0 !== t.session_duration,
                      )).length
                        ? 0
                        : Math.round(
                            n.reduce(
                              (t, e) => t + (e.session_duration || 0),
                              0,
                            ) / n.length,
                          ),
                    scrollDepthDistribution: (function (t) {
                      let e = t.filter(
                        (t) =>
                          "scroll_depth" === t.event_name &&
                          void 0 !== t.scroll_percentage,
                      );
                      if (0 === e.length)
                        return [
                          { range: "0-25%", percentage: 0, count: 0 },
                          { range: "25-50%", percentage: 0, count: 0 },
                          { range: "50-75%", percentage: 0, count: 0 },
                          { range: "75-100%", percentage: 0, count: 0 },
                        ];
                      let r = {
                        "0-25%": 0,
                        "25-50%": 0,
                        "50-75%": 0,
                        "75-100%": 0,
                      };
                      for (let t of e) {
                        let e = t.scroll_percentage;
                        e <= 25
                          ? r["0-25%"]++
                          : e <= 50
                            ? r["25-50%"]++
                            : e <= 75
                              ? r["50-75%"]++
                              : r["75-100%"]++;
                      }
                      let n = e.length;
                      return Object.entries(r).map(([t, e]) => ({
                        range: t,
                        count: e,
                        percentage: Math.round((e / n) * 1e3) / 10,
                      }));
                    })(t),
                    trafficSourceDistribution: (function (t) {
                      let e = {},
                        r = t.filter((t) => "page_view" === t.event_name);
                      for (let t of r) {
                        let r = t.traffic_source;
                        e[r] = (e[r] || 0) + 1;
                      }
                      let n = r.length;
                      return 0 === n
                        ? []
                        : [
                            "google",
                            "twitter",
                            "facebook",
                            "linkedin",
                            "direct",
                            "referral",
                          ]
                            .map((t) => ({
                              source: t,
                              count: e[t] || 0,
                              percentage:
                                Math.round(((e[t] || 0) / n) * 1e3) / 10,
                            }))
                            .filter((t) => t.count > 0)
                            .sort((t, e) => e.count - t.count);
                    })(t),
                    campaignPerformance: (function (t) {
                      let e = {},
                        r = t.filter((t) =>
                          [
                            "presale_click_cta",
                            "online_shop_click",
                            "documents_click",
                            "social_click",
                            "trustpilot_click",
                          ].includes(t.event_name),
                        ),
                        n = t.filter(
                          (t) =>
                            "newsletter_signup" === t.event_name &&
                            "success" === t.signup_status,
                        );
                      for (let r of t.filter(
                        (t) => "page_view" === t.event_name,
                      ))
                        r.campaign_name &&
                          (e[r.campaign_name] ||
                            (e[r.campaign_name] = {
                              impressions: 0,
                              clicks: 0,
                              conversions: 0,
                            }),
                          e[r.campaign_name].impressions++);
                      for (let t of r)
                        t.campaign_name &&
                          (e[t.campaign_name] ||
                            (e[t.campaign_name] = {
                              impressions: 0,
                              clicks: 0,
                              conversions: 0,
                            }),
                          e[t.campaign_name].clicks++);
                      for (let t of n)
                        t.campaign_name &&
                          (e[t.campaign_name] ||
                            (e[t.campaign_name] = {
                              impressions: 0,
                              clicks: 0,
                              conversions: 0,
                            }),
                          e[t.campaign_name].conversions++);
                      return Object.entries(e)
                        .map(([t, e]) => ({
                          name: t,
                          impressions: e.impressions,
                          clicks: e.clicks,
                          ctr:
                            e.impressions > 0
                              ? Math.round((e.clicks / e.impressions) * 1e3) /
                                10
                              : 0,
                          conversions: e.conversions,
                          conversionRate:
                            e.clicks > 0
                              ? Math.round((e.conversions / e.clicks) * 1e3) /
                                10
                              : 0,
                        }))
                        .sort((t, e) => e.impressions - t.impressions);
                    })(t),
                    eventCounts: (function (t) {
                      let e = [
                          "page_view",
                          "presale_click_cta",
                          "online_shop_click",
                          "documents_click",
                          "newsletter_signup",
                          "social_click",
                          "trustpilot_click",
                          "scroll_depth",
                          "session_end",
                        ],
                        r = {};
                      for (let n of e)
                        r[n] = t.filter((t) => t.event_name === n).length;
                      let n = t.length,
                        i = yB(t);
                      return e
                        .map((t) => ({
                          eventName: t,
                          count: r[t],
                          percentage:
                            n > 0 ? Math.round((r[t] / n) * 1e3) / 10 : 0,
                          conversionRate:
                            i > 0 ? Math.round((r[t] / i) * 1e3) / 10 : 0,
                        }))
                        .filter((t) => t.count > 0)
                        .sort((t, e) => e.count - t.count);
                    })(t),
                    funnelData:
                      ((i = yB(t)),
                      (o = new Set(
                        t
                          .filter(
                            (t) =>
                              "scroll_depth" === t.event_name &&
                              (t.scroll_percentage || 0) >= 50,
                          )
                          .map((t) => t.session_id),
                      ).size),
                      (a = t.filter(
                        (t) => "presale_click_cta" === t.event_name,
                      ).length),
                      (l = t.filter(
                        (t) =>
                          "newsletter_signup" === t.event_name &&
                          "success" === t.signup_status,
                      ).length),
                      (c = i || 1),
                      [
                        { step: "Page View", count: i, percentage: 100 },
                        {
                          step: "Scroll 50%+",
                          count: o,
                          percentage: Math.round((o / c) * 1e3) / 10,
                        },
                        {
                          step: "Presale Click",
                          count: a,
                          percentage: Math.round((a / c) * 1e3) / 10,
                        },
                        {
                          step: "Newsletter Signup",
                          count: l,
                          percentage: Math.round((l / c) * 1e3) / 10,
                        },
                      ]),
                  };
                })(t),
              [t],
            ),
            u = (0, f.useMemo)(
              () =>
                (function (t) {
                  let e = t.filter(
                      (t) =>
                        "session_end" === t.event_name &&
                        void 0 !== t.session_duration,
                    ),
                    r = {};
                  for (let t of e) {
                    let e = new Date(t.timestamp).toISOString().split("T")[0];
                    (r[e] || (r[e] = []), r[e].push(t.session_duration || 0));
                  }
                  return Object.entries(r)
                    .map(([t, e]) => ({
                      date: t,
                      avgDuration: Math.round(
                        e.reduce((t, e) => t + e, 0) / e.length,
                      ),
                    }))
                    .sort(
                      (t, e) =>
                        new Date(t.date).getTime() - new Date(e.date).getTime(),
                    )
                    .slice(-14);
                })(t),
              [t],
            );
          return (0, s.jsxs)("div", {
            className: "min-h-screen bg-slate-50",
            children: [
              (0, s.jsx)("header", {
                className: "bg-white shadow-sm ring-1 ring-slate-200",
                children: (0, s.jsx)("div", {
                  className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
                  children: (0, s.jsxs)("div", {
                    className:
                      "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("h1", {
                            className: "text-2xl font-bold text-slate-900",
                            children: "Analytics Dashboard",
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-1 text-sm text-slate-500",
                            children:
                              "Real-time insights into your website performance",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center gap-2 rounded-lg bg-green-50 px-3 py-1.5",
                            children: [
                              (0, s.jsxs)("span", {
                                className: "relative flex h-2.5 w-2.5",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75",
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("span", {
                                className: "text-sm font-medium text-green-700",
                                children: "Live",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("span", {
                            className: "text-sm text-slate-500",
                            children: [
                              t.length.toLocaleString(),
                              " events loaded",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, s.jsxs)("main", {
                className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
                children: [
                  (0, s.jsx)("section", {
                    className: "mb-8",
                    children: (0, s.jsx)(yL, {
                      onFilterChange: (t) => {
                        n(t);
                      },
                      isLoading: i,
                    }),
                  }),
                  a &&
                    (0, s.jsx)("div", {
                      className:
                        "mb-8 rounded-lg border border-red-200 bg-red-50 p-4",
                      children: (0, s.jsxs)("div", {
                        className: "flex gap-3",
                        children: [
                          (0, s.jsx)("svg", {
                            className: "h-5 w-5 text-red-400",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, s.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("h3", {
                                className: "text-sm font-medium text-red-800",
                                children: "Error loading data",
                              }),
                              (0, s.jsx)("p", {
                                className: "mt-1 text-sm text-red-600",
                                children: a,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  i && 0 === t.length
                    ? (0, s.jsxs)("div", {
                        className:
                          "flex flex-col items-center justify-center py-24",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600",
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-4 text-sm text-slate-500",
                            children: "Loading analytics data...",
                          }),
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)("section", {
                            className: "mb-8",
                            children: (0, s.jsxs)("div", {
                              className:
                                "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
                              children: [
                                (0, s.jsx)(d, {
                                  title: "Total Users",
                                  value: c.totalUsers.toLocaleString(),
                                  icon: (0, s.jsx)(h, {}),
                                  color: "blue",
                                  trend: { value: 12.5, isPositive: !0 },
                                }),
                                (0, s.jsx)(d, {
                                  title: "Page Views",
                                  value: c.pageViews.toLocaleString(),
                                  icon: (0, s.jsx)(y, {}),
                                  color: "purple",
                                  trend: { value: 8.2, isPositive: !0 },
                                }),
                                (0, s.jsx)(d, {
                                  title: "Presale CTR",
                                  value: `${c.presaleCTR}%`,
                                  icon: (0, s.jsx)(v, {}),
                                  color: "green",
                                  trend: { value: 3.1, isPositive: !0 },
                                }),
                                (0, s.jsx)(d, {
                                  title: "Newsletter Conv.",
                                  value: `${c.newsletterConversion}%`,
                                  icon: (0, s.jsx)(m, {}),
                                  color: "amber",
                                  trend: { value: 1.2, isPositive: !1 },
                                }),
                                (0, s.jsx)(d, {
                                  title: "Avg. Session",
                                  value: (function (t) {
                                    if (t < 60) return `${t}s`;
                                    let e = Math.floor(t / 60);
                                    return `${e}m ${t % 60}s`;
                                  })(c.avgSessionDuration),
                                  icon: (0, s.jsx)(b, {}),
                                  color: "blue",
                                  trend: { value: 5.4, isPositive: !0 },
                                }),
                                (0, s.jsx)(d, {
                                  title: "Bounce Rate",
                                  value: `${c.bounceRate}%`,
                                  icon: (0, s.jsx)(g, {}),
                                  color: "red",
                                  trend: { value: 2.1, isPositive: !1 },
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsxs)("section", {
                            className: "mb-8 grid gap-6 lg:grid-cols-2",
                            children: [
                              (0, s.jsx)(yS, { data: c.funnelData }),
                              (0, s.jsx)(yA, {
                                data: c.trafficSourceDistribution,
                              }),
                            ],
                          }),
                          (0, s.jsx)("section", {
                            className: "mb-8",
                            children: (0, s.jsx)(yE, {
                              scrollData: c.scrollDepthDistribution,
                              sessionData: u,
                            }),
                          }),
                          (0, s.jsx)("section", {
                            className: "mb-8",
                            children: (0, s.jsx)(yN, {
                              data: c.campaignPerformance,
                            }),
                          }),
                          (0, s.jsx)("section", {
                            className: "mb-8",
                            children: (0, s.jsx)(yT, { data: c.eventCounts }),
                          }),
                        ],
                      }),
                ],
              }),
              (0, s.jsx)("footer", {
                className: "border-t border-slate-200 bg-white",
                children: (0, s.jsx)("div", {
                  className: "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",
                  children: (0, s.jsx)("p", {
                    className: "text-center text-sm text-slate-500",
                    children: "Analytics Dashboard - Mock Data Demo",
                  }),
                }),
              }),
            ],
          });
        },
      ],
      78928,
    );
  },
]);
