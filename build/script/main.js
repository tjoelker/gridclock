'use strict';

function _createForOfIteratorHelper(e, t) {
  var r, n, o, i, a = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
  if (a) return n = !(r = !0), {
    s: function() {
      a = a.call(e);
    },
    n: function() {
      var e = a.next();
      return r = e.done, e;
    },
    e: function(e) {
      n = !0, o = e;
    },
    f: function() {
      try {
        r || null == a.return || a.return();
      } finally {
        if (n) throw o;
      }
    }
  };
  if (Array.isArray(e) || (a = _unsupportedIterableToArray(e)) || t && e && 'number' == typeof e.length) return a && (e = a), 
  i = 0, {
    s: t = function() {},
    n: function() {
      return i >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[i++]
      };
    },
    e: function(e) {
      throw e;
    },
    f: t
  };
  throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(e, t) {
  var r;
  if (e) return 'string' == typeof e ? _arrayLikeToArray(e, t) : 'Map' === (r = 'Object' === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
}

function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}

var data = new Date(), time = [], hours = data.getHours(), minutes = data.getMinutes(), seconds = data.getSeconds(), element = function(e) {
  return document.getElementsByClassName('_'.concat(e));
};

function getCurrentTime() {
  time.splice(0, time.length);
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  if (2 != t.length) return console.log('ERROR');
  var n, o = _createForOfIteratorHelper(t);
  try {
    for (o.s(); !(n = o.n()).done; ) {
      var i = ((i = n.value) < 10 ? '0' : '').concat(i);
      time.push(i);
    }
  } catch (e) {
    o.e(e);
  } finally {
    o.f();
  }
  return updateCurrentTime(time.join(''));
}

function updateCurrentTime(e) {
  for (var t = 0; t < e.length; t++) setVisibility(t, e[t]);
}

function setVisibility(e, t) {
  var r = element(t), t = element(t);
  r.style.visibility = 'hidden', t.style.visibility = 'visible';
}

getCurrentTime(hours, minutes);