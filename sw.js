/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-70fad18e05c9242aabe8.js"
  },
  {
    "url": "styles.0b77d41b93c6e5c24ee3.css"
  },
  {
    "url": "framework-86a61bb31bcf9da62a8b.js"
  },
  {
    "url": "app-f6d139073e6c185a19e8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d92d6d4f26ba4407215623957e9afa91"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ca7625a901b217b3cc85.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a28ac2229bd6e50e805ba49eeac0806b"
  },
  {
    "url": "polyfill-635a9dfd597478a1f0fa.js"
  },
  {
    "url": "7742f4186e721908c541836135af733a4af032c0-ce71b92950539e1dbc86.js"
  },
  {
    "url": "component---src-pages-animes-index-js-61dd58c001a31d261380.js"
  },
  {
    "url": "page-data/animes/page-data.json",
    "revision": "c02db142497bba9b21319540321bd690"
  },
  {
    "url": "page-data/sq/d/1713031917.json",
    "revision": "a684821faade989c13f533ef18ef78cf"
  },
  {
    "url": "page-data/sq/d/230038957.json",
    "revision": "d8ba48a44e448c3aa32f3ab728621cb5"
  },
  {
    "url": "page-data/sq/d/3009907209.json",
    "revision": "ec93489c561d0a195ef048fa389e3197"
  },
  {
    "url": "page-data/sq/d/3214568256.json",
    "revision": "7cab72a29ca9c9d6a0912d53b0bc4980"
  },
  {
    "url": "page-data/sq/d/3252677741.json",
    "revision": "6f6f77eb775cff498f016df56d2c9a78"
  },
  {
    "url": "component---src-pages-projects-index-js-0ad0cad9ae22f2e162d1.js"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "878378cbebf2604f0866974efe21b1c3"
  },
  {
    "url": "page-data/sq/d/255666022.json",
    "revision": "1a53f9bb9f2d75d6e5ec27c80d49b220"
  },
  {
    "url": "component---src-pages-series-index-js-e3542f53767d6c35ce4f.js"
  },
  {
    "url": "page-data/series/page-data.json",
    "revision": "59a401d66c6fbbb78b357f9f95cc1592"
  },
  {
    "url": "page-data/sq/d/631286979.json",
    "revision": "88fb4305a1152759983c8e0a6993c40c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "894e71132647dad634c0679d72150098"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/anshrathod.github.io`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/anshrathod.github.io/app-f6d139073e6c185a19e8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/anshrathod.github.io/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
