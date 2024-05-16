// ESERCIZIO 1

const paragraphs = document.querySelectorAll('.paragrafi');
const appear = document.querySelector('#appear');
const color = document.querySelector('#color');
const bold = document.querySelector('#bold');

appear.addEventListener('click', () => {
    paragraphs.forEach( p => {
        p.classList.toggle('display')
    })
})

color.addEventListener('click', () => {
    paragraphs.forEach( p => {
        p.classList.toggle('color-blue');
    })
})

bold.addEventListener('click', () => {
    paragraphs.forEach( p => {
        p.classList.toggle('font-weight');
    })
})

// ESERCIZIO 2

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

document.body.appendChild(wrapper);

function appendCard(){
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem'
    wrapper.appendChild(card);

    card.innerHTML = ` 
        <img src="https://plus.unsplash.com/premium_photo-1664879492637-276ebb5665bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div> 
    `
}

for(let i of paragraphs){
    appendCard();
}
