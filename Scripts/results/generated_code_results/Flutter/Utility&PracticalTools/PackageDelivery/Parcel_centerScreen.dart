import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
class Parcel_centerScreen extends StatefulWidget {
@override
_Parcel_centerScreenState createState() => _Parcel_centerScreenState();
}
class _Parcel_centerScreenState extends State<Parcel_centerScreen> {
GoogleMapController? _mapController;
Set<Marker> _markers = {};
@override
void initState() {
super.initState();
_markers.add(
Marker(
markerId: MarkerId('1'),
position: LatLng(40.7128, -74.0060),
icon: BitmapDescriptor.defaultMarker,
),
);
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Parcel centers'),
backgroundColor: Colors.white,
foregroundColor: Colors.black,
),
body: Column(
children: [
Container(
height: 300,
child: GoogleMap(
initialCameraPosition: CameraPosition(
target: LatLng(40.7128, -74.0060),
zoom: 12,
),
onMapCreated: (GoogleMapController controller) {
_mapController = controller;
},
markers: _markers,
),
),
Expanded(
child: ListView(
children: [
_buildParcelCenterItem(
'NY0924',
'985 Meadow St.',
'Staten Island, NY 10306',
'Fully occupied',
),
_buildParcelCenterItem(
'NY0812',
'54 West Adams Court',
'Rego Park, NY 11374',
'Lots of empty space',
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 2,
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
icon: Icon(Icons.home),
label: 'Parcel center',
),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home_Top_drawer_open');
} else if (index == 1) {
Navigator.pushNamed(context, 'SendParcel_Delivery_method');
}
},
),
);
}
Widget _buildParcelCenterItem(String id, String address1, String address2, String occupancy) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
id,
style: TextStyle(fontWeight: FontWeight.bold),
),
Text(
'Available 24/7',
style: TextStyle(color: Colors.grey),
),
],
),
SizedBox(height: 8),
Text(address1),
Text(address2),
SizedBox(height: 8),
Text(
occupancy,
style: TextStyle(color: occupancy == 'Fully occupied' ? Colors.red : Colors.green),
),
SizedBox(height: 8),
occupancy == 'Fully occupied'
? LinearProgressIndicator(
value: 1,
backgroundColor: Colors.grey[200],
valueColor: AlwaysStoppedAnimation<Color>(Colors.yellow),
)
: Container(),
],
),
),
);
}
}