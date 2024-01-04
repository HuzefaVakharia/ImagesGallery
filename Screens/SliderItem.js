/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
const {height, width} = Dimensions.get('window');
// create a component
const SliderItem = ({image,index,currentIndex,isGalleryImages}) => {


const animation=useSharedValue(0);
useEffect(()=>{
animation.value=currentIndex;
},[currentIndex]);

const animatedStyle=useAnimatedStyle(()=>{
    return {
      transform:[{scale:animation.value==index?withSpring(1):withSpring(0.5)}]
    };
  });

  return (
    <Animated.View 
    style={[{
        
        width:300,
        height:300,
        justifyContent:'center',
        alignItems:'center'
    },animatedStyle]}
    >
   
    <Image 
      
      source={isGalleryImages==true?{uri:image.path}:image}
      
        style={{width:'70%',height:'70%', borderWidth:0.5}}
        
      />
          </Animated.View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SliderItem;