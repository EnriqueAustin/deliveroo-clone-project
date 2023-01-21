//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from "react-native-progress";


// create a component
const DeliveryScreen = () => {
    const navigation = useNavigation();

    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <XCircleIcon color='white' size={30} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>Order Help</Text>
                </View>

                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                    <View className="flex-row justify-between">
                        <View>
                            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                            <Text className='text-4xl font-bold'>45-55 Minutes</Text>
                        </View>
                        <Image 
                            source={{
                                uri: "https://links.papareact.com/fls"
                            }}
                            className="h-20 w-20"
                        />
                    </View>

                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
                </View>
            </SafeAreaView>
        </View>
    );
};

//make this component available to the app
export default DeliveryScreen;
