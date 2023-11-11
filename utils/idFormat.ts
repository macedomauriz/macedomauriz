export function idFormat(text: string) {
  return (
    text
      .toLowerCase()
      // replace: / with nothing
      .replace(/\/+/g, "")
      // replace: spaces and , with -
      .replace(/[\/,\s]+/g, "-")
  )
}
