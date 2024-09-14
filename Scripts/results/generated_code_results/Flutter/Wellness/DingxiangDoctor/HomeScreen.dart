import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('丁香医生'),
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
padding: const EdgeInsets.all(8.0),
child: Text('三甲医生 双重审核 专业循证'),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: '甲流发烧几天',
suffixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
onTap: () => Navigator.pushNamed(context, 'Search'),
),
),
Wrap(
spacing: 8,
children: [
Chip(label: Text('每日辟谣')),
Chip(label: Text('免费导诊')),
Chip(label: Text('痔疮')),
Chip(label: Text('甲状腺结节')),
Chip(label: Text('荨麻疹')),
Chip(label: Text('痛风')),
],
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildFeatureColumn(Icons.medical_services, '问医生', '全国三甲医生'),
_buildFeatureColumn(Icons.search, '查疾病', '权威疾病百科'),
_buildFeatureColumn(Icons.medication, '查药品', '7万药品说明书'),
],
),
_buildConsultationCard('免费导诊', '描述问题，精准推荐医生', '24小时在线', Colors.blue),
_buildConsultationCard('视频问诊', '面对面更安心', null, Colors.green),
_buildConsultationCard('新人义诊', '9.9元起问医生', null, Colors.orange),
Padding(
padding: const EdgeInsets.all(8.0),
child: Wrap(
spacing: 8,
children: [
_buildDepartmentIcon(Icons.healing, '皮肤科'),
_buildDepartmentIcon(Icons.child_care, '儿科'),
_buildDepartmentIcon(Icons.pregnant_woman, '妇产科'),
_buildDepartmentIcon(Icons.restaurant, '消化内科'),
_buildDepartmentIcon(Icons.more_horiz, '更多科室'),
],
),
),
ListTile(
leading: Icon(Icons.calendar_today),
title: Text('缓解痛风的一个小习惯，要坚持'),
subtitle: Text('健康日历 | 2.6万人查看'),
trailing: ElevatedButton(
child: Text('去了解'),
onPressed: () {},
),
),
ListTile(
leading: CircleAvatar(child: Text('404')),
title: Text('飞行员的眼力测试图，你能看到几个数字？'),
trailing: Icon(Icons.arrow_forward_ios),
onTap: () {},
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: '问医生'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: '查病查药'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
],
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 2) {
Navigator.pushNamed(context, 'SearchMedicineDisease');
} else if (index == 3) {
Navigator.pushNamed(context, 'Profile');
}
},
),
);
}
Widget _buildFeatureColumn(IconData icon, String title, String description) {
return Column(
children: [
CircleAvatar(
child: Icon(icon),
backgroundColor: Colors.blue,
),
Text(title),
Text(description, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildConsultationCard(String title, String description, String? onlineStatus, Color color) {
return Card(
child: ListTile(
leading: CircleAvatar(backgroundColor: color),
title: Text(title),
subtitle: Text(description),
trailing: onlineStatus != null ? Text(onlineStatus) : null,
),
);
}
Widget _buildDepartmentIcon(IconData icon, String label) {
return Column(
children: [
Icon(icon),
Text(label),
],
);
}
}