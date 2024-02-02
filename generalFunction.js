/*字符串读取textRead(argumentNode)*/
function textRead(argumentNode){
    var s="";
    var realNode=argumentNode.childNodes||argumentNode;
    for(var i=0;i<realNode.length;i++){
        s+=realNode[i].nodeType!=1?realNode[i].nodeValue:textRead(realNode[i].childNodes);
    }
    return s;
}

/*上传js脚本*/
function request(url){
    var script=document.createElement("script");
    script.type="text/javascript";
    if(script.readyState){
        script.onreadyStatechange=function(){
            if(script.readyState=="complete"||script.readyState=="loaded"){
                script.onreadyStatechange=null;
            }
        };
        console.log("IE");
    }else{
        script.onload=function(){
        };
    }
    script.src=url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
console.log("generalFunction.js has onloaded.");

/*焦点输入框变灰*/
function be_gray(){
var inputBox=document.getElementsByTagName("input");
for(var i=0;i<inputBox.length;i++){
inputBox[i].addEventListener("focus",function(){
this.style.backgroundColor = "#EAEAEA";
},true);
inputBox[i].addEventListener("blur",function(){
this.style.backgroundColor = "#FFFFFF";
},true);}
}

/*清空子节点*/
function empty(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

