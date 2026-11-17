import Link from "next/link"

import Chiro from "./icons/chiro"
import { SocialLinks } from "./social-links"

const external = { target: "_blank", rel: "noopener noreferrer" } as const
const footerLink =
  "text-invisible-text underline transition-colors duration-300 ease-in-out hover:text-aside-text"

export function Footer() {
  return (
    <footer className="mx-auto mt-auto mb-6 flex w-full max-w-[760px] flex-none flex-col items-center">
      <div className="flex w-full max-w-[420px] justify-between max-mobile:flex-col max-mobile:items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="type-nav flex items-center transition-colors duration-300 ease-in-out hover:text-aside-text max-mobile:text-sm"
          >
            <Chiro className="mr-4 h-12 w-auto max-mobile:h-6" />
            <span>Chiro Itterbeek</span>
          </Link>
        </div>
        <SocialLinks className="items-center max-mobile:my-2 max-mobile:[&_svg]:h-8" />
      </div>
      <p className="type-footer w-full text-center max-mobile:w-[90%] max-mobile:text-xs max-mobile:leading-[1.2]">
        <a
          className={footerLink}
          href="/privacyverklaring-chiro-itterbeek.pdf"
          {...external}
        >
          Privacyverklaring
        </a>{" "}
        | © Chiro Itterbeek {new Date().getFullYear()} | Design door{" "}
        <a className={footerLink} href="https://fvbdesign.com/" {...external}>
          FVB Design
        </a>{" "}
        | Ontwikkeling door{" "}
        <a className={footerLink} href="https://leunes.studio" {...external}>
          Leunes Studios
        </a>
      </p>
    </footer>
  )
}
