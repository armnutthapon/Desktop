import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Calculator",
      home: MyCalculator(),
    );
  }
}

class MyCalculator extends StatefulWidget {
  @override
  _MyCalculatorState createState() => _MyCalculatorState();
}

class _MyCalculatorState extends State<MyCalculator> {
  String show = ""; //แสดงค่าว่าง
  double num1 = 0; //รับตัวเลขตัวแรก
  double num2 = 0; //รับตัวเลขตัวที่สอง
  String symbol = ""; //รับสัญลักษณ์

//การรับตัวเลขแล้วแสดงหน้า Display
  void input(String input1) {
    setState(() {
      this.show = show + input1;
    });
  }

//เปลี่ยน String ตัวแรก เป็น Double
  void setNumber(String inputSymbol) {
    setState(() {
      this.num1 = double.parse(show);
      this.symbol = inputSymbol;
      this.show = "";
    });
  }

//ล้างค่าตัวเลข
  void clear() {
    setState(() {
      this.show = "";
    });
  }

  Widget menu(String menu) {
    return Container(
      height: 370,
      child: ListView(
        scrollDirection: Axis.vertical,
        children: [
          Row(
            children: [
              Column(
                children: [
                  Image.asset(
                    'assets/images/$menu.jpg',
                    height: 220,
                  )
                ],
              ),
              Column(
                children: [
                  Container(
                    child: Padding(
                        padding: EdgeInsets.only(left: 20, right: 10),
                        child: Column(
                          children: [
                            Text(
                              "$menu",
                              style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.black),
                            ),
                            Row(
                              children: [
                                ButtonTheme(
                                  minWidth: 50,
                                  child: RaisedButton(
                                    onPressed: () {},
                                    child: Text("-"),
                                    color: Colors.green[400],
                                    splashColor: Colors.greenAccent[100],
                                  ),
                                ),
                                Container(
                                  padding: EdgeInsets.only(left: 25, right: 25),
                                  child: Text("0"),
                                ),
                                ButtonTheme(
                                  minWidth: 50,
                                  child: RaisedButton(
                                    onPressed: () {},
                                    child: Text("+"),
                                    color: Colors.green[400],
                                    splashColor: Colors.greenAccent[100],
                                  ),
                                ),
                              ],
                            )
                          ],
                        )),
                  )
                ],
              )
            ],
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(
            "Homework(40%)",
            style: TextStyle(
                fontSize: 16, fontWeight: FontWeight.bold, color: Colors.black),
          ),
          backgroundColor: Colors.greenAccent,
        ),
        body: Container(
          color: Colors.white,
          child: Column(
            children: [
              Container(
                height: 100,
                child: Row(
                  children: [
                    Text(
                      "$show",
                      style: TextStyle(
                          fontStyle: FontStyle.italic,
                          fontSize: 50,
                          fontWeight: FontWeight.bold,
                          color: Colors.black),
                    )
                  ],
                ),
              ),
              Container(
                child: Column(
                  children: [Row(), Row(), Row(), Row(), Row()],
                ),
              ),
              Container()
            ],
          ),
        ));
  }
}
