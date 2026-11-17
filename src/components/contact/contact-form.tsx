import { type Chiro, chiroName } from "@/lib/chiro"
import { cx } from "@/lib/cx"

const field = (textarea = false) =>
  cx(
    "mb-4 flex flex-col max-mobile:col-[1/span_12] max-mobile:row-auto",
    textarea
      ? "col-[7/span_5] row-[1/span_3]"
      : "col-[2/span_4] max-tablet:col-[2/span_5]",
  )
const label = "mb-2 text-lg text-aside-text max-mobile:text-sm"
const input =
  "h-12 rounded-none border-0 border-b-2 border-solid border-invisible-text bg-input px-4 py-2 text-lg text-header outline-chiro-ink transition-[border-color] focus:border-chiro-ink max-mobile:p-2 max-mobile:text-base"

/**
 * Contact form, handled by Netlify Forms: one form per chiro, so messages go
 * to the right leiding. The contact page renders both and CSS shows the
 * chosen one, so the right form is there before any JavaScript runs.
 * Netlify also learns both forms from public/__forms.html.
 */
export function ContactForm({ chiro }: { chiro: Chiro }) {
  const name = chiroName(chiro)
  const formName = `Contact ${name}`
  // Both forms are in the page, so their field ids must differ
  const id = (field: string) => `${chiro}-${field}`

  return (
    <section className="col-[2/span_12] mt-16 mb-12 flex flex-col rounded-xs border border-solid border-border bg-background-muted-2 max-tablet:mt-12">
      <h1 className="m-0 inline-block self-start rounded-xs bg-chiro px-9 py-4 text-lg text-styled-header-text uppercase max-mobile:px-4 max-mobile:py-2 max-mobile:text-sm">
        {`Contactformulier ${name}`}
      </h1>
      <form
        name={formName}
        action="/contact/?submit=ok"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="my-16 grid grid-cols-12 grid-rows-[repeat(4,auto)] max-tablet:my-9 max-tablet:gap-x-4 max-mobile:my-4 max-mobile:auto-rows-auto max-mobile:grid-rows-none max-mobile:gap-x-0 max-mobile:px-4"
      >
        <input type="hidden" name="form-name" value={formName} />
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="chiro" value={name} />
        <div className={field()}>
          <label htmlFor={id("naam")} className={label}>
            Naam<sup>*</sup>
          </label>
          <input
            className={input}
            type="text"
            id={id("naam")}
            name="naam"
            required
            autoComplete="name"
          />
        </div>
        <div className={field()}>
          <label htmlFor={id("email")} className={label}>
            E-mail<sup>*</sup>
          </label>
          <input
            className={input}
            type="email"
            id={id("email")}
            name="email"
            required
            autoComplete="email"
          />
        </div>
        <div className={field()}>
          <label htmlFor={id("phone")} className={label}>
            Telefoon
          </label>
          <input
            className={input}
            type="tel"
            id={id("phone")}
            name="telefoon"
            autoComplete="tel"
          />
        </div>
        <div className={field()}>
          <label htmlFor={id("subject")} className={label}>
            Onderwerp<sup>*</sup>
          </label>
          <input
            className={input}
            type="text"
            id={id("subject")}
            name="onderwerp"
            required
          />
        </div>
        <div className={field(true)}>
          <label htmlFor={id("message")} className={label}>
            Bericht<sup>*</sup>
          </label>
          <textarea
            className={cx(input, "h-full max-mobile:min-h-[200px]")}
            id={id("message")}
            name="bericht"
            required
          />
        </div>
        <p className="col-[7/span_3] row-4 m-0 mt-2 mb-4 self-center pr-4 text-sm leading-snug text-aside-text max-tablet:col-[7/span_3] max-mobile:col-[1/span_12] max-mobile:row-auto max-mobile:pr-0">
          {`Velden met * zijn verplicht. Je bericht gaat naar de leiding van ${name}.`}
        </p>
        <button
          type="submit"
          className="col-[10/span_2] row-4 mb-4 self-end justify-self-end rounded-xs bg-chiro px-12 py-4 font-bold text-styled-header-text uppercase shadow-container transition-colors duration-400 ease-in-out hover:bg-chiro-dark max-mobile:col-[11/span_2] max-mobile:row-auto max-mobile:mb-0"
        >
          Verstuur
        </button>
      </form>
    </section>
  )
}
