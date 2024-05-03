var Ie = typeof global == "object" && global && global.Object === Object && global, rt = typeof self == "object" && self && self.Object === Object && self, y = Ie || rt || Function("return this")(), m = y.Symbol, xe = Object.prototype, nt = xe.hasOwnProperty, ot = xe.toString, A = m ? m.toStringTag : void 0;
function at(e) {
  var t = nt.call(e, A), r = e[A];
  try {
    e[A] = void 0;
    var n = !0;
  } catch {
  }
  var o = ot.call(e);
  return n && (t ? e[A] = r : delete e[A]), o;
}
var it = Object.prototype, st = it.toString;
function ct(e) {
  return st.call(e);
}
var ut = "[object Null]", ft = "[object Undefined]", ce = m ? m.toStringTag : void 0;
function M(e) {
  return e == null ? e === void 0 ? ft : ut : ce && ce in Object(e) ? at(e) : ct(e);
}
function N(e) {
  return e != null && typeof e == "object";
}
var q = Array.isArray;
function D(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var lt = "[object AsyncFunction]", pt = "[object Function]", yt = "[object GeneratorFunction]", gt = "[object Proxy]";
function Ce(e) {
  if (!D(e))
    return !1;
  var t = M(e);
  return t == pt || t == yt || t == lt || t == gt;
}
var z = y["__core-js_shared__"], ue = function() {
  var e = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function bt(e) {
  return !!ue && ue in e;
}
var dt = Function.prototype, ht = dt.toString;
function _(e) {
  if (e != null) {
    try {
      return ht.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tt = /[\\^$.*+?()[\]{}|]/g, _t = /^\[object .+?Constructor\]$/, jt = Function.prototype, vt = Object.prototype, mt = jt.toString, $t = vt.hasOwnProperty, Ot = RegExp(
  "^" + mt.call($t).replace(Tt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wt(e) {
  if (!D(e) || bt(e))
    return !1;
  var t = Ce(e) ? Ot : _t;
  return t.test(_(e));
}
function St(e, t) {
  return e == null ? void 0 : e[t];
}
function j(e, t) {
  var r = St(e, t);
  return wt(r) ? r : void 0;
}
var H = j(y, "WeakMap"), fe = Object.create, At = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!D(t))
      return {};
    if (fe)
      return fe(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Pt(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var le = function() {
  try {
    var e = j(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Et(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var It = 9007199254740991, xt = /^(?:0|[1-9]\d*)$/;
function Ct(e, t) {
  var r = typeof e;
  return t = t ?? It, !!t && (r == "number" || r != "symbol" && xt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Me(e, t, r) {
  t == "__proto__" && le ? le(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Ne(e, t) {
  return e === t || e !== e && t !== t;
}
var Mt = Object.prototype, Nt = Mt.hasOwnProperty;
function De(e, t, r) {
  var n = e[t];
  (!(Nt.call(e, t) && Ne(n, r)) || r === void 0 && !(t in e)) && Me(e, t, r);
}
function R(e, t, r, n) {
  var o = !r;
  r || (r = {});
  for (var a = -1, c = t.length; ++a < c; ) {
    var u = t[a], f = n ? n(r[u], e[u], u, r, e) : void 0;
    f === void 0 && (f = e[u]), o ? Me(r, u, f) : De(r, u, f);
  }
  return r;
}
var Dt = 9007199254740991;
function Fe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Dt;
}
function Le(e) {
  return e != null && Fe(e.length) && !Ce(e);
}
var Ft = Object.prototype;
function X(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ft;
  return e === r;
}
function Lt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Rt = "[object Arguments]";
function pe(e) {
  return N(e) && M(e) == Rt;
}
var Re = Object.prototype, Bt = Re.hasOwnProperty, Ut = Re.propertyIsEnumerable, Gt = pe(/* @__PURE__ */ function() {
  return arguments;
}()) ? pe : function(e) {
  return N(e) && Bt.call(e, "callee") && !Ut.call(e, "callee");
};
function zt() {
  return !1;
}
var Be = typeof exports == "object" && exports && !exports.nodeType && exports, ye = Be && typeof module == "object" && module && !module.nodeType && module, Yt = ye && ye.exports === Be, ge = Yt ? y.Buffer : void 0, Ht = ge ? ge.isBuffer : void 0, Ue = Ht || zt, Kt = "[object Arguments]", Vt = "[object Array]", Wt = "[object Boolean]", qt = "[object Date]", Xt = "[object Error]", Jt = "[object Function]", Zt = "[object Map]", Qt = "[object Number]", kt = "[object Object]", er = "[object RegExp]", tr = "[object Set]", rr = "[object String]", nr = "[object WeakMap]", or = "[object ArrayBuffer]", ar = "[object DataView]", ir = "[object Float32Array]", sr = "[object Float64Array]", cr = "[object Int8Array]", ur = "[object Int16Array]", fr = "[object Int32Array]", lr = "[object Uint8Array]", pr = "[object Uint8ClampedArray]", yr = "[object Uint16Array]", gr = "[object Uint32Array]", s = {};
s[ir] = s[sr] = s[cr] = s[ur] = s[fr] = s[lr] = s[pr] = s[yr] = s[gr] = !0;
s[Kt] = s[Vt] = s[or] = s[Wt] = s[ar] = s[qt] = s[Xt] = s[Jt] = s[Zt] = s[Qt] = s[kt] = s[er] = s[tr] = s[rr] = s[nr] = !1;
function br(e) {
  return N(e) && Fe(e.length) && !!s[M(e)];
}
function J(e) {
  return function(t) {
    return e(t);
  };
}
var Ge = typeof exports == "object" && exports && !exports.nodeType && exports, P = Ge && typeof module == "object" && module && !module.nodeType && module, dr = P && P.exports === Ge, Y = dr && Ie.process, $ = function() {
  try {
    var e = P && P.require && P.require("util").types;
    return e || Y && Y.binding && Y.binding("util");
  } catch {
  }
}(), be = $ && $.isTypedArray, hr = be ? J(be) : br, Tr = Object.prototype, _r = Tr.hasOwnProperty;
function ze(e, t) {
  var r = q(e), n = !r && Gt(e), o = !r && !n && Ue(e), a = !r && !n && !o && hr(e), c = r || n || o || a, u = c ? Lt(e.length, String) : [], f = u.length;
  for (var l in e)
    (t || _r.call(e, l)) && !(c && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ct(l, f))) && u.push(l);
  return u;
}
function Ye(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var jr = Ye(Object.keys, Object), vr = Object.prototype, mr = vr.hasOwnProperty;
function $r(e) {
  if (!X(e))
    return jr(e);
  var t = [];
  for (var r in Object(e))
    mr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Z(e) {
  return Le(e) ? ze(e) : $r(e);
}
function Or(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var wr = Object.prototype, Sr = wr.hasOwnProperty;
function Ar(e) {
  if (!D(e))
    return Or(e);
  var t = X(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Sr.call(e, n)) || r.push(n);
  return r;
}
function Q(e) {
  return Le(e) ? ze(e, !0) : Ar(e);
}
var I = j(Object, "create");
function Pr() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function Er(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ir = "__lodash_hash_undefined__", xr = Object.prototype, Cr = xr.hasOwnProperty;
function Mr(e) {
  var t = this.__data__;
  if (I) {
    var r = t[e];
    return r === Ir ? void 0 : r;
  }
  return Cr.call(t, e) ? t[e] : void 0;
}
var Nr = Object.prototype, Dr = Nr.hasOwnProperty;
function Fr(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : Dr.call(t, e);
}
var Lr = "__lodash_hash_undefined__";
function Rr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = I && t === void 0 ? Lr : t, this;
}
function T(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = Pr;
T.prototype.delete = Er;
T.prototype.get = Mr;
T.prototype.has = Fr;
T.prototype.set = Rr;
function Br() {
  this.__data__ = [], this.size = 0;
}
function B(e, t) {
  for (var r = e.length; r--; )
    if (Ne(e[r][0], t))
      return r;
  return -1;
}
var Ur = Array.prototype, Gr = Ur.splice;
function zr(e) {
  var t = this.__data__, r = B(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Gr.call(t, r, 1), --this.size, !0;
}
function Yr(e) {
  var t = this.__data__, r = B(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Hr(e) {
  return B(this.__data__, e) > -1;
}
function Kr(e, t) {
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
g.prototype.clear = Br;
g.prototype.delete = zr;
g.prototype.get = Yr;
g.prototype.has = Hr;
g.prototype.set = Kr;
var x = j(y, "Map");
function Vr() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (x || g)(),
    string: new T()
  };
}
function Wr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var r = e.__data__;
  return Wr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function qr(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Xr(e) {
  return U(this, e).get(e);
}
function Jr(e) {
  return U(this, e).has(e);
}
function Zr(e, t) {
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
O.prototype.clear = Vr;
O.prototype.delete = qr;
O.prototype.get = Xr;
O.prototype.has = Jr;
O.prototype.set = Zr;
function He(e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n; )
    e[o + r] = t[r];
  return e;
}
var Qr = Ye(Object.getPrototypeOf, Object);
const Ke = Qr;
function kr() {
  this.__data__ = new g(), this.size = 0;
}
function en(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function tn(e) {
  return this.__data__.get(e);
}
function rn(e) {
  return this.__data__.has(e);
}
var nn = 200;
function on(e, t) {
  var r = this.__data__;
  if (r instanceof g) {
    var n = r.__data__;
    if (!x || n.length < nn - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new O(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function w(e) {
  var t = this.__data__ = new g(e);
  this.size = t.size;
}
w.prototype.clear = kr;
w.prototype.delete = en;
w.prototype.get = tn;
w.prototype.has = rn;
w.prototype.set = on;
function an(e, t) {
  return e && R(t, Z(t), e);
}
function sn(e, t) {
  return e && R(t, Q(t), e);
}
var Ve = typeof exports == "object" && exports && !exports.nodeType && exports, de = Ve && typeof module == "object" && module && !module.nodeType && module, cn = de && de.exports === Ve, he = cn ? y.Buffer : void 0, Te = he ? he.allocUnsafe : void 0;
function un(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Te ? Te(r) : new e.constructor(r);
  return e.copy(n), n;
}
function fn(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++r < n; ) {
    var c = e[r];
    t(c, r, e) && (a[o++] = c);
  }
  return a;
}
function We() {
  return [];
}
var ln = Object.prototype, pn = ln.propertyIsEnumerable, _e = Object.getOwnPropertySymbols, k = _e ? function(e) {
  return e == null ? [] : (e = Object(e), fn(_e(e), function(t) {
    return pn.call(e, t);
  }));
} : We;
function yn(e, t) {
  return R(e, k(e), t);
}
var gn = Object.getOwnPropertySymbols, qe = gn ? function(e) {
  for (var t = []; e; )
    He(t, k(e)), e = Ke(e);
  return t;
} : We;
function bn(e, t) {
  return R(e, qe(e), t);
}
function Xe(e, t, r) {
  var n = t(e);
  return q(e) ? n : He(n, r(e));
}
function dn(e) {
  return Xe(e, Z, k);
}
function hn(e) {
  return Xe(e, Q, qe);
}
var K = j(y, "DataView"), V = j(y, "Promise"), W = j(y, "Set"), je = "[object Map]", Tn = "[object Object]", ve = "[object Promise]", me = "[object Set]", $e = "[object WeakMap]", Oe = "[object DataView]", _n = _(K), jn = _(x), vn = _(V), mn = _(W), $n = _(H), h = M;
(K && h(new K(new ArrayBuffer(1))) != Oe || x && h(new x()) != je || V && h(V.resolve()) != ve || W && h(new W()) != me || H && h(new H()) != $e) && (h = function(e) {
  var t = M(e), r = t == Tn ? e.constructor : void 0, n = r ? _(r) : "";
  if (n)
    switch (n) {
      case _n:
        return Oe;
      case jn:
        return je;
      case vn:
        return ve;
      case mn:
        return me;
      case $n:
        return $e;
    }
  return t;
});
const ee = h;
var On = Object.prototype, wn = On.hasOwnProperty;
function Sn(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && wn.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var we = y.Uint8Array;
function te(e) {
  var t = new e.constructor(e.byteLength);
  return new we(t).set(new we(e)), t;
}
function An(e, t) {
  var r = t ? te(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var Pn = /\w*$/;
function En(e) {
  var t = new e.constructor(e.source, Pn.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var Se = m ? m.prototype : void 0, Ae = Se ? Se.valueOf : void 0;
function In(e) {
  return Ae ? Object(Ae.call(e)) : {};
}
function xn(e, t) {
  var r = t ? te(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var Cn = "[object Boolean]", Mn = "[object Date]", Nn = "[object Map]", Dn = "[object Number]", Fn = "[object RegExp]", Ln = "[object Set]", Rn = "[object String]", Bn = "[object Symbol]", Un = "[object ArrayBuffer]", Gn = "[object DataView]", zn = "[object Float32Array]", Yn = "[object Float64Array]", Hn = "[object Int8Array]", Kn = "[object Int16Array]", Vn = "[object Int32Array]", Wn = "[object Uint8Array]", qn = "[object Uint8ClampedArray]", Xn = "[object Uint16Array]", Jn = "[object Uint32Array]";
function Zn(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Un:
      return te(e);
    case Cn:
    case Mn:
      return new n(+e);
    case Gn:
      return An(e, r);
    case zn:
    case Yn:
    case Hn:
    case Kn:
    case Vn:
    case Wn:
    case qn:
    case Xn:
    case Jn:
      return xn(e, r);
    case Nn:
      return new n();
    case Dn:
    case Rn:
      return new n(e);
    case Fn:
      return En(e);
    case Ln:
      return new n();
    case Bn:
      return In(e);
  }
}
function Qn(e) {
  return typeof e.constructor == "function" && !X(e) ? At(Ke(e)) : {};
}
var kn = "[object Map]";
function eo(e) {
  return N(e) && ee(e) == kn;
}
var Pe = $ && $.isMap, to = Pe ? J(Pe) : eo, ro = "[object Set]";
function no(e) {
  return N(e) && ee(e) == ro;
}
var Ee = $ && $.isSet, oo = Ee ? J(Ee) : no, ao = 1, io = 2, so = 4, Je = "[object Arguments]", co = "[object Array]", uo = "[object Boolean]", fo = "[object Date]", lo = "[object Error]", Ze = "[object Function]", po = "[object GeneratorFunction]", yo = "[object Map]", go = "[object Number]", Qe = "[object Object]", bo = "[object RegExp]", ho = "[object Set]", To = "[object String]", _o = "[object Symbol]", jo = "[object WeakMap]", vo = "[object ArrayBuffer]", mo = "[object DataView]", $o = "[object Float32Array]", Oo = "[object Float64Array]", wo = "[object Int8Array]", So = "[object Int16Array]", Ao = "[object Int32Array]", Po = "[object Uint8Array]", Eo = "[object Uint8ClampedArray]", Io = "[object Uint16Array]", xo = "[object Uint32Array]", i = {};
i[Je] = i[co] = i[vo] = i[mo] = i[uo] = i[fo] = i[$o] = i[Oo] = i[wo] = i[So] = i[Ao] = i[yo] = i[go] = i[Qe] = i[bo] = i[ho] = i[To] = i[_o] = i[Po] = i[Eo] = i[Io] = i[xo] = !0;
i[lo] = i[Ze] = i[jo] = !1;
function E(e, t, r, n, o, a) {
  var c, u = t & ao, f = t & io, l = t & so;
  if (r && (c = o ? r(e, n, o, a) : r(e)), c !== void 0)
    return c;
  if (!D(e))
    return e;
  var S = q(e);
  if (S) {
    if (c = Sn(e), !u)
      return Pt(e, c);
  } else {
    var v = ee(e), ae = v == Ze || v == po;
    if (Ue(e))
      return un(e, u);
    if (v == Qe || v == Je || ae && !o) {
      if (c = f || ae ? {} : Qn(e), !u)
        return f ? bn(e, sn(c, e)) : yn(e, an(c, e));
    } else {
      if (!i[v])
        return o ? e : {};
      c = Zn(e, v, u);
    }
  }
  a || (a = new w());
  var ie = a.get(e);
  if (ie)
    return ie;
  a.set(e, c), oo(e) ? e.forEach(function(b) {
    c.add(E(b, t, r, b, e, a));
  }) : to(e) && e.forEach(function(b, d) {
    c.set(d, E(b, t, r, d, e, a));
  });
  var tt = l ? f ? hn : dn : f ? Q : Z, se = S ? void 0 : tt(e);
  return Et(se || e, function(b, d) {
    se && (d = b, b = e[d]), De(c, d, E(b, t, r, d, e, a));
  }), c;
}
var Co = 1, Mo = 4;
function No(e) {
  return E(e, Co | Mo);
}
var Do = 1, Fo = 4;
function Lo(e, t) {
  return t = typeof t == "function" ? t : void 0, E(e, Do | Fo, t);
}
const re = (...e) => e.length === 0 ? !1 : e.every((t) => !(t === "" || t === null || t === void 0 || t === 1 / 0 || t === -1 / 0 || Number.isNaN(t))), p = (e) => e === null ? "null" : Array.isArray(e) ? "array" : typeof e, Ro = (e, t) => {
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
  return Lo(e, Ro(t, r));
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
}, Bo = (...e) => e.length === 0 ? !1 : e.every((t) => !!(Number.isInteger(t) && t > 0)), Wo = Bo, qo = (...e) => e.length === 0 ? !1 : e.every((t) => Number.isInteger(t)), Xo = (...e) => e.length === 0 ? !1 : e.every((t) => typeof t == "number"), Jo = (...e) => e.length === 0 ? !1 : e.every((t) => typeof t == "string"), Uo = (e, t, r = []) => {
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
}, Zo = (e, t) => Uo(e, (r) => re(r), t), Qo = (e, t = !0) => {
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
}, Go = (e, t = []) => {
  for (let r in e) {
    if (!Object.prototype.hasOwnProperty.call(e, r) || t.includes(r))
      continue;
    const n = e[r], o = p(n);
    if ((o === "object" || o === "array") && !Go(n, t) || !re(n))
      return !1;
  }
  return !0;
}, L = Symbol("代理数据:只读"), ne = Symbol("克隆数据"), zo = Symbol("解除只读包装"), F = (e, t = "default") => {
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
      if (o === ne)
        return n;
      if (o === zo) {
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
}, oe = ["object", "array", "function"], G = (e) => {
  const t = p(e);
  return !(!oe.includes(t) || e[L] !== L);
}, ke = (e) => {
  const t = p(e);
  if (!oe.includes(t))
    return e;
  const r = e[ne];
  return G(r) ? ke(r) : No(r);
}, et = (e) => {
  const t = p(e);
  if (!oe.includes(t))
    return e;
  const r = e[ne];
  return G(r) ? et(r) : r;
}, ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cloneReadOnlyData: ke,
  isReadOnly: G,
  readOnly: F,
  unReadOnly: et
}, Symbol.toStringTag, { value: "Module" }));
export {
  ko as ReadOnly,
  Yo as cloneEffectiveValue,
  ke as cloneReadOnlyData,
  Ho as debounce,
  Ko as formatDate,
  Vo as isDecimalLen,
  re as isEffectiveValue,
  Wo as isId,
  qo as isInt,
  C as isNum,
  Xo as isNumber,
  Bo as isPositiveInt,
  G as isReadOnly,
  Qo as isStrNum,
  Jo as isString,
  Uo as isTest,
  p as isType,
  Zo as notEmpty,
  Go as notEmptyDeep,
  F as readOnly,
  et as unReadOnly
};
