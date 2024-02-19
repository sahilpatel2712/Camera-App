/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const Contacts = ({navigation}) => {
  const contacts = useSelector(state => state.contacts);
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactInfo', item)}
            style={styles.item}>
            <Image source={{uri: item.imageUri}} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: '2%',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    gap: 25,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius:100
  },
});
