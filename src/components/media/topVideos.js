/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { TopVideoWrapper } from "./mediaStyles"
import { GenderContext } from "../../context/GenderContext"

export const TopVideos = () => {
  const { genderState } = useContext(GenderContext)

  return (
    <TopVideoWrapper>
      <h2
        sx={{
          variant: "text.headingAlternative",
        }}
      >
        Uitgelichte video's
      </h2>
      <div className="media__vidcontainer">
        <div className="media__video__wrapper">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FChiroItterbeek%2Fvideos%2F2007405239562488%2F&show_text=0"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="media__video__wrapper">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            src="https://www.youtube-nocookie.com/embed/G2s9r_BohUE"
            style={{ border: "none", overflow: "hidden" }}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </TopVideoWrapper>
  )
}
