let cart=[{
  id:'1',
  image:{
    mobile:'images/image-waffle-mobile.jpg',
    tablet:'images/image-waffle-tablet.jpg',
    desktop:'images/image-waffle-desktop.jpg'
  },
  little:'waffle',
  name:'Waffle with Berries',
  price:'$5.50',
  quantity:0
},{
  id:'2',
  image:{
     mobile:'images/image-tiramisu-mobile.jpg',
    tablet:'images/image-tiramisu-tablet.jpg',
    desktop:'images/image-tiramisu-desktop.jpg'
  },
  little:'Tiramisu',
  name:'Classic Tiramisu',
  price:'$3.50',
  quantity:0
},{
  id:'3',
  image:{
     mobile:'images/image-creme-brulee-mobile.jpg',
    tablet:'images/image-creme-brulee-tablet.jpg',
    desktop:'images/image-creme-brulee-desktop.jpg'
  },
  little:'Creme Brulee',
  name:'Vanilla Bean Creme Brulee',
  price:'$4.50',
  quantity:0
},{
  id:'4',
  image:{
     mobile:'images/image-macaron-mobile.jpg',
    tablet:'images/image-macaron-tablet.jpg',
    desktop:'images/image-macaron-desktop.jpg'
  },
  little:'Macaron',
  name:'Macaron Mix of five',
  price:'$6.00',
  quantity:0
},{
  id:'5',
  image:{
   mobile:'images/image-baklava-mobile.jpg',
    tablet:'images/image-baklava-tablet.jpg',
    desktop:'images/image-baklava-desktop.jpg'
},
  little:'Baklava',
  name:'Pistachio Baklava',
  price:'$7.50',
  quantity:0
},{
  id:'6',
  image:{
     mobile:'images/image-meringue-mobile.jpg',
    tablet:'images/image-meringue-tablet.jpg',
    desktop:'images/image-meringue-desktop.jpg'
  },
  little:'Pie',
  name:'Lemon Meringue Pie',
  price:'$4.00',
  quantity:0
},{
  id:'7',
  image:{
     mobile:'images/image-cake-mobile.jpg',
    tablet:'images/image-cake-tablet.jpg',
    desktop:'images/image-cake-desktop.jpg'
  },
  little:'Cake',
  name:'Red Velvet Cake',
  price:'$7.50',
  quantity:0
},{
  id:'8',
  image:{
     mobile:'images/image-brownie-mobile.jpg',
    tablet:'images/image-brownie-tablet.jpg',
    desktop:'images/image-brownie-desktop.jpg'
  },
  little:'Brownie',
  name:'Salted Caramel Brownie',
  price:'$7.50',
  quantity:0
},{
  id:'9',
  image:{
     mobile:'images/image-panna-cotta-mobile.jpg',
    tablet:'images/image-panna-cotta-tablet.jpg',
    desktop:'images/image-panna-cotta-desktop.jpg'
  },
  little:'Panna Cotta',
  name:'Vanilla Panna Cotta',
  price:'$8.50',
  quantity:0
}]

let myArray =[]

// displays the items
let result =''
cart.forEach(item=>{
  result +=`  <div class="main">
      <div class='image'>
      <picture>
      <source media="(min-width: 1024px)" srcset="${item.image.desktop}">
      <source media="(min-width: 768px)" srcset="${item.image.tablet}">
      <source media="(min-width: 375px)" srcset="${item.image.mobile}">
      <img src="${item.image.mobile}" alt="image">
      </picture>
        
      </div>
       <div class="relative">
  
        <button data-id="${item.id}"
        data-quantity="${item.quantity}"
        data-name="${item.name}"
        data-price="${item.price}"
        data-image-mobile="${item.image.mobile}"
       data-image-tablet="${item.image.tablet}"
       data-image-desktop="${item.image.desktop}"
        class='bug'
        >Add to cart</button>
      </div>
      <div class="gather">
        <span class="little">${item.little}</span>
        <span class='stro'><strong>${item.name}</strong></span>
        <span class="price">${item.price}</span>
      </div>
           
    
    </div>`
})
document.querySelector('.display').innerHTML= result

array()


let eje=document.querySelectorAll('button')
eje.forEach(items => {
  items.addEventListener('click', () => {
     const imageDiv = items.closest('.main').querySelector('.image img');
imageDiv.classList.add('active');
    let data = Number(items.dataset.id);
    let object = {
  id: items.dataset.id,
  name: items.dataset.name,
  price: items.dataset.price,
  image: {
    mobile: items.dataset.imageMobile,
    tablet: items.dataset.imageTablet,
    desktop: items.dataset.imageDesktop
  },
  quantity: 1
  
};

 //items.style.backgroundColor = "brown";
 let kop =   myArray.find(dop=> dop.id == object.id)
 if(kop){
   
 }else {
   myArray.push(object)
  
   allRest()
 }



 // Hide empty cart image and text when an item is added
const image = document.querySelector('.mole .pics');
const text = document.querySelector('.mole .text');
if (image && text) {
  image.style.display = 'none';
  text.style.display = 'none';
}
    

    let sort = cart.find(nest => nest.id == data);
    if (sort) {
      
      if (items.innerHTML === 'Add to cart') {
        sort.quantity += 1;
        array()
        items.classList.add('active-cart')
        items.innerHTML = `
          <div class="lop">
            <button class="plus" data-id="${sort.id}">+</button>
            <p>${sort.quantity}</p>
            <button class="minus" data-id="${sort.id}">-</button>
          </div>
        `
        // Add event listeners to minus and plus buttons

        items.querySelector('.minus').addEventListener('click', (e) => {
  e.stopPropagation();

  let data = Number(items.dataset.id);
  let item = cart.find(datas => datas.id == data);

  if (item) {
    item.quantity -= 1;

    let index = myArray.findIndex(dop => dop.id == item.id);
    if (index !== -1) {
      if (item.quantity <= 0) {
        myArray.splice(index, 1);
        items.classList.remove('active-cart');
        items.innerHTML = 'Add to cart';
        items.style.backgroundColor = 'drown';
        items.style.color = 'brown';
        let parentImage = items.closest('.main').querySelector('img');
        if (parentImage) parentImage.style.border = 'none';
      } else {
        myArray[index].quantity = item.quantity;
        items.querySelector('p').textContent = item.quantity;
      }
    }

    array();
    allRest();
  }
});

        items.querySelector('.plus').addEventListener('click', (e) => {
          e.stopPropagation();
          let data = Number(items.dataset.id);
          let item = cart.find(datas => datas.id == data);
          if (item) {
            item.quantity += 1;
            let index = myArray.findIndex(dop => dop.id == item.id);
  if (index !== -1) {
    myArray[index].quantity = item.quantity;
  }
            items.querySelector('p').textContent = item.quantity;
            array()
            allRest()
          }
        });
        

      } 
    }
  });
});

function array(){
let total =0
cart.forEach(check=>{
  total += check.quantity
})
document.querySelector('.quantity').innerHTML =`<p class="cart">Your Cart(${total})</p>`
}

  

function allRest(){
let rest =''
let added =0
let sumTotal = 0
myArray.forEach(pop=>{
 let price = pop.price.replace('$', (''))
let kept = price* pop.quantity
added += kept

  rest +=`
  <div class='gave'>
  <p class="name">${pop.name}</p>
  <div class="threes">
  <div class="three">
  <div class='son'>
  <p class="pop">${pop.quantity}</p>
  <img src='images/icon-remove-item.svg' class='it'>
  </div>
    
  <p class="p"> ${pop.price}</p>
  <p class="b">$${kept.toFixed(2)}</p>
    </div>
    <div class="box">
  <i class="fa-solid fa-xmark delete"></i>
  </div>
  </div>
  <hr>
  </div>
  `
})
document.querySelector('.quan').innerHTML=rest

// ✅ If cart becomes empty, show empty state again and remove Confirm Order
if (myArray.length === 0) {
  document.querySelector('.quan').innerHTML = '';
  document.querySelector('.hi').innerHTML = '';

  // Show empty cart image + text again
  const image = document.querySelector('.mole .pics');
  const text = document.querySelector('.mole .text');
  if (image && text) {
    image.style.display = 'block';
    text.style.display = 'block';
  }

  return; // Stop the function here
}

// ✅ If we still have items, show Confirm Order normally
document.querySelector('.hi').innerHTML = `
<div class="increase">
<p class="tot">Order Total:</p>
<p class="order">$${added.toFixed(2)}</p>
</div>
<div class='neutral'>
<img src='images/icon-carbon-neutral.svg' class='vg'>
<p class='is'>This is <strong>carbon-neutral</strong> deliver
</div>
<div class="box">
<button class="confirm">Confirm order</button>
</div>
`;


//document.querySelector('.quantity').innerHTML=rest


document.querySelector('.confirm').addEventListener('click', ()=>{
  let added = 0
  let showAll =""
  document.querySelector('.dev').style.backgroundColor='rgba(211, 200, 200, 0.9)'
  document.querySelector('.dev').style.opacity=0.5
  

   document.querySelector('.toas').style.display="block"
 showAll +=` 
<div class='odd'>
<img src='images/icon-order-confirmed.svg' class='svg'>
<h2>Order Confirmed </h2>
<span class='enjoy'>We hope you enjoy you meal</span>
</div>`
myArray.forEach(pop=>{

  let price = pop.price.replace('$', (''))

//let kept = Number((price * pop.quantity)).toFixed(2)
//added += kept
 let kept = (price * pop.quantity).toFixed(2); // kept is string for display
added += parseFloat(kept); // parse it back to number for addition
 

showAll +=` 
<div class="last">
  <div class="us">
    <picture>
      <source media="(min-width: 1024px)" srcset="${pop.image.desktop}">
      <source media="(min-width: 768px)" srcset="${pop.image.tablet}">
     
      <img src="${pop.image.mobile}" alt="image">
 </picture>
  </div>
   <div class='low'>
  <div class="hu">
    <span class="hop">${pop.name}</span>
    <div class="mu">
      <div class="son">
        <span class="g">${pop.quantity}</span>
        <img src="images/icon-remove-item.svg" class="it">
      </div>
      <span class="no">${pop.price}</span>
    </div>
  </div>

  <p class="kept">$${kept}</p>
  </div>
</div>
<hr>

  `
})

showAll +=`
<div class='overlay'>
<div class="toast">
<div class="this">
<p class="mod"><strong>Order Total:</strong></p>
<p class="hm"> $${added.toFixed(2)}</p>
</div>
<div class='gone'>
 <button class='new-order' onclick =nail()> start a new order</button>
 </div>
</div>
</div>`

let toast = document.querySelector('.toas')
toast.classList.add("toast")

 toast.innerHTML= showAll
 

})


document.querySelectorAll('.delete').forEach((deletes, index)=>{
  deletes.addEventListener('click', ()=>{
  
    myArray.splice(index, 1)
    allRest()
    
  })
})
}

function nail() {
  myArray = [];
  allRest();
  document.querySelector('.toas').style.display = "none";
  document.querySelector('.toas').innerHTML = '';
  document.querySelector('.quantity').innerHTML = '';
  document.querySelector('.quan').innerHTML = '';
  document.querySelector('.hi').innerHTML = '';

  // Reset all item buttons to "Add to cart"
  document.querySelectorAll('.bug').forEach(button => {
    
     button.classList.remove('active-cart')
     button.innerHTML = 'Add to cart';

  });
document.querySelector('.dev').style.backgroundColor='rgb(245, 243, 240)';
document.querySelector('.dev').style.opacity='initial'


  // Reset item quantities to zero
  cart.forEach(item => {
    item.quantity = 0;
  });

  // Update cart count
  array();

  // ✅ Show empty cart image + text again
  const image = document.querySelector('.mole .pics');
  const text = document.querySelector('.mole .text');
  if (image && text) {
    image.style.display = 'block';
    text.style.display = 'block';
  }
  document.querySelectorAll('.image img').forEach(img => {
  img.classList.remove('active');
});

}




