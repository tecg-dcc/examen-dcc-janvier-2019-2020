// Nom : JACQUET
// Prénom : DYLAN
// Groupe : 286
document.documentElement.classList.add("js-enabled");
const liContainer = document.querySelector(".grid");
let listElements = document.querySelectorAll('ol li');
let start = 1;

function isPrime(nombre) {
    let prime;
    if (nombre > 1) {
        prime = true;
        for (let j = 2; j < nombre; j++) {
            if (nombre % j === 0) {
                prime = false; //ce n'est pas un nombre premier
            }
        }
    }
    return prime;
}

/* FONCTION RECURSIVE */
function sum(nb) {
    if (nb === 0) {
        return 0;
    }
    return nb + sum(nb - 1);
}

const generateItems = function (number) {
    for (start; start <= number; start += 2) {
        if (isPrime(start)) {
            liContainer.insertAdjacentHTML("beforeend", `<li data-sum="${sum(start)}" class="premier grid__item">${start}
 	                                                        <div class="ribbon-wrapper">
                                                                <div data-text="somme" class="ribbon">premier</div>
                                                            </div>
                                                        </li>`);
        } else if (start % 3 === 0 && start % 9 === 0) {
            liContainer.insertAdjacentHTML("beforeend", `<li class="multiple-3 grid__item">${start}
                                                            <div class="ribbon-wrapper">
                                                                <div class="ribbon">3</div>
                                                            </div>
                                                        </li>`);
        } else if (start % 3 === 0) {
            liContainer.insertAdjacentHTML("beforeend", `<li class="multiple-3-9 grid__item">${start}
                                                            <div class="ribbon-wrapper">
                                                                <div class="ribbon">3 et 9</div>
                                                            </div>
                                                        </li>`)
        } else {
            liContainer.insertAdjacentHTML("beforeend", `<li class="grid__item">${start}</li>`)
        }
    }
    addAnimation();
}
const addAnimation = function(){
    const liItems = document.querySelectorAll('.grid__item');
    listElements = document.querySelectorAll('ol li')
    for (const liItem of liItems) {
        liItem.addEventListener('click', (e) => {
            console.log('ça marche')
            if (e.currentTarget.classList.contains("premier")) {
                e.currentTarget.classList.add("animate");
                [e.currentTarget.childNodes[0].textContent, e.currentTarget.dataset.sum] = [e.currentTarget.dataset.sum, e.currentTarget.childNodes[0].textContent];
                [e.currentTarget.querySelector("[data-text]").dataset.text, e.currentTarget.querySelector("[data-text]").textContent] = [e.currentTarget.querySelector("[data-text]").textContent, e.currentTarget.querySelector("[data-text]").dataset.text];
                for (const listElement of listElements) {
                    listElement.classList.add('grid__item--lighter')
                }
            }

        });
        liItem.addEventListener('transitionend', (e) => {
            if (liItem.classList.contains("animate")) {
                liItem.classList.remove("animate");
            }
            for (const listElement of listElements) {
                listElement.classList.remove('grid__item--lighter')
            }
        });
    }
}

generateItems(200);
document.addEventListener('scroll', (e) => {
    if (window.scrollY + window.innerHeight >= liContainer.scrollHeight) {
        generateItems(start + 100);
    }
});




