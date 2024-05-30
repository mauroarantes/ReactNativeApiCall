/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [data, setData] = useState(undefined);

  const getApiData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }

  const actionOnRow = (item) => {
    console.log('Selected Item :',item);
  }

  useEffect( () => {
    getApiData()
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
      data={data}
      renderItem={({item}) => 
        <TouchableWithoutFeedback onPress={ () => actionOnRow(item)}>
          <View>
            <Text style={{fontSize: 30}}>
              {item.name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      }></FlatList>
    </SafeAreaView>
  );
}

export default App;
