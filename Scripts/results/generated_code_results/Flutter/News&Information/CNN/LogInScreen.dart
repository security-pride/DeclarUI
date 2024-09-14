import 'package:flutter/material.dart';
class LogInScreen extends StatefulWidget {
@override
_LogInScreenState createState() => _LogInScreenState();
}
class _LogInScreenState extends State<LogInScreen> {
bool _obscureText = true;
final TextEditingController _emailController = TextEditingController();
final TextEditingController _passwordController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Settings'),
),
title: Row(
mainAxisAlignment: MainAxisAlignment.end,
children: [
Icon(Icons.wifi),
SizedBox(width: 8),
Icon(Icons.battery_full),
],
),
),
body: SingleChildScrollView(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Icon(Icons.circle, color: Colors.black, size: 40),
SizedBox(height: 16),
Text(
'Sign in to your CNN account',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
RichText(
text: TextSpan(
style: TextStyle(color: Colors.black),
children: [
TextSpan(text: 'Don't have an account? '),
TextSpan(
text: 'Sign up',
style: TextStyle(color: Colors.blue),
recognizer: TapGestureRecognizer()
..onTap = () {
Navigator.pushNamed(context, 'CreateAccont');
},
),
],
),
),
SizedBox(height: 24),
TextField(
controller: _emailController,
decoration: InputDecoration(
labelText: 'Email address',
border: OutlineInputBorder(),
),
keyboardType: TextInputType.emailAddress,
),
SizedBox(height: 16),
TextField(
controller: _passwordController,
obscureText: _obscureText,
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
SizedBox(height: 24),
ElevatedButton(
child: Text('Sign in'),
onPressed: () {
// Implement sign in logic
},
style: ElevatedButton.styleFrom(
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 16),
Center(
child: TextButton(
child: Text('Forgot your password?'),
onPressed: () {
// Navigate to password recovery
},
),
),
SizedBox(height: 16),
Row(
children: [
Expanded(child: Divider()),
Padding(
padding: EdgeInsets.symmetric(horizontal: 8),
child: Text('or'),
),
Expanded(child: Divider()),
],
),
SizedBox(height: 16),
OutlinedButton.icon(
icon: Image.asset('assets/images/template.png', height: 24),
label: Text('Continue with Google'),
onPressed: () {
// Implement Google sign in
},
style: OutlinedButton.styleFrom(
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 24),
Text(
'By creating an account or signing in, you agree to the Terms of Use and have read our Privacy Policy. You understand CNN and its affiliates may use your email address to provide updates, ads, and offers. You can opt out via the Privacy Policy.',
style: TextStyle(fontSize: 12, color: Colors.grey),
),
],
),
),
);
}
@override
void dispose() {
_emailController.dispose();
_passwordController.dispose();
super.dispose();
}
}