import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SellScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>来闲鱼 搞点钱！</Text>
      <Text style={styles.subtitle}>3亿人在闲鱼赚钱</Text>
      
      <Pressable style={styles.sellOption} onPress={() => navigation.navigate('Upload')}>
        <View style={styles.yellowBackground}>
          <Text style={styles.optionTitle}>发闲置 ></Text>
          <Text style={styles.optionDescription}>30s发布宝贝，啥都能换钱</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionImage} />
        </View>
      </Pressable>

      <View style={styles.sellOptionsContainer}>
        <View style={styles.optionRow}>
          <Pressable style={styles.sellOption} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.optionTitle}>一键转卖 ></Text>
            <Text style={styles.optionDescription}>2年前买的期刊杂志还能卖30元</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.optionImageSmall} />
          </Pressable>
        </View>
        <View style={styles.optionRow}>
          <Pressable style={styles.sellOption} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.optionTitle}>高价帮卖 ></Text>
            <Text style={styles.optionDescription}>支持自己定价卖</Text>
          </Pressable>
          <Pressable style={styles.sellOption} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.optionTitle}>闲鱼回收 ></Text>
            <Text style={styles.optionDescription}>免费上门回收</Text>
          </Pressable>
          <Pressable style={styles.sellOption} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.optionTitle}>晒好物 ></Text>
            <Text style={styles.optionDescription}>只晒不卖的宝贝</Text>
          </Pressable>
        </View>
      </View>

      <Pressable style={styles.partTimeJob} onPress={() => navigation.navigate('Home')}>
        <View style={styles.greenBackground}>
          <Text style={styles.optionTitle}>搞副业 ></Text>
          <Text style={styles.optionDescription}>闲暇时间能换钱</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.greenCharacter} />
        </View>
      </Pressable>

      <Text style={styles.participants}>15万人在这赚钱 ></Text>
      
      <View style={styles.bottomNav}>
        <Pressable style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#999',
    marginHorizontal: 16,
  },
  yellowBackground: {
    backgroundColor: '#fff59d',
    padding: 10,
    borderRadius: 10,
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  greenBackground: {
    backgroundColor: '#dcedc8',
    padding: 10,
    borderRadius: 10,
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  sellOption: {
    flex: 1,
    marginHorizontal: 5,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  optionImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  optionImageSmall: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  participants: {
    fontSize: 16,
    margin: 16,
  },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 'auto'
  },
  closeButtonText: {
    fontSize: 30,
    color: '#000',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#fff',
  },
});

export default SellScreen;