import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../constants';

import { normalize } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: normalize(metrics.spacing),
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: normalize(16),
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(22),
    marginBottom: normalize(metrics.spacing),
  },
  subTitle: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(18),
    marginBottom: normalize(metrics.spacing),
  },
  secondTitle: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: normalize(18),
    marginBottom: normalize(metrics.spacing),
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  },
});

export default styles;
