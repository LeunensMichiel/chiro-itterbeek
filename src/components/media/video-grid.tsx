import type { Video } from "@/lib/contentful"

/** Embedded Facebook / YouTube videos, two per row; a lone one is centered. */
export function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      {videos.map(video => (
        <div
          key={video.id}
          className="relative col-span-1 aspect-video only:col-span-2 only:mx-auto only:w-[calc(50%-0.5rem)] max-mobile:col-span-2 max-mobile:only:w-full"
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
