import Colors from './Colors.js'
import { StyleSheet } from 'react-native'

export const Section = StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 5
  },
  flexRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.blackLight
  },
  view_more: {
    fontSize: 12,
    padding: 4,
    color: Colors.redOrange
  }
})