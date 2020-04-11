import Colors from 'App/Theme/Colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // container: {
  //   backgroundColor: Colors.white,
  //   flex: 1
  // },
  // logo: {
  //   backgroundColor: Colors.white,
  //   height: 70,
  //   width: 70,
  // },

  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: Colors.white,
  },

  categoryContainer: {
    backgroundColor: Colors.white,

    paddingLeft: 5,
    paddingVertical: 4,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    // android
    borderBottomWidth: 0,
    elevation: 1,
  },

  scrollView: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
