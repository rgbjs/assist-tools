var St = typeof global == "object" && global && global.Object === Object && global, Zt = typeof self == "object" && self && self.Object === Object && self, p = St || Zt || Function("return this")(), $ = p.Symbol, Pt = Object.prototype, Qt = Pt.hasOwnProperty, kt = Pt.toString, S = $ ? $.toStringTag : void 0;
function te(t) {
  var e = Qt.call(t, S), r = t[S];
  try {
    t[S] = void 0;
    var n = !0;
  } catch {
  }
  var o = kt.call(t);
  return n && (e ? t[S] = r : delete t[S]), o;
}
var ee = Object.prototype, re = ee.toString;
function ne(t) {
  return re.call(t);
}
var oe = "[object Null]", ae = "[object Undefined]", at = $ ? $.toStringTag : void 0;
function C(t) {
  return t == null ? t === void 0 ? ae : oe : at && at in Object(t) ? te(t) : ne(t);
}
function M(t) {
  return t != null && typeof t == "object";
}
var W = Array.isArray;
function N(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ie = "[object AsyncFunction]", se = "[object Function]", ce = "[object GeneratorFunction]", ue = "[object Proxy]";
function It(t) {
  if (!N(t))
    return !1;
  var e = C(t);
  return e == se || e == ce || e == ie || e == ue;
}
var R = p["__core-js_shared__"], it = function() {
  var t = /[^.]+$/.exec(R && R.keys && R.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function fe(t) {
  return !!it && it in t;
}
var le = Function.prototype, pe = le.toString;
function _(t) {
  if (t != null) {
    try {
      return pe.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ge = /[\\^$.*+?()[\]{}|]/g, ye = /^\[object .+?Constructor\]$/, be = Function.prototype, he = Object.prototype, de = be.toString, Te = he.hasOwnProperty, _e = RegExp(
  "^" + de.call(Te).replace(ge, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function je(t) {
  if (!N(t) || fe(t))
    return !1;
  var e = It(t) ? _e : ye;
  return e.test(_(t));
}
function ve(t, e) {
  return t == null ? void 0 : t[e];
}
function j(t, e) {
  var r = ve(t, e);
  return je(r) ? r : void 0;
}
var Y = j(p, "WeakMap"), st = Object.create, $e = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!N(e))
      return {};
    if (st)
      return st(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
function we(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var ct = function() {
  try {
    var t = j(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function me(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
var Oe = 9007199254740991, Ae = /^(?:0|[1-9]\d*)$/;
function Se(t, e) {
  var r = typeof t;
  return e = e ?? Oe, !!e && (r == "number" || r != "symbol" && Ae.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function xt(t, e, r) {
  e == "__proto__" && ct ? ct(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function Et(t, e) {
  return t === e || t !== t && e !== e;
}
var Pe = Object.prototype, Ie = Pe.hasOwnProperty;
function Ct(t, e, r) {
  var n = t[e];
  (!(Ie.call(t, e) && Et(n, r)) || r === void 0 && !(e in t)) && xt(t, e, r);
}
function U(t, e, r, n) {
  var o = !r;
  r || (r = {});
  for (var s = -1, c = e.length; ++s < c; ) {
    var u = e[s], f = n ? n(r[u], t[u], u, r, t) : void 0;
    f === void 0 && (f = t[u]), o ? xt(r, u, f) : Ct(r, u, f);
  }
  return r;
}
var xe = 9007199254740991;
function Mt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= xe;
}
function Nt(t) {
  return t != null && Mt(t.length) && !It(t);
}
var Ee = Object.prototype;
function q(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Ee;
  return t === r;
}
function Ce(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var Me = "[object Arguments]";
function ut(t) {
  return M(t) && C(t) == Me;
}
var Dt = Object.prototype, Ne = Dt.hasOwnProperty, De = Dt.propertyIsEnumerable, Fe = ut(/* @__PURE__ */ function() {
  return arguments;
}()) ? ut : function(t) {
  return M(t) && Ne.call(t, "callee") && !De.call(t, "callee");
};
function Le() {
  return !1;
}
var Ft = typeof exports == "object" && exports && !exports.nodeType && exports, ft = Ft && typeof module == "object" && module && !module.nodeType && module, Ue = ft && ft.exports === Ft, lt = Ue ? p.Buffer : void 0, Be = lt ? lt.isBuffer : void 0, Lt = Be || Le, Ge = "[object Arguments]", Re = "[object Array]", ze = "[object Boolean]", Ye = "[object Date]", He = "[object Error]", Ke = "[object Function]", Ve = "[object Map]", We = "[object Number]", qe = "[object Object]", Xe = "[object RegExp]", Je = "[object Set]", Ze = "[object String]", Qe = "[object WeakMap]", ke = "[object ArrayBuffer]", tr = "[object DataView]", er = "[object Float32Array]", rr = "[object Float64Array]", nr = "[object Int8Array]", or = "[object Int16Array]", ar = "[object Int32Array]", ir = "[object Uint8Array]", sr = "[object Uint8ClampedArray]", cr = "[object Uint16Array]", ur = "[object Uint32Array]", i = {};
i[er] = i[rr] = i[nr] = i[or] = i[ar] = i[ir] = i[sr] = i[cr] = i[ur] = !0;
i[Ge] = i[Re] = i[ke] = i[ze] = i[tr] = i[Ye] = i[He] = i[Ke] = i[Ve] = i[We] = i[qe] = i[Xe] = i[Je] = i[Ze] = i[Qe] = !1;
function fr(t) {
  return M(t) && Mt(t.length) && !!i[C(t)];
}
function X(t) {
  return function(e) {
    return t(e);
  };
}
var Ut = typeof exports == "object" && exports && !exports.nodeType && exports, P = Ut && typeof module == "object" && module && !module.nodeType && module, lr = P && P.exports === Ut, z = lr && St.process, w = function() {
  try {
    var t = P && P.require && P.require("util").types;
    return t || z && z.binding && z.binding("util");
  } catch {
  }
}(), pt = w && w.isTypedArray, pr = pt ? X(pt) : fr, gr = Object.prototype, yr = gr.hasOwnProperty;
function Bt(t, e) {
  var r = W(t), n = !r && Fe(t), o = !r && !n && Lt(t), s = !r && !n && !o && pr(t), c = r || n || o || s, u = c ? Ce(t.length, String) : [], f = u.length;
  for (var l in t)
    (e || yr.call(t, l)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Se(l, f))) && u.push(l);
  return u;
}
function Gt(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var br = Gt(Object.keys, Object), hr = Object.prototype, dr = hr.hasOwnProperty;
function Tr(t) {
  if (!q(t))
    return br(t);
  var e = [];
  for (var r in Object(t))
    dr.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function J(t) {
  return Nt(t) ? Bt(t) : Tr(t);
}
function _r(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var jr = Object.prototype, vr = jr.hasOwnProperty;
function $r(t) {
  if (!N(t))
    return _r(t);
  var e = q(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !vr.call(t, n)) || r.push(n);
  return r;
}
function Z(t) {
  return Nt(t) ? Bt(t, !0) : $r(t);
}
var I = j(Object, "create");
function wr() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function mr(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Or = "__lodash_hash_undefined__", Ar = Object.prototype, Sr = Ar.hasOwnProperty;
function Pr(t) {
  var e = this.__data__;
  if (I) {
    var r = e[t];
    return r === Or ? void 0 : r;
  }
  return Sr.call(e, t) ? e[t] : void 0;
}
var Ir = Object.prototype, xr = Ir.hasOwnProperty;
function Er(t) {
  var e = this.__data__;
  return I ? e[t] !== void 0 : xr.call(e, t);
}
var Cr = "__lodash_hash_undefined__";
function Mr(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = I && e === void 0 ? Cr : e, this;
}
function T(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = wr;
T.prototype.delete = mr;
T.prototype.get = Pr;
T.prototype.has = Er;
T.prototype.set = Mr;
function Nr() {
  this.__data__ = [], this.size = 0;
}
function B(t, e) {
  for (var r = t.length; r--; )
    if (Et(t[r][0], e))
      return r;
  return -1;
}
var Dr = Array.prototype, Fr = Dr.splice;
function Lr(t) {
  var e = this.__data__, r = B(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Fr.call(e, r, 1), --this.size, !0;
}
function Ur(t) {
  var e = this.__data__, r = B(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Br(t) {
  return B(this.__data__, t) > -1;
}
function Gr(t, e) {
  var r = this.__data__, n = B(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function y(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = Nr;
y.prototype.delete = Lr;
y.prototype.get = Ur;
y.prototype.has = Br;
y.prototype.set = Gr;
var x = j(p, "Map");
function Rr() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (x || y)(),
    string: new T()
  };
}
function zr(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function G(t, e) {
  var r = t.__data__;
  return zr(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Yr(t) {
  var e = G(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Hr(t) {
  return G(this, t).get(t);
}
function Kr(t) {
  return G(this, t).has(t);
}
function Vr(t, e) {
  var r = G(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function m(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = Rr;
m.prototype.delete = Yr;
m.prototype.get = Hr;
m.prototype.has = Kr;
m.prototype.set = Vr;
function Rt(t, e) {
  for (var r = -1, n = e.length, o = t.length; ++r < n; )
    t[o + r] = e[r];
  return t;
}
var Wr = Gt(Object.getPrototypeOf, Object);
const zt = Wr;
function qr() {
  this.__data__ = new y(), this.size = 0;
}
function Xr(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Jr(t) {
  return this.__data__.get(t);
}
function Zr(t) {
  return this.__data__.has(t);
}
var Qr = 200;
function kr(t, e) {
  var r = this.__data__;
  if (r instanceof y) {
    var n = r.__data__;
    if (!x || n.length < Qr - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new m(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function O(t) {
  var e = this.__data__ = new y(t);
  this.size = e.size;
}
O.prototype.clear = qr;
O.prototype.delete = Xr;
O.prototype.get = Jr;
O.prototype.has = Zr;
O.prototype.set = kr;
function tn(t, e) {
  return t && U(e, J(e), t);
}
function en(t, e) {
  return t && U(e, Z(e), t);
}
var Yt = typeof exports == "object" && exports && !exports.nodeType && exports, gt = Yt && typeof module == "object" && module && !module.nodeType && module, rn = gt && gt.exports === Yt, yt = rn ? p.Buffer : void 0, bt = yt ? yt.allocUnsafe : void 0;
function nn(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = bt ? bt(r) : new t.constructor(r);
  return t.copy(n), n;
}
function on(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = 0, s = []; ++r < n; ) {
    var c = t[r];
    e(c, r, t) && (s[o++] = c);
  }
  return s;
}
function Ht() {
  return [];
}
var an = Object.prototype, sn = an.propertyIsEnumerable, ht = Object.getOwnPropertySymbols, Q = ht ? function(t) {
  return t == null ? [] : (t = Object(t), on(ht(t), function(e) {
    return sn.call(t, e);
  }));
} : Ht;
function cn(t, e) {
  return U(t, Q(t), e);
}
var un = Object.getOwnPropertySymbols, Kt = un ? function(t) {
  for (var e = []; t; )
    Rt(e, Q(t)), t = zt(t);
  return e;
} : Ht;
function fn(t, e) {
  return U(t, Kt(t), e);
}
function Vt(t, e, r) {
  var n = e(t);
  return W(t) ? n : Rt(n, r(t));
}
function ln(t) {
  return Vt(t, J, Q);
}
function pn(t) {
  return Vt(t, Z, Kt);
}
var H = j(p, "DataView"), K = j(p, "Promise"), V = j(p, "Set"), dt = "[object Map]", gn = "[object Object]", Tt = "[object Promise]", _t = "[object Set]", jt = "[object WeakMap]", vt = "[object DataView]", yn = _(H), bn = _(x), hn = _(K), dn = _(V), Tn = _(Y), d = C;
(H && d(new H(new ArrayBuffer(1))) != vt || x && d(new x()) != dt || K && d(K.resolve()) != Tt || V && d(new V()) != _t || Y && d(new Y()) != jt) && (d = function(t) {
  var e = C(t), r = e == gn ? t.constructor : void 0, n = r ? _(r) : "";
  if (n)
    switch (n) {
      case yn:
        return vt;
      case bn:
        return dt;
      case hn:
        return Tt;
      case dn:
        return _t;
      case Tn:
        return jt;
    }
  return e;
});
const k = d;
var _n = Object.prototype, jn = _n.hasOwnProperty;
function vn(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && jn.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var $t = p.Uint8Array;
function tt(t) {
  var e = new t.constructor(t.byteLength);
  return new $t(e).set(new $t(t)), e;
}
function $n(t, e) {
  var r = e ? tt(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var wn = /\w*$/;
function mn(t) {
  var e = new t.constructor(t.source, wn.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var wt = $ ? $.prototype : void 0, mt = wt ? wt.valueOf : void 0;
function On(t) {
  return mt ? Object(mt.call(t)) : {};
}
function An(t, e) {
  var r = e ? tt(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Sn = "[object Boolean]", Pn = "[object Date]", In = "[object Map]", xn = "[object Number]", En = "[object RegExp]", Cn = "[object Set]", Mn = "[object String]", Nn = "[object Symbol]", Dn = "[object ArrayBuffer]", Fn = "[object DataView]", Ln = "[object Float32Array]", Un = "[object Float64Array]", Bn = "[object Int8Array]", Gn = "[object Int16Array]", Rn = "[object Int32Array]", zn = "[object Uint8Array]", Yn = "[object Uint8ClampedArray]", Hn = "[object Uint16Array]", Kn = "[object Uint32Array]";
function Vn(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case Dn:
      return tt(t);
    case Sn:
    case Pn:
      return new n(+t);
    case Fn:
      return $n(t, r);
    case Ln:
    case Un:
    case Bn:
    case Gn:
    case Rn:
    case zn:
    case Yn:
    case Hn:
    case Kn:
      return An(t, r);
    case In:
      return new n();
    case xn:
    case Mn:
      return new n(t);
    case En:
      return mn(t);
    case Cn:
      return new n();
    case Nn:
      return On(t);
  }
}
function Wn(t) {
  return typeof t.constructor == "function" && !q(t) ? $e(zt(t)) : {};
}
var qn = "[object Map]";
function Xn(t) {
  return M(t) && k(t) == qn;
}
var Ot = w && w.isMap, Jn = Ot ? X(Ot) : Xn, Zn = "[object Set]";
function Qn(t) {
  return M(t) && k(t) == Zn;
}
var At = w && w.isSet, kn = At ? X(At) : Qn, to = 1, eo = 2, ro = 4, Wt = "[object Arguments]", no = "[object Array]", oo = "[object Boolean]", ao = "[object Date]", io = "[object Error]", qt = "[object Function]", so = "[object GeneratorFunction]", co = "[object Map]", uo = "[object Number]", Xt = "[object Object]", fo = "[object RegExp]", lo = "[object Set]", po = "[object String]", go = "[object Symbol]", yo = "[object WeakMap]", bo = "[object ArrayBuffer]", ho = "[object DataView]", To = "[object Float32Array]", _o = "[object Float64Array]", jo = "[object Int8Array]", vo = "[object Int16Array]", $o = "[object Int32Array]", wo = "[object Uint8Array]", mo = "[object Uint8ClampedArray]", Oo = "[object Uint16Array]", Ao = "[object Uint32Array]", a = {};
a[Wt] = a[no] = a[bo] = a[ho] = a[oo] = a[ao] = a[To] = a[_o] = a[jo] = a[vo] = a[$o] = a[co] = a[uo] = a[Xt] = a[fo] = a[lo] = a[po] = a[go] = a[wo] = a[mo] = a[Oo] = a[Ao] = !0;
a[io] = a[qt] = a[yo] = !1;
function D(t, e, r, n, o, s) {
  var c, u = e & to, f = e & eo, l = e & ro;
  if (r && (c = o ? r(t, n, o, s) : r(t)), c !== void 0)
    return c;
  if (!N(t))
    return t;
  var A = W(t);
  if (A) {
    if (c = vn(t), !u)
      return we(t, c);
  } else {
    var v = k(t), rt = v == qt || v == so;
    if (Lt(t))
      return nn(t, u);
    if (v == Xt || v == Wt || rt && !o) {
      if (c = f || rt ? {} : Wn(t), !u)
        return f ? fn(t, en(c, t)) : cn(t, tn(c, t));
    } else {
      if (!a[v])
        return o ? t : {};
      c = Vn(t, v, u);
    }
  }
  s || (s = new O());
  var nt = s.get(t);
  if (nt)
    return nt;
  s.set(t, c), kn(t) ? t.forEach(function(b) {
    c.add(D(b, e, r, b, t, s));
  }) : Jn(t) && t.forEach(function(b, h) {
    c.set(h, D(b, e, r, h, t, s));
  });
  var Jt = l ? f ? pn : ln : f ? Z : J, ot = A ? void 0 : Jt(t);
  return me(ot || t, function(b, h) {
    ot && (h = b, b = t[h]), Ct(c, h, D(b, e, r, h, t, s));
  }), c;
}
var So = 1, Po = 4;
function Io(t, e) {
  return e = typeof e == "function" ? e : void 0, D(t, So | Po, e);
}
const et = (...t) => t.length === 0 ? !1 : t.every((e) => !(e === "" || e === null || e === void 0 || e === 1 / 0 || e === -1 / 0 || Number.isNaN(e))), g = (t) => t === null ? "null" : Array.isArray(t) ? "array" : typeof t, xo = (t, e) => {
  const r = (n) => {
    if (g(n) === "array")
      return n.filter((o) => {
        const s = g(o);
        return (s === "array" || s === "object") && (o = r(o)), t(o);
      });
    if (g(n) === "object") {
      for (const o in n)
        t(n[o]) || delete n[o];
      if (e === "array")
        return n;
    } else
      return n;
  };
  return r;
}, Do = (t, e = et) => {
  const r = g(t);
  return Io(t, xo(e, r));
}, E = (...t) => t.length === 0 ? !1 : t.every((e) => !!Number.isFinite(e)), Fo = (t, e = 200) => {
  if (typeof t != "function")
    throw new TypeError('"callback" type must be a function !');
  if (!E(e))
    throw new TypeError('"delay" type must be a number and delay value not "NaN" or "Infinity" or "-Infinity" !');
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => {
      t.apply(this, n);
    }, e);
  };
}, Lo = (t, e = "YYYY-MM-DD hh:mm:ss", r = !1) => {
  let n;
  if (t instanceof Date ? n = t : n = new Date(t), Number.isNaN(n.getTime()))
    throw new TypeError('"time" cannot be converted to a Date object');
  const o = String(n.getFullYear()).padStart(4, "0"), s = String(n.getMonth() + 1).padStart(2, "0"), c = String(n.getDate()).padStart(2, "0"), u = String(n.getHours()).padStart(2, "0"), f = String(n.getMinutes()).padStart(2, "0"), l = String(n.getSeconds()).padStart(2, "0");
  let A = "";
  return r && (A = n.getMilliseconds()), e.replaceAll("YYYY", o).replaceAll("MM", s).replaceAll("DD", c).replaceAll("hh", u).replaceAll("mm", f).replaceAll("ss", l) + A;
}, Uo = (t, e, r) => {
  if (!E(e, r))
    throw new TypeError('"min" and "max" must be a effective number');
  if (Number.isNaN(t) || t !== 1 / 0 && t !== -1 / 0 && !E(t))
    return !1;
  const n = String(t).split(".")[1] || "";
  return n.length >= e && n.length <= r;
}, Eo = (...t) => t.length === 0 ? !1 : t.every((e) => !!(Number.isInteger(e) && e > 0)), Bo = Eo, Go = (...t) => t.length === 0 ? !1 : t.every((e) => Number.isInteger(e)), Ro = (...t) => t.length === 0 ? !1 : t.every((e) => typeof e == "number"), zo = (...t) => t.length === 0 ? !1 : t.every((e) => typeof e == "string"), Co = (t, e, r = []) => {
  const n = g(t);
  if (!(n === "function" || n === "object" || n === "array"))
    throw new TypeError('"data" must be a `object` or `array` or `function`');
  if (typeof e != "function")
    throw new TypeError('"testFunc" must be a `function`');
  if (g(r) !== "array")
    throw new TypeError('"notTestField" must be a `array`');
  for (let o in t)
    if (!(!Object.prototype.hasOwnProperty.call(t, o) || r.includes(o)) && !e(t[o], o, t))
      return !1;
  return !0;
}, Yo = (t, e) => Co(t, (r) => et(r), e), Ho = (t, e = !0) => {
  const r = typeof t;
  if (!(r === "number" || r === "string"))
    return !1;
  if (r === "number")
    return !!E(t);
  if (t === "")
    return !1;
  if (e) {
    if (/\s/g.test(t))
      return !1;
    if (t.includes(".")) {
      if (t.substr(0, 2) === "00" || !/[0-9]\.[0-9]/.test(t))
        return !1;
    } else if (t.length > 1 && t[0] === "0")
      return !1;
  }
  return !!E(Number(t));
}, Mo = (t, e = []) => {
  for (let r in t) {
    if (!Object.prototype.hasOwnProperty.call(t, r) || e.includes(r))
      continue;
    const n = t[r], o = g(n);
    if ((o === "object" || o === "array") && !Mo(n, e) || !et(n))
      return !1;
  }
  return !0;
}, L = Symbol("代理数据:只读"), F = (t, e = "default") => new Proxy(t, {
  get(r, n) {
    if (n === L)
      return L;
    const o = g(r[n]);
    return o === "function" ? F(e === "default" ? r[n] : r[n].bind(r), e) : o === "object" || o === "array" ? F(r[n], e) : r[n];
  },
  set(r) {
    return console.warn(r, "The current data is read-only !"), !0;
  },
  deleteProperty(r) {
    return console.warn(r, "The current data is read-only !"), !0;
  },
  apply(r, n, o) {
    return e === "strict" ? (console.warn(r, '"strict" mode prohibit calling functions !'), !1) : typeof e == "function" && !e(r, n, o) ? !1 : r.apply(n, o);
  }
}), No = (t) => {
  const e = g(t);
  return !(!["object", "array", "function"].includes(e) || t[L] !== L);
}, Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isReadOnly: No,
  readOnly: F
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ko as ReadOnly,
  Do as cloneEffectiveValue,
  Fo as debounce,
  Lo as formatDate,
  Uo as isDecimalLen,
  et as isEffectiveValue,
  Bo as isId,
  Go as isInt,
  E as isNum,
  Ro as isNumber,
  Eo as isPositiveInt,
  No as isReadOnly,
  Ho as isStrNum,
  zo as isString,
  Co as isTest,
  g as isType,
  Yo as notEmpty,
  Mo as notEmptyDeep,
  F as readOnly
};
