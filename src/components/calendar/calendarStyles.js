import styled from "@emotion/styled"

export const CalendarWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  margin-bottom: ${p => p.theme.space[8]}px;
`

export const CalendarItemWrapper = styled.article`
  width: 100%;
  height: 260px;
  display: flex;
  border-radius: ${p => p.theme.radii.borderRadius}px;
  border: 1px solid ${p => p.theme.colors.border};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1);
`
export const CalendarItemHeader = styled.div`
  min-width: 260px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${p => p.theme.colors.backgroundMuted};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

  span {
    &:nth-of-type(1) {
      font-size: 96px;
      font-family: ${p => p.theme.fonts.headingAlternate};
      line-height: 1;
      margin-bottom: ${p => p.theme.space[1]}px;
      color: ${p =>
        p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
  }
`

export const CalendarItemBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: ${p => p.theme.space[6]}px;
  h3 {
    margin-top: 0;
    margin-bottom: ${p => p.theme.space[1]}px;
  }
  p {
    margin: 0;
    margin-bottom: ${p => p.theme.space[3]}px;
    &.date {
      color: ${p => p.theme.colors.asideText};
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
  }
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background: none;
    color: ${p => p.theme.colors.asideText};
    text-decoration: underline;
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-family: inherit;

    svg {
      fill: ${p => p.theme.colors.asideText};
      margin-top: 4px;
      margin-left: ${p => p.theme.space[1]}px;
      height: 11px;
    }
  }
`
