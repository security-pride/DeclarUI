import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
        <TextInput
          placeholder="搜索任何物品"
          style={styles.searchInput}
        />
        <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />
      </View>

      <View style={styles.tabs}>
        <Text style={styles.tabActive}>最近</Text>
        <Text style={styles.tab}>已保存</Text>
      </View>

      <View style={styles.emptyState}>
        <Image source={require('../assets/snack-icon.png')} style={styles.magnifyingGlass} />
        <Text style={styles.emptyTitle}>搜索 eBay</Text>
        <Text style={styles.emptyDescription}>发现下一件您最喜爱的物品。</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>主页</Text>
        </TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Text style={styles.navLabel}>我的 eBay</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.navIconActive} />
        <Text style={styles.navLabelActive}>搜索</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Text style={styles.navLabel}>通知</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Text style={styles.navLabel}>出售物品</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    margin: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  cameraIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  tabActive: {
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 2,
    borderColor: '#000',
    paddingBottom: 5,
    marginRight: 15,
  },
  tab: {
    fontSize: 16,
    color: '#C0C0C0',
  },
  emptyState: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  magnifyingGlass: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  emptyDescription: {
    fontSize: 14,
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
    padding: 10,
  },
  navIcon: {
    width: 25,
    height: 25,
  },
  navIconActive: {
    width: 25,
    height: 25,
    tintColor: '#0000FF',
  },
  navLabel: {
    fontSize: 10,
    color: '#000',
  },
  navLabelActive: {
    fontSize: 10,
    color: '#0000FF',
  },
});

export default SearchScreen;