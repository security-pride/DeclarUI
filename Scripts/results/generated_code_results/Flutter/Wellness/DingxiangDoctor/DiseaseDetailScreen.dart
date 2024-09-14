import 'package:flutter/material.dart';
class DiseaseDetailScreen extends StatefulWidget {
const DiseaseDetailScreen({Key? key}) : super(key: key);
@override
_DiseaseDetailScreenState createState() => _DiseaseDetailScreenState();
}
class _DiseaseDetailScreenState extends State<DiseaseDetailScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('口腔溃疡'),
actions: [
IconButton(
icon: Icon(Icons.share),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
padding: EdgeInsets.all(16),
color: Colors.purple.shade100,
child: Text(
'健康百科',
style: TextStyle(color: Colors.purple, fontWeight: FontWeight.bold),
),
),
Padding(
padding: EdgeInsets.all(16),
child: Text(
'三甲医生专业编审 · 丁香医生官方出品',
style: TextStyle(fontSize: 12, color: Colors.grey),
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16),
child: Text('就诊科室：口腔科', style: TextStyle(fontSize: 14)),
),
Padding(
padding: EdgeInsets.all(16),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 25,
),
SizedBox(width: 16),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('苗冬青', style: TextStyle(fontWeight: FontWeight.bold)),
Text('东海县人民医院口腔科', style: TextStyle(fontSize: 12, color: Colors.grey)),
],
),
],
),
),
Padding(
padding: EdgeInsets.all(16),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 25,
),
SizedBox(width: 16),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('李翰', style: TextStyle(fontWeight: FontWeight.bold)),
Text('复旦大学附属口腔医院', style: TextStyle(fontSize: 12, color: Colors.grey)),
],
),
],
),
),
Padding(
padding: EdgeInsets.all(16),
child: Text(
'简介',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16),
child: Text('OVERVIEW', style: TextStyle(color: Colors.grey)),
),
Padding(
padding: EdgeInsets.all(16),
child: Text(
'口腔溃疡是什么？',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16),
child: Text(
'口腔溃疡又称口腔黏膜溃疡，俗称「口疮」，是指在舌、唇内侧、牙龈、颊黏膜、腭等口腔黏膜的上皮完整性发生连续性缺损或破坏，因表层坏死脱落而形成了凹陷。',
style: TextStyle(fontSize: 14),
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: '查疾病药品'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: '评价反馈'),
BottomNavigationBarItem(icon: Icon(Icons.star), label: '收藏'),
],
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 1) {
Navigator.pushNamed(context, 'SearchMedicineDisease');
}
},
),
);
}
}