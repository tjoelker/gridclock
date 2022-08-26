'use strict';

function _createForOfIteratorHelper(r, t) {
  var e, n, o, a, u = 'undefined' != typeof Symbol && r[Symbol.iterator] || r['@@iterator'];
  if (u) return n = !(e = !0), {
    s: function() {
      u = u.call(r);
    },
    n: function() {
      var r = u.next();
      return e = r.done, r;
    },
    e: function(r) {
      n = !0, o = r;
    },
    f: function() {
      try {
        e || null == u.return || u.return();
      } finally {
        if (n) throw o;
      }
    }
  };
  if (Array.isArray(r) || (u = _unsupportedIterableToArray(r)) || t && r && 'number' == typeof r.length) return u && (r = u), 
  a = 0, {
    s: t = function() {},
    n: function() {
      return a >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[a++]
      };
    },
    e: function(r) {
      throw r;
    },
    f: t
  };
  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(r, t) {
  var e;
  if (r) return 'string' == typeof r ? _arrayLikeToArray(r, t) : 'Map' === (e = 'Object' === (e = Object.prototype.toString.call(r).slice(8, -1)) && r.constructor ? r.constructor.name : e) || 'Set' === e ? Array.from(r) : 'Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? _arrayLikeToArray(r, t) : void 0;
}

function _arrayLikeToArray(r, t) {
  (null == t || t > r.length) && (t = r.length);
  for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
  return n;
}

var data = new Date(), hours = data.getHours(), minutes = data.getMinutes();

function logCurrentTime() {
  for (var r = [], t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  if (2 != e.length) return console.log('ERROR');
  var o, a = _createForOfIteratorHelper(e);
  try {
    for (a.s(); !(o = a.n()).done; ) {
      var u = ((u = o.value) < 10 ? '0' : '').concat(u);
      r.push(u);
    }
  } catch (r) {
    a.e(r);
  } finally {
    a.f();
  }
  return console.log(r[0] + ':' + r[1]);
}

setInterval(function() {
  return logCurrentTime(hours, minutes);
}, 1e3);