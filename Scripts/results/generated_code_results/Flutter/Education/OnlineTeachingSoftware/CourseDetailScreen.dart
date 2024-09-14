import 'package:flutter/material.dart';



class CourseDetailScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      body: SafeArea(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Stack(

              children: [

                Image.asset('assets/images/template.png', fit: BoxFit.cover),

                Positioned(

                  top: 16,

                  left: 16,

                  child: IconButton(

                    icon: Icon(Icons.arrow_back, color: Colors.white),

                    onPressed: () => Navigator.pop(context),

                  ),

                ),

                Positioned(

                  top: 16,

                  right: 16,

                  child: PopupMenuButton(

                    icon: Icon(Icons.more_vert, color: Colors.white),

                    itemBuilder: (context) => [

                      PopupMenuItem(child: Text('Option 1')),

                      PopupMenuItem(child: Text('Option 2')),

                    ],

                  ),

                ),

                Positioned(

                  top: 16,

                  left: 16,

                  child: Container(

                    padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),

                    decoration: BoxDecoration(

                      color: Colors.white,

                      borderRadius: BorderRadius.circular(16),

                    ),

                    child: Text('UI Design', style: TextStyle(color: Colors.black)),

                  ),

                ),

                Positioned(

                  bottom: 16,

                  right: 16,

                  child: IconButton(

                    icon: Icon(Icons.favorite_border, color: Colors.white),

                    onPressed: () {},

                  ),

                ),

              ],

            ),

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Text(

                    'Expert Wireframing for Webiste Design theme food',

                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),

                  ),

                  SizedBox(height: 16),

                  ListTile(

                    contentPadding: EdgeInsets.zero,

                    leading: CircleAvatar(

                      backgroundImage: AssetImage('assets/images/template.png'),

                    ),

                    title: Text('Jerremy Mamika'),

                    trailing: Row(

                      mainAxisSize: MainAxisSize.min,

                      children: [

                        Icon(Icons.star, color: Colors.yellow),

                        Text('4.6'),

                      ],

                    ),

                  ),

                  SizedBox(height: 16),

                  Text(

                    'About Course',

                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),

                  ),

                  SizedBox(height: 8),

                  Text(

                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",

                  ),

                  SizedBox(height: 16),

                  Row(

                    mainAxisAlignment: MainAxisAlignment.spaceBetween,

                    children: [

                      _buildStatItem('30+', 'Lessons'),

                      _buildStatItem('4.5', 'Rating'),

                      _buildStatItem('1.4K', 'Student'),

                    ],

                  ),

                  SizedBox(height: 16),

                  Row(

                    mainAxisAlignment: MainAxisAlignment.spaceBetween,

                    children: [

                      Column(

                        crossAxisAlignment: CrossAxisAlignment.start,

                        children: [

                          Text('Price', style: TextStyle(color: Colors.grey)),

                          Text('\$129', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),

                        ],

                      ),

                      ElevatedButton(

                        onPressed: () {},

                        child: Text('Buy Now'),

                        style: ElevatedButton.styleFrom(

                          backgroundColor: Colors.purple,

                          padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),

                        ),

                      ),

                    ],

                  ),

                ],

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildStatItem(String value, String label) {

    return Column(

      children: [

        Text(value, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

        Text(label, style: TextStyle(color: Colors.grey)),

      ],

    );

  }

}