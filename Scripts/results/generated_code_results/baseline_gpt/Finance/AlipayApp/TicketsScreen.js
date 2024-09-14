import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TicketsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>淘票票大麦</Text>
        <View style={styles.searchSection}>
          <Text style={styles.location}>烟台</Text>
          <Icon name="arrow-forward" size={20} color="#fff" />
          <TextInput
            style={styles.input}
            placeholderTextColor="#999"
            placeholder="三周年"
          />
          <Icon name="search" size={24} color="#fff" />
        </View>
        <Icon name="more-vert" size={24} color="#fff" />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.banner}>
          <Image 
            source={require('../assets/snack-icon.png')} 
            style={styles.bannerImage} 
          />
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinText}>立即加入</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categories}>
          {['电影/影院', '脱口秀', '展览休闲', '剧场演出', '音乐现场'].map((category, index) => (
            <View key={index} style={styles.category}>
              <Image 
                source={require('../assets/snack-icon.png')} 
                style={styles.categoryIcon} 
              />
              <Text>{category}</Text>
            </View>
          ))}
        </View>

        <View style={styles.movieSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>热映影片</Text>
            <Text style={styles.sectionAll}>全部</Text>
          </View>
          <ScrollView horizontal>
            {[0, 1, 2, 3, 4].map((item) => (
              <View key={item} style={styles.movieCard}>
                <Image 
                  source={require('../assets/snack-icon.png')} 
                  style={styles.movieImage} 
                />
                <Text style={styles.movieRating}>评分 9.{item}</Text>
                <Text style={styles.movieTitle}>电影名 {item}</Text>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buyText}>购票</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Icon name="home" size={28} color="#ff4081" />
        <Icon name="favorite" size={28} color="#ccc" />
        <Icon name="person" size={28} color="#ccc" />
        <Icon name="confirmation-number" size={28} color="#ccc" />
        <Icon name="person-outline" size={28} color="#ccc" />
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
    backgroundColor: '#0080ff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  location: {
    color: '#fff',
    marginRight: 5,
  },
  input: {
    flex: 1,
    padding: 0,
    marginLeft: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  banner: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '90%',
    height: '100%',
    resizeMode: 'cover',
  },
  joinButton: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#ff4081',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  joinText: {
    color: '#fff',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  movieSection: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  sectionAll: {
    fontSize: 14,
    color: '#aaa',
  },
  movieCard: {
    width: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  movieImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  movieRating: {
    fontSize: 12,
    color: '#333',
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyButton: {
    marginTop: 5,
    backgroundColor: '#ff4081',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buyText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default TicketsScreen;