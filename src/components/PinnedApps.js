/* eslint-disable prettier/prettier */
import React, {useMemo} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {bottomApps} from '../modules/data';

const PinnedApps = ({navigation}) => {
  const pinnedApps = useMemo(() => bottomApps, []);
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={pinnedApps}
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={{alignSelf: 'center'}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate(item.path)}>
              <Image style={styles.image} source={item.uri} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default PinnedApps;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 25,
    height: 75,
    width: 75,
    borderRadius: 20,
    opacity: 1,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
