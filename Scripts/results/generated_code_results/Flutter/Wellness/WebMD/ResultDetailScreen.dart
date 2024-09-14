import 'package:flutter/material.dart';
class ResultDetailScreen extends StatefulWidget {
@override
_ResultDetailScreenState createState() => _ResultDetailScreenState();
}
class _ResultDetailScreenState extends State<ResultDetailScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 3, vsync: this);
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
onPressed: () => Navigator.pushNamed(context, 'IdentifyResult'),
),
title: Text('Abilify'),
actions: [
IconButton(icon: Icon(Icons.share), onPressed: () {}),
IconButton(icon: Icon(Icons.bookmark_border), onPressed: () {}),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Uses'),
Tab(text: 'Side Effects'),
Tab(text: 'Precautions'),
],
),
Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', width: 150, height: 150),
SizedBox(height: 16),
Text('Abilify', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
Text('Generic: aripiprazole'),
Text('Common Brand(s): Abilify'),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text('Reviews (1888)', style: TextStyle(color: Colors.blue)),
SizedBox(width: 8),
Row(children: List.generate(3, (index) => Icon(Icons.star, color: Colors.amber)) +
List.generate(2, (index) => Icon(Icons.star_border))),
],
),
],
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: 'Warnings: ', style: TextStyle(fontWeight: FontWeight.bold)),
TextSpan(text: 'If you are using aripiprazo...'),
WidgetSpan(
child: TextButton(
child: Text('Show more'),
onPressed: () {},
),
),
],
),
),
SizedBox(height: 16),
Text(
"This medication is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole belongs to a class of drugs known as atypical antipsychotics. It works by helping to restore the balance of certain natural substances in the brain.",
style: TextStyle(fontSize: 16),
),
],
),
),
],
),
),
bottomNavigationBar: Padding(
padding: EdgeInsets.all(16),
child: Row(
children: [
Expanded(
child: ElevatedButton.icon(
icon: Icon(Icons.add),
label: Text('Add Med Reminder'),
onPressed: () => Navigator.pushNamed(context, 'Reminder'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
foregroundColor: Colors.white,
),
),
),
SizedBox(width: 16),
Expanded(
child: ElevatedButton.icon(
icon: Icon(Icons.search),
label: Text('Search Drug Prices'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
foregroundColor: Colors.white,
),
),
),
],
),
),
);
}
}