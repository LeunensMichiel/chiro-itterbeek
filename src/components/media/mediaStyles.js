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
      width: 290px;
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
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
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
        fill: ${p => p.theme.colors.asideText};
        margin-top: 4px;
        margin-left: ${p => p.theme.space[1]}px;
        height: 11px;
        transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      }
    }
    small {
      display: block;
      font-size: ${p => p.theme.fontSizes[0]}px;
      color: ${p => p.theme.colors.invisibleText};
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
`

export const AlbumItem = styled.div`
  width: 100%;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
  background-color: ${p => p.theme.colors.backgroundMuted2};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
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
    .album__title {
      margin-bottom: ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[2]}px;
      line-height: 1;
      font-weight: 700;
      color: ${p => p.theme.colors.header};
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    a {
      margin-bottom: ${p => p.theme.space[3]}px;
      display: flex;
      align-items: center;
      color: ${p => p.theme.colors.paragraph};
      text-decoration: underline;
      font-size: ${p => p.theme.fontSizes[1]}px;
      font-family: inherit;
      line-height: 1;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      svg {
        fill: ${p => p.theme.colors.asideText};
        margin-top: 4px;
        margin-left: ${p => p.theme.space[1]}px;
        height: 11px;
        transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      }
    }
  }
`
