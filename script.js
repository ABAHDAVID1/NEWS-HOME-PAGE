'use strict';
const hammburger = document.getElementById('hammburger');
const closeMenu = document.getElementById('closeMenu');
const navMenu = document.getElementById('navMenu');

hammburger.addEventListener('click', () =>{
navMenu.style.display = 'block';
hammburger.style.display = 'none';
closeMenu.style.display = 'block';
})


closeMenu.addEventListener('click', () =>{
navMenu.style.display = 'none';
hammburger.style.display = 'block';
})