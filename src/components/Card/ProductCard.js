import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './ProductCard.style'

const product = [
    {"id": 0,
    "title": "Xiaomi Mi True Wireless Earbuds",
    "imgURL": require('./assets/xiaomi_mi_true_wireless_earbuds.jpg'),
    "price": "₺134,77",
    "inStock": true

    },

];
const ProductCard = ({product}) => {

    const stokDurumu = product.inStock ? product.inStock : 'Stok Yok';
    return (
        <View style = {styles.container} >
            <TouchableOpacity>
            <Image style = {styles.image} source={{uri: product.imgURL}}></Image>
            <View style = {styles.inner_container}>
                <Text style = {styles.title} >{product.title}</Text>
                <Text style = {styles.price}>{product.price}</Text>
                <Text style = {styles.stock_check}>{stokDurumu}</Text>
               
            
            </View>
            </TouchableOpacity>
        </View>
        

    );};

export default ProductCard;