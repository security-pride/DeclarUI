import 'package:flutter/material.dart';
class SearchResultScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
backgroundColor: Colors.white,
elevation: 0,
leading: IconButton(
icon: Icon(Icons.arrow_back, color: Colors.black),
onPressed: () => Navigator.pop(context),
),
title: TextField(
decoration: InputDecoration(
hintText: 'Gracia',
prefixIcon: Icon(Icons.search),
border: InputBorder.none,
),
),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16.0),
child: Text(
'Related Result',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
_buildProfileCard(
name: 'Klee Gracia',
age: 24,
interests: ['Running', 'Outdoor', 'Anime'],
bio: "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",
isPotentialMatch: true,
context: context,
),
Padding(
padding: EdgeInsets.all(16.0),
child: Text(
'More About Gracia',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
_buildRelatedProfileGrid(context),
],
),
),
);
}
Widget _buildProfileCard({
required String name,
required int age,
required List<String> interests,
required String bio,
required bool isPotentialMatch,
required BuildContext context,
}) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Profile'),
child: Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
ClipRRect(
borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
child: Image.asset('assets/images/template.png', fit: BoxFit.cover, height: 200, width: double.infinity),
),
if (isPotentialMatch)
Positioned(
top: 16,
left: 16,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.black.withOpacity(0.6),
borderRadius: BorderRadius.circular(16),
),
child: Row(
children: [
Icon(Icons.bolt, color: Colors.yellow, size: 16),
SizedBox(width: 4),
Text('Potential Match!', style: TextStyle(color: Colors.white, fontSize: 12)),
],
),
),
),
],
),
Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Text('$name, $age', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(width: 8),
Icon(Icons.verified, color: Colors.blue, size: 20),
],
),
SizedBox(height: 8),
Wrap(
spacing: 8,
children: interests.map((interest) => Chip(label: Text(interest))).toList(),
),
SizedBox(height: 8),
Text(bio, style: TextStyle(fontSize: 14)),
],
),
),
],
),
),
);
}
Widget _buildRelatedProfileGrid(BuildContext context) {
final relatedProfiles = [
{'name': 'Mika Gracia', 'age': 18, 'location': 'Bali, Indonesia', 'matchPercentage': 98},
{'name': 'Gracy Logan', 'age': 28, 'location': 'Jakarta, Indonesia', 'matchPercentage': 98},
{'name': 'R.O Gracia', 'age': 17, 'location': 'Bekasi, Indonesia', 'matchPercentage': 93},
{'name': 'Audrey Gracia', 'age': 17, 'location': 'Bali, Indonesia', 'matchPercentage': 93},
];
reasonml
复制
return GridView.builder(
  shrinkWrap: true,
  physics: NeverScrollableScrollPhysics(),
  padding: EdgeInsets.symmetric(horizontal: 16),
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    childAspectRatio: 0.7,
    crossAxisSpacing: 16,
    mainAxisSpacing: 16,
  ),
  itemCount: relatedProfiles.length,
  itemBuilder: (context, index) {
    final profile = relatedProfiles[index];
    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, 'Profile'),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          image: DecorationImage(
            image: AssetImage('assets/images/template.png'),
            fit: BoxFit.cover,
          ),
        ),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Colors.transparent, Colors.black.withOpacity(0.8)],
            ),
          ),
          padding: EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Text(
                '${profile['matchPercentage']}% Match',
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 4),
              Text(
                '${profile['name']}, ${profile['age']}',
                style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 4),
              Text(
                '${profile['location']}',
                style: TextStyle(color: Colors.white70, fontSize: 12),
              ),
            ],
          ),
        ),
      ),
    );
  },
);
}
}