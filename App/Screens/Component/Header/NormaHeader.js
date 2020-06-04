
export function NormalHeaderOption(title, buttonRight) {
  return {
    headerTintColor: '#273c75',
    headerTitle: title || 'Shopping Me',
    headerStyle: {
      height: 50,
    },
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 14,
      textTransform: 'uppercase',
    },
    headerTitleAlign: 'center',
    headerRight: buttonRight
  }
}

export function HeaderWithoutShadow(title, buttonRight) {
  return {
    headerTintColor: '#273c75',
    headerTitle: title || 'Shopping Me',
    headerStyle: {
      backgroundColor: 'white',
      // ios
      shadowOpacity: 0.1,
      shadowRadius: 2,
      shadowOffset: {
        height: 0,
        width: 0
      },
      // android
      borderBottomWidth: 0,
      elevation: 1,
      height: 50,
    },
    headerTitleStyle: {
      fontWeight: 'normal',
      fontSize: 16,
      // textTransform: 'uppercase',
    },
    headerTitleAlign: 'center',
    headerRight: buttonRight,

  }
}