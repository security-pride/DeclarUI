import 'package:flutter/material.dart';
class CreateAccontScreen extends StatefulWidget {
@override
_CreateAccontScreenState createState() => _CreateAccontScreenState();
}
class _CreateAccontScreenState extends State<CreateAccontScreen> {
bool _obscureText = true;
String _password = '';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Settings'),
),
title: Text('Sign up for a CNN account'),
actions: [
Icon(Icons.sd_card),
SizedBox(width: 10),
Icon(Icons.battery_full),
],
),
body: SingleChildScrollView(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
RichText(
text: TextSpan(
children: [
TextSpan(text: 'Already have an account? '),
TextSpan(
text: 'Sign in',
style: TextStyle(color: Colors.blue),
recognizer: TapGestureRecognizer()
..onTap = () {
// Navigate to sign in page
},
),
],
),
),
SizedBox(height: 20),
TextField(
decoration: InputDecoration(
labelText: 'Email address',
border: OutlineInputBorder(),
),
),
SizedBox(height: 20),
TextField(
obscureText: _obscureText,
onChanged: (value) {
setState(() {
_password = value;
});
},
decoration: InputDecoration(
labelText: 'Password',
border: OutlineInputBorder(),
suffixIcon: IconButton(
icon: Icon(_obscureText ? Icons.visibility_off : Icons.visibility),
onPressed: () {
setState(() {
_obscureText = !_obscureText;
});
},
),
),
),
SizedBox(height: 10),
Text('Your password needs to include:'),
PasswordRequirement(
text: 'At least 8 characters',
isMet: _password.length >= 8,
),
PasswordRequirement(
text: 'At least one letter',
isMet: _password.contains(RegExp(r'[a-zA-Z]')),
),
PasswordRequirement(
text: 'At least one number',
isMet: _password.contains(RegExp(r'[0-9]')),
),
SizedBox(height: 20),
ElevatedButton(
child: Text('Sign up'),
onPressed: () {
// Implement sign up logic
},
style: ElevatedButton.styleFrom(
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 20),
Center(child: Text('or')),
SizedBox(height: 20),
ElevatedButton.icon(
icon: Image.asset('assets/images/template.png', height: 24),
label: Text('Continue with Google'),
onPressed: () {
// Implement Google sign up logic
},
style: ElevatedButton.styleFrom(
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 20),
Text(
'By creating an account or signing in, you agree to the Terms of Use and have read our Privacy Policy. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the Privacy Policy.',
style: TextStyle(fontSize: 12),
),
],
),
),
);
}
}
class PasswordRequirement extends StatelessWidget {
final String text;
final bool isMet;
const PasswordRequirement({Key? key, required this.text, required this.isMet}) : super(key: key);
@override
Widget build(BuildContext context) {
return Row(
children: [
Icon(
isMet ? Icons.check_circle : Icons.cancel,
color: isMet ? Colors.green : Colors.red,
),
SizedBox(width: 8),
Text(text),
],
);
}
}