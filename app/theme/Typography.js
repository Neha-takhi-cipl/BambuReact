import * as Typography from "typography";
import Colors from "./Colors";
import Fonts from "./Fonts";
import Metrics from "./Metrics";
const theme = {
    bodyFontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
    overrideThemeStyles: () => ({
        "body": {
            lineHeight: 1.35,
            color: `${Colors.text}`,
        },
        "input, select, button": {
            outline: "none",
        },
        "input, select": {
            "-webkit-appearance": "none",
        },
        "img": {
            marginBottom: 0,
        },
        "h1, h2, h3, h4": {
            color: `${Colors.primary}`,
        },
        "h1": {
            fontSize: Fonts.pageHeader.fontSize,
            fontWeight: Fonts.pageHeader.fontWeight,
        },
        "h2": {
            fontSize: Fonts.pageSubHeader.fontSize,
            fontWeight: Fonts.pageSubHeader.fontWeight,
        },
        "h3": {
            fontSize: Fonts.mainTitle.fontSize,
            fontWeight: Fonts.mainTitle.fontWeight,
        },
        "h4": {
            fontSize: Fonts.title.fontSize,
            fontWeight: Fonts.title.fontWeight,
        },
        "h5": {
            fontWeight: Fonts.smallTitle.fontWeight,
        },
        "p": {
            marginBottom: "1em",
        },
        "a": {
            color: Colors.secondary,
            textDecoration: "underline",
        },
    }),
};

const typography = new Typography(theme);

export default typography;
