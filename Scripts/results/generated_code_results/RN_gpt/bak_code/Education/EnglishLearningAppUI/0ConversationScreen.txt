import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ConversationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => {/* Navigation logic to go back */}}>
          <Icon name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>When taking a taxi</Text>
      </View>

      <View style={styles.conversationCard}>
        <Text style={styles.speakerText}>Hey there</Text>
        <Text style={styles.translationText}>Xin chào</Text>
        <Pressable style={styles.repeatButton}>
          <Text style={styles.buttonText}>REPEAT</Text>
          <Icon name="mic-outline" size={24} color="#fff" />
        </Pressable>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      </View>

      <View style={styles.conversationCard}>
        <Text style={styles.speakerText}>Hey,where are you going today?</Text>
        <Text style={styles.translationText}>Chào cô, hôm nay cô sẽ đi đâu</Text>
        <Pressable style={styles.repeatButton}>
          <Text style={styles.buttonText}>REPEAT</Text>
          <Icon name="mic-outline" size={24} color="#fff" />
        </Pressable>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      </View>

      <View style={styles.conversationCard}>
        <Text style={styles.speakerText}>25 Gerhold Valley, please.</Text>
        <Text style={styles.translationText}>Cho tôi tới 25 Gerhold Valley.</Text>
        <Pressable style={styles.repeatButton}>
          <Text style={styles.buttonText}>REPEAT</Text>
          <Icon name="mic-outline" size={24} color="#fff" />
        </Pressable>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
      </View>

      <View style={styles.conversationCard}>
        <Text style={styles.speakerText}>No problem.</Text>
        <Text style={styles.translationText}>Không vấn đề.</Text>
      </View>

      <View style={styles.controlContainer}>
        <Pressable style={styles.listenButton}>
          <Text style={styles.buttonText}>LISTEN</Text>
        </Pressable>
        <Pressable style={styles.speakingButton}>
          <Text style={styles.buttonText}>SPEAKING</Text>
        </Pressable>
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
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  conversationCard: {
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  speakerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  translationText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
  },
  repeatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    marginRight: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  listenButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  speakingButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
});

export default ConversationScreen;