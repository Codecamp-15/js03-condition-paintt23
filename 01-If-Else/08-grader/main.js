let p =100

if(p >= 0 && p <= 100) {
  
    if (p >= 80) console.log("A")
    else if (p >= 70 && p < 80) console.log("B")
    else if (p >= 60 && p < 70) console.log("C")
    else if (p >= 50 && p < 60) console.log("D")
    else console.log("F")
  } else {
    console.log("Invalid Range")
  }