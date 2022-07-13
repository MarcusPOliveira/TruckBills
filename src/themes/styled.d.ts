import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      background: string,
      green_900: string,
      gray_300: string,
      gray_600: string,
      gray_700: string,
      alert: string,
      text: string,
      white: string,
    },
    fonts: {
      regular: string,
      medium: string,
      bold: string,
    }
  }
}