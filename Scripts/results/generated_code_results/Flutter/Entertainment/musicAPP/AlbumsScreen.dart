import 'package:flutter/material.dart';



class AlbumsScreen extends StatefulWidget {

  const AlbumsScreen({Key? key}) : super(key: key);



  @override

  _AlbumsScreenState createState() => _AlbumsScreenState();

}



class _AlbumsScreenState extends State<AlbumsScreen> {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: const Text('Songs'),

        leading: IconButton(

          icon: const Icon(Icons.menu),

          onPressed: () {},

        ),

        actions: [

          IconButton(

            icon: const Icon(Icons.search),

            onPressed: () {},

          ),

        ],

      ),

      body: Column(

        children: [

          SizedBox(

            height: 50,

            child: ListView(

              scrollDirection: Axis.horizontal,

              children: [

                _buildTab('All Songs'),

                _buildTab('Playlists'),

                _buildTab('Albums', isSelected: true),

                _buildTab('Artists'),

                _buildTab('Genre'),

              ],

            ),

          ),

          Expanded(

            child: GridView.count(

              crossAxisCount: 2,

              children: [

                _buildAlbumItem('History', 'Michael Jackson', 10),

                _buildAlbumItem('Thriller', 'Michael Jackson', 10),

                _buildAlbumItem("It Won't Be Soon..", 'Maroon 5', 10),

                _buildAlbumItem('I Am... Yours', 'Beyonce', 10),

              ],

            ),

          ),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        items: const [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.music_note), label: 'Songs'),

          BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),

        ],

        currentIndex: 1,

        onTap: (index) {},

      ),

    );

  }



  Widget _buildTab(String text, {bool isSelected = false}) {

    return Padding(

      padding: const EdgeInsets.symmetric(horizontal: 16),

      child: Center(

        child: Text(

          text,

          style: TextStyle(

            color: isSelected ? Colors.blue : Colors.black,

            fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,

          ),

        ),

      ),

    );

  }



  Widget _buildAlbumItem(String name, String artist, int songs) {

    return GestureDetector(

      onTap: () {

        Navigator.pushNamed(context, 'AlbumDetails');

      },

      child: Card(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Expanded(

              child: Image.asset(

                'assets/images/template.png',

                fit: BoxFit.cover,

              ),

            ),

            Padding(

              padding: const EdgeInsets.all(8.0),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Text(

                    name,

                    style: const TextStyle(fontWeight: FontWeight.bold),

                  ),

                  Text(artist),

                  Text('$songs Songs'),

                ],

              ),

            ),

          ],

        ),

      ),

    );

  }

}