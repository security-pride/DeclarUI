import 'package:flutter/material.dart';
import 'dart:math' as math;
class TaskDetailsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Task Details'),
),
body: SingleChildScrollView(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'User experience design',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('18-02-2022', style: TextStyle(color: Colors.grey)),
Text('9:00 AM-12:00 PM', style: TextStyle(color: Colors.grey)),
],
),
SizedBox(height: 24),
Row(
children: [
Expanded(
flex: 2,
child: CustomPaint(
size: Size(150, 150),
painter: PieChartPainter(),
),
),
Expanded(
flex: 3,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildLegendItem(Colors.blue, 'Finish on time'),
SizedBox(height: 8),
_buildLegendItem(Colors.orange, 'Past the deadline'),
SizedBox(height: 8),
_buildLegendItem(Colors.purple, 'Still ongoing'),
],
),
),
],
),
SizedBox(height: 24),
Text('Description', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Text(
"Task management is the process which is monitoring your fast project's tasks through their various stages from start......",
style: TextStyle(color: Colors.grey[600]),
),
TextButton(
onPressed: () {
// Implement see more functionality
},
child: Text('See more'),
),
SizedBox(height: 16),
Text('Sub Task', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
_buildSubTaskItem('Website Redesign', '18 Feb 2022', true),
_buildSubTaskItem('Website Design', '19 Feb 2022', false),
],
),
),
);
}
Widget _buildLegendItem(Color color, String label) {
return Row(
children: [
Container(
width: 16,
height: 16,
color: color,
),
SizedBox(width: 8),
Text(label),
],
);
}
Widget _buildSubTaskItem(String title, String date, bool isCompleted) {
return ListTile(
leading: Checkbox(
value: isCompleted,
onChanged: (bool? value) {
// Implement checkbox functionality
},
),
title: Text(title),
subtitle: Text(date),
trailing: IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {
// Implement more options functionality
},
),
);
}
}
class PieChartPainter extends CustomPainter {
@override
void paint(Canvas canvas, Size size) {
final center = Offset(size.width / 2, size.height / 2);
final radius = math.min(size.width, size.height) / 2;
ini
¸´ÖÆ
final paint = Paint()
  ..style = PaintingStyle.fill;

final total = 100.0;
var startAngle = -math.pi / 2;

void drawSection(double percentage, Color color) {
  final sweepAngle = 2 * math.pi * (percentage / total);
  paint.color = color;
  canvas.drawArc(Rect.fromCircle(center: center, radius: radius),
      startAngle, sweepAngle, true, paint);
  startAngle += sweepAngle;
}

drawSection(40, Colors.blue);
drawSection(40, Colors.orange);
drawSection(20, Colors.purple);
}
@override
bool shouldRepaint(CustomPainter oldDelegate) => false;
}