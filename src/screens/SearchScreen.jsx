import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { colors, sizes } from '../theme';
import { SearchBar, Spinner, ImagesList } from '../components';
import { searchGifs } from '../store';

export const IMAGES = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/274px-Rotating_earth_%28large%29.gif',
  'https://techcrunch.com/wp-content/uploads/2014/06/surprised-andy.gif',
  'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif',
  'https://static.wixstatic.com/media/4cbe8d_f1ed2800a49649848102c68fc5a66e53~mv2.gif',
  'https://media3.giphy.com/media/HP7mtfNa1E4CEqNbNL/200w.gif?cid=82a1493bh8gopeq40bvhulqsqgjkmark4qish6yecqnzqmg8&rid=200w.gif&ct=g',
  'https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekA-51uIZZ5nLx8SvH37ar5GVFIVcoz0q7w&usqp=CAU',
  'https://media2.giphy.com/media/3oEjI4sFlp73fvEYgw/giphy.gif',
  'https://acegif.com/wp-content/uploads/2021/04/bugs-bunny-m.gif',
  'https://1gai.ru/uploads/posts/2019-11/1575050825_6.gif',
  'https://cdn-images-1.medium.com/max/640/1*31sJxfQUDuW6r__raBe60A.gif',
  'https://media.giphy.com/media/26AHBjXZuoPDoTy3m/giphy.gif',
];

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const {
    searchResults, isFulfilled, isPending, isRejected,
  } = useSelector((state) => state);

  console.log(searchResults);

  useEffect(() => {
    dispatch(searchGifs());
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <SearchBar value={searchValue} setTextValue={setSearchValue} />
      {isPending ? (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      )
        : (
          <View style={styles.imagesContainer}>
            <ImagesList images={IMAGES} keyPrefix="search" withHeaderSpacing />
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: sizes.sideSpacing,
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 8,
    marginRight: sizes.sideSpacing,
    marginBottom: sizes.sideSpacing,
  },
  imagesContainer: {
    marginTop: -16,
    flex: 1,
  },
});

export { SearchScreen };
