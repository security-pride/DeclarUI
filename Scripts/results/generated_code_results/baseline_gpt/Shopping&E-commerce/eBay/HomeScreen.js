import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const recentItems = [
  { id: '1', name: 'Ottogi Jin Ramen Mild Noodles (Pack of 20)', price: 'GBP 22.99', image: require('../assets/snack-icon.png') },
  { id: '2', name: 'Spiderman Push Pop for it Bubble Fidget T...', price: 'GBP 4.10', image: require('../assets/snack-icon.png') },
  { id: '3', name: 'LEISURE FOLDIN...', price: 'GBP 19.99', image: require('../assets/snack-icon.png') },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
          <View style={styles.searchSection}>
            <Icon name="search" size={20} color="#888" />
            <TextInput style={styles.input} placeholder="搜索任何物品" />
            <Icon name="camera" size={20} color="#888" />
          </View>
          <Icon name="shopping-cart" size={25} color="#000" style={styles.cartIcon} />
        </View>
        
        <View style={styles.categorySection}>
          <TouchableOpacity style={styles.categoryButton}>
            <Icon name="heart" size={20} color="#000" />
            <Text>已保存</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Icon name="tag" size={20} color="#000" />
            <Text>时尚</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Icon name="th" size={20} color="#000" />
            <Text>探索（全新！）</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.promoSection}>
          <Text style={styles.promoTitle}>Join the party with 15% off</Text>
          <Text style={styles.promoDesc}>Celebrate eBay UK with big deals on brands from selected sellers.</Text>
          <TouchableOpacity style={styles.promoButton}>
            <Text style={styles.promoButtonText}>Use code SIZZLE15</Text>
          </TouchableOpacity>
          <Text style={styles.promoFooter}>Ends 21 July. Min spend £9.99. Max £75 off. T&Cs.</Text>
        </View>
        
        <View style={styles.recentSection}>
          <View style={styles.recentHeader}>
            <Text style={styles.recentTitle}>您最近浏览的物品</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>浏览全部</Text>
            </TouchableOpacity>
          </View>
          <FlatList 
            horizontal
            data={recentItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            )}
            style={styles.itemList}
          />
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={25} color="#000" />
          <Text>主页</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="user" size={25} color="#000" />
          <Text>我的 eBay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="search" size={25} color="#000" />
          <Text>搜索</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="bell" size={25} color="#000" />
          <Text>通知</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="tags" size={25} color="#000" />
          <Text>出售物品</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 30,
    alignSelf: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  cartIcon: {
    position: 'absolute',
    right: 15,
    top: 20,
  },
  categorySection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  categoryButton: {
    alignItems: 'center',
  },
  promoSection: {
    backgroundColor: '#FFCC00',
    padding: 15,
    alignItems: 'center',
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  promoDesc: {
    textAlign: 'center',
    marginTop: 5,
  },
  promoButton: {
    backgroundColor: '#563C00',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  promoButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  promoFooter: {
    marginTop: 10,
  },
  recentSection: {
    padding: 15,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewAllText: {
    color: '#007AFF',
  },
  itemList: {
    marginTop: 15,
  },
  item: {
    marginRight: 15,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  itemName: {
    marginTop: 10,
    fontSize: 12,
    color: '#333',
  },
  itemPrice: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default HomeScreen;