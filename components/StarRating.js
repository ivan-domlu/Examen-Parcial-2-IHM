import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const StarRating = ({ rate }) => {
    return (
        <View style={styles.container}>
            <Icon name="star" size={12} color="#81838F" />
            <Text style={styles.text}>{rate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',         
        alignItems: 'center'   
    },
    text: {
        color: '#81838F',
        fontSize: 12,
        marginLeft: 2
    }
});

export default StarRating