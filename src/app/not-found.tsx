import Image from "next/image"
import Link from "next/link"

import clock from "@/assets/images/klok.svg"

export const metadata = { title: "Pagina niet gevonden" }

export default function NotFound() {
  return (
    <div className="col-[2/span_12] mt-1 mb-16 flex min-h-[66vh] flex-col items-center justify-center text-center max-mobile:min-h-[30vh]">
      <Image
        src={clock}
        alt=""
        unoptimized
        className="h-auto w-full max-w-[360px] max-mobile:max-w-[200px]"
      />
      <h1 className="type-alt mt-6 mb-3 max-mobile:text-4xl">
        Deze pagina bestaat niet!
      </h1>
      <p className="type-paragraph m-0 mb-9 max-w-[460px] max-mobile:text-base">
        Misschien is ze verhuisd, of zat er een foutje in de link.
      </p>
      <Link
        href="/"
        className="rounded-xs bg-chiro px-12 py-4 leading-none font-bold text-styled-header-text uppercase no-underline shadow-container transition-colors duration-400 ease-in-out hover:bg-chiro-dark"
      >
        Terug naar home
      </Link>
    </div>
  )
}
