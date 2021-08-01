import { StyleSheet } from "react-native";
import { Video } from "expo-av";
import React from "react";

const BACKGROUND_VIDEO = require("./assets/background.mp4");

export const VideoBackground = () => (
  <Video
    source={BACKGROUND_VIDEO}
    volume={0}
    isMuted={false}
    resizeMode="stretch"
    shouldPlay
    isLooping
    style={styles.video}
  />
);

const styles = StyleSheet.create({
  video: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
});
