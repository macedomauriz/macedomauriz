// @ts-nocheck
export const fontReset = (body, button, mono) => `
  *,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  em,
  i,
  b,
  u,
  mark,
  small,
  del,
  ins,
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
  time,
  bdo,
  ruby,
  rt,
  rp,
  wbr {
    font-family: ${body.style.fontFamily};
    letter-spacing: normal;
  }
  code,
  pre {
    font-family: ${mono.style.fontFamily};
  }
  button,
  input[type=submit] {
    font-family: ${button.style.fontFamily};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span {
    font-family: inherit;
    letter-spacing: inherit;
  }
`
