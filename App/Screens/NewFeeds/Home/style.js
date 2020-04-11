import { StyleSheet } from 'react-native';
import Colors from '../../../Theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: Colors.white,
  },

  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.lynxWhite
  },
  text: {
    fontSize: 42,
  },
});
