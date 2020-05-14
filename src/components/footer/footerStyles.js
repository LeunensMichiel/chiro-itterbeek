import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 760px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .flex {
    width: 100%;
    max-width: 420px;
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      transition: color 0.3s ease;
      .active,
      :hover {
        color: ${p => p.theme.colors.asideText};
      }
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
`

export const SocialWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-self: end;
  a {
    cursor: pointer;
    &:not(:nth-of-type(1)) {
      margin-left: ${p => p.theme.space[2]}px;
    }
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
`
