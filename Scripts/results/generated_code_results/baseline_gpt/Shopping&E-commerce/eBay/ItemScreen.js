import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ItemScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="chevron-back" size={30} />
        <Text style={styles.headerTitle}>商品</Text>
        <View style={styles.headerIcons}>
          <Icon name="share-social-outline" size={24} style={styles.icon} />
          <Icon name="cart-outline" size={24} style={styles.icon} />
          <Icon name="ellipsis-horizontal" size={24} style={styles.icon} />
        </View>
      </View>
      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <View style={styles.likeContainer}>
          <Text style={styles.likeText}>65</Text>
          <Icon name="heart-outline" size={20} color="blue" />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Ottogi Jin Ramen Mild Noodles (Pack of 20)</Text>

        <View style={styles.storeContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.storeImage} />
          <View style={styles.storeDetails}>
            <Text style={styles.storeName}>Wa Na Hong Oriental Supermarket (25024)</Text>
            <Text style={styles.storeRating}>99.3% 好评率</Text>
          </View>
        </View>

        <Text style={styles.price}>每件 £22.99</Text>
        <Text style={styles.postage}>Free 3 day postage</Text>
        <Text style={styles.delivery}>预计在7月19日，星期五至7月20日，星期六之间送达</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  imageContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  likeText: {
    marginRight: 5,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  storeImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  storeDetails: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeRating: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postage: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  delivery: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ItemScreen;