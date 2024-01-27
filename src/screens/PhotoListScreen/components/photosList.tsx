import {
  View,
  Text,
  FlatList,
  RefreshControl,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {fetchPhotos} from '../../../store/thunk/getPhotos';
import {incrementPage, resetPhotos} from '../../../store/slices/photosSlice';
import FastImage from 'react-native-fast-image';
import {Photo} from '../../../types';

const screenWidth = Dimensions.get('screen').width;
type Prop = {
  navigate: (photoUrl: string) => void;
};
const PhotosList = ({navigate}: Prop) => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.photo.page);
  const isLoad = useAppSelector(state => state.photo.loadingStatus);
  const photos = useAppSelector(state => state.photo.results);
  const error = useAppSelector(state => state.photo.error);

  useEffect(() => {
    dispatch(fetchPhotos(page));
  }, [dispatch, page]);

  const photoItem = useCallback(
    ({item}: {item: Photo}) => {
      return (
        <TouchableOpacity
          onPress={() => navigate(item.urls.full)}
          style={styles.postContainer}
          key={item.id}>
          <FastImage
            source={{uri: item.urls.small}}
            style={styles.photoContainer}
          />
          <Text style={styles.text}>{item.user.name}</Text>
        </TouchableOpacity>
      );
    },
    [navigate],
  );

  const incrementPageFun = useCallback(() => {
    dispatch(incrementPage());
  }, [dispatch]);

  const refresh = useCallback(() => {
    dispatch(resetPhotos());
    dispatch(fetchPhotos(page));
  }, [dispatch, page]);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.text}>Ooh... something bad happened</Text>
      ) : (
        <FlatList
          numColumns={3}
          keyExtractor={item => `${item.id}${item.user.name}`}
          refreshControl={
            <RefreshControl
              refreshing={isLoad === 'loading'}
              onRefresh={refresh}
            />
          }
          style={styles.list}
          data={photos}
          renderItem={photoItem}
          onEndReached={incrementPageFun}
          onEndReachedThreshold={0}
          ListFooterComponent={<View style={{height: 1}} />}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  photoContainer: {
    width: screenWidth / 4,
    height: screenWidth / 4,
    margin: 5,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#ffff',
    borderRadius: 15,
    maxWidth: screenWidth / 3,
  },
  text: {
    alignSelf: 'center',
    width: screenWidth / 4,
    color: 'black',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
});
export default PhotosList;
