import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import styles from '../styles/style';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Forgot Password</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('OTPScreen')}
          style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
