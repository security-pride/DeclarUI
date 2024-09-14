import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ItemScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.headerText}>物品</Text>
        <TouchableOpacity>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.productImage} />
        <Text style={styles.imageLabel}>1/1</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Ottogi Jin Ramen Mild Noodles (Pack of 20)</Text>
        <View style={styles.sellerContainer}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.logo} />
          <View>
            <Text style={styles.sellerText}>Wa Na Hong Oriental Supermarket (25024)</Text>
            <Text style={styles.rating}>99.3% 好评率</Text>
          </View>
          <Button title="聊天" onPress={() => {}} />
        </View>
        <Text style={styles.price}>每件 £22.99</Text>
        <Text style={styles.shipping}>Free 3 day postage</Text>
        <Text style={styles.delivery}>预计在7月19日，星期五至7月20日，星期六之间送达</Text>
        <View style={styles.favoriteContainer}>
          <Text style={styles.favoriteCount}>65</Text>
          <TouchableOpacity>
            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Button title="主页" onPress={() => navigation.navigate('Home')} />
        <Button title="我的 eBay" onPress={() => {}} />
        <Button title="搜索" onPress={() => {}} />
        <Button title="通知" onPress={() => {}} />
        <Button title="出售物品" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  imageLabel: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 5,
    borderRadius: 5,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sellerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  sellerText: {
    fontSize: 16,
  },
  rating: {
    color: 'gray',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  shipping: {
    color: 'green',
    marginTop: 5,
  },
  delivery: {
    color: 'gray',
    marginTop: 5,
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  favoriteCount: {
    fontSize: 16,
    marginRight: 5,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default ItemScreen;