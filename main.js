var contenido = document.querySelector('#contenido')

function traer() {
    fetch('https://www.superheroapi.com/api.php/1439377032887627/search/batman')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
            <img src="${data.results['0'].image.url}" width="100px" class="img-fluid rounded-circle">
            <p>Nombre:${data.results['0'].name}</p>
            `
        })

}