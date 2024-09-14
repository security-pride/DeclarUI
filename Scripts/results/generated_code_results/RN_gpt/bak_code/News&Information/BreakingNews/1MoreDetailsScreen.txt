import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MoreDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>8:35</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.connection}>3G</Text>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.profilePlaceholder} />
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>设置</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>同城</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>我的话题</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>已收藏的新闻</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>消息</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Notice')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>公告</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>分享应用</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>隐私政策</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>支持我们</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>常见问题解答</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>退出应用</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>新闻</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>话题墙</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>BELOUD</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>提醒</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItemActive}>更多</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#F0F0F0',
  },
  time: {
    fontSize: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
  connection: {
    fontSize: 12,
  },
  profilePlaceholder: {
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 10,
  },
  navItem: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  navItemActive: {
    fontSize: 14,
    color: '#FF0000',
  },
});

export default MoreDetailsScreen;