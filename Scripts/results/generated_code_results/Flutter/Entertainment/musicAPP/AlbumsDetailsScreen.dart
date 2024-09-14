import 'package:flutter/material.dart';



class AlbumDetailsScreen extends StatelessWidget {

  const AlbumDetailsScreen({Key? key}) : super(key: key);



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: const Icon(Icons.arrow_back),

          onPressed: () => Navigator.pop(context),

        ),

        title: const Text('Album Details'),

        actions: [

          IconButton(

            icon: const Icon(Icons.search),

            onPressed: () {},

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Container(

              padding: const EdgeInsets.all(16),

              child: Row(

                children: [

                  Image.asset(

                    'assets/images/template.png',

                    width: 100,

                    height: 100,

                    fit: BoxFit.cover,

                  ),

                  const SizedBox(width: 16),

                  Expanded(

                    child: Column(

                      crossAxisAlignment: CrossAxisAlignment.start,

                      children: const [

                        Text(

                          'History',

                          style: TextStyle(

                            fontSize: 24,

                            fontWeight: FontWeight.bold,

                          ),

                        ),

                        Text('by Michael Jackson'),

                        Text('1996 • 18 Songs • 64 min'),

                      ],

                    ),

                  ),

                ],

              ),

            ),

            Padding(

              padding: const EdgeInsets.symmetric(horizontal: 16),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.spaceEvenly,

                children: [

                  ElevatedButton.icon(

                    icon: const Icon(Icons.play_arrow),

                    label: const Text('Play'),

                    onPressed: () {

                      Navigator.pushNamed(context, 'PlaySong');

                    },

                    style: ElevatedButton.styleFrom(

                      backgroundColor: Colors.pink,

                    ),

                  ),

                  OutlinedButton.icon(

                    icon: const Icon(Icons.share),

                    label: const Text('Share'),

                    onPressed: () {},

                  ),

                  OutlinedButton.icon(

                    icon: const Icon(Icons.favorite_border),

                    label: const Text('Add to Favorites'),

                    onPressed: () {},

                  ),

                ],

              ),

            ),

            const SizedBox(height: 16),

            _buildSongList(context),

          ],

        ),

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



  Widget _buildSongList(BuildContext context) {

    final songs = [

      'Billie Jean',

      'The way you make..',

      'She is out of my life',

      'Thriller',

      'Beat It',

      'Bad',

      'Man in the mirror',

      'Scream',

    ];



    return ListView.builder(

      shrinkWrap: true,

      physics: const NeverScrollableScrollPhysics(),

      itemCount: songs.length,

      itemBuilder: (context, index) {

        return ListTile(

          leading: IconButton(

            icon: const Icon(Icons.play_circle_outline, color: Colors.pink),

            onPressed: () {

              Navigator.pushNamed(context, 'PlaySong');

            },

          ),

          title: Text(songs[index]),

          trailing: Row(

            mainAxisSize: MainAxisSize.min,

            children: [

              const Text('4:12'),

              const SizedBox(width: 8),

              IconButton(

                icon: const Icon(Icons.more_vert),

                onPressed: () {},

              ),

            ],

          ),

          onTap: () {

            Navigator.pushNamed(context, 'PlaySong');

          },

        );

      },

    );

  }

}