export default {
  useColorSchemeMediaQuery: true,
  colors: {
    //according to figma spec
    //black 3 (& white 2)
    header: "#3B3B3D",
    styledHeaderText: "#F9F9FC",
    //black 2
    text: "#272728",
    paragraph: "#272728",
    navBackground: "#272728",
    highlightText: "#CACACE",
    //Gray 0
    asideText: "#545456",
    //Gray 1
    invisibleText: "#99999E",
    //white 2
    background: "#F9F9FC",
    //white 1
    backgroundMuted: "#EDEDF2",
    backgroundMuted2: "#F9F9FC",
    input: "#EDEDF2",
    //white 0
    border: "#E3E3E8",
    //white 0
    borderMuted: "#CACACE",
    //gray 2
    accentGray: "#CACACE",
    //chiro
    accent: "#E1143C",
    jokonta: "#2371E2",
    jokontaLight: "#A2D3FF",
    jokontaDark: "#1E2F81",
    allegro: "#F72585",
    allegroLight: "#F793CD",
    allegroDark: "#C31B62",
    modes: {
      dark: {
        //white 2
        header: "#F9F9FC",
        //white 1
        text: "#EDEDF2",
        paragraph: "#EDEDF2",
        //Gray 2
        asideText: "#CACACE",
        //black 2
        background: "#272728",
        //black 3
        backgroundMuted: "#3B3B3D",
        backgroundMuted2: "#3B3B3D",
        //gray 0
        border: "#545456",
        input: "#545456",
        borderMuted: "#99999E",
        //gray 0
        accentGray: "#545456",
      },
    },
  },
  space: [0, 4, 8, 16, 24, 36, 48, 64, 96],
  fonts: {
    body:
      '"PT Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      '"PT Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    headingAlternate:
      'Bangers, PT Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 18, 20, 24, 36, 48, 72, 200],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5625,
    heading: 1,
  },
  mq: {
    mobileS: `(max-width: 374px)`,
    mobileSLandscape: `(max-width: 750px) and (max-height: 500px) and (orientation: landscape)`,
    mobileM: `(max-width: 767px)`,
    mobileMLandscape: `(max-width: 890px) and (max-height: 500px) and (orientation: landscape)`,
    tablet: `(max-width: 1024px)`,
    tabletland: `(max-width: 1024px) and (orientation: landscape)`,
    tabletPortrait: `(max-width: 1024px) and (orientation: portrait)`,
    ipadProPortrait: `(min-width: 1024px) 
     and (max-height: 1366px) 
     and (orientation: portrait) 
     and (-webkit-min-device-pixel-ratio: 1.5)`,
    laptopMDPI: `(max-width: 1280px)`,
    laptop: `(max-width: 1440px)`,
    desktop: `(min-width: 1680px)`,
  },
  shadows: {
    boxShadow: {
      nav: "0px 4px 15px rgba(0, 0, 0, 0.15)",
      container:
        "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 2px 25px rgba(0, 0, 0, 0.1)",
    },
  },
  radii: {
    borderRadius: "2px",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "header",
      textTransform: "uppercase",
      textDecoration: "none",
      fontSize: 4,
    },
    navHeading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "header",
      textTransform: "uppercase",
      textDecoration: "none",
      fontSize: 3,
    },
    navHeadingWhite: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "styledHeaderText",
      textTransform: "uppercase",
      textDecoration: "none",
      fontSize: 3,
    },
    banner: {
      fontFamily: "headingAlternate",
      lineHeight: "heading",
      fontWeight: "body",
      color: "styledHeaderText",
      textTransform: "uppercase",
      fontSize: 7,
      letterSpacing: "0.03em",
    },
    headingAlternative: {
      fontFamily: "headingAlternate",
      lineHeight: "heading",
      fontWeight: "body",
      color: "header",
      textTransform: "uppercase",
      fontSize: 6,
      letterSpacing: "0.03em",
    },
    footer: {
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "body",
      color: "invisibleText",
      textDecoration: "none",
      fontSize: 1,
    },
    paragraph: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "paragraph",
      textDecoration: "none",
      fontSize: 2,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "paragraph",
    },
  },
}
