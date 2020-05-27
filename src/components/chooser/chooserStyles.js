import styled from "@emotion/styled"

export const ChooseChiro = styled.div`
  grid-column: ${p => (p.jokonta ? "1 / span 7" : "8 / span 7")};
  justify-self: ${p => (p.jokonta ? "end" : "start")};
  display: flex;
  flex-direction: ${p => (p.jokonta ? "row" : "row-reverse")};
  align-items: center;
  position: relative;
  padding-top: ${p => (p.jokonta ? p.theme.space[8] : p.theme.space[0])}px;
  height: 100%;
  cursor: pointer;
  &:hover {
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
    display: block;
    height: 550px;
    width: 100%;
    [data-name="shadow"] {
      fill: ${p => p.theme.colors.backgroundMuted};
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
`
