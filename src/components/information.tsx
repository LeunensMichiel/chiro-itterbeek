import { CHIROS } from "@/lib/chiro"
import type { InfoBlock } from "@/lib/contentful"

import { CmsImage } from "./cms-image"
import { InfoTabs } from "./info-tabs"
import { OnlyFor } from "./only-for"
import { RichText } from "./rich-text"

// Tabs map onto a chiro's blocks in rank order
const TABS = ["Algemeen", "Inschrijven", "Uniform"]

export function Information({ blocks }: { blocks: InfoBlock[] }) {
  return CHIROS.map(chiro => (
    <OnlyFor key={chiro} chiro={chiro}>
      <InfoTabs
        panels={blocks
          .filter(block => block.chiro === chiro)
          .slice(0, TABS.length)
          .map((block, index) => ({
            id: block.id,
            label: TABS[index]!,
            image: (
              <CmsImage
                image={block.banner}
                alt={block.title}
                title={block.title}
                sizes="(max-width: 1024px) 100vw, 950px"
                className="h-[320px] w-full rounded-xs max-tablet:h-[280px] max-mobile:h-[200px]"
              />
            ),
            content: block.info && <RichText document={block.info} />,
          }))}
      />
    </OnlyFor>
  ))
}
