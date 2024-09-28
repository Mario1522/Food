let right = document.querySelector('.bi-arrow-right-circle-fill')
let left = document.querySelector('.bi-arrow-left-circle-fill')
let up = document.querySelector(".bi-arrow-up-circle-fill")
let menuBtn = document.querySelector('.bi-list')
let dropMenu = document.querySelector('.down-nav ul')
let opencart = document.querySelector('.opencart')
let cart = document.querySelector('.myCart')
let closecart = document.querySelector('.bi-x-circle')
let btn = document.querySelector('.products .btn')

btn.onclick = ()=>{
  location.href = "product.html"
}
window.onscroll = ()=>{
    if (window.scrollY > 600) {
        up.style.display = 'flex'
    }else{
        up.style.display = 'none'
    }
    
}


menuBtn.onclick = function(){
    this.classList.toggle("open")
    dropMenu.classList.toggle("open")
}

opencart.onclick = ()=>{
  cart.classList.add('open')
}

closecart.onclick = ()=>{
  cart.classList.remove('open')
}








up.onclick = function(){
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
}

$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: left,
        nextArrow: right,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 790,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
              },
            },
        ]
    });
  });



//----------------------------------------------------------------------


let container = document.querySelector('.product .container')
let shopList = document.querySelector('.myCart .container')
let counter = document.querySelector('.top-nav .right .cart p')
let totalPrice = document.querySelector('.myCart .total span')





let products = [
  {id : "1" , name :"Fresh vagies" ,img : 'images/vegies.png' , price : 30, amount : 0 , total : 30},
  {id : "2" , name :"yogurt" ,img : 'images/yogurt.png' , price : 35, amount : 0 ,total : 35},
  {id : "3" , name :"Summer salade" ,img : 'images/plate-1.png' , price : 40, amount : 0 ,total : 40},
  {id : "4" , name :"Cottage Dish" ,img : 'images/plate-4.png' , price : 45, amount : 0 ,total : 45  },
  {id : "5" , name :"Greek Salade" ,img : 'images/salad-table.jpg' , price : 50, amount : 0 ,total : 50},
  {id : "6" , name :"Coffe Time" ,img : 'images/coffee.jpg' , price : 55, amount : 0 ,total : 55},
  {id : "7" , name :"Dinner Time" ,img : 'images/food-table.jpg' , price : 60, amount : 0 ,total : 60},
  {id : "8" , name :"After Dinner" ,img : 'images/jars.jpg' , price : 65, amount : 0 ,total : 65}
]





if (localStorage.getItem('data') == null) {
  shopping = []
}else{
  shopping = JSON.parse(localStorage.getItem('data'))
}



function creat(num) {
  // console.log(num);
  if (products[num].amount == 0) {
    let newAmount = products[num].amount + 1
    products[num].amount = newAmount
    shopping.push(products[num])
  }
  localStorage.setItem("data" ,JSON.stringify(shopping))
  display()
}





function display(){
  var item = ''
  var total = 0
  for (let i = 0; i < shopping.length; i++) {
    total += shopping[i].total
    item += ` <div class="buy">
    <img src="${shopping[i].img}" alt="">
                <article>
                <b>${shopping[i].name}</b>
                <span>$${shopping[i].total}</span>
                </article>
                <div class="count">
                <i class="bi bi-plus" onclick='plusMinus(${shopping[i].amount + 1} , ${i})'></i>
                <span>${shopping[i].amount}</span>
                <i class="bi bi-dash" onclick='plusMinus(${shopping[i].amount - 1} , ${i})'></i>
                </div>
                <i class="bi bi-trash-fill" onclick="del(${i})"></i>
                </div>`
                
    }
  if(shopping.length > 0){
    shopList.innerHTML = item
    counter.style.color = "green"
  }else{
    shopList.innerHTML = "ur cart is empty"
    counter.style.color = "red"
  }
  
  counter.innerHTML = shopping.length
  totalPrice.innerHTML = total
}
display()


function del(num){
  shopping.splice(num , 1)
  display()
  localStorage.setItem("data" ,JSON.stringify(shopping))
}
















function plusMinus(amount , num){
  if(amount == 0){
    shopping.splice(num , 1)
  }else{
  shopping[num].amount = amount
  shopping[num].total = amount * shopping[num].price
  }
  display()
}