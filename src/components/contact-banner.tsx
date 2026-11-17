import Link from "next/link"

export function ContactBanner() {
  return (
    <section className="col-[1/span_14] mb-16 flex flex-col items-center bg-background-muted py-16 text-center max-tablet:mb-12 max-tablet:px-6 max-tablet:py-12">
      <h1 className="type-alt m-0 mb-9 max-w-[760px] max-tablet:text-4xl">
        Geïnteresseerd, of heb je nog vragen?
      </h1>
      <p className="type-paragraph m-0 mb-12 max-w-[570px] max-tablet:mb-6 max-tablet:text-base">
        Je bent altijd welkom op elke zondag van 14:00 tot 17:00. De leiding ter
        plekke helpt je graag verder. Je kan ons ook altijd bereiken via onze
        sociale media, of{" "}
        <Link href="/contact/" className="text-paragraph">
          klik hier
        </Link>{" "}
        om ons een berichtje te sturen!
      </p>
      <div className="text-lg leading-none font-bold text-chiro uppercase">
        Tot dan!
      </div>
    </section>
  )
}
