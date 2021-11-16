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
  SafeAreaView,
  NativeSyntheticEvent,
  NativeScrollEvent,
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

  const testPress = () => {
    Animated.parallel([
      Animated.timing(animationImageTranslateY, {
        toValue: -200, //height to where the button will appear
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
      Animated.timing(animationTranslateY, {
        toValue: -450,
        delay: 500,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(ViewOpacityAnimation, {
        toValue: 1,
        delay: 500,
        duration: 400,
        useNativeDriver: true,
      }),

      Animated.timing(animationText, {
        toValue: -480, //HEIGHT START OF THE SCREEN SO THE TEXT WILL PLACE IT
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const handlePress = () => {
    // Animated.parallel([
    //   Animated.timing(animationImageTranslateY, {
    //     toValue: -190,
    //     duration: 600,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(animationImageScale, {
    //     toValue: 0,
    //     duration: 800,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(animationImageBorderRadius, {
    //     toValue: 1,
    //     duration: 500,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(animationImagZIndex, {
    //     toValue: 1,
    //     duration: 150,
    //     useNativeDriver: true,
    //   }),

    //   Animated.timing(ViewOpacityAnimation, {
    //     toValue: 1,
    //     delay: 500,
    //     duration: 400,
    //     useNativeDriver: true,
    //   }),

    //   Animated.timing(animationText, {
    //     toValue: -520,
    //     duration: 1000,
    //     useNativeDriver: true,
    //   }),
    // ]).start();
    console.log('object');
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
    outputRange: [20, 420],
  });

  // animationImagZIndenx

  const zIndex = animationImagZIndex.interpolate({
    inputRange: [0, 1],
    outputRange: [1000, 0],
  });

  return (
    <Animated.ScrollView
      bounces={false}
      // stickyHeaderIndices={[2]}
      style={{backgroundColor: 'red'}}
      onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrolling = event.nativeEvent.contentOffset.y;

        if (scrolling) {
          console.log('yes');
          console.log(scrolling, '===scrolling');
          testPress();
          //run animation
        } else {
          console.log('nooo');
          // return animation
        }
      }}>
      <Animated.View
        style={[
          {
            height: 525,
            width: '100%',
            backgroundColor: 'red',
            overflow: 'hidden',
            zIndex,
            borderRadius,
          },
          imageAnimatedStyle,
        ]}>
        <ImageBackground
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'red',
          }}
          source={require('./assets/image2.png')}>
          <Text>WE</Text>
        </ImageBackground>
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
            width: 120,
            height: 35,
            borderRadius: 24,
            // position: 'absolute',

            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
            overflow: 'hidden',
          },
          ViewStyle,
        ]}>
        <Pressable
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            width: '100%',
            height: '100%',
          }}>
          <Text style={{color: 'white'}}>Hello</Text>
        </Pressable>
      </Animated.View>

      <Animated.View style={[textStyle]}>
        <Animated.Text>
          // In publishing and graphic design, Lorem ipsum is a placeholder text
          // commonly used to demonstrate the visual form of a document or a //
          typeface without relying on meaningful content. Lorem ipsum may be //
          used as a placeholder before final copy is available.In publishing and
          // graphic design, Lorem ipsum is a placeholder text commonly used to
          // demonstrate the visual form of a document or a typeface without //
          relying on meaningful content. Lorem ipsum may be used as a //
          placeholder before final copy is available.In publishing and graphic
          // design, Lorem ipsum is a placeholder text commonly used to
          demonstrate // the visual form of a document or a typeface without
          relying on // meaningful content. Lorem ipsum may be used as a
          placeholder before // final copy is available.In publishing and
          graphic design, Lorem ipsum // is a placeholder text commonly used to
          demonstrate the visual form of // a document or a typeface without
          relying on meaningful content. Lorem // ipsum may be used as a
          placeholder before final copy is available. //
        </Animated.Text>
        <Animated.Text>
          // In publishing and graphic design, Lorem ipsum is a placeholder text
          // commonly used to demonstrate the visual form of a document or a //
          typeface without relying on meaningful content. Lorem ipsum may be //
          used as a placeholder before final copy is available.In publishing and
          // graphic design, Lorem ipsum is a placeholder text commonly used to
          // demonstrate the visual form of a document or a typeface without //
          relying on meaningful content. Lorem ipsum may be used as a //
          placeholder before final copy is available.In publishing and graphic
          // design, Lorem ipsum is a placeholder text commonly used to
          demonstrate // the visual form of a document or a typeface without
          relying on // meaningful content. Lorem ipsum may be used as a
          placeholder before // final copy is available.In publishing and
          graphic design, Lorem ipsum // is a placeholder text commonly used to
          demonstrate the visual form of // a document or a typeface without
          relying on meaningful content. Lorem // ipsum may be used as a
          placeholder before final copy is available. //
        </Animated.Text>
        <Animated.Text>
          // In publishing and graphic design, Lorem ipsum is a placeholder text
          // commonly used to demonstrate the visual form of a document or a //
          typeface without relying on meaningful content. Lorem ipsum may be //
          used as a placeholder before final copy is available.In publishing and
          // graphic design, Lorem ipsum is a placeholder text commonly used to
          // demonstrate the visual form of a document or a typeface without //
          relying on meaningful content. Lorem ipsum may be used as a //
          placeholder before final copy is available.In publishing and graphic
          // design, Lorem ipsum is a placeholder text commonly used to
          demonstrate // the visual form of a document or a typeface without
          relying on // meaningful content. Lorem ipsum may be used as a
          placeholder before // final copy is available.In publishing and
          graphic design, Lorem ipsum // is a placeholder text commonly used to
          demonstrate the visual form of // a document or a typeface without
          relying on meaningful content. Lorem // ipsum may be used as a
          placeholder before final copy is available. //
        </Animated.Text>

        <Animated.Text>
          // In publishing and graphic design, Lorem ipsum is a placeholder text
          // commonly used to demonstrate the visual form of a document or a //
          typeface without relying on meaningful content. Lorem ipsum may be //
          used as a placeholder before final copy is available.In publishing and
          // graphic design, Lorem ipsum is a placeholder text commonly used to
          // demonstrate the visual form of a document or a typeface without //
          relying on meaningful content. Lorem ipsum may be used as a //
          placeholder before final copy is available.In publishing and graphic
          // design, Lorem ipsum is a placeholder text commonly used to
          demonstrate // the visual form of a document or a typeface without
          relying on // meaningful content. Lorem ipsum may be used as a
          placeholder before // final copy is available.In publishing and
          graphic design, Lorem ipsum // is a placeholder text commonly used to
          demonstrate the visual form of // a document or a typeface without
          relying on meaningful content. Lorem // ipsum may be used as a
          placeholder before final copy is available. //
        </Animated.Text>
      </Animated.View>
    </Animated.ScrollView>
  );
}

// const styles = StyleSheet.create({});

// <View
// style={{
//   // alignItems: 'center',
//   // justifyContent: 'center',
//   flex: 1,
// }}>
// <Animated.View
//   style={[
//     {
//       height: 525,
//       width: '100%',
//       // backgroundColor: '#4CA22F',
//       overflow: 'hidden',
//       zIndex,

//       borderRadius,
//     },
//     imageAnimatedStyle,
//   ]}>
//   <ImageBackground
//     // col={10}
//     style={{
//       height: '100%',
//       width: '100%',
//     }}
//     source={require('./assets/image2.png')}></ImageBackground>
// </Animated.View>

// <Animated.View
//   style={[
//     {
//       position: 'absolute',
//       width: '100%',
//       height: 525,
//       backgroundColor: 'green',
//       borderRadius,
//     },
//     imageAnimatedStyle,
//   ]}
// />

// <Animated.View
//   style={[
//     {
//       backgroundColor: '#4CA22F',
//       height: 32,
//       width: 113,
//       borderRadius: 24,
//       position: 'absolute',
//       alignItems: 'center',
//       justifyContent: 'center',
//       alignSelf: 'center',
//       marginTop: 60,
//       zIndex: 100,
//     },
//     ViewStyle,
//   ]}>
//   <Pressable>
//     <Text style={{color: 'white'}}>Hello</Text>
//   </Pressable>
// </Animated.View>

// {/* <ImageBackground source={} ></ImageBackground> */}
// <Button title="Press" onPress={handlePress} />
// <Animated.ScrollView
//   style={[textStyle, {zIndex: 0, backgroundColor: 'gray'}]}>
//   <Animated.Text>
//     In publishing and graphic design, Lorem ipsum is a placeholder text
//     commonly used to demonstrate the visual form of a document or a
//     typeface without relying on meaningful content. Lorem ipsum may be
//     used as a placeholder before final copy is available.In publishing and
//     graphic design, Lorem ipsum is a placeholder text commonly used to
//     demonstrate the visual form of a document or a typeface without
//     relying on meaningful content. Lorem ipsum may be used as a
//     placeholder before final copy is available.In publishing and graphic
//     design, Lorem ipsum is a placeholder text commonly used to demonstrate
//     the visual form of a document or a typeface without relying on
//     meaningful content. Lorem ipsum may be used as a placeholder before
//     final copy is available.In publishing and graphic design, Lorem ipsum
//     is a placeholder text commonly used to demonstrate the visual form of
//     a document or a typeface without relying on meaningful content. Lorem
//     ipsum may be used as a placeholder before final copy is available.
//   </Animated.Text>
//   <Animated.Text>
//     In publishing and graphic design, Lorem ipsum is a placeholder text
//     commonly used to demonstrate the visual form of a document or a
//     typeface without relying on meaningful content. Lorem ipsum may be
//     used as a placeholder before final copy is available.In publishing and
//     graphic design, Lorem ipsum is a placeholder text commonly used to
//     demonstrate the visual form of a document or a typeface without
//     relying on meaningful content. Lorem ipsum may be used as a
//     placeholder before final copy is available.In publishing and graphic
//     design, Lorem ipsum is a placeholder text commonly used to demonstrate
//     the visual form of a document or a typeface without relying on
//     meaningful content. Lorem ipsum may be used as a placeholder before
//     final copy is available.In publishing and graphic design, Lorem ipsum
//     is a placeholder text commonly used to demonstrate the visual form of
//     a document or a typeface without relying on meaningful content. Lorem
//     ipsum may be used as a placeholder before final copy is available.
//   </Animated.Text>
//   <Animated.Text>
//     In publishing and graphic design, Lorem ipsum is a placeholder text
//     commonly used to demonstrate the visual form of a document or a
//     typeface without relying on meaningful content. Lorem ipsum may be
//     used as a placeholder before final copy is available.In publishing and
//     graphic design, Lorem ipsum is a placeholder text commonly used to
//     demonstrate the visual form of a document or a typeface without
//     relying on meaningful content. Lorem ipsum may be used as a
//     placeholder before final copy is available.In publishing and graphic
//     design, Lorem ipsum is a placeholder text commonly used to demonstrate
//     the visual form of a document or a typeface without relying on
//     meaningful content. Lorem ipsum may be used as a placeholder before
//     final copy is available.In publishing and graphic design, Lorem ipsum
//     is a placeholder text commonly used to demonstrate the visual form of
//     a document or a typeface without relying on meaningful content. Lorem
//     ipsum may be used as a placeholder before final copy is available.
//   </Animated.Text>
//   <Animated.Text>
//     In publishing and graphic design, Lorem ipsum is a placeholder text
//     commonly used to demonstrate the visual form of a document or a
//     typeface without relying on meaningful content. Lorem ipsum may be
//     used as a placeholder before final copy is available.In publishing and
//     graphic design, Lorem ipsum is a placeholder text commonly used to
//     demonstrate the visual form of a document or a typeface without
//     relying on meaningful content. Lorem ipsum may be used as a
//     placeholder before final copy is available.In publishing and graphic
//     design, Lorem ipsum is a placeholder text commonly used to demonstrate
//     the visual form of a document or a typeface without relying on
//     meaningful content. Lorem ipsum may be used as a placeholder before
//     final copy is available.In publishing and graphic design, Lorem ipsum
//     is a placeholder text commonly used to demonstrate the visual form of
//     a document or a typeface without relying on meaningful content. Lorem
//     ipsum may be used as a placeholder before final copy is available.
//   </Animated.Text>
// </Animated.ScrollView>
// </View>
