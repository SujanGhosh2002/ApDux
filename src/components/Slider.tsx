import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const {width} = Dimensions.get('screen');

const sliderData = [
  {
    id: 1,
    title: 'Sujan Ghosh',
    image: require('../assets/v.png'),
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed.',
  },
  {
    id: 2,
    title: 'Suman Ghosh',
    image: require('../assets/v2.png'),
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed.',
  },
  {
    id: 3,
    title: 'Riya Ghosh',
    image: require('../assets/v3.png'),
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed.',
  },
];

const Slider = () => {
  // const scrollX = useSharedValue(0);
  // const onScrollHandler = useAnimatedScrollHandler({
  //   onScroll: e => {
  //     scrollX.value = e.contentOffset.x;
  //   },
  // });

  const renderItem = ({item, index}: any) => {
    // const rnAnimateStyle = useAnimatedStyle(() => {
    //   return {
    //     transform: [
    //       {
    //         translateX: interpolate(
    //           scrollX.value,
    //           [(index - 1) * width, index * width, (index + 1) * width],
    //           [-width * 0.25, 0, width * 0.25],
    //           Extrapolation.CLAMP,
    //         ),
    //       },
    //       {
    //         translateX: interpolate(
    //           scrollX.value,
    //           [(index - 1) * width, index * width, (index + 1) * width],
    //           [0.9, 0, 0.9],
    //           Extrapolation.CLAMP,
    //         ),
    //       },
    //     ],
    //   };
    // });
    return (
      <View
        key={item.id}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          width: width,
        }}>
        <Image
          className=""
          style={{width: 300, height: 200, borderRadius: 20}}
          source={item.image}
          blurRadius={0}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          className=""
          style={{
            position: 'absolute',
            width: 300,
            height: 200,
            padding: 20,
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '600',
              letterSpacing: 1.5,
            }}>
            {item.title}
          </Text>
          <Text>{item.description}</Text>
        </LinearGradient>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={sliderData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        // onScroll={onScrollHandler}
      />
    </View>
  );
};

export default Slider;
