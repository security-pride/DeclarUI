import 'package:flutter/material.dart';
class CommentsScreen extends StatefulWidget {
@override
_CommentsScreenState createState() => _CommentsScreenState();
}
class _CommentsScreenState extends State<CommentsScreen> {
final TextEditingController _commentController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('4231 Comments'),
actions: [
IconButton(
icon: Icon(Icons.edit),
onPressed: () {
// Implement edit functionality
},
),
],
),
body: Column(
children: [
Expanded(
child: ListView(
children: [
_buildCommentItem('Babayaga', 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit. Aenean sit.', '1.2k', 12),
_buildCommentItem('LilKittt', 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', '1.8k', 12),
_buildCommentItem('Spiderman', 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', '1.8k', 12),
_buildCommentItem('Badli', 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', '1.8k', 12),
_buildCommentItem('Tung Tran', 'Lorem ipsum dolor sit amet, elit poo consectetur adipiscing elit.', '1.8k', 12),
],
),
),
_buildAddCommentSection(),
],
),
);
}
Widget _buildCommentItem(String username, String comment, String likes, int replies) {
return Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(width: 8),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(username, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 4),
Text(comment),
SizedBox(height: 4),
Row(
children: [
Row(
children: [
IconButton(
icon: Icon(Icons.thumb_up),
onPressed: () {
// Implement like functionality
},
),
Text(likes),
],
),
SizedBox(width: 16),
TextButton(
child: Text('View replies ($replies)'),
onPressed: () {
// Implement view replies functionality
},
),
],
),
],
),
),
],
),
);
}
Widget _buildAddCommentSection() {
return Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(width: 8),
Expanded(
child: TextField(
controller: _commentController,
decoration: InputDecoration(
hintText: 'Add Comment...',
border: OutlineInputBorder(),
),
),
),
IconButton(
icon: Icon(Icons.send),
onPressed: () {
// Implement send comment functionality
String newComment = _commentController.text;
if (newComment.isNotEmpty) {
// Add the new comment to the list
setState(() {
// Update the state with the new comment
});
_commentController.clear();
}
},
),
],
),
);
}
}