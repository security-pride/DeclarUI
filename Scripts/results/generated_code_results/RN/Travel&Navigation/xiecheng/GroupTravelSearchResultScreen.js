import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const GroupTravelSearchResult = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('烟台');
const navigateToGroupDetails = () => {
navigation.navigate('GroupDetails');
};
const navigateToGroupTravel = () => {
navigation.navigate('GroupTravel');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToGroupTravel} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />
<Text style={styles.locationText}>烟台出发</Text>
<TextInput style={styles.searchInput} value={searchQuery} onChangeText={setSearchQuery} placeholder="烟台" />
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
</TouchableOpacity>
</View>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <View style={styles.tabBar}>
    <Text style={styles.activeTab}>烟台出发参团</Text>
    <Text style={styles.tab}>亲子·游学</Text>
    <Text style={styles.tab}>店铺</Text>
  </View>

  <View style={styles.filterBar}>
    <TouchableOpacity style={styles.filterItem}>
      <Text>推荐排序</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.downArrow} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterItem}>
      <Text>天数/日期</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.downArrow} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterItem}>
      <Text>人数 2</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.downArrow} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterItem}>
      <Text>线路玩法</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.downArrow} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Text>筛选</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.tagBar}>
    <TouchableOpacity style={styles.tag}>
      <Text>携程自营</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tag}>
      <Text>2天</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tag}>
      <Text>暑期大促</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tag}>
      <Text>拼小团</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tag}>
      <Text>5钻</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tag}>
      <Text>金牌店铺</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.promotionBanner}>
    <Image source={require('../assets/snack-icon.png')} style={styles.diamondIcon} />
    <Text style={styles.promotionText}>钻石贵宾&机票用户尊享</Text>
    <Text style={styles.promotionSubtext}>可享专属预订折扣·无忧退订</Text>
    <TouchableOpacity style={styles.detailButton}>
      <Text style={styles.detailButtonText}>详情 ></Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.closeButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.closeIcon} />
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.tourCard} onPress={navigateToGroupDetails}>
    <Image source={require('../assets/snack-icon.png')} style={styles.tourImage} />
    <View style={styles.tourInfo}>
      <View style={styles.tourTags}>
        <Text style={styles.tourTag}>拼小团</Text>
        <Text style={styles.tourTag}>烟台出发</Text>
        <Text style={styles.tourTag}>优选</Text>
      </View>
      <Text style={styles.tourTitle}>烟台+蓬莱区·2日1晚</Text>
      <Text style={styles.tourDescription}>游玩 帆船出海·喂海鸥·体验社会乐趣</Text>
      <Text style={styles.tourAccommodation}>行住 全程3钻酒店</Text>
      <Text style={styles.tourServices}>服务 纯玩无购物·6人小团·提前2天免费退</Text>
      <View style={styles.tourFooter}>
        <View style={styles.tourRating}>
          <Text style={styles.ratingScore}>5.0分</Text>
          <Text style={styles.ratingComment}>"酒店很舒服"</Text>
        </View>
        <View style={styles.tourPricing}>
          <Text style={styles.pricingText}>￥965起</Text>
          <TouchableOpacity style={styles.promotionButton}>
            <Text style={styles.promotionButtonText}>限时促销</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tourCard} onPress={navigateToGroupDetails}>
    <Image source={require('../assets/snack-icon.png')} style={styles.tourImage} />
    <View style={styles.tourInfo}>
      <View style={styles.tourTags}>
        <Text style={styles.tourTag}>拼小团</Text>
        <Text style={styles.tourTag}>烟台出发</Text>
        <Text style={styles.tourTag}>优选</Text>
      </View>
      <Text style={styles.tourTitle}>烟台+威海·3日2晚</Text>
      <Text style={styles.tourDescription}>游玩 烟台玩1天·帆船出海</Text>
      <Text style={styles.tourAccommodation}>行住 全程3钻酒店</Text>
      <Text style={styles.tourServices}>服务 纯玩无购物·6人小团·提前2天免费退</Text>
      <View style={styles.tourFooter}>
        <View style={styles.tourRating}>
          <Text style={styles.ratingScore}>5.0分</Text>
          <Text style={styles.ratingComment}>"酒店很舒服"</Text>
        </View>
        <View style={styles.tourPricing}>
          <Text style={styles.pricingText}>￥1699起</Text>
          <TouchableOpacity style={styles.promotionButton}>
            <Text style={styles.promotionButtonText}>限时促销</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </TouchableOpacity>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: 'white',
},
backButton: {
padding: 5,
},
icon: {
width: 24,
height: 24,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 20,
padding: 5,
marginHorizontal: 10,
},
locationIcon: {
width: 20,
height: 20,
marginRight: 5,
},
locationText: {
marginRight: 5,
},
searchInput: {
flex: 1,
},
searchIcon: {
width: 20,
height: 20,
},
messageIcon: {
width: 24,
height: 24,
marginHorizontal: 10,
},
moreIcon: {
width: 24,
height: 24,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: 'white',
paddingVertical: 10,
},
activeTab: {
fontWeight: 'bold',
color: '#1e90ff',
},
tab: {
color: 'gray',
},
filterBar: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: 'white',
paddingVertical: 10,
},
filterItem: {
flexDirection: 'row',
alignItems: 'center',
},
downArrow: {
width: 12,
height: 12,
marginLeft: 5,
},
filterButton: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
},
tagBar: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 10,
backgroundColor: 'white',
},
tag: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
marginRight: 10,
marginBottom: 10,
},
promotionBanner: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff5e6',
padding: 10,
marginVertical: 10,
},
diamondIcon: {
width: 24,
height: 24,
marginRight: 10,
},
promotionText: {
fontWeight: 'bold',
marginRight: 10,
},
promotionSubtext: {
color: 'gray',
flex: 1,
},
detailButton: {
backgroundColor: '#ff9500',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
},
detailButtonText: {
color: 'white',
},
closeButton: {
padding: 5,
},
closeIcon: {
width: 16,
height: 16,
},
tourCard: {
backgroundColor: 'white',
marginBottom: 10,
},
tourImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
},
tourInfo: {
padding: 10,
},
tourTags: {
flexDirection: 'row',
marginBottom: 5,
},
tourTag: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 5,
paddingVertical: 2,
borderRadius: 10,
marginRight: 5,
fontSize: 12,
},
tourTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
tourDescription: {
marginBottom: 5,
},
tourAccommodation: {
marginBottom: 5,
},
tourServices: {
marginBottom: 5,
},
tourFooter: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
tourRating: {
flexDirection: 'row',
alignItems: 'center',
},
ratingScore: {
color: '#ff9500',
fontWeight: 'bold',
marginRight: 5,
},
ratingComment: {
color: 'gray',
},
tourPricing: {
alignItems: 'flex-end',
},
pricingText: {
fontSize: 18,
fontWeight: 'bold',
color: '#ff9500',
},
promotionButton: {
backgroundColor: '#ff9500',
paddingHorizontal: 5,
paddingVertical: 2,
borderRadius: 10,
},
promotionButtonText: {
color: 'white',
fontSize: 12,
},
});
export default GroupTravelSearchResult;