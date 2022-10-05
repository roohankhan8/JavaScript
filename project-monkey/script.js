const see = document.getElementById('see')
const hear = document.getElementById('hear')
const speak = document.getElementById('speak')
const text = document.getElementById('text')

see.addEventListener('click', ()=>{
    see.style.display = 'none'
    speak.style.display = 'none'
    hear.style.display = 'block'
    text.innerHTML = 'HEAR NO EVIL'
})
hear.addEventListener('click', ()=>{
    hear.style.display = 'none'
    speak.style.display = 'block'
    see.style.display = 'none'
    text.innerHTML = 'SPEAK NO EVIL'
})
speak.addEventListener('click', ()=>{
    speak.style.display = 'none'
    hear.style.display = 'none'
    see.style.display = 'block'
    text.innerHTML = 'SEE NO EVIL'
})

