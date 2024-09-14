import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>丁香医生</Text>
        <Text style={styles.subtitle}>三甲医生 双重审核 专业甄选</Text>
        <Icon name="mail-outline" size={24} color="#000" style={styles.icon} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="search" size={20} color="#000" />
          <TextInput
            style={styles.searchInput}
            placeholder="甲流发烧几天"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity>
            <Text style={styles.searchButton}>搜索</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tagContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['每日辟谣', '免费导诊', '痔疮', '甲状腺结节', '荨麻疹', '痛风'].map((tag, index) => (
              <TouchableOpacity key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        {[
          { icon: 'chatbox', label: '问医生', description: '全国三甲医生' },
          { icon: 'medkit', label: '查疾病', description: '权威疾病百科' },
          { icon: 'medkit-outline', label: '查药品', description: '7万药品说明书' }
        ].map((card, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardIcon}>
              <Icon name={card.icon} size={40} color="#fff" />
            </View>
            <Text>{card.label}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.additionalContainer}>
        <TouchableOpacity style={styles.additionalCard}>
          <Text style={styles.additionalText}>免费导诊</Text>
          <Text style={styles.additionalDescription}>描述问题，精准推荐医生</Text>
          <Text style={styles.additionalTime}>24 小时在线</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.doctorImage} />
          <TouchableOpacity style={styles.consultButton}>
            <Text style={styles.consultButtonText}>立即咨询</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.additionalCard}>
          <Text style={styles.additionalText}>视频问诊</Text>
          <Text style={styles.additionalDescription}>面对面更安心</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.additionalCard}>
          <Text style={styles.additionalText}>新人义诊</Text>
          <Text style={styles.additionalDescription}>9.9元起问医生</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  icon: {
    marginLeft: 'auto',
  },
  searchContainer: {
    padding: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#000',
  },
  searchButton: {
    color: '#7b61ff',
    fontWeight: 'bold',
  },
  tagContainer: {
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  card: {
    alignItems: 'center',
    padding: 16,
  },
  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#a29bfe',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 10,
    color: '#666',
  },
  additionalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  additionalCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '48%',
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  additionalText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  additionalDescription: {
    fontSize: 12,
    color: '#666',
  },
  additionalTime: {
    fontSize: 10,
    color: '#aaa',
    marginTop: 4,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 16,
  },
  consultButton: {
    backgroundColor: '#7b61ff',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 8,
  },
  consultButtonText: {
    color: '#fff',
  },
});

export default HomeScreen;