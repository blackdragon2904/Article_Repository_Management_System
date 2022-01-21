(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    1: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "isRTL", function () {
          return r;
        }),
        n.d(t, "isMobile", function () {
          return i;
        }),
        n.d(t, "isDarkMode", function () {
          return a;
        }),
        n.d(t, "formatDate", function () {
          return o;
        }),
        n.d(t, "getParameterByName", function () {
          return s;
        }),
        n.d(t, "adjustImageGallery", function () {
          return u;
        }),
        n.d(t, "managePostImages", function () {
          return d;
        }),
        n.d(t, "makeImagesZoomable", function () {
          return c;
        });
      var r = function () {
          var e = document.querySelector("html");
          return ["ar", "he", "fa"].includes(e.getAttribute("lang"));
        },
        i = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "768px";
          return window.matchMedia("(max-width: ".concat(e, ")")).matches;
        },
        a = function () {
          var e =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)");
          return e && e.matches;
        },
        o = function (e) {
          return e
            ? new Date(e).toLocaleDateString(document.documentElement.lang, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "";
        },
        s = function (e, t) {
          t || (t = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
          var n = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")).exec(t);
          return n
            ? n[2]
              ? decodeURIComponent(n[2].replace(/\+/g, " "))
              : ""
            : null;
        },
        u = function () {
          for (
            var e = document.querySelectorAll(".kg-gallery-image img"),
              t = 0,
              n = e.length;
            t < n;
            t++
          ) {
            var r = e[t].closest(".kg-gallery-image"),
              i = e[t].attributes.width.value / e[t].attributes.height.value;
            r.style.flex = "".concat(i, " 1 0%");
          }
        },
        d = function (e) {
          e(".js-post-content")
            .find("img")
            .each(function () {
              e(this).closest("figure").hasClass("kg-bookmark-card") ||
                e(this).parent().is("a") ||
                e(this).addClass("js-zoomable");
              var t = e(this).parent().find("figcaption");
              t ? e(this).attr("alt", t.text()) : e(this).attr("alt", "");
            });
        },
        c = function (e, t) {
          t(".js-zoomable").on("opened", function () {
            setTimeout(function () {
              var t = e(".medium-zoom-image--opened");
              t.length > 1 && t.last().hide();
            }, 10);
          });
        };
    },
    16: function (e, t, n) {
      e.exports = n(17);
    },
    17: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        i = n.n(r),
        a = n(3),
        o = n(2),
        s = n(1);
      i()(document).ready(function () {
        var e = i()(".js-featured-slider");
        if (e.length > 0) {
          var t = e.find(".js-featured-slide").length,
            n = new o.d(".js-featured-slider", {
              type: "slider",
              rewind: !1,
              gap: 0,
              swipeThreshold: !1,
              dragThreshold: !1,
              direction: Object(s.isRTL)() ? "rtl" : "ltr",
              breakpoints: {
                768: {
                  swipeThreshold: 1 !== t && 80,
                  dragThreshold: 1 !== t && 120,
                },
              },
            });
          1 === t && e.find(".js-featured-slider-controls").remove(),
            n.on("mount.after", function () {
              Object(a.a)(".js-featured-article-title", 200);
            }),
            n.mount({
              Controls: o.b,
              Swipe: o.c,
              Breakpoints: o.a,
              ArrowDisabler: function (e, n) {
                var r = "js-featured-slider-controls",
                  i = "js-featured-slider-previous",
                  a = "js-featured-slider-next";
                return {
                  mount: function () {
                    e.settings.rewind ||
                      1 === t ||
                      e.on(["mount.after", "run"], function () {
                        var t = !0,
                          o = !1,
                          s = void 0;
                        try {
                          for (
                            var u, d = n.Controls.items[Symbol.iterator]();
                            !(t = (u = d.next()).done);
                            t = !0
                          ) {
                            var c = u.value;
                            if (c.className.includes(r)) {
                              var l = c.querySelector(".".concat(i));
                              l &&
                                (0 === e.index
                                  ? l.setAttribute("disabled", "")
                                  : l.removeAttribute("disabled"));
                              var f = c.querySelector(".".concat(a));
                              if (f)
                                (e.settings.bound
                                  ? e.index + (e.settings.perView - 1)
                                  : e.index) ===
                                n.Sizes.length - 1
                                  ? f.setAttribute("disabled", "")
                                  : f.removeAttribute("disabled");
                            }
                          }
                        } catch (e) {
                          (o = !0), (s = e);
                        } finally {
                          try {
                            t || null == d.return || d.return();
                          } finally {
                            if (o) throw s;
                          }
                        }
                      });
                  },
                };
              },
            }),
            setTimeout(function () {
              window.dispatchEvent(new Event("resize"));
            }, 350);
        }
        Object(a.a)(".js-featured-article-title", 200);
      });
    },
  },
  [[16, 0, 1]],
]);
