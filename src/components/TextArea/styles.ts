import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary40,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    paddingLeft: 16,
    paddingTop: 16,
    textAlignVertical: 'top'
  }
})