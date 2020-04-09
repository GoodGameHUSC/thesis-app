import AppNavigator from 'App/Navigators/AppNavigator'
import NavigationService from 'App/Services/NavigationService'
import StartupActions from 'App/Stores/Startup/Actions'
import { Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

class RootScreen extends Component {
  componentDidMount() {
    this.props.startup()
  }

  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
