var Ee = typeof global == "object" && global && global.Object === Object && global, nt = typeof self == "object" && self && self.Object === Object && self, y = Ee || nt || Function("return this")(), m = y.Symbol, Ie = Object.prototype, ot = Ie.hasOwnProperty, at = Ie.toString, A = m ? m.toStringTag : void 0;
function it(e) {
  var t = ot.call(e, A), r = e[A];
  try {
    e[A] = void 0;
    var n = !0;
  } catch {
  }
  var o = at.call(e);
  return n && (t ? e[A] = r : delete e[A]), o;
}
var st = Object.prototype, ct = st.toString;
function ut(e) {
  return ct.call(e);
}
var ft = "[object Null]", lt = "[object Undefined]", se = m ? m.toStringTag : void 0;
function M(e) {
  return e == null ? e === void 0 ? lt : ft : se && se in Object(e) ? it(e) : ut(e);
}
function N(e) {
  return e != null && typeof e == "object";
}
var q = Array.isArray;
function D(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var pt = "[object AsyncFunction]", yt = "[object Function]", gt = "[object GeneratorFunction]", bt = "[object Proxy]";
function xe(e) {
  if (!D(e))
    return !1;
  var t = M(e);
  return t == yt || t == gt || t == pt || t == bt;
}
var z = y["__core-js_shared__"], ce = function() {
  var e = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dt(e) {
  return !!ce && ce in e;
}
var ht = Function.prototype, Tt = ht.toString;
function _(e) {
  if (e != null) {
    try {
      return Tt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var _t = /[\\^$.*+?()[\]{}|]/g, jt = /^\[object .+?Constructor\]$/, vt = Function.prototype, mt = Object.prototype, $t = vt.toString, Ot = mt.hasOwnProperty, wt = RegExp(
  "^" + $t.call(Ot).replace(_t, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function St(e) {
  if (!D(e) || dt(e))
    return !1;
  var t = xe(e) ? wt : jt;
  return t.test(_(e));
}
function At(e, t) {
  return e == null ? void 0 : e[t];
}
function j(e, t) {
  var r = At(e, t);
  return St(r) ? r : void 0;
}
var H = j(y, "WeakMap"), ue = Object.create, Pt = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!D(t))
      return {};
    if (ue)
      return ue(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Et(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var fe = function() {
  try {
    var e = j(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function It(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var xt = 9007199254740991, Ct = /^(?:0|[1-9]\d*)$/;
function Mt(e, t) {
  var r = typeof e;
  return t = t ?? xt, !!t && (r == "number" || r != "symbol" && Ct.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ce(e, t, r) {
  t == "__proto__" && fe ? fe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Me(e, t) {
  return e === t || e !== e && t !== t;
}
var Nt = Object.prototype, Dt = Nt.hasOwnProperty;
function Ne(e, t, r) {
  var n = e[t];
  (!(Dt.call(e, t) && Me(n, r)) || r === void 0 && !(t in e)) && Ce(e, t, r);
}
function R(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, c = t.length; ++a < c; ) {
    var u = t[a], f = n ? n(r[u], e[u], u, r, e) : void 0;
    f === void 0 && (f = e[u]), o ? Ce(r, u, f) : Ne(r, u, f);
  }
  return r;
}
var Ft = 9007199254740991;
function De(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ft;
}
function Fe(e) {
  return e != null && De(e.length) && !xe(e);
}
var Lt = Object.prototype;
function X(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Lt;
  return e === r;
}
function Rt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Bt = "[object Arguments]";
function le(e) {
  return N(e) && M(e) == Bt;
}
var Le = Object.prototype, Ut = Le.hasOwnProperty, Gt = Le.propertyIsEnumerable, zt = le(/* @__PURE__ */ function() {
  return arguments;
}()) ? le : function(e) {
  return N(e) && Ut.call(e, "callee") && !Gt.call(e, "callee");
};
function Yt() {
  return !1;
}
var Re = typeof exports == "object" && exports && !exports.nodeType && exports, pe = Re && typeof module == "object" && module && !module.nodeType && module, Ht = pe && pe.exports === Re, ye = Ht ? y.Buffer : void 0, Kt = ye ? ye.isBuffer : void 0, Be = Kt || Yt, Vt = "[object Arguments]", Wt = "[object Array]", qt = "[object Boolean]", Xt = "[object Date]", Jt = "[object Error]", Zt = "[object Function]", Qt = "[object Map]", kt = "[object Number]", er = "[object Object]", tr = "[object RegExp]", rr = "[object Set]", nr = "[object String]", or = "[object WeakMap]", ar = "[object ArrayBuffer]", ir = "[object DataView]", sr = "[object Float32Array]", cr = "[object Float64Array]", ur = "[object Int8Array]", fr = "[object Int16Array]", lr = "[object Int32Array]", pr = "[object Uint8Array]", yr = "[object Uint8ClampedArray]", gr = "[object Uint16Array]", br = "[object Uint32Array]", s = {};
s[sr] = s[cr] = s[ur] = s[fr] = s[lr] = s[pr] = s[yr] = s[gr] = s[br] = !0;
s[Vt] = s[Wt] = s[ar] = s[qt] = s[ir] = s[Xt] = s[Jt] = s[Zt] = s[Qt] = s[kt] = s[er] = s[tr] = s[rr] = s[nr] = s[or] = !1;
function dr(e) {
  return N(e) && De(e.length) && !!s[M(e)];
}
function J(e) {
  return function(t) {
    return e(t);
  };
}
var Ue = typeof exports == "object" && exports && !exports.nodeType && exports, P = Ue && typeof module == "object" && module && !module.nodeType && module, hr = P && P.exports === Ue, Y = hr && Ee.process, $ = function() {
  try {
    var e = P && P.require && P.require("util").types;
    return e || Y && Y.binding && Y.binding("util");
  } catch {
  }
}(), ge = $ && $.isTypedArray, Tr = ge ? J(ge) : dr, _r = Object.prototype, jr = _r.hasOwnProperty;
function Ge(e, t) {
  var r = q(e), n = !r && zt(e), o = !r && !n && Be(e), a = !r && !n && !o && Tr(e), c = r || n || o || a, u = c ? Rt(e.length, String) : [], f = u.length;
  for (var l in e)
    (t || jr.call(e, l)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Mt(l, f))) && u.push(l);
  return u;
}
function ze(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var vr = ze(Object.keys, Object), mr = Object.prototype, $r = mr.hasOwnProperty;
function Or(e) {
  if (!X(e))
    return vr(e);
  var t = [];
  for (var r in Object(e))
    $r.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Z(e) {
  return Fe(e) ? Ge(e) : Or(e);
}
function wr(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Sr = Object.prototype, Ar = Sr.hasOwnProperty;
function Pr(e) {
  if (!D(e))
    return wr(e);
  var t = X(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Ar.call(e, n)) || r.push(n);
  return r;
}
function Q(e) {
  return Fe(e) ? Ge(e, !0) : Pr(e);
}
var I = j(Object, "create");
function Er() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function Ir(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xr = "__lodash_hash_undefined__", Cr = Object.prototype, Mr = Cr.hasOwnProperty;
function Nr(e) {
  var t = this.__data__;
  if (I) {
    var r = t[e];
    return r === xr ? void 0 : r;
  }
  return Mr.call(t, e) ? t[e] : void 0;
}
var Dr = Object.prototype, Fr = Dr.hasOwnProperty;
function Lr(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : Fr.call(t, e);
}
var Rr = "__lodash_hash_undefined__";
function Br(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = I && t === void 0 ? Rr : t, this;
}
function T(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = Er;
T.prototype.delete = Ir;
T.prototype.get = Nr;
T.prototype.has = Lr;
T.prototype.set = Br;
function Ur() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var r = e.length; r--; )
    if (Me(e[r][0], t))
      return r;
  return -1;
}
var Gr = Array.prototype, zr = Gr.splice;
function Yr(e) {
  var t = this.__data__, r = B(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : zr.call(t, r, 1), --this.size, !0;
}
function Hr(e) {
  var t = this.__data__, r = B(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Kr(e) {
  return B(this.__data__, e) > -1;
}
function Vr(e, t) {
  var r = this.__data__, n = B(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function g(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
g.prototype.clear = Ur;
g.prototype.delete = Yr;
g.prototype.get = Hr;
g.prototype.has = Kr;
g.prototype.set = Vr;
var x = j(y, "Map");
function Wr() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (x || g)(),
    string: new T()
  };
}
function qr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var r = e.__data__;
  return qr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Xr(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Jr(e) {
  return U(this, e).get(e);
}
function Zr(e) {
  return U(this, e).has(e);
}
function Qr(e, t) {
  var r = U(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function O(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
O.prototype.clear = Wr;
O.prototype.delete = Xr;
O.prototype.get = Jr;
O.prototype.has = Zr;
O.prototype.set = Qr;
function Ye(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var kr = ze(Object.getPrototypeOf, Object);
const He = kr;
function en() {
  this.__data__ = new g(), this.size = 0;
}
function tn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function rn(e) {
  return this.__data__.get(e);
}
function nn(e) {
  return this.__data__.has(e);
}
var on = 200;
function an(e, t) {
  var r = this.__data__;
  if (r instanceof g) {
    var n = r.__data__;
    if (!x || n.length < on - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new O(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function w(e) {
  var t = this.__data__ = new g(e);
  this.size = t.size;
}
w.prototype.clear = en;
w.prototype.delete = tn;
w.prototype.get = rn;
w.prototype.has = nn;
w.prototype.set = an;
function sn(e, t) {
  return e && R(t, Z(t), e);
}
function cn(e, t) {
  return e && R(t, Q(t), e);
}
var Ke = typeof exports == "object" && exports && !exports.nodeType && exports, be = Ke && typeof module == "object" && module && !module.nodeType && module, un = be && be.exports === Ke, de = un ? y.Buffer : void 0, he = de ? de.allocUnsafe : void 0;
function fn(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = he ? he(r) : new e.constructor(r);
  return e.copy(n), n;
}
function ln(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var c = e[r];
    t(c, r, e) && (a[o++] = c);
  }
  return a;
}
function Ve() {
  return [];
}
var pn = Object.prototype, yn = pn.propertyIsEnumerable, Te = Object.getOwnPropertySymbols, k = Te ? function(e) {
  return e == null ? [] : (e = Object(e), ln(Te(e), function(t) {
    return yn.call(e, t);
  }));
} : Ve;
function gn(e, t) {
  return R(e, k(e), t);
}
var bn = Object.getOwnPropertySymbols, We = bn ? function(e) {
  for (var t = []; e; )
    Ye(t, k(e)), e = He(e);
  return t;
} : Ve;
function dn(e, t) {
  return R(e, We(e), t);
}
function qe(e, t, r) {
  var n = t(e);
  return q(e) ? n : Ye(n, r(e));
}
function hn(e) {
  return qe(e, Z, k);
}
function Tn(e) {
  return qe(e, Q, We);
}
var K = j(y, "DataView"), V = j(y, "Promise"), W = j(y, "Set"), _e = "[object Map]", _n = "[object Object]", je = "[object Promise]", ve = "[object Set]", me = "[object WeakMap]", $e = "[object DataView]", jn = _(K), vn = _(x), mn = _(V), $n = _(W), On = _(H), h = M;
(K && h(new K(new ArrayBuffer(1))) != $e || x && h(new x()) != _e || V && h(V.resolve()) != je || W && h(new W()) != ve || H && h(new H()) != me) && (h = function(e) {
  var t = M(e), r = t == _n ? e.constructor : void 0, n = r ? _(r) : "";
  if (n)
    switch (n) {
      case jn:
        return $e;
      case vn:
        return _e;
      case mn:
        return je;
      case $n:
        return ve;
      case On:
        return me;
    }
  return t;
});
const ee = h;
var wn = Object.prototype, Sn = wn.hasOwnProperty;
function An(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Sn.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Oe = y.Uint8Array;
function te(e) {
  var t = new e.constructor(e.byteLength);
  return new Oe(t).set(new Oe(e)), t;
}
function Pn(e, t) {
  var r = t ? te(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var En = /\w*$/;
function In(e) {
  var t = new e.constructor(e.source, En.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var we = m ? m.prototype : void 0, Se = we ? we.valueOf : void 0;
function xn(e) {
  return Se ? Object(Se.call(e)) : {};
}
function Cn(e, t) {
  var r = t ? te(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Mn = "[object Boolean]", Nn = "[object Date]", Dn = "[object Map]", Fn = "[object Number]", Ln = "[object RegExp]", Rn = "[object Set]", Bn = "[object String]", Un = "[object Symbol]", Gn = "[object ArrayBuffer]", zn = "[object DataView]", Yn = "[object Float32Array]", Hn = "[object Float64Array]", Kn = "[object Int8Array]", Vn = "[object Int16Array]", Wn = "[object Int32Array]", qn = "[object Uint8Array]", Xn = "[object Uint8ClampedArray]", Jn = "[object Uint16Array]", Zn = "[object Uint32Array]";
function Qn(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Gn:
      return te(e);
    case Mn:
    case Nn:
      return new n(+e);
    case zn:
      return Pn(e, r);
    case Yn:
    case Hn:
    case Kn:
    case Vn:
    case Wn:
    case qn:
    case Xn:
    case Jn:
    case Zn:
      return Cn(e, r);
    case Dn:
      return new n();
    case Fn:
    case Bn:
      return new n(e);
    case Ln:
      return In(e);
    case Rn:
      return new n();
    case Un:
      return xn(e);
  }
}
function kn(e) {
  return typeof e.constructor == "function" && !X(e) ? Pt(He(e)) : {};
}
var eo = "[object Map]";
function to(e) {
  return N(e) && ee(e) == eo;
}
var Ae = $ && $.isMap, ro = Ae ? J(Ae) : to, no = "[object Set]";
function oo(e) {
  return N(e) && ee(e) == no;
}
var Pe = $ && $.isSet, ao = Pe ? J(Pe) : oo, io = 1, so = 2, co = 4, Xe = "[object Arguments]", uo = "[object Array]", fo = "[object Boolean]", lo = "[object Date]", po = "[object Error]", Je = "[object Function]", yo = "[object GeneratorFunction]", go = "[object Map]", bo = "[object Number]", Ze = "[object Object]", ho = "[object RegExp]", To = "[object Set]", _o = "[object String]", jo = "[object Symbol]", vo = "[object WeakMap]", mo = "[object ArrayBuffer]", $o = "[object DataView]", Oo = "[object Float32Array]", wo = "[object Float64Array]", So = "[object Int8Array]", Ao = "[object Int16Array]", Po = "[object Int32Array]", Eo = "[object Uint8Array]", Io = "[object Uint8ClampedArray]", xo = "[object Uint16Array]", Co = "[object Uint32Array]", i = {};
i[Xe] = i[uo] = i[mo] = i[$o] = i[fo] = i[lo] = i[Oo] = i[wo] = i[So] = i[Ao] = i[Po] = i[go] = i[bo] = i[Ze] = i[ho] = i[To] = i[_o] = i[jo] = i[Eo] = i[Io] = i[xo] = i[Co] = !0;
i[po] = i[Je] = i[vo] = !1;
function E(e, t, r, n, o, a) {
  var c, u = t & io, f = t & so, l = t & co;
  if (r && (c = o ? r(e, n, o, a) : r(e)), c !== void 0)
    return c;
  if (!D(e))
    return e;
  var S = q(e);
  if (S) {
    if (c = An(e), !u)
      return Et(e, c);
  } else {
    var v = ee(e), oe = v == Je || v == yo;
    if (Be(e))
      return fn(e, u);
    if (v == Ze || v == Xe || oe && !o) {
      if (c = f || oe ? {} : kn(e), !u)
        return f ? dn(e, cn(c, e)) : gn(e, sn(c, e));
    } else {
      if (!i[v])
        return o ? e : {};
      c = Qn(e, v, u);
    }
  }
  a || (a = new w());
  var ae = a.get(e);
  if (ae)
    return ae;
  a.set(e, c), ao(e) ? e.forEach(function(b) {
    c.add(E(b, t, r, b, e, a));
  }) : ro(e) && e.forEach(function(b, d) {
    c.set(d, E(b, t, r, d, e, a));
  });
  var rt = l ? f ? Tn : hn : f ? Q : Z, ie = S ? void 0 : rt(e);
  return It(ie || e, function(b, d) {
    ie && (d = b, b = e[d]), Ne(c, d, E(b, t, r, d, e, a));
  }), c;
}
var Mo = 1, No = 4;
function Do(e) {
  return E(e, Mo | No);
}
var Fo = 1, Lo = 4;
function Ro(e, t) {
  return t = typeof t == "function" ? t : void 0, E(e, Fo | Lo, t);
}
const re = (...e) => e.length === 0 ? !1 : e.every((t) => !(t === "" || t === null || t === void 0 || t === 1 / 0 || t === -1 / 0 || Number.isNaN(t))), p = (e) => e === null ? "null" : Array.isArray(e) ? "array" : typeof e, Bo = (e, t) => {
  const r = (n) => {
    if (p(n) === "array")
      return n.filter((o) => {
        const a = p(o);
        return (a === "array" || a === "object") && (o = r(o)), e(o);
      });
    if (p(n) === "object") {
      for (const o in n)
        e(n[o]) || delete n[o];
      if (t === "array")
        return n;
    } else
      return n;
  };
  return r;
}, Yo = (e, t = re) => {
  const r = p(e);
  return Ro(e, Bo(t, r));
}, C = (...e) => e.length === 0 ? !1 : e.every((t) => !!Number.isFinite(t)), Ho = (e, t = 200) => {
  if (typeof e != "function")
    throw new TypeError('"callback" type must be a function !');
  if (!C(t))
    throw new TypeError('"delay" type must be a number and delay value not "NaN" or "Infinity" or "-Infinity" !');
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => {
      e.apply(this, n);
    }, t);
  };
}, Ko = (e, t = "YYYY-MM-DD hh:mm:ss", r = !1) => {
  let n;
  if (e instanceof Date ? n = e : n = new Date(e), Number.isNaN(n.getTime()))
    throw new TypeError('"time" cannot be converted to a Date object');
  const o = String(n.getFullYear()).padStart(4, "0"), a = String(n.getMonth() + 1).padStart(2, "0"), c = String(n.getDate()).padStart(2, "0"), u = String(n.getHours()).padStart(2, "0"), f = String(n.getMinutes()).padStart(2, "0"), l = String(n.getSeconds()).padStart(2, "0");
  let S = "";
  return r && (S = n.getMilliseconds()), t.replaceAll("YYYY", o).replaceAll("MM", a).replaceAll("DD", c).replaceAll("hh", u).replaceAll("mm", f).replaceAll("ss", l) + S;
}, Vo = (e, t, r) => {
  if (!C(t, r))
    throw new TypeError('"min" and "max" must be a effective number');
  if (Number.isNaN(e) || e !== 1 / 0 && e !== -1 / 0 && !C(e))
    return !1;
  const n = String(e).split(".")[1] || "";
  return n.length >= t && n.length <= r;
}, Uo = (...e) => e.length === 0 ? !1 : e.every((t) => !!(Number.isInteger(t) && t > 0)), Wo = Uo, qo = (...e) => e.length === 0 ? !1 : e.every((t) => Number.isInteger(t)), Xo = (...e) => e.length === 0 ? !1 : e.every((t) => typeof t == "number"), Jo = (...e) => e.length === 0 ? !1 : e.every((t) => typeof t == "string"), Go = (e, t, r = []) => {
  const n = p(e);
  if (!(n === "function" || n === "object" || n === "array"))
    throw new TypeError('"data" must be a `object` or `array` or `function`');
  if (typeof t != "function")
    throw new TypeError('"testFunc" must be a `function`');
  if (p(r) !== "array")
    throw new TypeError('"notTestField" must be a `array`');
  for (let o in e)
    if (!(!Object.prototype.hasOwnProperty.call(e, o) || r.includes(o)) && !t(e[o], o, e))
      return !1;
  return !0;
}, Zo = (e, t) => Go(e, (r) => re(r), t), Qo = (e, t = !0) => {
  const r = typeof e;
  if (!(r === "number" || r === "string"))
    return !1;
  if (r === "number")
    return C(e);
  if (e.trim() === "")
    return !1;
  if (t) {
    if (/\s/g.test(e))
      return !1;
    if (e.includes(".")) {
      if (e.substring(0, 2) === "00" || !/[0-9]\.[0-9]/.test(e))
        return !1;
    } else if (e.length > 1 && e[0] === "0")
      return !1;
  }
  return C(Number(e));
}, zo = (e, t = []) => {
  for (let r in e) {
    if (!Object.prototype.hasOwnProperty.call(e, r) || t.includes(r))
      continue;
    const n = e[r], o = p(n);
    if ((o === "object" || o === "array") && !zo(n, t) || !re(n))
      return !1;
  }
  return !0;
}, L = Symbol("代理数据:只读"), Qe = Symbol("克隆数据"), ke = Symbol("解除只读包装"), F = (e, t = "default") => {
  const r = p(t);
  if (r === "string")
    t = {
      mode: t,
      unReadOnly: !1,
      repeatReadOnly: !1
    };
  else if (r === "object")
    t.mode === void 0 && (t.mode = "default"), t.unReadOnly = !!t.unReadOnly, t.repeatReadOnly = !!t.repeatReadOnly;
  else
    throw new TypeError('"options" must be a string or object');
  return G(e) && !t.repeatReadOnly ? e : new Proxy(e, {
    get(n, o) {
      if (o === L)
        return L;
      if (o === Qe)
        return n;
      if (o === ke) {
        if (t.unReadOnly)
          return n;
        throw new Error('The current data "options.unReadOnly" is false !');
      }
      const a = p(n[o]);
      return a === "function" ? t.mode === "default" ? F(n[o], t) : F(n[o].bind(n), t) : a === "object" || a === "array" ? F(n[o], t) : n[o];
    },
    set(n) {
      return console.warn(n, "The current data is read-only !"), !0;
    },
    deleteProperty(n) {
      return console.warn(n, "The current data is read-only !"), !0;
    },
    apply(n, o, a) {
      return t.mode === "strict" ? (console.warn(n, '"strict" mode prohibit calling functions !'), !1) : typeof t.mode == "function" && !t.mode(n, o, a) ? !1 : n.apply(o, a);
    }
  });
}, ne = ["object", "array", "function"], G = (e) => {
  const t = p(e);
  return !(!ne.includes(t) || e[L] !== L);
}, et = (e) => {
  const t = p(e);
  if (!ne.includes(t))
    return e;
  const r = e[Qe];
  return G(r) ? et(r) : Do(r);
}, tt = (e) => {
  const t = p(e);
  if (!ne.includes(t))
    return e;
  const r = e[ke];
  return G(r) ? tt(r) : r;
}, ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cloneReadOnlyData: et,
  isReadOnly: G,
  readOnly: F,
  unReadOnly: tt
}, Symbol.toStringTag, { value: "Module" }));
export {
  ko as ReadOnly,
  Yo as cloneEffectiveValue,
  et as cloneReadOnlyData,
  Ho as debounce,
  Ko as formatDate,
  Vo as isDecimalLen,
  re as isEffectiveValue,
  Wo as isId,
  qo as isInt,
  C as isNum,
  Xo as isNumber,
  Uo as isPositiveInt,
  G as isReadOnly,
  Qo as isStrNum,
  Jo as isString,
  Go as isTest,
  p as isType,
  Zo as notEmpty,
  zo as notEmptyDeep,
  F as readOnly,
  tt as unReadOnly
};
