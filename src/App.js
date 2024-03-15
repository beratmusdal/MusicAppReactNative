import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  View,
} from 'react-native';
import ProductCard from "./components/Card/ProductCard";
import product_data from './product_data.json';

function App () {
  return (
    <SafeAreaView style = {styles.main}>
      
      <View style={styles.header}>
      <Image style = {styles.logo_bm} source={require('./assets/logo.png')}></Image>
      </View>
      
      <TextInput style = {styles.search} placeholder="Ara..." >

      </TextInput>
      <FlatList
        data={product_data}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  
  search : {
    fontSize: 20,
  backgroundColor: '#62c4a9',
  margin: 10,
  borderRadius: 15,
  paddingLeft : 15,
  paddingVertical : 10


  },
  logo_bm : {
    width : 100,
    height : 100,
    resizeMode : 'contain',
    alignItems : 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 10,
    
  },
  main : {
    flex: 1,
    backgroundColor: "#018a78",
  }
});

export default App