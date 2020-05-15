import styled from "@emotion/styled"

export const BannerWrapper = styled.div`
  grid-column: 1 / span 14;
  display: flex;
  margin-bottom: ${p => p.theme.space[7]}px;
  position: relative;
  svg {
    width: 100%;
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
`

export const BannerOverlay = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  max-height: ${p => (p.isDark ? "100%" : "110px")};
  transition: max-height 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  background: rgba(24, 24, 25, 0.33);
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
`
