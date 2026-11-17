import { CmsImage } from "@/components/cms-image"
import type { AgeGroup as AgeGroupData } from "@/lib/contentful"
import { cx } from "@/lib/cx"

import {
  groupColor,
  groupDescription,
  groupGrid,
  groupHeader,
  groupImage,
  groupLeidingBox,
  groupText,
  leidingItem,
  leidingName,
  leidingPhoto,
} from "./group-styles"

export function AgeGroup({ group }: { group: AgeGroupData }) {
  const background = groupColor(group.color)
  return (
    <div className={groupGrid}>
      <h3
        className={cx(groupHeader, groupText(group.color))}
        style={{ background }}
      >
        {group.name}
      </h3>
      <CmsImage
        image={group.banner}
        alt=""
        sizes="(max-width: 767px) 100vw, 570px"
        className={groupImage}
      />
      <div className={groupDescription}>
        <h4>Voor welke leeftijd?</h4>
        <p>{`${group.ages[0]} tot ${group.ages[1]} jaar`}</p>
        <h4>Voor wie?</h4>
        <p>{group.description}</p>
      </div>
      <div className={groupLeidingBox} style={{ background }}>
        <h4 className="type-nav-white m-0 inline-block self-start rounded-xs bg-nav-background px-6 py-2">
          Leiding
        </h4>
        <div className="flex h-full flex-wrap justify-center px-6 py-4">
          {group.leiding.map(member => (
            <div key={member.id} className={leidingItem(false)}>
              <div className={leidingName(false)}>{member.firstname}</div>
              <CmsImage
                image={member.profilePicture}
                alt=""
                sizes="120px"
                quality={80}
                fixed
                className={cx(leidingPhoto, "border-transparent")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
