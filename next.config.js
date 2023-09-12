const path = require("path");
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co"],
  },
};
