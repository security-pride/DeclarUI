import 'package:flutter/material.dart';
class AppsScreen extends StatefulWidget {
const AppsScreen({Key? key}) : super(key: key);
@override
_AppsScreenState createState() => _AppsScreenState();
}
class _AppsScreenState extends State<AppsScreen> {
int _dailyPoints = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
actions: [
IconButton(
icon: Icon(Icons.settings),
onPressed: () {
Navigator.pushNamed(context, 'Settings');
},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 30,
),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Sign in to earn daily points',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
Text('$_dailyPoints/30'),
],
),
),
IconButton(
icon: Icon(Icons.arrow_forward_ios),
onPressed: () {
Navigator.pushNamed(context, 'PersonalCentral');
},
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Join Microsoft Rewards to redeem free gifts!',
style: TextStyle(color: Colors.orange),
),
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 4,
children: [
_buildIconButton(Icons.star, 'Interests'),
_buildIconButton(Icons.bookmark, 'Bookmarks'),
_buildIconButton(Icons.history, 'History'),
_buildIconButton(Icons.settings, 'Settings'),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('PINNED', style: TextStyle(fontWeight: FontWeight.bold)),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: OutlinedButton.icon(
icon: Icon(Icons.add),
label: Text('Pin'),
onPressed: () {
// Add pin functionality
},
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('EXPLORE', style: TextStyle(fontWeight: FontWeight.bold)),
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 5,
children: [
_buildIconButton(Icons.card_giftcard, 'Rewards'),
_buildIconButton(Icons.explore, 'Explore AI'),
_buildIconButton(Icons.wallpaper, 'Wallpapers'),
_buildIconButton(Icons.attach_money, 'Money'),
_buildIconButton(Icons.play_arrow, 'Watch'),
_buildIconButton(Icons.games, 'Games'),
_buildIconButton(Icons.article, 'News', onPressed: () {
Navigator.pushNamed(context, 'News');
}),
_buildIconButton(Icons.trending_up, 'Trending'),
_buildIconButton(Icons.image, 'Images'),
_buildIconButton(Icons.cloud, 'Weather'),
_buildIconButton(Icons.calculate, 'Math'),
_buildIconButton(Icons.location_on, 'Nearby'),
_buildIconButton(Icons.local_offer, 'Deals'),
_buildIconButton(Icons.translate, 'Translator'),
_buildIconButton(Icons.straighten, 'Unit Converter'),
],
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Weather'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
BottomNavigationBarItem(icon: Icon(Icons.tab), label: 'Tabs'),
BottomNavigationBarItem(icon: Icon(Icons.apps), label: 'Apps'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
Widget _buildIconButton(IconData icon, String label, {VoidCallback? onPressed}) {
return Column(
mainAxisSize: MainAxisSize.min,
children: [
IconButton(
icon: Icon(icon),
onPressed: onPressed ?? () {},
),
Text(label, textAlign: TextAlign.center),
],
);
}
}