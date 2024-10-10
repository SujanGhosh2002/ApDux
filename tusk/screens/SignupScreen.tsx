import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import styles from '../styles/style';

const SignupScreen = () => {
  const [secureEntery, setSecureEntery] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Sign Up</Text>
      </View>
      {/* form  */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/icon.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={'gray'}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/icon.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={'gray'}
            secureTextEntry={secureEntery}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntery(prev => !prev);
            }}>
            <Image source={require('../assets/icon.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/icon.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone no"
            placeholderTextColor={'gray'}
            secureTextEntry={secureEntery}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.googleButtonContainer}>
          <Image
            source={require('../assets/google.png')}
            style={styles.googleImage}
          />
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account!</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
