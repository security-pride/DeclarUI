import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native';
const CommentsScreen = ({ navigation }) => {
const [comments, setComments] = useState([
{ id: '1', user: 'martini_rond', comment: 'How neatly I write the date in my book', time: '22h', likes: 8098, replies: 4 },
{ id: '2', user: 'maxjacobson', comment: "Now that's a skill very talented", time: '22h', likes: 8098, replies: 1 },
{ id: '3', user: 'zackjohn', comment: 'Doing this would make me so anxious', time: '22h', likes: 8098, replies: 0 },
{ id: '4', user: 'kiero_d', comment: 'Use that on r air forces to whiten them', time: '21h', likes: 8098, replies: 9 },
{ id: '5', user: 'mis_potter', comment: "Sipul'd've used that on his forces", time: '13h', likes: 8098, replies: 4 },
{ id: '6', user: 'karennne', comment: 'No prressure', time: '22h', likes: 8098, replies: 2 },
{ id: '7', user: 'joshua_l', comment: "My OCD couldn't do it", time: '15h', likes: 8098, replies: 0 },
]);
const [newComment, setNewComment] = useState('');
const renderComment = ({ item }) => (
<View style={styles.commentContainer}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
<View style={styles.commentContent}>
<Text style={styles.username}>{item.user}</Text>
<Text style={styles.commentText}>{item.comment}</Text>
<View style={styles.commentFooter}>
<Text style={styles.timeText}>{item.time}</Text>
<TouchableOpacity onPress={() => console.log('View replies')}>
<Text style={styles.viewRepliesText}>View replies ({item.replies})</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.likeButton} onPress={() => console.log('Like pressed')}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.heartIcon} />
<Text style={styles.likeCount}>{item.likes}</Text>
</TouchableOpacity>
</View>
</View>
</View>
);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>579 comments</Text>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Text style={styles.closeButton}>X</Text>
</TouchableOpacity>
</View>
<FlatList
data={comments}
renderItem={renderComment}
keyExtractor={item => item.id}
style={styles.commentList}
/>
<View style={styles.inputContainer}>
<TextInput style={styles.input} placeholder="Add comment..." value={newComment} onChangeText={setNewComment} />
<TouchableOpacity style={styles.sendButton}>
<Text style={styles.sendButtonText}>Post</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
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
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
closeButton: {
fontSize: 20,
fontWeight: 'bold',
},
commentList: {
flex: 1,
},
commentContainer: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
avatar: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
commentContent: {
flex: 1,
},
username: {
fontWeight: 'bold',
marginBottom: 5,
},
commentText: {
marginBottom: 5,
},
commentFooter: {
flexDirection: 'row',
alignItems: 'center',
},
timeText: {
color: '#888',
marginRight: 10,
},
viewRepliesText: {
color: '#888',
marginRight: 10,
},
likeButton: {
flexDirection: 'row',
alignItems: 'center',
},
heartIcon: {
width: 20,
height: 20,
marginRight: 5,
},
likeCount: {
color: '#888',
},
inputContainer: {
flexDirection: 'row',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
input: {
flex: 1,
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 20,
paddingHorizontal: 15,
paddingVertical: 8,
marginRight: 10,
},
sendButton: {
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#007AFF',
borderRadius: 20,
paddingHorizontal: 15,
},
sendButtonText: {
color: '#fff',
fontWeight: 'bold',
},
});
export default CommentsScreen;