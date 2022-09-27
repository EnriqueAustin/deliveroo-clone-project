//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

// create a component
const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    useEffect(() => {
        sanityClient.fetch(
            `
                *[_type == "featured"] {
                    ...,
                restaurants[]->{
                    ...,
                    dishes[]->
                }
                }
            `
        ).then(data => {
            setFeaturedCategories(data);
        });
    }, []);

    console.log(featuredCategories);

    return (
        <SafeAreaView className='bg-white flex-col'>
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2' >
                <Image 
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1' >
                    <Text className='font-bold text-gray-400 text-xs'>
                        Deliver Now!
                    </Text>
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' className='pt-5' />
                    </Text>
                </View>

                <UserIcon size={35} color='#00CCBB' />
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                    <View className='flex-row space-x-2 flex-1 bg-gray-200 p-2'>
                        <MagnifyingGlassIcon color='gray' size={20} />
                        <TextInput 
                            placeholder='Resturants and cuisines' 
                            keyboardType='default'
                        />
                    </View>

                    <AdjustmentsHorizontalIcon color='#00CCBB' />
            </View>

            {/* Body */}
            <ScrollView className='bg-gray-100 pb-20'>

                {/* Categories */}
                <Categories />

                {/* Featured */}
                <FeaturedRow 
                    id='1'
                    title='Featured'
                    description='Paid placements from our partners'
                />

                {/* Tasty Discount */}
                <FeaturedRow 
                    id='2'
                    title='Tasty Discounts'
                    description='Paid placements from our partners'
                />

                {/* Offers near you */}
                <FeaturedRow 
                    id='3'
                    title='Offers near you!'
                    description='Paid placements from our partners'
                />
                <View className="m-16" />
            </ScrollView>
        </SafeAreaView>
    );
};

//make this component available to the app
export default HomeScreen;
