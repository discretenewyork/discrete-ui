const path = require('path')
const root = path.resolve(__dirname, '..')
const dir = {
  root,
  dist: path.join(root, 'dist'),
  src:  path.join(root, 'src'),
  demo: path.join(root, 'demo'),
  node_modules: path.join(root, 'node_modules')
}

module.exports = { dir }
