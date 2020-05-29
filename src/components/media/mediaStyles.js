import styled from "@emotion/styled"

export const HighlightedWrapper = styled.section`
  grid-column: 6 / span 8;
  display: flex;
  height: 315px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
  margin-bottom: ${p => p.theme.space[8]}px;
  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.backgroundMuted2};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

  .boekje {
    width: 100%;
    position: relative;
    svg {
      position: absolute;
      left: 0;
      top: -32px;
      max-height: 360px;
      width: auto;
    }
  }
  .pdftext {
    width: 100%;
    h2 {
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      margin: 0;
      margin-bottom: ${p => p.theme.space[3]}px;
    }
    p {
      margin: 0;
      margin-bottom: ${p => p.theme.space[4]}px;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    a {
      display: inline-block;
      padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;
      margin-bottom: ${p => p.theme.space[4]}px;
      background: ${p =>
        p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
      text-transform: uppercase;
      font-weight: 700;
      color: ${p => p.theme.colors.styledHeaderText};
      transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      border-radius: ${p => p.theme.radii.borderRadius};
      box-shadow: ${p => p.theme.shadows.boxShadow.container};
      text-decoration: none;
      line-height: 1;
      &:hover {
        transition: background-color 0.4s ease;
        background: ${p =>
          p.gender === 1
            ? p.theme.colors.jokontaLight
            : p.theme.colors.allegroLight};
      }
    }
    small {
      display: block;
      font-size: ${p => p.theme.fontSizes[0]}px;
      color: ${p => p.theme.colors.invisibleText};
    }
  }
  @media ${p => p.theme.mq.tablet} {
    height: 280px;
    margin-bottom: ${p => p.theme.space[5]}px;

    .boekje {
      svg {
        top: -32px;
        max-width: 200px;
      }
    }
    .pdftext {
      h2 {
        font-size: ${p => p.theme.fontSizes[5]}px;
        margin-bottom: ${p => p.theme.space[2]}px;
      }
      p {
        font-size: ${p => p.theme.fontSizes[1]}px;
        margin-bottom: ${p => p.theme.space[3]}px;
      }
      a {
        margin-bottom: ${p => p.theme.space[2]}px;
      }
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    flex-direction: column-reverse;
    .boekje {
      svg {
        top: -64px;
        right: 0;
        left: initial;
        max-width: 124px;
      }
    }
  }
  @media ${p => p.theme.mq.mobileS} {
    .boekje {
      svg {
        right: -60px;
        left: initial;
        max-width: 124px;
      }
    }
  }
`

export const MoreMedia = styled.nav`
  grid-column: 2 / span 3;
  display: flex;
  flex-direction: column;
  height: 315px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
  margin-bottom: ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.backgroundMuted2};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

  h2 {
    align-self: flex-start;
    display: block;
    color: ${p => p.theme.colors.styledHeaderText};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
    margin-top: 0;
    margin-bottom: ${p => p.theme.space[4]}px;
    background: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[2]}px;
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }
  .media__links {
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
    a {
      margin-bottom: ${p => p.theme.space[3]}px;
      display: flex;
      align-items: center;
      color: ${p => p.theme.colors.paragraph};
      text-decoration: underline;
      font-size: ${p => p.theme.fontSizes[2]}px;
      font-family: inherit;
      line-height: 1;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      svg {
        margin-top: 4px;
        margin-left: ${p => p.theme.space[1]}px;
        height: 11px;
        path {
          fill: ${p => p.theme.colors.asideText};
          transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
        }
      }
    }
    small {
      display: block;
      font-size: ${p => p.theme.fontSizes[0]}px;
      color: ${p => p.theme.colors.invisibleText};
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
  }

  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 4;
    margin-right: 16px;
    height: 280px;
    margin-bottom: ${p => p.theme.space[5]}px;
    h2 {
      margin-bottom: ${p => p.theme.space[2]}px;
    }
    .media__links {
      small {
        font-size: 10px;
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 10;
    height: 260px;
    h2 {
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
  }
`

export const TopVideoWrapper = styled.section`
  grid-column: 2 / span 12;
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[8]}px;
  h2 {
    text-align: center;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    margin: 0;
    margin-bottom: ${p => p.theme.space[6]}px;
  }
  > a {
    margin-bottom: ${p => p.theme.space[5]}px;
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.paragraph};
    text-decoration: underline;
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-family: inherit;
    line-height: 1;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    svg {
      margin-right: ${p => p.theme.space[1]}px;
      transform: rotate(180deg);
      height: 11px;
      path {
        fill: ${p => p.theme.colors.asideText};
        transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      }
    }
  }
  .media__vidcontainer {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    .media__video__wrapper {
      grid-column: span 1;
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media ${p => p.theme.mq.tablet} {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    h2 {
      font-size: ${p => p.theme.fontSizes[5]}px;
      margin-bottom: ${p => p.theme.space[5]}px;
    }
    .media__vidcontainer {
      .media__video__wrapper {
        grid-column: span 2;
      }
    }
  }
`

export const TopAlbumWrapper = styled.section`
  grid-column: 2 / span 12;
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[8]}px;
  h2 {
    text-align: center;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    margin: 0;
    margin-bottom: ${p => p.theme.space[6]}px;
  }
  .album__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
  > a {
    margin-bottom: ${p => p.theme.space[5]}px;
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.paragraph};
    text-decoration: underline;
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-family: inherit;
    line-height: 1;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    svg {
      margin-right: ${p => p.theme.space[1]}px;
      transform: rotate(180deg);
      height: 11px;
      path {
        fill: ${p => p.theme.colors.asideText};
        transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      }
    }
  }
  @media ${p => p.theme.mq.tablet} {
    margin-bottom: ${p => p.theme.space[6]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    margin-top: ${p => p.theme.space[5]}px;
    h2 {
      font-size: ${p => p.theme.fontSizes[5]}px;
      margin-bottom: ${p => p.theme.space[5]}px;
    }
    .album__grid {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;
    }
  }
`

export const AlbumItem = styled.div`
  width: 100%;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
  background-color: ${p => p.theme.colors.backgroundMuted2};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  small {
    display: block;
    font-size: ${p => p.theme.fontSizes[0]}px;
    color: ${p => p.theme.colors.invisibleText};
    margin-bottom: ${p => p.theme.space[1]}px;
  }
  .album__header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.borderRadius};
    color: ${p => p.theme.colors.styledHeaderText};
    background: ${p =>
      p.gender === 1
        ? p.theme.colors.jokonta
        : p.gender === 2
        ? p.theme.colors.allegro
        : p.theme.colors.accent};
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[2]}px;
    line-height: 1;
    font-weight: 700;
  }
  .album__body {
    padding: ${p => p.theme.space[3]}px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .album__title {
      margin-bottom: ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[2]}px;
      line-height: 1;
      font-weight: 700;
      color: ${p => p.theme.colors.header};
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    a {
      margin-top: auto;
      margin-bottom: ${p => p.theme.space[3]}px;
      display: flex;
      align-items: center;
      color: ${p => p.theme.colors.asideText};
      text-decoration: underline;
      font-size: ${p => p.theme.fontSizes[1]}px;
      font-family: inherit;
      line-height: 1;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      svg {
        margin-top: 4px;
        margin-left: ${p => p.theme.space[1]}px;
        height: 11px;
        path {
          fill: ${p => p.theme.colors.asideText};
          transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
        }
      }
    }
  }
  @media ${p => p.theme.mq.tablet} {
    .album__header {
      margin-bottom: ${p => p.theme.space[0]}px;
    }
    .album__body {
      a {
        margin-bottom: ${p => p.theme.space[2]}px;
      }
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    small {
      font-size: 9px;
    }
    .album__header {
      width: unset;
      font-size: ${p => p.theme.fontSizes[1]}px;
      align-self: flex-start;
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
    }
    .album__body {
      a {
        margin-bottom: ${p => p.theme.space[0]}px;
      }
      .album__title {
        font-size: 16px;
      }
    }
  }
`

export const MediaNavitation = styled.nav`
  margin: 0 auto ${p => p.theme.space[6]}px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 570px;
  padding: ${p => p.theme.space[3]}px 0;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.paragraph};
  background-color: ${p => p.theme.colors.backgroundMuted};
  border-radius: ${p => p.theme.radii.borderRadius};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  line-height: 1;
  .media__pagenumber {
    margin: 0 ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes[4]}px;
    line-height: 1;
  }
  a {
    &:nth-of-type(1) {
      pointer-events: ${p => (p.isFirst ? "none" : "auto")};
      svg {
        height: 18px;
        transform: rotate(180deg);
        path {
          transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
          fill: ${p =>
            p.isFirst ? p.theme.colors.accentGray : p.theme.colors.paragraph};
        }
      }
    }
    &:nth-of-type(2) {
      pointer-events: ${p => (p.isLast ? "none" : "auto")};
      svg {
        height: 18px;
        path {
          transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
          fill: ${p =>
            p.isLast ? p.theme.colors.accentGray : p.theme.colors.paragraph};
        }
      }
    }
  }
`
