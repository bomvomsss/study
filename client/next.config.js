const path = require('path')

module.exports = {
  sassOptions: {
    incluePaths: [path.resolve(__dirname, './pages')],
  },
}