import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

const Carousel = () => {
    return (
        <View style={styles.carousel}>
            <Image source={require('../assets/sushi.jpeg')} style={styles.carouselImage} />
            <Icon name="dots-three-horizontal" size={24} color="#6AC2B5" />
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        height: 210,
        marginVertical: 15,
        alignItems: 'center',
      },
    carouselImage: {
        height: 195,
        width: 337,
        borderRadius: 24,
    },
});

export default Carousel;