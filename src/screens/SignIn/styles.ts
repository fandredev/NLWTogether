import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
    height: 360
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: RFValue(32),
    marginBottom: 16,
    fontFamily: theme.fonts.bold,
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize: RFValue(15),
    textAlign: 'center',
    marginBottom: 64,
    fontFamily: theme.fonts.regular
  },

})