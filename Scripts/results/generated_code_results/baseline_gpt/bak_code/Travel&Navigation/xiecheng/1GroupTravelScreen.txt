import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const GroupTravelScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require('../assets/snack-icon.png')} />
        <View style={styles.headerIcons}>
          <Icon name="person-circle" size={30} color="#fff" />
          <Icon name="notifications" size={30} color="#fff" />
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>国内跟团游</Text>
        <Text style={styles.tab}>国际跟团游</Text>
        <Text style={styles.tab}>私家团</Text>
        <Text style={styles.tab}>自由行</Text>
      </View>

      <View style={styles.selection}>
        <View style={styles.selectionRow}>
          <Text style={styles.selectionText}>烟台出发</Text>
          <Text style={styles.selectionArrow}>></Text>
          <Text style={styles.selectionPlaceholder}>烟台</Text>
        </View>
        <View style={styles.cityOptions}>
          {['烟台', '西安', '大连', '上海', '成都', '南京'].map((city) => (
            <TouchableOpacity key={city} style={styles.cityButton}>
              <Icon name="flame" size={20} color="#ff6347" />
              <Text style={styles.cityText}>{city}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.selectionRow}>
          <Text style={styles.selectionText}>出发日期不限</Text>
          <Text style={styles.selectionArrow}>></Text>
          <Text style={styles.selectionPlaceholder}>游玩天数不限</Text>
        </View>
        <Text style={styles.infoText}>2成人 0儿童 看适合当前出行人的产品</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>查询</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subInfo}>
        <Text>钻石贵宾 • 已为您升级尊享折扣95折起</Text>
      </View>

      <View style={styles.categories}>
        {['人气榜', '度假直播', '会员专享价'].map((category, index) => (
          <View key={index} style={styles.category}>
            <Text>{category}</Text>
            <Text>></Text>
          </View>
        ))}
      </View>

      <View style={styles.promotion}>
        <Text style={styles.promotionText}>暑期大促 : 精选</Text>
        <TouchableOpacity>
          <Text>查看更多 ></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.offerTags}>
        {['精选', '云南', '新疆', '四川', '北京', '贵州'].map((tag) => (
          <TouchableOpacity key={tag} style={styles.tagButton}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    backgroundColor: '#4A90E2',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  tab: {
    color: '#333',
  },
  selection: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  selectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  selectionText: {
    flex: 1,
    fontSize: 16,
  },
  selectionArrow: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  selectionPlaceholder: {
    color: '#999',
  },
  cityOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  cityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  cityText: {
    marginLeft: 5,
    color: '#333',
  },
  infoText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  subInfo: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  promotion: {
    padding: 10,
    backgroundColor: '#fdf3f3',
    marginBottom: 10,
  },
  promotionText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offerTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagButton: {
    backgroundColor: '#ffeded',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  tagText: {
    color: '#ff6347',
  },
});

export default GroupTravelScreen;