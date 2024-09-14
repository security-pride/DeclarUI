import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SendScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEnableContactsPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress}>
          <Icon name="arrow-back" size={24} color="black" />
        </Pressable>
        <TextInput
          style={styles.searchBar}
          placeholder="姓名、用户名、邮箱地址、手机号码"
        />
        <Icon name="camera-alt" size={24} color="black" />
      </View>
      
      <View style={styles.quickAction}>
        <Icon name="send" size={24} color="blue" />
        <Text style={styles.quickActionText}>
          跨境汇款至银行账户、现金领取点等
        </Text>
      </View>
      
      <Text style={styles.sectionTitle}>建议联系人</Text>
      <View style={styles.contactRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>ZF</Text>
        </View>
        <Text style={styles.contactName}>Fang Zhou</Text>
        <Icon name="info" size={24} color="black" />
      </View>
      
      <Text style={styles.sectionTitle}>您的联系人</Text>
      <View style={styles.contactRow}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.companyLogo}
        />
        <Text style={styles.contactName}>CURVE UK LIMITED</Text>
        <Icon name="info" size={24} color="black" />
      </View>
      
      <View style={styles.contactRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>ZF</Text>
        </View>
        <Text style={styles.contactName}>Fang Zhou</Text>
        <Icon name="info" size={24} color="black" />
      </View>
      
      <Pressable style={styles.enableContactsButton} onPress={handleEnableContactsPress}>
        <Icon name="contacts" size={24} color="blue" />
        <Text style={styles.enableContactsText}>启用您的联系人</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
  },
  quickAction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f4ff',
    borderRadius: 5,
  },
  quickActionText: {
    marginLeft: 10,
    color: '#333',
  },
  sectionTitle: {
    marginVertical: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contactName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  companyLogo: {
    width: 40,
    height: 40,
  },
  enableContactsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  enableContactsText: {
    marginLeft: 10,
    color: 'blue',
  },
});

export default SendScreen;