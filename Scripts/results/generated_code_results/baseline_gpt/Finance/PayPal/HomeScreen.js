import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="menu-outline" size={30} />
        <View style={styles.headerIcons}>
          <Icon name="help-circle-outline" size={25} />
          <Icon name="qr-code-outline" size={25} style={styles.iconMargin} />
          <Icon name="person-outline" size={25} />
        </View>
      </View>

      {/* PayPal Balance */}
      <View style={styles.balanceContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.paypalIcon} />
        <View>
          <Text style={styles.balanceText}>£0.00</Text>
          <Text style={styles.balanceLabel}>PayPal balance</Text>
        </View>
      </View>

      {/* Send Again */}
      <Text style={styles.sendAgainTitle}>Send again</Text>
      <View style={styles.sendAgainContainer}>
        <View style={styles.sendAgainItem}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>ZF</Text>
          </View>
          <Text style={styles.circleLabel}>Zhou Fang</Text>
        </View>
        <View style={styles.sendAgainItem}>
          <View style={styles.circle}>
            <Icon name="search-outline" size={24} color="white" />
          </View>
          <Text style={styles.circleLabel}>Search</Text>
        </View>
      </View>

      {/* Invite Friends */}
      <View style={styles.inviteContainer}>
        <View style={styles.inviteContent}>
          <Text style={styles.inviteTitle}>
            Let’s go! Refer a friend to earn a £10 reward.
          </Text>
          <Text style={styles.inviteDescription}>
            Max 10 friends. Min spend £5 within 30 days. Ends 31/12/24. Terms apply.
          </Text>
          <TouchableOpacity>
            <Text style={styles.inviteLink}>Invite friends</Text>
          </TouchableOpacity>
        </View>
        <Icon name="close-outline" size={22} />
      </View>

      {/* Footer Action Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f6',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginHorizontal: 10,
  },
  balanceContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    marginVertical: 20,
  },
  paypalIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceLabel: {
    color: 'gray',
  },
  sendAgainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sendAgainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sendAgainItem: {
    alignItems: 'center',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7a5cff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  circleLabel: {
    marginTop: 5,
    color: 'black',
  },
  inviteContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    marginVertical: 20,
  },
  inviteContent: {
    flex: 1,
  },
  inviteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inviteDescription: {
    color: 'gray',
    marginVertical: 5,
  },
  inviteLink: {
    fontWeight: 'bold',
    color: '#0070ba',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerButton: {
    backgroundColor: '#0070ba',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  footerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;