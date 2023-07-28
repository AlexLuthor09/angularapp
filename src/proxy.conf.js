const PROXY_CONFIG = [
  {
    context: [
      "/api/Animateurs",
    ],
    target: "https://localhost:7123",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
