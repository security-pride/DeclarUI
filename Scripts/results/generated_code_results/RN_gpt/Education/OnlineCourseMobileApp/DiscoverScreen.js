import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DiscoverScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover the best course that suits to you</Text>
            <TouchableOpacity style={styles.notification}>
                <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
                <View style={styles.notificationBadge}>
                    <Text style={styles.notificationCount}>9+</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    notificationBadge: {
        backgroundColor: 'red',
        borderRadius: 12,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -8,
        marginTop: -8,
    },
    notificationCount: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default DiscoverScreen;