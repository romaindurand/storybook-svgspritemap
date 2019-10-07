const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')
const path = require('path')

module.exports = async ({ config }) => {
  config.plugins.push(new SVGSpritemapPlugin(path.join(__dirname, '../assets/icons/*.svg')))
  return config
}
