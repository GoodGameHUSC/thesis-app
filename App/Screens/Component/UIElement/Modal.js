
import React from "react";
import { StyleSheet } from "react-native";
import Modal from 'react-native-modal';


export default function AppModal({
  modalVisible,
  setModalVisible,
  children,
  style
}) {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      animationIn={"fadeInUp"}
      animationOut={"fadeOutDown"}
      backdropColor={'transparent'}
      animationOutTiming={200}
      hideModalContentWhileAnimating={true}
      style={{
        alignItems: 'center',
        ...style
      }}
    >
      {children}
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50,
    top: 0,
    // position: 'absolute',
    backgroundColor: 'yellow'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
