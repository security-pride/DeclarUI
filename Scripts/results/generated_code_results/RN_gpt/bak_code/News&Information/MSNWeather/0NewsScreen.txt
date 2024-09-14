import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Pressable } from 'react-native';

const NewsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Menu" onPress={() => {}} />
        <TextInput style={styles.searchInput} placeholder="Search news" />
        <Button title="Mic" onPress={() => {}} />
      </View>

      <View style={styles.navButtons}>
        <Pressable style={styles.navButtonSelected}>
          <Text style={styles.navButtonTextSelected}>For You</Text>
        </Pressable>
        <Button title="Local" onPress={() => {}} />
        <Button title="Top Stories" onPress={() => {}} />
        <Button title="US" onPress={() => {}} />
      </View>

      <Text style={styles.headlinesTitle}>Headlines</Text>

      <View style={styles.article}>
        <Image source={require('../assets/snack-icon.png')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleSource}>The Associated Press</Text>
          <Text style={styles.articleHeadline}>Argentina wins record 16th Copa America title, beats Colombia 1-0 after Messi gets hurt</Text>
          <View style={styles.articleStats}>
            <Text>178</Text>
            <Text>47</Text>
            <Text>9</Text>
          </View>
        </View>
      </View>

      <View style={styles.article}>
        <Image source={require('../assets/snack-icon.png')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleSource}>Athlon Sports</Text>
          <Text style={styles.articleHeadline}>Caitlin Clark Goes Viral for Dropping Player to Floor in Fever-Lynx</Text>
          <View style={styles.articleStats}>
            <Text>73</Text>
            <Text>29</Text>
            <Text>3</Text>
          </View>
        </View>
      </View>

      <View style={styles.article}>
        <Image source={require('../assets/snack-icon.png')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleSource}>Southern Living</Text>
          <Text style={styles.articleHeadline}>This 740-Square-Foot Bungalow Proves Just The Right Fit For A Family Of Seven</Text>
          <View style={styles.articleStats}>
            <Text>18</Text>
            <Text>5</Text>
            <Text>1</Text>
          </View>
        </View>
      </View>

      <Text style={styles.seeMore}>See more</Text>

      <View style={styles.article}>
        <Image source={require('../assets/snack-icon.png')} style={styles.articleImage} />
        <View style={styles.articleContent}>
          <Text style={styles.articleSource}>Moneywise</Text>
          <Text style={styles.articleHeadline}>How big is the average Social Security check of a middle-class retiree?</Text>
          <View style={styles.articleStats}>
            <Text>113</Text>
            <Text>86</Text>
            <Text>64</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Weather" onPress={() => {}} />
        <Button title="Chat" onPress={() => {}} />
        <Button title="Tabs" onPress={() => {}} />
        <Button title="Apps" onPress={() => navigation.navigate('Apps')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  navButtonSelected: {
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
  navButtonTextSelected: {
    color: '#fff',
  },
  headlinesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  article: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  articleImage: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  articleContent: {
    flex: 1,
  },
  articleSource: {
    fontSize: 12,
    color: '#666',
  },
  articleHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  articleStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  seeMore: {
    color: '#007bff',
    marginBottom: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 16,
  },
});

export default NewsScreen;