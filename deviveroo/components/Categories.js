//import liraries
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoriesCard from './CategoriesCard';

// create a component
const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* CategoryCard */}
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing-1" />
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing-2" />
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing-3" />
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing-4" />
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing-5" />
            <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Testing-6" />

        </ScrollView>
    );
};

//make this component available to the app
export default Categories;
