import 'package:flutter/material.dart';

void main() => runApp(MyApp());

var logoSection = Container(
  color: Colors.white,
  height: 200,
  child: Row(
    children: [
      Column(
        children: [
          Image.asset(
            'assets/images/amazon.jpg',
            height: 200,
          )
        ],
      ),
      Column(
        children: [
          Padding(
            padding: EdgeInsets.fromLTRB(20, 50, 0, 0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("Amazon CAFE",
                    style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black)),
                Text("PSU PHUKET",
                    style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.black)),
                Text("Nutthapon Nisakon",
                    style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black)),
                Text("6130613048",
                    style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.black)),
              ],
            ),
          )
        ],
      )
    ],
  ),
);

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Test flutter",
      home: Firstpage(),
    );
  }
}

class Firstpage extends StatefulWidget {
  @override
  _FirstpageState createState() => _FirstpageState();
}

class _FirstpageState extends State<Firstpage> {
  var arrayOrderd = [0, 0, 0, 0, 0]; //เก็บจำนวนเครื่องดื่มที่สั่ง
  var arrayName = [
    "Espresso",
    "Chocolate",
    "Matcha",
    "Strawberry",
    "Late"
  ]; //ชื่อเมนู
  final List<int> listOrderd = <int>[]; //จำนวนที่สั่ง
  final List<String> menuName = <String>[]; //ชื่อเมนูที่สั่ง

  String alert = ""; //แสดงข้อความเตือน

//เพิ่มจำนวนเครื่องดื่ม
  void addMenu(int i) {
    setState(() {
      arrayOrderd[i]++;
    });
  }

//ลดจำนวนเครื่องดื่ม
  void removeMenu(int i) {
    setState(() {
      if (arrayOrderd[i] > 0) {
        arrayOrderd[i]--;
      }
    });
  }

  Widget menu(String menu, int i) {
    return Container(
      child: Column(
        children: [
          Row(
            children: [
              Column(
                children: [
                  Image.asset(
                    'assets/images/$menu.jpg',
                    height: 175,
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
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.black),
                            ),
                            Row(
                              children: [
                                ButtonTheme(
                                  minWidth: 50,
                                  child: RaisedButton(
                                    onPressed: () {
                                      removeMenu(i);
                                    },
                                    child: Text("-"),
                                    color: Colors.green[400],
                                    splashColor: Colors.greenAccent[100],
                                  ),
                                ),
                                Container(
                                  padding: EdgeInsets.only(left: 25, right: 25),
                                  child: Text(arrayOrderd[i].toString(),
                                      style: TextStyle(
                                          fontSize: 20,
                                          fontWeight: FontWeight.bold,
                                          color: Colors.yellow[900])),
                                ),
                                ButtonTheme(
                                  minWidth: 50,
                                  child: RaisedButton(
                                    onPressed: () {
                                      alert =
                                          ""; //เมื่อกด +  ทำให้ข้อความเตือนหายไป
                                      addMenu(i);
                                    },
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
          title: Text("Homework2(40%)"),
          backgroundColor: Colors.green[400],
        ),
        body: ListView(
          children: [
            logoSection,
            Container(
              color: Colors.white,
              height: 380,
              child: ListView(
                scrollDirection: Axis.vertical,
                children: [
                  menu("Espresso", 0),
                  menu("Chocolate", 1),
                  menu("Matcha", 2),
                  menu("Strawberry", 3),
                  menu("Late", 4)
                ],
              ),
            ),
            Container(
                padding: EdgeInsets.only(top: 20),
                child: Column(
                  children: [
                    ButtonTheme(
                      minWidth: 20,
                      child: RaisedButton(
                        splashColor: Colors.yellow[800],
                        color: Colors.yellow[700],
                        child: Text(
                          "SUBMIT ORDER",
                          style: TextStyle(
                              fontSize: 26,
                              fontWeight: FontWeight.bold,
                              color: Colors.black),
                        ),
                        onPressed: () {
                          listOrderd.clear(); //เคลียร์จำนวนที่เคยกดสั่ง
                          menuName.clear(); //เคลียร์ค่าชื่อเมนูที่เคยกดสั่ง
                          for (var i = 0; i < arrayOrderd.length; i++) {
                            if (arrayOrderd[i] != 0) {
                              listOrderd
                                  .add(arrayOrderd[i]); //เพิ่มจำนวนเครื่องดื่ม
                              menuName.add(arrayName[i]); //เพิ่มชื่อเมนู
                            }
                          }
                          //ตรวจสอบจำนวนที่สั่ง ถ้าเป็น 0 ให้ขึ้นข้อความเตือน ถ้าไม่เท่ากับ 0 ให้ push ไปหน้า 2
                          if (listOrderd.isEmpty) {
                            setState(() {
                              alert = "Please select menu!";
                            });
                          } else {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) =>
                                        Secondpage(listOrderd, menuName)));
                          }
                        },
                      ),
                    ),
                    Text(
                      "$alert",
                      style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          color: Colors.red),
                    )
                  ],
                ))
          ],
        ));
  }
}

class Secondpage extends StatelessWidget {
  final List countMenu;
  final List listMenu;
  const Secondpage(this.countMenu, this.listMenu, {Key key}) : super(key: key);

  createBill() {
    //สร้าง Listview
    return ListView.builder(
        itemCount: countMenu.length,
        itemBuilder: (BuildContext context, int i) {
          return bills(i);
        });
  }

  bills(int i) {
    return Container(
      child: Column(
        children: [
          Padding(padding: EdgeInsets.all(30)),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Icon(
                Icons.arrow_right,
                size: 40,
                color: Colors.yellow[900],
              ),
              Text(
                listMenu[i] + "  :",
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.black),
              ),
              Text(
                countMenu[i].toString(),
                style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    color: Colors.yellow[900]),
              ),
              Text(
                "Orderd",
                style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.black),
              )
            ],
          )
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Homework2(40%)"),
          backgroundColor: Colors.green[400],
        ),
        body: createBill());
  }
}
