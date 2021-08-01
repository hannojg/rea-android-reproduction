import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard, Button, Image } from 'react-native';
import Animated, { AnimatedLayout, SlideInRight, SlideOutRight } from 'react-native-reanimated';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimatedLayout style={styles.container}>
      <Pressable onPress={Keyboard.dismiss} style={styles.flex1}>
        <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
          <Text>REA AnimatedLayout android bug reproduction</Text>
          <Button title="Toggle" onPress={() => setIsVisible((prev) => !prev)} />
          {isVisible && <View><Image source={require("./assets/error_triangle.png")} /><Text>I won't get removed :(</Text></View>}
        </Animated.View>
      </Pressable>
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
