var arr =  [];


$('p').each(function(){
    arr.push($(this).text());
})
var jsonCC = [];


var currentArt = null;
var regex = new RegExp(/Art\. ([0-9]|\.){1,5}/);
for(var i = 0; i < arr.length; i++){
    var txt = arr[i];
    var result = regex.exec(txt.trim()); 
    if(result != null){
        if(currentArt != null){
            jsonCC.push(currentArt);
        }
        console.log(result);
        currentArt = {
            number: result[0],
            text: txt.replace(result[0],''),
            childrens: []
        }
        continue;
    }
    if(currentArt != null){
        currentArt.childrens.push(txt);
    }
}


