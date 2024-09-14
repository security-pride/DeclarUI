import 'package:flutter/material.dart';



class FavoritesScreen extends StatefulWidget {

  @override

  _FavoritesScreenState createState() => _FavoritesScreenState();

}



class _FavoritesScreenState extends State<FavoritesScreen> {

  String selectedCategory = 'All Course';



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      body: SafeArea(

        child: Column(

          children: [

            _buildHeader(),

            _buildSearchBar(),

            _buildCategoryTabs(),

            Expanded(

              child: _buildFavoriteCoursesList(),

            ),

            _buildBottomNavBar(),

          ],

        ),

      ),

    );

  }



  Widget _buildHeader() {

    return Padding(

      padding: const EdgeInsets.all(16.0),

      child: Row(

        mainAxisAlignment: MainAxisAlignment.spaceBetween,

        children: [

          Text(

            'Favorite',

            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),

          ),

          IconButton(

            icon: Stack(

              children: [

                Icon(Icons.notifications_none),

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



  Widget _buildSearchBar() {

    return Padding(

      padding: const EdgeInsets.symmetric(horizontal: 16.0),

      child: TextField(

        decoration: InputDecoration(

          hintText: 'Search...',

          prefixIcon: Icon(Icons.search),

          suffixIcon: Icon(Icons.tune),

          border: OutlineInputBorder(

            borderRadius: BorderRadius.circular(30),

            borderSide: BorderSide.none,

          ),

          filled: true,

          fillColor: Colors.grey[200],

        ),

      ),

    );

  }



  Widget _buildCategoryTabs() {

    List<String> categories = ['All Course', 'UX Design', 'UI Design', '3D Anima'];

    return Container(

      height: 50,

      margin: EdgeInsets.symmetric(vertical: 16),

      child: ListView.builder(

        scrollDirection: Axis.horizontal,

        itemCount: categories.length,

        itemBuilder: (context, index) {

          return Padding(

            padding: EdgeInsets.only(left: index == 0 ? 16 : 8, right: 8),

            child: ElevatedButton(

              onPressed: () {

                setState(() {

                  selectedCategory = categories[index];

                });

              },

              child: Text(categories[index]),

              style: ElevatedButton.styleFrom(

                backgroundColor: selectedCategory == categories[index] ? Colors.purple : Colors.grey[300],

                foregroundColor: selectedCategory == categories[index] ? Colors.white : Colors.black,

                shape: RoundedRectangleBorder(

                  borderRadius: BorderRadius.circular(20),

                ),

              ),

            ),

          );

        },

      ),

    );

  }



  Widget _buildFavoriteCoursesList() {

    return ListView(

      children: [

        _buildDateSection('May 12, 2023'),

        _buildCourseCard(

          'Graphic Design',

          'Expert Wireframing for Mobile Design',

          'Jerremy Mamika',

          '\$48',

        ),

        _buildCourseCard(

          'Development',

          'Bootstrapping Principles',

          'Alexander Be',

          '\$55',

        ),

        _buildDateSection('May 08, 2023'),

        _buildCourseCard(

          'Graphic Design',

          'Expert Wireframing for Mobile Design',

          'Jerremy Mamika',

          '\$48',

        ),

      ],

    );

  }



  Widget _buildDateSection(String date) {

    return Padding(

      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),

      child: Row(

        mainAxisAlignment: MainAxisAlignment.spaceBetween,

        children: [

          Text(

            date,

            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),

          ),

          TextButton(

            onPressed: () {},

            child: Text('See All'),

          ),

        ],

      ),

    );

  }



  Widget _buildCourseCard(String category, String title, String instructor, String price) {

    return GestureDetector(

      onTap: () => Navigator.pushNamed(context, 'CourseDetail'),

      child: Card(

        margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),

        child: Row(

          children: [

            ClipRRect(

              borderRadius: BorderRadius.only(

                topLeft: Radius.circular(8),

                bottomLeft: Radius.circular(8),

              ),

              child: Stack(

                children: [

                  Image.asset(

                    'assets/images/template.png',

                    width: 100,

                    height: 100,

                    fit: BoxFit.cover,

                  ),

                  Positioned(

                    top: 8,

                    right: 8,

                    child: Icon(Icons.favorite, color: Colors.red),

                  ),

                ],

              ),

            ),

            Expanded(

              child: Padding(

                padding: const EdgeInsets.all(12.0),

                child: Column(

                  crossAxisAlignment: CrossAxisAlignment.start,

                  children: [

                    Text(

                      category,

                      style: TextStyle(color: Colors.purple),

                    ),

                    SizedBox(height: 4),

                    Text(

                      title,

                      style: TextStyle(fontWeight: FontWeight.bold),

                    ),

                    SizedBox(height: 4),

                    Text(

                      instructor,

                      style: TextStyle(color: Colors.grey),

                    ),

                    SizedBox(height: 4),

                    Text(

                      price,

                      style: TextStyle(fontWeight: FontWeight.bold),

                    ),

                  ],

                ),

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildBottomNavBar() {

    return BottomNavigationBar(

      currentIndex: 2,

      items: [

        BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

        BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Statistic'),

        BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Favorites'),

        BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

      ],

      onTap: (index) {

        if (index == 0) {

          Navigator.pushNamed(context, 'Discover');

        } else if (index == 1) {

          Navigator.pushNamed(context, 'Statistics');

        }

      },

    );

  }

}