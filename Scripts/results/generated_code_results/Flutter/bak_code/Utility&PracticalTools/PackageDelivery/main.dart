import 'package:flutter/material.dart';
import 'screens/Home_Top_drawer_closeScreen.dart';
import 'screens/Home_Top_drawer_openScreen.dart';
import 'screens/SendParcel_Delivery_methodScreen.dart';
import 'screens/SendParcel_Parcel_sizeScreen.dart';
import 'screens/Parcel_centerScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Parcel Tracking App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: Home_Top_drawer_closeScreen(),
routes: {
'Home_Top_drawer_close': (context) => Home_Top_drawer_closeScreen(),
'Home_Top_drawer_open': (context) => Home_Top_drawer_openScreen(),
'SendParcel_Delivery_method': (context) => SendParcel_Delivery_methodScreen(),
'SendParcel_Parcel_size': (context) => SendParcel_Parcel_sizeScreen(),
'Parcel_center': (context) => Parcel_centerScreen(),
},
);
}
}