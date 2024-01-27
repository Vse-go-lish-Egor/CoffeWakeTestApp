import {View, StyleSheet, Button} from 'react-native';
import React, {memo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';
import FastImage from 'react-native-fast-image';
type PhotoListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'ViewFullPhoto'
>;
const ViewFullPhotoScreen = ({
  navigation,
  route,
}: PhotoListScreenNavigationProp) => {
  const path = route.params.photoUrl;
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.photo}
        resizeMode="contain"
        source={{uri: path}}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    height: '100%',
  },
  photo: {
    borderRadius: 15,
    flex: 1,
  },
});
export default memo(ViewFullPhotoScreen);
