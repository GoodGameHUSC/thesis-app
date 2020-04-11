import Colors from 'App/Theme/Colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
