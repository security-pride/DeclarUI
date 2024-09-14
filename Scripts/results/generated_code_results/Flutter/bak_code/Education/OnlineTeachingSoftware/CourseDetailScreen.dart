import 'package:flutter/material.dart';
class CourseDetailScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
actions: [
PopupMenuButton(
icon: Icon(Icons.more_vert),
itemBuilder: (context) => [
PopupMenuItem(child: Text('Option 1')),
PopupMenuItem(child: Text('Option 2')),
],
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Image.asset('assets/images/template.png'),
Positioned(
top: 16,
left: 16,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
color: Colors.white,
child: Text('UI Design'),
),
),
Positioned(
top: 16,
right: 16,
child: IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
),
],
),
Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Expert Wireframing for Webiste Design theme food',
style: Theme.of(context).textTheme.headline6,
),
SizedBox(height: 8),
ListTile(
contentPadding: EdgeInsets.zero,
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('Jerremy Mamika'),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.star, color: Colors.yellow),
Text('4.6'),
],
),
),
SizedBox(height: 16),
Text(
'About Course',
style: Theme.of(context).textTheme.subtitle1,
),
SizedBox(height: 8),
Text(
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
_buildInfoWidget('30+', 'Lessons'),
_buildInfoWidget('4.5', 'Rating'),
_buildInfoWidget('1.4K', 'Students'),
],
),
SizedBox(height: 24),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Price',
style: TextStyle(color: Colors.grey),
),
Text(
'$129',
style: Theme.of(context).textTheme.headline5,
),
],
),
ElevatedButton(
child: Text('Buy Now'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.purple,
padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
),
onPressed: () {},
),
],
),
],
),
),
],
),
),
);
}
Widget _buildInfoWidget(String value, String label) {
return Column(
children: [
Text(
value,
style: TextStyle(fontWeight: FontWeight.bold),
),
Text(label),
],
);
}
}