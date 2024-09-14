import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ResultDetailScreen = () => {
const [activeTab, setActiveTab] = useState('Uses');
const navigation = useNavigation();
const handleBackPress = () => {
navigation.navigate('IdentifyResult');
};
const handleAddMedReminder = () => {
navigation.navigate('Reminder');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Image source={{ uri: '../assets/back_arrow.png' }} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.title}>Abilify</Text>
<TouchableOpacity style={styles.bookmarkButton}>
<Image source={{ uri: '../assets/bookmark_icon.png' }} style={styles.bookmarkIcon} />
</TouchableOpacity>
</View>
  <View style={styles.tabContainer}>
    {['Uses', 'Side Effects', 'Precautions'].map((tab) => (
      <TouchableOpacity
        key={tab}
        style={[styles.tab, activeTab === tab && styles.activeTab]}
        onPress={() => setActiveTab(tab)}
      >
        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.content}>
    <Image source={{ uri: '../assets/abilify_blue_pills.png' }} style={styles.pillImage} />
    <Text style={styles.pillName}>Abilify</Text>
    <Text style={styles.genericName}>Generic: aripiprazole</Text>
    <Text style={styles.brandName}>Common Brand(s): Abilify</Text>

    <View style={styles.reviewContainer}>
      <Text style={styles.reviewText}>Reviews (1888)</Text>
      <View style={styles.starRating}>
        {[1, 2, 3].map((star) => (
          <Image key={star} source={{ uri: '../assets/star_filled.png' }} style={styles.starIcon} />
        ))}
        {[4, 5].map((star) => (
          <Image key={star} source={{ uri: '../assets/star_empty.png' }} style={styles.starIcon} />
        ))}
      </View>
    </View>

    <View style={styles.warningContainer}>
      <Text style={styles.warningText}>Warnings: If you are using aripiprazo...</Text>
      <TouchableOpacity>
        <Text style={styles.showMoreText}>Show more {'>'}</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.descriptionText}>
      This medication is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole belongs to a class of drugs known as atypical antipsychotics. It works by helping to restore the balance of certain natural substances in the brain.
    </Text>
  </View>

  <View style={styles.actionButtonsContainer}>
    <TouchableOpacity style={styles.addReminderButton} onPress={handleAddMedReminder}>
      <Text style={styles.addReminderButtonText}>+ Add Med Reminder</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.searchPricesButton}>
      <Text style={styles.searchPricesButtonText}>Rx Search Drug Prices</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
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
justifyContent: 'space-between',
padding: 16,
},
backButton: {
padding: 8,
},
backIcon: {
width: 24,
height: 24,
},
title: {
fontSize: 20,
fontWeight: 'bold',
},
bookmarkButton: {
padding: 8,
},
bookmarkIcon: {
width: 24,
height: 24,
},
tabContainer: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
tab: {
flex: 1,
paddingVertical: 16,
alignItems: 'center',
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
content: {
padding: 16,
},
pillImage: {
width: 200,
height: 200,
alignSelf: 'center',
marginBottom: 16,
},
pillName: {
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
marginBottom: 8,
},
genericName: {
fontSize: 16,
textAlign: 'center',
marginBottom: 4,
},
brandName: {
fontSize: 16,
textAlign: 'center',
marginBottom: 16,
},
reviewContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
marginBottom: 16,
},
reviewText: {
fontSize: 16,
marginRight: 8,
color: '#007AFF',
},
starRating: {
flexDirection: 'row',
},
starIcon: {
width: 20,
height: 20,
marginHorizontal: 2,
},
warningContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
backgroundColor: '#FFF3CD',
padding: 16,
borderRadius: 8,
marginBottom: 16,
},
warningText: {
flex: 1,
fontSize: 14,
},
showMoreText: {
color: '#007AFF',
fontSize: 14,
},
descriptionText: {
fontSize: 16,
lineHeight: 24,
},
actionButtonsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 16,
},
addReminderButton: {
flex: 1,
backgroundColor: '#007AFF',
padding: 16,
borderRadius: 8,
marginRight: 8,
},
addReminderButtonText: {
color: '#fff',
textAlign: 'center',
fontWeight: 'bold',
},
searchPricesButton: {
flex: 1,
backgroundColor: '#007AFF',
padding: 16,
borderRadius: 8,
marginLeft: 8,
},
searchPricesButtonText: {
color: '#fff',
textAlign: 'center',
fontWeight: 'bold',
},
});
export default ResultDetailScreen;