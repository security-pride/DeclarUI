import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SportsScreen = () => {

  const navigation = useNavigation();

  const [selectedRunType, setSelectedRunType] = useState('轻松跑');



  const runTypes = ['目标跑', '自由跑', '轻松跑', '课程跑', '自定义'];



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

          <Text style={styles.headerTitle}>为你推荐更适合的跑步方式</Text>

          <TouchableOpacity style={styles.customizeButton}>

            <Text style={styles.customizeButtonText}>开始定制💡</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.card}>

          <Text style={styles.cardTitle}>Hi~ 我是你的轻松跑教练</Text>

          <Text style={styles.cardSubtitle}>帮你轻松面对 <Text style={styles.highlightText}>3</Text> 公里</Text>

          <View style={styles.tagContainer}>

            <Text style={styles.tag}>#高效减脂</Text>

            <Text style={styles.tag}>#不岔气</Text>

            <Text style={styles.tag}>#轻松跑更远</Text>

          </View>

          <TouchableOpacity style={styles.freeTrialButton}>

            <Image source={require('../assets/snack-icon.png' )} style={styles.freeTrialIcon} />

            <Text style={styles.freeTrialText}>限时免费，剩余 3 次 ›</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.runTypeContainer}>

          {runTypes.map((type) => (

            <TouchableOpacity

              key={type}

              style={[styles.runTypeButton, selectedRunType === type && styles.selectedRunType]}

              onPress={() => setSelectedRunType(type)}

            >

              <Text style={[styles.runTypeText, selectedRunType === type && styles.selectedRunTypeText]}>{type}</Text>

            </TouchableOpacity>

          ))}

        </View>



        <View style={styles.actionButtonsContainer}>

          <TouchableOpacity style={styles.actionButton}>

            <Image source={require( '../assets/snack-icon.png')} style={styles.actionButtonIcon} />

            <Text style={styles.actionButtonText}>路线</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.goButton}>

            <Text style={styles.goButtonText}>GO</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Image source={require('../assets/snack-icon.png' )} style={styles.actionButtonIcon} />

            <Text style={styles.actionButtonText}>跑鞋</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require( '../assets/snack-icon.png' )} style={styles.tabIcon} />

          <Text style={styles.tabText}>运动日历</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require( '../assets/snack-icon.png' )} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>户外跑步</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require( '../assets/snack-icon.png' )} style={styles.tabIcon} />

          <Text style={styles.tabText}>户外行走</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require( '../assets/snack-icon.png' )} style={styles.tabIcon} />

          <Text style={styles.tabText}>跳绳</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require( '../assets/snack-icon.png' )} style={styles.tabIcon} />

          <Text style={styles.tabText}>更多</Text>

        </TouchableOpacity>

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

    padding: 20,

    alignItems: 'center',

  },

  logo: {

    width: 50,

    height: 50,

    marginBottom: 10,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10,

  },

  customizeButton: {

    backgroundColor: '#f0f0f0',

    padding: 10,

    borderRadius: 20,

  },

  customizeButtonText: {

    fontSize: 14,

  },

  card: {

    backgroundColor: '#8a2be2',

    margin: 20,

    padding: 20,

    borderRadius: 10,

  },

  cardTitle: {

    color: 'white',

    fontSize: 18,

    marginBottom: 10,

  },

  cardSubtitle: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  highlightText: {

    fontSize: 32,

  },

  tagContainer: {

    flexDirection: 'row',

    marginBottom: 15,

  },

  tag: {

    color: 'white',

    marginRight: 10,

  },

  freeTrialButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  freeTrialIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  freeTrialText: {

    color: 'white',

  },

  runTypeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  runTypeButton: {

    paddingVertical: 10,

  },

  selectedRunType: {

    borderBottomWidth: 2,

    borderBottomColor: '#4CAF50',

  },

  runTypeText: {

    color: '#888',

  },

  selectedRunTypeText: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  actionButtonsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    marginBottom: 20,

  },

  actionButton: {

    alignItems: 'center',

  },

  actionButtonIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  actionButtonText: {

    fontSize: 12,

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

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: 'white',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 12,

    color: '#888',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#4CAF50',

  },

  activeTabIcon: {

    tintColor: '#4CAF50',

  },

  activeTabText: {

    color: '#4CAF50',

  },

});



export default SportsScreen;