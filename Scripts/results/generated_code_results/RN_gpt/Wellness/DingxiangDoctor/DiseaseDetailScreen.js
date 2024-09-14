import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DiseaseDetailScreen = () => {
  const navigation = useNavigation();

  const handleSearchMedicineDisease = () => {
    navigation.navigate('SearchMedicineDisease');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>
          三甲医生专业编审·丁香医生官方出品
        </Text>
      </View>
      <Text style={styles.title}>口腔溃疡</Text>
      <Text style={styles.department}>就诊科室：口腔科</Text>
      <View style={styles.profileContainer}>
        <View style={styles.expert}>
          <Image source={require('../assets/snack-icon.png')} style={styles.expertIcon} />
          <Text style={styles.expertName}>苗冬青</Text>
          <Text style={styles.expertRole}>词条作者</Text>
          <Text style={styles.expertHospital}>东海县人民医院口腔...</Text>
        </View>
        <View style={styles.expert}>
          <Image source={require('../assets/snack-icon.png')} style={styles.expertIcon} />
          <Text style={styles.expertName}>李恒</Text>
          <Text style={styles.expertRole}>审核专家</Text>
          <Text style={styles.expertHospital}>复旦大学附属口腔医院</Text>
        </View>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tab}>简介</Text>
        <Text style={styles.tab}>症状</Text>
        <Text style={styles.tab}>病因</Text>
        <Text style={styles.tab}>诊断</Text>
        <Text style={styles.tab}>治疗</Text>
        <Text style={styles.tab}>生活</Text>
      </View>
      <Text style={styles.sectionTitle}>简介</Text>
      <Text style={styles.overview}>OVERVIEW</Text>
      <View style={styles.line} />
      <Text style={styles.heading}>口腔溃疡是什么？</Text>
      <Text style={styles.description}>
        口腔溃疡又称口腔黏膜溃疡，俗称「口疮」，是指在舌、唇内侧、牙龈、颊黏膜、腭等口腔黏膜的上皮完整性发生连续性缺损或破坏，
        因表层坏死脱落而形成了凹陷。
      </Text>
      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.doctorProfile}>
        <Text style={styles.specialConsultation}>特惠问诊</Text>
      </ImageBackground>
      <View style={styles.bottomNav}>
        <Pressable style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon}/>
          <Text style={styles.navText}>目录</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon}/>
          <Text style={styles.navText}>评价反馈</Text>
        </Pressable>
        <Pressable style={styles.navItem} onPress={handleSearchMedicineDisease}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon}/>
          <Text style={styles.navText}>收藏</Text>
        </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#efe',
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  department: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  expert: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
  },
  expertIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  expertName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  expertRole: {
    fontSize: 10,
    color: '#888',
  },
  expertHospital: {
    fontSize: 10,
    color: '#aaa',
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingTop: 20,
  },
  tab: {
    fontSize: 16,
    color: '#444',
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  overview: {
    fontSize: 12,
    color: '#888',
    paddingHorizontal: 10,
  },
  line: {
    marginHorizontal: 10,
    height: 1,
    backgroundColor: '#ddd',
    marginTop: 10,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 10,
    lineHeight: 22,
    marginTop: 10,
  },
  doctorProfile: {
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialConsultation: {
    fontSize: 14,
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
  },
});

export default DiseaseDetailScreen;