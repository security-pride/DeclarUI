import 'package:flutter/material.dart';



class OnlineStorageScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('OnlineStorage'),

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pushNamed(context, 'Home'),

        ),

      ),

      body: Center(

        child: Text('OnlineStorage Screen Content'),

      ),

    );

  }

}