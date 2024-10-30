import React from "react";
import { View, StyleSheet, Image, Text, FlatList } from "react-native";

const generateItems = (numberOfItems, item) => {
    const items = [];
    for (let i = 0; i < numberOfItems; i++) {
      items.push({
        id: i, 
        title: item.title, 
        subtitle: item.subtitle,
        description: item.description,         
        img: item.img, 
      });
    }    
    return items;
};

const SpecialsCarousel = ({ title, itemElement, numberOfItems }) => {
    const data = generateItems(numberOfItems, itemElement);  
  
    return (
        <View style={styles.container}>
            <Text style={styles.primaryText}>{title}</Text>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <Image source={item.img} style={styles.itemImage} />
                    <View style={styles.overlay}>
                      <Text style={styles.itemDescription}>{item.description}</Text>
                      <Text style={styles.itemTitle}>{item.title}</Text>
                      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
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
    container: {
        marginTop: 8,
        paddingHorizontal: 16,
      },
    primaryText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },    
    item: {
        width: 255,
        height: 144,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 24,
        borderRadius: 8,        
        overflow: 'hidden',
        position: 'relative'
      },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'flex-start', 
        position: 'absolute', 
        top: 0,
        left: 16,
        right: 0,
        bottom: 16,              
    },
    itemImage: {
        width: '100%',        
        height: '100%',
        position: 'absolute'
    },
    itemDescription: {
        color: 'white',
        fontSize: 10
    },
    itemTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemSubtitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    },
});

export default SpecialsCarousel;