// eslint-disable-next-line no-restricted-imports
import Link, { LinkProps } from "next/link"

interface CustomLinkProps extends LinkProps {
  children: React.ReactNode
}

export default function CustomLink({ children, ...props }: CustomLinkProps) {
  const isExternal = props.href.toString().startsWith("http")
  return (
    <Link {...props} target={isExternal ? "_blank" : "_self"}>
      {children}
    </Link>
  )
}
