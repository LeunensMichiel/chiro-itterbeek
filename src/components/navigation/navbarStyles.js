import styled from "@emotion/styled"

export const NavWrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${p => p.theme.colors.background};
  display: grid;
  grid-template-columns: minmax(16px, 1fr) repeat(12, minmax(24px, 95px)) minmax(
      16px,
      1fr
    );
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  box-shadow: ${p => p.theme.shadows.boxShadow.nav};
  a {
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    .active,
    :hover {
      color: ${p => p.theme.colors.accent};
    }
  }
`

export const ItterbeekWrapper = styled.div`
  grid-column: 2 / span 3;
  display: flex;
  align-items: center;

  svg {
    height: ${p => p.theme.space[6]}px;
    width: auto;
    margin-right: ${p => p.theme.space[3]}px;
  }
`

export const LinkWrapper = styled.nav`
  grid-column: 6 / span 4;
  justify-self: center;
  display: flex;
  align-items: center;
  a {
    padding: ${p => p.theme.space[2]}px 12px;
  }
`

export const SocialWrapper = styled.nav`
  grid-column: 11 / span 3;
  display: flex;
  align-items: center;
  justify-self: end;
  a {
    &:not(:nth-of-type(odd)) {
      margin-left: ${p => p.theme.space[2]}px;
    }
    cursor: pointer;
    &:hover {
      svg {
        circle {
          fill: ${p => p.theme.colors.accent};
        }
        path {
          fill: ${p => p.theme.colors.styledHeaderText};
        }
      }
    }
    .fade-enter {
      path {
        clip-path: circle(0%);
      }
    }
    .fade-exit {
      path {
        clip-path: circle(50%);
      }
    }
    .fade-enter-active {
      path {
        clip-path: circle(50%);
        transition: clip-path 0.2s cubic-bezier(0.87, 0, 0.13, 1);
      }
    }
    .fade-exit-active {
      path {
        clip-path: circle(0%);
        transition: clip-path 0.2s cubic-bezier(0.87, 0, 0.13, 1);
      }
    }
  }
  svg {
    path {
      transition: fill 0.3s ease-out;
      fill: ${p => p.theme.colors.header};
    }
    circle {
      transition: fill 0.3s ease-out;
      fill: ${p => p.theme.colors.backgroundMuted};
    }
    height: 36px;
  }
  .divider__horizontal {
    content: "";
    width: 2px;
    height: 18px;
    margin: 0 12px;
    background-color: ${p => p.theme.colors.backgroundMuted};
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }
`
