//products
let API="https://63c6ead0dcdc478e15cc357a.mockapi.io/furniture"
function data(para){
    async function fetchfun(){
        try {
           let res=await fetch(para)
           let newdata= await res.json()
           Display(newdata)
           fetchdata=newdata
        } catch (error) {
            console.log(error)
        }
    }
    fetchfun()
    
    }
    data(API)
    let Buylocatstr=JSON.parse(localStorage.getItem("buy"))||[]
console.log(Buylocatstr)


function Display(data){
    let SpanTag=document.getElementById("Spn")
    let Container=document.getElementById("container")
    Container.innerHTML=""
data.forEach((element,index) => {
    let Card =document.createElement("div")
    let Image=document.createElement("img")
    let Price=document.createElement("h4")
    let Description=document.createElement("p")
    let Category=document.createElement("h3")
     let Button=document.createElement("button");
     let Anchor=document.createElement("a")
     Button.innerText="ADD"
    Image.src=element.avatar;
    Description.innerText=element.description;
    Price.innerText="$"+element.price
    Category.innerText=element.category;
    Anchor.addEventListener("click",()=>{
        if(chechDuplicate(element)){
            alert("Product Already in Cart")
          }else{
            Buylocatstr.push({...element,quantity:1})
           localStorage.setItem("buy",JSON.stringify(Buylocatstr))
           alert("Product Added To Cart")
          }
        })
    Anchor.append(Button)
    Card.append(Image,Description,Price,Category,Anchor)
    Container.append(Card)
});
SpanTag.innerText=data.length

}
//duplicate

function chechDuplicate(ele){
    
    for(let i=0;i<=Buylocatstr.length-1;i++){
      if(Buylocatstr[i].id==ele.id){
        return true
      }
    }
     return false
     }











///Filter 
let Sorting=document.querySelector("select")
Sorting.addEventListener("change",()=>{
  let filterby=Sorting.value
  if(filterby==""){
    API="https://63c6ead0dcdc478e15cc357a.mockapi.io/furniture"
    data(API)
  }else if(filterby=="asc"){
    API="https://63c6ead0dcdc478e15cc357a.mockapi.io/furniture?sortBy=price&order"
    data(API)
  }else if(filterby=="desc"){
    API="https://63c6ead0dcdc478e15cc357a.mockapi.io/furniture?sortBy=price&order=desc"
    data(API)
  }
})

///Search
let formdata=document.querySelector("form")
formdata.addEventListener("submit",(e)=>{
    e.preventDefault();
    let Formby=formdata.search.value;
    let Searched=fetchdata.filter((ele)=>{
        if((ele.category.toUpperCase().includes(Formby.toUpperCase())==true)||(ele.description.toUpperCase().includes(Formby.toUpperCase())==true)){
            return true
        }else {
            return false 
        }
    })
    Display(Searched)
})









// {
//     "avatar": "https://cb.scene7.com/is/image/Crate/MilenaFaceMugSSS22/$web_pdp_main_carousel_med$/211201144719/milena-face-mug.jpg",
//     "description": "Milena Face Mug",
//     "price": 8.99,
//     "category": "Kitchen",
//     "id": "55"
// }




// API-desending:-https://63c6ead0dcdc478e15cc357a.mockapi.io/furniture?sortBy=price&order=desc