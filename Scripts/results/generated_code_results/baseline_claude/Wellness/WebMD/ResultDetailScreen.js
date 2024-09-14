import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ResultDetailScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Uses');



  const renderContent = () => {

    switch (activeTab) {

      case 'Uses':

        return (

          <Text style={styles.contentText}>

            This medication is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole belongs to a class of drugs known as atypical antipsychotics. It works by helping to restore the balance of certain natural substances in the brain.

          </Text>

        );

      case 'Side Effects':

        return <Text style={styles.contentText}>Side effects information would go here.</Text>;

      case 'Precautions':

        return <Text style={styles.contentText}>Precautions information would go here.</Text>;

      default:

        return null;

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={{ uri: '../assets/back-arrow.png' }} style={styles.headerIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Abilify</Text>

        <View style={styles.headerRightIcons}>

          <TouchableOpacity>

            <Image source={{ uri: '../assets/share-icon.png' }} style={styles.headerIcon} />

          </TouchableOpacity>

          <TouchableOpacity>

            <Image source={{ uri: '../assets/bookmark-icon.png' }} style={styles.headerIcon} />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView>

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



        <View style={styles.pillInfoContainer}>

          <Image source={{ uri: '../assets/abilify-pill.png' }} style={styles.pillImage} />

          <Text style={styles.pillName}>Abilify</Text>

          <Text style={styles.genericName}>Generic: aripiprazole</Text>

          <Text style={styles.brandName}>Common Brand(s) Abilify</Text>

          <View style={styles.reviewContainer}>

            <Text style={styles.reviewText}>Reviews (1888)</Text>

            <View style={styles.starContainer}>

              {[1, 2, 3].map((star) => (

                <Image key={star} source={{ uri: '../assets/star-filled.png' }} style={styles.starIcon} />

              ))}

              {[4, 5].map((star) => (

                <Image key={star} source={{ uri: '../assets/star-empty.png' }} style={styles.starIcon} />

              ))}

            </View>

          </View>

        </View>



        <View style={styles.warningContainer}>

          <Text style={styles.warningTitle}>Warnings: </Text>

          <Text style={styles.warningText}>If you are using aripiprazo...</Text>

          <TouchableOpacity>

            <Text style={styles.showMoreText}>Show more {'>'}</Text>

          </TouchableOpacity>

        </View>



        {renderContent()}

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Reminder')}>

          <Image source={{ uri: '../assets/add-icon.png' }} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>Add Med Reminder</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={{ uri: '../assets/rx-icon.png' }} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>Search Drug Prices</Text>

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

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  headerIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerRightIcons: {

    flexDirection: 'row',

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

    color: '#8E8E93',

  },

  activeTabText: {

    color: '#007AFF',

  },

  pillInfoContainer: {

    alignItems: 'center',

    padding: 16,

  },

  pillImage: {

    width: 100,

    height: 100,

    borderRadius: 50,

  },

  pillName: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 16,

  },

  genericName: {

    fontSize: 16,

    color: '#8E8E93',

    marginTop: 8,

  },

  brandName: {

    fontSize: 16,

    color: '#8E8E93',

  },

  reviewContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 8,

  },

  reviewText: {

    fontSize: 16,

    color: '#007AFF',

    marginRight: 8,

  },

  starContainer: {

    flexDirection: 'row',

  },

  starIcon: {

    width: 16,

    height: 16,

    marginHorizontal: 2,

  },

  warningContainer: {

    padding: 16,

    backgroundColor: '#FFF9C4',

  },

  warningTitle: {

    fontWeight: 'bold',

  },

  warningText: {

    marginTop: 4,

  },

  showMoreText: {

    color: '#007AFF',

    marginTop: 4,

  },

  contentText: {

    padding: 16,

    fontSize: 16,

    lineHeight: 24,

  },

  footer: {

    flexDirection: 'row',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  footerButton: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#007AFF',

  },

  footerIcon: {

    width: 24,

    height: 24,

    marginRight: 8,

    tintColor: '#fff',

  },

  footerButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default ResultDetailScreen;