import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import StarRating from "./StarRating";

const generateItems = (numberOfItems, item) => {
    const items = [];
    for (let i = 0; i < numberOfItems; i++) {
      items.push({
        id: i, 
        name: item.name, 
        img: item.img, 
        description: item.description, 
        time: item.arrivalTime, 
      });
    }    
    return items;
  };

const CategoryCarousel = ({ title, itemElement, numberOfItems, width }) => {
    const data = generateItems(numberOfItems, itemElement);
    
    return (
        <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.primaryText}>{title}</Text>
            <Text style={styles.text}>See all</Text>
        </View>
        <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
            <View style={styles.item} width={width}>
                <Image source={item.img} style={styles.itemImage} />
                <View style={styles.itemContent} width={width}>
                    <View style={styles.itemBlock}>
                        <Text style={styles.itemTitle}>{item.name}</Text>
                        <StarRating rate={4.7}></StarRating>    
                    </View>    
                    <View style={styles.itemBlock}>
                        {item.description ? (
                            <Text style={styles.itemText}>{item.description}</Text>
                        ) : null}
                        <Text style={styles.itemTime}>{item.time}</Text>
                    </View>
                </View>
            </View>
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#C0BFC7',        
      },
    container: {
        marginVertical: 16,
      },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    primaryText: {
        fontSize: 18,
        fontWeight: '600',
    },
    item: {        
        marginLeft: 16,        
      },
    itemImage: {
        width: '100%',
        height: 100,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    itemContent: {
        paddingHorizontal: 8
    },
    itemBlock: {
        display: 'flex',
        flexDirection: 'row',         
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
    },
    itemText: {
        color: '#C0BFC7',
        fontSize: 12
    },
    itemTime: {
        color: '#81838F',
        fontSize: 12,
        fontWeight: '300'
    },
});

export default CategoryCarousel;