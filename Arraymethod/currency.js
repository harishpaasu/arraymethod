var request= new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var currency=result.filter ((Element)=>{
        for (let key in Element.currencies){
            if(Element.currencies[key].code ==="USD"){
                return Element;
            }
        }
            
            
    })
console.log(currency);
}
