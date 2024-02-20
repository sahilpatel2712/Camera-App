/* eslint-disable prettier/prettier */
/* eslint-disable no-eval */
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Calculator = () => {
  const data = [
    {
      id: 1,
      text: '+/−',
      color: '#fff',
      handlePress: () => handleChangeSign('+/-'),
    },
    {
      id: 2,
      text: '0',
      color: '#C7C8CC',
      handlePress: () => handleInput('0'),
    },
    {
      id: 3,
      text: '.',
      color: '#fff',
      handlePress: () => handleInput('.'),
    },
    {
      id: 4,
      text: '=',
      color: '#79C525',
      handlePress: () => handleEqual(),
    },
    {
      id: 5,
      text: '1',
      color: '#C7C8CC',
      handlePress: () => handleInput('1'),
    },
    {
      id: 6,
      text: '2',
      color: '#C7C8CC',
      handlePress: () => handleInput('2'),
    },
    {
      id: 7,
      text: '3',
      color: '#C7C8CC',
      handlePress: () => handleInput('3'),
    },
    {
      id: 8,
      text: '+',
      color: '#FE7A36',
      handlePress: () => handleOperatorInput('+'),
    },
    {
      id: 9,
      text: '4',
      color: '#C7C8CC',
      handlePress: () => handleInput('4'),
    },
    {
      id: 10,
      text: '5',
      color: '#C7C8CC',
      handlePress: () => handleInput('5'),
    },
    {
      id: 11,
      text: '6',
      color: '#C7C8CC',
      handlePress: () => handleInput('6'),
    },
    {
      id: 12,
      text: '−',
      color: '#FE7A36',
      handlePress: () => handleOperatorInput('-'),
    },
    {
      id: 13,
      text: '7',
      color: '#C7C8CC',
      handlePress: () => handleInput('7'),
    },
    {
      id: 14,
      text: '8',
      color: '#C7C8CC',
      handlePress: () => handleInput('8'),
    },
    {
      id: 15,
      text: '9',
      color: '#C7C8CC',
      handlePress: () => handleInput('9'),
    },
    {
      id: 16,
      text: 'X',
      color: '#FE7A36',
      handlePress: () => handleOperatorInput('*'),
    },
    {
      id: 17,
      text: 'C',
      color: '#B80000',
      handlePress: () => handleClear(),
    },
    {
      id: 18,
      text: '%',
      color: '#FE7A36',
      handlePress: () => handleOperatorInput('%'),
    },
    {
      id: 19,
      text: <FontAwesome5 name="backspace" color="#333" size={20} />,
      color: '#B4B4B8',
      handlePress: () => handleRemove(),
    },
    {
      id: 20,
      text: '/',
      color: '#FE7A36',
      handlePress: () => handleOperatorInput('/'),
    },
  ];
  const [currentValue, setCurrent] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isEnterOperator, setOperator] = useState(false);
  const [isEqualCheck, setEqual] = useState(false);

  const handleChangeSign = () => {
    if (!'+-'.includes(inputValue[0])) {
      const newValue = '-' + inputValue;
      setInputValue(newValue);
    } else {
      if (inputValue[0] === '+') {
        const newValue = '-' + inputValue.slice(1, inputValue.length);
        setInputValue(newValue);
      } else {
        const newValue = '+' + inputValue.slice(1, inputValue.length);
        setInputValue(newValue);
      }
    }
  };
  const handleEqual = () => {
    if (!'+-*/%.'.includes(inputValue[inputValue.length - 1])) {
      if (inputValue.includes('%')) {
        let inputParts = inputValue.split('%');
        let result1 = eval(inputParts[0]);
        let result2 = eval(inputParts[1]);
        let result = ((result1 * result2) / 100).toFixed(2);

        setCurrent(result.toString());
      } else {
        let result = eval(inputValue);
        setCurrent(result.toString());
      }
      setEqual(true);
      setOperator(true);
    }
  };
  const handleClear = () => {
    setCurrent('');
    setInputValue('');
  };
  const handleOperatorInput = value => {
    if (isEqualCheck) {
      setInputValue(currentValue);
      setCurrent('');
      setEqual(false);
    }
    if (isEnterOperator) {
      setInputValue(prev => prev + value);
    }
    setOperator(false);
  };
  const handleInput = value => {
    if (isEqualCheck) {
      handleClear();
      setEqual(false);
    }

    setInputValue(prev => prev + value);
    setOperator(true);
  };

  const handleRemove = () => {
    setInputValue(prev => prev.slice(0, prev.length - 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputField}>
        <Text style={{...styles.displayText, fontSize: 25}}>{inputValue}</Text>
        <Text style={{...styles.displayText, fontSize: 30}}>
          {currentValue}
        </Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={data}
        numColumns={4}
        inverted={true}
        horizontal={false}
        columnWrapperStyle={{alignSelf: 'center'}}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={item.handlePress}
            style={{...styles.item, backgroundColor: item.color}}>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    flex: 1,
  },
  flatList: {
    height: '70%',
    borderBottomColor: '#607274',
    borderBottomWidth: 1,
    marginBottom: '3%',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    verticalAlign: 'middle',
    height: 75,
    width: 75,
    borderRadius: 20,
    opacity: 1,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    height: '100%',
    width: '100%',
    textAlignVertical: 'center',
  },
  inputField: {
    backgroundColor: 'white',
    marginTop: '5%',
    height: '28%',
    width: '95%',
    alignSelf: 'center',
    marginBottom: '5%',
    borderRadius: 20,
    padding: '7%',
  },
  displayText: {
    textAlign: 'right',
    color: '#000',
    fontWeight: 'bold',
    marginVertical: '5%',
  },
});
