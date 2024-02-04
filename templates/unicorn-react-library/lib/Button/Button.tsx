import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { colors, fonts, spacing } from "../styles/variables.stylex";

const styles = stylex.create({
  button: {
    background: colors.accent,
    color: colors.background,
    border: `1px solid ${colors.lineColor}`,
    borderRadius: spacing.borderRadius8,
    padding: "1rem",
    fontSize: fonts.fontSize20,
  },
});

type props = Readonly<{
  children: string;
  style?: StyleXStyles<{
    width: string | number;
    height: string | number;
    backgroundColor: string;
  }>;
}>;

function Button({ children, style }: props) {
  return (
    <button
      onClick={() => console.log("Click")}
      {...stylex.props(styles.button, style)}
    >
      {children}
    </button>
  );
}

export default Button;
