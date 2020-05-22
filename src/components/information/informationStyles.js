import styled from "@emotion/styled"

export const InformationWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[6]}px;
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
    }
    li p {
      margin: 0;
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
`
