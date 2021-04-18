import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../constants';
import { normalize } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
    paddingHorizontal: normalize(metrics.spacing),
    paddingTop: normalize(metrics.spacing),
  },
});

export default styles;
