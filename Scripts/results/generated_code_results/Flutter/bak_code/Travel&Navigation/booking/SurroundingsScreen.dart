import 'package:flutter/material.dart';
class SurroundingsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Search'),
),
title: Row(
children: [
Text('周围地区'),
SizedBox(width: 8),
Text('7月18日 - 7月19日', style: TextStyle(fontSize: 14)),
],
),
),
body: Column(
children: [
Padding(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
TextButton.icon(
onPressed: () {},
icon: Icon(Icons.sort),
label: Text('排序'),
),
TextButton.icon(
onPressed: () {},
icon: Icon(Icons.filter_list),
label: Text('筛选'),
),
TextButton.icon(
onPressed: () {},
icon: Icon(Icons.map),
label: Text('地图'),
),
],
),
),
Container(
padding: EdgeInsets.all(8),
margin: EdgeInsets.symmetric(horizontal: 16),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(4),
),
child: Row(
children: [
Expanded(
child: Text('所付佣金和其他商业因素可能会影响住宿的排名。了解更多'),
),
IconButton(
icon: Icon(Icons.close),
onPressed: () {},
),
],
),
),
Padding(
padding: EdgeInsets.all(16),
child: Align(
alignment: Alignment.centerLeft,
child: Text('24家住宿', style: TextStyle(fontWeight: FontWeight.bold)),
),
),
Expanded(
child: ListView(
children: [
HotelCard(
name: '烟台南山皇冠假日酒店',
rating: 8.6,
reviewCount: 29,
location: '莱山区, 烟台',
distance: '10千米',
price: '707元',
roomInfo: '1间酒店客房: 2张床',
specialOffer: '该价格在Booking.com上仅剩2间',
paymentOption: '无需预付',
),
HotelCard(
name: '烟台世茂希尔顿酒店',
rating: 8.9,
reviewCount: 40,
location: '烟台',
distance: '750米',
price: '908元',
roomInfo: '1张床',
sustainabilityCertified: true,
),
HotelCard(
name: '烟台孚利泰国际大酒店',
rating: 8.3,
reviewCount: 22,
location: '烟台',
distance: '',
price: '',
roomInfo: '',
specialOffer: '',
paymentOption: '',
),
],
),
),
],
),
);
}
}
class HotelCard extends StatelessWidget {
final String name;
final double rating;
final int reviewCount;
final String location;
final String distance;
final String price;
final String roomInfo;
final String specialOffer;
final String paymentOption;
final bool sustainabilityCertified;
HotelCard({
required this.name,
required this.rating,
required this.reviewCount,
required this.location,
required this.distance,
this.price = '',
this.roomInfo = '',
this.specialOffer = '',
this.paymentOption = '',
this.sustainabilityCertified = false,
});
@override
Widget build(BuildContext context) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Details'),
child: Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover, height: 200),
Positioned(
top: 8,
right: 8,
child: Icon(Icons.favorite_border, color: Colors.white),
),
],
),
Padding(
padding: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(name, style: TextStyle(fontWeight: FontWeight.bold)),
Row(
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
color: Colors.blue,
child: Text(
rating.toString(),
style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
),
),
SizedBox(width: 8),
Text('很棒 · $reviewCount条点评', style: TextStyle(color: Colors.grey)),
],
),
Row(
children: [
Icon(Icons.location_on, size: 16),
Text('$location · 距你: $distance'),
],
),
if (roomInfo.isNotEmpty) Text(roomInfo),
if (price.isNotEmpty)
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(price, style: TextStyle(fontWeight: FontWeight.bold)),
Text('含税费及其他费用', style: TextStyle(fontSize: 12)),
],
),
if (specialOffer.isNotEmpty)
Text(specialOffer, style: TextStyle(color: Colors.red)),
if (paymentOption.isNotEmpty)
Row(
children: [
Icon(Icons.check, color: Colors.green),
Text(paymentOption),
],
),
if (sustainabilityCertified)
Row(
children: [
Icon(Icons.eco, color: Colors.green),
Text('可持续性认证', style: TextStyle(color: Colors.green)),
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
}