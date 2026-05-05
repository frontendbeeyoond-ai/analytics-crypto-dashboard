module.exports = [
  93695,
  (e, t, a) => {
    t.exports = e.x("next/dist/shared/lib/no-fallback-error.external.js", () =>
      require("next/dist/shared/lib/no-fallback-error.external.js"),
    );
  },
  18622,
  (e, t, a) => {
    t.exports = e.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"),
    );
  },
  56704,
  (e, t, a) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-async-storage.external.js"),
    );
  },
  32319,
  (e, t, a) => {
    t.exports = e.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-unit-async-storage.external.js"),
    );
  },
  24725,
  (e, t, a) => {
    t.exports = e.x(
      "next/dist/server/app-render/after-task-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/after-task-async-storage.external.js"),
    );
  },
  70406,
  (e, t, a) => {
    t.exports = e.x("next/dist/compiled/@opentelemetry/api", () =>
      require("next/dist/compiled/@opentelemetry/api"),
    );
  },
  26378,
  (e) => {
    "use strict";
    var t = e.i(47909),
      a = e.i(74017),
      r = e.i(96250),
      n = e.i(59756),
      i = e.i(61916),
      o = e.i(74677),
      s = e.i(69741),
      l = e.i(16795),
      c = e.i(87718),
      d = e.i(95169),
      p = e.i(47587),
      u = e.i(66012),
      m = e.i(70101),
      _ = e.i(26937),
      g = e.i(10372),
      h = e.i(93695);
    e.i(52474);
    var f = e.i(220),
      v = e.i(89171);
    let w = ["mobile", "desktop", "tablet"],
      x = [0.55, 0.35, 0.1],
      y = ["google", "twitter", "facebook", "linkedin", "direct", "referral"],
      R = [0.35, 0.15, 0.12, 0.08, 0.2, 0.1],
      E = [
        "United States",
        "United Kingdom",
        "Germany",
        "France",
        "Spain",
        "Italy",
        "Canada",
        "Australia",
        "Japan",
        "Brazil",
      ],
      b = [0.32, 0.15, 0.12, 0.08, 0.06, 0.05, 0.08, 0.05, 0.04, 0.05],
      C = ["Chrome", "Firefox", "Safari", "Edge", "Opera"],
      k = [0.65, 0.15, 0.1, 0.08, 0.02],
      S = [
        { id: "camp_001", name: "Spring Sale 2024" },
        { id: "camp_002", name: "Product Launch" },
        { id: "camp_003", name: "Holiday Promo" },
        { id: "camp_004", name: "Brand Awareness" },
        { id: "camp_005", name: "Retargeting Q1" },
      ],
      A = ["header", "hero", "sidebar", "footer", "mid_page"],
      T = [
        "Get Started",
        "Learn More",
        "Shop Now",
        "Download",
        "Sign Up",
        "Contact Us",
      ],
      D = ["top", "middle", "bottom", "left", "right"],
      N = ["ios", "android", "web"],
      P = ["success", "pending", "failed"];
    function M(e, t) {
      let a = Math.random() * t.reduce((e, t) => e + t, 0);
      for (let r = 0; r < e.length; r++) if ((a -= t[r]) <= 0) return e[r];
      return e[e.length - 1];
    }
    function O(e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    }
    function q() {
      return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    function I(e = 30) {
      let t = new Date(new Date().getTime() - O(0, 24 * e * 36e5)),
        a = O(0, 23),
        r = O(0, 59),
        n = O(0, 59);
      return (t.setHours(a, r, n), t.toISOString());
    }
    let U = null;
    async function H(e) {
      try {
        let { searchParams: t } = new URL(e.url),
          a = {
            start_date: t.get("start_date") || void 0,
            end_date: t.get("end_date") || void 0,
            device_type: t.get("device_type") || "all",
            traffic_source: t.get("traffic_source") || "all",
            campaign_name: t.get("campaign_name") || "all",
            country: t.get("country") || "all",
          },
          r =
            (U ||
              (U = (function (e = 1500) {
                let t = [],
                  a = Math.ceil(e / 5);
                for (let e = 0; e < a; e++) {
                  let e = (function () {
                    let e = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                      t = [],
                      a = O(3, 12),
                      r = {
                        id: q(),
                        event_name: "page_view",
                        device_type: M(w, x),
                        country: M(E, b),
                        traffic_source: M(y, R),
                        campaign_id:
                          Math.random() > 0.6 ? S[O(0, S.length - 1)].id : null,
                        campaign_name:
                          Math.random() > 0.6
                            ? S[O(0, S.length - 1)].name
                            : null,
                        utm_medium: null,
                        page_name: "homepage",
                        page_url: "https://example.com/",
                        timestamp: I(),
                        browser_type: M(C, k),
                        page_load_time: O(800, 5e3),
                        session_id: e,
                      };
                    t.push(r);
                    for (let r = 1; r < a; r++) {
                      let a = (function (e) {
                          let t = M(w, x),
                            a = M(y, R),
                            r = M(E, b),
                            n = M(C, k),
                            i =
                              Math.random() > 0.6
                                ? S[O(0, S.length - 1)]
                                : null,
                            o = [
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
                            s = o[O(0, o.length - 1)],
                            l = {
                              id: q(),
                              event_name: s,
                              device_type: t,
                              country: r,
                              traffic_source: a,
                              campaign_id: i?.id ?? null,
                              campaign_name: i?.name ?? null,
                              utm_medium: {
                                google: "cpc",
                                twitter: "social",
                                facebook: "social",
                                linkedin: "social",
                                direct: null,
                                referral: "referral",
                              }[a],
                              page_name: "homepage",
                              page_url: "https://example.com/",
                              timestamp: I(),
                              browser_type: n,
                              page_load_time: O(800, 5e3),
                              session_id: e,
                            };
                          switch (s) {
                            case "presale_click_cta":
                            case "online_shop_click":
                            case "documents_click":
                            case "social_click":
                            case "trustpilot_click":
                              return {
                                ...l,
                                cta_location: A[O(0, A.length - 1)],
                                button_text: T[O(0, T.length - 1)],
                                destination_url: `https://example.com/${s.replace("_click", "")}`,
                                click_location: D[O(0, D.length - 1)],
                              };
                            case "newsletter_signup":
                              return {
                                ...l,
                                signup_status: P[O(0, 2)],
                                platform: N[O(0, 2)],
                              };
                            case "scroll_depth":
                              return { ...l, scroll_percentage: O(10, 100) };
                            case "session_end":
                              return {
                                ...l,
                                session_duration: O(15, 600),
                                scroll_percentage: O(20, 100),
                              };
                            default:
                              return l;
                          }
                        })(e),
                        r = new Date(
                          new Date(t[t.length - 1].timestamp).getTime() +
                            O(5e3, 12e4),
                        );
                      t.push({ ...a, timestamp: r.toISOString() });
                    }
                    let n = new Date(
                      new Date(t[t.length - 1].timestamp).getTime() +
                        O(1e4, 3e5),
                    );
                    return (
                      t.push({
                        id: q(),
                        event_name: "session_end",
                        device_type: t[0].device_type,
                        country: t[0].country,
                        traffic_source: t[0].traffic_source,
                        campaign_id: t[0].campaign_id,
                        campaign_name: t[0].campaign_name,
                        utm_medium: t[0].utm_medium,
                        page_name: "homepage",
                        page_url: "https://example.com/",
                        timestamp: n.toISOString(),
                        browser_type: t[0].browser_type,
                        page_load_time: O(800, 5e3),
                        session_id: e,
                        session_duration: Math.floor(
                          (n.getTime() - new Date(t[0].timestamp).getTime()) /
                            1e3,
                        ),
                        scroll_percentage: O(20, 100),
                      }),
                      t
                    );
                  })();
                  t.push(...e);
                }
                return (
                  t.sort(
                    (e, t) =>
                      new Date(e.timestamp).getTime() -
                      new Date(t.timestamp).getTime(),
                  ),
                  t.slice(0, e + 500)
                );
              })(1500)),
            U),
          n = r.filter((e) => {
            if (a.start_date) {
              let t = new Date(a.start_date);
              if (new Date(e.timestamp) < t) return !1;
            }
            if (a.end_date) {
              let t = new Date(a.end_date);
              if ((t.setHours(23, 59, 59, 999), new Date(e.timestamp) > t))
                return !1;
            }
            return (
              (!a.device_type ||
                "all" === a.device_type ||
                e.device_type === a.device_type) &&
              (!a.traffic_source ||
                "all" === a.traffic_source ||
                e.traffic_source === a.traffic_source) &&
              (!a.campaign_name ||
                "all" === a.campaign_name ||
                e.campaign_name === a.campaign_name) &&
              (!a.country || "all" === a.country || e.country === a.country)
            );
          });
        return v.NextResponse.json({
          events: n,
          total: r.length,
          filtered: n.length,
        });
      } catch (e) {
        return (
          console.error("Analytics API Error:", e),
          v.NextResponse.json(
            { error: "Failed to fetch analytics data" },
            { status: 500 },
          )
        );
      }
    }
    e.s(["GET", 0, H], 42427);
    var j = e.i(42427);
    let $ = new t.AppRouteRouteModule({
        definition: {
          kind: a.RouteKind.APP_ROUTE,
          page: "/api/analytics/route",
          pathname: "/api/analytics",
          filename: "route",
          bundlePath: "",
        },
        distDir: ".next",
        relativeProjectDir: "",
        resolvedPagePath: "[project]/app/api/analytics/route.ts",
        nextConfigOutput: "standalone",
        userland: j,
        ...{},
      }),
      { workAsyncStorage: F, workUnitAsyncStorage: K, serverHooks: B } = $;
    async function L(e, t, r) {
      (r.requestMeta && (0, n.setRequestMeta)(e, r.requestMeta),
        $.isDev &&
          (0, n.addRequestMeta)(
            e,
            "devRequestTimingInternalsEnd",
            process.hrtime.bigint(),
          ));
      let v = "/api/analytics/route";
      v = v.replace(/\/index$/, "") || "/";
      let w = await $.prepare(e, t, { srcPage: v, multiZoneDraftMode: !1 });
      if (!w)
        return (
          (t.statusCode = 400),
          t.end("Bad Request"),
          null == r.waitUntil || r.waitUntil.call(r, Promise.resolve()),
          null
        );
      let {
          buildId: x,
          params: y,
          nextConfig: R,
          parsedUrl: E,
          isDraftMode: b,
          prerenderManifest: C,
          routerServerContext: k,
          isOnDemandRevalidate: S,
          revalidateOnlyGenerated: A,
          resolvedPathname: T,
          clientReferenceManifest: D,
          serverActionsManifest: N,
        } = w,
        P = (0, s.normalizeAppPath)(v),
        M = !!(C.dynamicRoutes[P] || C.routes[T]),
        O = async () => (
          (null == k ? void 0 : k.render404)
            ? await k.render404(e, t, E, !1)
            : t.end("This page could not be found"),
          null
        );
      if (M && !b) {
        let e = !!C.routes[T],
          t = C.dynamicRoutes[P];
        if (t && !1 === t.fallback && !e) {
          if (R.adapterPath) return await O();
          throw new h.NoFallbackError();
        }
      }
      let q = null;
      !M || $.isDev || b || (q = "/index" === (q = T) ? "/" : q);
      let I = !0 === $.isDev || !M,
        U = M && !I;
      N &&
        D &&
        (0, o.setManifestsSingleton)({
          page: v,
          clientReferenceManifest: D,
          serverActionsManifest: N,
        });
      let H = e.method || "GET",
        j = (0, i.getTracer)(),
        F = j.getActiveScopeSpan(),
        K = !!(null == k ? void 0 : k.isWrappedByNextServer),
        B = !!(0, n.getRequestMeta)(e, "minimalMode"),
        L =
          (0, n.getRequestMeta)(e, "incrementalCache") ||
          (await $.getIncrementalCache(e, R, C, B));
      (null == L || L.resetRequestCache(), (globalThis.__incrementalCache = L));
      let G = {
          params: y,
          previewProps: C.preview,
          renderOpts: {
            experimental: { authInterrupts: !!R.experimental.authInterrupts },
            cacheComponents: !!R.cacheComponents,
            supportsDynamicResponse: I,
            incrementalCache: L,
            cacheLifeProfiles: R.cacheLife,
            waitUntil: r.waitUntil,
            onClose: (e) => {
              t.on("close", e);
            },
            onAfterTaskError: void 0,
            onInstrumentationRequestError: (t, a, r, n) =>
              $.onRequestError(e, t, r, n, k),
          },
          sharedContext: { buildId: x },
        },
        V = new l.NodeNextRequest(e),
        W = new l.NodeNextResponse(t),
        X = c.NextRequestAdapter.fromNodeNextRequest(
          V,
          (0, c.signalFromNodeResponse)(t),
        );
      try {
        let n,
          o = async (e) =>
            $.handle(X, G).finally(() => {
              if (!e) return;
              e.setAttributes({
                "http.status_code": t.statusCode,
                "next.rsc": !1,
              });
              let a = j.getRootSpanAttributes();
              if (!a) return;
              if (a.get("next.span_type") !== d.BaseServerSpan.handleRequest)
                return void console.warn(
                  `Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`,
                );
              let r = a.get("next.route");
              if (r) {
                let t = `${H} ${r}`;
                (e.setAttributes({
                  "next.route": r,
                  "http.route": r,
                  "next.span_name": t,
                }),
                  e.updateName(t),
                  n &&
                    n !== e &&
                    (n.setAttribute("http.route", r), n.updateName(t)));
              } else e.updateName(`${H} ${v}`);
            }),
          s = async (n) => {
            var i, s;
            let l = async ({ previousCacheEntry: a }) => {
                try {
                  if (!B && S && A && !a)
                    return (
                      (t.statusCode = 404),
                      t.setHeader("x-nextjs-cache", "REVALIDATED"),
                      t.end("This page could not be found"),
                      null
                    );
                  let i = await o(n);
                  e.fetchMetrics = G.renderOpts.fetchMetrics;
                  let s = G.renderOpts.pendingWaitUntil;
                  s && r.waitUntil && (r.waitUntil(s), (s = void 0));
                  let l = G.renderOpts.collectedTags;
                  if (!M)
                    return (
                      await (0, u.sendResponse)(
                        V,
                        W,
                        i,
                        G.renderOpts.pendingWaitUntil,
                      ),
                      null
                    );
                  {
                    let e = await i.blob(),
                      t = (0, m.toNodeOutgoingHttpHeaders)(i.headers);
                    (l && (t[g.NEXT_CACHE_TAGS_HEADER] = l),
                      !t["content-type"] &&
                        e.type &&
                        (t["content-type"] = e.type));
                    let a =
                        void 0 !== G.renderOpts.collectedRevalidate &&
                        !(
                          G.renderOpts.collectedRevalidate >= g.INFINITE_CACHE
                        ) &&
                        G.renderOpts.collectedRevalidate,
                      r =
                        void 0 === G.renderOpts.collectedExpire ||
                        G.renderOpts.collectedExpire >= g.INFINITE_CACHE
                          ? void 0
                          : G.renderOpts.collectedExpire;
                    return {
                      value: {
                        kind: f.CachedRouteKind.APP_ROUTE,
                        status: i.status,
                        body: Buffer.from(await e.arrayBuffer()),
                        headers: t,
                      },
                      cacheControl: { revalidate: a, expire: r },
                    };
                  }
                } catch (t) {
                  throw (
                    (null == a ? void 0 : a.isStale) &&
                      (await $.onRequestError(
                        e,
                        t,
                        {
                          routerKind: "App Router",
                          routePath: v,
                          routeType: "route",
                          revalidateReason: (0, p.getRevalidateReason)({
                            isStaticGeneration: U,
                            isOnDemandRevalidate: S,
                          }),
                        },
                        !1,
                        k,
                      )),
                    t
                  );
                }
              },
              c = await $.handleResponse({
                req: e,
                nextConfig: R,
                cacheKey: q,
                routeKind: a.RouteKind.APP_ROUTE,
                isFallback: !1,
                prerenderManifest: C,
                isRoutePPREnabled: !1,
                isOnDemandRevalidate: S,
                revalidateOnlyGenerated: A,
                responseGenerator: l,
                waitUntil: r.waitUntil,
                isMinimalMode: B,
              });
            if (!M) return null;
            if (
              (null == c || null == (i = c.value) ? void 0 : i.kind) !==
              f.CachedRouteKind.APP_ROUTE
            )
              throw Object.defineProperty(
                Error(
                  `Invariant: app-route received invalid cache entry ${null == c || null == (s = c.value) ? void 0 : s.kind}`,
                ),
                "__NEXT_ERROR_CODE",
                { value: "E701", enumerable: !1, configurable: !0 },
              );
            (B ||
              t.setHeader(
                "x-nextjs-cache",
                S
                  ? "REVALIDATED"
                  : c.isMiss
                    ? "MISS"
                    : c.isStale
                      ? "STALE"
                      : "HIT",
              ),
              b &&
                t.setHeader(
                  "Cache-Control",
                  "private, no-cache, no-store, max-age=0, must-revalidate",
                ));
            let d = (0, m.fromNodeOutgoingHttpHeaders)(c.value.headers);
            return (
              (B && M) || d.delete(g.NEXT_CACHE_TAGS_HEADER),
              !c.cacheControl ||
                t.getHeader("Cache-Control") ||
                d.get("Cache-Control") ||
                d.set(
                  "Cache-Control",
                  (0, _.getCacheControlHeader)(c.cacheControl),
                ),
              await (0, u.sendResponse)(
                V,
                W,
                new Response(c.value.body, {
                  headers: d,
                  status: c.value.status || 200,
                }),
              ),
              null
            );
          };
        K && F
          ? await s(F)
          : ((n = j.getActiveScopeSpan()),
            await j.withPropagatedContext(
              e.headers,
              () =>
                j.trace(
                  d.BaseServerSpan.handleRequest,
                  {
                    spanName: `${H} ${v}`,
                    kind: i.SpanKind.SERVER,
                    attributes: { "http.method": H, "http.target": e.url },
                  },
                  s,
                ),
              void 0,
              !K,
            ));
      } catch (t) {
        if (
          (t instanceof h.NoFallbackError ||
            (await $.onRequestError(
              e,
              t,
              {
                routerKind: "App Router",
                routePath: P,
                routeType: "route",
                revalidateReason: (0, p.getRevalidateReason)({
                  isStaticGeneration: U,
                  isOnDemandRevalidate: S,
                }),
              },
              !1,
              k,
            )),
          M)
        )
          throw t;
        return (
          await (0, u.sendResponse)(V, W, new Response(null, { status: 500 })),
          null
        );
      }
    }
    e.s(
      [
        "handler",
        0,
        L,
        "patchFetch",
        0,
        function () {
          return (0, r.patchFetch)({
            workAsyncStorage: F,
            workUnitAsyncStorage: K,
          });
        },
        "routeModule",
        0,
        $,
        "serverHooks",
        0,
        B,
        "workAsyncStorage",
        0,
        F,
        "workUnitAsyncStorage",
        0,
        K,
      ],
      26378,
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0.ef9at._.js.map
