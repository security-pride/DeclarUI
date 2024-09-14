import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { FontAwesome } from 'react-native-vector-icons';

const CommentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.ratingText}>4.80</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
        <TouchableOpacity>
          <Ionicons name="search" size={24} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.subTitle}>房客推荐</Text>
      <Text style={styles.description}>根据评分、评价和可靠性数据，这是爱彼迎上最受房客欢迎的房源之一</Text>
      
      <View style={styles.scores}>
        <View>
          <Text>总体评分</Text>
          <View style={styles.scoreBars}>
            <Text>5</Text>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.scoreBars}>
            <Text>4</Text>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.scoreBars}>
            <Text>3</Text>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.scoreBars}>
            <Text>2</Text>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.scoreBars}>
            <Text>1</Text>
            <View style={styles.bar}></View>
          </View>
        </View>
        
        <View>
          <Text>干净卫生</Text>
          <Text>5.0</Text>
          <FontAwesome name="shower" size={16} />
        </View>

        <View>
          <Text>如实描述</Text>
          <Text>4.8</Text>
          <FontAwesome name="check-circle" size={16} />
        </View>
      </View>
      
      <Text style={styles.commentsTitle}>5条评价</Text>

      <View style={styles.tags}>
        <View style={styles.tag}><Text>环境安静 3</Text></View>
        <View style={styles.tag}><Text>位置优越 2</Text></View>
        <View style={styles.tag}><Text>推荐入住 2</Text></View>
        <View style={styles.tag}><Text>干净卫生 1</Text></View>
        <View style={styles.tag}><Text>房东热情 1</Text></View>
        <View style={styles.tag}><Text>设施齐全 1</Text></View>
      </View>

      <TouchableOpacity style={styles.sortButton}>
        <Text>最有帮助</Text>
        <Ionicons name="chevron-down" size={16} />
      </TouchableOpacity>

      <View style={styles.comment}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View>
          <Text>David</Text>
          <Text>使用爱彼迎8年</Text>
        </View>
      </View>

      <View style={styles.commentContent}>
        <View style={styles.stars}>
          <FontAwesome name="star" size={16} /><FontAwesome name="star" size={16} /><FontAwesome name="star" size={16} /><FontAwesome name="star" size={16} />
        </View>
        <Text>2024年4月</Text>
        <Text style={styles.commentText}>宁静而风景如画...</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  ratingText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 16,
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  scoreBars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    width: 100,
    height: 5,
    backgroundColor: '#ccc',
    marginLeft: 8,
  },
  commentsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 5,
    marginRight: 8,
    marginBottom: 8,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  commentContent: {
    marginBottom: 16,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#444',
  },
});

export default CommentsScreen;