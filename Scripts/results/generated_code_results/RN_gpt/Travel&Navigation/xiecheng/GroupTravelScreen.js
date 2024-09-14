import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const GroupTravelScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.headerImage} />
      <Text style={styles.promoTitle}>游万里山河 黄一帆月</Text>

      <View style={styles.tabContainer}>
        <Text style={styles.tabText}>国内跟团游</Text>
        <Text style={styles.tabText}>国际跟团游</Text>
        <Text style={styles.sublabel}>私家团, 行程可调 / 自由行, 套餐便宜</Text>
      </View>

      <View style={styles.filters}>
        <Text style={styles.departure}>烟台出发</Text>
        <Text style={styles.adults}>2成年人 0儿童</Text>
        <Button title="查询" onPress={() => navigation.navigate('GroupTravelSearchResult')} />
      </View>

      <View style={styles.locationButtons}>
        <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('GroupTravelSearchResult')}>
          <Icon name="clock-o" size={20} color="#000" />
          <Text>烟台</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('GroupTravelSearchResult')}>
          <Icon name="fire" size={20} color="#ff4500" />
          <Text>西安</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('GroupTravelSearchResult')}>
          <Icon name="fire" size={20} color="#ff4500" />
          <Text>大连</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('GroupTravelSearchResult')}>
          <Text>上海</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('GroupTravelSearchResult')}>
          <Text>成都</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.locationButton} onPress={() => navigation.navigate('GroupTravelSearchResult')}>
          <Text>南京</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <Icon name="home" size={30} color="#000" />
        <Icon name="map" size={30} color="#000" />
        <Icon name="heart" size={30} color="#000" />
        <Icon name="history" size={30} color="#000" />
        <Icon name="list-alt" size={30} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
  promoTitle: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#ff4500',
  },
  sublabel: {
    fontSize: 14,
    color: '#999',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  departure: {
    fontSize: 16,
    color: '#000',
  },
  adults: {
    fontSize: 16,
    color: '#000',
  },
  locationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  locationButton: {
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default GroupTravelScreen;