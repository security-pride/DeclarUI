import React from 'react';

import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const handleSearch = () => {

    navigation.navigate('Search');

  };



  const handleConsultation = () => {

    // Implement consultation logic

  };



  const handleDiseaseCheck = () => {

    navigation.navigate('DiseaseDetail');

  };



  const handleMedicineCheck = () => {

    navigation.navigate('SearchMedicineDisease');

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>丁香医生</Text>

        <Text style={styles.subtitle}>三甲医生 双重审核 专业循证 ></Text>

        <TouchableOpacity onPress={handleSearch} style={styles.searchBar}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <Text style={styles.searchPlaceholder}>甲流发烧几天</Text>

          <Text style={styles.searchButton}>搜索</Text>

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickAccessContainer}>

        <TouchableOpacity style={styles.quickAccessItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />

          <Text style={styles.quickAccessText}>每日辟谣</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAccessItem}>

          <Text style={styles.quickAccessText}>免费导诊</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAccessItem}>

          <Text style={styles.quickAccessText}>痔疮</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAccessItem}>

          <Text style={styles.quickAccessText}>甲状腺结节</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAccessItem}>

          <Text style={styles.quickAccessText}>荨麻疹</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.quickAccessItem}>

          <Text style={styles.quickAccessText}>痛风</Text>

        </TouchableOpacity>

      </ScrollView>



      <View style={styles.mainOptionsContainer}>

        <TouchableOpacity style={styles.mainOption} onPress={handleConsultation}>

          <Image source={require('../assets/snack-icon.png')} style={styles.mainOptionIcon} />

          <Text style={styles.mainOptionTitle}>问医生</Text>

          <Text style={styles.mainOptionSubtitle}>全国三甲医生</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.mainOption} onPress={handleDiseaseCheck}>

          <Image source={require('../assets/snack-icon.png')} style={styles.mainOptionIcon} />

          <Text style={styles.mainOptionTitle}>查疾病</Text>

          <Text style={styles.mainOptionSubtitle}>权威疾病百科</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.mainOption} onPress={handleMedicineCheck}>

          <Image source={require('../assets/snack-icon.png')} style={styles.mainOptionIcon} />

          <Text style={styles.mainOptionTitle}>查药品</Text>

          <Text style={styles.mainOptionSubtitle}>7万药品说明书</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.consultationOptionsContainer}>

        <TouchableOpacity style={styles.consultationOption}>

          <View>

            <Text style={styles.consultationOptionTitle}>免费导诊</Text>

            <Text style={styles.consultationOptionSubtitle}>描述问题，精准推荐医生</Text>

            <Text style={styles.consultationOptionStatus}>24小时在线</Text>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.consultationImage} />

          <TouchableOpacity style={styles.consultButton}>

            <Text style={styles.consultButtonText}>立即咨询</Text>

          </TouchableOpacity>

        </TouchableOpacity>

        <TouchableOpacity style={styles.consultationOption}>

          <View>

            <Text style={styles.consultationOptionTitle}>视频问诊</Text>

            <Text style={styles.consultationOptionSubtitle}>面对面更安心</Text>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.videoIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.consultationOption}>

          <View>

            <Text style={styles.consultationOptionTitle}>新人义诊</Text>

            <Text style={styles.consultationOptionSubtitle}>9.9元起问医生</Text>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.departmentsContainer}>

        <TouchableOpacity style={styles.department}>

          <Image source={require('../assets/snack-icon.png')} style={styles.departmentIcon} />

          <Text style={styles.departmentText}>皮肤科</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.department}>

          <Image source={require('../assets/snack-icon.png')} style={styles.departmentIcon} />

          <Text style={styles.departmentText}>儿科</Text>

          <View style={styles.badge}>

            <Text style={styles.badgeText}>鼠疫</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.department}>

          <Image source={require('../assets/snack-icon.png')} style={styles.departmentIcon} />

          <Text style={styles.departmentText}>妇产科</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.department}>

          <Image source={require('../assets/snack-icon.png')} style={styles.departmentIcon} />

          <Text style={styles.departmentText}>消化内科</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.department}>

          <Image source={require('../assets/snack-icon.png')} style={styles.departmentIcon} />

          <Text style={styles.departmentText}>更多科室</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.healthTipContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />

        <View>

          <Text style={styles.healthTipTitle}>缓解痛风的一个小习惯，要坚持</Text>

          <Text style={styles.healthTipSubtitle}>健康日历 | 2.6万人查看</Text>

        </View>

        <TouchableOpacity style={styles.learnMoreButton}>

          <Text style={styles.learnMoreButtonText}>去了解</Text>

        </TouchableOpacity>

      </TouchableOpacity>



      <View style={styles.eyeTestContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.userAvatar} />

        <Text style={styles.eyeTestText}>飞行员的眼力测试图，你能看到几个数字？</Text>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    backgroundColor: '#FFFFFF',

    padding: 15,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  subtitle: {

    fontSize: 12,

    color: '#666666',

    marginTop: 5,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    marginTop: 10,

    padding: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchPlaceholder: {

    flex: 1,

    color: '#999999',

  },

  searchButton: {

    color: '#4A90E2',

    fontWeight: 'bold',

  },

  quickAccessContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  quickAccessItem: {

    alignItems: 'center',

    marginHorizontal: 10,

  },

  quickAccessIcon: {

    width: 24,

    height: 24,

  },

  quickAccessText: {

    fontSize: 12,

    marginTop: 5,

  },

  mainOptionsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    paddingVertical: 15,

    marginTop: 10,

  },

  mainOption: {

    alignItems: 'center',

  },

  mainOptionIcon: {

    width: 40,

    height: 40,

  },

  mainOptionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 5,

  },

  mainOptionSubtitle: {

    fontSize: 12,

    color: '#666666',

  },

  consultationOptionsContainer: {

    backgroundColor: '#FFFFFF',

    marginTop: 10,

    padding: 15,

  },

  consultationOption: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  consultationOptionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  consultationOptionSubtitle: {

    fontSize: 12,

    color: '#666666',

  },

  consultationOptionStatus: {

    fontSize: 12,

    color: '#4A90E2',

  },

  consultationImage: {

    width: 60,

    height: 60,

    marginLeft: 'auto',

    marginRight: 10,

  },

  consultButton: {

    backgroundColor: '#4A90E2',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

  },

  consultButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  videoIcon: {

    width: 24,

    height: 24,

    marginLeft: 'auto',

  },

  heartIcon: {

    width: 24,

    height: 24,

    marginLeft: 'auto',

  },

  departmentsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    marginTop: 10,

    padding: 15,

  },

  department: {

    alignItems: 'center',

  },

  departmentIcon: {

    width: 30,

    height: 30,

  },

  departmentText: {

    fontSize: 12,

    marginTop: 5,

  },

  badge: {

    position: 'absolute',

    top: -5,

    right: -15,

    backgroundColor: '#FF6B6B',

    borderRadius: 10,

    paddingHorizontal: 5,

  },

  badgeText: {

    color: '#FFFFFF',

    fontSize: 10,

  },

  healthTipContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    marginTop: 10,

    padding: 15,

  },

  calendarIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  healthTipTitle: {

    fontSize: 14,

    fontWeight: 'bold',

  },

  healthTipSubtitle: {

    fontSize: 12,

    color: '#666666',

  },

  learnMoreButton: {

    backgroundColor: '#4A90E2',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

    marginLeft: 'auto',

  },

  learnMoreButtonText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  eyeTestContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    marginTop: 10,

    padding: 15,

  },

  userAvatar: {

    width: 30,

    height: 30,

    borderRadius: 15,

    marginRight: 10,

  },

  eyeTestText: {

    flex: 1,

    fontSize: 14,

  },

});



export default HomeScreen;