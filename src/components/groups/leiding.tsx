"use client"

import { useState } from "react"

import { CmsImage } from "@/components/cms-image"
import type { Chiro } from "@/lib/chiro"
import type { CmsImage as CmsImageData, LeidingMember } from "@/lib/contentful"
import { cx } from "@/lib/cx"
import { useToday } from "@/lib/use-today"

import {
  groupColor,
  groupDescription,
  groupGrid,
  groupHeader,
  groupImage,
  groupLeidingBox,
  leidingItem,
  leidingName,
  leidingPhoto,
} from "./group-styles"

/** Age in whole years on `today` ("YYYY-MM-DD"), from the Contentful date. */
function ageOn(birthday: string, today: string) {
  const [year = 0, month = 0, day = 0] = birthday
    .slice(0, 10)
    .split("-")
    .map(Number)
  const [nowYear = 0, nowMonth = 0, nowDay = 0] = today.split("-").map(Number)
  const hadBirthday = nowMonth > month || (nowMonth === month && nowDay >= day)
  return nowYear - year - (hadBirthday ? 0 : 1)
}

const lower = (items: string[]) =>
  items.map(item => item.toLowerCase()).join(", ")

export function Leiding({
  chiro,
  leiding,
  groupPhoto,
  buildDay,
}: {
  chiro: Chiro
  leiding: LeidingMember[]
  groupPhoto: CmsImageData | null
  buildDay: string
}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const today = useToday(buildDay)
  const selected = leiding[selectedIndex] ?? leiding[0]
  const background = groupColor()

  return (
    <div className={groupGrid}>
      <h2 className={groupHeader} style={{ background }}>
        Leiding
      </h2>
      {groupPhoto && (
        <CmsImage
          image={groupPhoto}
          alt={groupPhoto.title}
          title={groupPhoto.title}
          sizes="(max-width: 767px) 100vw, 570px"
          className={groupImage}
        />
      )}
      <div className={groupDescription}>
        <h4>{`Ontmoet je ${chiro === "jokonta" ? "leiding" : "leidsters"}!`}</h4>
        <p>
          {chiro === "jokonta"
            ? "Deze klassebakken staan elke zondag voor je klaar! Klik op een leider om hem beter te leren kennen!"
            : "Deze jongedames staan elke zondag voor je klaar! Klik op een leidster om haar beter te leren kennen!"}
        </p>
        <div className="flex flex-wrap justify-evenly">
          {leiding.map((member, index) => (
            <button
              key={member.id}
              className={leidingItem(true)}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={member === selected}
              aria-label={member.firstname}
            >
              <span className={leidingName(true)}>{member.firstname}</span>
              <CmsImage
                image={member.profilePicture}
                alt=""
                title={member.firstname}
                sizes="96px"
                quality={80}
                fixed
                className={cx(
                  leidingPhoto,
                  "cursor-pointer",
                  member === selected
                    ? "border-accent-gray"
                    : "border-transparent",
                )}
              />
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div
          className={cx(
            groupLeidingBox,
            "flex-row items-center p-6 max-mobile:flex-col",
          )}
          style={{ background }}
        >
          <CmsImage
            image={selected.profilePicture}
            alt={selected.firstname}
            title={selected.firstname}
            sizes="150px"
            quality={80}
            fixed
            className="size-[150px] shrink-0 rounded-full max-mobile:mb-4"
          />
          <div className="ml-9 text-styled-header-text [&_p]:m-0 [&_p]:mb-1 [&_p]:text-sm [&_p]:leading-[1.2]">
            <h3 className="m-0 mb-4 text-xl leading-[1.2] uppercase">
              {selected.firstname}
              {' "'}
              <span className="text-sm">{selected.nickname}</span>
              {'" '}
              {selected.lastname}
            </h3>
            <p>
              Is <b>{ageOn(selected.birthday, today)}</b> jaar
            </p>
            <p>
              Eet op de chiro graag <b>{lower(selected.food)}</b>
            </p>
            <p>
              Op de chiro houdt {selected.firstname} van{" "}
              <b>{lower(selected.activities)}</b>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
