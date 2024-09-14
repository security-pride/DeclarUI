import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/DiscoverScreen.dart';
import 'screens/CourseDetailScreen.dart';
import 'screens/MyCoursesScreen.dart';
import 'screens/SearchScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Course Discovery App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Discover': (context) => DiscoverScreen(),
'CourseDetail': (context) => CourseDetailScreen(),
'MyCourses': (context) => MyCoursesScreen(),
'Search': (context) => SearchScreen(),
},
);
}
}