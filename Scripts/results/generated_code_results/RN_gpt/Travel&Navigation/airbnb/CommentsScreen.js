import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CommentsScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.rating}>4.80</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>
      <Text style={styles.guestRecommendation}>房客推荐</Text>
      <Text style={styles.basedOn}>根据评分、评价和可靠性数据，这是爱彼迎上最受房客欢迎的房源之一</Text>
      
      <View style={styles.scoresRow}>
        <Text style={styles.scores}>总体评分</Text>
        <View style={styles.cleanlinessRow}>
          <Text style={styles.cleanliness}>干净卫生</Text>
          <Text style={styles.cleanlinessScore}>5.0</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.sprayIcon} />
        </View>
        <View style={styles.accuracyRow}>
          <Text style={styles.accuracy}>如实描述</Text>
          <Text style={styles.accuracyScore}>4.8</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />
        </View>
      </View>

      <Text style={styles.reviewsCount}>5条评价</Text>

      <View style={styles.tagRow}>
        <Pressable style={styles.tag}><Text>环境安静 3</Text></Pressable>
        <Pressable style={styles.tag}><Text>位置优越 2</Text></Pressable>
        <Pressable style={styles.tag}><Text>推荐入住 2</Text></Pressable>
        <Pressable style={styles.tag}><Text>干净卫生 1</Text></Pressable>
        <Pressable style={styles.tag}><Text>房东热情 1</Text></Pressable>
        <Pressable style={styles.tag}><Text>设施齐全 1</Text></Pressable>
      </View>

      <View style={styles.sortRow}>
        <Pressable style={styles.mostHelpfulButton} onPress={handleNavigation}>
          <Text>最有帮助</Text>
        </Pressable>
      </View>

      <View style={styles.review}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
        <View style={styles.reviewContent}>
          <Text style={styles.reviewerName}>David</Text>
          <Text style={styles.reviewerInfo}>使用爱彼迎8年</Text>
          <Text style={styles.reviewDate}>2024年4月</Text>
          <Text style={styles.reviewText}>宁静而风景如画-我在这里住得非常愉快。大篷车就在海滩旁边，设备齐全，很舒适。公园很安静，是探索南海岸小径的好基地，同时距离韦茅斯也很近。房东很友好，善于沟通，感谢他们愿意回答问题，为当地的酒吧和散步提出建议。我肯定会再次入住这里，并推荐给任何寻找安静休息的人。</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  rating: {
    fontSize: 48,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  guestRecommendation: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 5,
  },
  basedOn: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  scoresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  scores: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cleanlinessRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cleanliness: {
    marginRight: 5,
  },
  cleanlinessScore: {
    marginRight: 5,
  },
  sprayIcon: {
    width: 16,
    height: 16,
  },
  accuracyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accuracy: {
    marginRight: 5,
  },
  accuracyScore: {
    marginRight: 5,
  },
  checkIcon: {
    width: 16,
    height: 16,
  },
  reviewsCount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  sortRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mostHelpfulButton: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
  },
  review: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  profileIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewerInfo: {
    fontSize: 14,
    color: 'gray',
  },
  reviewDate: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
  },
});

export default CommentsScreen;