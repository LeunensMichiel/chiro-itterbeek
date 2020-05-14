import styled from "@emotion/styled"

export const BannerWrapper = styled.div`
  grid-column: 1 / span 14;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: ${p => p.theme.space[7]}px;
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
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: #181819;
      opacity: 0.33;
      z-index: -1;
    }
  }
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
