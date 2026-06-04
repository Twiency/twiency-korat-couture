const container =
document.getElementById("dress-container");

function renderDresses(list){

container.innerHTML = "";

list.forEach(dress => {

container.innerHTML += `

<div class="card">

<img
src="${dress.images[0]}"
alt="${dress.name}"
onclick="openModal(
'${dress.images[0]}',
'${dress.name}',
'${dress.price}',
'${dress.description}'
)">

<div class="content">

<h3>${dress.name}</h3>

<p>${dress.description}</p>

<div class="price">
${dress.price}
</div>

<button onclick="window.open(
'https://wa.me/918320104643?text=Hi Twiency Korat Couture,%0A%0AI am interested in:%0A${dress.name}%0A%0APlease share availability.'
)">
Order On WhatsApp
</button>

</div>
</div>

`;

});

}

renderDresses(dresses);

/* SEARCH */

document
.getElementById("search")
.addEventListener("input", e=>{

const keyword =
e.target.value.toLowerCase();

const filtered =
dresses.filter(d =>
d.name.toLowerCase()
.includes(keyword)
);

renderDresses(filtered);

});

/* CATEGORY */

document
.getElementById("category")
.addEventListener("change", e=>{

const selected =
e.target.value;

if(selected==="All Categories"){
renderDresses(dresses);
return;
}

const filtered =
dresses.filter(d =>
d.category===selected
);

renderDresses(filtered);

});

/* MODAL */

function openModal(
image,
name,
price,
description
){

document.getElementById(
"modal"
).style.display="flex";

document.getElementById(
"modal-img"
).src=image;

document.getElementById(
"modal-title"
).innerText=name;

document.getElementById(
"modal-price"
).innerText=price;

document.getElementById(
"modal-description"
).innerText=description;

}
