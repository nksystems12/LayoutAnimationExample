import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

export default SignupForm = () => {
  return (
    <View style={ { flex: 1 } }>
      <ScrollView style={ styles.container }
          keyboardShouldPersistTaps={ 'always' }
        >
        <View style={ styles.root }>
          <Text style={ styles.headerText }>
            Sign Up for Free
          </Text>
          <TextInput
            placeholder={ 'First Name' }
            style={ styles.textInput }
            underlineColorAndroid={ 'transparent' }
            placeholderTextColor={ '#889195' }
          />

          <TextInput
            placeholder={ 'Last Name' }
            style={ styles.textInput }
            underlineColorAndroid={ 'transparent' }
            placeholderTextColor={ '#889195' }
          />

          <TextInput
            placeholder={ 'Email Adress' }
            style={ styles.textInput }
            underlineColorAndroid={ 'transparent' }
            placeholderTextColor={ '#889195' }
          />

          <TextInput
            placeholder={ 'Password' }
            style={ styles.textInput }
            underlineColorAndroid={ 'transparent' }
            placeholderTextColor={ '#889195' }
          />

          <TouchableOpacity
            style={ styles.buttonContainer }
          >
            <View style={ styles.button }>
              <Text style={ styles.buttonText }>
                JOIN US
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
}
