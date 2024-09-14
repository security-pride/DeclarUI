import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Categories = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('');
const handleSearch = (text) => {
setSearchText(text);
};
const navigateToHome = () => {
navigation.navigate('Home');
};
const navigateToJewelryCategory = () => {
navigation.navigate('JewelryCategory');
};
return (
<ScrollView style={styles.container}>
<TouchableOpacity onPress={navigateToHome} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
  <TextInput
    style={styles.searchBar}
    placeholder="闲腿裤 | 牛仔短裤"
    value={searchText}
    onChangeText={handleSearch}
  />

  <View style={styles.recommendationSection}>
    <Text style={styles.sectionTitle}>热门推荐</Text>
    <Text style={styles.recommendationText}>推荐</Text>
  </View>

  <View style={styles.iconGrid}>
    <TouchableOpacity style={styles.iconItem} onPress={navigateToJewelryCategory}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>文玩珠宝</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>手机严选</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>奢侈品帮卖</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>免费送</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>潮玩盲盒</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>奢侈品</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>闲鱼租房</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>闲鱼游戏</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>卖闲置</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>旧衣回收</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>卡券回收</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>免费鉴定</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>明星玩家</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>卡券</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>省心卖</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>二手车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text style={styles.iconText}>图书回收</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.categoryList}>
    <Text style={styles.categoryItem}>游戏装备</Text>
    <Text style={styles.categoryItem}>数码</Text>
    <Text style={styles.categoryItem}>模玩动漫</Text>
    <Text style={styles.categoryItem}>企业</Text>
    <Text style={styles.categoryItem}>文玩玉翠</Text>
    <Text style={styles.categoryItem}>家居生活</Text>
    <Text style={styles.categoryItem}>优惠券码</Text>
    <Text style={styles.categoryItem}>美容彩妆</Text>
    <Text style={styles.categoryItem}>母婴</Text>
    <Text style={styles.categoryItem}>运动户外</Text>
    <Text style={styles.categoryItem}>服饰鞋帽</Text>
    <Text style={styles.categoryItem}>技能服务</Text>
    <Text style={styles.categoryItem}>家用电器</Text>
    <Text style={styles.categoryItem}>宠物花卉</Text>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
backButton: {
position: 'absolute',
top: 10,
left: 10,
zIndex: 1,
},
backIcon: {
width: 30,
height: 30,
},
searchBar: {
height: 40,
margin: 12,
borderWidth: 1,
padding: 10,
borderRadius: 20,
},
recommendationSection: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
recommendationText: {
color: '#888',
},
iconGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 10,
},
iconItem: {
alignItems: 'center',
width: '25%',
marginBottom: 20,
},
icon: {
width: 50,
height: 50,
marginBottom: 5,
},
iconText: {
textAlign: 'center',
},
categoryList: {
padding: 10,
},
categoryItem: {
fontSize: 16,
marginBottom: 10,
},
});
export default Categories;