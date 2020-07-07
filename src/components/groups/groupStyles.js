import styled from "@emotion/styled"

export const GroupWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[8]}px;

  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 12;
    margin-bottom: ${p => p.theme.space[7]}px;
  }
`

export const GroupNavigation = styled.nav`
  width: 100%;
  max-width: 570px;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${p => p.theme.colors.backgroundMuted};
  border-radius: ${p => p.theme.radii.borderRadius};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

  @media ${p => p.theme.mq.mobileM} {
    margin-bottom: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[2]}px;
    flex-wrap: wrap;
  }
`

export const GroupNavigationItem = styled.button`
  background: ${p => p.color};
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 4px solid
    ${p =>
      p.isActive ? p.theme.colors.accentGray : p.theme.colors.backgroundMuted};
  transition: border-color 0.2s cubic-bezier(0.87, 0, 0.13, 1),
    background 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  @media ${p => p.theme.mq.mobileM} {
    width: 38px;
    height: 38px;
  }
`

export const Group = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto minmax(auto, 250px) auto;
  grid-gap: 12px;
  align-items: start;
  align-content: start;

  .group__header {
    grid-column: 1 / span 4;
    grid-row: 1;
    display: block;
    padding: ${p => p.theme.space[4]}px;
    margin: 0;
    background: ${p => p.color};
    color: ${p => p.theme.colors.styledHeaderText};
    text-align: center;
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .group__image {
    grid-column: 5 / span 6;
    grid-row: 1 / span 2;
    width: 100%;
    height: 100%;
    max-height: 360px;
    border-radius: ${p => p.theme.radii.borderRadius};
  }

  .group__description {
    grid-column: 1 / span 4;
    grid-row: 2 / span 2;
    height: 100%;
    padding: ${p => p.theme.space[5]}px;
    background-color: ${p => p.theme.colors.backgroundMuted};
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

    h4 {
      margin: 0;
      text-transform: uppercase;
      color: ${p => p.theme.colors.header};
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }

    p {
      margin-top: 0;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      white-space: pre-line;
    }

    .group__leiding__grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .group__leiding {
    grid-column: 5 / span 6;
    grid-row: 3;
    background: ${p => p.color};
    display: flex;
    flex-direction: column;
    min-height: 100%;
    border-radius: ${p => p.theme.radii.borderRadius};

    .group__leiding__header {
      align-self: flex-start;
      display: inline-block;
      margin: 0;
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
      background: ${p => p.theme.colors.navBackground};
      border-radius: ${p => p.theme.radii.borderRadius};
    }

    .group__leiding__items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: 100%;
      padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
    }
    &.group__leiding__about {
      padding: ${p => p.theme.space[4]}px;
      flex-direction: row;
      align-items: center;
      .group__leiding__about__image {
        border-radius: 50%;
        width: 150px;
        height: 150px;
        flex-shrink: 0;
      }
      .group__leiding__about__text {
        margin-left: ${p => p.theme.space[5]}px;
        color: ${p => p.theme.colors.styledHeaderText};

        h3 {
          margin: 0;
          margin-bottom: ${p => p.theme.space[3]}px;
          font-size: ${p => p.theme.fontSizes[3]}px;
          line-height: 1.2;
          text-transform: uppercase;

          .group__leiding__about__nickname {
            font-size: ${p => p.theme.fontSizes[1]}px;
          }
        }
        p {
          margin: 0;
          margin-bottom: ${p => p.theme.space[1]}px;
          line-height: 1.2;
          font-size: ${p => p.theme.fontSizes[1]}px;
        }
      }
    }
  }
  @media ${p => p.theme.mq.tablet} {
    .group__description {
      padding: ${p => p.theme.space[4]}px;
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    .group__header {
      padding: ${p => p.theme.space[3]}px;
    }
    .group__image {
      min-height: 200px;
      max-height: 200px;
    }
    .group__leiding {
      min-height: auto;

      &.group__leiding__about {
        flex-direction: column;
        .group__leiding__about__image {
          margin-bottom: ${p => p.theme.space[3]}px;
        }
      }
    }
  }
`

export const LeidingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${p => (p.small ? "96px" : "120px")};
  height: ${p => (p.small ? "96px" : "120px")};
  .group__leiding__title {
    color: ${p => p.theme.colors.styledHeaderText};
    line-height: 1;
    font-size: ${p => (p.small ? 9 : p.theme.fontSizes[1])}px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    position: absolute;
    z-index: 10;
    pointer-events: none;
  }
  .group__leiding__image {
    border-radius: 50%;
    width: 100% !important;
    height: 100% !important;
    cursor: ${p => (p.small ? "pointer" : "initial")};
    border: 4px solid
      ${p => (p.isSelected ? p.theme.colors.accentGray : "transparent")};
    transition: border-color 0.2s cubic-bezier(0.87, 0, 0.13, 1);
    &::after {
      content: "";
      background: rgba(24, 24, 25, 0.33);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  @media ${p => p.theme.mq.laptopMDPI} {
    width: ${p => (p.small ? "72px" : "120px")};
    height: ${p => (p.small ? "72px" : "120px")};
  }
`
