import styled from "@emotion/styled"

export const InformationWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[6]}px;
  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 12;
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`

export const InformationNavigation = styled.nav`
  width: 100%;
  max-width: 570px;
  padding: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${p => p.theme.colors.backgroundMuted};
  border-radius: ${p => p.theme.radii.borderRadius};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  button {
    transition: color 0.2s ease;
    &:hover {
      color: ${p =>
        p.gender === 1
          ? p.theme.colors.jokontaLight
          : p.theme.colors.allegroLight};
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    margin-bottom: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[5]}px ${p => p.theme.space[2]}px;
    button {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
  @media ${p => p.theme.mq.mobileS} {
    button {
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
  }
`

export const InformationBlock = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .fade-enter {
    opacity: 0;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .information__image__container {
    width: 100%;
    height: 320px;
    border-radius: ${p => p.theme.radii.borderRadius};
  }

  .information__article {
    width: 100%;
    max-width: 850px;
    transform: translate3d(0, -48px, 0);
    padding: ${p => p.theme.space[7]}px;
    background-color: ${p => p.theme.colors.backgroundMuted2};
    box-shadow: ${p => p.theme.shadows.boxShadow.container};
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    h2,
    h3 {
      margin: 0;
      text-transform: uppercase;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    h2 {
      font-size: ${p => p.theme.fontSizes[3]}px;
    }
    h3 {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
    > p {
      margin-top: ${p => p.theme.space[1]}px;
      margin-bottom: ${p => p.theme.space[4]}px;
      white-space: pre-line;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    i,
    strong,
    em {
      word-break: break-all;
    }
    li p {
      margin: 0;
    }
    img {
      display: block;
      max-width: 500px;
      margin: 0 auto;
      width: 100%;
    }
    a {
      color: ${p =>
        p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
      transition: color 0.2s cubic-bezier(0.87, 0, 0.13, 1);
      &:hover {
        transition: color 0.2s ease;
        color: ${p =>
          p.gender === 1
            ? p.theme.colors.jokontaLight
            : p.theme.colors.allegroLight};
      }
    }
  }
  > a {
    align-self: flex-start;
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
    .information__article {
      max-width: 650px;
    }

    .information__image__container {
      height: 280px;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    .information__image__container {
      height: 200px;
    }
    .information__article {
      padding: ${p => p.theme.space[4]}px;
      h2 {
        font-size: ${p => p.theme.fontSizes[2]}px;
      }
      h3 {
        font-size: 16px;
      }
      p {
        font-size: 16px;
        margin-bottom: ${p => p.theme.space[2]}px;
      }
      ul {
        padding-left: ${p => p.theme.space[4]}px;
      }
    }
  }
`
