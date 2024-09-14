import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const notifications = [

  {

    id: '1',

    type: 'purchase',

    title: 'Purchase Completed!',

    message: 'You already bought a class from Jerremy Mamika. Enjoy the class! 🎉',

    time: '2 m ago',

    icon: 'cart-outline',

  },

  {

    id: '2',

    type: 'message',

    title: 'Jerremy Send You a Message',

    message: 'Hi Magdalena, I've seen your challenge...',

    time: '2 m ago',

    image: require('../assets/snack-icon.png'),

    action: 'Reply the message',

  },

  {

    id: '3',

    type: 'sale',

    title: 'Ramadhan Flash Sale!',

    message: 'Get 20% discount for first transaction in this month!🤩😍',

    time: '2 m ago',

    icon: 'flash-outline',

  },

  {

    id: '4',

    type: 'challenge',

    title: 'Challange Completed',

    message: 'Congratulation! you have completed course by Jerremy Mamika',

    time: '10 m ago',

    icon: 'trophy-outline',

  },

];



const NotificationScreen = () => {

  const navigation = useNavigation();



  const renderNotificationItem = ({ item }) => (

    <TouchableOpacity style={styles.notificationItem}>

      {item.image ? (

        <Image source={item.image} style={styles.notificationImage} />

      ) : (

        <View style={styles.notificationIcon}>

          <Icon name={item.icon} size={24} color="#6C5CE7" />

        </View>

      )}

      <View style={styles.notificationContent}>

        <Text style={styles.notificationTitle}>{item.title}</Text>

        <Text style={styles.notificationMessage}>{item.message}</Text>

        {item.action && (

          <TouchableOpacity>

            <Text style={styles.notificationAction}>{item.action}</Text>

          </TouchableOpacity>

        )}

      </View>

      <Text style={styles.notificationTime}>{item.time}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notification</Text>

        <TouchableOpacity>

          <Icon name="settings-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.content}>

        <Text style={styles.sectionTitle}>Recent</Text>

        <FlatList

          data={notifications}

          renderItem={renderNotificationItem}

          keyExtractor={(item) => item.id}

          showsVerticalScrollIndicator={false}

        />

      </View>

    </SafeAreaView>

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

    paddingHorizontal: 16,

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

    paddingHorizontal: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginVertical: 16,

  },

  notificationItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  notificationIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#E8E8FD',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,

  },

  notificationImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  notificationContent: {

    flex: 1,

  },

  notificationTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  notificationMessage: {

    fontSize: 14,

    color: '#666666',

    marginBottom: 4,

  },

  notificationAction: {

    fontSize: 14,

    color: '#6C5CE7',

    fontWeight: '500',

  },

  notificationTime: {

    fontSize: 12,

    color: '#999999',

  },

});



export default NotificationScreen;