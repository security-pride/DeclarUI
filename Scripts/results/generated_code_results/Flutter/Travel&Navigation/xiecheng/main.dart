import 'package:flutter/material.dart';

import 'screens/HomeScreen.dart';

import 'screens/TravelScreen.dart';

import 'screens/GroupTravelScreen.dart';

import 'screens/GroupTravelSearchResultScreen.dart';

import 'screens/GroupDetailsScreen.dart';



void main() {

  runApp(MyApp());

}



class MyApp extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return MaterialApp(

      title: 'Travel App',

      theme: ThemeData(

        primarySwatch: Colors.blue,

      ),

      initialRoute: 'Home',

      routes: {

        'Home': (context) => HomeScreen(),

        'Travel': (context) => TravelScreen(),

        'GroupTravel': (context) => GroupTravelScreen(),

        'GroupTravelSearchResult': (context) => GroupTravelSearchResultScreen(),

        'GroupDetails': (context) => GroupDetailsScreen(),

      },

    );

  }

}