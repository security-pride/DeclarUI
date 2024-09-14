import React from 'react';

import {

  View,

  Text,

  StyleSheet,

  Image,

  TouchableOpacity,

  SafeAreaView,

  StatusBar,

  ScrollView,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderMetricCircle = (icon, value, label) => (

    <View style={styles.metricCircle}>

      <Image source={icon} style={styles.metricIcon} />

      <Text style={styles.metricValue}>{value}</Text>

      <Text style={styles.metricLabel}>{label}</Text>

    </View>

  );



  const renderActivityCard = (icon, title, subtitle, hasAddButton = false) => (

    <View style={styles.activityCard}>

      <View style={styles.activityIconContainer}>

        <Image source={icon} style={styles.activityIcon} />

      </View>

      <View style={styles.activityInfo}>

        <Text style={styles.activityTitle}>{title}</Text>

        <Text style={styles.activitySubtitle}>{subtitle}</Text>

      </View>

      {hasAddButton && (

        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>+</Text>

        </TouchableOpacity>

      )}

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>fitbit</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EditHome')}>

          <Text style={styles.editButton}>编辑</Text>

        </TouchableOpacity>

      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.dateTitle}>今天</Text>

        <View style={styles.metricsContainer}>

          {renderMetricCircle(require('../assets/snack-icon.png'), '0', '步')}

          {renderMetricCircle(require('../assets/snack-icon.png'), '0', '公里')}

          {renderMetricCircle(require('../assets/snack-icon.png'), '12', '卡')}

        </View>

        {renderActivityCard(require('../assets/snack-icon.png'), '追踪您的正念', '本周剩5天')}

        {renderActivityCard(require('../assets/snack-icon.png'), '追踪锻炼情况', '本周剩5天', true)}

        {renderActivityCard(require('../assets/snack-icon.png'), '经期健康', '记录与趋势', true)}

      </ScrollView>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discovery')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>发现</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>今天</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Friends')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>好友</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Premium')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Premium</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  messageIcon: {

    width: 24,

    height: 24,

  },

  editButton: {

    color: '#4a90e2',

    fontSize: 16,

  },

  content: {

    padding: 16,

  },

  dateTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  metricsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 24,

  },

  metricCircle: {

    alignItems: 'center',

  },

  metricIcon: {

    width: 40,

    height: 40,

    marginBottom: 8,

  },

  metricValue: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  metricLabel: {

    fontSize: 14,

    color: '#666',

  },

  activityCard: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f5f5f5',

    borderRadius: 8,

    padding: 16,

    marginBottom: 16,

  },

  activityIconContainer: {

    backgroundColor: '#fff',

    borderRadius: 20,

    padding: 8,

    marginRight: 16,

  },

  activityIcon: {

    width: 24,

    height: 24,

  },

  activityInfo: {

    flex: 1,

  },

  activityTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  activitySubtitle: {

    fontSize: 14,

    color: '#666',

  },

  addButton: {

    backgroundColor: '#4a90e2',

    borderRadius: 12,

    width: 24,

    height: 24,

    justifyContent: 'center',

    alignItems: 'center',

  },

  addButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#4a90e2',

  },

  activeTabIcon: {

    tintColor: '#4a90e2',

  },

  activeTabText: {

    color: '#4a90e2',

  },

});



export default HomeScreen;