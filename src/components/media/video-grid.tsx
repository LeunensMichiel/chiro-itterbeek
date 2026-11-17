import type { Video } from "@/lib/contentful"

/** Embedded Facebook / YouTube videos, two per row. */
export function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      {videos.map(video => (
        <div
          key={video.id}
          className="relative col-span-1 h-0 pb-[56.25%] max-mobile:col-span-2"
        >
          <iframe
            className="absolute top-0 left-0 h-full w-full overflow-hidden border-none"
            title={video.title}
            src={video.url}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ))}
    </div>
  )
}
