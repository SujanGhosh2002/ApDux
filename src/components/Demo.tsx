// import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
// import React from 'react';
// const {width} = Dimensions.get('screen');
// const users = [
//   {
//     id: 1,
//     name: 'Sujan',
//   },
//   {
//     id: 2,
//     name: 'Suman',
//   },
//   {
//     id: 3,
//     name: 'Sujon',
//   },
//   {
//     id: 4,
//     name: 'Sumon',
//   },
//   {
//     id: 5,
//     name: 'Sujon',
//   },
//   {
//     id: 6,
//     name: 'Sumon',
//   },
// ];
// const Grid = () => {
//   return (
//     <View>
//       <Text>Component6</Text>
//       <ScrollView>
//         <View style={styles.grid}>
//           {users.map(item => (
//             <Text style={styles.item} key={item.id}>
//               {item.id}. {item.name}
//             </Text>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default Grid;

// const styles = StyleSheet.create({
//   grid: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     // backgroundColor: 'red',
//     gap: width / 25,
//   },
//   item: {
//     color: '#000',
//     width: width / 3.4,
//     height: width / 3.4,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     backgroundColor: 'blue',
//     borderWidth: 2,
//     borderColor: '#000',
//     borderRadius: 10,
//   },
// });

import React, {useState} from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const {width: screenWidth} = Dimensions.get('window');

const images = [
  {image: require('../assets/v.png')},
  {image: require('../assets/v2.png')},
  {image: require('../assets/v3.png')},
];

const AutoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const Pagination = ({currentIndex}) => {
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => {
          // Using Reanimated's useAnimatedStyle to animate the dot
          const animatedStyle = useAnimatedStyle(() => {
            const scale = withTiming(currentIndex === index ? 1.2 : 1, {
              duration: 300,
            });
            const opacity = withTiming(currentIndex === index ? 1 : 0.5, {
              duration: 300,
            });

            return {
              transform: [{scale}],
              opacity,
            };
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                animatedStyle,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={screenWidth * 0.6}
        data={images}
        autoPlay
        autoPlayInterval={3000}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({item, index}) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
      <View style={styles.paginationWrapper}>
        {/* Render pagination dots */}
        <Pagination currentIndex={activeIndex} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: screenWidth,
    height: screenWidth * 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationWrapper: {
    flexDirection: 'row',
    position: 'relative',
    left: 10,
    top: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    top: screenWidth * 0.4,
    left: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#ffffff',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});

export default AutoSlider;
