import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#999" />
        <TextInput placeholder="搜索" style={styles.input} underlineColorAndroid="transparent" />
        <Text style={styles.cancelText}>取消</Text>
      </View>

      {/* Popular Recommendations */}
      <Text style={styles.sectionTitle}>热门推荐</Text>
      <View style={styles.recommendationsContainer}>
        <View style={styles.recommendationBox}>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <View>
            <Text style={styles.recommendationTitle}>免费导诊</Text>
            <Text style={styles.recommendationSubtitle}>为你量身推荐专家</Text>
          </View>
        </View>
        <View style={styles.recommendationBox}>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <View>
            <Text style={styles.recommendationTitle}>新人问医生 9.9 元起</Text>
            <Text style={styles.recommendationSubtitle}>立即咨询</Text>
          </View>
        </View>
        <View style={styles.recommendationBox}>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <View>
            <Text style={styles.recommendationTitle}>直播课件</Text>
            <Text style={styles.recommendationSubtitle}>直播内容文字版 持续更新</Text>
          </View>
        </View>
        <View style={styles.recommendationBox}>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <View>
            <Text style={styles.recommendationTitle}>视频问医生</Text>
            <Text style={styles.recommendationSubtitle}>面对面问诊 更安心</Text>
          </View>
        </View>
      </View>

      {/* Popular Searches */}
      <Text style={styles.sectionTitle}>热门搜索</Text>
      <View style={styles.searchTagsContainer}>
        <TouchableOpacity style={styles.tag}>
          <Icon name="flame" size={16} color="#f44" />
          <Text style={styles.tagText}>痔疮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Icon name="flame" size={16} color="#f44" />
          <Text style={styles.tagText}>湿疹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Icon name="flame" size={16} color="#f44" />
          <Text style={styles.tagText}>甲状腺结节</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Icon name="flame" size={16} color="#f44" />
          <Text style={styles.tagText}>荨麻疹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Icon name="flame" size={16} color="#f44" />
          <Text style={styles.tagText}>痛风</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tag}>
          <Icon name="flame" size={16} color="#f44" />
          <Text style={styles.tagText}>前列腺炎</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  cancelText: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  recommendationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 5,
  },
  recommendationBox: {
    width: '48%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  recommendationSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  searchTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  tagText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
});

export default SearchScreen;