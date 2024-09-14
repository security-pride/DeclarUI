import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Notice = () => {
const navigation = useNavigation();
const [breakingNews, setBreakingNews] = useState(true);
const [hotNews, setHotNews] = useState(true);
const [localNews, setLocalNews] = useState(true);
const [frequency, setFrequency] = useState('知情');
const handleConfirm = () => {
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<Text style={styles.time}>8:35</Text>
  <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.alarmIcon} />
  
  <Text style={styles.title}>立即解锁新闻提醒!</Text>
  
  <Text style={styles.description}>
    一键启用通知，永远不会错过突发新闻。从本地警报到重大全球事件，我们为您提供全方位服务。
  </Text>
  
  <View style={styles.switchContainer}>
    <Text style={styles.switchLabel}>突发新闻</Text>
    <Switch
      value={breakingNews}
      onValueChange={setBreakingNews}
      trackColor={{ false: "#767577", true: "#f4511e" }}
      thumbColor={breakingNews ? "#f4511e" : "#f4f3f4"}
    />
  </View>
  
  <View style={styles.switchContainer}>
    <Text style={styles.switchLabel}>热门新闻</Text>
    <Switch
      value={hotNews}
      onValueChange={setHotNews}
      trackColor={{ false: "#767577", true: "#f4511e" }}
      thumbColor={hotNews ? "#f4511e" : "#f4f3f4"}
    />
  </View>
  
  <View style={styles.switchContainer}>
    <Text style={styles.switchLabel}>本地新闻</Text>
    <Switch
      value={localNews}
      onValueChange={setLocalNews}
      trackColor={{ false: "#767577", true: "#f4511e" }}
      thumbColor={localNews ? "#f4511e" : "#f4f3f4"}
    />
  </View>
  
  <View style={styles.frequencyContainer}>
    <Text style={styles.frequencyLabel}>频率</Text>
    <View style={styles.frequencyButtons}>
      <TouchableOpacity
        style={[styles.frequencyButton, frequency === '策划' && styles.activeFrequencyButton]}
        onPress={() => setFrequency('策划')}
      >
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.frequencyIcon} />
        <Text style={styles.frequencyButtonText}>策划</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.frequencyButton, frequency === '知情' && styles.activeFrequencyButton]}
        onPress={() => setFrequency('知情')}
      >
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.frequencyIcon} />
        <Text style={styles.frequencyButtonText}>知情</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.frequencyButton, frequency === '即时' && styles.activeFrequencyButton]}
        onPress={() => setFrequency('即时')}
      >
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.frequencyIcon} />
        <Text style={styles.frequencyButtonText}>即时</Text>
      </TouchableOpacity>
    </View>
  </View>
  
  <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
    <Text style={styles.confirmButtonText}>我确定我想要</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
    <Text style={styles.cancelButtonText}>暂时不需要</Text>
  </TouchableOpacity>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
padding: 20,
},
time: {
position: 'absolute',
top: 10,
left: 20,
fontSize: 16,
},
alarmIcon: {
width: 100,
height: 100,
alignSelf: 'center',
marginTop: 50,
},
title: {
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
marginTop: 20,
},
description: {
fontSize: 16,
textAlign: 'center',
marginTop: 20,
marginBottom: 30,
},
switchContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
switchLabel: {
fontSize: 18,
},
frequencyContainer: {
marginTop: 30,
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
flex: 1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
padding: 10,
borderWidth: 1,
borderColor: '#CCCCCC',
borderRadius: 5,
marginHorizontal: 5,
},
activeFrequencyButton: {
backgroundColor: '#f4511e',
},
frequencyIcon: {
width: 20,
height: 20,
marginRight: 5,
},
frequencyButtonText: {
fontSize: 16,
},
confirmButton: {
backgroundColor: '#f4511e',
padding: 15,
borderRadius: 5,
marginTop: 30,
},
confirmButtonText: {
color: '#FFFFFF',
fontSize: 18,
textAlign: 'center',
},
cancelButton: {
marginTop: 20,
},
cancelButtonText: {
color: '#666666',
fontSize: 16,
textAlign: 'center',
},
});
export default Notice;