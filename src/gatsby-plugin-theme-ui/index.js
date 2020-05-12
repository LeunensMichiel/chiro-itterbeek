export default {
  useColorSchemeMediaQuery: true,
  colors: {
    //according to figma spec
    //black 3 (& white 2)
    header: "#3B3B3D",
    styledHeaderText: "#F9F9FC",
    //black 2
    paragraph: "#272728",
    //Gray 0
    asideText: "#545456",
    //Gray 1
    invisibleText: "#99999E",
    //white 2
    background: "#F9F9FC",
    //white 1
    backgroundMuted: "#EDEDF2",
    //white 0
    border: "#E3E3E8",
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
        paragraph: "#EDEDF2",
        //Gray 2
        asideText: "#CACACE",
        //black 2
        background: "#272728",
        //black 3
        backgroundMuted: "#3B3B3D",
        //gray 0
        border: "#545456",
        //gray 0
        accentGray: "#545456",
      },
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'PT Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    headingAlternate:
      'Bangers, PT Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5625,
    heading: 1,
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "header",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "paragraph",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
