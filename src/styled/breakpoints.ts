interface Breakpoints {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

type Media = Record<keyof Breakpoints, string>;

export const media: Media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label as keyof Media] = `@media (min-width: ${
    breakpoints[label as keyof Media]
  })`;
  return acc;
}, {} as Media);
