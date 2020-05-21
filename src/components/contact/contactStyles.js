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
    background: ${p =>
      p.gender === 1 ? p.theme.colors.jokonta : p.theme.colors.allegro};
    text-transform: uppercase;
    font-weight: 700;
    color: ${p => p.theme.colors.styledHeaderText};
    transition: background-color 0.4s cubic-bezier(0.87, 0, 0.13, 1);
    border-radius: ${p => p.theme.radii.borderRadius};
    box-shadow: ${p => p.theme.shadows.boxShadow.container};

    &:hover {
      transition: background-color 0.4s ease;
      background: ${p =>
        p.gender === 1
          ? p.theme.colors.jokontaLight
          : p.theme.colors.allegroLight};
    }
  }
`

export const ItterbeekForm = styled.form`
  display: ${p => (p.hidden ? "none" : "grid")};
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, auto);
  margin: ${p => p.theme.space[7]}px 0;
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
`

export const MapWrapper = styled.aside`
  grid-column: 2 / span 7;
  margin-bottom: ${p => p.theme.space[7]}px;
  position: relative;
  border-radius: ${p => p.theme.radii.borderRadius};

  div {
    border-radius: ${p => p.theme.radii.borderRadius};
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
    }
    button {
      text-decoration: underline;
    }
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
      fill: ${p => p.theme.colors.border};
    }
  }
`
