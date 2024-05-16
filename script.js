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

const card = document.createElement('div');
card.classList.add('card');
card.style.width = '18rem'
document.body.appendChild(card);

card.innerHTML = ` 
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div> 
`