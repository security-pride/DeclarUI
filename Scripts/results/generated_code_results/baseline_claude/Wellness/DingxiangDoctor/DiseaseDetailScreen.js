import React from 'react';

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const DiseaseDetailScreen = () => {

  const navigation = useNavigation();



  const handleGoBack = () => {

    navigation.goBack();

  };



  const handleSearch = () => {

    navigation.navigate('Search');

  };



  const handleShare = () => {

    // Implement share functionality

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleGoBack}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleSearch}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare}>

          <Image source={require('../assets/snack-icon.png')} style={styles.shareIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.banner}>

        <Text style={styles.bannerText}>健康百科</Text>

        <Text style={styles.bannerSubText}>三甲医生专业编审 · 丁香医生官方出品 ></Text>

      </View>

      <Text style={styles.title}>口腔溃疡</Text>

      <Text style={styles.department}>就诊科室：口腔科</Text>

      <View style={styles.expertContainer}>

        <View style={styles.expertItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.expertIcon} />

          <View>

            <Text style={styles.expertName}>苗冬青</Text>

            <Text style={styles.expertTitle}>词条作者</Text>

            <Text style={styles.expertHospital}>东海县人民医院口腔...</Text>

          </View>

        </View>

        <View style={styles.expertItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.expertIcon} />

          <View>

            <Text style={styles.expertName}>李恒</Text>

            <Text style={styles.expertTitle}>审核专家</Text>

            <Text style={styles.expertHospital}>复旦大学附属口腔医...</Text>

          </View>

        </View>

      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>

        <Text style={[styles.tabItem, styles.activeTab]}>简介</Text>

        <Text style={styles.tabItem}>症状</Text>

        <Text style={styles.tabItem}>病因</Text>

        <Text style={styles.tabItem}>诊断</Text>

        <Text style={styles.tabItem}>治疗</Text>

        <Text style={styles.tabItem}>生活</Text>

      </ScrollView>

      <ScrollView style={styles.content}>

        <Text style={styles.sectionTitle}>口腔溃疡是什么？</Text>

        <Text style={styles.paragraph}>

          口腔溃疡又称口腔黏膜溃疡，俗称「口疮」，是指在舌、唇内侧、牙龈、颊黏膜、腭等口腔黏膜的上皮完整性发生连续性缺损或破坏，因表层坏死脱落而形成了凹陷[1]。

        </Text>

        <Text style={styles.paragraph}>

          一般情况下，口腔溃疡都有明显的疼痛感，最常见的是伴有烧灼感的疼痛。溃疡比较大时，疼痛感更加剧烈，说话、吃饭等会使得溃疡的疼痛感加重，甚至会影响到正常的进食。

        </Text>

      </ScrollView>

      <TouchableOpacity style={styles.consultButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.doctorIcon} />

        <Text style={styles.consultButtonText}>特惠问诊</Text>

      </TouchableOpacity>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  shareIcon: {

    width: 24,

    height: 24,

  },

  banner: {

    backgroundColor: '#8A2BE2',

    padding: 10,

  },

  bannerText: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  bannerSubText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    margin: 10,

  },

  department: {

    fontSize: 14,

    color: '#666666',

    marginLeft: 10,

  },

  expertContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginVertical: 10,

  },

  expertItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  expertIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  expertName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  expertTitle: {

    fontSize: 12,

    color: '#666666',

  },

  expertHospital: {

    fontSize: 12,

    color: '#666666',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  tabItem: {

    paddingHorizontal: 15,

    paddingVertical: 10,

    fontSize: 16,

  },

  activeTab: {

    color: '#8A2BE2',

    borderBottomWidth: 2,

    borderBottomColor: '#8A2BE2',

  },

  content: {

    flex: 1,

    padding: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginVertical: 10,

  },

  paragraph: {

    fontSize: 14,

    lineHeight: 20,

    marginBottom: 10,

  },

  consultButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#8A2BE2',

    padding: 10,

    margin: 10,

    borderRadius: 20,

  },

  doctorIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  consultButtonText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default DiseaseDetailScreen;