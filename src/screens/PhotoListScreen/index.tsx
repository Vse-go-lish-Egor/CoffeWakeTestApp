import {StyleSheet, View} from 'react-native';
import React from 'react';
import PhotosList from './components/photosList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
type PhotoListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'PhotoList'
>;
const PhotoListScreen = ({navigation}: PhotoListScreenNavigationProp) => {
  return (
    <View style={styles.container}>
      <PhotosList
        navigate={photoUrl => navigation.navigate('ViewFullPhoto', {photoUrl})}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff7c7',
    width: '100%',
    height: '100%',
  },
});
export default PhotoListScreen;
