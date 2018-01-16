import React, { PureComponent } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  LayoutAnimation,
  NativeModules,
} from 'react-native';
import styles from './style';
import {
  LoginForm,
  SignupForm,
} from './components';

type LoginSignupLandingState = {
  isLogginIn: boolean,
};

const { UIManager } = NativeModules;

const CustomLayoutAnimation = {
  duration: 300,
  create: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  },
  update: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  },
  delete: {
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  },
}

class LoginSignupLanding extends PureComponent<null, LoginSignupLandingState>{
  state: LoginSignupLandingState

  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental(true);

    this.state = {
      isLoggingIn: true,
    };

    this.toggleLoggingIn = this.toggleLoggingIn.bind( this );
  }

  toggleLoggingIn: Function;
  toggleLoggingIn() {
    LayoutAnimation.configureNext( CustomLayoutAnimation );
    this.setState( {
      isLoggingIn: !this.state.isLoggingIn,
    } )
  }

  render() {
    return (
      <View style={ styles.root }>
        <View style={ styles.header }>
          <TouchableWithoutFeedback
            onPress={ !this.state.isLoggingIn ? this.toggleLoggingIn : () => {} }
          >
            <View
              style={ [
                styles.button,
                this.state.isLoggingIn ? styles.selectedButton : styles.regularButton,
              ] }
            >
              <Text style={ [
                styles.buttonText,
                this.state.isLoggingIn ? styles.selectedButtonText : styles.regularButtonText,
              ] }>
                Log In
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={ this.state.isLoggingIn ? this.toggleLoggingIn : () => {} }
          >
            <View
              style={ [
                styles.button,
                !this.state.isLoggingIn ? styles.selectedButton : styles.regularButton,
              ] }
            >
              <Text style={ [
                styles.buttonText,
                !this.state.isLoggingIn ? styles.selectedButtonText : styles.regularButtonText,
              ] }>
                Sign Up
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={ styles.formContainer }>
          {
            this.state.isLoggingIn &&
            <LoginForm />
          }

          <SignupForm/>
        </View>
      </View>
    );
  }
}

export default LoginSignupLanding;
