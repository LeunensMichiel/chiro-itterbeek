import BoekjeIllustration from "@/components/icons/boekje"
import { OnlyFor } from "@/components/only-for"
import { CHIROS, type Chiro } from "@/lib/chiro"
import type { Boekje } from "@/lib/contentful"
import { formatEdition } from "@/lib/format"

const NAMES: Record<Chiro, string> = {
  jokonta: "Jokontakt",
  allegro: "Chirokrantje",
}

/** The current edition of the chosen chiro's krantje. */
export function HighlightedBoekje({
  boekjes,
}: {
  boekjes: Record<Chiro, Boekje | null>
}) {
  return (
    <section className="col-[6/span_8] mb-24 flex h-[315px] rounded-xs border border-solid border-border bg-background-muted-2 px-6 py-12 max-tablet:mb-9 max-tablet:h-[280px] max-mobile:col-[2/span_12] max-mobile:flex-col-reverse">
      <div className="relative w-full">
        <BoekjeIllustration className="absolute -top-8 left-0 max-h-[360px] w-auto max-tablet:max-w-[200px] max-mobile:-top-16 max-mobile:right-0 max-mobile:left-auto max-mobile:max-w-[124px] max-mobile-s:-right-[60px]" />
      </div>
      <div className="w-full">
        {CHIROS.map(chiro => {
          const boekje = boekjes[chiro]
          return (
            <OnlyFor key={chiro} chiro={chiro}>
              <h2 className="type-alt m-0 mb-4 max-tablet:mb-2 max-tablet:text-4xl">
                {NAMES[chiro]}
              </h2>
              <p className="type-paragraph m-0 mb-6 max-tablet:mb-4 max-tablet:text-sm">
                Lees hier de meest recente versie van ons megatof, 2-maandelijks
                chiro-boekje!
              </p>
              {boekje && (
                <>
                  <a
                    aria-label="Boekje bekijken"
                    href={boekje.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6 inline-block rounded-xs bg-chiro px-12 py-4 leading-none font-bold text-styled-header-text uppercase no-underline shadow-container transition-colors duration-400 ease-in-out hover:bg-chiro-light max-tablet:mb-2"
                  >
                    Lezen
                  </a>
                  <small className="block text-xs text-invisible-text">
                    {formatEdition(boekje.startdate, boekje.enddate)}
                  </small>
                </>
              )}
            </OnlyFor>
          )
        })}
      </div>
    </section>
  )
}
