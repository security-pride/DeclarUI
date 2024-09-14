import 'package:flutter/material.dart';



class PlaySongScreen extends StatefulWidget {

  const PlaySongScreen({Key? key}) : super(key: key);



  @override

  _PlaySongScreenState createState() => _PlaySongScreenState();

}



class _PlaySongScreenState extends State<PlaySongScreen> {

  bool isPlaying = true;

  bool isShuffle = false;

  bool isRepeat = false;

  bool isFavorite = false;



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: const Icon(Icons.arrow_back),

          onPressed: () => Navigator.pop(context),

        ),

        title: const Text('Now Playing'),

        actions: [

          IconButton(

            icon: const Icon(Icons.more_vert),

            onPressed: () {},

          ),

        ],

      ),

      body: Column(

        mainAxisAlignment: MainAxisAlignment.spaceEvenly,

        children: [

          Stack(

            alignment: Alignment.center,

            children: [

              Container(

                width: 300,

                height: 300,

                decoration: BoxDecoration(

                  shape: BoxShape.circle,

                  border: Border.all(color: Colors.purple, width: 4),

                ),

                child: ClipOval(

                  child: Image.asset(

                    'assets/images/template.png',

                    fit: BoxFit.cover,

                  ),

                ),

              ),

              Positioned(

                bottom: 0,

                child: Text(

                  '3:15 | 4:26',

                  style: TextStyle(color: Colors.white),

                ),

              ),

            ],

          ),

          Column(

            children: [

              Text(

                'Black or White',

                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),

              ),

              Text(

                'Michael Jackson • Album - Dangerous',

                style: TextStyle(fontSize: 16, color: Colors.grey),

              ),

            ],

          ),

          CustomPaint(

            size: Size(300, 50),

            painter: AudioVisualizationPainter(),

          ),

          Row(

            mainAxisAlignment: MainAxisAlignment.spaceEvenly,

            children: [

              IconButton(

                icon: Icon(Icons.skip_previous),

                onPressed: () {},

                iconSize: 36,

              ),

              IconButton(

                icon: Icon(isPlaying ? Icons.pause : Icons.play_arrow),

                onPressed: () {

                  setState(() {

                    isPlaying = !isPlaying;

                  });

                },

                iconSize: 48,

              ),

              IconButton(

                icon: Icon(Icons.skip_next),

                onPressed: () {},

                iconSize: 36,

              ),

            ],

          ),

          Row(

            mainAxisAlignment: MainAxisAlignment.spaceEvenly,

            children: [

              _buildControlButton(Icons.playlist_play, 'Playlist', () {}),

              _buildControlButton(Icons.shuffle, 'Shuffle', () {

                setState(() {

                  isShuffle = !isShuffle;

                });

              }, isActive: isShuffle),

              _buildControlButton(Icons.repeat, 'Repeat', () {

                setState(() {

                  isRepeat = !isRepeat;

                });

              }, isActive: isRepeat),

              _buildControlButton(Icons.equalizer, 'EQ', () {}),

              _buildControlButton(Icons.favorite, 'Favourites', () {

                setState(() {

                  isFavorite = !isFavorite;

                });

              }, isActive: isFavorite),

            ],

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

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Home');

          } else if (index == 1) {

            Navigator.pushNamed(context, 'Songs');

          }

        },

      ),

    );

  }



  Widget _buildControlButton(IconData icon, String label, VoidCallback onPressed, {bool isActive = false}) {

    return Column(

      mainAxisSize: MainAxisSize.min,

      children: [

        IconButton(

          icon: Icon(icon, color: isActive ? Colors.purple : Colors.white),

          onPressed: onPressed,

        ),

        Text(label, style: TextStyle(color: Colors.grey, fontSize: 12)),

      ],

    );

  }

}



class AudioVisualizationPainter extends CustomPainter {

  @override

  void paint(Canvas canvas, Size size) {

    final paint = Paint()

      ..color = Colors.purple

      ..strokeWidth = 2

      ..strokeCap = StrokeCap.round;



    for (int i = 0; i < 30; i++) {

      final x = size.width * i / 30;

      final height = size.height * (0.2 + 0.6 * (i % 3) / 2);

      canvas.drawLine(

        Offset(x, size.height / 2 - height / 2),

        Offset(x, size.height / 2 + height / 2),

        paint,

      );

    }

  }



  @override

  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;

}