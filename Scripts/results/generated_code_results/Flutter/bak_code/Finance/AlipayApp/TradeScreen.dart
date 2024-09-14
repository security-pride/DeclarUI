import 'package:flutter/material.dart';
import 'package:qr/qr.dart';

class TradeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('收付款'),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => Navigator.pushNamed(context, 'Home'),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.more_horiz),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              color: Colors.blue,
              padding: EdgeInsets.all(16),
              child: Row(
                children: [
                  Icon(Icons.verified_user, color: Colors.white),
                  SizedBox(width: 8),
                  Text('大众会员', style: TextStyle(color: Colors.white)),
                ],
              ),
            ),
            Card(
              margin: EdgeInsets.all(16),
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Icon(Icons.payment),
                        SizedBox(width: 8),
                        Text('向商家付款', style: TextStyle(fontSize: 18)),
                      ],
                    ),
                    SizedBox(height: 16),
                    Center(
                      child: QrPainter(
                        data: "https://example.com/payment",
                        version: 4,  // 使用整数表示版本
                        size: 200.0,
                      ),
                    ),
                    SizedBox(height: 8),
                    Center(
                      child: Text('点击可查看付款码数字', style: TextStyle(color: Colors.grey)),
                    ),
                    SizedBox(height: 16),
                    Row(
                      children: [
                        Image.asset('assets/images/template.png', width: 24, height: 24),
                        SizedBox(width: 8),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('招商银行储蓄卡 (7616)'),
                              Text('优先使用此付款方式', style: TextStyle(color: Colors.grey, fontSize: 12)),
                            ],
                          ),
                        ),
                        Icon(Icons.arrow_forward_ios, size: 16),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            _buildActionButton(Icons.attach_money, '收钱'),
            _buildActionButton(Icons.calendar_today, '分期付款'),
            _buildActionButton(Icons.swap_horiz, '转账'),
          ],
        ),
      ),
    );
  }

  Widget _buildActionButton(IconData icon, String label) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(8),
      ),
      child: ListTile(
        leading: Icon(icon, color: Colors.white),
        title: Text(label, style: TextStyle(color: Colors.white)),
        trailing: Icon(Icons.arrow_forward_ios, color: Colors.white),
        onTap: () {},
      ),
    );
  }
}

class QrPainter extends StatelessWidget {
  final String data;
  final int version;
  final double size;

  QrPainter({
    required this.data,
    this.version = 4,  // 默认使用版本4
    this.size = 200.0,
  });

  @override
  Widget build(BuildContext context) {
    final qrCode = QrCode(version, QrErrorCorrectLevel.L);
    qrCode.addData(data);

    final painter = _QrPainter(qrCode, size);

    return CustomPaint(
      size: Size(size, size),
      painter: painter,
    );
  }
}

class _QrPainter extends CustomPainter {
  final QrCode qr;
  final double size;

  _QrPainter(this.qr, this.size);

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..style = PaintingStyle.fill
      ..color = Colors.black;

    final squareSize = size.width / qr.moduleCount;
    for (int x = 0; x < qr.moduleCount; x++) {
      for (int y = 0; y < qr.moduleCount; y++) {
        if (qr.isDark(y, x)) {
          final squareRect = Rect.fromLTWH(
            x * squareSize,
            y * squareSize,
            squareSize,
            squareSize,
          );
          canvas.drawRect(squareRect, paint);
        }
      }
    }
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}