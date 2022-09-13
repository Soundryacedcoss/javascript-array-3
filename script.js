// var arr = [
//   ["samsung", "Galaxy", 64, 15000],
//   ["nokia", "S730", 128, 22000],
//   ["Xiomi", "note", 32, 12000],
//   ["moto", "G10", 32, 15000],
//   ["apple", "S12", 64, 25000],
// ];
// var len = arr.length;
// document.write("<table border='2px' cellspacing>'0'");
// document.write("<thead><tr>");
// document.write("<th>company</th><th>model</th><th>Memory</th><th>price</th>");
// for (var a = 0; a < len; a++) {
//   document.write("<tr>");
//   for (var b = 0; b < arr[a].length; b++) {
//     document.write("<td>" + arr[a][b] + "</td>");
//   }
//   document.write("</tr>");
  
// }
// document.write("</table>");

function sort(){
var order = document.getElementById("order").value;
var sel = document.getElementById("sel").value;

var  arr=[{
    Company: "samsung",
    Model: "Galaxy",
    Memory: "64",
    price: "15000",
  },
  {
    Company: "nokia",
    Model: "S730",
    Memory: "128",
    price: "22000",
  },
  {
    Company: "Xiomi",
    Model: "note",
    Memory: "32",
    price: "12000",
  },
  {
    Company: "moto",
    Model: "G10",
    Memory: "32",
    price: "15000",
  },
  {
    Company: "apple",
    Model: "S12",
    Memory: "64",
    price: "25000",
  }
];

 if (order == "Assending" && sel == "price") {
   arr.sort((a, b)=>{
      return a.price - b.price;
    })
}
else if(order=="Assending" && sel=="Memory"){
    arr.sort((a,b)=>{
       return a.Memory-b.Memory;
    })
}
else if(order=="Dissending" && sel=="Memory"){
    arr.sort((a,b)=>{
       return b.Memory-a.Memory;
    })
}
else if (order == "Dissending" && sel == "price") {
    arr.sort((a, b)=>{
       return b.price - a.price;
     })
 }
 else if(order=="Assending" && sel=="Company"){
    arr.sort((a,b) => {
         return a.Company>b.Company ? 1 : a.Company<b.Company ? -1:0;
    })
}
else if(order=="Dissending" && sel=="Company"){
    arr.sort((a,b) => {
         return a.Company<b.Company ? 1 : a.Company>b.Company ?-1:0;
    })
}
else if(order=="Assending" && sel=="Model"){
    arr.sort((a,b) => {
         return a.Company>b.Company ? 1 : a.Company<b.Company ?-1:0;
    })
}
else if(order=="Dissending" && sel=="Model"){
    arr.sort((a,b) => {
         return a.Company<b.Company ? 1 : a.Company>b.Company ?-1:0;
    })
}



let table ="<table><tr><th>Company</th>Model<th></th><th>Memory</th><th>price</th></tr>"
    arr.forEach((val) => {
        table+=
        "<tr><td>"+
        val.Company+
        "</td><td>"+
         val.Model+
        "</td><td>"+
        val.Memory+
        "</td><td>"+
        val.price+
        "</td></tr>"
    
    });

    table+="</table>"
    document.getElementById("p1").innerHTML=table;
}

