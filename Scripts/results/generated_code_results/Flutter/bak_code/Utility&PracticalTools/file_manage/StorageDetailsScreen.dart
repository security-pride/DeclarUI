import 'package:flutter/material.dart';
import 'dart:math' as math;
class StorageDetailsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Internal Storage'),
actions: [
Padding(
padding: const EdgeInsets.only(right: 16.0),
child: Text('9:41'),
),
],
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Center(
child: CustomPaint(
size: Size(200, 200),
painter: CircleChartPainter(0.66),
),
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildStorageInfo('Used', '85 GB'),
_buildStorageInfo('Available', '43 GB'),
_buildStorageInfo('Total', '256 GB'),
],
),
SizedBox(height: 20),
_buildFreeUpSpaceSection(),
SizedBox(height: 20),
_buildStorageCategory('Apps', '1,427 items', '55 GB', 0.8),
_buildStorageCategory('Videos', '53 items', '9.9 GB', 0.2),
_buildStorageCategory('Document', '127 items', '9.0 GB', 0.15),
_buildStorageCategory('Images', '1,432 items', '6.8 GB', 0.1),
_buildStorageCategory('Audio', '421 items', '116 MB', 0.05),
_buildStorageCategory('Audio', '0 items', '0 MB', 0),
],
),
),
),
);
}
Widget _buildStorageInfo(String label, String value) {
return Column(
children: [
Text(label, style: TextStyle(color: Colors.grey)),
SizedBox(height: 4),
Text(value, style: TextStyle(fontWeight: FontWeight.bold)),
],
);
}
Widget _buildFreeUpSpaceSection() {
return Container(
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.blue[50],
borderRadius: BorderRadius.circular(8),
),
child: Row(
children: [
Icon(Icons.cleaning_services, color: Colors.blue),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Free up space', style: TextStyle(fontWeight: FontWeight.bold)),
Text('Go to Clean to manage and free up space'),
],
),
),
],
),
);
}
Widget _buildStorageCategory(String title, String items, String size, double progress) {
return Padding(
padding: const EdgeInsets.symmetric(vertical: 8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Image.asset('assets/images/template.png', width: 24, height: 24),
SizedBox(width: 8),
Text(title),
Spacer(),
Text('$items | $size'),
],
),
SizedBox(height: 4),
LinearProgressIndicator(
value: progress,
backgroundColor: Colors.grey[200],
valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
),
],
),
);
}
}
class CircleChartPainter extends CustomPainter {
final double percentage;
CircleChartPainter(this.percentage);
@override
void paint(Canvas canvas, Size size) {
final center = Offset(size.width / 2, size.height / 2);
final radius = math.min(size.width, size.height) / 2;
final bgPaint = Paint()
  ..color = Colors.grey[200]!
  ..style = PaintingStyle.stroke
  ..strokeWidth = 20;

canvas.drawCircle(center, radius, bgPaint);

final foregroundPaint = Paint()
  ..color = Colors.blue
  ..style = PaintingStyle.stroke
  ..strokeWidth = 20
  ..strokeCap = StrokeCap.round;

canvas.drawArc(
  Rect.fromCircle(center: center, radius: radius),
  -math.pi / 2,
  2 * math.pi * percentage,
  false,
  foregroundPaint,
);

final textPainter = TextPainter(
  text: TextSpan(
    text: '${(percentage * 100).toInt()}%',
    style: TextStyle(fontSize: 40, fontWeight: FontWeight.bold),
  ),
  textDirection: TextDirection.ltr,
);

textPainter.layout();
textPainter.paint(canvas, center - Offset(textPainter.width / 2, textPainter.height / 2));
}
@override
bool shouldRepaint(CustomPainter oldDelegate) => false;
}