import 'package:flutter/material.dart';
import 'screens/HomePageScreen.dart';
import 'screens/CleanerScreen.dart';
import 'screens/CloudStorageScreen.dart';
import 'screens/CloudStorageListViewScreen.dart';
import 'screens/FilesScreen.dart';
import 'screens/StorageDetailsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'File Manager',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomePageScreen(),
routes: {
'Cleaner': (context) => CleanerScreen(),
'CloudStorage': (context) => CloudStorageScreen(),
'CloudStorage-ListView': (context) => CloudStorageListViewScreen(),
'Files': (context) => FilesScreen(),
'StorageDetails': (context) => StorageDetailsScreen(),
},
);
}
}