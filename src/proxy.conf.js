const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: "http://localhost:5206",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
