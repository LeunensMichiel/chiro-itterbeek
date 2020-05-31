import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 760px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .flex {
    width: 100%;
    max-width: 420px;
    display: flex;
    justify-content: space-between;
    a,
    button {
      display: flex;
      align-items: center;
      transition: color 0.3s ease;
      :hover {
        color: ${p => p.theme.colors.asideText};
      }
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    .flex {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const ItterbeekWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: ${p => p.theme.space[6]}px;
    width: auto;
    margin-right: ${p => p.theme.space[3]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    svg {
      height: ${p => p.theme.space[4]}px;
      margin-right: ${p => p.theme.space[3]}px;
    }
    a {
      display: flex;
      align-items: center;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
  }
`

export const SocialWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-self: end;
  > a,
  button {
    display: block;
    cursor: pointer;
    &:hover {
      svg {
        circle {
          fill: ${p => p.theme.colors.invisibleText};
        }
        path {
          fill: ${p => p.theme.colors.styledHeaderText};
        }
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

  > a:not(:nth-of-type(1)) {
    margin-left: ${p => p.theme.space[2]}px;
  }
  button {
    margin-left: ${p => p.theme.space[2]}px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    &:focus {
      svg {
        circle {
          fill: ${p => p.theme.colors.invisibleText};
        }
        path {
          fill: ${p => p.theme.colors.styledHeaderText};
        }
      }
      .links__other {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .links__other {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: ${p => p.theme.space[6]}px;
    background-color: ${p => p.theme.colors.backgroundMuted};
    padding: ${p => p.theme.space[4]}px;
    opacity: 0;
    visibility: hidden;
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: opacity 0.2s cubic-bezier(0.87, 0, 0.13, 1);
    z-index: 10;

    a {
      white-space: nowrap;
      font-weight: 700;
      transition: color 0.3s ease;
      color: ${p => p.theme.colors.asideText};
      padding: ${p => p.theme.space[1]}px;
      :hover {
        color: ${p =>
          p.gender === 1
            ? p.theme.colors.jokonta
            : p.gender === 2
            ? p.theme.colors.allegro
            : p.theme.colors.accent};
      }
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    margin: ${p => p.theme.space[2]}px 0;
    svg {
      height: 32px;
    }
  }
`

export const FooterText = styled.p`
  width: 100%;
  text-align: center;
  a {
    text-decoration: underline;
    transition: color 0.3s ease;
    color: ${p => p.theme.colors.invisibleText};
    :hover {
      color: ${p => p.theme.colors.asideText};
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    width: 90%;
    line-height: 1.2;
    font-size: ${p => p.theme.fontSizes[0]}px;
  }
`
