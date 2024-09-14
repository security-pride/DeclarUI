import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Button, Alert } from 'react-native';

const JewelryCategoryScreen = ({ navigation }) => {
  const handleRedirect = (pageId) => {
    // Assuming 'navigation' is being used for redirection
    navigation.navigate(pageId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>钱币 宝藏 依控漏</Text>
        <Text style={styles.guarantee}>真品保障 质量问题包退</Text>
      </View>

      <View style={styles.promotion}>
        <Text style={styles.newArrivals}>新品凹历 市价3折抢!</Text>
        <View style={styles.coinsContainer}>
          <CoinDisplayComponent price="¥25起" />
          <CoinDisplayComponent price="¥188起" />
        </View>
      </View>

      <ImageBackground
        source={require('../assets/snack-icon.png')}
        style={styles.banner}
      >
        <Text style={styles.bannerText}>热门纪念币 市场价75折起</Text>
      </ImageBackground>

      <View style={styles.ranking}>
        <Text style={styles.rankingTitle}>热度周榜</Text>
        <View style={styles.coinsContainer}>
          <CoinDisplayComponent price="¥260" change="+13.0%" label="TOP.1" />
          <CoinDisplayComponent price="¥549" change="-10.1%" label="TOP.2" />
          <CoinDisplayComponent price="¥318" change="+6.0%" label="TOP.3" />
        </View>
      </View>

      <View style={styles.filters}>
        <Text style={styles.filter}>爱藏评级</Text>
        <Text style={styles.filter}>保粹评级</Text>
        <Text style={styles.filter}>金盾评级</Text>
      </View>

      <View style={styles.sortButtons}>
        <Button title="发布时间" onPress={() => handleRedirect('Categories')} />
        <Button title="价格" onPress={() => handleRedirect('Categories')} />
        <Button title="类型" onPress={() => handleRedirect('Categories')} />
      </View>

      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.currencyNote}
      />
    </View>
  );
};

const CoinDisplayComponent = ({ price, change, label }) => (
  <View style={styles.coinDisplay}>
    <Image source={require('../assets/snack-icon.png')} style={styles.coinImage} />
    <Text style={styles.price}>{price}</Text>
    {change && <Text style={styles.change}>{change}</Text>}
    {label && <Text style={styles.topLabel}>{label}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  guarantee: {
    fontSize: 14,
    color: '#888',
  },
  promotion: {
    backgroundColor: '#fff',
    padding: 16,
  },
  newArrivals: {
    fontSize: 18,
    color: '#e91e63',
  },
  coinsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  coinDisplay: {
    alignItems: 'center',
  },
  coinImage: {
    width: 80,
    height: 80,
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  change: {
    fontSize: 14,
    color: '#e91e63',
  },
  topLabel: {
    fontSize: 14,
    color: '#e91e63',
    fontWeight: 'bold',
  },
  banner: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  ranking: {
    padding: 16,
    backgroundColor: '#fff',
  },
  rankingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  filter: {
    fontSize: 16,
    color: '#000',
  },
  sortButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  currencyNote: {
    width: '100%',
    height: 200,
  }
});

export default JewelryCategoryScreen;