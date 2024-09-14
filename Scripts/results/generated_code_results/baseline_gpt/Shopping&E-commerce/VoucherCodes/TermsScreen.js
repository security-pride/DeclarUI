import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TermsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Terms and Conditions</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>
          Valid on Vodafone pay monthly contracts only.{"\n"}New customers only.{"\n"}Excludes SIM Only plans.{"\n"}
          VC10OFF Code: Some handsets may be excluded.{"\n"}Monthly price (including out of bundle charges for
          Vodafone) will increase every April by the Consumer Price Index rate of inflation + 3.9%.{"\n"}EXCLUDES KLARNA,
          CLEARPAY AND ANY OTHER "ORDER NOW PAY LATER" PAYMENT METHODS. Paypal Credit and Paypal Pay In 3 are also
          excluded types of payment.{"\n"}If you don't receive your gift card within the expected timeframe, please wait
          until after your trip has been completed before contacting the VoucherCodes support team.{"\n"}Excludes
          retailers app orders. You must make your purchase through the brands website.{"\n"}You must claim your gift
          card by clicking the Claim Your Reward button in your account within 6 months of the reward offer confirmation
          email or the gift card will be forfeited.{"\n"}To be eligible for the offer you must make your Mobiles.co.uk
          purchase online via VoucherCodes.
        </Text>
      </ScrollView>
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
    alignItems: 'center',
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  contentContainer: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default TermsScreen;