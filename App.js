import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import Animated, { AnimatedLayout, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { CustomInput } from "./CustomInput";

export default function App() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <AnimatedLayout style={styles.container}>
      <Pressable onPress={Keyboard.dismiss} style={styles.flex1}>
        <Animated.View entering={SlideInRight} exiting={SlideOutRight}>
          <Text>REA AnimatedLayout android bug reproduction</Text>
          <CustomInput placeholder="Enter something, then press outside" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} errorMsg={isFocused ? "Hello i am an error" : ""} />
          <CustomInput placeholder="Enter something, then press outside" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} errorMsg={isFocused ? "Hello i am an error" : ""} style={{
            marginTop: 15,
          }} />
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
