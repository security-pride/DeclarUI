import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiseaseDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerText}>健康百科</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="search" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="share-social-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tagContainer}>
        <Text style={styles.tag}>口腔溃疡</Text>
        <Text style={styles.subTag}>就诊科室：口腔科</Text>
      </View>

      <View style={styles.authorsContainer}>
        <View style={styles.author}>
          <Image source={require('../assets/snack-icon.png')} style={styles.authorImage} />
          <View>
            <Text style={styles.authorName}>苗冬青</Text>
            <Text style={styles.authorTitle}>词条作者</Text>
            <Text style={styles.authorAffiliation}>东海县人民医院口腔...</Text>
          </View>
        </View>
        <View style={styles.author}>
          <Image source={require('../assets/snack-icon.png')} style={styles.authorImage} />
          <View>
            <Text style={styles.authorName}>李旭</Text>
            <Text style={styles.authorTitle}>审核专家</Text>
            <Text style={styles.authorAffiliation}>复旦大学附属口腔医...</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>简介</Text>
        <Text style={styles.tab}>症状</Text>
        <Text style={styles.tab}>病因</Text>
        <Text style={styles.tab}>诊断</Text>
        <Text style={styles.tab}>治疗</Text>
        <Text style={styles.tab}>生活</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>简介</Text>
        <Text style={styles.sectionDescription}>OVERVIEW</Text>
        <Text style={styles.sectionBody}>
          口腔溃疡又称口腔黏膜溃疡，俗称「口疮」，是指在舌、唇内侧、牙龈、颊黏膜、腭等口腔黏膜的上皮完整性发生连续性缺损或破坏，因表层坏死脱落而形成了凹陷[1]。
        </Text>
        <Text style={styles.sectionBody}>
          一般情况下，口腔溃疡都有明显的疼痛感，常见的是伴有烧灼感的疼痛。溃疡比较大时痛感更加强烈，说话、吃饭等会使得溃疡的疼痛感......
        </Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerMenuItem}>
          <Icon name="list-outline" size={24} />
          <Text>目录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerMenuItem}>
          <Icon name="chatbubble-ellipses-outline" size={24} />
          <Text>评价反馈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerMenuItem}>
          <Icon name="star-outline" size={24} />
          <Text>收藏</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
  tagContainer: {
    alignItems: 'center',
    padding: 16,
  },
  tag: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTag: {
    marginTop: 4,
    fontSize: 14,
    color: '#777',
  },
  authorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    paddingVertical: 16,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  authorName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  authorTitle: {
    fontSize: 12,
    color: '#ff9900',
  },
  authorAffiliation: {
    fontSize: 10,
    color: '#777',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    fontSize: 14,
    color: '#777',
  },
  activeTab: {
    color: '#6200ee',
    borderBottomWidth: 2,
    borderBottomColor: '#6200ee',
  },
  content: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#6200ee',
    marginBottom: 16,
  },
  sectionBody: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerMenuItem: {
    alignItems: 'center',
  },
});

export default DiseaseDetailScreen;