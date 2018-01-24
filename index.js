'use strict'

const visit = require('unist-util-visit')
const R = require('ramda')

/* Line numbering */
const addLineNumberSpans = R.map(
  code => `<span class="line-numbered">${code}</span>`
)

const swapTest = /^<span class="line-numbered"><\/span>/g
const swapReplace = '</span><span class="line-numbered">'
const swapSpanClosingTags = R.map(R.replace(swapTest, swapReplace))

const orphanTest = /^<\/span><span class="line-numbered">$/
const orphanReplace = ''
const replaceOrphans = R.map(R.replace(orphanTest, orphanReplace))

const combineTest = /<span class="line-numbered"><span class="gatsby-highlight-code-line">(.*)<\/span>$/g
const combineReplace =
  '<span class="gatsby-highlight-code-line line-numbered">$1'
const combineSpans = R.map(R.replace(combineTest, combineReplace))

const addLineNumbers = R.pipe(
  R.split('\n'),
  addLineNumberSpans,
  swapSpanClosingTags,
  replaceOrphans,
  combineSpans,
  R.reject(R.isEmpty),
  R.join('\n')
)

module.exports = function ({ markdownAST }) {
  visit(markdownAST, `html`, function (node) {
    const [, pre, inner, post] = R.match(
      /(.+)<code>(.+)<\/code>(.+)/s,
      node.value
    )

    if (inner) {
      const updated = R.trim(addLineNumbers(inner))

      node.value = `${pre}${updated}${post}`
    }
  })

  return markdownAST
}
