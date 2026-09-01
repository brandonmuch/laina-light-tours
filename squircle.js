/* ============================================================
   Squircle — Apple-style continuous corner smoothing
   ============================================================

   Why this is not just an SVG clipPath.

   A `<clipPath clipPathUnits="objectBoundingBox">` is defined in a
   normalised 0–1 box, so the browser stretches it to the element.
   On a 320x200 card that is fine; on a 220x46 button the corners
   get squashed horizontally and the "smooth" curve turns into an
   egg. One path cannot serve both.

   So the path is generated per element, in real pixels, from the
   element's measured size, and re-generated when that size changes.
   That is what makes the curve identical on every corner of every
   element regardless of aspect ratio.

   Browsers that support `corner-shape` do this natively and skip
   the JS entirely — see squircle.css.
   ============================================================ */

(function () {
  'use strict';

  if (window.CSS && CSS.supports && CSS.supports('corner-shape', 'squircle')) return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) { /* still fine */ }

  /* Apple's corner is a superellipse. n = 4 is close to the iOS icon
     curve; n = 5 is slightly squarer. Expressed as the bezier handle
     ratio k: the fraction of the radius the control points sit at.
     k = 1 gives a plain circular arc (what border-radius does),
     k ≈ 0.55 gives the continuous, seamless blend. */
  var K = 0.5522847498 * 0.72;   /* circle handle x smoothing factor */

  function squirclePath(w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    var c = r * K;                       /* control point offset */
    return (
      'M ' + r + ' 0' +
      ' L ' + (w - r) + ' 0' +
      ' C ' + (w - c) + ' 0 ' + w + ' ' + c + ' ' + w + ' ' + r +
      ' L ' + w + ' ' + (h - r) +
      ' C ' + w + ' ' + (h - c) + ' ' + (w - c) + ' ' + h + ' ' + (w - r) + ' ' + h +
      ' L ' + r + ' ' + h +
      ' C ' + c + ' ' + h + ' 0 ' + (h - c) + ' 0 ' + (h - r) +
      ' L 0 ' + r +
      ' C 0 ' + c + ' ' + c + ' 0 ' + r + ' 0' +
      ' Z'
    );
  }

  function radiusFor(el) {
    var explicit = el.getAttribute('data-squircle-radius');
    if (explicit) return parseFloat(explicit);
    var br = parseFloat(getComputedStyle(el).borderTopLeftRadius);
    return isNaN(br) || br === 0 ? 16 : br;
  }

  function apply(el) {
    var w = el.offsetWidth, h = el.offsetHeight;
    if (!w || !h) return;
    el.style.clipPath = 'path("' + squirclePath(w, h, radiusFor(el)) + '")';
  }

  var targets = function () {
    return document.querySelectorAll('[data-squircle]');
  };

  var ro = ('ResizeObserver' in window)
    ? new ResizeObserver(function (entries) { entries.forEach(function (e) { apply(e.target); }); })
    : null;

  function init() {
    targets().forEach(function (el) {
      apply(el);
      if (ro) ro.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Cards are rendered from JS after load, so expose a re-run hook. */
  window.applySquircles = init;

  if (!ro) {
    var t;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(init, 120);
    });
  }
})();
