/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    text: 'App',
  },
  {
    id: 2,
    text: 'App',
  },
  {
    id: 3,
    text: 'App',
  },
  {
    id: 4,
    text: 'App',
  },
  {
    id: 5,
    text: 'App',
  },
  {
    id: 6,
    text: 'App',
  },
  {
    id: 7,
    text: 'App',
  },
  {
    id: 8,
    text: 'App',
  },
  {
    id: 9,
    text: 'App',
  },
  {
    id: 10,
    text: 'App',
  },
  {
    id: 11,
    text: 'App',
  },
  {
    id: 12,
    text: 'App',
  },
  {
    id: 13,
    text: 'App',
  },
  {
    id: 14,
    text: 'App',
  },
  {
    id: 15,
    text: 'App',
  },

];

const AppsGrid = () => {
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={data}
          numColumns={3}
          inverted={true}
          horizontal={false}
          columnWrapperStyle={{alignSelf: 'center'}}
          renderItem={({item}) => (
            <TouchableOpacity style={[styles.item, {backgroundColor: '#fff'}]}>
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default AppsGrid;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 20,
    verticalAlign: 'middle',
    height: 75,
    width: 75,
    borderRadius: 20,
    opacity: 1,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    textAlignVertical: 'center',
  },
});
