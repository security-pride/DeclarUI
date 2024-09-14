import 'package:flutter/material.dart';
import 'screens/ExploreScreen.dart';
import 'screens/NowPlayingScreen.dart';
import 'screens/PlaylistScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/TrendingScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Music Streaming App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: ExploreScreen(),
routes: {
'Explore': (context) => ExploreScreen(),
'NowPlaying': (context) => NowPlayingScreen(),
'Playlist': (context) => PlaylistScreen(),
'Search': (context) => SearchScreen(),
'Trending': (context) => TrendingScreen(),
},
);
}
}