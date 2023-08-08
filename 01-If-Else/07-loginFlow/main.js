//จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
let userName = "username";
let passWord = "password";
//หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”

if (userName == "" || passWord == String) {
  alert("username is required");
} else if (userName == String || passWord == "") {
  alert("password is required");
} else if (
  (userName == "admin" && passWord == "1234") ||
  (userName == "john" && passWord == "qwerty ")
) {
  //หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username}
  alert("Hello" + "" + userName);
} else {
  alert("invalid username or password");
}

//หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”
