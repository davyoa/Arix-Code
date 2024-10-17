const navbar = document.getElementById('navbar');
const portfolio_img = document.getElementById('portfolio_img');
const portfolio_img_for_page = document.getElementById('portfolio_img_for_page')

fetch('navbar/navbar.html')
.then(res=>res.text())
.then(data=>{
    navbar.innerHTML = data;
})

fetch('portfolio images/portfolio image.html')
.then(res=>res.text())
.then(data=>{
    portfolio_img.innerHTML = data;
})

fetch('portfolio images/portfolio_image_page.html')
.then(res=>res.text())
.then(data=>{
    portfolio_img_for_page.innerHTML = data;
})

