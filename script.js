const container =
document.getElementById("dress-container");

function renderDresses(list){

container.innerHTML = "";

list.forEach(dress=>{

container.innerHTML += `

<div class="card">

<img src="${dress.images[0]}" alt="${dress.name}">

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

<button onclick="window.open(
'https://wa.me/918320104643?text=Hello, I want to order ${dress.name}'
)">
Order Now
</button>

</div>
</div>
`;
});
}

renderDresses(dresses);

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

document
.getElementById("category")
.addEventListener("change", e=>{

const selected =
e.target.value;

if(selected==="All"){
renderDresses(dresses);
return;
}

const filtered =
dresses.filter(d =>
d.category === selected
);

renderDresses(filtered);

});
