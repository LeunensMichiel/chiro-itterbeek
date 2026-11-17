"use client"

import Image, { type StaticImageData } from "next/image"

import boy from "@/assets/images/jongen.svg"
import boyWave from "@/assets/images/jongen-zwaaien.svg"
import girl from "@/assets/images/meisje.svg"
import girlWave from "@/assets/images/meisje-zwaaien.svg"
import type { Chiro } from "@/lib/chiro"
import { cx } from "@/lib/cx"
import { setChiro } from "@/lib/use-preferences"

type Side = {
  chiro: Chiro
  name: string
  who: string
  image: StaticImageData
  imageAlt: string
  wave: StaticImageData
  waveAlt: string
}

const SIDES: Side[] = [
  {
    chiro: "jokonta",
    name: "Jokonta",
    who: "Jongens",
    image: boy,
    imageAlt: "Jongetje van Itterbeek",
    wave: boyWave,
    waveAlt: "Jongetje van Chiro Itterbeek dat zwaait.",
  },
  {
    chiro: "allegro",
    name: "Allegro",
    who: "Meisjes",
    image: girl,
    imageAlt: "Meisje van Itterbeek",
    wave: girlWave,
    waveAlt: "Meisje van Chiro Itterbeek dat zwaait.",
  },
]

/** Choose, then start reading the chosen chiro's page from the top. */
function choose(chiro: Chiro) {
  setChiro(chiro)
  window.scrollTo({ top: 0 })
  document.getElementById("main")?.focus({ preventScroll: true })
}

/** First visit: pick the boys' (Jokonta) or the girls' (Allegro) chiro. */
export function ChoosePage() {
  return (
    <>
      <h1 className="type-heading col-[2/span_12] mt-12 mb-0 text-center max-tablet:mt-9 max-mobile:mt-6 max-mobile:text-xl">
        Welkom! Kies je chiro
      </h1>
      {SIDES.map(({ chiro, name, who, image, imageAlt, wave, waveAlt }) => {
        const isJokonta = chiro === "jokonta"
        const imageClass = cx(
          "block h-[min(550px,58vh)] w-auto max-tablet:h-[min(400px,48vh)] max-mobile-s:h-[200px]",
          isJokonta ? "mt-12 max-mobile-s:mt-6" : "-mt-6 max-mobile-s:mt-0",
        )
        return (
          <button
            key={chiro}
            type="button"
            aria-label={`Kies Chiro ${name} (${who.toLowerCase()})`}
            onClick={() => choose(chiro)}
            className={cx(
              "group relative flex h-[70vh] max-h-full min-h-full w-full items-center justify-end pb-10",
              "max-tablet:min-h-full max-tablet:flex-col-reverse max-tablet:justify-center max-mobile:h-auto max-mobile:py-6",
              isJokonta
                ? "col-[1/span_7] flex-row justify-self-end max-tablet:items-end"
                : "col-[8/span_7] flex-row-reverse justify-self-start max-tablet:items-start",
            )}
          >
            <span
              aria-hidden
              className={cx(
                "type-alt absolute -z-1 m-0 block text-9xl text-background-muted select-none max-tablet:text-7xl max-mobile:hidden",
                isJokonta ? "right-[100px]" : "left-[100px]",
              )}
            >
              {name}
            </span>
            <span
              className={cx(
                "flex flex-col max-tablet:mt-6 max-mobile:my-4",
                isJokonta
                  ? "items-end max-tablet:mr-12 max-mobile:mr-6"
                  : "items-start max-tablet:ml-12 max-mobile:ml-6",
              )}
            >
              <span
                className={cx(
                  "type-alt block text-4xl transition-colors duration-300 ease-in-out max-mobile:text-2xl",
                  isJokonta
                    ? "group-hover:text-jokonta group-focus-visible:text-jokonta dark:group-hover:text-jokonta-light dark:group-focus-visible:text-jokonta-light"
                    : "group-hover:text-allegro group-focus-visible:text-allegro dark:group-hover:text-allegro-light dark:group-focus-visible:text-allegro-light",
                )}
              >
                {name}
              </span>
              <span className="text-lg leading-tight font-bold text-aside-text uppercase max-mobile:text-sm">
                {who}
              </span>
            </span>
            <Image
              src={image}
              alt={imageAlt}
              unoptimized
              loading="eager"
              className={cx(
                imageClass,
                "group-hover:hidden group-focus-visible:hidden",
              )}
            />
            <Image
              src={wave}
              alt={waveAlt}
              unoptimized
              loading="eager"
              className={cx(
                imageClass,
                "hidden! group-hover:block! group-focus-visible:block!",
              )}
            />
          </button>
        )
      })}
    </>
  )
}
