import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Booking.com</Text>
        <Pressable onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-outline" size={24} color="#fff" />
        </Pressable>
      </View>
      
      <View style={styles.searchContainer}>
        <Pressable style={styles.searchRow}>
          <Icon name="search-outline" size={24} color="black" />
          <TextInput placeholder="周围地区" style={styles.textInput} />
        </Pressable>
        <View style={styles.searchRow}>
          <Icon name="calendar-outline" size={24} color="black" />
          <Text>7月18日 周四 - 7月19日 周五</Text>
        </View>
        <View style={styles.searchRow}>
          <Icon name="people-outline" size={24} color="black" />
          <Text>1间房 · 2位成人 · 无儿童</Text>
        </View>
        <Button title="搜索" style={styles.searchButton} onPress={() => navigation.navigate('Surroundings')} />
      </View>

      <Text style={styles.title}>临时起意?</Text>

      <View style={styles.hotelList}>
        <View style={styles.hotelCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.hotelImage} />
          <Text onPress={() => navigation.navigate('Details')}>AC Hotel by Marriott Manchester</Text>
          <Text>8,540公里</Text>
          <Text>£160</Text>
        </View>
        
        <View style={styles.hotelCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.hotelImage} />
          <Text onPress={() => navigation.navigate('Details')}>Maldron Hotel Manchester</Text>
          <Text>8,541公里</Text>
          <Text>£150</Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={24} color="black" />
          <Text>搜索</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Saved')}>
          <Icon name="heart-outline" size={24} color="black" />
          <Text>已保存</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Orders')}>
          <Icon name="briefcase-outline" size={24} color="black" />
          <Text>订单</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Account')}>
          <Icon name="person-outline" size={24} color="black" />
          <Text>账户资料</Text>
        </Pressable>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3263eb',
    padding: 16,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderColor: '#ffd700',
    borderWidth: 1,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
  },
  searchButton: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  hotelList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  hotelCard: {
    alignItems: 'center',
    width: '45%',
  },
  hotelImage: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    paddingVertical: 12,
    width: '100%',
  },
});

export default SearchScreen;