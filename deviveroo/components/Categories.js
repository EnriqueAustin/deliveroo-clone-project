//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import sanityClient, { urlFor } from '../sanity';
import CategoriesCard from './CategoriesCard';

// create a component
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "category"]
        `).then(data => {
            setCategories(data);
        });
    }, []);

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

            {categories.map((category) => (
                <CategoriesCard 
                    key={category._id}
                    imgUrl={urlFor(category.image).width(200).url()} 
                    title={category.name}
                />
            ))}

        </ScrollView>
    );
};

//make this component available to the app
export default Categories;
