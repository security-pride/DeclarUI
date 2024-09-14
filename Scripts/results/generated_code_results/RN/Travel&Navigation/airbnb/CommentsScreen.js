import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CommentsScreen = () => {
const navigation = useNavigation();
const [selectedFilter, setSelectedFilter] = useState(null);
const renderRatingBar = (rating) => {
const filledWidth = (rating / 5) * 100;
return (
<View style={styles.ratingBar}>
<View style={[styles.ratingFill, { width: ${filledWidth}% }]} />
</View>
);
};
const FilterButton = ({ title, count }) => (
<TouchableOpacity
style={[
styles.filterButton,
selectedFilter === title && styles.selectedFilter,
]}
onPress={() => setSelectedFilter(title)}
>
<Text style={styles.filterButtonText}>{${title} ${count}}</Text>
</TouchableOpacity>
);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.overallRating}>4.80</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.leafIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.leafIcon} />
</View>
  <Text style={styles.recommendationText}>房客推荐</Text>
  <Text style={styles.ratingDescription}>
    根据评分、评价和可靠性数据，这是爱彼迎上最受房客欢迎的房源之一
  </Text>

  <View style={styles.ratingBreakdown}>
    <View style={styles.ratingItem}>
      <Text style={styles.ratingLabel}>总体评分</Text>
      {renderRatingBar(4.8)}
    </View>
    <View style={styles.ratingItem}>
      <View style={styles.cleanlinessRating}>
        <Image source={require('../assets/snack-icon.png')} style={styles.cleanIcon} />
        <Text style={styles.ratingLabel}>干净卫生</Text>
        <Text style={styles.ratingScore}>5.0</Text>
      </View>
    </View>
    <View style={styles.ratingItem}>
      <View style={styles.accuracyRating}>
        <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />
        <Text style={styles.ratingLabel}>如实描述</Text>
        <Text style={styles.ratingScore}>4.8</Text>
      </View>
    </View>
  </View>

  <Text style={styles.reviewCount}>5条评价</Text>

  <View style={styles.filterContainer}>
    <FilterButton title="环境安静" count={3} />
    <FilterButton title="位置优越" count={2} />
    <FilterButton title="推荐入住" count={2} />
    <FilterButton title="干净卫生" count={1} />
    <FilterButton title="房东热情" count={1} />
    <FilterButton title="设施齐全" count={1} />
  </View>

  <Pressable style={styles.sortButton}>
    <Text style={styles.sortButtonText}>最有帮助 ▼</Text>
  </Pressable>

  <View style={styles.review}>
    <Image source={require('../assets/snack-icon.png')} style={styles.reviewerAvatar} />
    <View style={styles.reviewContent}>
      <Text style={styles.reviewerName}>David</Text>
      <Text style={styles.reviewerInfo}>使用爱彼迎8年</Text>
      <View style={styles.starRating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Image key={star} source={require('../assets/snack-icon.png')} style={styles.starIcon} />
        ))}
        <Text style={styles.reviewDate}>· 2024年4月</Text>
      </View>
      <Text style={styles.reviewText}>
        宁静而风景如画-我在这里住得非常愉快。大篷车就在海滩旁边，设备齐全，很舒适。公园很安静，是探索南海岸小径的好基地，同时距离韦茅斯也很近。房东很友好，善于沟通，感谢他们愿意回答问题，为当地的酒吧和散步提出建议。我肯定会再次入住这里，并推荐给任何寻找安静休息的人。
      </Text>
    </View>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 16,
},
header: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 16,
},
overallRating: {
fontSize: 48,
fontWeight: 'bold',
marginRight: 8,
},
leafIcon: {
width: 24,
height: 24,
marginRight: 4,
},
recommendationText: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 8,
},
ratingDescription: {
fontSize: 14,
color: '#666',
marginBottom: 16,
},
ratingBreakdown: {
marginBottom: 16,
},
ratingItem: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 8,
},
ratingLabel: {
flex: 1,
fontSize: 16,
},
ratingBar: {
flex: 2,
height: 4,
backgroundColor: '#e0e0e0',
borderRadius: 2,
},
ratingFill: {
height: '100%',
backgroundColor: '#000',
borderRadius: 2,
},
cleanlinessRating: {
flexDirection: 'row',
alignItems: 'center',
},
accuracyRating: {
flexDirection: 'row',
alignItems: 'center',
},
cleanIcon: {
width: 20,
height: 20,
marginRight: 8,
},
checkIcon: {
width: 20,
height: 20,
marginRight: 8,
},
ratingScore: {
fontSize: 16,
fontWeight: 'bold',
marginLeft: 8,
},
reviewCount: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 16,
},
filterContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
marginBottom: 16,
},
filterButton: {
paddingHorizontal: 16,
paddingVertical: 8,
borderRadius: 20,
borderWidth: 1,
borderColor: '#000',
marginRight: 8,
marginBottom: 8,
},
selectedFilter: {
backgroundColor: '#000',
},
filterButtonText: {
fontSize: 14,
},
sortButton: {
alignSelf: 'flex-start',
paddingVertical: 8,
paddingHorizontal: 16,
borderRadius: 8,
borderWidth: 1,
borderColor: '#000',
marginBottom: 16,
},
sortButtonText: {
fontSize: 16,
},
review: {
flexDirection: 'row',
marginBottom: 16,
},
reviewerAvatar: {
width: 48,
height: 48,
borderRadius: 24,
marginRight: 16,
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
color: '#666',
marginBottom: 4,
},
starRating: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 8,
},
starIcon: {
width: 16,
height: 16,
marginRight: 2,
},
reviewDate: {
fontSize: 14,
color: '#666',
marginLeft: 4,
},
reviewText: {
fontSize: 14,
lineHeight: 20,
},
});
export default CommentsScreen;