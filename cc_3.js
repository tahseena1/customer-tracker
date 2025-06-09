const customers = [
    {Name: "Jennie Johnson",
     Email: "jjohnson@email.com",
     Purchases: ["Small Package", "XL Bundle"]
    }, 
    {Name: "Kathy Lewis",
    Email: "kathyl123@email.com",
    Purchases: ["Medium Package", "Large Bundle", "XL Bundle"]
    }, 
    {Name: "Lilly Blue",
        Email: "lillybillyblue@email.com", 
        Purchases: ["Small Package", "Medium Package", "XL Bundle"]
    }
];


customers.push({
    Name: "Amanda Shelby",
    Email: "amandashelby@email.com",
    Purchases: ["Larage Bundle, XL Bundle"]
});

customers.shift();


customers[0].email = "kklew@usf.edu";

customers[1].Purchases.push("XL Bundle");


customers.forEach((obj) => {
  console.log(`Name: ${obj.Nameame}`);
  console.log(`Email: ${obj.Emailmail}`);
  console.log(`Total Purchases: ${obj.Purchases.length}`);
  console.log("-----------------------------");
});