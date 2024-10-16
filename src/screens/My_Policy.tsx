import {View, Text, Switch} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CarouselSlider from '../components/Carousel';

const My_Policy = () => {
  return (
    <View>
      {/* <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Text>My_Policy</Text>
      </LinearGradient> */}
      <Switch />
      <CarouselSlider />
    </View>
  );
};

export default My_Policy;
