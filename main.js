var input = [];
var sum = 0;
let balance = 0;
$(function(){
    $("button").click(function() {
        var fired_button = $(this).val();
        var output = document.getElementById("headerOutput");
        if(fired_button !== "CE") {
            /*Removes zero at the start of number*/
            if(["+","-","*","/","="].indexOf(fired_button)>=0){
                enumerate();
            }else if(fired_button === "DEL") {
                var editedText = output.innerText.slice(0, -1);
                console.log("Edited: "+editedText);
                if(editedText === ""){
                    output.innerText = "0";
                }else {
                    output.innerText = editedText;
                }
            }else if(output.innerText === "0" && fired_button !== "0" && fired_button !== "COLLAPSIBLE"){
                output.innerText = fired_button;
            }else if(fired_button === "COLLAPSIBLE"){
                return;
            }else {
                output.innerText += fired_button;
            }
        }else{
            clearScreen();
        };
        function enumerate() {
            if(fired_button === "+"){
                balance = 1;
                lastOp();
                addNumber();
            }else if(fired_button === "-"){
                balance = 2;
                lastOp();
                subtractNumber();
            }else if(fired_button === "*"){
                balance = 3;
                lastOp();
                multiplyNumber();
            }else if(fired_button === "/"){
                balance = 4;
                lastOp();
                divideNumber();
            }else if(fired_button === "="){
                var number = parseFloat(output.innerText);
                input.push(number);
                switch(balance){
                    case 1:
                        addNumber();
                        break;
                    case 2:
                        subtractNumber();
                        break;
                    case 3:
                        multiplyNumber();
                        break;
                    case 4:
                        divideNumber();
                        break;
                }
                output.innerText = sum;
            }
        }
        function clearScreen() {
            console.log("before input: "+input);
            console.log("before sum: "+sum);
            input=[];sum=0;
            console.log("after input: "+input);
            console.log("after sum: "+sum);
            output.innerText = "CLEARED";
            setTimeout(function () {
                output.innerText = "0";
            }, 1000);
        }
        function lastOp() {
            var number = parseFloat(output.innerText);
            output.innerText = "0";
            input.push(number);
        }
        function addNumber() {
            sum=0;
            for(var i in input){
                sum+=input[i];
            }
        }
        function subtractNumber() {
            sum=input[0];
            for (let i = 1; i < input.length; i++){
                sum -= input[i];
            }
        }
        function multiplyNumber() {
            sum=input[0];
            for (let i = 1; i < input.length; i++){
                sum *= input[i];
            }
        }
        function divideNumber() {
            sum=input[0];
            for (let i = 1; i < input.length; i++){
                sum /= input[i];
            }
        }
    });
});