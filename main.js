let stroke = document.getElementById('stroke');

function handlestroke(){
    let links = document.getElementById('links');
    links.classList.toggle('ninja');
}

stroke.addEventListener('click',handlestroke)