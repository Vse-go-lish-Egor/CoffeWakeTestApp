import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Cross} from '../../../assets/svgs';
type Props = {
  setWindowVisible: (value: boolean) => void;
};
const AboutApp = ({setWindowVisible}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.crossContainer}>
        <TouchableOpacity onPress={() => setWindowVisible(false)}>
          <Cross width={30} height={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        This is just a test assignment to test my skills. What else can I say?
        This is a button for the curious. I could have written an anecdote here,
        but now I can't remember 😊
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    left: 20,
    right: 20,
    bottom: 20,
    top: 20,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#fff0dc',
  },
  crossContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  text: {
    marginTop: 5,
    color: '#353531',
    fontSize: 16,
  },
});
export default AboutApp;
