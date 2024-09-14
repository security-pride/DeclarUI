import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'screens/discover_screen.dart';
import 'screens/course_detail_screen.dart';
import 'screens/favorites_screen.dart';
import 'screens/notifications_screen.dart';
import 'screens/statistics_screen.dart';
void main() {
WidgetsFlutterBinding.ensureInitialized();
SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp])
.then((_) {
runApp(MyApp());
});
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'E-Learning App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: DiscoverScreen(),
routes: {
'Discover': (context) => DiscoverScreen(),
'CourseDetail': (context) => CourseDetailScreen(),
'Favorites': (context) => FavoritesScreen(),
'Notifications': (context) => NotificationsScreen(),
'Statistics': (context) => StatisticsScreen(),
},
);
}
}