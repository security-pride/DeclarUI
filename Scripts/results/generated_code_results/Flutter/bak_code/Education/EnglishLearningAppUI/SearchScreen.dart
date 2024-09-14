import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
const SearchScreen({Key? key}) : super(key: key);
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
int _selectedIndex = 1;
String _selectedCategory = 'Sentence';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('9:41'),
actions: [
Icon(Icons.signal_cellular_alt),
SizedBox(width: 8),
Icon(Icons.wifi),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Find anything!',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text(
'Searching anything you want to learn here.',
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 16),
TextField(
decoration: InputDecoration(
hintText: 'Search...',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
SizedBox(height: 16),
Text(
'Choose a category',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
children: [
_buildCategoryButton('Sentence'),
SizedBox(width: 8),
_buildCategoryButton('Speak'),
],
),
SizedBox(height: 16),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCategoryCard('Movie', Icons.chat_bubble),
SizedBox(width: 8),
_buildCategoryCard('Travel', Icons.luggage),
SizedBox(width: 8),
_buildCategoryCard('Music', Icons.headphones),
],
),
),
],
),
),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Channel',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
TextButton(
onPressed: () {},
child: Text('view all'),
),
],
),
),
_buildChannelItem('Cornelia Gordon', '129k subscribers'),
_buildChannelItem('Chase Bailey', '129k subscribers'),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 2) {
Navigator.pushNamed(context, 'Speak');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.mic), label: 'Speak'),
BottomNavigationBarItem(icon: Icon(Icons.book), label: 'Vocabulary'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
),
);
}
Widget _buildCategoryButton(String category) {
return ElevatedButton(
onPressed: () {
setState(() {
_selectedCategory = category;
});
},
style: ElevatedButton.styleFrom(
backgroundColor: _selectedCategory == category ? Colors.blue : Colors.grey,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
),
child: Text(category),
);
}
Widget _buildCategoryCard(String title, IconData icon) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'LessonDetail');
},
child: Container(
width: 120,
height: 160,
decoration: BoxDecoration(
borderRadius: BorderRadius.circular(16),
image: DecorationImage(
image: AssetImage('assets/images/template.png'),
fit: BoxFit.cover,
),
),
child: Stack(
children: [
Container(
decoration: BoxDecoration(
borderRadius: BorderRadius.circular(16),
gradient: LinearGradient(
begin: Alignment.topCenter,
end: Alignment.bottomCenter,
colors: [Colors.transparent, Colors.black.withOpacity(0.7)],
),
),
),
Padding(
padding: const EdgeInsets.all(12.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
mainAxisAlignment: MainAxisAlignment.end,
children: [
Icon(icon, color: Colors.white),
SizedBox(height: 4),
Text(
title,
style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
),
],
),
),
],
),
),
);
}
Widget _buildChannelItem(String name, String subscribers) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(name),
subtitle: Text(subscribers),
trailing: IconButton(
icon: Icon(Icons.arrow_forward_ios),
onPressed: () {
Navigator.pushNamed(context, 'LessonDetail');
},
),
);
}
}