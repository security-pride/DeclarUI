import 'package:flutter/material.dart';
class DetailsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover, height: 300),
Positioned(
top: 40,
left: 20,
child: IconButton(
icon: Icon(Icons.arrow_back, color: Colors.white),
onPressed: () {
// Implement logic to decide between Search and SearchCategory
Navigator.pushNamed(context, 'Search');
// Uncomment the line below and comment the above line to navigate to SearchCategory
// Navigator.pushNamed(context, 'SearchCategory');
},
),
),
Positioned(
top: 40,
right: 20,
child: Row(
children: [
IconButton(
icon: Icon(Icons.share, color: Colors.white),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.favorite_border, color: Colors.white),
onPressed: () {},
),
],
),
),
Positioned(
bottom: 10,
right: 10,
child: Text('1/52', style: TextStyle(color: Colors.white)),
),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Pitch 24 Creek Caravan Park Ringstead狗友好',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text('英国英格兰多塞特(Dorset)的整套小木屋'),
Text('6位房客 · 2间卧室 · 3张床 · 1.5个卫生间'),
SizedBox(height: 16),
Row(
children: [
Text('4.80', style: TextStyle(fontWeight: FontWeight.bold)),
Icon(Icons.star, color: Colors.yellow),
SizedBox(width: 8),
Text('房客推荐'),
SizedBox(width: 8),
Text('5条评价'),
],
),
SizedBox(height: 16),
Wrap(
spacing: 8,
runSpacing: 8,
children: [
_buildFeature(Icons.beach_access, '海景民宿'),
_buildFeature(Icons.thumb_up, '超赞房东'),
_buildFeature(Icons.location_on, '位置极佳'),
_buildFeature(Icons.vpn_key, '入住便捷'),
_buildFeature(Icons.wifi, '无线网络'),
],
),
SizedBox(height: 16),
Text('8月3日前免费取消'),
SizedBox(height: 16),
Row(
children: [
Icon(Icons.diamond, color: Colors.pink),
SizedBox(width: 8),
Text('这个房源很抢手', style: TextStyle(color: Colors.pink)),
],
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('¥2,424 /晚', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
Text('9月2日至7日'),
],
),
ElevatedButton(
child: Text('预订'),
onPressed: () => Navigator.pushNamed(context, 'Reservation'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink,
foregroundColor: Colors.white,
),
),
],
),
],
),
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Comments'),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('查看全部5条评价', style: TextStyle(decoration: TextDecoration.underline)),
Icon(Icons.arrow_forward_ios, size: 16),
],
),
),
),
],
),
),
);
}
Widget _buildFeature(IconData icon, String text) {
return Container(
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
decoration: BoxDecoration(
border: Border.all(color: Colors.grey),
borderRadius: BorderRadius.circular(20),
),
child: Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(icon, size: 16),
SizedBox(width: 4),
Text(text),
],
),
);
}
}