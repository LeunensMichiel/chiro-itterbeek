import styled from "@emotion/styled"

export const BannerWrapper = styled.div`
  grid-column: 1 / span 14;
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[7]}px;
  position: relative;
  overflow: hidden;
  .banner__image__container {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 25%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: ${p => p.theme.space[3]}px 0;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
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

  @media ${p => p.theme.mq.tablet} {
    margin-bottom: ${p => p.theme.space[6]}px;
    .banner__image__container {
      padding-bottom: 33%;
    }
    img {
      min-width: 140%;
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    h1 {
      font-size: ${p => p.theme.fontSizes[5]}px;
    }
    .banner__image__container {
      padding-bottom: 50%;
    }
    img {
      min-width: 250%;
    }
  }
`

export const BannerOverlay = styled.div`
  width: 100%;
  height: ${p => (p.isDark ? "100%" : "110px")};
  position: absolute;
  z-index: 1;
  bottom: 0;
  background: rgba(24, 24, 25, 0.33);

  @media ${p => p.theme.mq.mobileM} {
    height: ${p => (p.isDark ? "100%" : "70px")} !important;
  }
`

export const ContactWrapper = styled.section`
  grid-column: 1 / span 14;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[7]}px 0;
  margin-bottom: ${p => p.theme.space[7]}px;
  background-color: ${p => p.theme.colors.backgroundMuted};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  text-align: center;
  h1 {
    max-width: 760px;
    margin: 0;
    margin-bottom: ${p => p.theme.space[5]}px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }
  p {
    max-width: 570px;
    margin: 0;
    margin-bottom: ${p => p.theme.space[6]}px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    a {
      color: ${p => p.theme.colors.paragraph};
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
  }
  .contact__wrapper__goodbye {
    color: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    line-height: 1;
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-weight: 700;
    text-transform: uppercase;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  @media ${p => p.theme.mq.tablet} {
    margin-bottom: ${p => p.theme.space[6]}px;
    h1 {
      font-size: ${p => p.theme.fontSizes[5]}px;
    }
  }
  @media ${p => p.theme.mq.tablet} {
    padding: ${p => p.theme.space[6]}px ${p => p.theme.space[4]}px;
    p {
      font-size: 16px;
      margin-bottom: ${p => p.theme.space[4]}px;
    }
  }
`
