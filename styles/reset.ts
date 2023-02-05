// @ts-nocheck
export const fontReset = (robotoSlab, roboto, ubuntuMono) => `
  *,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
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
  code,
  pre,
  s,
  time,
  bdo,
  ruby,
  rt,
  rp,
  wbr {
    font-family: ${robotoSlab.style.fontFamily};
    letter-spacing: normal;
  }
  code,
  pre {
    font-family: ${ubuntuMono.style.fontFamily};
  }
  button,
  input[type=submit] {
    font-family: ${roboto.style.fontFamily};
    text-transform: uppercase
  }
`
