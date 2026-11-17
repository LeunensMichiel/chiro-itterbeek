import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer"
import { BLOCKS, type Document } from "@contentful/rich-text-types"

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const url: unknown = node.data?.target?.fields?.file?.url
      return typeof url === "string" ? (
        // eslint-disable-next-line @next/next/no-img-element -- any size, straight from the CMS
        <img alt="Nieuws foto" src={url} loading="lazy" />
      ) : null
    },
  },
}

/** Contentful rich text; style it with the `rich-text` class on a parent. */
export const RichText = ({ document }: { document: Document }) =>
  documentToReactComponents(document, options)
