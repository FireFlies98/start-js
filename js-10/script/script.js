    //   Task One
function factorial(n) {
    let result = 1;
    for (i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(15))



    //  Task Two
function averageFrom(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i]; 
    }
    return Math.round(sum / n.length);
}
    
console.log(averageFrom([1, 10, 45, -10, 100, 123123, -243.5]))


    //  Task Three
const API = 'http://omdbapi.com/?apikey=721371&s=';
const apikey = 721371;
const btn = document.querySelector("button");
const input = document.querySelector("input")
btn.addEventListener("click", () => {
    const title = input.value
    fetch(`${API + title}`)
    .then(response => response.json())
    .then(movies => {
        const container = document.getElementsByClassName('container')[0];
        const divError = document.querySelector('.error');
        divError.innerHTML = ""

        if (movies.Response != "False") {
            movies.Search.forEach(movie => container.appendChild(getMovie(movie)));
        } else {
            divError.innerHTML = "Невдача спіткала :)";
        };
    })
    .catch(error => console.log(error));
});


function getMovie(movie) {
    const div = document.createElement('DIV');
    const img = document.createElement('IMG');
    const button = document.createElement('BUTTON');
    const h3 = document.createElement('H3');
    const p = document.createElement('P');

    img.src = movie.Poster;
    h3.innerHTML = movie.Title;
    p.innerHTML = movie.Year;
    button.innerHTML = "Details";
    button.addEventListener("click", () => {
        fetch(`http://omdbapi.com/?apikey=721371&i=${movie.imdbID}`)
        .then(response => response.json())
        .then(info => {
            const divContainer = document.createElement('DIV');
            const p1 = document.createElement('P');
            const p2 = document.createElement('P');
            const p3 = document.createElement('P');

            p1.innerHTML = info.Actors;
            p2.innerHTML = info.Country;
            p3.innerHTML = info.Plot;

            divContainer.appendChild(p1);
            divContainer.appendChild(p2);
            divContainer.appendChild(p3);
            div.appendChild(divContainer);

            button.disabled = true;
        })
        .catch(error => console.log(error));
    });

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);

    return div;
};