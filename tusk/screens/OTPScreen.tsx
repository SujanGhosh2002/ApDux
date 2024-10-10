import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import styles from '../styles/style';

const OTPScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Enter OTP</Text>
      </View>
      {/* form  */}
      <View style={styles.formContainer}>
        <View
          style={{
            width: 50,
            backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{textAlign: 'center'}}
            placeholder="0"
            placeholderTextColor={'gray'}
          />
        </View>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginText}>Submit OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;
