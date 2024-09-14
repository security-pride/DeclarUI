import 'package:flutter/material.dart';
class SendParcel_Parcel_sizeScreen extends StatefulWidget {
@override
_SendParcel_Parcel_sizeScreenState createState() => _SendParcel_Parcel_sizeScreenState();
}
class _SendParcel_Parcel_sizeScreenState extends State<SendParcel_Parcel_sizeScreen> {
String selectedSize = '';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Send parcel'),
backgroundColor: Colors.white,
foregroundColor: Colors.black,
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Parcel size',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
_buildParcelSizeCard(
'Small',
'Max. 25 kg, 8 x 38 x 64 cm',
'Fits in an envelope',
'assets/images/template.png',
),
_buildParcelSizeCard(
'Medium',
'Max. 25 kg, 19 x 38 x 64 cm',
'Fits in a shoe box',
'assets/images/template.png',
),
_buildParcelSizeCard(
'Large',
'Max. 25 kg, 41 x 38 x 64 cm',
'Fits in a cardboard box',
'assets/images/template.png',
),
_buildParcelSizeCard(
'Custom',
'Max: 30kg or 300cm',
'Fits on a skid',
'assets/images/template.png',
),
],
),
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.mail_outline),
label: 'My parcels',
),
BottomNavigationBarItem(
icon: Icon(Icons.send),
label: 'Send parcel',
),
BottomNavigationBarItem(
icon: Icon(Icons.location_on_outlined),
label: 'Parcel center',
),
],
),
floatingActionButton: FloatingActionButton.extended(
onPressed: () {
if (selectedSize.isNotEmpty) {
// TODO: Navigate to the next screen or process the parcel
ScaffoldMessenger.of(context).showSnackBar(
SnackBar(content: Text('Parcel size selected: $selectedSize')),
);
} else {
ScaffoldMessenger.of(context).showSnackBar(
SnackBar(content: Text('Please select a parcel size')),
);
}
},
label: Text('Next'),
icon: Icon(Icons.arrow_forward),
backgroundColor: Colors.black,
),
);
}
Widget _buildParcelSizeCard(String title, String dimensions, String description, String imagePath) {
return GestureDetector(
onTap: () {
setState(() {
selectedSize = title;
});
},
child: Card(
margin: EdgeInsets.only(bottom: 16),
shape: RoundedRectangleBorder(
borderRadius: BorderRadius.circular(8),
side: BorderSide(
color: selectedSize == title ? Colors.black : Colors.grey.shade300,
width: 2,
),
),
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Image.asset(imagePath, width: 60, height: 60),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text(dimensions),
Text(description, style: TextStyle(color: Colors.grey)),
],
),
),
if (selectedSize == title)
Icon(Icons.check_circle, color: Colors.black),
],
),
),
),
);
}
}