import styled from "@emotion/styled"

export const GroupWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p => p.theme.space[8]}px;
`

export const GroupNavigation = styled.nav`
  width: 100%;
  max-width: 570px;
  padding: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${p => p.theme.colors.backgroundMuted};
  border-radius: ${p => p.theme.radii.borderRadius};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
`

export const GroupNavigationItem = styled.button`
  background: ${p => p.color};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid ${p => (p.isActive ? p.theme.colors.accentGray : p.color)};
  transition: border-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
`

export const Group = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto minmax(auto, 250px) auto;
  grid-gap: 12px;
  align-items: start;

  .group__header {
    grid-column: 1 / span 4;
    grid-row: 1;
    display: block;
    padding: ${p => p.theme.space[4]}px;
    margin: 0;
    background: ${p => p.color};
    color: ${p => p.theme.colors.paragraph};
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
    min-height: 100%;
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
      justify-content: space-around;
      height: 100%;
      padding: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
    }
  }
`

export const LeidingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 120px;
  height: 120px;
  .group__leiding__title {
    color: ${p => p.theme.colors.styledHeaderText};
    line-height: 1;
    font-size: ${p => p.theme.fontSizes[0]};
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    position: absolute;
    z-index: 10;
  }
  .group__leiding__image {
    border-radius: 50%;
    width: 100%;
    height: 100%;
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
`
