import 'package:flutter/material.dart';



class DiscoverScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      body: SafeArea(

        child: Column(

          children: [

            _buildHeader(context),

            Expanded(

              child: SingleChildScrollView(

                child: Column(

                  crossAxisAlignment: CrossAxisAlignment.start,

                  children: [

                    _buildHeroSection(),

                    _buildFeaturedCourse(context),

                    _buildPopularCourses(context),

                  ],

                ),

              ),

            ),

            _buildBottomNavBar(context),

          ],

        ),

      ),

    );

  }



  Widget _buildHeader(BuildContext context) {

    return Padding(

      padding: const EdgeInsets.all(16.0),

      child: Row(

        mainAxisAlignment: MainAxisAlignment.spaceBetween,

        children: [

          IconButton(

            icon: Icon(Icons.grid_view),

            onPressed: () {},

          ),

          Text(

            'Discover',

            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),

          ),

          IconButton(

            icon: Stack(

              children: [

                Icon(Icons.notifications),

                Positioned(

                  right: 0,

                  top: 0,

                  child: Container(

                    padding: EdgeInsets.all(2),

                    decoration: BoxDecoration(

                      color: Colors.red,

                      borderRadius: BorderRadius.circular(6),

                    ),

                    constraints: BoxConstraints(

                      minWidth: 12,

                      minHeight: 12,

                    ),

                  ),

                ),

              ],

            ),

            onPressed: () => Navigator.pushNamed(context, 'Notifications'),

          ),

        ],

      ),

    );

  }



  Widget _buildHeroSection() {

    return Padding(

      padding: const EdgeInsets.all(16.0),

      child: Text(

        'Study what you want anytime anywhere',

        style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),

      ),

    );

  }



  Widget _buildFeaturedCourse(BuildContext context) {

    return Padding(

      padding: const EdgeInsets.all(16.0),

      child: GestureDetector(

        onTap: () => Navigator.pushNamed(context, 'CourseDetail'),

        child: Container(

          decoration: BoxDecoration(

            color: Colors.white,

            borderRadius: BorderRadius.circular(12),

            boxShadow: [

              BoxShadow(

                color: Colors.grey.withOpacity(0.1),

                spreadRadius: 1,

                blurRadius: 5,

                offset: Offset(0, 3),

              ),

            ],

          ),

          child: Column(

            crossAxisAlignment: CrossAxisAlignment.start,

            children: [

              ClipRRect(

                borderRadius: BorderRadius.vertical(top: Radius.circular(12)),

                child: Image.asset('assets/images/template.png', fit: BoxFit.cover),

              ),

              Padding(

                padding: const EdgeInsets.all(12.0),

                child: Column(

                  crossAxisAlignment: CrossAxisAlignment.start,

                  children: [

                    Text('Interface Design', style: TextStyle(color: Colors.blue)),

                    SizedBox(height: 4),

                    Text(

                      'User interface for beginners',

                      style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),

                    ),

                    SizedBox(height: 8),

                    Row(

                      children: [

                        Icon(Icons.star, color: Colors.yellow, size: 16),

                        Text(' 4.7 (1,242 Reviews)'),

                      ],

                    ),

                    SizedBox(height: 8),

                    LinearProgressIndicator(

                      value: 0.48,

                      backgroundColor: Colors.grey[200],

                      valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),

                    ),

                    SizedBox(height: 4),

                    Text('48% completed', style: TextStyle(color: Colors.grey)),

                  ],

                ),

              ),

            ],

          ),

        ),

      ),

    );

  }



  Widget _buildPopularCourses(BuildContext context) {

    return Column(

      crossAxisAlignment: CrossAxisAlignment.start,

      children: [

        Padding(

          padding: const EdgeInsets.symmetric(horizontal: 16.0),

          child: Row(

            mainAxisAlignment: MainAxisAlignment.spaceBetween,

            children: [

              Text(

                'Popular Course',

                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),

              ),

              TextButton(

                onPressed: () {},

                child: Text('See All'),

              ),

            ],

          ),

        ),

        SizedBox(height: 8),

        SingleChildScrollView(

          scrollDirection: Axis.horizontal,

          child: Row(

            children: [

              _buildCourseCard(

                context,

                'Graphic Design',

                'Expert Wireframing for Mobile Design',

                'Jerremy Mamika',

                '\$48',

              ),

              _buildCourseCard(

                context,

                'Development',

                'Bootstrapping Principles',

                'Alexander Be',

                '\$55',

              ),

            ],

          ),

        ),

      ],

    );

  }



  Widget _buildCourseCard(BuildContext context, String category, String title, String instructor, String price) {

    return GestureDetector(

      onTap: () => Navigator.pushNamed(context, 'CourseDetail'),

      child: Container(

        width: 240,

        margin: EdgeInsets.only(left: 16, bottom: 16),

        decoration: BoxDecoration(

          color: Colors.white,

          borderRadius: BorderRadius.circular(12),

          boxShadow: [

            BoxShadow(

              color: Colors.grey.withOpacity(0.1),

              spreadRadius: 1,

              blurRadius: 5,

              offset: Offset(0, 3),

            ),

          ],

        ),

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Stack(

              children: [

                ClipRRect(

                  borderRadius: BorderRadius.vertical(top: Radius.circular(12)),

                  child: Image.asset('assets/images/template.png', height: 120, width: 240, fit: BoxFit.cover),

                ),

                Positioned(

                  top: 8,

                  right: 8,

                  child: IconButton(

                    icon: Icon(Icons.favorite_border, color: Colors.white),

                    onPressed: () {},

                  ),

                ),

              ],

            ),

            Padding(

              padding: const EdgeInsets.all(12.0),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Text(category, style: TextStyle(color: Colors.blue)),

                  SizedBox(height: 4),

                  Text(

                    title,

                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),

                    maxLines: 2,

                    overflow: TextOverflow.ellipsis,

                  ),

                  SizedBox(height: 4),

                  Text(instructor, style: TextStyle(color: Colors.grey)),

                  SizedBox(height: 4),

                  Text(price, style: TextStyle(fontWeight: FontWeight.bold)),

                ],

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildBottomNavBar(BuildContext context) {

    return BottomNavigationBar(

      currentIndex: 0,

      onTap: (index) {

        if (index == 1) {

          Navigator.pushNamed(context, 'Statistics');

        } else if (index == 2) {

          Navigator.pushNamed(context, 'Favorites');

        }

      },

      items: [

        BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

        BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Statistic'),

        BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Favorites'),

        BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

      ],

    );

  }

}