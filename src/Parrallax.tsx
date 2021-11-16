/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Animated,
  Text,
  View,
  Button,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';

const {height} = Dimensions.get('window');

export default function App() {
  // IMAGE
  const animationImageTranslateY = new Animated.Value(1);
  const animationImageScale = new Animated.Value(1);
  const animationImageBorderRadius = new Animated.Value(0);
  const animationImagZIndex = new Animated.Value(0);
  // TEXT
  const animationText = new Animated.Value(0);
  // VIEW
  const animationTranslateY = new Animated.Value(0);
  const ViewOpacityAnimation = new Animated.Value(0);

  const handlePress = () => {
    Animated.parallel([
      Animated.timing(animationImageTranslateY, {
        toValue: -190,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(animationImageScale, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(animationImageBorderRadius, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animationImagZIndex, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),

      Animated.timing(ViewOpacityAnimation, {
        toValue: 1,
        delay: 500,
        duration: 400,
        useNativeDriver: true,
      }),

      Animated.timing(animationText, {
        toValue: -520,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  console.log(animationImageTranslateY, 'animation');

  const imageAnimatedStyle = {
    transform: [
      {
        translateY: animationImageTranslateY,
      },
      {
        scale: animationImageScale,
      },
    ],
  };

  const ViewStyle = {
    opacity: ViewOpacityAnimation,
    transform: [
      {
        translateY: animationTranslateY,
      },
    ],
  };

  const textStyle = {
    transform: [
      {
        translateY: animationText,
      },
    ],
  };
  const borderRadius = animationImageBorderRadius.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 120],
  });

  // animationImagZIndenx

  const zIndex = animationImagZIndex.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0],
  });

  return (
    <View
      style={{
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
      }}>
      <Animated.View
        style={[
          {
            height: 525,
            width: '100%',
            // backgroundColor: '#4CA22F',
            overflow: 'hidden',
            zIndex,

            borderRadius,
          },
          imageAnimatedStyle,
        ]}>
        <ImageBackground
          // col={10}
          style={{
            height: '100%',
            width: '100%',
          }}
          source={require('./assets/image2.png')}></ImageBackground>
      </Animated.View>

      <Animated.View
        style={[
          {
            position: 'absolute',
            width: '100%',
            height: 525,
            backgroundColor: 'green',
            borderRadius,
          },
          imageAnimatedStyle,
        ]}
      />

      <Animated.View
        style={[
          {
            backgroundColor: '#4CA22F',
            height: 32,
            width: 113,
            borderRadius: 24,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 60,
            zIndex: 100,
          },
          ViewStyle,
        ]}>
        <Pressable>
          <Text style={{color: 'white'}}>Hello</Text>
        </Pressable>
      </Animated.View>

      {/* <ImageBackground source={} ></ImageBackground> */}
      <Button title="Press" onPress={handlePress} />
      <Animated.Text style={[textStyle, {zIndex: 0}]}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.In publishing and graphic
        design, Lorem ipsum is a placeholder text commonly used to demonstrate
        the visual form of a document or a typeface without relying on
        meaningful content. Lorem ipsum may be used as a placeholder before
        final copy is available.In publishing and graphic design, Lorem ipsum is
        a placeholder text commonly used to demonstrate the visual form of a
        document or a typeface without relying on meaningful content. Lorem
        ipsum may be used as a placeholder before final copy is available.In
        publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </Animated.Text>
    </View>
  );
}

// const styles = StyleSheet.create({});
