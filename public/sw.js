if (!self.define) {
  let e,
    a = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    a[i] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, s) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[o]) return;
    let r = {};
    const d = (e) => i(e, o),
      c = { module: { uri: o }, exports: r, require: d };
    a[o] = Promise.all(n.map((e) => c[e] || d(e))).then((e) => (s(...e), r));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "d3e561518374c9ac9159173aa6089168",
        },
        {
          url: "/_next/static/DbzWoW2D5_31yAfSYdwgf/_buildManifest.js",
          revision: "c155cce658e53418dec34664328b51ac",
        },
        {
          url: "/_next/static/DbzWoW2D5_31yAfSYdwgf/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/117-74bb71af671c6cc7.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/609-b07ea4a4da5a2114.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-fa22b01029ea8ff4.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/app/layout-a0863ae7040fc1ac.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/app/page-afeca198b0b1b766.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/app/product/%5Bid%5D/page-41468470f4b21c43.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/fd9d1056-cc1356757bccdf63.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/framework-f66176bb897dc684.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/main-4952bf0a3ffaffc1.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/main-app-dce26d799cfa0a49.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/pages/_app-72b849fbd24ac258.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/pages/_error-7ba65e1336b92748.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-1171799a248baf15.js",
          revision: "DbzWoW2D5_31yAfSYdwgf",
        },
        {
          url: "/_next/static/css/93472aa2770e184a.css",
          revision: "93472aa2770e184a",
        },
        {
          url: "/_next/static/media/4473ecc91f70f139-s.p.woff",
          revision: "78e6fc13ea317b55ab0bd6dc4849c110",
        },
        {
          url: "/_next/static/media/463dafcda517f24f-s.p.woff",
          revision: "cbeb6d2d96eaa268b4b5beb0b46d9632",
        },
        {
          url: "/_next/static/media/cart.e55d9029.svg",
          revision: "3be436862911ed754e5221751410de35",
        },
        {
          url: "/_next/static/media/category.5adcf927.svg",
          revision: "b6920e9ba7cc877060aa2e2ef073e3af",
        },
        {
          url: "/_next/static/media/favorite.adf7e1b1.svg",
          revision: "f49f903e48a51a256697e6f7652a7036",
        },
        {
          url: "/_next/static/media/menu-4.ac8f7bfe.svg",
          revision: "c8468af0962d4fefb5172b171a016b4a",
        },
        {
          url: "/_next/static/media/search.24420773.svg",
          revision: "c05d928f0047463267db96ead9733e02",
        },
        {
          url: "/_next/static/media/search2.175e8dfa.svg",
          revision: "e54614f7b61bba45ec5987b503aabe6f",
        },
        {
          url: "/_next/static/media/turn-back2.49ddb37c.png",
          revision: "0303e4940c7a52c6f693c9fa509321b2",
        },
        {
          url: "/_next/static/media/user.967ac6e2.svg",
          revision: "f057b9978e57e45e5a83b8bb24d8fb64",
        },
        {
          url: "/_next/static/media/wishlist.d9a4a55f.svg",
          revision: "718c9af58517e5cb703fbc84828b5373",
        },
        {
          url: "/android/android-launchericon-144-144.png",
          revision: "8db03ef0999d43e641e2cda5f50b6ceb",
        },
        {
          url: "/android/android-launchericon-192-192.png",
          revision: "c278e9e40300bee5112e810d9cbfeff4",
        },
        {
          url: "/android/android-launchericon-48-48.png",
          revision: "f75eb5474aa7b3f4a011de54d169a5ec",
        },
        {
          url: "/android/android-launchericon-512-512.png",
          revision: "7bd13f974bad90b6f1a02a4aec39caa3",
        },
        {
          url: "/android/android-launchericon-72-72.png",
          revision: "5ec8ac553e30e1557ac3f0d66c01dae5",
        },
        {
          url: "/android/android-launchericon-96-96.png",
          revision: "574663ad41aa9ff8782f8bbde494df20",
        },
        { url: "/icons.json", revision: "5dbbc3fe59816e65ba28e355a58ea45c" },
        { url: "/ios/100.png", revision: "de944c9fd42cafcbf7a28d0109816597" },
        { url: "/ios/1024.png", revision: "c000be41f3a92b223c5c4fb01db06e3d" },
        { url: "/ios/114.png", revision: "7c2c3928bb20cd1a0efd8ad726f6a065" },
        { url: "/ios/120.png", revision: "60d23cc4a2059d63bf9fe41381bcda9a" },
        { url: "/ios/128.png", revision: "1122db8b2c5afeafeb2cb3ebae9a8c8a" },
        { url: "/ios/144.png", revision: "8db03ef0999d43e641e2cda5f50b6ceb" },
        { url: "/ios/152.png", revision: "fa0e7c271d6520dec65cda0a40a81f5c" },
        { url: "/ios/16.png", revision: "27f31d470bf4183f134c0f782eeefeb0" },
        { url: "/ios/167.png", revision: "bd0bbf79db0e036d25549eecd55178ae" },
        { url: "/ios/180.png", revision: "5a87cc57ac740eb781a66e7ea3d798dd" },
        { url: "/ios/192.png", revision: "c278e9e40300bee5112e810d9cbfeff4" },
        { url: "/ios/20.png", revision: "73341f009a40c94c751938460b525987" },
        { url: "/ios/256.png", revision: "1c13a6c391efdb5bb888d52da875c827" },
        { url: "/ios/29.png", revision: "31d1689bd4e9dc4c49678345726f92da" },
        { url: "/ios/32.png", revision: "fd78529be546a175367c89f7b2721b1d" },
        { url: "/ios/40.png", revision: "d46c21eac40b7f8bcf5a8809232a47a8" },
        { url: "/ios/50.png", revision: "2de4de41a566eb44345b16db3b4e63af" },
        { url: "/ios/512.png", revision: "7bd13f974bad90b6f1a02a4aec39caa3" },
        { url: "/ios/57.png", revision: "2f49e4e471c41118881d04b908c821f5" },
        { url: "/ios/58.png", revision: "735913128fb35e19c55d51a11c905066" },
        { url: "/ios/60.png", revision: "9c4cdf498ff0b2dfd5fb9c7b0795a635" },
        { url: "/ios/64.png", revision: "66ffb4fd38eb873adaaa9fb1a3f0c93f" },
        { url: "/ios/72.png", revision: "5ec8ac553e30e1557ac3f0d66c01dae5" },
        { url: "/ios/76.png", revision: "cc47f5119198c91ddc6e887678bd9d69" },
        { url: "/ios/80.png", revision: "0247684367d43564461c0ee26abbd23b" },
        { url: "/ios/87.png", revision: "ade652fbcf741010651e4d476c951bec" },
        { url: "/manifest.json", revision: "77a2d07aec6d32e29306e2bb8c3aca4e" },
        {
          url: "/windows11/LargeTile.scale-100.png",
          revision: "7974b966911dc61d61ae2be77d74a797",
        },
        {
          url: "/windows11/LargeTile.scale-125.png",
          revision: "12bdfffc49a1aa2a7393ecb66227becf",
        },
        {
          url: "/windows11/LargeTile.scale-150.png",
          revision: "7dfe3387978ae5fdb184a08f4c5bab06",
        },
        {
          url: "/windows11/LargeTile.scale-200.png",
          revision: "7de911553365aa9d39e6b1c0bb6c62f5",
        },
        {
          url: "/windows11/LargeTile.scale-400.png",
          revision: "67ca6cf66ba942f4408b4d57a04334c3",
        },
        {
          url: "/windows11/SmallTile.scale-100.png",
          revision: "cecae159ab5466dae2258ecc3de977a8",
        },
        {
          url: "/windows11/SmallTile.scale-125.png",
          revision: "aca2f75e03d8eaca01008609240a95df",
        },
        {
          url: "/windows11/SmallTile.scale-150.png",
          revision: "56647e9da937726239bb9b7539df91ab",
        },
        {
          url: "/windows11/SmallTile.scale-200.png",
          revision: "3d71facf88f2db94df2bf3a425ba580c",
        },
        {
          url: "/windows11/SmallTile.scale-400.png",
          revision: "98539422ed1d711d4fe48eee3f4cffdf",
        },
        {
          url: "/windows11/SplashScreen.scale-100.png",
          revision: "2ccd1914de16df13d589dec5eeaf4d25",
        },
        {
          url: "/windows11/SplashScreen.scale-125.png",
          revision: "71d248f3aca78bae4feab7b1e424495b",
        },
        {
          url: "/windows11/SplashScreen.scale-150.png",
          revision: "86700f4a2e860a86660002d3d6e61afb",
        },
        {
          url: "/windows11/SplashScreen.scale-200.png",
          revision: "39ea0f629c1cdad3a25ebc9d7bc85233",
        },
        {
          url: "/windows11/SplashScreen.scale-400.png",
          revision: "2fec59ff6f22936b25f21dd3ee2522c1",
        },
        {
          url: "/windows11/Square150x150Logo.scale-100.png",
          revision: "63021d3af3b80919c0b16b2da392d90d",
        },
        {
          url: "/windows11/Square150x150Logo.scale-125.png",
          revision: "696137f9f42b1debbbf0ee3dd62797bc",
        },
        {
          url: "/windows11/Square150x150Logo.scale-150.png",
          revision: "515a449a8745a1f615194ff937659af6",
        },
        {
          url: "/windows11/Square150x150Logo.scale-200.png",
          revision: "a56b16641cd35b0836ccc03673684c4f",
        },
        {
          url: "/windows11/Square150x150Logo.scale-400.png",
          revision: "607e13165a117b248176fd7bef789dd0",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          revision: "e7be2880348d87ef751c44cbfcb29dff",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          revision: "1bf7bba2dd3ad76a37a039abeef62c22",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          revision: "5f3431a65d2f72b7513152ce2082e757",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          revision: "489569d213963ede4de9ebd73e86c6ca",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          revision: "6a1df126d159d3e19a7be712b6843a3e",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          revision: "539477bd61579a9bd780270da794a445",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          revision: "e69f8875f64cb2539b28ff08f8e50863",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          revision: "c0658c7ffb68c05032dd9d80235a2e7a",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          revision: "0d6513c582e490f90ffa5cb3258097f9",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          revision: "a1c801f282c3c2a3472dc3769820a385",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          revision: "9e7d6604f41e1b7b26c45cd0d4b58811",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          revision: "cfb21eb31c5a8e5edf22299c920c95cd",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          revision: "b8a30688635ed0ab8780e3c4ca906e1f",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          revision: "4f1eea3b2e1c687789cad1b4d3850041",
        },
        {
          url: "/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          revision: "d6ff344a15053d23a8857136268b0014",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          revision: "e7be2880348d87ef751c44cbfcb29dff",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          revision: "1bf7bba2dd3ad76a37a039abeef62c22",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          revision: "5f3431a65d2f72b7513152ce2082e757",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          revision: "489569d213963ede4de9ebd73e86c6ca",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          revision: "6a1df126d159d3e19a7be712b6843a3e",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          revision: "539477bd61579a9bd780270da794a445",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          revision: "e69f8875f64cb2539b28ff08f8e50863",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          revision: "c0658c7ffb68c05032dd9d80235a2e7a",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          revision: "0d6513c582e490f90ffa5cb3258097f9",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          revision: "a1c801f282c3c2a3472dc3769820a385",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          revision: "9e7d6604f41e1b7b26c45cd0d4b58811",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          revision: "cfb21eb31c5a8e5edf22299c920c95cd",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          revision: "b8a30688635ed0ab8780e3c4ca906e1f",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          revision: "4f1eea3b2e1c687789cad1b4d3850041",
        },
        {
          url: "/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          revision: "d6ff344a15053d23a8857136268b0014",
        },
        {
          url: "/windows11/Square44x44Logo.scale-100.png",
          revision: "0d6513c582e490f90ffa5cb3258097f9",
        },
        {
          url: "/windows11/Square44x44Logo.scale-125.png",
          revision: "a4fd8690cdb850b39d668e9420452a14",
        },
        {
          url: "/windows11/Square44x44Logo.scale-150.png",
          revision: "da1007a0354d7878f3025a4520f190ba",
        },
        {
          url: "/windows11/Square44x44Logo.scale-200.png",
          revision: "421605423727e3aa5ff55d457dbd5160",
        },
        {
          url: "/windows11/Square44x44Logo.scale-400.png",
          revision: "da167850d48199c680ccd1b54854d6d6",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-16.png",
          revision: "e7be2880348d87ef751c44cbfcb29dff",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-20.png",
          revision: "1bf7bba2dd3ad76a37a039abeef62c22",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-24.png",
          revision: "5f3431a65d2f72b7513152ce2082e757",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-256.png",
          revision: "489569d213963ede4de9ebd73e86c6ca",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-30.png",
          revision: "6a1df126d159d3e19a7be712b6843a3e",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-32.png",
          revision: "539477bd61579a9bd780270da794a445",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-36.png",
          revision: "e69f8875f64cb2539b28ff08f8e50863",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-40.png",
          revision: "c0658c7ffb68c05032dd9d80235a2e7a",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-44.png",
          revision: "0d6513c582e490f90ffa5cb3258097f9",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-48.png",
          revision: "a1c801f282c3c2a3472dc3769820a385",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-60.png",
          revision: "9e7d6604f41e1b7b26c45cd0d4b58811",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-64.png",
          revision: "cfb21eb31c5a8e5edf22299c920c95cd",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-72.png",
          revision: "b8a30688635ed0ab8780e3c4ca906e1f",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-80.png",
          revision: "4f1eea3b2e1c687789cad1b4d3850041",
        },
        {
          url: "/windows11/Square44x44Logo.targetsize-96.png",
          revision: "d6ff344a15053d23a8857136268b0014",
        },
        {
          url: "/windows11/StoreLogo.scale-100.png",
          revision: "2de4de41a566eb44345b16db3b4e63af",
        },
        {
          url: "/windows11/StoreLogo.scale-125.png",
          revision: "e9e2d32e61390e5fb6ed3aaaf998418f",
        },
        {
          url: "/windows11/StoreLogo.scale-150.png",
          revision: "9b0a11fd03ac4a05c266be197464d473",
        },
        {
          url: "/windows11/StoreLogo.scale-200.png",
          revision: "de944c9fd42cafcbf7a28d0109816597",
        },
        {
          url: "/windows11/StoreLogo.scale-400.png",
          revision: "682dced7eac3b7b9e1ec29ed4263828b",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-100.png",
          revision: "c559ee9d9ca95b92f302e69fb064e988",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-125.png",
          revision: "6e4284f45fb6bbc1862ec878064dd962",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-150.png",
          revision: "b0aad6da701ed8edb1b423bc078a3061",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-200.png",
          revision: "2ccd1914de16df13d589dec5eeaf4d25",
        },
        {
          url: "/windows11/Wide310x150Logo.scale-400.png",
          revision: "39ea0f629c1cdad3a25ebc9d7bc85233",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: i,
              state: n,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
