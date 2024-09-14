import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/CategoriesScreen.dart';
import 'screens/JewelryCategoryScreen.dart';
import 'screens/SellScreen.dart';
import 'screens/UploadScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: '闲鱼',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Categories': (context) => CategoriesScreen(),
'JewelryCategory': (context) => JewelryCategoryScreen(),
'Sell': (context) => SellScreen(),
'Upload': (context) => UploadScreen(),
},
);
}
}