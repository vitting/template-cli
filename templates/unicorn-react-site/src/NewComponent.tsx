import stylex from "@stylexjs/stylex";
// import { spacing } from "@test-lib/library-react/stylex/variables.stylex.js";
import { spacing } from "../node_modules/@test-lib/library-react/dist/variables.stylex";

const styles = stylex.create({
  container: {
    backgroundColor: "red",
    padding: "2rem",
    borderRadius: spacing.borderRadius12,
  },
});

function NewComponent() {
  return <div {...stylex.props(styles.container)}>NewComponent</div>;
}

export default NewComponent;
