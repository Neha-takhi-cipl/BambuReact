// Material UI Customize theme
// Darken/Lighten will be used for custom hover states
import { darken } from 'material-ui/utils/colorManipulator';
import { createMuiTheme } from '@material-ui/core/styles';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors

const colors = {
  black: '#222',
  blue: '#1281b2',
  darkBlue: '#13174f',
  green: '#1aaf46',
  lightBlue: '#009ade',
  orange: '#f58400',
  navy: '#014687',
  purple: '#9f1d51',
  red: '#d0021b',
  white: '#fff',
  shades: {
    lightest: '#fcfcfc',
    lighter: '#f3f3f3',
    light: '#eeeef1',
    aBitLight: '#ccc',
    normal: '#acacac',
    aBitDark: '',
    dark: '#7d7d84',
    darker: '#6b6c72',
    darkest: '#4a4a4a',
  },
  pastels: {
    green: '#dff0d8',
    red: '#f2dede',
    yellow: '#fcf8e3',
  },
};

const theme = createMuiTheme({
  palette: {
    color: {
      grayBackground: '#EDEDED',
      grayFooter: colors.shades.darkest,
      gray600: colors.shades.darker,
      white: colors.white,
      black: colors.black,
      green: colors.green,
      orange: colors.orange,
      primary: {
        light: '#00D2FF',
        main: colors.lightBlue,
        dark: colors.darkBlue,
        contrastText: '#B8B9CA',
      },
    },
    textColor: '#6B6C72',
    textColorGrayOne: 'rgb(107, 108, 113)',
    headingColor: colors.darkBlue,
    lightGrayColor: '#797A7F',
    bodyColor: '#eeeef1',
    bodyBackgroundColor: '#eeeef1',
    light: '#00D2FF',
    primary: { main: colors.lightBlue, dark: darken(colors.lightBlue, 0.3) }, // dark blue
    secondary: {
      main: colors.shades.darker,
      dark: darken(colors.shades.darker, 0.3),
    }, // light blue
    success: { main: colors.green }, // green
    error: {
      main: colors.red,
      deletedRowolor: 'rgba(255,0,0,0.2)',
      transparent: 'transparent',
    }, // red
    warning: { main: '#ffa000' },
    info: { main: '#1976d2' },
    disabled: {
      main: '#1F2532', // dark grey
      light: '#6B6C72', // grey
      extraLight: 'rgba(0, 0, 0, 0.54)', // grey
      xlLight: '#F5F5F5',
    },
    required: colors.red,
    border: colors.shades.aBitLight,
    inputBackgroundColor: '#fff',
    inputBackgroundColorActive: colors.shades.lightest,
    inputBorderColor: colors.shades.aBitLight,
    inputBorderColorActive: colors.lightBlue,
  },
  appBar: {
    height: 50,
    primary: {},
  },
  breadCrumb: {
    breadCrumbPadding: '0.625rem',
  },
  dropdown: {
    zindexDropdown: '1000',
    dropdownMinWidth: '10rem',
    dropdownPaddingY: '.5rem',
    dropdownSpacer: '0',
    dropdownBg: '#fff',
    dropdownBorderWidth: '1px',
    dropdownBorderColor: 'rgba(0, 0, 0, 0.15)',
    dropdownBorderRadius: '0 0 .25rem .25rem',
    dropdownBoxShadow: '0 .5rem 1rem 0 rgba(0, 0, 0, 0.2)',
    dropdownDividerBg: '#d8d8d8',
    dropdownItemPaddingX: '1.5rem',
    dropdownItemPaddingY: '0.25rem',
    dropdownLinkColor: '#212529',
    dropdownLinkHoverColor: '#212529',
    dropdownLinkActiveColor: '#fff',
    dropdownLinkActiveBg: 'theme active colr',
    dropdownLinkHoverBg: '#F3F3F3',
    dropdownLinkDisabledColor: '#6b6c72',
    dropdownHeaderColor: '#6b6c72',
  },
  icon: {
    small: '18px',
    large: '24px',
  },
  navBar: {
    navDropdownPaddingY: '1.25rem',
    navDropdownPaddingX: '.625rem',
    navDropdownHoverBg: '#F3F3F3',
    navDropdownItemPaddingY: '.25rem',
    navDropdownItemPaddingX: '.625rem',
    dropdownPaddingY: '.5rem',
  },
  paging: {
    textColor: colors.shades.darker,
    hoverBgColor: colors.shades.lighter,
    activeBorderColor: colors.lightBlue,
    activeColor: colors.darkBlue,
    disabledColor: colors.shades.aBitLight,
  },
  paper: {
    paperPadding: '1rem',
  },
  spacing: {
    spacer: '1.125rem',
    paperSpacer: '1rem',
    themeUnit: '1rem',
    unitFourpx: '4px',
  },
  table: {
    tableBorderColor: colors.shades.light,
    tableLinkColor: colors.lightBlue,
    tableHeaderTextColor: colors.darkBlue,
    tableTextColor: colors.shades.darkest,
  },
  tabs: {
    tabBorderColor: colors.shades.aBitLight,
    tabActiveColor: colors.darkBlue,
    tabBackgroundColor: colors.shades.lighter,
    tabActiveBackgroundColor: colors.white,
  },
  typography: {
    fontSizeBase: '1rem', // Assumes the browser default, typically `16px`
    fontSizeXLg: '2rem',
    fontSizeMed: '1.25rem',
    fontSizeLg: '1.5rem',
    fontSizeSm: '.875rem',
    fontSizetiny: '.6875rem',
    fontWeightLight: '300',
    fontWeightNormal: '400',
    fontWeightBolder: '500',
    fontWeightBold: '700',
    fontFamilyRoboto: 'Roboto',
  },
  commonStyle: {
    anchorStyleOne: {
      textDecoration: 'none',
      color: '#009ADE',
    },
    imageStyle: {
      width: '100%',
    },
  },
  overrides: {
    MuiButton: {
      // textTransform: 'none',
      outlined: {
        textTransform: 'none',
      },
      contained: {
        textTransform: 'none',
        border: '1px solid',
        boxShadow: 'none',
      },
      text: {
        textTransform: 'none',
      },
      // '.icon': {
      //   margin: '20px',
      // },
    },
    MuiFormHelperText: {
      display: 'none',
    },
    MuiTextField: {
      presentation: {
        label: {
          color: '#ff0033',
        },
      },
    },
  },
  theme: 'customTheme',
});

export default theme;
