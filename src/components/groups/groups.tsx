import { OnlyFor } from "@/components/only-for"
import { CHIROS, type Chiro } from "@/lib/chiro"
import type {
  AgeGroup as AgeGroupData,
  CmsImage,
  LeidingMember,
} from "@/lib/contentful"

import { AgeGroup } from "./age-group"
import { GroupsBrowser } from "./groups-browser"
import { Leiding } from "./leiding"

export function Groups({
  groups,
  leiding,
  leidingPhotos,
  buildDay,
}: {
  groups: AgeGroupData[]
  leiding: LeidingMember[]
  leidingPhotos: Record<Chiro, CmsImage | null>
  buildDay: string
}) {
  return CHIROS.map(chiro => (
    <OnlyFor key={chiro} chiro={chiro}>
      <GroupsBrowser
        groups={groups
          .filter(group => group.chiro === chiro)
          .map(group => ({
            id: group.id,
            color: group.color,
            name: group.name,
            view: <AgeGroup group={group} />,
          }))}
        leiding={
          <Leiding
            chiro={chiro}
            leiding={leiding.filter(member => member.chiro === chiro)}
            groupPhoto={leidingPhotos[chiro]}
            buildDay={buildDay}
          />
        }
      />
    </OnlyFor>
  ))
}
