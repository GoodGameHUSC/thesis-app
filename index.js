/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App/App';

// if (__DEV__) {
//   require('react-devtools');
// }

AppRegistry.registerComponent(appName, () => App)
