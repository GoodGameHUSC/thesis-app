import { useNavigation } from '@react-navigation/native';
import { TextInputControl } from 'App/Screens/Component/UIElement';
import RippleButton from 'App/Screens/Component/UIElement/RippleButton';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import Colors from '../../../Theme/Colors';

export default function SearchDetailHeader({ text, setText, loading, onSubmit }) {

  const navigation = useNavigation()
  const changeText = (text) => {
    setText(text)
  }

  return (<>
    <View style={style.container}>
      <RippleButton
        style={style.backButton}
        onPress={() => navigation.goBack()}
        icon_name={'arrow-left'}
      />
      <View style={{ marginLeft: 5, flexDirection: 'row', alignItems: 'center' }}>
        <TextInputControl
          style={style.textInput}
          placeholder="Nhập nội dung tìm kiếm"
          onSubmitEditing={onSubmit}
          returnKeyLabel={'Tìm'}
          // autoFocus={true}
          onChangeText={changeText}
          value={text}
        />
        <IconFeather name="list"
          style={style.actionButton}
          onPress={() => { }}
        />
        {/* <IconIonicons name="ios-qr-scanner" style={style.actionButton} /> */}
      </View>
    </View>
  </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ScreenWidth,
    height: 50,
    // borderRadius: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backButton: {
    color: Colors.redOrange,
    fontSize: 24,
    // marginLeft: 10
  },
  actionButton: {
    color: Colors.grey,
    fontSize: 18,
    marginLeft: 8,
    // paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: Colors.bg,
    width: 30,
    height: 30,
    textAlign: 'center',
    borderRadius: 20
  },
  textInput: {
    width: ScreenWidth - 100,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    // height: 30,
    fontSize: 14,
    backgroundColor: Colors.bg,
    borderRadius: 3,
    marginTop: 0,
    marginBottom: 0
    // flex: 1
  }
})


{/* <Icon name="search" style={style.searchButton} onPress={() => navigation.navigate("Home", {
        screen: 'Search'
      })} />
      <TextInput
        style={style.textSearch}
        placeholder="Nhập tên sản phẩm"
        onChangeText={text => set_text_search(text)}
        defaultValue={text_search}
      />
      

      <View>
        {is_open_recording &&
          <RecordSpeech
            is_open_recording={is_open_recording}
            set_is_open_recording={set_is_open_recording}
            onSpeechTextSuccess={onSpeechTextSuccess}
            onSpeechTextFail={onSpeechTextFail}
            onSpeechPartialResults={onSpeechPartialResults}
          />
        }
      </View>
    </View> */}