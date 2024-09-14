import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  TouchableOpacity,

  Image,

  SafeAreaView,

  StatusBar,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const FindFriendScreen = () => {

  const navigation = useNavigation();

  const [selectedMethod, setSelectedMethod] = useState('通讯录');



  const renderMethodButton = (method, icon) => (

    <TouchableOpacity

      style={[

        styles.methodButton,

        selectedMethod === method && styles.selectedMethodButton,

      ]}

      onPress={() => setSelectedMethod(method)}

    >

      <Image source={icon} style={styles.methodIcon} />

      <Text style={styles.methodText}>{method}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.headerTitle}>寻找朋友</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.headerButton}>完成</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.methodsContainer}>

        {renderMethodButton('通讯录', require('../assets/snack-icon.png'))}

        {renderMethodButton('电子邮箱', require('../assets/snack-icon.png'))}

        {renderMethodButton('Username', require('../assets/snack-icon.png'))}

      </View>

      <View style={styles.contentContainer}>

        <Text style={styles.contentTitle}>利用您的电话号码查找好友！</Text>

        <Text style={styles.contentDescription}>

          输入您的电话号码，从您的联系人列表中添加好友。

        </Text>

      </View>

      <TouchableOpacity style={styles.connectButton}>

        <Text style={styles.connectButtonText}>连接通讯录</Text>

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#4a90e2',

  },

  headerButton: {

    fontSize: 16,

    color: '#4a90e2',

  },

  methodsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  methodButton: {

    alignItems: 'center',

    padding: 8,

  },

  selectedMethodButton: {

    borderBottomWidth: 2,

    borderBottomColor: '#4a90e2',

  },

  methodIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  methodText: {

    fontSize: 14,

    color: '#333',

  },

  contentContainer: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 16,

  },

  contentTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 16,

  },

  contentDescription: {

    fontSize: 16,

    textAlign: 'center',

    color: '#666',

  },

  connectButton: {

    backgroundColor: '#ff4081',

    padding: 16,

    alignItems: 'center',

    marginHorizontal: 16,

    marginBottom: 32,

    borderRadius: 8,

  },

  connectButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default FindFriendScreen;