import styled from "@emotion/styled"

export const CalendarWrapper = styled.section`
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

export const CalendarNavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 570px;
  padding: ${p => p.theme.space[4]}px 0;
  margin-bottom: ${p => p.theme.space[6]}px;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes[1]}px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.paragraph};
  background-color: ${p => p.theme.colors.backgroundMuted};
  border-radius: ${p => p.theme.radii.borderRadius};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  line-height: 1;
  .cal__nav__month {
    width: 200px;
    margin: ${p => p.theme.space[0]}px ${p => p.theme.space[5]}px;
    font-size: ${p => p.theme.fontSizes[5]}px;
    text-align: center;
    .cal__nav__year {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
  .cal__nav__flex {
    display: flex;
    align-items: center;
    button {
      &:nth-of-type(1) {
        svg {
          transform: rotate(180deg);
          path {
            fill: ${p =>
              p.disabled
                ? p.theme.colors.paragraph
                : p.theme.colors.accentGray};
          }
        }
      }
      svg {
        height: 36px;
        path {
          transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
          fill: ${p => p.theme.colors.paragraph};
        }
      }
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    margin-bottom: ${p => p.theme.space[4]}px;
    .cal__nav__month {
      margin: 0;
      font-size: ${p => p.theme.fontSizes[4]}px;
    }
  }
`

export const CalendarItemWrapper = styled.article`
  width: 100%;
  display: flex;
  border-radius: ${p => p.theme.radii.borderRadius};
  border: 1px solid ${p => p.theme.colors.border};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
  &:last-of-type ~ p {
    display: none;
  }
  &.cal__item__active {
    border: 1px solid ${p => p.theme.colors.borderMuted};

    svg {
      transform: rotate(-90deg);
    }
  }

  &.cal__item-enter {
    opacity: 0;
  }
  &.cal__item-enter-active {
    opacity: 1;
    transition: opacity 0.8s cubic-bezier(0.87, 0, 0.13, 1);
  }
  &.cal__item-exit {
    opacity: 1;
  }
  &.cal__item-exit-active {
    opacity: 0;
    transition: opacity 0.8s cubic-bezier(0.87, 0, 0.13, 1);
  }

  @media ${p => p.theme.mq.mobileM} {
    flex-direction: column;
  }
`
export const CalendarItemHeader = styled.div`
  min-width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${p => p.theme.colors.backgroundMuted};
  transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

  span {
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    &:nth-of-type(1) {
      font-size: 96px;
      font-family: ${p => p.theme.fonts.headingAlternate};
      line-height: 1;
      margin-bottom: ${p => p.theme.space[1]}px;
      color: ${p =>
        p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    }
  }
  @media ${p => p.theme.mq.tablet} {
    min-width: 200px;
    span {
      &:nth-of-type(1) {
        font-size: 72px;
      }
    }
  }
  @media ${p => p.theme.mq.mobileM} {
    flex-direction: row;
    padding: ${p => p.theme.space[2]}px;
    span {
      &:nth-of-type(1) {
        margin-bottom: ${p => p.theme.space[0]}px;
        margin-right: ${p => p.theme.space[3]}px;
      }
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
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    margin-top: 0;
    margin-bottom: ${p => p.theme.space[1]}px;
  }
  p {
    margin: 0;
    margin-bottom: ${p => p.theme.space[3]}px;
    &.date {
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      color: ${p => p.theme.colors.asideText};
      font-size: ${p => p.theme.fontSizes[1]}px;
      text-transform: uppercase;
    }
    &.innertext {
      padding: 0;
      white-space: pre-line;
      min-height: 88px;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.87, 0, 0.13, 1),
        color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      max-height: ${props => props.maxHeight};
    }
  }
  button {
    display: flex;
    align-items: center;
    color: ${p => p.theme.colors.asideText};
    text-decoration: underline;
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-family: inherit;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

    svg {
      fill: ${p => p.theme.colors.asideText};
      margin-top: 4px;
      margin-left: ${p => p.theme.space[2]}px;
      height: 11px;
      transform: rotate(90deg);
      transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1),
        transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    padding: ${p => p.theme.space[4]}px;
    h3 {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
    p {
      &.date {
        font-size: ${p => p.theme.fontSizes[0]}px;
      }
      &.innertext {
        font-size: ${p => p.theme.fontSizes[1]}px;
      }
    }
  }
`
