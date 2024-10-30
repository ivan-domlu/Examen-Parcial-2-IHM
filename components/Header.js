import React from "react";
import { View, StyleSheet , Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({content}) => {
    return (
        <View style={styles.header}>
            <Icon name="place" size={24} />
            <Text Text style={styles.direction}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginTop: 16
      },
    direction: {
        marginLeft: 8,
        fontSize: 14,
    }
});

export default Header;