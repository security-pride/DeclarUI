import 'package:flutter/material.dart';
class CartScreen extends StatefulWidget {
const CartScreen({Key? key}) : super(key: key);
@override
_CartScreenState createState() => _CartScreenState();
}
class _CartScreenState extends State<CartScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('购物车(18)'),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {
// Implement search functionality
},
),
TextButton(
child: Text('管理'),
onPressed: () {
// Implement manage functionality
},
),
],
),
body: Column(
children: [
Row(
children: [
ElevatedButton(
child: Text('降价'),
onPressed: () {
// Implement discount functionality
},
),
ElevatedButton(
child: Text('常购'),
onPressed: () {
// Implement frequent purchase functionality
},
),
],
),
Expanded(
child: ListView(
children: [
_buildCartItem(
store: '淘宝马克思主义MKSZY',
discount: '每300减30,可跨店',
productName: 'MKSZY 复古水洗做旧短袖T恤',
price: '¥298',
details: 'EVA绫波丽[现货秒发];S',
promotions: ['每300减30', '3期免息', '库存紧张'],
),
_buildCartItem(
store: '天猫NITORI家居官方旗舰店',
productName: 'NITORI圆形舒柔质感抱枕',
promotions: ['假一赔四', '极速退款', '7天无理由退换'],
hasReselect: true,
),
],
),
),
_buildRecommendations(),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 3,
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Home');
break;
case 2:
Navigator.pushNamed(context, 'Message');
break;
case 4:
Navigator.pushNamed(context, 'Profile');
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: '逛逛'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: '消息'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: '购物车'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的淘宝'),
],
),
);
}
Widget _buildCartItem({
required String store,
String? discount,
required String productName,
String? price,
String? details,
List<String>? promotions,
bool hasReselect = false,
}) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(store),
if (discount != null) Text(discount),
Row(
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(productName),
if (details != null) Text(details),
if (price != null) Text(price),
if (promotions != null)
Wrap(
children: promotions
.map((promo) => Chip(label: Text(promo)))
.toList(),
),
],
),
),
],
),
if (hasReselect)
OutlinedButton(
child: Text('重选'),
onPressed: () {
// Implement reselect functionality
},
),
],
),
);
}
Widget _buildRecommendations() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('为你推荐更多同款:'),
Row(
children: [
Stack(
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
Positioned(
top: 0,
left: 0,
child: Container(
color: Colors.red,
padding: EdgeInsets.all(4),
child: Text('商品下架', style: TextStyle(color: Colors.white)),
),
),
],
),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('¥749'),
Row(
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
Text('¥218'),
Image.asset('assets/images/template.png', width: 40, height: 40),
Text('¥128'),
Text('更多 >'),
],
),
],
),
],
),
],
);
}
}