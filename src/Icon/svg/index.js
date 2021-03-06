const icons = {}
const requireIcons = ctx => {
  ctx.keys().forEach(fname => {
    const iconName = fname.split('/').reverse()[0].replace(/\.svg$/, '')
    icons[iconName] = ctx(fname).default
  })
  return icons
}

// Require context MUST be created with literals
const ctxBlackTie = require.context('./blacktie', true, /\.svg$/)
const ctxBlackTieBrands = require.context('./blacktie-brands', true, /\.svg$/)
requireIcons(ctxBlackTieBrands)
requireIcons(ctxBlackTie)

export default icons
