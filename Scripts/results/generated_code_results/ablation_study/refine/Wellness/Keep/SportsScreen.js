import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const SportsScreen = ({ navigation }) => {

  const [selectedTab, setSelectedTab] = useState('轻松跑');



  const renderTab = (label) => (

    <TouchableOpacity

      style={[styles.tab, selectedTab === label && styles.selectedTab]}

      onPress={() => setSelectedTab(label)}

    >

      <Text style={[styles.tabText, selectedTab === label && styles.selectedTabText]}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

          <Text style={styles.headerText}>为你推荐更适合的跑步方式</Text>

          <TouchableOpacity style={styles.customizeButton}>

            <Text style={styles.customizeButtonText}>开始定制</Text>

            <Icon name="lightbulb-outline" size={18} color="#000" />

          </TouchableOpacity>

        </View>



        <View style={styles.card}>

          <Text style={styles.cardTitle}>Hi~ 我是你的轻松跑教练</Text>

          <Text style={styles.cardSubtitle}>帮你轻松面对 <Text style={styles.highlightText}>3</Text> 公里</Text>

          <View style={styles.tagsContainer}>

            <Text style={styles.tag}>#高效减脂</Text>

            <Text style={styles.tag}>#不窘气</Text>

            <Text style={styles.tag}>#轻松跑更远</Text>

          </View>

          <View style={styles.freeContainer}>

            <Icon name="loyalty" size={18} color="#FFD700" />

            <Text style={styles.freeText}>限时免费，剩余 3 次 ></Text>

          </View>

        </View>



        <View style={styles.tabContainer}>

          {renderTab('目标跑')}

          {renderTab('自由跑')}

          {renderTab('轻松跑')}

          {renderTab('课程跑')}

          {renderTab('自定义')}

        </View>



        <View style={styles.actionContainer}>

          <TouchableOpacity style={styles.actionButton}>

            <Icon name="map" size={24} color="#000" />

            <Text style={styles.actionText}>路线</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.goButton}>

            <Text style={styles.goButtonText}>GO</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Icon name="directions-run" size={24} color="#000" />

            <Text style={styles.actionText}>跑鞋</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabBarItem}>

          <Icon name="event" size={24} color="#666" />

          <Text style={styles.tabBarText}>运动日历</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem}>

          <Icon name="directions-run" size={24} color="#4CAF50" />

          <Text style={[styles.tabBarText, styles.activeTabBarText]}>户外跑步</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem}>

          <Icon name="directions-walk" size={24} color="#666" />

          <Text style={styles.tabBarText}>户外行走</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem}>

          <Icon name="fitness-center" size={24} color="#666" />

          <Text style={styles.tabBarText}>跳绳</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem}>

          <Icon name="dashboard" size={24} color="#666" />

          <Text style={styles.tabBarText}>更多</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFF',

  },

  logo: {

    width: 40,

    height: 40,

    marginRight: 12,

  },

  headerText: {

    flex: 1,

    fontSize: 16,

    fontWeight: 'bold',

  },

  customizeButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 16,

  },

  customizeButtonText: {

    marginRight: 4,

    fontSize: 14,

  },

  card: {

    backgroundColor: '#8E44AD',

    padding: 16,

    margin: 16,

    borderRadius: 8,

  },

  cardTitle: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  cardSubtitle: {

    color: '#FFF',

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 12,

  },

  highlightText: {

    fontSize: 32,

  },

  tagsContainer: {

    flexDirection: 'row',

    marginBottom: 12,

  },

  tag: {

    color: '#FFF',

    backgroundColor: 'rgba(255,255,255,0.2)',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 4,

    marginRight: 8,

    fontSize: 12,

  },

  freeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  freeText: {

    color: '#FFD700',

    marginLeft: 4,

  },

  tabContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    paddingVertical: 12,

  },

  tab: {

    paddingHorizontal: 12,

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#4CAF50',

  },

  tabText: {

    color: '#666',

  },

  selectedTabText: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  actionContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 16,

    marginTop: 16,

  },

  actionButton: {

    alignItems: 'center',

  },

  actionText: {

    marginTop: 4,

  },

  goButton: {

    backgroundColor: '#4CAF50',

    width: 80,

    height: 80,

    borderRadius: 40,

    justifyContent: 'center',

    alignItems: 'center',

  },

  goButtonText: {

    color: '#FFF',

    fontSize: 24,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    paddingVertical: 8,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  tabBarItem: {

    alignItems: 'center',

  },

  tabBarText: {

    fontSize: 12,

    marginTop: 4,

    color: '#666',

  },

  activeTabBarText: {

    color: '#4CAF50',

  },

});



export default SportsScreen;