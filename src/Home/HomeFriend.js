import React from 'react';
import { View, useWindowDimensions , Image, Text, StyleSheet, ScrollView } from 'react-native';
import PostHomeFriend from '../Components/PostHomeFriend';

const HomeFriend = () =>{
    return(
        <ScrollView >
            <PostHomeFriend />
            <PostHomeFriend />
            <PostHomeFriend />
        </ScrollView>
    )
}

export default HomeFriend;


