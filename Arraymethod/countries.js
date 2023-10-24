var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    var asiaCountries=result.filter((country)=>{
        return country.region ==="Asia";
    });
    console.log(asiaCountries);
}