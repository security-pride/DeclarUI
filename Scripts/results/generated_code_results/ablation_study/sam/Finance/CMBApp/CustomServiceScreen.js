import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const CustomServiceScreen = () => {

  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState('贷款');



  const quickActions = [

    { name: '卡号查询', icon: 'credit-card' },

    { name: '支出限额查询', icon: 'attach-money' },

    { name: '查询余额', icon: 'account-balance-wallet' },

    { name: '查找网点', icon: 'location-on' },

    { name: '转账限额', icon: 'compare-arrows' },

    { name: '开户行查询', icon: 'account-balance' },

    { name: '证件更新', icon: 'assignment' },

    { name: '我要表扬', icon: 'thumb-up' },

    { name: '咨询与投诉', icon: 'feedback' },

  ];



  const commonQuestions = {

    贷款: ['闪电贷介绍', '助学贷款怎么续贷', '装修贷款介绍', '手机银行如何申请闪电贷', '车贷查询'],

    账户管理: ['如何修改密码', '如何绑定手机号', '如何查看交易记录'],

    理财: ['基金投资建议', '定期存款利率', '理财产品介绍'],

    信用卡: ['申请信用卡', '信用卡还款', '信用卡积分查询'],

  };



  const handleQuickAction = (action) => {

    if (action === '查找网点') {

      navigation.navigate('SearchBranch');

    }

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>小招-客服门户</Text>

        <View style={styles.notificationBadge}>

          <Text style={styles.notificationText}>99</Text>

        </View>

      </View>



      <View style={styles.greetingContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

        <View>

          <Text style={styles.greeting}>您好，我是小招</Text>

          <Text style={styles.subGreeting}>需要帮助点此提问哦~ ＞</Text>

        </View>

      </View>



      <View style={styles.quickActionsContainer}>

        {quickActions.map((action, index) => (

          <TouchableOpacity

            key={index}

            style={styles.quickActionItem}

            onPress={() => handleQuickAction(action.name)}

          >

            <Icon name={action.icon} size={24} color="#FF6347" />

            <Text style={styles.quickActionText}>{action.name}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.commonQuestionsContainer}>

        <Text style={styles.sectionTitle}>我关心的</Text>

        <View style={styles.categoryContainer}>

          {Object.keys(commonQuestions).map((category) => (

            <TouchableOpacity

              key={category}

              style={[

                styles.categoryButton,

                selectedCategory === category && styles.selectedCategory,

              ]}

              onPress={() => setSelectedCategory(category)}

            >

              <Text

                style={[

                  styles.categoryText,

                  selectedCategory === category && styles.selectedCategoryText,

                ]}

              >

                {category}

              </Text>

            </TouchableOpacity>

          ))}

        </View>

        <View style={styles.questionsContainer}>

          {commonQuestions[selectedCategory].map((question, index) => (

            <TouchableOpacity key={index} style={styles.questionItem}>

              <Text style={styles.questionText}>{question}</Text>

              {index < 2 && <Text style={styles.hotTag}>热</Text>}

            </TouchableOpacity>

          ))}

        </View>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 16,

    backgroundColor: '#FFF',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  notificationBadge: {

    backgroundColor: '#FF6347',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationText: {

    color: '#FFF',

    fontSize: 12,

  },

  greetingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFF',

    marginBottom: 10,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 16,

  },

  greeting: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  subGreeting: {

    fontSize: 14,

    color: '#666',

  },

  quickActionsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    padding: 16,

    backgroundColor: '#FFF',

    marginBottom: 10,

  },

  quickActionItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 16,

  },

  quickActionText: {

    fontSize: 12,

    marginTop: 4,

    textAlign: 'center',

  },

  commonQuestionsContainer: {

    padding: 16,

    backgroundColor: '#FFF',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  categoryContainer: {

    flexDirection: 'row',

    marginBottom: 16,

  },

  categoryButton: {

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 16,

    marginRight: 8,

    backgroundColor: '#F0F0F0',

  },

  selectedCategory: {

    backgroundColor: '#FF6347',

  },

  categoryText: {

    fontSize: 14,

    color: '#333',

  },

  selectedCategoryText: {

    color: '#FFF',

  },

  questionsContainer: {

    marginTop: 8,

  },

  questionItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 12,

  },

  questionText: {

    fontSize: 14,

    color: '#333',

  },

  hotTag: {

    fontSize: 12,

    color: '#FF6347',

    marginLeft: 8,

    fontWeight: 'bold',

  },

});



export default CustomServiceScreen;