import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../theme';
import { Grayscale } from 'react-native-color-matrix-image-filters';
type EmptyDataType = {
  text: string;
};
const ImageSrc = require('../../assets/butterflies.png');
const EmptyData: React.FC<EmptyDataType> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Grayscale>
        <Image source={ImageSrc} />
      </Grayscale>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default EmptyData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.fontFamilyBold,
    fontSize: 20,
    color: theme.colorPurple,
  },
});
