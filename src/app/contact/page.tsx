import { Suspense } from "react"

import { ChoosePage } from "@/components/choose-page"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { MapLoader } from "@/components/contact/map-loader"
import { SubmittedToast } from "@/components/contact/submitted-toast"
import { OnlyFor } from "@/components/only-for"
import { CHIROS } from "@/lib/chiro"
import { getContactInfo } from "@/lib/contentful"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contactgevens van Chiro Itterbeek. Stuur ons gerust een berichtje!",
  path: "/contact/",
})

export default async function ContactPage() {
  const contacts = await getContactInfo()
  return (
    <>
      <Suspense>
        <SubmittedToast />
      </Suspense>
      <OnlyFor chiro="unchosen">
        <ChoosePage />
      </OnlyFor>
      <OnlyFor chiro="chosen">
        {CHIROS.map(chiro => (
          <OnlyFor key={chiro} chiro={chiro}>
            <ContactForm chiro={chiro} />
          </OnlyFor>
        ))}
        <MapLoader />
        <ContactInfo contacts={contacts} />
      </OnlyFor>
    </>
  )
}
