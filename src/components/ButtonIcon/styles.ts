import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: RFValue(56),
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    width: RFValue(56),
    height: RFValue(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: RFValue(24),
    height: RFValue(18)
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: RFValue(15),
    textAlign: 'center',
    fontFamily: theme.fonts.medium
  }
})