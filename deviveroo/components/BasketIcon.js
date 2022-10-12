//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import Currency from 'react-currency-formatter';

// create a component
const BasketIcon = () => {
    const navigation = useNavigation();

    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);


    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity 
                className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'
                onPress={() => navigation.navigate("Basket")}
            >
                <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
                    {items.length}
                </Text>
                <Text className='flex-1 text-white font-extrabold text-lg text-center'>
                    View Basket
                </Text>
                <Text className='text-lg text-white font-extrabold'>
                    <Currency quantity={Number(basketTotal)} currency='ZAR' />
                </Text>
            </TouchableOpacity>
        </View>
    );
};

//make this component available to the app
export default BasketIcon;
