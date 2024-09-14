import 'package:flutter/material.dart';



class AccountScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () {

            Navigator.pushNamed(context, 'Profile');

          },

        ),

        title: TextField(

          decoration: InputDecoration(

            hintText: 'Search Amazon.co.uk',

            suffixIcon: Row(

              mainAxisSize: MainAxisSize.min,

              children: [

                Icon(Icons.camera_alt),

                Icon(Icons.mic),

              ],

            ),

          ),

        ),

      ),

      body: ListView(

        children: [

          Text('Orders', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

          ListTile(

            title: Text('Your Orders'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              Navigator.pushNamed(context, 'Orders');

            },

          ),

          ListTile(

            title: Text('Your Subscribe & Save'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to Subscribe & Save page

            },

          ),

          ListTile(

            title: Text('Your Amazon Day'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to Amazon Day page

            },

          ),

          Text('Payments', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

          ListTile(

            title: Text('Payments and transactions'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to Payments and transactions page

            },

          ),

          ListTile(

            title: Text('Manage gift card balance'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to Manage gift card balance page

            },

          ),

          ListTile(

            title: Text('Shop with Points'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to Shop with Points page

            },

          ),

          ListTile(

            title: Text('Top up account'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to Top up account page

            },

          ),

          ListTile(

            title: Text('In-Store Promo Wallet'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to In-Store Promo Wallet page

            },

          ),

          Text('Customer Service', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

          ListTile(

            title: Text('Contact Us'),

            trailing: Icon(Icons.chevron_right),

            onTap: () {

              // Navigate to Contact Us page

            },

          ),

          Text('Account Settings', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

          // Add more account settings options here

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Cart'),

          BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),

        ],

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Home');

          } else if (index == 1) {

            Navigator.pushNamed(context, 'Profile');

          }

          // Handle other navigation items

        },

      ),

    );

  }

}