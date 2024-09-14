import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/CourseDetailScreen.dart';
import 'screens/LessonsScreen.dart';
import 'screens/DownloadsScreen.dart';
import 'screens/MyListScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Course Learning App',
theme: ThemeData(
primarySwatch: Colors.blue,
scaffoldBackgroundColor: Color(0xFF1E1E1E),
textTheme: Theme.of(context).textTheme.apply(
bodyColor: Colors.white,
displayColor: Colors.white,
),
),
home: HomeScreen(),
routes: {
'CourseDetail': (context) => CourseDetailScreen(),
'Lessons': (context) => LessonsScreen(),
'Downloads': (context) => DownloadsScreen(),
'MyList': (context) => MyListScreen(),
},
);
}
}