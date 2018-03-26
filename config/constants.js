const path = require('path')

const root = path.resolve(__dirname, '..')

module.exports = {
  ROOT: root,
  DIST: path.join(root, 'dist'),
  SRC: path.join(root, 'src'),
  DEMO: path.join(root, 'demo'),
  NODE_MODULES: path.join(root, 'node_modules')
}
