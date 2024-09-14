import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Search = () => {
const [searchQuery, setSearchQuery] = useState('');
const navigation = useNavigation();
const handleCancel = () => {
navigation.navigate('Home');
};
const renderRecommendationCard = (icon, title, description) => (
<TouchableOpacity style={styles.recommendationCard}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.recommendationIcon} />
<View style={styles.recommendationContent}>
<Text style={styles.recommendationTitle}>{title}</Text>
<Text style={styles.recommendationDescription}>{description}</Text>
</View>
</TouchableOpacity>
);
const renderHotSearchItem = (label) => (
<TouchableOpacity style={styles.hotSearchItem}>
<Text style={styles.hotSearchLabel}>{label}</Text>
</TouchableOpacity>
);
return (
<ScrollView style={styles.container}>
<View style={styles.searchBarContainer}>
<TextInput style={styles.searchInput} placeholder="搜索" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity onPress={handleCancel}>
<Text style={styles.cancelButton}>取消</Text>
</TouchableOpacity>
</View>
  <Text style={styles.sectionTitle}>热门推荐</Text>
  <View style={styles.recommendationsContainer}>
    {renderRecommendationCard('clipboard', '免费导诊', '为你量身推荐专家')}
    {renderRecommendationCard('doctor-bag', '新人问医生 9.9 元起', '立即咨询')}
    {renderRecommendationCard('live', '直播课件', '直播内容文字版\n持续更新')}
    {renderRecommendationCard('video-chat', '视频问医生', '面对面问诊\n更安心')}
  </View>

  <Text style={styles.sectionTitle}>热门搜索</Text>
  <View style={styles.hotSearchesContainer}>
    {renderHotSearchItem('痔疮')}
    {renderHotSearchItem('湿疹')}
    {renderHotSearchItem('甲状腺结节')}
    {renderHotSearchItem('荨麻疹')}
    {renderHotSearchItem('痛风')}
    {renderHotSearchItem('前列腺炎')}
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
searchBarContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
},
searchInput: {
flex: 1,
height: 40,
backgroundColor: '#f0f0f0',
borderRadius: 20,
paddingHorizontal: 15,
marginRight: 10,
},
cancelButton: {
color: '#007AFF',
fontSize: 16,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
margin: 15,
},
recommendationsContainer: {
backgroundColor: '#fff',
padding: 10,
},
recommendationCard: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f8f8f8',
borderRadius: 10,
padding: 15,
marginBottom: 10,
},
recommendationIcon: {
width: 40,
height: 40,
marginRight: 15,
},
recommendationContent: {
flex: 1,
},
recommendationTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
recommendationDescription: {
fontSize: 14,
color: '#666',
},
hotSearchesContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 10,
},
hotSearchItem: {
backgroundColor: '#fff',
borderRadius: 20,
paddingVertical: 5,
paddingHorizontal: 15,
margin: 5,
},
hotSearchLabel: {
fontSize: 14,
color: '#333',
},
});
export default Search;