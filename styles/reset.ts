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
  h4,
  h5,
  h6 {
    font-family: ${impact.style.fontFamily};
    font-weight: 800;
  }
  code,
  pre {
    font-family: ${mono.style.fontFamily};
  }
  button,
  input[type=submit] {
    font-family: ${impact.style.fontFamily};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700 !important; 
  }
  span {
    font-family: inherit;
    letter-spacing: inherit;
  }
`
