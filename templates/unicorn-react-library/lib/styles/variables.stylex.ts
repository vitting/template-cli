import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  primaryText: "black",
  secondaryText: "#333",
  accent: "blue",
  background: "white",
  lineColor: "gray",
});

export const spacing = stylex.defineVars({
  borderRadius4: "4px",
  borderRadius8: "8px",
  borderRadius12: "12px",
});

export const fonts = stylex.defineVars({
  fontFamily: "system-ui, sans-serif",
  fontSize16: "16px",
  fontSize18: "18px",
  fontSize20: "20px",
});
