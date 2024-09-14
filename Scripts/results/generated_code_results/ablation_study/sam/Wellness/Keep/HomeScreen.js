import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



const HomeScreen = ({ navigation }) => {

  const [activeSection, setActiveSection] = useState('发现');



  const renderQuickAccessButton = (text) => (

    <TouchableOpacity style={styles.quickAccessButton}>

      <Text style={styles.quickAccessText}>{text}</Text>

    </TouchableOpacity>

  );



  const renderContentItem = () => (

    <View style={styles.contentItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.contentImage} />

      <Text style={styles.contentTitle}>急性子狼瘦全身</Text>

      <Text style={styles.contentDescription}>2.9万人练过</Text>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TextInput

          style={styles.searchInput}

          placeholder="心火已燃"

          placeholderTextColor="#999"

        />

        <TouchableOpacity>

          <Icon name="bell" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="envelope" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.sectionTabs}>

        {['关注', '发现', '活动'].map((section) => (

          <TouchableOpacity

            key={section}

            style={[styles.sectionTab, activeSection === section && styles.activeTab]}

            onPress={() => setActiveSection(section)}

          >

            <Text style={[styles.sectionText, activeSection === section && styles.activeText]}>

              {section}

            </Text>

          </TouchableOpacity>

        ))}

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.quickAccess}>

          {renderQuickAccessButton('跟练')}

          {renderQuickAccessButton('同城')}

          {renderQuickAccessButton('心火已燃')}

          {renderQuickAccessButton('城市K车')}

        </View>



        <View style={styles.contentGrid}>

          {renderContentItem()}

          {renderContentItem()}

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        {['首页', '课程', '运动', '商城', '我的'].map((item) => (

          <TouchableOpacity

            key={item}

            style={styles.navItem}

            onPress={() => {

              if (item === '商城') {

                navigation.navigate('Store');

              } else if (item === '我的') {

                navigation.navigate('Profile');

              } else if (item === '运动') {

                navigation.navigate('SearchSports');

              }

            }}

          >

            <Icon name={item === '首页' ? 'home' : item === '课程' ? 'book' : item === '运动' ? 'running' : item === '商城' ? 'shopping-cart' : 'user'} size={24} color={item === '首页' ? '#000' : '#999'} />

            <Text style={[styles.navText, item === '首页' && styles.activeNavText]}>{item}</Text>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  searchInput: {

    flex: 1,

    height: 40,

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 15,

    marginRight: 10,

  },

  sectionTabs: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  sectionTab: {

    flex: 1,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#000',

  },

  sectionText: {

    fontSize: 16,

    color: '#999',

  },

  activeText: {

    color: '#000',

  },

  content: {

    flex: 1,

  },

  quickAccess: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    backgroundColor: '#fff',

  },

  quickAccessButton: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    backgroundColor: '#f0f0f0',

  },

  quickAccessText: {

    fontSize: 14,

  },

  contentGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 10,

  },

  contentItem: {

    width: '48%',

    marginBottom: 10,

    backgroundColor: '#fff',

    borderRadius: 10,

    overflow: 'hidden',

  },

  contentImage: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

  },

  contentTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    padding: 10,

  },

  contentDescription: {

    fontSize: 14,

    color: '#999',

    paddingHorizontal: 10,

    paddingBottom: 10,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#999',

    marginTop: 5,

  },

  activeNavText: {

    color: '#000',

  },

});



export default HomeScreen;