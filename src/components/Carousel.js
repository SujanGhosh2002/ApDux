// import {View, Text, FlatList, Image, Dimensions} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';
// const carouselData = [
//   {
//     id: 1,
//     title: 'Sujan Ghosh',
//     image: require('../assets/v.png'),
//     description:
//       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed.',
//   },
//   {
//     id: 2,
//     title: 'Suman Ghosh',
//     image: require('../assets/v2.png'),
//     description:
//       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed.',
//   },
//   {
//     id: 3,
//     title: 'Riya Ghosh',
//     image: require('../assets/v3.png'),
//     description:
//       ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed.',
//   },
// ];

// const Carousel = () => {
//   const flatlistRef = useRef();
//   const [activeIndex, setActiveIndex] = useState(0);
//   const screenWidth = Dimensions.get('window').width;

//   // useEffect(() => {
//   //   setInterval(() => {
//   //     if (activeIndex === carouselData.length - 1) {
//   //       flatlistRef.current.scrollToIndex({
//   //         index: 0,
//   //         animation: true,
//   //       });
//   //     } else {
//   //       flatlistRef.current.scrollToIndex({
//   //         index: activeIndex + 1,
//   //         animation: true,
//   //       });
//   //     }
//   //   }, 3000);
//   // });

//   // const getItemLayout = (data: any, index: number) => ({
//   //   length: screenWidth,
//   //   offset: screenWidth * index,
//   //   index: index,
//   // });
//   const renderItem = ({item, index}: any) => {
//     return (
//       <View key={index}>
//         <Image source={item.image} style={{width: screenWidth, height: 200}} />
//       </View>
//     );
//   };

//   const handleScroll = (event: any) => {
//     const scrollPosition = event.nativeEvent.contentOffset.x;
//     // const dotIndex =;
//     const index = Math.round(scrollPosition / screenWidth);
//     setActiveIndex(index);
//   };

//   const renderDotIndicators = () =>
//     carouselData.map((dot, index) => {
//       return (
//         <View
//           key={index}
//           style={[
//             {
//               height: 10,
//               width: 10,
//               borderRadius: 5,
//               marginHorizontal: 5,
//             },
//             activeIndex === index
//               ? {backgroundColor: '#fff'}
//               : {backgroundColor: 'gray'},
//           ]}></View>
//       );
//     });

//   return (
//     <View>
//       <Text>Carousel</Text>
//       <FlatList
//         data={carouselData}
//         ref={flatlistRef}
//         // getItemLayout={getItemLayout}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         onScroll={handleScroll}
//       />
//       <View style={{flexDirection: 'row', marginTop: -30, marginLeft: 10}}>
//         {renderDotIndicators()}
//       </View>
//     </View>
//   );
// };

// export default Carousel;

import React, {useState, useEffect} from 'react';
import {View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

const {width: screenWidth} = Dimensions.get('window');

const images = [
  {image: require('../assets/v.png')},
  {image: require('../assets/v2.png')},
  {image: require('../assets/v3.png')},
];
const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [activeIndex]);
  const Pagination = ({currentIndex}) => {
    return (
      <View style={styles.paginationContainer}>
        {images.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
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
        pagingEnabled={true}
        // scrollEnabled={true}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({item, index}) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          left: 10,
          top: 10,
        }}>
        <Pagination currentIndex={activeIndex} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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

export default CarouselSlider;
