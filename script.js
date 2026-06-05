const container =
document.getElementById(
"dress-container"
);

/* RENDER DRESSES */

function renderDresses(list){

container.innerHTML = "";

if(list.length === 0){

container.innerHTML = `

<div style="
text-align:center;
grid-column:1/-1;
padding:80px 20px;
font-size:24px;
color:#666;
">

No dresses found.

</div>
`;

return;
}

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
)"

onerror="this.src='dresses/dress1.jpg'">

<div class="content">

<h3>
${dress.name}
</h3>

<p>
${dress.description}
</p>

<div class="price">
${dress.price}
</div>

<button onclick="orderNow(
'${dress.name}'
)">
Order On WhatsApp
</button>

</div>

</div>

`;

});

}

/* INITIAL LOAD */

renderDresses(dresses);

/* SEARCH */

document
.getElementById("search")
.addEventListener("input", function(e){

const keyword =
e.target.value
.toLowerCase()
.trim();

const filtered =
dresses.filter(dress =>

dress.name
.toLowerCase()
.includes(keyword)

);

renderDresses(filtered);

});

/* CATEGORY FILTER */

document
.getElementById("category")
.addEventListener("change", function(e){

const selected =
e.target.value;

if(selected ===
"All Categories"){

renderDresses(dresses);
return;
}

const filtered =
dresses.filter(dress =>

dress.category ===
selected

);

renderDresses(filtered);

});

/* OPEN MODAL */

function openModal(
image,
name,
price,
description
){

document
.getElementById("modal")
.style.display =
"flex";

document
.getElementById("modal-img")
.src = image;

document
.getElementById("modal-title")
.innerText = name;

document
.getElementById("modal-price")
.innerText = price;

document
.getElementById("modal-description")
.innerText =
description;

/* MODAL WHATSAPP */

document
.getElementById(
"modal-whatsapp"
)
.href =

`https://wa.me/918320104643?text=
Hello%20Twiency%20Korat%20Couture,%0A%0A
I%20am%20interested%20in:%0A
${encodeURIComponent(name)}%0A%0A
Please%20share%20availability,%20size%20details%20and%20more%20information.
`;

}

/* CLOSE MODAL */

window.onclick =
function(event){

const modal =
document.getElementById(
"modal"
);

if(event.target === modal){

modal.style.display =
"none";
}

}

/* ORDER NOW */

function orderNow(
dressName
){

window.open(

`https://wa.me/918320104643?text=
Hello%20Twiency%20Korat%20Couture,%0A%0A
I%20am%20interested%20in:%0A
${encodeURIComponent(dressName)}%0A%0A
Please%20share%20availability,%20size%20details%20and%20more%20information.`,

"_blank"

);

}
