import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Carousel from './components/Carousel';
import CategoryCarousel from './components/CategoryCarousel';
import SpecialsCarousel from './components/SpecialsCarousel';


const restaurants = { name: 'Groceries', 
                      img: require('./assets/restaurants.jpeg'), 
                      description: 'burger, dessert', 
                      arrivalTime: '15-20 min' };

const groceries = { name: 'Groceries', 
                    img: require('./assets/grocery.jpeg'), 
                    arrivalTime: '15-20 min' };
  

const dataWine = { title: 'winestory', 
                   subtitle: 'Special Offer',
                   description: 'GROCERY',                   
                   img: require('./assets/special.png'),
};  

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header content="9185 Mayflower Drive Atlanta"/>
      <Carousel/>
      <CategoryCarousel title="All Restaurants" itemElement={restaurants} numberOfItems={3} width={170}/>
      <CategoryCarousel title="All Grocerise" itemElement={groceries} numberOfItems={4} width={124}/>
      <SpecialsCarousel title="Specials" itemElement={dataWine} numberOfItems={3}/>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },   
});
