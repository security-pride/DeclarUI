import 'package:flutter/material.dart';
class SearchMedicineDiseaseScreen extends StatefulWidget {
const SearchMedicineDiseaseScreen({Key? key}) : super(key: key);
@override
_SearchMedicineDiseaseScreenState createState() => _SearchMedicineDiseaseScreenState();
}
class _SearchMedicineDiseaseScreenState extends State<SearchMedicineDiseaseScreen> {
int _selectedIndex = 2;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('健康百科', style: TextStyle(color: Colors.purple)),
actions: [
IconButton(
icon: Icon(Icons.mail_outline),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('三甲医生专业编审·丁香医生官方出品 >', style: TextStyle(fontSize: 12)),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: TextField(
decoration: InputDecoration(
hintText: '搜一搜：疾病/症状/药品/健康问题',
suffixIcon: TextButton(
child: Text('搜索', style: TextStyle(color: Colors.blue)),
onPressed: () {},
),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('近期热点', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
GridView.count(
shrinkWrap: true,
crossAxisCount: 2,
childAspectRatio: 2,
children: [
_buildHotTopicCard('登革热防范手册', '蚊虫叮咬传播，注意预防', 'assets/images/template.png'),
_buildHotTopicCard('了解左氧氟沙星', '使用抗生素，务必遵医嘱', 'assets/images/template.png'),
_buildHotTopicCard('流感应对手册', '流感高发，助你科学应对', 'assets/images/template.png'),
_buildHotTopicCard('了解司美格鲁肽', '合理用药，健康科学减肥', 'assets/images/template.png'),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('查疾病', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('查看更多 >', style: TextStyle(color: Colors.grey)),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text('疾病/症状全了解', style: TextStyle(color: Colors.grey)),
),
GridView.count(
shrinkWrap: true,
crossAxisCount: 4,
children: [
_buildDiseaseIcon('痔疮', Icons.circle),
_buildDiseaseIcon('湿疹', Icons.healing),
_buildDiseaseIcon('带状疱疹', Icons.face),
_buildDiseaseIcon('口腔溃疡', Icons.face),
_buildDiseaseIcon('足癣', Icons.directions_walk),
_buildDiseaseIcon('高血压', Icons.favorite),
_buildDiseaseIcon('糖尿病', Icons.local_hospital),
_buildDiseaseIcon('甲状腺结节', Icons.person),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('查药品', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('查看更多 >', style: TextStyle(color: Colors.grey)),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text('药品说明随手查', style: TextStyle(color: Colors.grey)),
),
ListTile(
title: Text('奥司他韦'),
trailing: Text('HOT', style: TextStyle(color: Colors.red)),
onTap: () {},
),
ListTile(
title: Text('布洛芬混悬液'),
trailing: Icon(Icons.arrow_forward_ios),
onTap: () {},
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.medical_services), label: '问医生'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: '查病查药'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
],
),
);
}
Widget _buildHotTopicCard(String title, String description, String imagePath) {
return Card(
child: Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(description, style: TextStyle(fontSize: 12)),
Image.asset(imagePath, width: 24, height: 24),
],
),
),
);
}
Widget _buildDiseaseIcon(String label, IconData icon) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'DiseaseDetail');
},
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon, color: Colors.blue),
Text(label, style: TextStyle(fontSize: 12)),
],
),
);
}
}