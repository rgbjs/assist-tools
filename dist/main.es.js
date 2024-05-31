var Et = typeof global == "object" && global && global.Object === Object && global, oe = typeof self == "object" && self && self.Object === Object && self, y = Et || oe || Function("return this")(), m = y.Symbol, xt = Object.prototype, ae = xt.hasOwnProperty, ie = xt.toString, A = m ? m.toStringTag : void 0;
function se(t) {
  var e = ae.call(t, A), r = t[A];
  try {
    t[A] = void 0;
    var n = !0;
  } catch {
  }
  var o = ie.call(t);
  return n && (e ? t[A] = r : delete t[A]), o;
}
var ce = Object.prototype, ue = ce.toString;
function fe(t) {
  return ue.call(t);
}
var le = "[object Null]", pe = "[object Undefined]", it = m ? m.toStringTag : void 0;
function M(t) {
  return t == null ? t === void 0 ? pe : le : it && it in Object(t) ? se(t) : fe(t);
}
function N(t) {
  return t != null && typeof t == "object";
}
var q = Array.isArray;
function D(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var ye = "[object AsyncFunction]", ge = "[object Function]", de = "[object GeneratorFunction]", be = "[object Proxy]";
function It(t) {
  if (!D(t))
    return !1;
  var e = M(t);
  return e == ge || e == de || e == ye || e == be;
}
var z = y["__core-js_shared__"], st = function() {
  var t = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function he(t) {
  return !!st && st in t;
}
var Te = Function.prototype, _e = Te.toString;
function _(t) {
  if (t != null) {
    try {
      return _e.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var je = /[\\^$.*+?()[\]{}|]/g, ve = /^\[object .+?Constructor\]$/, me = Function.prototype, we = Object.prototype, Oe = me.toString, $e = we.hasOwnProperty, Se = RegExp(
  "^" + Oe.call($e).replace(je, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ae(t) {
  if (!D(t) || he(t))
    return !1;
  var e = It(t) ? Se : ve;
  return e.test(_(t));
}
function Pe(t, e) {
  return t == null ? void 0 : t[e];
}
function j(t, e) {
  var r = Pe(t, e);
  return Ae(r) ? r : void 0;
}
var H = j(y, "WeakMap"), ct = Object.create, Ee = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!D(e))
      return {};
    if (ct)
      return ct(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
function xe(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var ut = function() {
  try {
    var t = j(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Ie(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
var Ce = 9007199254740991, Me = /^(?:0|[1-9]\d*)$/;
function Ne(t, e) {
  var r = typeof t;
  return e = e ?? Ce, !!e && (r == "number" || r != "symbol" && Me.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Ct(t, e, r) {
  e == "__proto__" && ut ? ut(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function Mt(t, e) {
  return t === e || t !== t && e !== e;
}
var De = Object.prototype, Fe = De.hasOwnProperty;
function Nt(t, e, r) {
  var n = t[e];
  (!(Fe.call(t, e) && Mt(n, r)) || r === void 0 && !(e in t)) && Ct(t, e, r);
}
function R(t, e, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, i = e.length; ++a < i; ) {
    var u = e[a], f = n ? n(r[u], t[u], u, r, t) : void 0;
    f === void 0 && (f = t[u]), o ? Ct(r, u, f) : Nt(r, u, f);
  }
  return r;
}
var Le = 9007199254740991;
function Dt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Le;
}
function Ft(t) {
  return t != null && Dt(t.length) && !It(t);
}
var Re = Object.prototype;
function X(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Re;
  return t === r;
}
function Be(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var Ue = "[object Arguments]";
function ft(t) {
  return N(t) && M(t) == Ue;
}
var Lt = Object.prototype, Ge = Lt.hasOwnProperty, ze = Lt.propertyIsEnumerable, Ye = ft(/* @__PURE__ */ function() {
  return arguments;
}()) ? ft : function(t) {
  return N(t) && Ge.call(t, "callee") && !ze.call(t, "callee");
};
function He() {
  return !1;
}
var Rt = typeof exports == "object" && exports && !exports.nodeType && exports, lt = Rt && typeof module == "object" && module && !module.nodeType && module, Ke = lt && lt.exports === Rt, pt = Ke ? y.Buffer : void 0, Ve = pt ? pt.isBuffer : void 0, Bt = Ve || He, We = "[object Arguments]", qe = "[object Array]", Xe = "[object Boolean]", Je = "[object Date]", Ze = "[object Error]", Qe = "[object Function]", ke = "[object Map]", tr = "[object Number]", er = "[object Object]", rr = "[object RegExp]", nr = "[object Set]", or = "[object String]", ar = "[object WeakMap]", ir = "[object ArrayBuffer]", sr = "[object DataView]", cr = "[object Float32Array]", ur = "[object Float64Array]", fr = "[object Int8Array]", lr = "[object Int16Array]", pr = "[object Int32Array]", yr = "[object Uint8Array]", gr = "[object Uint8ClampedArray]", dr = "[object Uint16Array]", br = "[object Uint32Array]", c = {};
c[cr] = c[ur] = c[fr] = c[lr] = c[pr] = c[yr] = c[gr] = c[dr] = c[br] = !0;
c[We] = c[qe] = c[ir] = c[Xe] = c[sr] = c[Je] = c[Ze] = c[Qe] = c[ke] = c[tr] = c[er] = c[rr] = c[nr] = c[or] = c[ar] = !1;
function hr(t) {
  return N(t) && Dt(t.length) && !!c[M(t)];
}
function J(t) {
  return function(e) {
    return t(e);
  };
}
var Ut = typeof exports == "object" && exports && !exports.nodeType && exports, P = Ut && typeof module == "object" && module && !module.nodeType && module, Tr = P && P.exports === Ut, Y = Tr && Et.process, w = function() {
  try {
    var t = P && P.require && P.require("util").types;
    return t || Y && Y.binding && Y.binding("util");
  } catch {
  }
}(), yt = w && w.isTypedArray, _r = yt ? J(yt) : hr, jr = Object.prototype, vr = jr.hasOwnProperty;
function Gt(t, e) {
  var r = q(t), n = !r && Ye(t), o = !r && !n && Bt(t), a = !r && !n && !o && _r(t), i = r || n || o || a, u = i ? Be(t.length, String) : [], f = u.length;
  for (var l in t)
    (e || vr.call(t, l)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ne(l, f))) && u.push(l);
  return u;
}
function zt(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var mr = zt(Object.keys, Object), wr = Object.prototype, Or = wr.hasOwnProperty;
function $r(t) {
  if (!X(t))
    return mr(t);
  var e = [];
  for (var r in Object(t))
    Or.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function Z(t) {
  return Ft(t) ? Gt(t) : $r(t);
}
function Sr(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var Ar = Object.prototype, Pr = Ar.hasOwnProperty;
function Er(t) {
  if (!D(t))
    return Sr(t);
  var e = X(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !Pr.call(t, n)) || r.push(n);
  return r;
}
function Q(t) {
  return Ft(t) ? Gt(t, !0) : Er(t);
}
var x = j(Object, "create");
function xr() {
  this.__data__ = x ? x(null) : {}, this.size = 0;
}
function Ir(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Cr = "__lodash_hash_undefined__", Mr = Object.prototype, Nr = Mr.hasOwnProperty;
function Dr(t) {
  var e = this.__data__;
  if (x) {
    var r = e[t];
    return r === Cr ? void 0 : r;
  }
  return Nr.call(e, t) ? e[t] : void 0;
}
var Fr = Object.prototype, Lr = Fr.hasOwnProperty;
function Rr(t) {
  var e = this.__data__;
  return x ? e[t] !== void 0 : Lr.call(e, t);
}
var Br = "__lodash_hash_undefined__";
function Ur(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = x && e === void 0 ? Br : e, this;
}
function T(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = xr;
T.prototype.delete = Ir;
T.prototype.get = Dr;
T.prototype.has = Rr;
T.prototype.set = Ur;
function Gr() {
  this.__data__ = [], this.size = 0;
}
function B(t, e) {
  for (var r = t.length; r--; )
    if (Mt(t[r][0], e))
      return r;
  return -1;
}
var zr = Array.prototype, Yr = zr.splice;
function Hr(t) {
  var e = this.__data__, r = B(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Yr.call(e, r, 1), --this.size, !0;
}
function Kr(t) {
  var e = this.__data__, r = B(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Vr(t) {
  return B(this.__data__, t) > -1;
}
function Wr(t, e) {
  var r = this.__data__, n = B(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function g(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
g.prototype.clear = Gr;
g.prototype.delete = Hr;
g.prototype.get = Kr;
g.prototype.has = Vr;
g.prototype.set = Wr;
var I = j(y, "Map");
function qr() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (I || g)(),
    string: new T()
  };
}
function Xr(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function U(t, e) {
  var r = t.__data__;
  return Xr(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Jr(t) {
  var e = U(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Zr(t) {
  return U(this, t).get(t);
}
function Qr(t) {
  return U(this, t).has(t);
}
function kr(t, e) {
  var r = U(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function O(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
O.prototype.clear = qr;
O.prototype.delete = Jr;
O.prototype.get = Zr;
O.prototype.has = Qr;
O.prototype.set = kr;
function Yt(t, e) {
  for (var r = -1, n = e.length, o = t.length; ++r < n; )
    t[o + r] = e[r];
  return t;
}
var tn = zt(Object.getPrototypeOf, Object);
const Ht = tn;
function en() {
  this.__data__ = new g(), this.size = 0;
}
function rn(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function nn(t) {
  return this.__data__.get(t);
}
function on(t) {
  return this.__data__.has(t);
}
var an = 200;
function sn(t, e) {
  var r = this.__data__;
  if (r instanceof g) {
    var n = r.__data__;
    if (!I || n.length < an - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new O(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function $(t) {
  var e = this.__data__ = new g(t);
  this.size = e.size;
}
$.prototype.clear = en;
$.prototype.delete = rn;
$.prototype.get = nn;
$.prototype.has = on;
$.prototype.set = sn;
function cn(t, e) {
  return t && R(e, Z(e), t);
}
function un(t, e) {
  return t && R(e, Q(e), t);
}
var Kt = typeof exports == "object" && exports && !exports.nodeType && exports, gt = Kt && typeof module == "object" && module && !module.nodeType && module, fn = gt && gt.exports === Kt, dt = fn ? y.Buffer : void 0, bt = dt ? dt.allocUnsafe : void 0;
function ln(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = bt ? bt(r) : new t.constructor(r);
  return t.copy(n), n;
}
function pn(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = 0, a = []; ++r < n; ) {
    var i = t[r];
    e(i, r, t) && (a[o++] = i);
  }
  return a;
}
function Vt() {
  return [];
}
var yn = Object.prototype, gn = yn.propertyIsEnumerable, ht = Object.getOwnPropertySymbols, k = ht ? function(t) {
  return t == null ? [] : (t = Object(t), pn(ht(t), function(e) {
    return gn.call(t, e);
  }));
} : Vt;
function dn(t, e) {
  return R(t, k(t), e);
}
var bn = Object.getOwnPropertySymbols, Wt = bn ? function(t) {
  for (var e = []; t; )
    Yt(e, k(t)), t = Ht(t);
  return e;
} : Vt;
function hn(t, e) {
  return R(t, Wt(t), e);
}
function qt(t, e, r) {
  var n = e(t);
  return q(t) ? n : Yt(n, r(t));
}
function Tn(t) {
  return qt(t, Z, k);
}
function _n(t) {
  return qt(t, Q, Wt);
}
var K = j(y, "DataView"), V = j(y, "Promise"), W = j(y, "Set"), Tt = "[object Map]", jn = "[object Object]", _t = "[object Promise]", jt = "[object Set]", vt = "[object WeakMap]", mt = "[object DataView]", vn = _(K), mn = _(I), wn = _(V), On = _(W), $n = _(H), h = M;
(K && h(new K(new ArrayBuffer(1))) != mt || I && h(new I()) != Tt || V && h(V.resolve()) != _t || W && h(new W()) != jt || H && h(new H()) != vt) && (h = function(t) {
  var e = M(t), r = e == jn ? t.constructor : void 0, n = r ? _(r) : "";
  if (n)
    switch (n) {
      case vn:
        return mt;
      case mn:
        return Tt;
      case wn:
        return _t;
      case On:
        return jt;
      case $n:
        return vt;
    }
  return e;
});
const tt = h;
var Sn = Object.prototype, An = Sn.hasOwnProperty;
function Pn(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && An.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var wt = y.Uint8Array;
function et(t) {
  var e = new t.constructor(t.byteLength);
  return new wt(e).set(new wt(t)), e;
}
function En(t, e) {
  var r = e ? et(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var xn = /\w*$/;
function In(t) {
  var e = new t.constructor(t.source, xn.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Ot = m ? m.prototype : void 0, $t = Ot ? Ot.valueOf : void 0;
function Cn(t) {
  return $t ? Object($t.call(t)) : {};
}
function Mn(t, e) {
  var r = e ? et(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var Nn = "[object Boolean]", Dn = "[object Date]", Fn = "[object Map]", Ln = "[object Number]", Rn = "[object RegExp]", Bn = "[object Set]", Un = "[object String]", Gn = "[object Symbol]", zn = "[object ArrayBuffer]", Yn = "[object DataView]", Hn = "[object Float32Array]", Kn = "[object Float64Array]", Vn = "[object Int8Array]", Wn = "[object Int16Array]", qn = "[object Int32Array]", Xn = "[object Uint8Array]", Jn = "[object Uint8ClampedArray]", Zn = "[object Uint16Array]", Qn = "[object Uint32Array]";
function kn(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case zn:
      return et(t);
    case Nn:
    case Dn:
      return new n(+t);
    case Yn:
      return En(t, r);
    case Hn:
    case Kn:
    case Vn:
    case Wn:
    case qn:
    case Xn:
    case Jn:
    case Zn:
    case Qn:
      return Mn(t, r);
    case Fn:
      return new n();
    case Ln:
    case Un:
      return new n(t);
    case Rn:
      return In(t);
    case Bn:
      return new n();
    case Gn:
      return Cn(t);
  }
}
function to(t) {
  return typeof t.constructor == "function" && !X(t) ? Ee(Ht(t)) : {};
}
var eo = "[object Map]";
function ro(t) {
  return N(t) && tt(t) == eo;
}
var St = w && w.isMap, no = St ? J(St) : ro, oo = "[object Set]";
function ao(t) {
  return N(t) && tt(t) == oo;
}
var At = w && w.isSet, io = At ? J(At) : ao, so = 1, co = 2, uo = 4, Xt = "[object Arguments]", fo = "[object Array]", lo = "[object Boolean]", po = "[object Date]", yo = "[object Error]", Jt = "[object Function]", go = "[object GeneratorFunction]", bo = "[object Map]", ho = "[object Number]", Zt = "[object Object]", To = "[object RegExp]", _o = "[object Set]", jo = "[object String]", vo = "[object Symbol]", mo = "[object WeakMap]", wo = "[object ArrayBuffer]", Oo = "[object DataView]", $o = "[object Float32Array]", So = "[object Float64Array]", Ao = "[object Int8Array]", Po = "[object Int16Array]", Eo = "[object Int32Array]", xo = "[object Uint8Array]", Io = "[object Uint8ClampedArray]", Co = "[object Uint16Array]", Mo = "[object Uint32Array]", s = {};
s[Xt] = s[fo] = s[wo] = s[Oo] = s[lo] = s[po] = s[$o] = s[So] = s[Ao] = s[Po] = s[Eo] = s[bo] = s[ho] = s[Zt] = s[To] = s[_o] = s[jo] = s[vo] = s[xo] = s[Io] = s[Co] = s[Mo] = !0;
s[yo] = s[Jt] = s[mo] = !1;
function E(t, e, r, n, o, a) {
  var i, u = e & so, f = e & co, l = e & uo;
  if (r && (i = o ? r(t, n, o, a) : r(t)), i !== void 0)
    return i;
  if (!D(t))
    return t;
  var S = q(t);
  if (S) {
    if (i = Pn(t), !u)
      return xe(t, i);
  } else {
    var v = tt(t), nt = v == Jt || v == go;
    if (Bt(t))
      return ln(t, u);
    if (v == Zt || v == Xt || nt && !o) {
      if (i = f || nt ? {} : to(t), !u)
        return f ? hn(t, un(i, t)) : dn(t, cn(i, t));
    } else {
      if (!s[v])
        return o ? t : {};
      i = kn(t, v, u);
    }
  }
  a || (a = new $());
  var ot = a.get(t);
  if (ot)
    return ot;
  a.set(t, i), io(t) ? t.forEach(function(d) {
    i.add(E(d, e, r, d, t, a));
  }) : no(t) && t.forEach(function(d, b) {
    i.set(b, E(d, e, r, b, t, a));
  });
  var ne = l ? f ? _n : Tn : f ? Q : Z, at = S ? void 0 : ne(t);
  return Ie(at || t, function(d, b) {
    at && (b = d, d = t[b]), Nt(i, b, E(d, e, r, b, t, a));
  }), i;
}
var No = 1, Do = 4;
function Fo(t) {
  return E(t, No | Do);
}
var Lo = 1, Ro = 4;
function Bo(t, e) {
  return e = typeof e == "function" ? e : void 0, E(t, Lo | Ro, e);
}
const rt = (...t) => t.length === 0 ? !1 : t.every((e) => !(e === "" || e === null || e === void 0 || e === 1 / 0 || e === -1 / 0 || Number.isNaN(e))), p = (t) => t === null ? "null" : Array.isArray(t) ? "array" : typeof t, Uo = (t, e) => {
  const r = (n) => {
    if (p(n) === "array")
      return n.filter((o) => {
        const a = p(o);
        return (a === "array" || a === "object") && (o = r(o)), t(o);
      });
    if (p(n) === "object") {
      for (const o in n)
        t(n[o]) || delete n[o];
      if (e === "array")
        return n;
    } else
      return n;
  };
  return r;
}, Wo = (t, e = rt) => {
  const r = p(t);
  return Bo(t, Uo(e, r));
}, C = (...t) => t.length === 0 ? !1 : t.every((e) => !!Number.isFinite(e)), qo = (t, e = 200) => {
  if (typeof t != "function")
    throw new TypeError('"callback" type must be a function !');
  if (!C(e))
    throw new TypeError('"delay" type must be a number and delay value not "NaN" or "Infinity" or "-Infinity" !');
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => {
      t.apply(this, n);
    }, e);
  };
}, Xo = (t, e = "YYYY-MM-DD hh:mm:ss", r = !1) => {
  let n;
  if (t instanceof Date ? n = t : n = new Date(t), Number.isNaN(n.getTime()))
    throw new TypeError('"time" cannot be converted to a Date object');
  const o = String(n.getFullYear()).padStart(4, "0"), a = String(n.getMonth() + 1).padStart(2, "0"), i = String(n.getDate()).padStart(2, "0"), u = String(n.getHours()).padStart(2, "0"), f = String(n.getMinutes()).padStart(2, "0"), l = String(n.getSeconds()).padStart(2, "0");
  let S = "";
  return r && (S = n.getMilliseconds()), e.replaceAll("YYYY", o).replaceAll("MM", a).replaceAll("DD", i).replaceAll("hh", u).replaceAll("mm", f).replaceAll("ss", l) + S;
}, Jo = (t, e, r) => {
  if (!C(e, r))
    throw new TypeError('"min" and "max" must be a effective number');
  if (Number.isNaN(t) || t !== 1 / 0 && t !== -1 / 0 && !C(t))
    return !1;
  const n = String(t).split(".")[1] || "";
  return n.length >= e && n.length <= r;
}, Go = (...t) => t.length === 0 ? !1 : t.every((e) => !!(Number.isInteger(e) && e > 0)), Zo = Go, Qo = (...t) => t.length === 0 ? !1 : t.every((e) => Number.isInteger(e)), ko = (...t) => t.length === 0 ? !1 : t.every((e) => typeof e == "number"), ta = (...t) => t.length === 0 ? !1 : t.every((e) => typeof e == "string"), zo = (t, e, r = []) => {
  const n = p(t);
  if (!(n === "function" || n === "object" || n === "array"))
    throw new TypeError('"data" must be a `object` or `array` or `function`');
  if (typeof e != "function")
    throw new TypeError('"testFunc" must be a `function`');
  if (p(r) !== "array")
    throw new TypeError('"notTestField" must be a `array`');
  for (let o in t)
    if (!(!Object.prototype.hasOwnProperty.call(t, o) || r.includes(o)) && !e(t[o], o, t))
      return !1;
  return !0;
}, ea = (t, e) => zo(t, (r) => rt(r), e), ra = (t, e = !0) => {
  const r = typeof t;
  if (!(r === "number" || r === "string"))
    return !1;
  if (r === "number")
    return C(t);
  if (t.trim() === "")
    return !1;
  if (e) {
    if (/\s/g.test(t))
      return !1;
    if (t.includes(".")) {
      if (t.substring(0, 2) === "00" || !/[0-9]\.[0-9]/.test(t))
        return !1;
    } else if (t.length > 1 && t[0] === "0")
      return !1;
  }
  return C(Number(t));
}, Yo = (t, e = []) => {
  for (let r in t) {
    if (!Object.prototype.hasOwnProperty.call(t, r) || e.includes(r))
      continue;
    const n = t[r], o = p(n);
    if ((o === "object" || o === "array") && !Yo(n, e) || !rt(n))
      return !1;
  }
  return !0;
}, Qt = Symbol("只读代理标识"), L = Symbol("代理数据:只读"), kt = Symbol("解除只读代理包装"), Ho = Symbol("克隆数据只读代理数据"), F = (t, e = "default") => {
  let r = {};
  const n = p(e);
  if (n === "string")
    Pt(e), r = {
      mode: e,
      unReadOnly: !1,
      repeatReadOnly: !1
    };
  else if (n === "object") {
    let o = e.mode;
    o === void 0 && (o = "default"), Pt(o), r.mode = o, r.unReadOnly = !!e.unReadOnly, r.repeatReadOnly = !!e.repeatReadOnly, r.sign = e.sign;
  } else
    throw new TypeError('"options" must be a string or object');
  return G(t) && !r.repeatReadOnly ? t : new Proxy(t, {
    get(o, a) {
      if (a === L)
        return L;
      if (a === Qt)
        return r.sign;
      if (a === Ho)
        return o;
      if (a === kt) {
        if (r.unReadOnly)
          return o;
        throw new Error('The current data "options.unReadOnly" is false !');
      }
      const i = p(o[a]);
      return i === "function" ? r.mode === "default" ? F(o[a].bind(Ko), e) : F(o[a].bind(o), e) : i === "object" || i === "array" ? F(o[a], e) : o[a];
    },
    set(o) {
      return console.warn(o, "The current data is read-only !"), !0;
    },
    deleteProperty(o) {
      return console.warn(o, "The current data is read-only !"), !0;
    },
    apply(o, a, i) {
      return r.mode === "strict" ? (console.warn(
        o,
        'The current data configuration "options.mode" is "strict" , "strict" mode prohibit calling functions !'
      ), !1) : typeof r.mode == "function" && !r.mode(o, a, i) ? !1 : o.apply(a, i);
    }
  });
}, Pt = (t) => {
  const e = p(t), r = new TypeError('"options.mode" must be a "strict" | "default" | "looseFitting" | function !');
  if (e === "string") {
    if (!["strict", "default", "looseFitting"].includes(t))
      throw r;
    return;
  }
  if (e !== "function")
    throw r;
}, Ko = new Proxy(
  {},
  {
    set(t, e) {
      return console.warn(
        e,
        'The current data configuration "options.mode" is "default" , cannot be changed data through "this" !'
      ), !0;
    }
  }
), te = ["object", "array", "function"], G = (t) => {
  const e = p(t);
  return !(!te.includes(e) || t[L] !== L);
}, ee = (t, e) => G(t) === !1 ? !1 : Object.is(t[Qt], e), Vo = (t) => Fo(t), re = (t, e) => {
  const r = p(t);
  if (!te.includes(r))
    return t;
  if (!ee(t, e))
    throw console.warn(t, 'The current data "sign" is inconsistent !'), new TypeError('The current data "sign" is inconsistent !');
  const n = t[kt];
  return G(n) ? re(n, e) : n;
}, na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkReadOnlySign: ee,
  cloneReadOnlyData: Vo,
  isReadOnly: G,
  readOnly: F,
  unReadOnly: re
}, Symbol.toStringTag, { value: "Module" }));
export {
  na as ReadOnly,
  ee as checkReadOnlySign,
  Fo as cloneDeep,
  Bo as cloneDeepWith,
  Wo as cloneEffectiveValue,
  Vo as cloneReadOnlyData,
  qo as debounce,
  Xo as formatDate,
  Jo as isDecimalLen,
  rt as isEffectiveValue,
  Zo as isId,
  Qo as isInt,
  C as isNum,
  ko as isNumber,
  Go as isPositiveInt,
  G as isReadOnly,
  ra as isStrNum,
  ta as isString,
  zo as isTest,
  p as isType,
  ea as notEmpty,
  Yo as notEmptyDeep,
  F as readOnly,
  re as unReadOnly
};
