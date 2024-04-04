
$(document).ready(function(){
    $("#result").hide();
    $("#submitBtn").on("click",()=>{
    //checkValidity() method is not part of the jQuery object, 
    //it is the method of the original HTML DOM element.
        if(document.getElementById("inputForm").checkValidity()){
            onSubSuccess();
        }else{
            alert("Invalid input");
        }
    });
});

function onSubSuccess(){
    //hide the input form field
    let inputfield = $("#exempel");
    inputfield.hide();
    let resultfield = $("#result");
    resultfield.show();
    let resultText=listAllBB($("#bishNr").val(), $("#boshNr").val(), $("#endNr").val());
    $("#resultPrag").text(resultText);
   // $("#resultPrag").empty().append(resultText);
    $("#againBtn").on("click",()=>{
        resultfield.hide();
        inputfield.show();
        location.reload();
    });
}

function listAllBB(b1,b2,b3){
    var result = "";
    for(let i =1; i<=b3; i++){
        if(i%b1 == 0){
            if(i%b2 == 0){
                result+=i+":Bish-Bosh ";
            }else{
                result+=i+ ":Bish "; 
            }
        }else if(i%b2 == 0){
            result+=i+ ":Bosh "; 
        }
    }
    return result;
}