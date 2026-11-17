import Image, { type StaticImageData } from "next/image"

/** Full-width illustrated section banner, drawn per chiro. */
export function Banner({
  text,
  jokonta,
  allegro,
}: {
  text: string
  jokonta: StaticImageData
  allegro: StaticImageData
}) {
  const image =
    "absolute top-0 h-full w-full transition-opacity duration-200 ease-chiro starting:opacity-0 max-tablet:min-w-[140%] max-mobile:min-w-[250%]"
  return (
    <div className="relative col-[1/span_14] mb-16 flex justify-center max-tablet:mb-12">
      <h1 className="type-banner absolute bottom-0 z-2 m-0 flex w-full items-center justify-center py-4 max-mobile:text-4xl">
        {text}
      </h1>
      {/* Darkens behind the title; covers the whole image in dark mode */}
      <div className="absolute bottom-0 z-1 h-[110px] w-full bg-[rgba(24,24,25,0.33)] transition-[height] duration-500 ease-chiro max-mobile:h-[70px] dark:h-full max-mobile:dark:h-full" />
      <div className="relative flex h-0 w-full justify-center overflow-hidden pb-[25%] max-tablet:pb-[33%] max-mobile:pb-[50%]">
        <Image
          src={jokonta}
          alt={text}
          unoptimized
          loading="eager"
          className={`${image} hidden jokonta:block`}
        />
        <Image
          src={allegro}
          alt={text}
          unoptimized
          loading="eager"
          className={`${image} jokonta:hidden`}
        />
      </div>
    </div>
  )
}
