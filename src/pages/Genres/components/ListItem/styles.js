import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../constants';
import { normalize } from '../../../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: normalize(metrics.spacing) / 2,
    borderRadius: metrics.radius,
    marginTop: normalize(metrics.spacing),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    marginBottom: normalize(metrics.spacing) / 2,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: normalize(metrics.spacing) / 2,
  },
  value: {
    fontWeight: 'normal',
    marginBottom: normalize(metrics.spacing) / 2,
  },
});

export default styles;
