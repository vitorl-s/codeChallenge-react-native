import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useDrawerStatus } from '@react-navigation/drawer';

const Home = () => {
  const navigation = useNavigation();
  const drawerProgress = useSharedValue(0);
  const isDrawerOpen = useDrawerStatus() === 'open';
  const style = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value , 
      [0,1],[0,-45])
      return {transform: [{rotate: `${translateX}deg`}]}
  });

  useEffect(() => {
    if(isDrawerOpen) {
      drawerProgress.value = 1;
    } else {
      drawerProgress.value = 0;
    }
  },[isDrawerOpen]);

  return (
    <Animated.View style={[style , { flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }]}>
      <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
        <Text>screen1</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Screen2")}>
        <Text>screen2</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

export default Home