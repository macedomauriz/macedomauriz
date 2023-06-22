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
`
