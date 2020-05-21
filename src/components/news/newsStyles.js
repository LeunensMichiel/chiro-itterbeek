import styled from "@emotion/styled"

export const HighlightWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  flex-direction: column;
  margin-top: ${p => (p.margin ? p.theme.space[7] : 0)}px;
  margin-bottom: ${p => p.theme.space[7]}px;

  h2 {
    align-self: flex-start;
    display: block;
    color: ${p => p.theme.colors.styledHeaderText};
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
    margin-top: 0;
    margin-bottom: 12px;
    background: ${p => p.theme.colors.accent};
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[2]}px;
    border-radius: ${p => p.theme.radii.borderRadius};
  }

  hr {
    width: 66%;
    margin-top: ${p => p.theme.space[2]}px;
    border-color: ${p => p.theme.colors.border};
    border-style: solid;
    transition: border-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }
`

export const HighlightItem = styled.div`
  position: relative;
  display: flex;
  .headline__image {
    position: relative;
    height: 360px;
    width: 100%;
    border-radius: ${p => p.theme.radii.borderRadius};
    &:after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: ${p => p.theme.radii.borderRadius};
      background: linear-gradient(
        180deg,
        rgba(24, 24, 25, 0.33) 0%,
        rgba(24, 24, 25, 0.5) 63.54%,
        rgba(24, 24, 25, 0.5) 100%
      );
    }
  }
  .headline__text {
    padding: ${p => p.theme.space[6]}px;
    position: absolute;
    bottom: 0;
    h3 {
      display: block;
      color: ${p => p.theme.colors.styledHeaderText};
      margin-top: 0;
      margin-bottom: ${p => p.theme.space[1]}px;
      text-transform: uppercase;
      font-size: ${p => p.theme.fontSizes[4]}px;
      line-height: 1;
    }
    small {
      display: block;
      margin-bottom: ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[0]}px;
      color: ${p => p.theme.colors.highlightText};
      text-transform: uppercase;
      line-height: 1;
    }
    a {
      display: flex;
      align-items: center;
      color: ${p => p.theme.colors.highlightText};
      text-decoration: underline;
      font-size: ${p => p.theme.fontSizes[2]}px;
      font-family: inherit;
      line-height: 1;
      svg {
        margin-top: 4px;
        margin-left: ${p => p.theme.space[1]}px;
        height: 11px;
        path {
          fill: ${p => p.theme.colors.highlightText};
        }
      }
    }
  }
`
