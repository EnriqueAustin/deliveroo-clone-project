//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
const DishRow = ({id, name, description, price, image }) => {
    return (
        <TouchableOpacity>
            <View>
                <Text className='text-lg mb-1'>{name}</Text>
                <Text className='text-gray-400'>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

//make this component available to the app
export default DishRow;
