import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchMedicineDiseaseScreen.dart';
import 'screens/DiseaseDetailScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: '丁香医生',
theme: ThemeData(
primarySwatch: Colors.purple,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Search': (context) => SearchScreen(),
'Profile': (context) => ProfileScreen(),
'SearchMedicineDisease': (context) => SearchMedicineDiseaseScreen(),
'DiseaseDetail': (context) => DiseaseDetailScreen(),
},
);
}
}