// import Colors from 'App/Theme/Colors';
import React from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Avatar } from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../../../Theme/Colors';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './AddNewFeedShortcutStyle';

const ERROR_STATES = {
  noError: 'No Error',
  bottomError: 'Bottom Error',
  topError: 'Top Error'
};

const GUIDING_TEXTS = {
  none: 'None',
  useTitle: 'Title',
  floatingPlaceholder: 'Floating Placeholder'
};

export default class AddNewFeedShortcut extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hideUnderline: false,
      underlineColor: undefined,
      guidingText: GUIDING_TEXTS.none,
      disabled: false,
      centered: false,
      useHelperText: false,
      titleColor: undefined,
      error: ERROR_STATES.noError,
      multiline: false,
      typography: 70,
      charCount: 0,
      text: ""
    };
  }

  onAvatarPress(item) {
    const { title, source, label } = item;
    // const uri = _.get(source, 'uri');
    // const isGravatar = !!uri && AvatarHelper.isGravatarUrl(uri);
    // const patchedGravatar = isGravatar ? AvatarHelper.patchGravatarUrl(uri) : undefined;
    // const message = `Label: ${label}\n\nImage-source: ${uri}\n\nIs Gravatar: ${isGravatar}\n\n${
    //   patchedGravatar ? `Patched-uri: ${patchedGravatar}` : ''
    //   }`;
    Alert.alert(title, label);
  }

  render() {
    const {
      hideUnderline,
      underlineColor,
      guidingText,
      titleColor,
      disabled,
      centered,
      useHelperText,
      multiline,
      charCount,
      typography,
      error,
      text
    } = this.state;

    return (
      <View style={styles.container}>
        <Avatar containerStyle={{ marginVertical: 5 }} {...example} onPress={() => this.onAvatarPress(example)} />
        <View style={{ paddingHorizontal: 10 }}>

          <TextInput
            style={{
              height: 40, textAlignVertical: 'center', marginLeft: 10, width: 250
            }}
            placeholder="What you want now?"
            onChangeText={text => this.setState({ text: text })}
            defaultValue={text}
          />
        </View>
        <Icon style={{ backgroundColor: Colors.lynxWhite, borderRadius: 50 }} name="plus" color={Colors.grey} size={25} ></Icon>
      </View>
    )
  }
}

const example = {
  title: 'Monitored Avatar (see logs)',
  // ribbonLabel: 'New',
  // badgeProps: { size: 'pimpleBig', backgroundColor: Colors.green30 },
  // badgePosition: 'TOP_RIGHT',
  size: 40,
  // source: require("../../../../Assets/Images/defaults/icons-user.png")
  source: {
    // uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-1/c0.32.320.320a/p320x320/44993500_506978453115866_3902158207107203072_o.jpg?_nc_cat=103&_nc_sid=7206a8&_nc_oc=AQlirD-_hClYF8AdI2YEkT0jK1G1KEMqpDrSTtDgLEFtUr9rLb27nqyy-kfNN9Mxzbs&_nc_ht=scontent.fsgn2-2.fna&oh=f388d514cfc42717678cd8a99b00e1e4&oe=5EB8312F'
    uri: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-1/p320x320/21543796_1473036992765827_8312056627909317286_o.png?_nc_cat=1&_nc_sid=1eb0c7&_nc_oc=AQnutia-x-2isK3prFWvg3S9B-1QvDuZvzj5KIvxiibef-RJ3Z9V2xRFavc8Gso_7iQ&_nc_ht=scontent.fsgn2-4.fna&oh=5a9dc41ac5083af9d2a5ffe2d15004dd&oe=5EB6CED2'
  }


  // onImageLoadStart: () => console.log('AvatarScreen: Monitored avatar load STARTED...'), // eslint-disable-line
  // onImageLoadEnd: () => console.log('AvatarScreen: Monitored avatar load ENDED') // eslint-disable-line
}