import TouchableArea from 'App/Screens/Component/UIElement/TouchableArea';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, View, ScrollView, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import Colors from '../../../Theme/Colors';
import Helpers from '../../../Theme/Helpers';
import { HeaderSection, shared_styles } from '../Home/Components/Shared';
// import TextInputControl from 'App/Screens/Component/UIElement/TextInput';
// import AppModal from 'App/Screens/Component/UIElement/Modal';
import { ScreenWidth, ScreenHeight } from 'App/Theme/Dimension';
import { useAPICreator } from 'App/Shared/API';
import { Figure, TextInputControl, AppModal } from 'App/Screens/Component/UIElement';



export default function UploadProduct() {

  const [images, setImages] = useState([{ source: null, id: 0 }]);
  const [category, setCategory] = useState(null);
  const [info, setInfo] = useState({});

  const [categories, setCategories] = useState([]);
  const fetchCategory = useAPICreator('category/get', (response) => { setCategories(response.data); }, 'get', { limit: 100 })

  useEffect(() => {
    fetchCategory()
    return () => { }
  }, [])

  return (
    <ScrollView style={shared_styles.page_container}>
      <AddPhoto images={images} setImages={setImages} />
      <Information info={info} setInfo={setInfo} />
      <PickCategory categories={categories} setCategory={setCategory} category={category} />
      <PickShipMethod />
      <Feature />
      <Feature />
      <Feature />
    </ScrollView>
  )
}

function Information({ info, setInfo }) {


  function Input(props) {
    return (
      <TextInputControl
        {...props}
        style={{ width: '100%', borderBottomWidth: 0, paddingHorizontal: 5, height: 30, fontSize: 14, ...props.style }}
      // blurOnSubmit={false}
      />
    )
  }

  const setValue = (text, key) => {
    setInfo({ ...info, [key]: text })
  }

  const _style = StyleSheet.create({
    headerStyle: { fontSize: 24, color: '#0984e3', marginHorizontal: 10 },
    textInput: { width: '100%', borderBottomWidth: 0, paddingHorizontal: 5, height: 30, fontSize: 14 }
  })

  return (
    <View style={[shared_styles.section_container]}>
      <HeaderSection
        leftText={'Thông tin cơ bản'}
        rightText={null}
        style={{ marginBottom: 0 }}
        showArrow={false}
        icon={<MaterialCommunityIcons name="playlist-edit" style={_style.headerStyle} />}
      />
      <View style={{ paddingLeft: 5 }}>
        <TextInputControl
          style={_style.textInput}
          placeholder="Tên sản phẩm"
          miniHint="Tên sản phẩm"
          onChangeText={text => setValue(text, 'name')}
          value={info.name}
        />

        <TextInputControl
          style={[_style.textInput, { height: 'auto' }]}
          placeholder="Mô tả sản phẩm"
          miniHint="Mô tả sản phẩm"
          onChangeText={text => setValue(text, 'description')}
          value={info.description}
          multiline={true}
          numberOfLines={2}
        />

        <TextInputControl
          style={_style.textInput}
          placeholder="Thương Hiệu"
          miniHint="Thương Hiệu"
          onChangeText={text => setValue(text, 'brand')}
          value={info.brand}
        />

        <TextInputControl
          style={_style.textInput}
          placeholder="Thời gian bảo hành (tháng)"
          miniHint="Thời gian bảo hành (tháng)"
          onChangeText={text => setValue(text, 'quarantine_time')}
          value={info.quarantine_time}
        />

        <View style={{ flexDirection: 'row' }}>
          <TextInputControl
            style={[_style.textInput,]}
            containerStyle={{ width: '50%' }}
            placeholder="Giá gốc (VND)"
            miniHint="Giá gốc (VND)"
            keyboardType='numeric'
            onChangeText={text => setValue(text, 'price_real')}
            value={info.price_real}
          />
          <TextInputControl
            style={[_style.textInput]}
            containerStyle={{ width: '50%' }}
            placeholder="Giá sale (VND)"
            miniHint="Giá sale (VND)"
            keyboardType='numeric'
            onChangeText={text => setValue(text, 'price_sale')}
            value={info.price_sale}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TextInputControl
            style={[_style.textInput]}
            placeholder="Số lượng"
            miniHint="Số lượng"
            keyboardType='numeric'
            containerStyle={{ width: '50%' }}
            onChangeText={text => setValue(text, 'amount')}
            value={info.amount}
          />
          <TextInputControl
            style={[_style.textInput]}
            containerStyle={{ width: '50%' }}
            placeholder="Khối lượng (Kg)"
            miniHint="Khối lượng (Kg)"
            keyboardType='numeric'
            onChangeText={text => setValue(text, 'net')}
            value={info.net}
          />
        </View>
      </View>
    </View>

  )
}

function AddPhoto({ images, setImages }) {
  const options = {
    title: 'Thêm ảnh sản phẩm',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  async function openFilePicker() {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setImages([...images, { source, id: Math.round(Math.random() * 100) }]);
      }
    });
  }

  return (
    <View style={[shared_styles.section_container]}>
      <HeaderSection
        leftText={'Hình ảnh sản phẩm'}
        rightText={null}
        showArrow={false}
        style={{ marginBottom: 0 }}
        icon={<MaterialIcons name="add-a-photo" style={{ fontSize: 24, color: '#0984e3', marginHorizontal: 10 }} />}
      />
      <View style={{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignContent: 'center',
        padding: 10,
      }}>
        <FlatList
          style={{ width: '100%' }}
          data={images}
          horizontal={true}
          removeClippedSubviews={true}
          maxToRenderPerBatch={1}
          disableVirtualization={false}
          renderItem={({ item }) => {
            if (item.source)
              return <View style={{ height: 100, width: 100, marginRight: 10, overflow: 'hidden' }}>
                <Image source={item.source} style={{ width: '100%', aspectRatio: 1, borderRadius: 5 }} />
              </View>
            else return (
              <TouchableArea onPress={openFilePicker} >
                <View style={[Helpers.flexRow, { marginRight: 10, backgroundColor: Colors.white, borderWidth: 1, borderColor: Colors.magazineBlue, borderRadius: 5, padding: 15, height: 100, width: 100 }]}>
                  <Text style={{ textAlign: 'center', color: Colors.magazineBlue }}>+ Thêm hình ảnh</Text>
                </View>
              </TouchableArea>
            )
          }}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>

  )
}

function PickCategory({ categories, category, setCategory }) {

  const [isShowMenu, setIsShowMenu] = useState(false);

  const onPick = (category) => {
    setCategory(category);
    setIsShowMenu(false)
  }

  return (
    <View style={[shared_styles.section_container]}>
      <TouchableArea onPress={() => setIsShowMenu(true)} >
        <HeaderSection
          leftText={'Danh Mục'}
          styleRightText={{ fontSize: 14 }}
          rightText={category ? category.name : 'Chưa chọn'}
          style={{ marginVertical: 5, borderBottomWidth: 0 }}
          icon={<MaterialIcons name="format-list-numbered" style={{ fontSize: 24, color: '#E91E63', marginHorizontal: 10 }} />}
        />
      </TouchableArea>

      <AppModal style={{
        backgroundColor: '#7b7c7c9e',
        width: '100%',
        margin: 0
      }} modalVisible={isShowMenu} setModalVisible={(value) => setIsShowMenu(!!value)} >
        <View style={style.recordContainer}>
          <Text style={{ textAlign: 'center', marginBottom: 5 }}> Chọn Danh Mục</Text>
          <ScrollView contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', height: 300 }} >
            <FlatList
              numColumns={4}
              // contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
              data={categories}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableArea key={item._id} onPress={() => onPick(item)} activeOpacity={0.7}>
                      <View style={style.icon_container} >
                        <View style={{ overflow: "hidden", borderRadius: 50 }}>
                          <Figure uri={item.image} height={65} width={65} />
                        </View>
                        <Text style={style.icon_text}>{item.name}</Text>
                      </View>
                    </TouchableArea>
                  </View>
                )
              }}
              keyExtractor={item => item._id}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
        </View>
      </AppModal>
    </View>
  )
}

function PickShipMethod({ categories, category, setCategory }) {

  const [isShowMenu, setIsShowMenu] = useState(false);

  const onPick = (category) => {
    setCategory(category);
    setIsShowMenu(false)
  }
  return (
    <View style={[shared_styles.section_container]}>
      <TouchableArea onPress={() => setIsShowMenu(true)} >
        <HeaderSection
          leftText={'Phương thức vận chuyển'}
          styleRightText={{ fontSize: 14 }}
          rightText={category ? category.name : 'Chưa chọn'}
          style={{ marginVertical: 5, borderBottomWidth: 0 }}
          icon={<OcticonsIcon name="package" style={{ fontSize: 24, color: '#E91E63', marginHorizontal: 10 }} />}
        />
      </TouchableArea>

      <AppModal style={{
        backgroundColor: '#7b7c7c9e',
        width: '100%',
        margin: 0
      }} modalVisible={isShowMenu} setModalVisible={(value) => setIsShowMenu(!!value)} >
        <View style={style.recordContainer}>
          <Text style={{ textAlign: 'center', marginBottom: 5 }}> Chọn Danh Mục</Text>
          <ScrollView contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', height: 300 }} >
            <FlatList
              contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
              data={categories}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableArea key={item._id} onPress={() => onPick(item)} activeOpacity={0.7}>
                      <View style={style.icon_container} >
                        <View style={{ overflow: "hidden", borderRadius: 50 }}>
                          <Figure uri={item.image} height={65} width={65} />
                        </View>
                        <Text style={style.icon_text}>{item.name}</Text>
                      </View>
                    </TouchableArea>
                  </View>
                )
              }}
              keyExtractor={item => item._id}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
        </View>
      </AppModal>
    </View>

  )
}
function Feature({ categories, category, setCategory }) {

  const [isShowMenu, setIsShowMenu] = useState(false);

  const onPick = (category) => {
    setCategory(category);
    setIsShowMenu(false)
  }
  return (
    <View style={[shared_styles.section_container]}>
      <TouchableArea onPress={() => setIsShowMenu(true)} >
        <HeaderSection
          leftText={'Thuộc tính'}
          styleRightText={{ fontSize: 14 }}
          rightText={category ? category.name : 'Chưa chọn'}
          style={{ marginVertical: 5, borderBottomWidth: 0 }}
          icon={<OcticonsIcon name="package" style={{ fontSize: 24, color: '#E91E63', marginHorizontal: 10 }} />}
        />
      </TouchableArea>

      <AppModal style={{
        backgroundColor: '#7b7c7c9e',
        width: '100%',
        margin: 0
      }} modalVisible={isShowMenu} setModalVisible={(value) => setIsShowMenu(!!value)} >
        <View style={style.recordContainer}>
          <Text style={{ textAlign: 'center', marginBottom: 5 }}> Chọn Danh Mục</Text>
          <ScrollView contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', height: 300 }} >
            <FlatList
              contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
              data={categories}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableArea key={item._id} onPress={() => onPick(item)} activeOpacity={0.7}>
                      <View style={style.icon_container} >
                        <View style={{ overflow: "hidden", borderRadius: 50 }}>
                          <Figure uri={item.image} height={65} width={65} />
                        </View>
                        <Text style={style.icon_text}>{item.name}</Text>
                      </View>
                    </TouchableArea>
                  </View>
                )
              }}
              keyExtractor={item => item._id}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
        </View>
      </AppModal>
    </View>

  )
}

const style = {
  menu_order_item: {
    // width: '25%',
    padding: 10,
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  recordContainer: {
    flex: 0,
    height: 'auto',
    minHeight: ScreenHeight / 2,
    width: ScreenWidth,
    padding: 10,
    bottom: -20,
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 1
  },
  menu_order_icon: {
    marginBottom: 8,
    fontSize: 28,
    color: Colors.darkGrey
  },
  menu_order_text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.grey,
    // fontWeight: 'bold'
  },
  icon_container: {
    marginRight: 2,
    width: 90,
    height: 100,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon_text: {
    fontSize: 12,
    height: 30,
    textAlign: 'center',
    color: Colors.darkGrey
  }

}