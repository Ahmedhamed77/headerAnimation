import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Animated, Image} from 'react-native';

export default function App() {
  //should be used instead of the if condition in onScroll,
  //with condition the js thread works so it makes the animation slow
  // but wit this even it will call the ui thread so it works faster
  const scrollingY = useRef(new Animated.Value(0)).current;
  // IMAGE
  const imageTranslateYAnimation = new Animated.Value(1);
  const imageTranslateXAnimation = new Animated.Value(1);
  const imageScaleAnimation = new Animated.Value(1);
  // BOX1
  const box1TranslateYAnimation = new Animated.Value(1);
  // BOX2
  const box2TranslateYAnimation = new Animated.Value(1);
  // TEXT
  const textTranslateYAnimation = new Animated.Value(1);
  const textScaleAnimation = new Animated.Value(1);
  // CONTAINER2
  const container2BgAnimation = new Animated.Value(0);

  // container3
  const container3TranslateYAnimation = new Animated.Value(1);
  const container3BorderRadiusAnimation = new Animated.Value(0);

  const container2Style = {
    backgroundColor: container2BgAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['lightgreen', 'white'],
    }),
  };

  const container3Style = {
    borderRadius: container3BorderRadiusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 0],
    }),
    transform: [
      {
        translateY: container3TranslateYAnimation,
      },
    ],
  };

  const imageStyle = {
    transform: [
      {
        translateY: imageTranslateYAnimation,
      },
      {
        translateX: imageTranslateXAnimation,
      },
      {
        scale: imageScaleAnimation,
      },
    ],
  };
  const textStyle = {
    transform: [
      {
        translateY: textTranslateYAnimation,
      },
      {
        scale: textScaleAnimation,
      },
    ],
  };

  const box1Style = {
    transform: [
      {
        translateY: box1TranslateYAnimation,
      },
    ],
  };
  const box2Style = {
    transform: [
      {
        translateY: box2TranslateYAnimation,
      },
    ],
  };

  const handlePress = () => {
    Animated.parallel([
      // IMAGE
      Animated.timing(imageTranslateYAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(imageTranslateXAnimation, {
        toValue: -40,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(imageScaleAnimation, {
        toValue: 0.3,
        duration: 400,
        useNativeDriver: true,
      }),
      // TEXT
      Animated.timing(textTranslateYAnimation, {
        toValue: -90,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(textScaleAnimation, {
        toValue: 0.5,
        duration: 400,
        useNativeDriver: true,
      }),
      // BOX1
      Animated.timing(box1TranslateYAnimation, {
        toValue: -90,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(box2TranslateYAnimation, {
        toValue: -90,
        duration: 400,
        useNativeDriver: true,
      }),
      // CONTAINER2
      Animated.timing(container2BgAnimation, {
        toValue: 2, // check it
        duration: 250,
        delay: 200,
        useNativeDriver: false, //Should be False, otherwise it will crash
      }),

      // CONTAINER3

      Animated.timing(container3TranslateYAnimation, {
        toValue: -120,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(container3BorderRadiusAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // ///// ///

  const handlePress2 = () => {
    Animated.parallel([
      // IMAGE
      Animated.timing(imageTranslateYAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(imageTranslateXAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(imageScaleAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      // TEXT
      Animated.timing(textTranslateYAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(textScaleAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      // BOX1
      Animated.timing(box1TranslateYAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(box2TranslateYAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      // CONTAINER2
      Animated.timing(container2BgAnimation, {
        toValue: 0, // check it
        duration: 250,
        delay: 200,
        useNativeDriver: false, //Should be False, otherwise it will crash
      }),

      // CONTAINER3

      Animated.timing(container3TranslateYAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(container3BorderRadiusAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <Animated.ScrollView
      style={styles.container}
      onScroll={event => {
        //should be replaced with the animated scrolling.
        const scrolling = event.nativeEvent.contentOffset.y;
        console.log(scrolling, 'scrolling');
        // setScrollY(scrolling);
        if (scrolling > 0.1) {
          handlePress();
        } else if (scrolling <= 0) {
          handlePress2();
        }
      }}>
      <Animated.View style={[styles.container2, container2Style]}>
        <Animated.Image
          source={require('./assets/dog.png')}
          style={[styles.image, imageStyle]}
        />
        <Animated.Text style={[styles.text, textStyle]}>Dog</Animated.Text>
        <Animated.Image
          source={require('./assets/card1.png')}
          style={[styles.card, box1Style]}
        />
        <Animated.Image
          source={require('./assets/card2.png')}
          style={[styles.card2, box2Style, {marginBottom: 50}]}
        />
      </Animated.View>
      <Animated.View style={[styles.container3, container3Style]}>
        <Text style={styles.text2}>Cat</Text>
        {/* <Button onPress={handlePress} title="Press" />
        <Button onPress={handlePress2} title="Press2" /> */}
        <Image source={require('./assets/card2.png')} style={[styles.card2]} />
        <Image source={require('./assets/card2.png')} style={[styles.card2]} />
        <View style={{margin: 1000}} />
      </Animated.View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  container2: {
    backgroundColor: 'lightgreen',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
  text: {
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 30,
  },
  card: {
    // width: '80%',
    // height: 160,

    alignSelf: 'center',
  },
  card2: {
    alignSelf: 'center',
    marginTop: 25,
  },
  container3: {
    backgroundColor: 'white',
    flex: 1,
    bottom: 20,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // position: 'absolute',
    // width: '100%',
    // marginTop: 530,
  },
  text2: {
    marginVertical: 20,
    marginHorizontal: 50,
  },
});
