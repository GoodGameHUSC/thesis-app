import RecordSpeech from 'App/Screens/Home/HomeScreen/Component/RecordSpeech';
import { ScreenWidth } from 'App/Theme/Dimension.js';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Theme/Colors';
import { useNavigation } from '@react-navigation/native';

export default function SearchHeader() {


  const [text_search, set_text_search] = useState(null)
  const [is_open_recording, set_is_open_recording] = useState(false);

  const navigation = useNavigation();
  function onSpeechTextSuccess(text_list) {
    set_text_search(text_list[0]);
    set_is_open_recording(false);
  }
  function onSpeechTextFail(event) {
    set_text_search(null);
    console.log(event);
  }
  function onSpeechPartialResults(text_list) {
    let text = text_list[0];
    if (text && text_search !== text) {
      set_text_search(text);
    }
  }
  return (<>
    <View style={style.container}>
      <Icon name="search" style={style.searchButton} onPress={() => navigation.navigate("Search", {
        screen: 'Home'
      })} />
      <TextInput
        style={style.textSearch}
        placeholder="Nhập tên sản phẩm"
        onChangeText={text => set_text_search(text)}
        defaultValue={text_search}
      />
      <IconIonicons name="ios-mic"
        style={style.actionButton}
        onPress={() => set_is_open_recording(!is_open_recording)}
      />
      <IconIonicons name="ios-qr-scanner" style={style.actionButton} />

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
    </View>
  </>
  )
}

const style = {
  container: {
    backgroundColor: 'white',
    width: ScreenWidth - 32,
    marginHorizontal: 16,
    marginVertical: 0,
    height: 36,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchButton: {
    color: Colors.grey,
    fontSize: 16,
    marginLeft: 10
  },
  actionButton: {
    color: Colors.grey,
    fontSize: 20,
    marginLeft: 7,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  searchContainer: {
    padding: 5,
    paddingRight: 10
  },
  textSearch: {
    color: Colors.grey,
    height: 36,
    padding: 0,
    textAlignVertical: 'center', marginLeft: 10, width: ScreenWidth - 150,
    borderRightWidth: 1,
    borderRightColor: Colors.lynxWhite,
  }
}