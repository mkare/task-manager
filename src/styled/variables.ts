type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export const fontFamilies = {
  primary: "'Montserrat', sans-serif",
  secondary: "Roboto, sans-serif",
};

export const fontSizes: { [key in FontSize]: string } = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  xxl: "2rem",
  xxxl: "3rem",
};

export const fontSizeBase = fontSizes.md;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const lineHeights = {
  xs: "1rem",
  sm: "1.25rem",
  md: "1.5rem",
  lg: "1.75rem",
};

export const letterSpacings = {
  xs: "0.025rem",
  sm: "0.05rem",
  md: "0.075rem",
  lg: "0.1rem",
};

export const borderRadius = "0.25rem";

export const spacer = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
};

export const spacerX = spacer.md;
export const spacerY = spacer.sm;

export const containerMaxWidths = {
  mobile: "480px",
  tablet: "720px",
  laptop: "960px",
  desktop: "1140px",
};
