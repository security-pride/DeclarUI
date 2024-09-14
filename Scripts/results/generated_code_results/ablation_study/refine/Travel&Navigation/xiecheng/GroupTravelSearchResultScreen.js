import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const GroupTravelSearchResultScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('烟台');

  const [selectedPeople, setSelectedPeople] = useState(2);



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="location-outline" size={20} color="#666" />

          <TextInput

            style={styles.searchInput}

            value={searchQuery}

            onChangeText={setSearchQuery}

            placeholder="烟台"

          />

          <TouchableOpacity onPress={() => setSearchQuery('')}>

            <Icon name="close-circle" size={20} color="#666" />

          </TouchableOpacity>

        </View>

        <TouchableOpacity>

          <Text style={styles.headerRight}>16</Text>

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.tabs}>

          <Text style={styles.activeTab}>烟台出发参团</Text>

          <Text style={styles.tab}>亲子·游学</Text>

          <Text style={styles.tab}>店铺</Text>

        </View>



        <View style={styles.filterOptions}>

          <TouchableOpacity style={styles.filterOption}>

            <Text>推荐排序</Text>

            <Icon name="chevron-down" size={16} color="#666" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.filterOption}>

            <Text>天数/日期</Text>

            <Icon name="chevron-down" size={16} color="#666" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.filterOption}>

            <Text>人数 {selectedPeople}</Text>

            <Icon name="chevron-down" size={16} color="#666" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.filterOption}>

            <Text>线路玩法</Text>

            <Icon name="chevron-down" size={16} color="#666" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.filterOption}>

            <Text>筛选</Text>

            <Icon name="options-outline" size={16} color="#666" />

          </TouchableOpacity>

        </View>



        <View style={styles.travelOptions}>

          <TouchableOpacity style={styles.travelOption}>

            <Text style={styles.travelOptionTitle}>携程自营</Text>

            <Text style={styles.travelOptionDuration}>2天</Text>

            <Text style={styles.travelOptionPromo}>暑期大促</Text>

            <Text style={styles.travelOptionType}>拼小团</Text>

            <Text style={styles.travelOptionRating}>5钻</Text>

            <Text style={styles.travelOptionLabel}>金牌店铺</Text>

          </TouchableOpacity>



          <TouchableOpacity style={styles.packageCard}>

            <Image source={require('../assets/snack-icon.png')} style={styles.packageImage} />

            <View style={styles.packageInfo}>

              <Text style={styles.packageTitle}>烟台+蓬莱区·2日1晚</Text>

              <Text style={styles.packageDescription}>游玩 帆船出海·喂海鸥·体验赶海乐趣</Text>

              <Text style={styles.packageAccommodation}>行住 全程3钻酒店</Text>

              <Text style={styles.packageService}>服务 纯玩无购物·6人小团·提前2天免费退</Text>

              <View style={styles.packageRating}>

                <Text style={styles.ratingScore}>5.0分</Text>

                <Text style={styles.ratingCount}>已售11人</Text>

              </View>

              <Text style={styles.packageReview}>"酒店很舒服"</Text>

              <View style={styles.packagePricing}>

                <Text style={styles.packagePrice}>¥965起</Text>

                <Text style={styles.packageDiscount}>限时促销 已减100></Text>

              </View>

            </View>

          </TouchableOpacity>



          <TouchableOpacity style={styles.packageCard}>

            <Image source={require('../assets/snack-icon.png')} style={styles.packageImage} />

            <View style={styles.packageInfo}>

              <Text style={styles.packageTitle}>烟台+威海·3日2晚</Text>

              <Text style={styles.packageDescription}>游玩 烟台玩1天·帆船出海</Text>

              <Text style={styles.packageAccommodation}>行住 全程3钻酒店</Text>

              <Text style={styles.packageService}>服务 纯玩无购物·6人小团·提前2天免费退</Text>

              <View style={styles.packageRating}>

                <Text style={styles.ratingScore}>5.0分</Text>

                <Text style={styles.ratingCount}>已售4人</Text>

              </View>

              <View style={styles.packagePricing}>

                <Text style={styles.packagePrice}>¥1699起</Text>

                <Text style={styles.packageDiscount}>限时促销 已减100></Text>

              </View>

            </View>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    marginHorizontal: 10,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    paddingVertical: 5,

    marginLeft: 5,

  },

  headerRight: {

    color: '#f00',

    fontWeight: 'bold',

  },

  tabs: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  tab: {

    color: '#666',

  },

  activeTab: {

    color: '#007AFF',

    fontWeight: 'bold',

  },

  filterOptions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#fff',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  filterOption: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  travelOptions: {

    padding: 10,

  },

  travelOption: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    alignItems: 'center',

    marginBottom: 10,

  },

  travelOptionTitle: {

    fontWeight: 'bold',

    marginRight: 10,

  },

  travelOptionDuration: {

    backgroundColor: '#e0e0e0',

    padding: 5,

    borderRadius: 5,

    marginRight: 5,

  },

  travelOptionPromo: {

    color: '#f00',

    marginRight: 5,

  },

  travelOptionType: {

    color: '#007AFF',

    marginRight: 5,

  },

  travelOptionRating: {

    color: '#f90',

    marginRight: 5,

  },

  travelOptionLabel: {

    color: '#f90',

  },

  packageCard: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    borderRadius: 10,

    marginBottom: 10,

    overflow: 'hidden',

  },

  packageImage: {

    width: 100,

    height: 100,

  },

  packageInfo: {

    flex: 1,

    padding: 10,

  },

  packageTitle: {

    fontWeight: 'bold',

    marginBottom: 5,

  },

  packageDescription: {

    color: '#666',

    marginBottom: 5,

  },

  packageAccommodation: {

    color: '#666',

    marginBottom: 5,

  },

  packageService: {

    color: '#666',

    marginBottom: 5,

  },

  packageRating: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  ratingScore: {

    color: '#f90',

    marginRight: 5,

  },

  ratingCount: {

    color: '#666',

  },

  packageReview: {

    fontStyle: 'italic',

    color: '#666',

    marginBottom: 5,

  },

  packagePricing: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  packagePrice: {

    color: '#f00',

    fontWeight: 'bold',

  },

  packageDiscount: {

    color: '#f00',

  },

});



export default GroupTravelSearchResultScreen;