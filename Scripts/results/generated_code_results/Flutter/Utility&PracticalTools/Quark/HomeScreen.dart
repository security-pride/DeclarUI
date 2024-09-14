import 'package:flutter/material.dart';



class HomeScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('QuarkHome'),

      ),

      body: Center(

        child: Column(

          mainAxisAlignment: MainAxisAlignment.center,

          children: [

            ElevatedButton(

              child: Text('News'),

              onPressed: () => Navigator.pushNamed(context, 'News'),

            ),

            ElevatedButton(

              child: Text('Select'),

              onPressed: () => Navigator.pushNamed(context, 'Select'),

            ),

            ElevatedButton(

              child: Text('Scanner'),

              onPressed: () => Navigator.pushNamed(context, 'Scanner'),

            ),

            ElevatedButton(

              child: Text('OnlineStorage'),

              onPressed: () => Navigator.pushNamed(context, 'OnlineStorage'),

            ),

          ],

        ),

      ),

    );

  }

}