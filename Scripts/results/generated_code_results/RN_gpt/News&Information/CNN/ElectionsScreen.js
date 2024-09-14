import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ElectionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Elections</Text>
      </View>
      <View style={styles.article}>
        <Image source={require('../assets/snack-icon.png')} style={styles.articleImage} />
        <Text style={styles.articleTitle}>43 seconds of chaos: How the assassination attempt on Trump unfolded</Text>
        <Text style={styles.articleTime}>5h ago</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.listItem}>Minute-by-minute: Visual timeline of the Trump assassination attempt</Text>
        <View style={styles.divider} />
        <Text style={styles.listItem}>‘Let me get my shoes’: What was said on stage in the seconds after Trump was shot</Text>
        <View style={styles.divider} />
        <Text style={styles.listItem}>Gunman was a few hundred feet away from Trump, CNN analysis shows</Text>
        <View style={styles.divider} />
        <Text style={styles.video}>VIDEO</Text>
        <Text style={styles.listItem}>‘He’s got a gun!’: Listen to audio of rally attendees as gunman is spotted</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navTextActive}>Elections</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  article: {
    padding: 10,
    backgroundColor: '#fff',
  },
  articleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  articleTime: {
    color: '#888',
  },
  list: {
    marginHorizontal: 10,
  },
  listItem: {
    paddingVertical: 15,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 5,
  },
  video: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
  },
  bottomNav: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
  navTextActive: {
    fontSize: 12,
    color: '#e63946',
    fontWeight: 'bold',
  },
});

export default ElectionsScreen;