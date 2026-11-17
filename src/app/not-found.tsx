import Image from "next/image"

import clock from "@/assets/images/klok.svg"

export const metadata = { title: "Pagina niet gevonden" }

export default function NotFound() {
  return (
    <div className="col-[2/span_12] mt-1 flex min-h-[66vh] flex-col items-center justify-center max-mobile:min-h-[30vh]">
      <Image
        src={clock}
        alt="Klok"
        unoptimized
        className="h-auto w-full max-w-[360px] max-mobile:max-w-[200px]"
      />
      <h1 className="max-mobile:text-xl">Deze pagina bestaat niet!</h1>
    </div>
  )
}
