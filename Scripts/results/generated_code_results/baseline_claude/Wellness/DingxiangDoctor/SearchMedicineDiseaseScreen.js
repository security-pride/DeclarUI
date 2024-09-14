import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchMedicineDiseaseScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();



  const handleSearch = () => {

    // Implement search functionality

  };



  const navigateToPage = (pageName) => {

    navigation.navigate(pageName);

  };



  const recentTopics = [

    { title: '登革热防范手册', subtitle: '蚊虫叮咬传播，注意预防', icon: require('../assets/snack-icon.png'), color: '#FFA07A' },

    { title: '了解左氧氟沙星', subtitle: '使用抗生素，务必遵医嘱', icon: require('../assets/snack-icon.png'), color: '#87CEFA' },

    { title: '流感应对手册', subtitle: '流感高发，助你科学应对', icon: require('../assets/snack-icon.png'), color: '#98FB98' },

    { title: '了解司美格鲁肽', subtitle: '合理用药，健康科学减肥', icon: require('../assets/snack-icon.png'), color: '#DDA0DD' },

  ];



  const commonDiseases = [

    { name: '痔疮', icon: require('../assets/snack-icon.png') },

    { name: '湿疹', icon: require('../assets/snack-icon.png') },

    { name: '带状疱疹', icon: require('../assets/snack-icon.png') },

    { name: '口腔溃疡', icon: require('../assets/snack-icon.png') },

    { name: '足癣', icon: require('../assets/snack-icon.png') },

    { name: '高血压', icon: require('../assets/snack-icon.png') },

    { name: '糖尿病', icon: require('../assets/snack-icon.png') },

    { name: '甲状腺结节', icon: require('../assets/snack-icon.png') },

  ];



  const popularMedicines = [

    { name: '奥司他韦', hot: true },

    { name: '布洛芬混悬液' },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>健康百科</Text>

        <Text style={styles.subtitle}>三甲医生专业编审·丁香医生官方出品 ></Text>

      </View>



      <View style={styles.searchContainer}>

        <View style={styles.searchInputContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="搜一搜：疾病/症状/药品/健康问题"

            value={searchQuery}

            onChangeText={setSearchQuery}

            onSubmitEditing={handleSearch}

          />

        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>

          <Text style={styles.searchButtonText}>搜索</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.section}>

        <Text style={styles.sectionTitle}>近期热点</Text>

        <View style={styles.topicsGrid}>

          {recentTopics.map((topic, index) => (

            <TouchableOpacity

              key={index}

              style={[styles.topicItem, { backgroundColor: topic.color }]}

              onPress={() => navigateToPage('DiseaseDetail')}

            >

              <Image source={topic.icon} style={styles.topicIcon} />

              <View style={styles.topicTextContainer}>

                <Text style={styles.topicTitle}>{topic.title}</Text>

                <Text style={styles.topicSubtitle}>{topic.subtitle}</Text>

              </View>

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <View style={styles.section}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>查疾病</Text>

          <TouchableOpacity onPress={() => navigateToPage('DiseaseList')}>

            <Text style={styles.seeMoreText}>查看更多 ></Text>

          </TouchableOpacity>

        </View>

        <Text style={styles.sectionSubtitle}>疾病/症状全了解</Text>

        <View style={styles.diseasesGrid}>

          {commonDiseases.map((disease, index) => (

            <TouchableOpacity

              key={index}

              style={styles.diseaseItem}

              onPress={() => navigateToPage('DiseaseDetail')}

            >

              <Image source={disease.icon} style={styles.diseaseIcon} />

              <Text style={styles.diseaseText}>{disease.name}</Text>

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <View style={styles.section}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>查药品</Text>

          <TouchableOpacity onPress={() => navigateToPage('MedicineList')}>

            <Text style={styles.seeMoreText}>查看更多 ></Text>

          </TouchableOpacity>

        </View>

        <Text style={styles.sectionSubtitle}>药品说明随手查</Text>

        <View style={styles.medicinesContainer}>

          {popularMedicines.map((medicine, index) => (

            <TouchableOpacity

              key={index}

              style={styles.medicineItem}

              onPress={() => navigateToPage('MedicineDetail')}

            >

              <Text style={styles.medicineText}>{medicine.name}</Text>

              {medicine.hot && <Text style={styles.hotLabel}>HOT</Text>}

              <Text style={styles.arrowIcon}>></Text>

            </TouchableOpacity>

          ))}

        </View>

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

    padding: 15,

    backgroundColor: '#8A2BE2',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  subtitle: {

    fontSize: 14,

    color: '#FFFFFF',

    marginTop: 5,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFFFFF',

  },

  searchInputContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    paddingHorizontal: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  searchButton: {

    marginLeft: 10,

    paddingVertical: 8,

    paddingHorizontal: 15,

    backgroundColor: '#8A2BE2',

    borderRadius: 20,

  },

  searchButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  section: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  sectionSubtitle: {

    fontSize: 14,

    color: '#666666',

    marginTop: 5,

  },

  seeMoreText: {

    fontSize: 14,

    color: '#8A2BE2',

  },

  topicsGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginTop: 10,

  },

  topicItem: {

    width: '48%',

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderRadius: 10,

    marginBottom: 10,

  },

  topicIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  topicTextContainer: {

    flex: 1,

  },

  topicTitle: {

    color: '#FFFFFF',

    fontWeight: 'bold',

    fontSize: 14,

  },

  topicSubtitle: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  diseasesGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginTop: 10,

  },

  diseaseItem: {

    width: '25%',

    alignItems: 'center',

    marginBottom: 15,

  },

  diseaseIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  diseaseText: {

    fontSize: 12,

    textAlign: 'center',

  },

  medicinesContainer: {

    marginTop: 10,

  },

  medicineItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  medicineText: {

    flex: 1,

    fontSize: 16,

  },

  hotLabel: {

    fontSize: 12,

    color: '#FF4500',

    backgroundColor: '#FFE4B5',

    paddingHorizontal: 5,

    paddingVertical: 2,

    borderRadius: 10,

    marginRight: 10,

  },

  arrowIcon: {

    fontSize: 18,

    color: '#666666',

  },

});



export default SearchMedicineDiseaseScreen;