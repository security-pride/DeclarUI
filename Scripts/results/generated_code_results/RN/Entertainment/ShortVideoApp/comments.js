import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
const CommentScreen = ({ navigation }) => {
const [comments, setComments] = useState([
{ id: '1', user: 'Babayaga', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit. Aenean sit.', likes: '1.2k', replies: 12 },
{ id: '2', user: 'LilKittt', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
{ id: '3', user: 'Spiderman', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
{ id: '4', user: 'Badli', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
{ id: '5', user: 'Tung Tran', comment: 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', likes: '1.8k', replies: 12 },
]);
const [newComment, setNewComment] = useState('');
const renderComment = ({ item }) => (
<View style={styles.commentContainer}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
<View style={styles.commentContent}>
<Text style={styles.username}>{item.user}</Text>
<Text style={styles.commentText}>{item.comment}</Text>
<View style={styles.commentActions}>
<TouchableOpacity style={styles.likeButton}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.likeIcon} />
<Text style={styles.likeCount}>{item.likes}</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style={styles.viewReplies}>View replies ({item.replies})</Text>
</TouchableOpacity>
</View>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>4231 Comments</Text>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.editIcon} />
</TouchableOpacity>
</View>
<FlatList
data={comments}
renderItem={renderComment}
keyExtractor={(item) => item.id}
/>
<View style={styles.inputContainer}>
<TextInput style={styles.input} placeholder="Add Comment..." value={newComment} onChangeText={setNewComment} />
<TouchableOpacity style={styles.sendButton}>
<Text style={styles.sendButtonText}>Send</Text>
</TouchableOpacity>
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
headerTitle: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
editIcon: {
width: 24,
height: 24,
},
commentContainer: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#333',
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
color: '#fff',
fontWeight: 'bold',
marginBottom: 5,
},
commentText: {
color: '#fff',
marginBottom: 5,
},
commentActions: {
flexDirection: 'row',
alignItems: 'center',
},
likeButton: {
flexDirection: 'row',
alignItems: 'center',
marginRight: 15,
},
likeIcon: {
width: 16,
height: 16,
marginRight: 5,
},
likeCount: {
color: '#999',
},
viewReplies: {
color: '#999',
},
inputContainer: {
flexDirection: 'row',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#333',
},
input: {
flex: 1,
backgroundColor: '#333',
borderRadius: 20,
paddingHorizontal: 15,
paddingVertical: 10,
color: '#fff',
},
sendButton: {
marginLeft: 10,
justifyContent: 'center',
},
sendButtonText: {
color: '#3897f0',
fontWeight: 'bold',
},
});
export default CommentScreen;