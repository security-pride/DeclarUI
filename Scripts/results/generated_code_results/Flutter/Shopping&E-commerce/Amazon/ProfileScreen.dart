import 'package:flutter/material.dart';



class ProfileScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Image.asset('assets/images/template.png', height: 30),

        actions: [

          Stack(

            children: [

              IconButton(

                icon: Icon(Icons.notifications),

                onPressed: () {},

              ),

              Positioned(

                right: 8,

                top: 8,

                child: Container(

                  padding: EdgeInsets.all(2),

                  decoration: BoxDecoration(

                    color: Colors.red,

                    borderRadius: BorderRadius.circular(6),

                  ),

                  constraints: BoxConstraints(

                    minWidth: 14,

                    minHeight: 14,

                  ),

                  child: Text(

                    '1',

                    style: TextStyle(

                      color: Colors.white,

                      fontSize: 8,

                    ),

                    textAlign: TextAlign.center,

                  ),

                ),

              ),

            ],

          ),

          IconButton(

            icon: Icon(Icons.search),

            onPressed: () {},

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            ListTile(

              leading: CircleAvatar(

                backgroundImage: AssetImage('assets/images/template.png'),

              ),

              title: Text('Hello, ml296'),

              trailing: Row(

                mainAxisSize: MainAxisSize.min,

                children: [

                  Image.asset('assets/images/template.png', width: 30),

                  SizedBox(width: 8),

                  Text('EN'),

                ],

              ),

            ),

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Wrap(

                spacing: 16,

                runSpacing: 16,

                children: [

                  ElevatedButton(

                    onPressed: () => Navigator.pushNamed(context, 'Orders'),

                    child: Text('Your Orders'),

                    style: ElevatedButton.styleFrom(

                      minimumSize: Size(160, 50),

                    ),

                  ),

                  ElevatedButton(

                    onPressed: () {},

                    child: Text('Buy Again'),

                    style: ElevatedButton.styleFrom(

                      minimumSize: Size(160, 50),

                    ),

                  ),

                  ElevatedButton(

                    onPressed: () => Navigator.pushNamed(context, 'Account'),

                    child: Text('Your Account'),

                    style: ElevatedButton.styleFrom(

                      minimumSize: Size(160, 50),

                    ),

                  ),

                  ElevatedButton(

                    onPressed: () {},

                    child: Text('Your Lists'),

                    style: ElevatedButton.styleFrom(

                      minimumSize: Size(160, 50),

                    ),

                  ),

                ],

              ),

            ),

            ListTile(

              title: Text('Your Orders', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

              trailing: Text('See all', style: TextStyle(color: Colors.blue)),

              onTap: () => Navigator.pushNamed(context, 'Orders'),

            ),

            Container(

              height: 150,

              child: ListView(

                scrollDirection: Axis.horizontal,

                children: [

                  _buildOrderItem('assets/images/template.png'),

                  _buildOrderItem('assets/images/template.png'),

                ],

              ),

            ),

            ListTile(

              title: Text('Buy again', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

              trailing: Text('See all', style: TextStyle(color: Colors.blue)),

              onTap: () {},

            ),

            Container(

              height: 150,

              child: ListView(

                scrollDirection: Axis.horizontal,

                children: [

                  _buildBuyAgainItem('assets/images/template.png'),

                  _buildBuyAgainItem('assets/images/template.png'),

                  _buildBuyAgainItem('assets/images/template.png'),

                  _buildBuyAgainItem('assets/images/template.png'),

                  _buildBuyAgainItem('assets/images/template.png'),

                  _buildBuyAgainItem('assets/images/template.png'),

                ],

              ),

            ),

          ],

        ),

      ),

      bottomNavigationBar: BottomNavigationBar(

        type: BottomNavigationBarType.fixed,

        currentIndex: 1,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

          BottomNavigationBarItem(

            icon: Stack(

              children: [

                Icon(Icons.shopping_cart),

                Positioned(

                  right: 0,

                  child: Container(

                    padding: EdgeInsets.all(1),

                    decoration: BoxDecoration(

                      color: Colors.red,

                      borderRadius: BorderRadius.circular(6),

                    ),

                    constraints: BoxConstraints(

                      minWidth: 12,

                      minHeight: 12,

                    ),

                    child: Text(

                      '2',

                      style: TextStyle(

                        color: Colors.white,

                        fontSize: 8,

                      ),

                      textAlign: TextAlign.center,

                    ),

                  ),

                )

              ],

            ),

            label: 'Cart',

          ),

          BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),

        ],

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Home');

          }

        },

      ),

    );

  }



  Widget _buildOrderItem(String imagePath) {

    return Container(

      width: 150,

      margin: EdgeInsets.all(8),

      child: Image.asset(imagePath, fit: BoxFit.cover),

    );

  }



  Widget _buildBuyAgainItem(String imagePath) {

    return Container(

      width: 100,

      margin: EdgeInsets.all(8),

      child: Image.asset(imagePath, fit: BoxFit.cover),

    );

  }

}