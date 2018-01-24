# gatsby-remark-line-numbering

Add line numbering to markdown code blocks.

## Install

`yarn add gatsby-transformer-remark gatsby-remark-line-numbering`

or

`npm install -S gatsby-transformer-remark gatsby-remark-line-numbering`

## How to use

```javascript
// In your gatsby-config.js file:
plugins: [
  resolve: `gatsby-transformer-remark`,
  options {
    plugins: [
      `gatsby-remark-line-numbering`
    ]
  }
]
