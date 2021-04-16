import { StyleSheet } from "react-native";
import { colors, metrics } from "../../constants";

import { normalize } from "../../helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: normalize(metrics.spacing),
    backgroundColor: colors.primaryDark,
  },
});

export default styles;
