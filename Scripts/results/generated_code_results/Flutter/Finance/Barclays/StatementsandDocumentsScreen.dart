import 'package:flutter/material.dart';
class StatementsandDocumentsScreen extends StatefulWidget {
@override
_StatementsandDocumentsScreenState createState() => _StatementsandDocumentsScreenState();
}
class _StatementsandDocumentsScreenState extends State<StatementsandDocumentsScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 2, vsync: this);
}
@override
void dispose() {
_tabController.dispose();
super.dispose();
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'More'),
),
title: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Statements and documents'),
Text('20-25-24 90427500', style: TextStyle(fontSize: 14)),
],
),
actions: [
IconButton(
icon: Icon(Icons.help_outline),
onPressed: () => Navigator.pushNamed(context, 'Help'),
),
],
),
body: Column(
children: [
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Statements'),
Tab(text: 'Documents'),
],
),
Expanded(
child: TabBarView(
controller: _tabController,
children: [
_buildStatementsTab(),
Center(child: Text('Documents tab content')),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Accounts'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_bag), label: 'Products'),
BottomNavigationBarItem(icon: Icon(Icons.swap_horiz), label: 'Pay & Transfer'),
BottomNavigationBarItem(icon: Icon(Icons.help), label: 'Help'),
BottomNavigationBarItem(icon: Icon(Icons.more_horiz), label: 'More'),
],
onTap: (index) {
if (index == 3) {
Navigator.pushNamed(context, 'Help');
} else if (index == 4) {
Navigator.pushNamed(context, 'More');
}
},
),
);
}
Widget _buildStatementsTab() {
return ListView(
children: [
Padding(
padding: EdgeInsets.all(16),
child: Text('2024', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
_buildStatementItem('11 Jul', 'Statement 11-JUL-24 AC 90427500 13043626'),
_buildStatementItem('11 Jun', 'Statement 11-JUN-24 AC 90427500 13043605'),
_buildStatementItem('10 May', 'Statement 10-MAY-24 AC 90427500 13053150'),
_buildStatementItem('11 Apr', 'Statement 11-APR-24 AC 90427500 15105508'),
_buildStatementItem('11 Mar', 'Statement 11-MAR-24 AC 90427500 13050608'),
_buildStatementItem('09 Feb', 'Statement 09-FEB-24 AC 90427500 11043935'),
_buildStatementItem('11 Jan', 'Statement 11-JAN-24 AC 90427500 13043928'),
],
);
}
Widget _buildStatementItem(String date, String description) {
return ListTile(
leading: Container(
width: 10,
height: 10,
decoration: BoxDecoration(
color: Colors.blue,
shape: BoxShape.circle,
),
),
title: Text(description),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Text(date, style: TextStyle(color: Colors.blue)),
Icon(Icons.chevron_right, color: Colors.blue),
],
),
onTap: () {
// Handle statement item tap
},
);
}
}