import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const SportsScreen = () => {

  const navigation = useNavigation();

  const [selectedRunType, setSelectedRunType] = useState('轻松跑');



  const runTypes = ['轻松跑', '目标跑', '自由跑', '课程跑', '自定义'];

  const tags = ['高效减脂', '不窒气', '轻松跑更远'];



  const renderRunTypes = () => {

    return runTypes.map((type, index) => (

      <TouchableOpacity

        key={index}

        style={[styles.runTypeButton, selectedRunType === type && styles.selectedRunType]}

        onPress={() => setSelectedRunType(type)}

      >

        <Text style={[styles.runTypeText, selectedRunType === type && styles.selectedRunTypeText]}>{type}</Text>

      </TouchableOpacity>

    ));

  };



  const handleNavigation = (screen) => {

    navigation.navigate(screen);

  };



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

          <Text style={styles.title}>为你推荐更适合的跑步方式</Text>

          <TouchableOpacity style={styles.customizeButton}>

            <Text style={styles.customizeText}>开始定制</Text>

            <Icon name="lightbulb" size={18} color="#FFC107" />

          </TouchableOpacity>

        </View>



        <View style={styles.content}>

          <Text style={styles.subtitle}>Hi~ 我是你的轻松跑教练</Text>

          <Text style={styles.distance}>带你轻松面对 3 公里</Text>



          <View style={styles.tagsContainer}>

            {tags.map((tag, index) => (

              <View key={index} style={styles.tag}>

                <Text style={styles.tagText}>#{tag}</Text>

              </View>

            ))}

          </View>



          <TouchableOpacity style={styles.freeTrialButton}>

            <Icon name="timer" size={18} color="#FFD700" />

            <Text style={styles.freeTrialText}>限时免费，剩余 3 次 ></Text>

          </TouchableOpacity>



          <View style={styles.runTypesContainer}>

            {renderRunTypes()}

          </View>



          <View style={styles.actionButtons}>

            <TouchableOpacity style={styles.actionButton}>

              <Icon name="map" size={24} color="#000" />

              <Text style={styles.actionButtonText}>路线</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.goButton}>

              <Text style={styles.goButtonText}>GO</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>

              <Icon name="directions-run" size={24} color="#000" />

              <Text style={styles.actionButtonText}>跑鞋</Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Home')}>

          <Icon name="home" size={24} color="#666" />

          <Text style={styles.navText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('SearchSports')}>

          <Icon name="search" size={24} color="#666" />

          <Text style={styles.navText}>搜索</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Icon name="directions-run" size={24} color="#4CAF50" />

          <Text style={[styles.navText, styles.activeNavText]}>户外跑步</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="directions-walk" size={24} color="#666" />

          <Text style={styles.navText}>户外行走</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    backgroundColor: '#8E24AA',

    padding: 20,

    alignItems: 'center',

  },

  logo: {

    width: 40,

    height: 40,

    marginBottom: 10,

  },

  title: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  customizeButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.2)',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 20,

  },

  customizeText: {

    color: '#fff',

    marginRight: 5,

  },

  content: {

    padding: 20,

  },

  subtitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  distance: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  tagsContainer: {

    flexDirection: 'row',

    marginBottom: 15,

  },

  tag: {

    backgroundColor: '#E0E0E0',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

    marginRight: 10,

  },

  tagText: {

    color: '#666',

  },

  freeTrialButton: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  freeTrialText: {

    color: '#FFD700',

    marginLeft: 5,

  },

  runTypesContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  runTypeButton: {

    paddingVertical: 10,

    paddingHorizontal: 15,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: '#E0E0E0',

  },

  selectedRunType: {

    backgroundColor: '#4CAF50',

    borderColor: '#4CAF50',

  },

  runTypeText: {

    color: '#666',

  },

  selectedRunTypeText: {

    color: '#fff',

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  actionButton: {

    alignItems: 'center',

  },

  actionButtonText: {

    marginTop: 5,

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

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

  },

  bottomNav: {

    flexDirection: 'row',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  navItem: {

    flex: 1,

    alignItems: 'center',

  },

  activeNavItem: {

    borderTopWidth: 2,

    borderTopColor: '#4CAF50',

  },

  navText: {

    fontSize: 12,

    marginTop: 5,

    color: '#666',

  },

  activeNavText: {

    color: '#4CAF50',

  },

});



export default SportsScreen;