import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../constants';
import { normalize } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: normalize(5),
  },
  input: {
    width: '100%',
    borderRadius: metrics.radius,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
    padding: normalize(5),
    color: colors.white,
  },
  label: {
    marginBottom: normalize(5),
    color: colors.white,
  },
});

export default styles;
