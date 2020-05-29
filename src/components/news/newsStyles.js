import styled from "@emotion/styled"

export const HighlightWrapper = styled.section`
  grid-column: 3 / span 10;
  display: flex;
  flex-direction: column;
  margin-top: ${p => (p.margin ? p.theme.space[7] : 0)}px;
  margin-bottom: ${p => p.theme.space[7]}px;

  h2 {
    align-self: flex-start;
    display: block;
    color: ${p => p.theme.colors.styledHeaderText};
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
    margin-top: 0;
    margin-bottom: 12px;
    background-color: ${p =>
      p.gender === 1
        ? p.theme.colors.jokonta
        : p.gender === 2
        ? p.theme.colors.allegro
        : p.theme.colors.accent};
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[2]}px;
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  hr {
    width: 66%;
    margin-top: ${p => p.theme.space[2]}px;
    border-color: ${p => p.theme.colors.border};
    border-style: solid;
    transition: border-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 12;
    margin-bottom: ${p => p.theme.space[6]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    margin-top: ${p => (p.margin ? p.theme.space[6] : 0)}px;
    h2 {
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
  }
`

export const HighlightItem = styled.div`
  position: relative;
  display: flex;
  .headline__image {
    position: relative;
    height: 360px;
    width: 100%;
    border-radius: ${p => p.theme.radii.borderRadius};
    &:after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: ${p => p.theme.radii.borderRadius};
      background: linear-gradient(
        180deg,
        rgba(24, 24, 25, 0.33) 0%,
        rgba(24, 24, 25, 0.5) 63.54%,
        rgba(24, 24, 25, 0.5) 100%
      );
    }
  }
  .headline__text {
    padding: ${p => p.theme.space[6]}px;
    position: absolute;
    bottom: 0;
    h3 {
      display: block;
      color: ${p => p.theme.colors.styledHeaderText};
      margin-top: 0;
      margin-bottom: ${p => p.theme.space[1]}px;
      text-transform: uppercase;
      font-size: ${p => p.theme.fontSizes[4]}px;
      line-height: 1;
    }
    small {
      display: block;
      margin-bottom: ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[0]}px;
      color: ${p => p.theme.colors.highlightText};
      text-transform: uppercase;
      line-height: 1;
    }
    a {
      display: flex;
      align-items: center;
      color: ${p => p.theme.colors.highlightText};
      text-decoration: underline;
      font-size: ${p => p.theme.fontSizes[2]}px;
      font-family: inherit;
      line-height: 1;
      svg {
        margin-top: 4px;
        margin-left: ${p => p.theme.space[1]}px;
        height: 11px;
        path {
          fill: ${p => p.theme.colors.highlightText};
        }
      }
    }
  }

  @media ${p => p.theme.mq.tablet} {
    .headline__image {
      height: 280px;
    }
  }

  @media ${p => p.theme.mq.mobileM} {
    .headline__image {
      height: 200px;
    }
    .headline__text {
      padding: ${p => p.theme.space[4]}px;
      h3 {
        font-size: ${p => p.theme.fontSizes[2]}px;
      }
    }
  }
`

export const NewsWrapper = styled.section`
  grid-column: 2 / span 12;
  margin-bottom: ${p => p.theme.space[8]}px;
  margin-top: ${p => (p.isFirst ? p.theme.space[0] : p.theme.space[7])}px;

  .news__navigation {
    margin: 0 auto ${p => p.theme.space[6]}px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 570px;
    padding: ${p => p.theme.space[3]}px 0;
    font-weight: 700;
    font-size: ${p => p.theme.fontSizes[1]}px;
    text-transform: uppercase;
    color: ${p => p.theme.colors.paragraph};
    background-color: ${p => p.theme.colors.backgroundMuted};
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1),
      color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    line-height: 1;
    .news__navigation__number {
      margin: 0 ${p => p.theme.space[4]}px;
      font-size: ${p => p.theme.fontSizes[4]}px;
      line-height: 1;
    }
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
        height: 18px;
        path {
          transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
          fill: ${p => p.theme.colors.paragraph};
        }
      }
    }
  }

  .news__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }

  @media ${p => p.theme.mq.tablet} {
    margin-bottom: ${p => p.theme.space[6]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    .news__grid {
      grid-template-columns: 1fr;
    }
  }
`

export const NewsItemWrapper = styled.article`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
  background-color: ${p => p.theme.colors.backgroundMuted2};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  .news__item__header {
    position: relative;
    .news__item__type {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 140px;
      padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
      border-radius: ${p => p.theme.radii.borderRadius};
      color: ${p => p.theme.colors.styledHeaderText};
      background: ${p =>
        p.gender === 1
          ? p.theme.colors.jokonta
          : p.gender === 2
          ? p.theme.colors.allegro
          : p.theme.colors.accent};
      text-transform: uppercase;
      font-size: ${p => p.theme.fontSizes[2]}px;
      line-height: 1;
      font-weight: 700;
    }
    .news__item__image {
      width: 100%;
      height: 200px;
    }
  }
  .news__item__body {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: ${p => p.theme.space[3]}px;
    h3 {
      margin-top: 0;
      margin-bottom: ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[2]}px;
      line-height: 1;
      font-weight: 700;
      color: ${p => p.theme.colors.header};
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    small {
      display: block;
      margin-bottom: ${p => p.theme.space[1]}px;
      font-size: ${p => p.theme.fontSizes[0]}px;
      color: ${p => p.theme.colors.asideText};
      text-transform: uppercase;
      line-height: 1;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    p {
      margin-top: 0;
      font-size: ${p => p.theme.fontSizes[1]}px;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    }
    a {
      margin-top: auto;
      margin-bottom: ${p => p.theme.space[3]}px;
      display: flex;
      align-items: center;
      color: ${p => p.theme.colors.asideText};
      text-decoration: underline;
      font-size: ${p => p.theme.fontSizes[1]}px;
      font-family: inherit;
      line-height: 1;
      transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
      svg {
        path {
          fill: ${p => p.theme.colors.asideText};
          transition: fill 0.4s cubic-bezier(0.87, 0, 0.13, 1);
        }
        margin-top: 4px;
        margin-left: ${p => p.theme.space[1]}px;
        height: 11px;
      }
    }
  }

  @media ${p => p.theme.mq.tablet} {
    height: auto;
  }
  @media ${p => p.theme.mq.mobileM} {
    height: auto;
    .news__item__header {
      .news__item__type {
        padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
        font-size: ${p => p.theme.fontSizes[1]}px;
        width: auto;
      }
    }
  }
`

export const NewsBlockWrapper = styled.article`
  grid-column: 3 / span 10;
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[4]}px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  small {
    display: block;
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1;
    text-transform: uppercase;
    color: ${p => p.theme.colors.asideText};
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    margin-bottom: ${p => p.theme.space[5]}px;
  }

  @media ${p => p.theme.mq.tablet} {
    margin-top: ${p => p.theme.space[6]}px;
    grid-column: 2 / span 12;
  }
  @media ${p => p.theme.mq.mobileM} {
    margin-top: ${p => p.theme.space[5]}px;
    h1 {
      font-size: ${p => p.theme.fontSizes[3]}px;
      line-height: 1.2;
      margin-bottom: ${p => p.theme.space[1]}px;
    }
  }
`
