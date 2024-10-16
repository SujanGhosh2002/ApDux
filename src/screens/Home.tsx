import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Component6 from '../components/Demo';
import Slider from '../components/Slider';
import MyCarousel from '../components/AutoSlider';

const Home = () => {
  return (
    <View>
      {/* <Text>Home</Text>
      <TextInput placeholder="Enter Anything" /> */}
      {/* <Slider /> */}
      <MyCarousel />
    </View>
  );
};

export default Home;
