import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import {CameraIcon} from '../../assets/svgs';
import LottieView from 'lottie-react-native';
import AboutApp from './components/aboutApp';
import {API_KEY} from '@env';
type GreetingScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Greeting'
>;
const GreetingScreen = ({navigation}: GreetingScreenNavigationProp) => {
  console.log(API_KEY);
  const [isQuestionSelected, setIsQuestionSelected] = useState<boolean>(false);
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <View style={styles.backgroundShadow}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('PhotoList')}>
          <CameraIcon width={150} height={150} />
          <Text style={styles.text}>View photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.questionButton}
          onPress={() => setIsQuestionSelected(prevVal => !prevVal)}>
          <LottieView
            source={require('../../assets/animation/question.json')}
            style={styles.animation}
            autoPlay
            loop
          />
        </TouchableOpacity>
        {isQuestionSelected && (
          <AboutApp setWindowVisible={setIsQuestionSelected} />
        )}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
  },
  backgroundShadow: {
    height: '100%',
    width: '100%',
    backgroundColor: '#303030ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButton: {
    backgroundColor: '#52523d91',
    borderRadius: 75,
    height: 200,
    width: 200,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  animation: {
    height: 75,
    width: 75,
  },
  text: {
    fontSize: 18,
    color: '#bbbbbb',
  },
});
export default GreetingScreen;
