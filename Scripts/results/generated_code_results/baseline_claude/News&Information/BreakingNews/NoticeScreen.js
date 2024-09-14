import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const NoticeScreen = () => {

  const navigation = useNavigation();

  const [breakingNews, setBreakingNews] = useState(true);

  const [hotNews, setHotNews] = useState(true);

  const [localNews, setLocalNews] = useState(true);

  const [frequency, setFrequency] = useState('知情');



  const toggleSwitch = (setter) => (value) => setter(value);



  const handleFrequencyChange = (newFrequency) => setFrequency(newFrequency);



  const handleConfirm = () => {

    // Implement confirmation logic here

    console.log('Settings confirmed');

    navigation.goBack();

  };



  const handleSkip = () => {

    navigation.goBack();

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <Image source={require('../assets/snack-icon.png')} style={styles.alarmIcon} />

        

        <Text style={styles.title}>立即解锁新闻提醒！</Text>

        <Text style={styles.description}>

          一键启用通知，永远不会错过突发新闻。从本地警报到重大全球事件，我们为您提供全方位服务。

        </Text>



        <View style={styles.switchContainer}>

          <View style={styles.switchItem}>

            <Text style={styles.switchLabel}>突发新闻</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#f4f3f4" }}

              thumbColor={breakingNews ? "#f5333f" : "#f4f3f4"}

              onValueChange={toggleSwitch(setBreakingNews)}

              value={breakingNews}

            />

          </View>

          <View style={styles.switchItem}>

            <Text style={styles.switchLabel}>热门新闻</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#f4f3f4" }}

              thumbColor={hotNews ? "#f5333f" : "#f4f3f4"}

              onValueChange={toggleSwitch(setHotNews)}

              value={hotNews}

            />

          </View>

          <View style={styles.switchItem}>

            <Text style={styles.switchLabel}>本地新闻</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#f4f3f4" }}

              thumbColor={localNews ? "#f5333f" : "#f4f3f4"}

              onValueChange={toggleSwitch(setLocalNews)}

              value={localNews}

            />

          </View>

        </View>



        <View style={styles.frequencyContainer}>

          <Text style={styles.frequencyLabel}>频率</Text>

          <View style={styles.frequencyButtons}>

            <TouchableOpacity

              style={[styles.frequencyButton, frequency === '策划' && styles.frequencyButtonActive]}

              onPress={() => handleFrequencyChange('策划')}

            >

              <Image source={require('../assets/snack-icon.png')} style={styles.frequencyIcon} />

              <Text style={[styles.frequencyButtonText, frequency === '策划' && styles.frequencyButtonTextActive]}>策划</Text>

            </TouchableOpacity>

            <TouchableOpacity

              style={[styles.frequencyButton, frequency === '知情' && styles.frequencyButtonActive]}

              onPress={() => handleFrequencyChange('知情')}

            >

              <Image source={require('../assets/snack-icon.png')} style={styles.frequencyIcon} />

              <Text style={[styles.frequencyButtonText, frequency === '知情' && styles.frequencyButtonTextActive]}>知情</Text>

            </TouchableOpacity>

            <TouchableOpacity

              style={[styles.frequencyButton, frequency === '即时' && styles.frequencyButtonActive]}

              onPress={() => handleFrequencyChange('即时')}

            >

              <Image source={require('../assets/snack-icon.png')} style={styles.frequencyIcon} />

              <Text style={[styles.frequencyButtonText, frequency === '即时' && styles.frequencyButtonTextActive]}>即时</Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>

          <Text style={styles.confirmButtonText}>我确定我想要</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip}>

          <Text style={styles.skipText}>暂时不需要</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  content: {

    flex: 1,

    padding: 20,

    alignItems: 'center',

  },

  alarmIcon: {

    width: 80,

    height: 80,

    marginBottom: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

    textAlign: 'center',

  },

  description: {

    fontSize: 16,

    textAlign: 'center',

    marginBottom: 30,

    color: '#666',

  },

  switchContainer: {

    width: '100%',

    marginBottom: 30,

  },

  switchItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 15,

  },

  switchLabel: {

    fontSize: 18,

  },

  frequencyContainer: {

    width: '100%',

  },

  frequencyLabel: {

    fontSize: 18,

    marginBottom: 10,

  },

  frequencyButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  frequencyButton: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 10,

    paddingHorizontal: 15,

    borderRadius: 20,

    backgroundColor: '#F0F0F0',

  },

  frequencyButtonActive: {

    backgroundColor: '#f5333f',

  },

  frequencyIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  frequencyButtonText: {

    fontSize: 16,

    color: '#333',

  },

  frequencyButtonTextActive: {

    color: '#FFFFFF',

  },

  footer: {

    padding: 20,

  },

  confirmButton: {

    backgroundColor: '#f5333f',

    paddingVertical: 15,

    borderRadius: 10,

    alignItems: 'center',

    marginBottom: 10,

  },

  confirmButtonText: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  skipText: {

    textAlign: 'center',

    color: '#666',

    fontSize: 16,

  },

});



export default NoticeScreen;