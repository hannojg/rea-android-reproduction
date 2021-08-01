import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard, Button, Image } from 'react-native';
import Animated, { AnimatedLayout, SlideInRight, SlideOutRight } from 'react-native-reanimated';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimatedLayout style={styles.container}>
      <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
        <Text>REA AnimatedLayout android bug reproduction</Text>
        <Button title="Toggle" onPress={() => setIsVisible((prev) => !prev)} />
        {isVisible && (<View>
          <Text>I am the first view.</Text>
          <Text>I am the second, and I won't get removed :(</Text>
        </View>)}
      </Animated.View>
    </AnimatedLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 10,
  },
  flex1: {
    flex: 1,
  }
});
