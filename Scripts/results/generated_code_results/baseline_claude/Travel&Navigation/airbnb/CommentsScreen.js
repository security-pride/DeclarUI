import React from 'react';

import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CommentsScreen = () => {

  const navigation = useNavigation();



  const renderRatingBar = (rating) => {

    return (

      <View style={styles.ratingBar}>

        {[1, 2, 3, 4, 5].map((i) => (

          <View

            key={i}

            style={[

              styles.ratingItem,

              { backgroundColor: i <= rating ? '#000' : '#E0E0E0' },

            ]}

          />

        ))}

      </View>

    );

  };



  const renderComment = ({ item }) => (

    <View style={styles.commentContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.commentContent}>

        <Text style={styles.userName}>{item.name}</Text>

        <Text style={styles.userInfo}>{`使用爱彼迎 ${item.years} 年`}</Text>

        <View style={styles.ratingContainer}>

          {renderRatingBar(item.rating)}

          <Text style={styles.commentDate}>{item.date}</Text>

        </View>

        <Text style={styles.commentText}>{item.comment}</Text>

      </View>

    </View>

  );



  const commentData = [

    {

      id: '1',

      name: 'David',

      years: 8,

      rating: 5,

      date: '2024年4月',

      comment: '宁静而风景如画-我在这里住得非常愉快。大篷车就在海滩旁边，设备齐全，很舒适。公园很安静，是探索南海岸小径的好基地，同时距离韦茅斯也很近。房东很友好，善于沟通，感谢他们愿意回答问题，为当地的酒吧和散步提出建议。我肯定会再次入住这里，并推荐给任何寻找安静休息的人。',

    },

    // Add more comment data as needed

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.ratingSection}>

        <Text style={styles.ratingScore}>4.80</Text>

        <View style={styles.ratingDecoration}>

          <Image source={require('../assets/snack-icon.png')} style={styles.leafIcon} />

        </View>

      </View>

      <Text style={styles.ratingTitle}>房客推荐</Text>

      <Text style={styles.ratingDescription}>

        根据评分、评价和可靠性数据，这是爱彼迎上最受房客欢迎的房源之一

      </Text>

      <View style={styles.ratingDetails}>

        <View style={styles.ratingItem}>

          <Text style={styles.ratingLabel}>总体评分</Text>

          {renderRatingBar(5)}

        </View>

        <View style={styles.ratingItem}>

          <Text style={styles.ratingLabel}>干净卫生</Text>

          <Text style={styles.ratingValue}>5.0</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.cleanIcon} />

        </View>

        <View style={styles.ratingItem}>

          <Text style={styles.ratingLabel}>如实描述</Text>

          <Text style={styles.ratingValue}>4.8</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />

        </View>

      </View>

      <View style={styles.tagContainer}>

        <Text style={styles.tagTitle}>5条评价</Text>

        <TouchableOpacity style={styles.sortButton}>

          <Text style={styles.sortButtonText}>最有帮助 ▼</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.tags}>

        <View style={styles.tag}><Text style={styles.tagText}>环境安静 3</Text></View>

        <View style={styles.tag}><Text style={styles.tagText}>位置优越 2</Text></View>

        <View style={styles.tag}><Text style={styles.tagText}>推荐入住 2</Text></View>

        <View style={styles.tag}><Text style={styles.tagText}>干净卫生 1</Text></View>

        <View style={styles.tag}><Text style={styles.tagText}>房东热情 1</Text></View>

        <View style={styles.tag}><Text style={styles.tagText}>设施齐全 1</Text></View>

      </View>

      <FlatList

        data={commentData}

        renderItem={renderComment}

        keyExtractor={(item) => item.id}

      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    padding: 20,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  backButton: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  ratingSection: {

    alignItems: 'center',

    marginBottom: 10,

  },

  ratingScore: {

    fontSize: 48,

    fontWeight: 'bold',

  },

  ratingDecoration: {

    flexDirection: 'row',

  },

  leafIcon: {

    width: 20,

    height: 20,

    marginHorizontal: 5,

  },

  ratingTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 10,

  },

  ratingDescription: {

    textAlign: 'center',

    marginBottom: 20,

  },

  ratingDetails: {

    marginBottom: 20,

  },

  ratingItem: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  ratingLabel: {

    flex: 1,

  },

  ratingBar: {

    flexDirection: 'row',

    flex: 2,

  },

  ratingValue: {

    marginLeft: 10,

  },

  cleanIcon: {

    width: 20,

    height: 20,

    marginLeft: 10,

  },

  checkIcon: {

    width: 20,

    height: 20,

    marginLeft: 10,

  },

  tagContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  tagTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  sortButton: {

    borderWidth: 1,

    borderColor: '#000',

    borderRadius: 15,

    padding: 5,

  },

  sortButtonText: {

    fontSize: 14,

  },

  tags: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    marginBottom: 20,

  },

  tag: {

    backgroundColor: '#F0F0F0',

    borderRadius: 15,

    padding: 5,

    margin: 5,

  },

  tagText: {

    fontSize: 14,

  },

  commentContainer: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 10,

  },

  commentContent: {

    flex: 1,

  },

  userName: {

    fontWeight: 'bold',

    marginBottom: 5,

  },

  userInfo: {

    color: '#888',

    marginBottom: 5,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  commentDate: {

    marginLeft: 10,

    color: '#888',

  },

  commentText: {

    lineHeight: 20,

  },

});



export default CommentsScreen;