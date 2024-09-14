import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const LessonDetailScreen = () => {

  const navigation = useNavigation();

  const [isSubscribed, setIsSubscribed] = useState(true);



  const toggleSubscribe = () => {

    setIsSubscribed(!isSubscribed);

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.languageToggle}>

          <Text>EN/VN</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.videoPlayer}>

        <TouchableOpacity style={styles.playButton}>

          <Icon name="play-arrow" size={48} color="#FFF" />

        </TouchableOpacity>

      </View>



      <View style={styles.sentenceContainer}>

        <Text style={styles.sentence}>NBD, let's keep going.</Text>

        <Text style={styles.translation}>Không có gì to tát cả, tiếp tục nào.</Text>

        <Text style={styles.explanation}>NBD: (no big deal) không có gì to tát cả.</Text>

      </View>



      <View style={styles.controls}>

        <TouchableOpacity>

          <Icon name="thumb-up" size={24} color="#000" />

          <Text>62</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="thumb-down" size={24} color="#000" />

          <Text>3</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="bookmark" size={24} color="#000" />

          <Text>Bookmark</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="share" size={24} color="#000" />

          <Text>Share</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="more-horiz" size={24} color="#000" />

          <Text>More</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.authorInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.authorImage} />

        <View>

          <Text style={styles.authorName}>Ellen Jacobs</Text>

          <Text style={styles.subscriberCount}>3.7k Subscriber</Text>

        </View>

        <TouchableOpacity style={styles.subscribeButton} onPress={toggleSubscribe}>

          <Text style={styles.subscribeButtonText}>

            {isSubscribed ? 'Subscribed' : 'Subscribe'}

          </Text>

        </TouchableOpacity>

      </View>



      <View style={styles.practiceSection}>

        <Text style={styles.practiceTitle}>Practice Speaking !</Text>

        <Text style={styles.practiceSentence}>It's just a scratch.</Text>

        <Text style={styles.practiceTranslation}>Chỉ xước nhẹ thôi ý mà.</Text>

        <TouchableOpacity style={styles.speakButton}>

          <Icon name="mic" size={24} color="#FFF" />

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  languageToggle: {

    padding: 8,

    backgroundColor: '#F0F0F0',

    borderRadius: 4,

  },

  videoPlayer: {

    height: 200,

    backgroundColor: '#000',

    justifyContent: 'center',

    alignItems: 'center',

  },

  playButton: {

    backgroundColor: 'rgba(255,255,255,0.3)',

    borderRadius: 24,

  },

  sentenceContainer: {

    padding: 16,

  },

  sentence: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  translation: {

    fontSize: 16,

    color: '#666',

    marginTop: 8,

  },

  explanation: {

    fontSize: 14,

    color: '#888',

    marginTop: 8,

  },

  controls: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    padding: 16,

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#E0E0E0',

  },

  authorInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  authorImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  authorName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  subscriberCount: {

    fontSize: 14,

    color: '#666',

  },

  subscribeButton: {

    marginLeft: 'auto',

    backgroundColor: '#FF0000',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 4,

  },

  subscribeButtonText: {

    color: '#FFF',

    fontWeight: 'bold',

  },

  practiceSection: {

    padding: 16,

    backgroundColor: '#F0F0F0',

    margin: 16,

    borderRadius: 8,

  },

  practiceTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  practiceSentence: {

    fontSize: 16,

    marginBottom: 4,

  },

  practiceTranslation: {

    fontSize: 14,

    color: '#666',

    marginBottom: 12,

  },

  speakButton: {

    backgroundColor: '#4CAF50',

    width: 48,

    height: 48,

    borderRadius: 24,

    justifyContent: 'center',

    alignItems: 'center',

    alignSelf: 'center',

  },

});



export default LessonDetailScreen;