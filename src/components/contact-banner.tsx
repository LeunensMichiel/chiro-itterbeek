import Link from "next/link"

export function ContactBanner() {
  return (
    <section className="col-[1/span_14] mb-16 flex flex-col items-center bg-background-muted py-16 text-center max-tablet:mb-12 max-tablet:px-6 max-tablet:py-12">
      <h2 className="type-alt m-0 mb-9 max-w-[760px] max-tablet:text-4xl">
        Geïnteresseerd, of heb je nog vragen?
      </h2>
      <p className="type-paragraph m-0 mb-9 max-w-[570px] max-tablet:mb-6 max-tablet:text-base">
        Je bent altijd welkom op elke zondag van 14:00 tot 17:00. De leiding ter
        plekke helpt je graag verder. Je kan ons ook altijd bereiken via onze
        sociale media, of stuur ons gewoon een berichtje!
      </p>
      <Link
        href="/contact/"
        className="mb-9 rounded-xs bg-chiro px-12 py-4 leading-none font-bold text-styled-header-text uppercase no-underline shadow-container transition-colors duration-400 ease-in-out hover:bg-chiro-dark max-tablet:mb-6"
      >
        Stuur een berichtje
      </Link>
      <div className="text-lg leading-none font-bold text-chiro-ink uppercase">
        Tot dan!
      </div>
    </section>
  )
}
