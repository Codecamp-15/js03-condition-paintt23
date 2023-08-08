// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า

let num1 = prompt("กรุณาใส่ตัวเลข #1: ");
let num2 = prompt("กรุณาใส่ตัวเลข #2: ");
let num = Number(num1) + Number(num2);

// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

// num.trim()===''|| 
if (num === false || num ==''|| isNaN(num)) {
  alert("Invalid number");
} else {
  alert(num);
}
