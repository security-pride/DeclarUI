import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
const SearchScreen({Key? key}) : super(key: key);
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
final TextEditingController _searchController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: TextField(
controller: _searchController,
decoration: InputDecoration(
hintText: '搜索',
border: InputBorder.none,
prefixIcon: Icon(Icons.search),
),
),
actions: [
TextButton(
onPressed: () => Navigator.pushNamed(context, 'Home'),
child: Text('取消', style: TextStyle(color: Colors.black)),
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('热门推荐', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 2,
childAspectRatio: 1.5,
children: [
_buildRecommendationCard('免费导诊', '为你量身推荐专家', Colors.green, Icons.assignment),
_buildRecommendationCard('新人问医生\n9.9 元起', '立即咨询', Colors.orange, Icons.medical_services),
_buildRecommendationCard('直播课件', '直播内容文字版\n持续更新', Colors.blue, Icons.live_tv),
_buildRecommendationCard('视频问医生', '面对面问诊\n更安心', Colors.orange, Icons.video_call),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('热门搜索', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Wrap(
spacing: 8,
runSpacing: 8,
children: [
_buildSearchTag('痔疮', isHot: true),
_buildSearchTag('湿疹', isHot: true),
_buildSearchTag('甲状腺结节'),
_buildSearchTag('荨麻疹'),
_buildSearchTag('痛风'),
_buildSearchTag('前列腺炎'),
],
),
),
],
),
),
);
}
Widget _buildRecommendationCard(String title, String description, Color color, IconData icon) {
return Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Icon(icon, color: color, size: 32),
SizedBox(height: 8),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 4),
Text(description, style: TextStyle(fontSize: 12, color: Colors.grey)),
],
),
),
);
}
Widget _buildSearchTag(String label, {bool isHot = false}) {
return Container(
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(16),
),
child: Row(
mainAxisSize: MainAxisSize.min,
children: [
if (isHot) Icon(Icons.whatshot, color: Colors.red, size: 16),
Text(label),
],
),
);
}
@override
void dispose() {
_searchController.dispose();
super.dispose();
}
}