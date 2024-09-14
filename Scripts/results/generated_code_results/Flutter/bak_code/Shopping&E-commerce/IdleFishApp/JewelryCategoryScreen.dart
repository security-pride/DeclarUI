import 'package:flutter/material.dart';
class JewelryCategoryScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Categories'),
),
title: Text('钱币 陶瓷紫砂 文玩杂项'),
actions: [
IconButton(icon: Icon(Icons.search), onPressed: () {}),
IconButton(icon: Icon(Icons.more_vert), onPressed: () {}),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: Text(
'钱币宝藏 依控漏',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
Container(
padding: EdgeInsets.all(8),
color: Colors.green[100],
child: Row(
children: [
Icon(Icons.check_circle, color: Colors.green),
SizedBox(width: 8),
Text('真品保障 质量问题包退'),
],
),
),
_buildPromotionBanner(),
_buildNewProductsGrid(),
_buildPopularItemsBanner(),
_buildTopRankedItems(),
_buildFilterOptions(),
_buildProductList(),
],
),
),
);
}
Widget _buildPromotionBanner() {
return Container(
margin: EdgeInsets.all(8),
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Colors.orange[100],
borderRadius: BorderRadius.circular(8),
),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('新品凹历 市价3折抢!', style: TextStyle(fontWeight: FontWeight.bold)),
Icon(Icons.arrow_forward_ios, size: 16),
],
),
);
}
Widget _buildNewProductsGrid() {
return GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 4,
children: [
_buildProductItem('面值20元\n官价8折起', '¥65.88起'),
_buildProductItem('面值10元\n官价7折起', '¥25起'),
_buildProductItem('面值3元\n官价8折起', '¥188起'),
_buildProductItem('面值5元\n官价4:', '¥10起'),
],
);
}
Widget _buildProductItem(String title, String price) {
return Card(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', height: 50),
Text(title, textAlign: TextAlign.center),
Text(price, style: TextStyle(color: Colors.red)),
],
),
);
}
Widget _buildPopularItemsBanner() {
return Container(
margin: EdgeInsets.all(8),
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Colors.yellow[100],
borderRadius: BorderRadius.circular(8),
),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('热门纪念币市场价75折起', style: TextStyle(fontWeight: FontWeight.bold)),
Text('快来捡漏！冲！', style: TextStyle(color: Colors.orange)),
],
),
);
}
Widget _buildTopRankedItems() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: Text('热度周榜', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildRankedItem('清 康熙通宝', '¥260', '+13.0%', 'TOP.1'),
_buildRankedItem('清 咸丰通宝、重', '¥549', '-10.1%', 'TOP.2'),
_buildRankedItem('清 乾隆通宝', '¥318', '+6.0%', 'TOP.3'),
],
),
],
);
}
Widget _buildRankedItem(String name, String price, String change, String rank) {
return Column(
children: [
Stack(
alignment: Alignment.topLeft,
children: [
Image.asset('assets/images/template.png', height: 80),
Container(
padding: EdgeInsets.all(2),
color: Colors.red,
child: Text(rank, style: TextStyle(color: Colors.white, fontSize: 10)),
),
],
),
Text(name),
Text(price, style: TextStyle(fontWeight: FontWeight.bold)),
Text(change, style: TextStyle(color: change.startsWith('+') ? Colors.red : Colors.green)),
],
);
}
Widget _buildFilterOptions() {
return Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildFilterButton('爱藏评级'),
_buildFilterButton('保粹评级'),
_buildFilterButton('金盾评级'),
],
);
}
Widget _buildFilterButton(String label) {
return ElevatedButton(
onPressed: () {},
child: Text(label),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.grey[200],
foregroundColor: Colors.black,
),
);
}
Widget _buildProductList() {
return Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
TextButton(onPressed: () {}, child: Text('发布时间')),
TextButton(onPressed: () {}, child: Text('价格')),
TextButton(onPressed: () {}, child: Text('类型')),
],
),
// Add more product items here
_buildProductListItem(),
_buildProductListItem(),
],
);
}
Widget _buildProductListItem() {
return Card(
margin: EdgeInsets.all(8),
child: Row(
children: [
Image.asset('assets/images/template.png', width: 100, height: 100),
Expanded(
child: Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('2023年龙年纪念币', style: TextStyle(fontWeight: FontWeight.bold)),
Text('ACG 67 1361043-003'),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('¥188', style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
Container(
padding: EdgeInsets.all(2),
color: Colors.blue[100],
child: Text('官方承诺'),
),
],
),
],
),
),
),
],
),
);
}
}