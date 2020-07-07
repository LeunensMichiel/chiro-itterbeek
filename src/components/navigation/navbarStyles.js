import styled from "@emotion/styled"

export const NavWrapper = styled.header`
  position: fixed;
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
  }
  z-index: 100;

  @media ${p => p.theme.mq.tablet} {
    a {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 72px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    overflow-y: auto;
    transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1),
      transform 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }
`

export const ItterbeekWrapper = styled.div`
  grid-column: 2 / span 3;
  display: flex;
  align-items: center;

  a:hover span {
    color: ${p =>
      p.gender === 0
        ? p.theme.colors.accent
        : p.gender === 1
        ? p.theme.colors.jokontaLight
        : p.theme.colors.allegroLight};
    transition: color 0.3s ease;
  }

  svg {
    height: ${p => p.theme.space[6]}px;
    width: auto;
    margin-right: ${p => p.theme.space[3]}px;
  }

  @media ${p => p.theme.mq.mobileM} {
    display: ${p => (p.mobile ? "flex" : "none")};
    svg {
      height: ${p => p.theme.space[5]}px;
      margin: 0 ${p => p.theme.space[3]}px;
    }
    a {
      display: flex;
      align-items: center;
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`

export const LinkWrapper = styled.nav`
  grid-column: 6 / span 4;
  justify-self: center;
  display: flex;
  visibility: ${p => (p.gender === 0 ? "hidden" : "visible")};
  align-items: center;
  a {
    padding: ${p => p.theme.space[2]}px 12px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    &.active {
      color: ${p =>
        p.gender === 0
          ? p.theme.colors.accent
          : p.gender === 1
          ? p.theme.colors.jokonta
          : p.theme.colors.allegro};
      transition: color 0.3s ease;
    }
    &:hover {
      color: ${p =>
        p.gender === 0
          ? p.theme.colors.accent
          : p.gender === 1
          ? p.theme.colors.jokontaLight
          : p.theme.colors.allegroLight};
      transition: color 0.3s ease;
    }
  }
  .link__home {
    display: none;
  }
  @media ${p => p.theme.mq.mobileM} {
    flex-direction: column;
    justify-content: center;
    flex: auto;
    a {
      padding: ${p => p.theme.space[2]}px 0;
      font-size: ${p => p.theme.fontSizes[5]}px !important;
      &:not(:nth-of-type(4)) {
        margin-bottom: ${p => p.theme.space[2]}px;
      }
    }
    .link__home {
      display: flex;
    }
  }
`

export const SocialWrapper = styled.nav`
  grid-column: 11 / span 3;
  display: flex;
  align-items: center;
  justify-self: end;
  a {
    cursor: pointer;
    &:not(:nth-of-type(odd)) {
      margin-left: ${p => p.theme.space[2]}px;
    }
    &:first-of-type {
      display: ${p => (p.gender === 0 ? "none" : "flex")};
    }
    &:hover {
      svg {
        circle {
          fill: ${p =>
            p.gender === 0
              ? p.theme.colors.accent
              : p.gender === 1
              ? p.theme.colors.jokontaLight
              : p.theme.colors.allegroLight};
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
    height: 36px;
    path {
      transition: fill 0.3s ease-out;
      fill: ${p => p.theme.colors.header};
    }
    circle {
      transition: fill 0.3s ease-out;
      fill: ${p => p.theme.colors.backgroundMuted};
    }
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

  @media ${p => p.theme.mq.tablet} {
    svg {
      height: 32px;
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    min-height: 96px;
    justify-content: center;
    a {
      &:not(:nth-of-type(odd)) {
        margin-left: ${p => p.theme.space[3]}px;
      }
    }
    svg {
      height: 36px;
    }
  }
`

export const NavbarWrapper = styled.nav`
  /*Animation by https://github.com/jonsuh/hamburgers*/
  width: 100%;
  height: 72px;
  display: none;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10000;
  background-color: ${p => p.theme.colors.background};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  box-shadow: ${p => p.theme.shadows.boxShadow.nav};
  .hamburger {
    padding: 16px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    &:hover {
      opacity: 0.5;
    }
    &.is-active {
      &:hover {
        opacity: 0.5;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: ${p => p.theme.colors.header};
      }
    }
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    &,
    &::before,
    &::after {
      width: 40px;
      height: 4px;
      background-color: ${p => p.theme.colors.header};
      border-radius: 2px;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }
    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }
  }
  .hamburger--elastic {
    .hamburger-inner {
      top: 2px;
      transition-duration: 0.275s;
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &::before {
        top: 10px;
        transition: opacity 0.125s 0.275s ease;
      }

      &::after {
        top: 20px;
        transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }
    &.is-active {
      .hamburger-inner {
        transform: translate3d(0, 10px, 0) rotate(135deg);
        transition-delay: 0.075s;

        &::before {
          transition-delay: 0s;
          opacity: 0;
        }

        &::after {
          transform: translate3d(0, -20px, 0) rotate(-270deg);
          transition-delay: 0.075s;
        }
      }
    }
    .hamburger--elastic-r {
      .hamburger-inner {
        top: 2px;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        &::before {
          top: 10px;
          transition: opacity 0.125s 0.275s ease;
        }

        &::after {
          top: 20px;
          transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
      &.is-active {
        .hamburger-inner {
          transform: translate3d(0, 10px, 0) rotate(-135deg);
          transition-delay: 0.075s;

          &::before {
            transition-delay: 0s;
            opacity: 0;
          }

          &::after {
            transform: translate3d(0, -20px, 0) rotate(270deg);
            transition-delay: 0.075s;
          }
        }
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    display: flex;
  }
`
