import styled from "@emotion/styled"

export const ChooseChiro = styled.div`
  grid-column: ${p => (p.jokonta ? "1 / span 7" : "8 / span 7")};
  justify-self: ${p => (p.jokonta ? "end" : "start")};
  display: flex;
  flex-direction: ${p => (p.jokonta ? "row" : "row-reverse")};
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  height: 75vh;
  max-height: 100%;
  min-height: 100%;
  cursor: pointer;
  &:hover,
  &:focus {
    svg:nth-of-type(1) {
      display: none;
    }
    svg:nth-of-type(2) {
      display: block;
    }
    h2 {
      color: ${p =>
        p.jokonta ? p.theme.colors.jokonta : p.theme.colors.allegro};
      transition: color 0.3s ease;
    }
  }
  svg {
    margin-top: ${p => (p.jokonta ? p.theme.space[6] : -p.theme.space[6])}px;
    display: block;
    height: 550px;
    width: 330px;
    [data-name="shadow"] {
      fill: ${p => p.theme.colors.backgroundMuted} !important;
      transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    &:nth-of-type(2) {
      display: none;
    }
  }
  h1 {
    display: block;
    position: absolute;
    margin: 0;
    ${p => (p.jokonta ? "right: 100px" : "left: 100px")};
    color: ${p => p.theme.colors.backgroundMuted};
    font-size: 200px;
    z-index: -1;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    user-select: none;
  }
  h2 {
    margin: 0;
    font-size: ${p => p.theme.fontSizes[5]}px;
    display: block;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  @media ${p => p.theme.mq.tablet} {
    min-height: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: ${p => (p.jokonta ? "flex-end" : "flex-start")};
    svg {
      height: 400px;
      width: unset;
    }
    h2 {
      margin-top: ${p => p.theme.space[4]}px;
      margin-left: ${p => (p.jokonta ? p.theme.space[0] : p.theme.space[6])}px;
      margin-right: ${p => (p.jokonta ? p.theme.space[6] : p.theme.space[0])}px;
    }
    h1 {
      font-size: 72px;
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    height: 60vh;
    svg {
      margin-top: ${p => (p.jokonta ? p.theme.space[4] : -p.theme.space[6])}px;
      height: 240px;
    }
    h1 {
      display: none;
    }
    h2 {
      margin-top: ${p => p.theme.space[3]}px;
      margin-bottom: ${p => p.theme.space[3]}px;
      margin-left: ${p => (p.jokonta ? p.theme.space[0] : p.theme.space[4])}px;
      margin-right: ${p => (p.jokonta ? p.theme.space[4] : p.theme.space[0])}px;
      font-size: ${p => p.theme.fontSizes[3]}px;
    }
  }
  @media ${p => p.theme.mq.mobileS} {
    svg {
      margin-top: ${p => (p.jokonta ? p.theme.space[4] : -p.theme.space[4])}px;
      height: 200px;
    }
  }
`
