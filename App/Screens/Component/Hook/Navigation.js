import { useNavigation } from '@react-navigation/native';

export function withNavigation(WrappedComponent) {
  return function ConnectNavigation(props) {
    const navigation = useNavigation();
    return <WrappedComponent {...props} navigation={navigation} />;
  }

}