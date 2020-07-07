import styled from "@emotion/styled"

export const FormWrapper = styled.section`
  grid-column: 2 / span 12;
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
  margin-top: ${p => p.theme.space[7]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.backgroundMuted2};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  h1 {
    margin: 0;
    align-self: flex-start;
    display: inline-block;
    color: ${p => p.theme.colors.styledHeaderText};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[5]}px;
    background-color: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    border-radius: ${p => p.theme.radii.borderRadius};
    text-transform: uppercase;
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    font-size: ${p => p.theme.fontSizes[2]}px;
  }
  input,
  textarea {
    outline-color: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
  }
  button {
    grid-column: 10 / span 2;
    grid-row: 4;
    align-self: end;
    justify-self: end;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    background-color: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    text-transform: uppercase;
    font-weight: 700;
    color: ${p => p.theme.colors.styledHeaderText};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    border-radius: ${p => p.theme.radii.borderRadius};
    box-shadow: ${p => p.theme.shadows.boxShadow.container};

    &:hover {
      transition: background-color 0.4s ease;
      background-color: ${p =>
        p.gender === 1
          ? p.theme.colors.jokontaLight
          : p.theme.colors.allegroLight};
    }
  }
  @media ${p => p.theme.mq.tablet} {
    margin-top: ${p => p.theme.space[6]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    h1 {
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
    button {
      grid-row: unset;
      grid-column: 11 / span 2;
      margin-bottom: ${p => p.theme.space[0]}px;
    }
  }
`

export const ItterbeekForm = styled.form`
  display: ${p => (p.hidden ? "none" : "grid")};
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, auto);
  margin: ${p => p.theme.space[7]}px 0;

  @media ${p => p.theme.mq.tablet} {
    margin: ${p => p.theme.space[5]}px 0;
    grid-column-gap: 16px;
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-template-rows: unset;
    grid-auto-rows: auto;
    grid-column-gap: 0;
    margin: ${p => p.theme.space[3]}px 0;
    padding: 0 ${p => p.theme.space[3]}px;
  }
`

export const StyledInput = styled.div`
  grid-column: ${p => (p.textarea ? "7 / span 5" : "2 / span 4")};
  grid-row: ${p => (p.textarea ? "1 / span 3" : "span 1")};
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]}px;

  label {
    color: ${p => p.theme.colors.asideText};
    font-size: ${p => p.theme.fontSizes[2]}px;
    margin-bottom: ${p => p.theme.space[2]}px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }
  input,
  textarea {
    height: 48px;
    padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
    border: none;
    color: ${p => p.theme.colors.header};
    background-color: ${p => p.theme.colors.input};
    border-radius: ${p => p.theme.radii.borderRadius};
    font-size: ${p => p.theme.fontSizes[2]}px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1),
      background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  textarea {
    height: 100%;
  }

  @media ${p => p.theme.mq.tablet} {
    grid-column: ${p => (p.textarea ? "7 / span 5" : "2 / span 5")};
  }

  @media ${p => p.theme.mq.mobileM} {
    grid-column: 1 / span 12;
    grid-row: unset;
    label {
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
    input,
    textarea {
      font-size: 16px;
      padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
    }
    textarea {
      min-height: 200px;
    }
  }
`

export const MapWrapper = styled.aside`
  grid-column: 2 / span 7;
  margin-bottom: ${p => p.theme.space[7]}px;
  position: relative;
  border-radius: ${p => p.theme.radii.borderRadius};

  div {
    border-radius: ${p => p.theme.radii.borderRadius};
  }

  .map__marker {
    content: "";
    width: 24px;
    height: 24px;
    display: block;
    background-color: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1),
      border-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    border-radius: 50%;
    border: 4px solid
      ${p =>
        p.gender === 1
          ? p.theme.colors.jokontaLight
          : p.theme.colors.allegroLight};
  }
  @media ${p => p.theme.mq.tablet} {
    grid-column: 2 / span 6;
    margin-left: unset;
    border: 1px solid ${p => p.theme.colors.border};
    border-right: none;
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    border: none;
    height: 200px;
    margin-bottom: ${p => p.theme.space[6]}px;
    padding: 0 ${p => p.theme.space[2]}px;
  }
`

export const ContactInfoWrapper = styled.aside`
  grid-column: 9 / span 5;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.borderRadius};
  margin-bottom: ${p => p.theme.space[7]}px;
  margin-left: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.backgroundMuted2};
  transition: border 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);

  h2 {
    margin: 0;
    margin-bottom: ${p => p.theme.space[4]}px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  }

  h3 {
    margin: 0;
    margin-bottom: ${p => p.theme.space[2]}px;
    transition: color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    color: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    text-transform: uppercase;
    font-size: ${p => p.theme.fontSizes[2]}px;
  }

  .contact__info__sectionItem {
    margin-bottom: ${p => p.theme.space[4]}px;
    p {
      margin: 0;
      word-wrap: break-word;
    }
    button {
      text-decoration: underline;
    }
  }

  @media ${p => p.theme.mq.tablet} {
    grid-column: 8 / span 6;
    margin-left: unset;
    margin-bottom: ${p => p.theme.space[6]}px;
  }
  @media ${p => p.theme.mq.mobileM} {
    grid-column: 2 / span 12;
    padding: ${p => p.theme.space[4]}px;
  }
`

export const SocialWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
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
      fill: ${p => p.theme.colors.border};
    }
  }
  > a:not(:nth-of-type(1)) {
    margin-left: ${p => p.theme.space[2]}px;
  }
  button {
    margin-left: ${p => p.theme.space[2]}px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    &:focus,
    &:active {
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
    text-align: left;
    position: absolute;
    bottom: ${p => p.theme.space[6]}px;
    background-color: ${p => p.theme.colors.border};
    padding: ${p => p.theme.space[4]}px;
    opacity: 0;
    visibility: hidden;
    border-radius: ${p => p.theme.radii.borderRadius};
    transition: opacity 0.2s cubic-bezier(0.87, 0, 0.13, 1);
    z-index: 10;
    pointer-events: none;

    a {
      pointer-events: all;
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
`
