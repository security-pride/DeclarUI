import 'package:flutter/material.dart';



class ScannerScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('Scanner'),

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pushNamed(context, 'Home'),

        ),

      ),

      body: Center(

        child: Text('Scanner Screen Content'),

      ),

    );

  }

}