import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ContactItem = ({ item }) => (

  <View style={styles.contactItem}>

    {item.avatar ? (

      <Image source={item.avatar} style={styles.contactAvatar} />

    ) : (

      <View style={[styles.contactAvatar, { backgroundColor: item.color }]}>

        <Text style={styles.avatarText}>{item.initials}</Text>

      </View>

    )}

    <View style={styles.contactInfo}>

      <Text style={styles.contactName}>{item.name}</Text>

    </View>

    <TouchableOpacity style={styles.infoButton}>

      <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />

    </TouchableOpacity>

  </View>

);



const SendScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const contacts = [

    { id: '1', name: 'Fang Zhou', initials: 'ZF', color: '#8A2BE2' },

    { id: '2', name: 'CURVE UK LIMITED', avatar: require('../assets/snack-icon.png') },

    { id: '3', name: 'Fang Zhou', initials: 'ZF', color: '#8A2BE2' },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <View style={styles.searchContainer}>

          <TextInput

            style={styles.searchInput}

            placeholder="姓名、用户名、邮箱地址、手机号码"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

          <TouchableOpacity style={styles.scanButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.scanIcon} />

          </TouchableOpacity>

        </View>

      </View>



      <TouchableOpacity style={styles.bankTransferButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.bankIcon} />

        <Text style={styles.bankTransferText}>跨境汇款至银行账户、现金领取点等</Text>

      </TouchableOpacity>



      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>建议联系人</Text>

      </View>



      <FlatList

        data={contacts}

        renderItem={({ item }) => <ContactItem item={item} />}

        keyExtractor={(item) => item.id}

      />



      <TouchableOpacity style={styles.addContactButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.addIcon} />

        <Text style={styles.addContactText}>启用您的联系人</Text>

      </TouchableOpacity>

    </SafeAreaView>

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

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  searchContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 12,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  scanButton: {

    padding: 8,

  },

  scanIcon: {

    width: 20,

    height: 20,

  },

  bankTransferButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    marginHorizontal: 16,

    marginVertical: 16,

    padding: 16,

    borderRadius: 8,

  },

  bankIcon: {

    width: 24,

    height: 24,

    marginRight: 12,

  },

  bankTransferText: {

    flex: 1,

    fontSize: 16,

  },

  sectionHeader: {

    paddingHorizontal: 16,

    paddingVertical: 8,

    backgroundColor: '#f8f8f8',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  contactItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  contactAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 16,

  },

  avatarText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  contactInfo: {

    flex: 1,

  },

  contactName: {

    fontSize: 16,

  },

  infoButton: {

    padding: 8,

  },

  infoIcon: {

    width: 20,

    height: 20,

  },

  addContactButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 16,

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  addIcon: {

    width: 24,

    height: 24,

    marginRight: 8,

  },

  addContactText: {

    fontSize: 16,

    color: '#0070ba',

  },

});



export default SendScreen;