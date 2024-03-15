import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create ({
container : {
    flex : 1,
    backgroundColor: '#62c4a9',
    margin: 10,
    padding : 10,
    borderRadius: 10,
    justifyContent: 'center',
    maxWidth : 200,
},
image : {
    resizeMode : 'stretch',
    marginVertical: 3,
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    backgroundColor: 'transparent'
},
title : {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18

},
price : {
    fontSize: 15,
    color : 'grey',
    fontWeight: 'bold',
},

stock_check : {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
},
inner_container : {
    
    
}


});