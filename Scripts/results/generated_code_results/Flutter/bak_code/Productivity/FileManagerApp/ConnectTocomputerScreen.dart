import 'package:flutter/material.dart';
import 'dart:math' as math;
class ConnectToComputerScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Connect to Computer'),
),
body: Column(
children: [
SizedBox(height: 50),
Center(
child: SizedBox(
width: 200,
height: 200,
child: CustomPaint(
painter: LoadingCirclePainter(),
),
),
),
SizedBox(height: 20),
Text(
'Waiting...',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 10),
Text(
'Open your computer browser and enter below',
style: TextStyle(fontSize: 16),
),
SizedBox(height: 20),
ElevatedButton(
onPressed: () {},
child: Text('http://john-312-ru'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
padding: EdgeInsets.symmetric(horizontal: 50, vertical: 15),
),
),
],
),
);
}
}
class LoadingCirclePainter extends CustomPainter {
@override
void paint(Canvas canvas, Size size) {
final center = Offset(size.width / 2, size.height / 2);
final radius = math.min(size.width, size.height) / 2;
final paint = Paint()
  ..style = PaintingStyle.stroke
  ..strokeWidth = 10.0;

// Draw blue arc
paint.color = Colors.blue;
canvas.drawArc(
  Rect.fromCircle(center: center, radius: radius),
  0,
  math.pi / 2,
  false,
  paint,
);

// Draw yellow arc
paint.color = Colors.yellow;
canvas.drawArc(
  Rect.fromCircle(center: center, radius: radius),
  math.pi / 2,
  math.pi / 4,
  false,
  paint,
);

// Draw red arc
paint.color = Colors.red;
canvas.drawArc(
  Rect.fromCircle(center: center, radius: radius),
  3 * math.pi / 4,
  math.pi / 8,
  false,
  paint,
);
}
@override
bool shouldRepaint(CustomPainter oldDelegate) => false;
}