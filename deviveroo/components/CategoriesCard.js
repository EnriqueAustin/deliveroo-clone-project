//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// create a component
const CategoriesCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image 
                source={{
                    uri: imgUrl
                }}
                className='h-20 w-20 rounded'
            />
            <Text
                className='absolute bottom-1 left-1 text-white font-bold'
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

//make this component available to the app
export default CategoriesCard;
