//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create a component
const ResturantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    return (
        <View>
            <Text>ResturantCard</Text>
        </View>
    );
};

//make this component available to the app
export default ResturantCard;
