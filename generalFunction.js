/*字符串读取textRead(argumentNode)*/ /*PassionOverPain: I can't understand chinese but hopefully you can see my  logic*/
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

/*My features added start here:*/ /*我添加的功能从这里开始*/

const Namebox = document.getElementById("name");
const Emailbox = document.getElementById("route");
const letters = /^[a-zA-Z ]*$/; // I have inlcuded a space for Name and Surname, you can remove the space if it is name only //我在名字和姓氏中包含了一个空格，如果只是名字，您可以删除该空格
const lettersChinese=/[\u4e00-\u9fff]*/;
function Submit()
{
    var Name = Namebox.value;
    var Email = Emailbox.value;
    // Name Validation starts here // //名称验证从这里开始//
    if (Name =="")   
        {
            window.alert("Please complete the Name field.");
            Namebox.focus();
        }
        else
        if((!Name.match(letters))&&(!Name.match(lettersChinese)))
        {
            window.alert("Your name must contain Only Alphabets.");
            Namebox.focus();
        }
        else
    //Email Validation starts here// //电子邮件验证从这里开始//
    if (Email =="")
        {
                window.alert("Please complete the Email field.");
        }
    else
    if(!Email.includes("@") ||!Email.includes(".") )
    {
        window.alert("The Email you have entered is Invalid.")
        Emailbox.focus();
    }
    else
    {
        window.alert(`Thnak you for reaching out to us ${Name}. We will be in touch with you at ${Email} shortly`)
    }
}
function Reset() // Since we are not using a form, we need to manually reset every field// //由于我们没有使用表单，因此我们需要手动重置每个字段//
{
    const gender = document.getElementsByName('gender');
    const school = document.getElementsByName('schoollike');
    Namebox.value = "";
    Emailbox.value = "";
    for(i=0;i<gender.length;i++)
        {
            gender[i].checked =false;
        }
    for(i=0;i<school.length;i++)
        {
            school[i].checked =false;
        }
}

