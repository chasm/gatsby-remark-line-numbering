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
```

You'll want to add some CSS for your line numbers, for example:

```css
pre {
  counter-reset: line;
}

.line-numbered {
  counter-increment: line;
  line-height: 1.5;
}

.line-numbered::before {
  content: counter(line);
  display: inline-block;
  width: 2.5em;
  border-right: 1px solid #ddd;
  padding: 0 0.5em 0 0;
  margin-right: 0.5em;
  color: #888;
  text-align: right;
  -webkit-user-select: none;
}
```