const URL="https://api.dictionaryapi.dev/api/v2/entries/en/";
let main=document.querySelector(".main");
let search=document.querySelector(".search");
let lower=document.querySelector(".lower");
let refresh=document.querySelector("#refresh");

search.onclick= async ()=>{
    let inputword=document.querySelector("#input").value;
    const wordURL=`${URL}${inputword}`;
       let response= await fetch(wordURL);
       let data=await response.json();
       let meaning=data[0].meanings[0];
    let wordmeans=meaning.definitions[0].definition;
 lower.innerHTML=wordmeans;
}
refresh.addEventListener('click',function(){
   location.reload()//function to reload page
})

