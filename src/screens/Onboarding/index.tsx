import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { useScrollHandler, interpolateColor } from 'react-native-redash';
import Slide from '../../components/Slide';
import Subslide from '../../components/Subslide';
import { useNavigation } from '@react-navigation/native';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  picture: {
    width: number;
    height: number;
    src: number;
  };
}

const { width, height } = Dimensions.get('window');

const Oboarding = () => {
  const navigation = useNavigation();

  const scroll = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.slider, { backgroundColor: backgroundColor }]}
      >
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} title={title} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        ></Animated.View>
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => {
            const last = index === slides.length - 1;
            return (
              <Subslide
                key={index}
                onPress={() => {
                  if (last) {
                    navigation.navigate('Welcome');
                  } else {
                    scroll.current
                      ?.getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                subtitle={subtitle}
                description={description}
                last={last}
              />
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: 0.61 * height,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
  },
});

export const slides: Slide[] = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      'Confused about your outfit? Don’t worry! Find the best outfit here!',
    color: '#BFEAF5',
    picture: {
      src: require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: {
      src: require('../../assets/2.png'),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      ' Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: {
      src: require('../../assets/3.png'),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    picture: {
      src: require('../../assets/4.png'),
      width: 1757,
      height: 2551,
    },
  },
];

export default Oboarding;
