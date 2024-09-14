import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (pageId) => {
    navigation.navigate(pageId);
  };

  const handleCancelPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="搜索" />
        <TouchableOpacity onPress={handleCancelPress}>
          <Text style={styles.cancelText}>取消</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>热门推荐</Text>
      <View style={styles.recommendations}>
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text style={styles.cardTitle}>免费导诊</Text>
            <Text style={styles.cardDescription}>为你量身推荐专家</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text style={styles.cardTitle}>新人问医生 9.9 元起</Text>
            <Text style={styles.cardDescription}>立即咨询</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text style={styles.cardTitle}>直播课件</Text>
            <Text style={styles.cardDescription}>直播内容文字版 持续更新</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text style={styles.cardTitle}>视频问医生</Text>
            <Text style={styles.cardDescription}>面对面问诊 更安心</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>热门搜索</Text>
      <View style={styles.hotSearches}>
        <View style={styles.hotItem}>
          <Text style={styles.hotIcon}>🔥</Text>
          <Text style={styles.hotText}>痔疮</Text>
        </View>
        <View style={styles.hotItem}>
          <Text style={styles.hotIcon}>🔥</Text>
          <Text style={styles.hotText}>湿疹</Text>
        </View>
        <View style={styles.hotItem}>
          <Text style={styles.hotIcon}>🔥</Text>
          <Text style={styles.hotText}>甲状腺结节</Text>
        </View>
        <View style={styles.hotItem}>
          <Text style={styles.hotIcon}>🔥</Text>
          <Text style={styles.hotText}>荨麻疹</Text>
        </View>
        <View style={styles.hotItem}>
          <Text style={styles.hotIcon}>🔥</Text>
          <Text style={styles.hotText}>痛风</Text>
        </View>
        <View style={styles.hotItem}>
          <Text style={styles.hotIcon}>🔥</Text>
          <Text style={styles.hotText}>前列腺炎</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 24,
    padding: 8,
    paddingLeft: 16,
  },
  cancelText: {
    marginLeft: 8,
    color: '#007AFF',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  recommendations: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
  },
  hotSearches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hotItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  hotIcon: {
    marginRight: 4,
  },
  hotText: {
    fontSize: 14,
  },
});

export default SearchScreen;