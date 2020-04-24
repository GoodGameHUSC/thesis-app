import AppModal from 'App/Screens/Component/UIElement/Modal';
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, PermissionsAndroid } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../Theme/Colors';
import Voice from '@react-native-community/voice';

export default class RecordSpeech extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      analyzing: false,
      results: [null],
      error: false,
      text_search: null,
      is_recording: false
    };

    Voice.onSpeechStart = this.onSpeechStart.bind(this)
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this)
    Voice.onSpeechError = this.onSpeechError.bind(this)
    Voice.onSpeechResults = this.onSpeechResults.bind(this)
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this)
  }

  async componentDidMount() {
    await this.requestCameraPermission()
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      // analyzing: true,
      error: null,
      results: []
    });
  }
  onSpeechEnd(e) {
    // this.setState({
    //   analyzing: false,
    // });
  }

  onSpeechError(e) {
    // this.setState({
    //   analyzing: false,
    // });
    if (e.error) {
      this.setState({ error: "Vui lòng thử nội dung khác" })
    }
  }

  onSpeechResults(e) {
    let list_text = e.value;
    this.setState({
      results: e.value,
    });
    if (list_text) {
      if (list_text.length > 0) {
        this.setState({
          error: null,
        }, () => {
          this.props.onSpeechTextSuccess(list_text)
        })
      }
    } else {
      this.props.onSpeechTextFail(e)
    }
  }

  onSpeechPartialResults(e) {
    let list_text = e.value;
    this.setState({
      results: e.value,
    });
    if (list_text) {
      if (list_text.length > 0) {
        this.props.onSpeechPartialResults(list_text)
      }
    }
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Record Permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  setIsRecording = (value) => {
    this.setState({ is_recording: !!value })
  }

  startRecognition = async (e) => {
    this.setState({
      analyzing: false,
      error: null,
      results: [],
    });
    try {
      Voice.start('vi-VN');
    } catch (e) {
      console.error(e);
    }
  }

  render() {

    const { is_open_recording, set_is_open_recording } = this.props;
    const { is_recording, error, results, analyzing } = this.state;
    const { startRecognition, setIsRecording } = this;
    return (<>
      <AppModal modalVisible={is_open_recording} setModalVisible={(value) => set_is_open_recording(!!value)} >
        <View style={style.recordContainer}>
          {is_recording && <Text style={{ textAlign: 'center', color: Colors.grey }}>Đang ghi âm...</Text>}

          {/* {results.length > 0 && <Text style={{ textAlign: 'center', color: Colors.grey }}>{results[0]}</Text>} */}

          <TouchableOpacity style={style.recordButtonContainer}
            onPressIn={async (event) => {
              setIsRecording(true)
              await startRecognition(event)
            }}
            onPressOut={() => {
              setIsRecording(false)
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            activeOpacity={1}
          >
            <IconIonicons name="ios-mic"
              style={[style.recordButton, is_recording && { backgroundColor: Colors.red, color: 'white' }]}
            />
          </TouchableOpacity>
          {error && <Text style={{ textAlign: 'center', color: Colors.grey }}>{error}</Text>}
          <Text style={{ textAlign: 'center', color: Colors.grey }}>{!is_recording && !error ? "Nhấn để bắt đầu tìm kiếm bằng giọng nói" : ""}</Text>
        </View>
      </AppModal>
    </>
    )
  }
}

const style = {
  recordContainer: {
    flex: 0,
    height: 'auto',
    width: 'auto',
    padding: 50,
    bottom: 50,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  recordButton: {
    color: Colors.grey,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    lineHeight: 60,
  },
  recordButtonContainer: {
    borderRadius: 50,
    width: 60,
    overflow: 'hidden',
    marginVertical: 20
  },
}
/**
List locale:

For iOS Only,
Nederland : nl - NL
México: es - MX
台灣: zh - TW
France: fr - FR
Italia: it - IT
Việt Nam: vi - VN
Suisse: fr - CH
South Africa: en - ZA
Espanya: ca - ES
대한민국: ko - KR
Chile: es - CL
România: ro - RO
Philippines: en - PH
Latinoamérica: es -
  Canada : en - CA
Singapore: en - SG
India: en - IN
New Zealand: en - NZ
Svizzera: it - CH
Canada: fr - CA
भारत: hi - IN
Danmark: da - DK
Österreich: de - AT
Brasil: pt - BR
中华人民共和国: yue - CN
中国: zh - CN
Sverige: sv - SE
भारत: hi - IN - translit
España: es - ES
Magyarország: hu - HU
المملكة العربية السعودية: ar - SA
Belgique: fr - BE
United Kingdom: en - GB
日本: ja - JP
香港（中國） : zh - HK
Suomi: fi - FI
Türkiye: tr - TR
Norge: nb - NO
Indonesia: en - ID
Saudi Arabia: en - SA
Polska: pl - PL
Indonesia: id - ID
Malaysia: ms - MY
Ελλάδα: el - GR
Česko: cs - CZ
Hrvatska: hr - HR
United Arab Emirates: en - AE
ישראל: he - IL
Россия: ru - RU
China: wuu - CN
Schweiz: de - CH
Australia: en - AU
Deutschland: de - DE
België: nl - BE
ไทย: th - TH
Portugal: pt - PT
Slovensko: sk - SK
United States: en - US
Ireland: en - IE
Colombia: es - CO
  (null) : hi - Latn
Україна: uk - UA
Estados Unidos: es - US
 */