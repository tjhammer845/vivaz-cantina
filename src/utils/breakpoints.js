const size = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "992px",
  xl: "1199px",
  xxl: "1280px",
}

export const breakpoints = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,

  maxmd: `(max-width: ${size.md})`,
}
