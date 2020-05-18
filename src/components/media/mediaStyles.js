import styled from "@emotion/styled"

export const HighlightedWrapper = styled.section`
  grid-column: 6 / span 8;
  display: flex;
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
