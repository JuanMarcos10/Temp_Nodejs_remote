'use strict';
let d = new Date();
console.log(`Today's date: ${d.toLocaleDateString()}`);
console.log('test.js in public folder found & linked OK');

// This should be installed in order to work fine: 
window.onload = function() {
    
    document.getElementById("demo").innerHTML = "This command works in the public & other folders";
    
    let myArray = ["home", "users", "hello.html", "other", "hello"];
    myArray.forEach(myFunction);
    function myFunction(item, index, array) {
        let liNode = document.createElement("li");
        let para = document.createElement("a");
        let node = document.createTextNode(array[index]);
        let att = document.createAttribute("href");
        att.value = `http://localhost:3000/${array[index]}`;
        para.setAttributeNode(att);
        para.appendChild(node);
        let test = document.getElementById("test");
        let liNodeNohref = test.appendChild(liNode);
        liNodeNohref.appendChild(para);
    };

/*     let active = document.querySelectorAll("a");
    console.log(active); */
};


/*  ANTIGUO CODIGO PARA LINKS DE MANERA MANUAL SIN ARRAY:
    let para = document.createElement("a");
    let node = document.createTextNode("home");
    let att = this.document.createAttribute("href");
    att.value = "http://localhost:3000";
    para.setAttributeNode(att);
    para.appendChild(node);
    let linksNodeapi = document.getElementById("linksNodeapi");
    linksNodeapi.appendChild(para)
 */