/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    id: 1,
    text: '1',
  },
  {
    id: 2,
    text: '2',
  },
  {
    id: 3,
    text: '3',
  },
  {
    id: 4,
    text: '4',
  },
  {
    id: 5,
    text: '5',
  },
  {
    id: 6,
    text: '6',
  },
  {
    id: 7,
    text: '7',
  },
  {
    id: 8,
    text: '8',
  },
  {
    id: 9,
    text: '9',
  },
  {
    id: 10,
    text: '*',
  },
  {
    id: 11,
    text: '0',
  },
  {
    id: 12,
    text: '#',
  },
];

const DialPad = () => {
  const [dialNumber, setNumber] = useState('');

  const handlePress = value => {
    setNumber(prev => prev + value);
  };
  const handleRemove = () => {
    setNumber(prev => prev.slice(0, prev.length - 1));
  };
  const renderButton = value => (
    <TouchableOpacity
      key={value}
      style={styles.button}
      onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        inputMode="numeric"
        editable={false}
        value={dialNumber}
        style={{
          ...styles.inputText,
        }}
      />

      <FlatList
        data={data}
        style={styles.flatList}
        numColumns={3}
        horizontal={false}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => renderButton(item.text)}
        keyExtractor={item => item.id}
      />
      <View style={styles.lastRow}>
        <Pressable>
          <Image
            source={require('../assets/images/call_button.png')}
            style={styles.LastRowButton}
          />
        </Pressable>
        <Pressable onPress={handleRemove}>
          <FontAwesome5
            name="backspace"
            color="#333"
            size={30}
            style={{...styles.LastRowButton, marginTop: 10}}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    height: '40%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: '3%',
    alignSelf: 'center',
  },
  button: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 8,
    verticalAlign: 'middle',
    height: 75,
    width: 75,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    opacity: 1,
  },
  buttonText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    height: '100%',
    width: '100%',
    textAlignVertical: 'center',
  },
  LastRowButton: {
    height: 60,
    width: 60,
    marginHorizontal: '6%',
  },

  lastRow: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'flex-end',
    marginBottom: '8%',
  },

  inputText: {
    marginHorizontal: '10%',
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    position: 'relative',
    marginTop: '41%',
    marginBottom: '3%',
  },
});

export default DialPad;
