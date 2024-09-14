import 'package:flutter/material.dart';
class ExploreScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search exercises',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
Expanded(
child: SingleChildScrollView(
child: Column(
children: [
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 2,
childAspectRatio: 2.5,
padding: EdgeInsets.all(16),
mainAxisSpacing: 16,
crossAxisSpacing: 16,
children: [
_buildCategoryButton('Meditate', Colors.orange, context),
_buildCategoryButton('Sleep', Colors.purple, context),
_buildCategoryButton('Move', Colors.pink, context),
_buildCategoryButton('Music', Colors.blue, context),
],
),
_buildPodcastsButton(),
_buildUnlockLibrarySection(context),
_buildFeaturedContent(context),
],
),
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Today'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Explore'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '子骆'),
],
currentIndex: 1,
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 2) {
Navigator.pushNamed(context, 'Profile');
}
},
),
);
}
Widget _buildCategoryButton(String title, Color color, BuildContext context) {
return ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: color,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
),
onPressed: () {
if (title == 'Move') {
Navigator.pushNamed(context, 'Move');
}
},
child: Text(title, style: TextStyle(fontSize: 18, color: Colors.white)),
);
}
Widget _buildPodcastsButton() {
return Container(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: Colors.yellow,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
),
onPressed: () {},
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Podcasts', style: TextStyle(fontSize: 18, color: Colors.black)),
Image.asset('assets/images/template.png', height: 40),
],
),
),
);
}
Widget _buildUnlockLibrarySection(BuildContext context) {
return Container(
margin: EdgeInsets.all(16),
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.grey[800],
borderRadius: BorderRadius.circular(15),
),
child: Column(
children: [
Text(
'Unlock the Headspace Library',
style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
),
onPressed: () {},
child: Text('Start My Free Trial', style: TextStyle(fontSize: 16)),
),
],
),
);
}
Widget _buildFeaturedContent(BuildContext context) {
return Column(
children: [
_buildFeaturedCard('Politics Without Panic', Colors.pink),
_buildFeaturedCard('Calming Everyday Anxiety', Colors.blue, onTap: () {
Navigator.pushNamed(context, 'CalmMethods');
}),
],
);
}
Widget _buildFeaturedCard(String title, Color color, {VoidCallback? onTap}) {
return GestureDetector(
onTap: onTap,
child: Container(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: color,
borderRadius: BorderRadius.circular(15),
),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title, style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
Image.asset('assets/images/template.png', height: 40),
],
),
),
);
}
}