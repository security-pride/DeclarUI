import 'package:flutter/material.dart';
class SendParcel_Delivery_methodScreen extends StatefulWidget {
@override
_SendParcel_Delivery_methodScreenState createState() => _SendParcel_Delivery_methodScreenState();
}
class _SendParcel_Delivery_methodScreenState extends State<SendParcel_Delivery_methodScreen> {
String selectedDeliveryMethod = '';
TextEditingController nameController = TextEditingController();
TextEditingController emailController = TextEditingController();
TextEditingController phoneController = TextEditingController();
TextEditingController addressController = TextEditingController();
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
'Delivery method',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
_buildDeliveryMethodOption(
'From door to parcel center',
'1- 2 days',
'assets/images/template.png',
),
_buildDeliveryMethodOption(
'From door to door',
'2- 3 days',
'assets/images/template.png',
),
SizedBox(height: 24),
Text(
'Recipient info',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
_buildTextField('Name', nameController),
_buildTextField('Email', emailController),
_buildTextField('Phone number', phoneController),
_buildTextField('Address', addressController),
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
if (selectedDeliveryMethod.isNotEmpty &&
nameController.text.isNotEmpty &&
emailController.text.isNotEmpty &&
phoneController.text.isNotEmpty &&
addressController.text.isNotEmpty) {
Navigator.pushNamed(context, 'SendParcel_Parcel_size');
} else {
ScaffoldMessenger.of(context).showSnackBar(
SnackBar(content: Text('Please fill all the fields')),
);
}
},
label: Text('Next'),
icon: Icon(Icons.arrow_forward),
backgroundColor: Colors.black,
),
);
}
Widget _buildDeliveryMethodOption(String title, String subtitle, String imagePath) {
return GestureDetector(
onTap: () {
setState(() {
selectedDeliveryMethod = title;
});
},
child: Container(
margin: EdgeInsets.only(bottom: 16),
decoration: BoxDecoration(
border: Border.all(
color: selectedDeliveryMethod == title ? Colors.black : Colors.grey,
width: 2,
),
borderRadius: BorderRadius.circular(8),
),
child: ListTile(
leading: Image.asset(imagePath, width: 40, height: 40),
title: Text(title),
subtitle: Text(subtitle),
trailing: selectedDeliveryMethod == title
? Icon(Icons.check_circle, color: Colors.black)
: null,
),
),
);
}
Widget _buildTextField(String label, TextEditingController controller) {
return Padding(
padding: const EdgeInsets.only(bottom: 16.0),
child: TextField(
controller: controller,
decoration: InputDecoration(
labelText: label,
border: OutlineInputBorder(),
),
),
);
}
}