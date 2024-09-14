import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SettingsScreen = () => {

  const navigation = useNavigation();

  const [notificationSound, setNotificationSound] = useState(true);

  const [vibration, setVibration] = useState(true);

  const [imageNotifications, setImageNotifications] = useState(true);



  const toggleSwitch = (setter) => (value) => setter(value);



  const renderMenuItem = (title, icon, onPress) => (

    <TouchableOpacity style={styles.menuItem} onPress={onPress}>

      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />

      <Text style={styles.menuText}>{title}</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>设置</Text>

        </View>



        <View style={styles.profileSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <TouchableOpacity style={styles.registerButton}>

            <Text style={styles.registerButtonText}>注册</Text>

          </TouchableOpacity>

          <Text style={styles.loginText}>登录并加入该社群</Text>

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>内容</Text>

          {renderMenuItem('改变国家', '../assets/snack-icon.png', () => {})}

          {renderMenuItem('话题', '../assets/snack-icon.png', () => {})}

          {renderMenuItem('来源管理', '../assets/snack-icon.png', () => {})}

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>消息</Text>

          <View style={styles.switchItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.switchIcon} />

            <Text style={styles.switchText}>通知声音</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#81b0ff" }}

              thumbColor={notificationSound ? "#f5dd4b" : "#f4f3f4"}

              onValueChange={toggleSwitch(setNotificationSound)}

              value={notificationSound}

            />

          </View>

          <View style={styles.switchItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.switchIcon} />

            <Text style={styles.switchText}>震动提醒</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#81b0ff" }}

              thumbColor={vibration ? "#f5dd4b" : "#f4f3f4"}

              onValueChange={toggleSwitch(setVibration)}

              value={vibration}

            />

          </View>

          <View style={styles.switchItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.switchIcon} />

            <Text style={styles.switchText}>消息带图</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#81b0ff" }}

              thumbColor={imageNotifications ? "#f5dd4b" : "#f4f3f4"}

              onValueChange={toggleSwitch(setImageNotifications)}

              value={imageNotifications}

            />

          </View>

          {renderMenuItem('通知管理', '../assets/snack-icon.png', () => {})}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  profileSection: {

    alignItems: 'center',

    marginVertical: 24,

  },

  profileImage: {

    width: 80,

    height: 80,

    borderRadius: 40,

    marginBottom: 16,

  },

  registerButton: {

    backgroundColor: '#FF3B30',

    paddingVertical: 8,

    paddingHorizontal: 32,

    borderRadius: 20,

    marginBottom: 8,

  },

  registerButtonText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  loginText: {

    color: '#8E8E93',

    fontSize: 14,

  },

  section: {

    marginBottom: 24,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 16,

    marginBottom: 8,

    color: '#8E8E93',

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  menuText: {

    flex: 1,

    fontSize: 16,

  },

  arrowIcon: {

    width: 16,

    height: 16,

  },

  switchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  switchIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  switchText: {

    flex: 1,

    fontSize: 16,

  },

});



export default SettingsScreen;