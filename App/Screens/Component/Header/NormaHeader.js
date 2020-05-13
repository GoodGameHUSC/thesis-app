
export function NormalHeaderOption(title) {
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
    headerTitleAlign: 'center'
  }
}