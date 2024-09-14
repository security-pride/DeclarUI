import 'package:flutter/material.dart';



class OrdersScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pushNamed(context, 'Profile'),

        ),

        title: TextField(

          decoration: InputDecoration(

            hintText: 'Search Amazon.co.uk',

            prefixIcon: Icon(Icons.search),

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

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Text('Your Orders', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),

          ),

          Padding(

            padding: const EdgeInsets.symmetric(horizontal: 16.0),

            child: Row(

              children: [

                Expanded(

                  child: TextField(

                    decoration: InputDecoration(

                      hintText: 'Search all orders',

                      prefixIcon: Icon(Icons.search),

                      border: OutlineInputBorder(),

                    ),

                  ),

                ),

                TextButton(

                  onPressed: () => Navigator.pushNamed(context, 'Filter'),

                  child: Text('Filter'),

                ),

              ],

            ),

          ),

          ListTile(

            title: Text('Buy again', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

            trailing: Text('See more', style: TextStyle(color: Colors.teal)),

          ),

          Container(

            height: 120,

            child: ListView(

              scrollDirection: Axis.horizontal,

              children: [

                _buildBuyAgainItem('Highland Spring water'),

                _buildBuyAgainItem('Disposable gloves'),

                _buildBuyAgainItem('King pot noodles'),

                _buildBuyAgainItem('Rice'),

              ],

            ),

          ),

          Divider(),

          Padding(

            padding: const EdgeInsets.all(8.0),

            child: Text('Past three months', style: TextStyle(fontSize: 16)),

          ),

          _buildOrderItem(

            'SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...',

            'Delivered 10 June',

            'assets/images/template.png',

          ),

          _buildOrderItem(

            'AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...',

            'Delivered 10 June',

            'assets/images/template.png',

          ),

          _buildOrderItem(

            'Toyama Koshihikari 1kg',

            'Delivered 28 May',

            'assets/images/template.png',

          ),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        currentIndex: 1,

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

        },

      ),

    );

  }



  Widget _buildBuyAgainItem(String title) {

    return Container(

      width: 100,

      margin: EdgeInsets.symmetric(horizontal: 8),

      child: Column(

        children: [

          Image.asset('assets/images/template.png', height: 80),

          Text(title, maxLines: 2, overflow: TextOverflow.ellipsis),

        ],

      ),

    );

  }



  Widget _buildOrderItem(String title, String date, String imagePath) {

    return ListTile(

      leading: Image.asset(imagePath, width: 50, height: 50),

      title: Text(title, maxLines: 2, overflow: TextOverflow.ellipsis),

      subtitle: Text(date),

      trailing: Icon(Icons.chevron_right),

      onTap: () {

        // Navigate to order details

      },

    );

  }

}