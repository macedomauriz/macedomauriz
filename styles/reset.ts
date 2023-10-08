// @ts-nocheck
export const fontReset = ({ body, impact, mono }) => `
  *,
  p,
  h1,
  h2,
  h3,
  strong,
  em,
  i,
  b,
  u,
  mark,
  del,
  ins,
  small,
  sub,
  sup,
  abbr,
  q,
  blockquote,
  cite,
  dfn,
  address,
  samp,
  kbd,
  var,
  s,
  bdo,
  ruby,
  rt,
  rp,
  wbr {
    font-family: ${body.style.fontFamily};
    letter-spacing: normal;
    font-display: block;
  }
  h4,
  h5,
  h6 {
    font-family: ${impact.style.fontFamily};
    font-weight: 800;
  }
  code,
  ul > li:not(.task-list-item) {
    list-style-type: disc;
  },
  .rehype-code-title,
  pre {
    font-family: ${mono.style.fontFamily};
  }
  button,
  time,
  input[type=submit] {
    font-family: ${impact.style.fontFamily};
    text-transform: uppercase;
    font-weight: 700 !important; 
  }
  span {
    font-family: inherit;
    letter-spacing: inherit;
  }
  pre {
    overflow-x: auto;
  }

  /**
   * styles should be added for line highlighting and line numbers 
   * to work correctly in rehype-prism-plus 
   */

  .code-highlight {
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .code-line {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: -16px;
    margin-right: -16px;
    border-left: 4px solid rgba(0, 0, 0, 0); /* Set placeholder for highlight accent border color to transparent */
  }

  .code-line.inserted {
    background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
  }

  .code-line.deleted {
    background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
  }

  .highlight-line {
    margin-left: -16px;
    margin-right: -16px;
    background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */
    border-left: 4px solid rgb(59, 130, 246); /* Set highlight accent border color */
  }

  .line-number::before {
    display: inline-block;
    width: 1rem;
    text-align: right;
    margin-right: 16px;
    margin-left: -8px;
    color: rgb(156, 163, 175); /* Line number color */
    content: attr(line);
  }
 
  /**
   * styles should be added for line highlighting and line numbers 
   * to work correctly in rehype-prism-plus 
   */
   table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    margin: 0 0 34px 0;
  }
  th,
  td {
    padding: 6px 16px;
  }
  th {
    text-align: left;
    border-bottom: 1px solid #686868;
  }
  tr:first-child th:first-child {
  }
  tr:first-child th:last-child {
  }
  td {
  }
  td:first-child {
  }
  tr:last-child td:first-child {
  }
  tr:last-child td:last-child {
  }
  @media only screen and (max-width: 800px) {
    thead {
      display: none;
    }
    tr {
      display: flex;
      flex-direction: column;
      padding: 12px 0;
    }
    tr:nth-child(odd) {
      border-bottom: 1px solid #686868;
    }
    tr:nth-child(even) {
      border-bottom: 1px solid #686868;
    }
    td {
      position: relative;
      padding-top: 30px;
      margin: 0 0 4px;
    }
    td::before {
      content: attr(head);
      position: absolute;
      top: 6px;
      left: 16px;
      color: grey;
      font-family: ${impact.style.fontFamily};
      font-size: 14px;
      font-weight: bold;
    }
  }
`
