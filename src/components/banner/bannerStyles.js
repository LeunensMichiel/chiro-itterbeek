import styled from "@emotion/styled"

export const BannerWrapper = styled.div`
  grid-column: 1 / span 14;
  display: flex;
  margin-bottom: ${p => p.theme.space[7]}px;
  position: relative;
  overflow: hidden;
  svg {
    width: 100%;
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
`

export const BannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  transform: ${p =>
    p.isDark ? "translate3d(0,0,0)" : "translate3d(0, calc(100% - 110px), 0)"};
  transition: transform 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  will-change: transform;
  backface-visibility: hidden;
  background: rgba(24, 24, 25, 0.33);
`
