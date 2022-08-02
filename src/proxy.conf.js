var HttpsProxyAgent = require("https-proxy-agent");

const PROXY_CONFIG = [
  {
    context: [
      "/my",
      "/many",
      "/endpoints",
      "/i",
      "/need",
      "/to",
      "/proxy",
      "/api",
    ],
    target: "http://localhost:4200",
    secure: false,
    pathRewrite: {
      ["^/api"]: "",
    },
    changeOrigin: false,
    logLevel: "debug",
    bypass: function (req) {
      if (req.headers.accept.indexOf("html") !== -1) {
        console.log("Skipping proxy for browser request.");
        return "/index.html";
      }
      req.headers["X-Custom-Header"] = "yes";
    },
  },
];

function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log("Using corporate proxy server: " + proxyServer);
    proxyConfig.forEach(function (entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(PROXY_CONFIG);
