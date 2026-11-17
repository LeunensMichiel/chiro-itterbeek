"use client"

import Image, { type StaticImageData } from "next/image"
import type { KeyboardEvent } from "react"

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
  image: StaticImageData
  imageAlt: string
  wave: StaticImageData
  waveAlt: string
}

const SIDES: Side[] = [
  {
    chiro: "jokonta",
    name: "Jokonta",
    image: boy,
    imageAlt: "Jongetje van Itterbeek",
    wave: boyWave,
    waveAlt: "Jongetje van Chiro Itterbeek dat zwaait.",
  },
  {
    chiro: "allegro",
    name: "Allegro",
    image: girl,
    imageAlt: "Meisje van Itterbeek",
    wave: girlWave,
    waveAlt: "Meisje van Chiro Itterbeek dat zwaait.",
  },
]

const onActivateKey = (chiro: Chiro) => (event: KeyboardEvent) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault()
    setChiro(chiro)
  }
}

/** First visit: pick the boys' (Jokonta) or the girls' (Allegro) chiro. */
export function ChoosePage() {
  return SIDES.map(({ chiro, name, image, imageAlt, wave, waveAlt }) => {
    const isJokonta = chiro === "jokonta"
    const imageClass = cx(
      "block h-[550px] w-[330px] max-tablet:h-[400px] max-tablet:w-auto max-mobile-s:h-[200px]",
      isJokonta ? "mt-12 max-mobile-s:mt-6" : "-mt-12 max-mobile-s:-mt-6",
    )
    return (
      <div
        key={chiro}
        role="button"
        tabIndex={0}
        aria-label={`Kies Chiro ${name}`}
        onClick={() => setChiro(chiro)}
        onKeyDown={onActivateKey(chiro)}
        className={cx(
          "group relative flex h-[75vh] max-h-full min-h-full w-full cursor-pointer items-center justify-end",
          "max-tablet:min-h-full max-tablet:flex-col-reverse max-tablet:justify-center max-mobile:h-[60vh]",
          isJokonta
            ? "col-[1/span_7] flex-row justify-self-end max-tablet:items-end"
            : "col-[8/span_7] flex-row-reverse justify-self-start max-tablet:items-start",
        )}
      >
        <h1
          aria-hidden
          className={cx(
            "type-alt absolute -z-1 m-0 block text-9xl text-background-muted select-none max-tablet:text-7xl max-mobile:hidden",
            isJokonta ? "right-[100px]" : "left-[100px]",
          )}
        >
          {name}
        </h1>
        <h2
          className={cx(
            "type-alt m-0 block text-4xl transition-colors duration-300 ease-in-out max-tablet:mt-6 max-mobile:my-4 max-mobile:text-xl",
            isJokonta
              ? "group-hover:text-jokonta group-focus:text-jokonta max-tablet:mr-12 max-mobile:mr-6"
              : "group-hover:text-allegro group-focus:text-allegro max-tablet:ml-12 max-mobile:ml-6",
          )}
        >
          {name}
        </h2>
        <Image
          src={image}
          alt={imageAlt}
          unoptimized
          loading="eager"
          className={cx(imageClass, "group-hover:hidden group-focus:hidden")}
        />
        <Image
          src={wave}
          alt={waveAlt}
          unoptimized
          loading="eager"
          className={cx(
            imageClass,
            "hidden! group-hover:block! group-focus:block!",
          )}
        />
      </div>
    )
  })
}
