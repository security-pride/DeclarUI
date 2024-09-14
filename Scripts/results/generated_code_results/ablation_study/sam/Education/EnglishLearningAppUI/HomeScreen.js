import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('NEW FEED');



  const feedItems = [

    {

      author: 'Charlie Herrera',

      content: {

        type: 'lesson',

        title: 'ENGLISH TOURISM',

        subtitle: 'Through the airport security door',

        cta_button: 'LEARN FREE NOW'

      }

    },

    {

      title: 'When get hurt',

      author: 'Ellen Jacobs',

      content: {

        type: 'video',

        duration: '0:17'

      }

    }

  ];



  const renderFeedItem = (item, index) => {

    if (item.content.type === 'lesson') {

      return (

        <TouchableOpacity 

          key={index} 

          style={styles.lessonCard}

          onPress={() => navigation.navigate('LessonDetail')}

        >

          <Text style={styles.lessonTitle}>{item.content.title}</Text>

          <Text style={styles.lessonSubtitle}>{item.content.subtitle}</Text>

          <TouchableOpacity style={styles.learnButton}>

            <Text style={styles.learnButtonText}>{item.content.cta_button}</Text>

          </TouchableOpacity>

        </TouchableOpacity>

      );

    } else if (item.content.type === 'video') {

      return (

        <View key={index} style={styles.videoCard}>

          <Text style={styles.videoTitle}>{item.title}</Text>

          <View style={styles.videoPreview}>

            <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />

            <Text style={styles.videoDuration}>{item.content.duration}</Text>

          </View>

        </View>

      );

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.greeting}>Hi, Steven!</Text>

        <Text style={styles.subtitle}>Learn new sentences right away</Text>

      </View>



      <View style={styles.tabContainer}>

        {['NEW FEED', 'SUBSCRIPTION'].map((tab) => (

          <TouchableOpacity

            key={tab}

            style={[styles.tab, activeTab === tab && styles.activeTab]}

            onPress={() => setActiveTab(tab)}

          >

            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>

          </TouchableOpacity>

        ))}

        <TouchableOpacity style={styles.notificationIcon}>

          <Icon name="notifications" size={24} color="#000" />

          <View style={styles.notificationBadge}>

            <Text style={styles.notificationCount}>3</Text>

          </View>

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.feedContainer}>

        {feedItems.map((item, index) => renderFeedItem(item, index))}

      </ScrollView>



      <View style={styles.bottomNav}>

        {['Home', 'Search', 'Speak', 'Word', 'Profile'].map((item, index) => (

          <TouchableOpacity

            key={index}

            style={styles.navItem}

            onPress={() => {

              if (item === 'Search') navigation.navigate('Search');

              if (item === 'Speak') navigation.navigate('Speak');

            }}

          >

            <Icon name={getIconName(item)} size={24} color={item === 'Home' ? '#007AFF' : '#999'} />

            <Text style={[styles.navText, item === 'Home' && styles.activeNavText]}>{item}</Text>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );

};



const getIconName = (item) => {

  switch (item) {

    case 'Home': return 'home';

    case 'Search': return 'search';

    case 'Speak': return 'mic';

    case 'Word': return 'book';

    case 'Profile': return 'person';

    default: return 'circle';

  }

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    padding: 16,

    backgroundColor: '#FFF',

  },

  greeting: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  subtitle: {

    fontSize: 16,

    color: '#666',

  },

  tabContainer: {

    flexDirection: 'row',

    padding: 16,

    backgroundColor: '#FFF',

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  tab: {

    marginRight: 16,

    paddingBottom: 8,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#007AFF',

  },

  tabText: {

    fontSize: 16,

    color: '#666',

  },

  activeTabText: {

    color: '#007AFF',

    fontWeight: 'bold',

  },

  notificationIcon: {

    position: 'absolute',

    right: 16,

    top: 16,

  },

  notificationBadge: {

    position: 'absolute',

    right: -6,

    top: -6,

    backgroundColor: '#FF3B30',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationCount: {

    color: '#FFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  feedContainer: {

    flex: 1,

  },

  lessonCard: {

    backgroundColor: '#007AFF',

    borderRadius: 8,

    padding: 16,

    margin: 16,

  },

  lessonTitle: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  lessonSubtitle: {

    color: '#FFF',

    fontSize: 14,

    marginTop: 8,

  },

  learnButton: {

    backgroundColor: '#FFF',

    borderRadius: 20,

    paddingVertical: 8,

    paddingHorizontal: 16,

    alignSelf: 'flex-start',

    marginTop: 16,

  },

  learnButtonText: {

    color: '#007AFF',

    fontWeight: 'bold',

  },

  videoCard: {

    backgroundColor: '#FFF',

    borderRadius: 8,

    padding: 16,

    margin: 16,

  },

  videoTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  videoPreview: {

    height: 200,

    backgroundColor: '#E0E0E0',

    borderRadius: 8,

    justifyContent: 'center',

    alignItems: 'center',

  },

  videoThumbnail: {

    width: '100%',

    height: '100%',

    borderRadius: 8,

  },

  videoDuration: {

    position: 'absolute',

    right: 8,

    bottom: 8,

    backgroundColor: 'rgba(0,0,0,0.6)',

    color: '#FFF',

    padding: 4,

    borderRadius: 4,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 16,

    backgroundColor: '#FFF',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#999',

    marginTop: 4,

  },

  activeNavText: {

    color: '#007AFF',

  },

});



export default HomeScreen;