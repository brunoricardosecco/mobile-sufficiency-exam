import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../constants';
import { normalize } from '../../helpers';

const styles = StyleSheet.create({
  button: (clear) => ({
    width: '100%',
    backgroundColor: !clear ? colors.primaryBlue : 'transparent',
    borderRadius: metrics.radius,
    padding: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  }),
  buttonText: (clear) => ({
    color: clear ? colors.primaryBlue : colors.white,
    fontWeight: 'bold',
  }),
});

export default styles;
