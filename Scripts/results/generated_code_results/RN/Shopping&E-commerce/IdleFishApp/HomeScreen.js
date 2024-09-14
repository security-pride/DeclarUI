import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('');
const handleSearch = (text) => {
setSearchText(text);
};
const navigateToCategories = () => {
navigation.navigate('Categories');
};
const navigateToSell = () => {
navigation.navigate('Sell');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerText}>海鲜市场</Text>
<Text style={styles.locationText}>推荐</Text>
<Text style={styles.locationText}>武汉</Text>
<TouchableOpacity onPress={() => {}}>
<Image source={require('../assets/snack-icon.png')} style={styles.signInIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchBar}>
    <TextInput
      style={styles.searchInput}
      placeholder="穿戴甲"
      value={searchText}
      onChangeText={handleSearch}
    />
    <TouchableOpacity style={styles.cameraButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryButton} onPress={navigateToCategories}>
      <Text style={styles.categoryButtonText}>分类</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.quickAccessButtons}>
    <QuickAccessButton icon={require('../assets/snack-icon.png')} label="人才市场" />
    <QuickAccessButton icon={require('../assets/snack-icon.png')} label="手机" />
    <QuickAccessButton icon={require('../assets/snack-icon.png')} label="省钱神券" />
    <QuickAccessButton icon={require('../assets/snack-icon.png')} label="充值中心" />
    <QuickAccessButton icon={require('../assets/snack-icon.png')} label="奢品" />
  </View>

  <View style={styles.promotions}>
    <PromotionCard
      title="闲鱼特卖超低价"
      description="全新正品1折起"
      price="¥4.8抢"
      image={require('../assets/snack-icon.png')}
    />
    <PromotionCard
      title="极速回收"
      description="免费上门"
      image={require('../assets/snack-icon.png')}
    />
    <PromotionCard
      title="闲鱼直播"
      description="爆款好物直播中"
      image={require('../assets/snack-icon.png')}
    />
  </View>

  <View style={styles.categories}>
    <CategoryButton label="猜你喜欢" />
    <CategoryButton label="最新发布" />
    <CategoryButton label="鱼币抵钱" />
    <CategoryButton label="省钱小组" />
  </View>

  <View style={styles.creditSection}>
    <Text style={styles.creditTitle}>总计额度</Text>
    <Text style={styles.creditAmount}>¥4,500.00</Text>
    <View style={styles.creditTools}>
      <CreditTool icon={require('../assets/snack-icon.png')} label="使用期限" />
      <CreditTool icon={require('../assets/snack-icon.png')} label="额度记录" />
      <CreditTool icon={require('../assets/snack-icon.png')} label="额度管理" />
    </View>
    <Text style={styles.creditStatus}>信用极好</Text>
    <TouchableOpacity style={styles.claimButton}>
      <Text style={styles.claimButtonText}>领取一笔备用额度</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNavigation}>
    <BottomNavItem icon={require('../assets/snack-icon.png')} label="闲鱼" />
    <BottomNavItem icon={require('../assets/snack-icon.png')} label="游戏" />
    <TouchableOpacity style={styles.addButton} onPress={navigateToSell}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    <BottomNavItem icon={require('../assets/snack-icon.png')} label="消息" />
    <BottomNavItem icon={require('../assets/snack-icon.png')} label="我的" />
  </View>
</ScrollView>
);
};
const QuickAccessButton = ({ icon, label }) => (
<TouchableOpacity style={styles.quickAccessButton}>
<Image source={icon} style={styles.quickAccessIcon} />
<Text style={styles.quickAccessLabel}>{label}</Text>
</TouchableOpacity>
);
const PromotionCard = ({ title, description, price, image }) => (
<View style={styles.promotionCard}>
<Image source={image} style={styles.promotionImage} />
<Text style={styles.promotionTitle}>{title}</Text>
<Text style={styles.promotionDescription}>{description}</Text>
{price && <Text style={styles.promotionPrice}>{price}</Text>}
</View>
);
const CategoryButton = ({ label }) => (
<TouchableOpacity style={styles.categoryButton}>
<Text style={styles.categoryButtonText}>{label}</Text>
</TouchableOpacity>
);
const CreditTool = ({ icon, label }) => (
<View style={styles.creditTool}>
<Image source={icon} style={styles.creditToolIcon} />
<Text style={styles.creditToolLabel}>{label}</Text>
</View>
);
const BottomNavItem = ({ icon, label }) => (
<TouchableOpacity style={styles.bottomNavItem}>
<Image source={icon} style={styles.bottomNavIcon} />
<Text style={styles.bottomNavLabel}>{label}</Text>
</TouchableOpacity>
);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 10,
backgroundColor: '#fff',
},
headerText: {
fontSize: 18,
fontWeight: 'bold',
},
locationText: {
fontSize: 14,
color: '#666',
},
signInIcon: {
width: 24,
height: 24,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 10,
},
searchInput: {
flex: 1,
height: 36,
backgroundColor: '#f0f0f0',
borderRadius: 18,
paddingHorizontal: 10,
},
cameraButton: {
marginLeft: 10,
},
cameraIcon: {
width: 24,
height: 24,
},
categoryButton: {
marginLeft: 10,
},
categoryButtonText: {
color: '#666',
},
quickAccessButtons: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
},
quickAccessButton: {
alignItems: 'center',
},
quickAccessIcon: {
width: 40,
height: 40,
},
quickAccessLabel: {
fontSize: 12,
marginTop: 5,
},
promotions: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
},
promotionCard: {
backgroundColor: '#fff',
borderRadius: 8,
padding: 10,
alignItems: 'center',
},
promotionImage: {
width: 80,
height: 80,
},
promotionTitle: {
fontSize: 14,
fontWeight: 'bold',
marginTop: 5,
},
promotionDescription: {
fontSize: 12,
color: '#666',
},
promotionPrice: {
fontSize: 16,
color: '#ff6600',
fontWeight: 'bold',
marginTop: 5,
},
categories: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
},
creditSection: {
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
creditTitle: {
fontSize: 16,
fontWeight: 'bold',
},
creditAmount: {
fontSize: 24,
fontWeight: 'bold',
marginVertical: 10,
},
creditTools: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 10,
},
creditTool: {
alignItems: 'center',
},
creditToolIcon: {
width: 24,
height: 24,
},
creditToolLabel: {
fontSize: 12,
marginTop: 5,
},
creditStatus: {
fontSize: 14,
color: '#4caf50',
},
claimButton: {
backgroundColor: '#ff6600',
borderRadius: 20,
paddingVertical: 10,
alignItems: 'center',
marginTop: 10,
},
claimButtonText: {
color: '#fff',
fontWeight: 'bold',
},
bottomNavigation: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#fff',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
bottomNavItem: {
alignItems: 'center',
},
bottomNavIcon: {
width: 24,
height: 24,
},
bottomNavLabel: {
fontSize: 12,
marginTop: 5,
},
addButton: {
backgroundColor: '#ff6600',
width: 50,
height: 50,
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
},
addButtonText: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
});
export default Home;