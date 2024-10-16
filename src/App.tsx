import {View, Text} from 'react-native';
import React from 'react';
import StackNavigation from './navigation/StackNavigation';
import BottomTabNavigation from './navigation/BottomTabNavigation';
// import 'react-native-reanimated';

const App = () => {
  return (
    // <View className="bg-gray-500 flex-1 justify-center items-center">
    //   <View className="w-2/4 h-1/4 bg-red-500 ">
    //     <Text
    //       className="bg-green-500 w-20 h-20 text-blue-900 font-bold absolute top-1/2 left-1/2 text-center"
    //       style={{
    //         transform: [{translateX: -40}, {translateY: -40}],
    //         // textAlign: 'center',
    //         textAlignVertical: 'center',
    //       }}>
    //       App
    //     </Text>
    //   </View>
    // </View>
    // <StackNavigation />
    <BottomTabNavigation />
  );
};

export default App;
