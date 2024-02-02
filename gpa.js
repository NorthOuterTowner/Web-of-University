console.log("generate table has been submit.");

/*get numbers of curriculum*/
var number = parseInt(document.getElementById("number").value);

for (var i = 0; i < number; i++) {
    /*Score&Credit Legend*/
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.appendChild(document.createTextNode(i+1+" curriculum"));
    fieldset.appendChild(legend);

    /*Score Label*/
    var label1 = document.createElement("label");
    label1.htmlFor = "score" + i;
    label1.appendChild(document.createTextNode("Score:"));
    fieldset.appendChild(label1);

    /*Score Input*/
    var input1 = document.createElement("input");
    input1.type = "number";
    input1.id = "score" + i;
    input1.className = "score";
    input1.required = true;
    input1.min = 0;
    input1.max = 100;
    fieldset.appendChild(input1);

    /*Credit Label*/
    var label2 = document.createElement("label");
    label2.htmlFor = "credit" + i;
    label2.appendChild(document.createTextNode("Credit:"));
    fieldset.appendChild(label2);

    /*Credit Input*/
    var input2 = document.createElement("input");
    input2.type = "number";
    input2.id = "credit" + i;
    input2.className = "credit";
    input2.required = true;
    input2.min = 0;
    input2.max = 20;
    fieldset.appendChild(input2);
    document.getElementById("formContainer").appendChild(fieldset);
}

console.log("table has been generated.");

be_gray();

var gpaForm=document.getElementById("myForm");
empty(gpaForm);

var calculateBtn=document.createElement("input");
var startCal=document.getElementById("calculate");
calculateBtn.type="button";
calculateBtn.value="CalculateGPA";
startCal.appendChild(calculateBtn);

/*Submit the data of Scores and credits*/
calculateBtn.onclick=function(){
    var scoreAll=new Array(number);
    var valueAll=new Array(number);
    var every=new Array(number);
    var res=0;
    var values=0;
    for(var i=0;i<number;i++){
        scoreAll[i]= parseInt(document.getElementById("score"+i).value);
        valueAll[i]=parseInt(document.getElementById("credit"+i).value);
        values+=valueAll[i];
    }
    for(var i=0;i<number;i++){
        every[i]=scoreAll[i]*(valueAll[i]/values);
        res+=every[i];
    }
    res/=25;
    document.getElementById("result").appendChild(document.createTextNode("Your GPA is "+res.toFixed(2)));
}
