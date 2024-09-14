import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const chatsData = [
    // Sample data for chats
    {
        id: '1',
        name: 'Martin Randolph',
        message: 'You: What’s man!',
        time: '9:40 AM',
        image: require('../assets/snack-icon.png'),
        unread: false,
    },
    {
        id: '2',
        name: 'Andrew Parker',
        message: 'You: Ok, thanks!',
        time: '9:25 AM',
        image: require('../assets/snack-icon.png'),
        unread: true,
    },
    {
        id: '3',
        name: 'Karen Castillo',
        message: 'You: Ok, See you in To…',
        time: 'Fri',
        image: require('../assets/snack-icon.png'),
        unread: true,
    },
    {
        id: '4',
        name: 'Maisy Humphrey',
        message: 'Have a good day, Maisy!',
        time: 'Fri',
        image: require('../assets/snack-icon.png'),
        unread: true,
    },
    {
        id: '5',
        name: 'Joshua Lawrence',
        message: 'The business plan loo…',
        time: 'Thu',
        image: require('../assets/snack-icon.png'),
        unread: true,
    },
];

const renderChatItem = ({ item }) => (
    <View style={styles.chatItem}>
        <Image source={item.image} style={styles.chatImage} />
        <View style={styles.chatInfo}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.chatMessage}>{item.message}</Text>
        </View>
        <View style={styles.chatDetails}>
            <Text style={styles.chatTime}>{item.time}</Text>
            {item.unread && <Icon name="checkmark-done" size={20} color="blue" />}
        </View>
    </View>
);

const ChatsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Chats</Text>
                <View style={styles.headerIcons}>
                    <Icon name="camera-outline" size={30} style={styles.icon} />
                    <Icon name="create-outline" size={30} style={styles.icon} />
                </View>
            </View>
            <TextInput 
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#999"
                />
            <View style={styles.stories}>
                <TouchableOpacity style={styles.story}>
                    <Icon name="add" size={40} color="#000" />
                    <Text style={styles.storyText}>Your story</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.story}>
                    <Image source={require('../assets/snack-icon.png')} style={styles.storyImage} />
                    <Text style={styles.storyText}>Joshua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.story}>
                    <Image source={require('../assets/snack-icon.png')} style={styles.storyImage} />
                    <Text style={styles.storyText}>Martin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.story}>
                    <Image source={require('../assets/snack-icon.png')} style={styles.storyImage} />
                    <Text style={styles.storyText}>Karen</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={chatsData}
                renderItem={renderChatItem}
                keyExtractor={(item) => item.id}
                style={styles.chatList}
            />
            <View style={styles.footer}>
                <Icon name="chatbubble-outline" size={30} color="#000" />
                <Icon name="people-outline" size={30} color="#000" />
                <Icon name="pencil-outline" size={30} color="#000" />
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
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 20,
    },
    searchInput: {
        backgroundColor: '#f0f0f0',
        marginHorizontal: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    },
    stories: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    story: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    storyImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 5,
    },
    storyText: {
        textAlign: 'center',
    },
    chatList: {
        flex: 1,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    chatImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    chatInfo: {
        flex: 1,
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    chatMessage: {
        color: '#888',
    },
    chatDetails: {
        alignItems: 'flex-end',
    },
    chatTime: {
        color: '#888',
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 20,
    },
});

export default ChatsScreen;