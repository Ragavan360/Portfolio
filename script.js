// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Contact Form
document.querySelector('.contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  alert("Thank you for reaching out! I’ll get back to you soon.");
  e.target.reset();
});

// Scroll Reveal
function revealOnScroll(){
  document.querySelectorAll('.reveal').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-100) el.classList.add('active');
  });
}
window.addEventListener('scroll',revealOnScroll);
document.addEventListener('DOMContentLoaded',revealOnScroll);

// Dark Mode Toggle
const darkToggle=document.getElementById("dark-mode-toggle"),
      body=document.body;
if(localStorage.getItem("darkMode")==="enabled"){
  body.classList.add("dark-mode"); darkToggle.textContent="☀️";
}
darkToggle.addEventListener("click",()=>{
  body.classList.toggle("dark-mode");
  if(body.classList.contains("dark-mode")){
    darkToggle.textContent="☀️"; localStorage.setItem("darkMode","enabled");
  }else{
    darkToggle.textContent="🌙"; localStorage.setItem("darkMode","disabled");
  }
});
