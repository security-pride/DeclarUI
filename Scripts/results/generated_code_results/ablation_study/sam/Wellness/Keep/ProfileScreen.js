import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



const ProfileScreen = ({ navigation }) => {

  const renderSection = (title, icon) => (

    <TouchableOpacity style={styles.sectionItem}>

      <Icon name={icon} size={24} color="#333" />

      <Text style={styles.sectionText}>{title}</Text>

      <Icon name="chevron-right" size={16} color="#999" />

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Icon name="qrcode" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="cog" size={24} color="#333" />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.userInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

          <View style={styles.userDetails}>

            <Text style={styles.username}>Boots--2333</Text>

            <View style={styles.userStats}>

              <Text style={styles.statText}>关注 1</Text>

              <Text style={styles.statText}>粉丝 0</Text>

              <Text style={styles.statText}>加油 1</Text>

            </View>

          </View>

          <TouchableOpacity style={styles.editButton}>

            <Icon name="edit" size={16} color="#333" />

          </TouchableOpacity>

        </View>



        <View style={styles.userBadges}>

          <View style={styles.badge}>

            <Icon name="star" size={16} color="#FFD700" />

            <Text style={styles.badgeText}>3</Text>

            <Text style={styles.badgeLabel}>新升级!</Text>

          </View>

          <View style={styles.badge}>

            <Icon name="trophy" size={16} color="#C0C0C0" />

            <Text style={styles.badgeText}>14</Text>

            <Text style={styles.badgeLabel}>新挑战</Text>

          </View>

          <View style={styles.badge}>

            <Icon name="calendar" size={16} color="#333" />

            <Text style={styles.badgeText}>2016.07.07</Text>

          </View>

        </View>



        <View style={styles.dataSection}>

          <View style={styles.dataItem}>

            <Text style={styles.dataTitle}>我的数据</Text>

            <Text style={styles.dataValue}>0 分钟</Text>

            <Text style={styles.dataLabel}>本周运动</Text>

          </View>

          <View style={styles.dataItem}>

            <Text style={styles.dataTitle}>体重数据</Text>

            <Text style={styles.dataValue}>70.0 公斤</Text>

            <Text style={styles.dataLabel}>近 12 个月</Text>

          </View>

        </View>



        <TouchableOpacity style={styles.membershipCard}>

          <View>

            <Text style={styles.membershipTitle}>keep·会员</Text>

            <Text style={styles.membershipDesc}>告别肚腩计划</Text>

            <Text style={styles.membershipSubDesc}>腰间的肥油叮叮掉</Text>

          </View>

          <TouchableOpacity style={styles.membershipButton}>

            <Text style={styles.membershipButtonText}>立即开通</Text>

          </TouchableOpacity>

        </TouchableOpacity>



        {renderSection('我的动态', 'pencil')}

        {renderSection('收藏与加油', 'star')}

        {renderSection('我的课程', 'book')}

        {renderSection('我的活动', 'flag')}

        {renderSection('我的饮食', 'cutlery')}

        {renderSection('订单与钱包', 'credit-card')}

      </ScrollView>



      <View style={styles.bottomNav}>

        {['首页', '课程', '运动', '商城', '我的'].map((item) => (

          <TouchableOpacity

            key={item}

            style={styles.navItem}

            onPress={() => {

              if (item === '首页') {

                navigation.navigate('Home');

              } else if (item === '商城') {

                navigation.navigate('Store');

              } else if (item === '运动') {

                navigation.navigate('SearchSports');

              }

            }}

          >

            <Icon name={item === '首页' ? 'home' : item === '课程' ? 'book' : item === '运动' ? 'running' : item === '商城' ? 'shopping-cart' : 'user'} size={24} color={item === '我的' ? '#000' : '#999'} />

            <Text style={[styles.navText, item === '我的' && styles.activeNavText]}>{item}</Text>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#fff',

  },

  avatar: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  userDetails: {

    flex: 1,

    marginLeft: 15,

  },

  username: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  userStats: {

    flexDirection: 'row',

    marginTop: 5,

  },

  statText: {

    marginRight: 10,

    color: '#666',

  },

  editButton: {

    padding: 5,

  },

  userBadges: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 15,

    backgroundColor: '#fff',

    marginTop: 10,

  },

  badge: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  badgeText: {

    marginLeft: 5,

    marginRight: 5,

  },

  badgeLabel: {

    color: '#666',

  },

  dataSection: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    marginTop: 10,

  },

  dataItem: {

    flex: 1,

    padding: 15,

    borderRightWidth: 1,

    borderRightColor: '#eee',

  },

  dataTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  dataValue: {

    fontSize: 24,

    fontWeight: 'bold',

    marginVertical: 5,

  },

  dataLabel: {

    color: '#666',

  },

  membershipCard: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#8a2be2',

    margin: 15,

    padding: 15,

    borderRadius: 10,

  },

  membershipTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  membershipDesc: {

    color: '#fff',

    marginTop: 5,

  },

  membershipSubDesc: {

    color: '#ddd',

    fontSize: 12,

    marginTop: 3,

  },

  membershipButton: {

    backgroundColor: '#ffd700',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 15,

  },

  membershipButtonText: {

    color: '#8a2be2',

    fontWeight: 'bold',

  },

  sectionItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    padding: 15,

    marginTop: 1,

  },

  sectionText: {

    flex: 1,

    marginLeft: 10,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#999',

    marginTop: 5,

  },

  activeNavText: {

    color: '#000',

  },

});



export default ProfileScreen;