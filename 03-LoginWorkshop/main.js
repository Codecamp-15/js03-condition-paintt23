// ให้ใช้คำสั่ง prompt ถามชื่อผู้ใช้ และให้รับค่าเก็บไว้ในตัวแปรชื่อ user
let user =prompt('กรุณากรอกชื่อผู้ใช้');

//ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้กำหนด default value ของตัวแปร user เป็น guest

if (user === null || user === "") {
    user = "guest";
} else if (user === "codecamp") {
    var password = prompt("กรุณากรอกรหัสผ่าน:");
    
    if (password === "123456") {
        user = "codecamp";
    } else {
        alert("รหัสผ่านไม่ถูกต้อง");
    }
} else {
    user = "guest";
}

alert("ยินดีต้อนรับคุณ " + user); 