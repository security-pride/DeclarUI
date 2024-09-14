import 'package:flutter/material.dart';
class CommentsScreen extends StatefulWidget {
const CommentsScreen({Key? key}) : super(key: key);
@override
_CommentsScreenState createState() => _CommentsScreenState();
}
class _CommentsScreenState extends State<CommentsScreen> {
final TextEditingController _commentController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('579 comments'),
leading: IconButton(
icon: Icon(Icons.close),
onPressed: () => Navigator.pop(context),
),
),
body: Column(
children: [
Expanded(
child: ListView(
children: [
_buildCommentItem(
'martini_rond',
'How neatly I write the date in my book',
'22h',
'8098',
'4',
),
_buildCommentItem(
'maxjacobson',
"Now that's a skill very talented",
'22h',
'8098',
'1',
),
],
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
Expanded(
child: TextField(
controller: _commentController,
decoration: InputDecoration(
hintText: 'Add comment...',
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
IconButton(
icon: Icon(Icons.send),
onPressed: () {
// Add comment logic here
},
),
],
),
),
],
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.home),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
);
}
Widget _buildCommentItem(String username, String comment, String time, String likes, String replies) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Row(
children: [
Text(username, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(width: 8),
Text(comment),
],
),
subtitle: Row(
children: [
Text(time),
SizedBox(width: 16),
Text('View replies ($replies)'),
],
),
trailing: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.favorite_border),
Text(likes),
],
),
onTap: () {
Navigator.pushNamed(context, 'Home');
},
);
}
@override
void dispose() {
_commentController.dispose();
super.dispose();
}
}