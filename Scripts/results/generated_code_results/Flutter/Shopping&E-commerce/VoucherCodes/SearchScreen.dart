import 'package:flutter/material.dart';
class SearchScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: TextField(
decoration: InputDecoration(
hintText: 'Start searching',
prefixIcon: Icon(Icons.search),
filled: true,
fillColor: Colors.white,
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
borderSide: BorderSide.none,
),
),
),
backgroundColor: Colors.yellow,
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildSectionHeader('Reward Offers', onViewMore: () => Navigator.pushNamed(context, 'More')),
_buildRewardList(context),
_buildSectionHeader('Trending Now', onViewMore: () {}),
_buildTrendingSection(),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(
icon: Stack(
children: [
Icon(Icons.star),
Positioned(
right: 0,
child: Container(
padding: EdgeInsets.all(1),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(minWidth: 12, minHeight: 12),
child: Text(
'NEW',
style: TextStyle(color: Colors.white, fontSize: 8),
textAlign: TextAlign.center,
),
),
),
],
),
label: 'VIP',
),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Account'),
],
onTap: (index) {
if (index == 3) {
Navigator.pushNamed(context, 'Account');
}
},
),
);
}
Widget _buildSectionHeader(String title, {required VoidCallback onViewMore}) {
return Padding(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
TextButton(
onPressed: onViewMore,
child: Text('View More'),
),
],
),
);
}
Widget _buildRewardList(BuildContext context) {
final rewards = [
{'logo': 'MOBILES.CO.UK', 'title': 'Free £50 Currys Voucher with Vodafone Pa...', 'type': 'Online Reward', 'expiryDate': 'Ends 20 Jul'},
{'logo': 'DUNELM', 'title': 'Free £5 Amazon Voucher with Orders Over...', 'type': 'Online Reward', 'expiryDate': 'Ends today'},
{'logo': 'EBAY', 'title': 'Free £5 Groceries Voucher with Orders Ove...', 'type': 'Online Reward', 'expiryDate': 'Ends 21 Jul'},
{'logo': 'LG', 'title': 'Free £40 Amazon Voucher with Orders Ove...', 'type': 'Online Reward', 'expiryDate': 'Ends 1 Aug'},
{'logo': 'ADIDAS', 'title': 'Free £10 Amazon Voucher with Orders Ove...', 'type': 'Online Reward', 'expiryDate': 'Ends today'},
];
return ListView.builder(
  shrinkWrap: true,
  physics: NeverScrollableScrollPhysics(),
  itemCount: rewards.length,
  itemBuilder: (context, index) {
    final reward = rewards[index];
    return ListTile(
      leading: Image.asset('assets/images/template.png', width: 50, height: 50),
      title: Text(reward['logo']!, style: TextStyle(fontWeight: FontWeight.bold)),
      subtitle: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(reward['title']!),
          Row(
            children: [
              Text(reward['type']!, style: TextStyle(color: Colors.orange)),
              SizedBox(width: 8),
              Text(reward['expiryDate']!, style: TextStyle(color: Colors.grey)),
            ],
          ),
        ],
      ),
      onTap: () => Navigator.pushNamed(context, 'Details'),
    );
  },
);
}
Widget _buildTrendingSection() {
return Container(
height: 200,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildTrendingItem('2 for 1 Entry with National Rail'),
],
),
);
}
Widget _buildTrendingItem(String title) {
return Container(
width: 300,
margin: EdgeInsets.symmetric(horizontal: 8),
child: Column(
children: [
Image.asset('assets/images/template.png', height: 150, fit: BoxFit.cover),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
],
),
);
}
}