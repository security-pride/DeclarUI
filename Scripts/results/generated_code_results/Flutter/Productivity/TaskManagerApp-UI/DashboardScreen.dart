import 'package:flutter/material.dart';
import 'dart:math' as math;
class DashboardScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Dashboard', style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
backgroundColor: Colors.transparent,
elevation: 0,
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
),
body: Column(
children: [
Expanded(
flex: 2,
child: CustomPaint(
size: Size(double.infinity, 300),
painter: DonutChartPainter(),
),
),
Expanded(
flex: 3,
child: Container(
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.vertical(top: Radius.circular(30)),
),
child: ListView(
padding: EdgeInsets.all(20),
children: [
_buildStatTile('Total task', '55', Icons.folder_open, Colors.grey),
_buildStatTile('Completed', '13', Icons.check_circle_outline, Colors.blue),
_buildStatTile('Working on', '25', Icons.trending_up, Colors.green),
_buildStatTile('Pending', '17', Icons.add_circle_outline, Colors.red),
],
),
),
),
],
),
bottomNavigationBar: BottomAppBar(
shape: CircularNotchedRectangle(),
notchMargin: 8.0,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.grid_view),
onPressed: () => Navigator.pushNamed(context, 'Board'),
),
IconButton(icon: Icon(Icons.check_circle_outline), onPressed: () {}),
SizedBox(width: 48),
IconButton(
icon: Icon(Icons.description_outlined),
onPressed: () => Navigator.pushNamed(context, 'Task'),
),
IconButton(
icon: Icon(Icons.chat_bubble_outline),
onPressed: () => Navigator.pushNamed(context, 'Message'),
),
],
),
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
backgroundColor: Colors.orange,
onPressed: () => Navigator.pushNamed(context, 'AddTask'),
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
);
}
Widget _buildStatTile(String title, String value, IconData icon, Color color) {
return ListTile(
leading: Container(
padding: EdgeInsets.all(8),
decoration: BoxDecoration(
color: color.withOpacity(0.1),
borderRadius: BorderRadius.circular(8),
),
child: Icon(icon, color: color),
),
title: Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
trailing: Text(value, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
);
}
}
class DonutChartPainter extends CustomPainter {
@override
void paint(Canvas canvas, Size size) {
final center = Offset(size.width / 2, size.height / 2);
final radius = math.min(size.width, size.height) / 2;
final paint = Paint()
  ..style = PaintingStyle.stroke
  ..strokeWidth = 40.0;

final total = 56.0; // 15 + 13 + 28
final startAngle = -math.pi / 2;

void drawSection(double value, Color color, String label) {
  final sweepAngle = 2 * math.pi * (value / total);
  paint.color = color;
  canvas.drawArc(Rect.fromCircle(center: center, radius: radius), startAngle, sweepAngle, false, paint);

  final labelAngle = startAngle + sweepAngle / 2;
  final labelOffset = Offset(
    center.dx + (radius + 30) * math.cos(labelAngle),
    center.dy + (radius + 30) * math.sin(labelAngle),
  );

  final textPainter = TextPainter(
    text: TextSpan(text: '$label%', style: TextStyle(color: color, fontWeight: FontWeight.bold)),
    textDirection: TextDirection.ltr,
  );
  textPainter.layout();
  textPainter.paint(canvas, labelOffset - Offset(textPainter.width / 2, textPainter.height / 2));
}

drawSection(15, Colors.orange, '15');
drawSection(13, Colors.purple, '13');
drawSection(28, Colors.teal, '28');
}
@override
bool shouldRepaint(CustomPainter oldDelegate) => false;
}