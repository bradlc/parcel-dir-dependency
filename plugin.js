const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const glob = require('fast-glob')

module.exports = (root, result) => {
  let dir = path.resolve(__dirname, 'src')

  result.messages.push({
    plugin: 'example',
    type: 'dir-dependency',
    parent: result.opts.from,
    dir,
  })

  root.walkAtRules('files', (node) => {
    let comment = glob
      .sync(`${dir}/**/*`, { onlyFiles: true })
      .map((file) => `${path.basename(file)}: ${fs.statSync(file).mtimeMs}`)
      .join(', ')

    node.replaceWith(postcss.comment({ text: `! ${comment}` }))
  })

  return root
}
