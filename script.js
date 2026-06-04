const container =
document.getElementById("dress-container");

dresses.forEach(dress => {

container.innerHTML += `
<div class="card">

<img src="${dress.image}" alt="dress">

<div class="content">

<h3>${dress.name}</h3>

<p>${dress.description}</p>

<div class="price">
${dress.price}
</div>

<button onclick="window.open('https://wa.me/918320104643?text=Hello Twiency Korat Couture, I want to order ${dress.name}')">
Order On WhatsApp
</button>

<button onclick="window.location.href='mailto:trkorat76@gmail.com?subject=Dress Inquiry'">
Email Inquiry
</button>

</div>
</div>
`;
});
