import { OnlyFor } from "@/components/only-for"
import { SocialLinks } from "@/components/social-links"
import { CHIROS } from "@/lib/chiro"
import type { ContactInfo as ContactInfoData } from "@/lib/contentful"

import { SwitchChiroButton } from "./switch-chiro-button"

const EMAIL = {
  jokonta: "chirojokonta@outlook.com",
  allegro: "chiro.allegro@outlook.com",
}

const heading = "m-0 mb-2 text-lg text-chiro-ink uppercase"
const section =
  "mb-6 [&_a]:text-paragraph [&_a]:underline-offset-2 [&_a:hover]:text-chiro-ink [&_p]:m-0 [&_p]:wrap-break-word"

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Plankenstraat+23,+1701+Itterbeek"

/** "0470 12 34 56" → "+32470123456", for tel: links */
const telHref = (phone: string) =>
  `tel:${phone.replace(/[^\d+]/g, "").replace(/^0/, "+32")}`

export function ContactInfo({ contacts }: { contacts: ContactInfoData[] }) {
  return (
    <aside className="col-[9/span_5] mb-16 ml-12 rounded-xs border border-solid border-border bg-background-muted-2 p-9 max-tablet:col-[8/span_6] max-tablet:mb-12 max-tablet:ml-0 max-mobile:col-[2/span_12] max-mobile:p-6">
      <h2 className="type-nav m-0 mb-6">Contactgegevens</h2>
      <h3 className={heading}>Adres</h3>
      <div className={section}>
        <p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            Plankenstraat 23
            <br />
            1701 Itterbeek
          </a>
        </p>
        <p>Vlaams-Brabant, België</p>
      </div>
      {CHIROS.map(chiro => (
        <OnlyFor key={chiro} chiro={chiro}>
          <h3 className={heading}>Hoofdleiding</h3>
          {contacts
            .filter(contact => contact.chiro === chiro)
            .map(contact => (
              <div key={contact.id} className={section}>
                <p>{contact.fullName}</p>
                {contact.isVolwassenBegeleider && <p>(volwassen begeleider)</p>}
                <p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
                {contact.phone && (
                  <p>
                    <a href={telHref(contact.phone)}>{contact.phone}</a>
                  </p>
                )}
              </div>
            ))}
          <h3 className={heading}>Communicatie</h3>
          <div className={section}>
            <p>
              <a href={`mailto:${EMAIL[chiro]}`}>{EMAIL[chiro]}</a>
            </p>
            <p>Elke zondag van 14:00 tot 17:00</p>
            <p>Niet bereikbaar en een dringende vraag?</p>
            <p>
              Probeer eens bij de{" "}
              <SwitchChiroButton
                label={chiro === "jokonta" ? "meisjes." : "jongens."}
              />
            </p>
          </div>
        </OnlyFor>
      ))}
      <h3 className={heading}>Nuttige links</h3>
      <SocialLinks onMuted className="items-start justify-self-end" />
    </aside>
  )
}
