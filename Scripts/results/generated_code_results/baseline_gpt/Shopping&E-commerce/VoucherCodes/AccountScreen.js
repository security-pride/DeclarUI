import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/snack-icon.png")} style={styles.headerImage} />
        <Text style={styles.headerText}>Tailor your offers and access exciting rewards</Text>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <MenuItem icon="person-outline" label="Personal details" />
        <MenuItem icon="heart-outline" label="Favourite brands" />
        <MenuItem icon="mail-outline" label="Communication preferences" />
        <MenuItem icon="star-outline" label="VIP rewards tracker" isNew />
        <MenuItem icon="document-text-outline" label="Track transaction status" />
        <MenuItem icon="card-outline" label="Gift card wallet" />
        <MenuItem icon="code-slash-outline" label="Submit a code" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({ icon, label, isNew }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.iconLabelContainer}>
      <Icon name={icon} size={24} style={styles.icon} />
      <Text style={styles.menuText}>{label}</Text>
    </View>
    {isNew && <View style={styles.newBadge}><Text style={styles.newText}>New</Text></View>}
    <Icon name="chevron-forward-outline" size={20} style={styles.chevron} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#FFF7DC",
    padding: 20,
    alignItems: "center"
  },
  headerImage: {
    width: 50,
    height: 50,
    marginBottom: 10
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    marginBottom: 10
  },
  signInButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  signInText: {
    color: "#fff",
    fontSize: 16
  },
  menu: {
    marginTop: 10
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  iconLabelContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    color: "#FFD700",
    marginRight: 10
  },
  menuText: {
    fontSize: 16,
    color: "#000"
  },
  newBadge: {
    backgroundColor: "#FFD700",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8
  },
  newText: {
    color: "#fff",
    fontSize: 12
  },
  chevron: {
    color: "#000"
  }
});

export default AccountScreen;