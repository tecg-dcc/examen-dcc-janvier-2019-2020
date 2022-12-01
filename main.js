// Nom : JACQUET
// Prénom : DYLAN
// Groupe : 286

document.documentElement.classList.add("js-enabled");
let start = 1;
const olSelector = document.querySelector('#app');

const generateItems = function (idx) {
    for (start; start < idx; start += 2) {
        if (isPrime(start)) {
            olSelector.insertAdjacentHTML("beforeend", `<li data-sum="6" class="premier grid__item">${start}
	                                                      <div class="ribbon-wrapper">
                                                            <div data-text="somme" class="ribbon">premier</div>
                                                          </div>
                                                        </li>`);
        } else if (start % 3 === 0 && start % 9 === 0) {
            olSelector.insertAdjacentHTML("beforeend", `<li class="multiple-3-9 grid__item">${start}
                                                         <div class="ribbon-wrapper">
                                                            <div class="ribbon">3 et 9</div>
                                                         </div>
                                                        </li>`)
        } else if (start % 3 === 0) {
            olSelector.insertAdjacentHTML("beforeend", `<li class="multiple-3 grid__item">${start}
                                                            <div class="ribbon-wrapper">
                                                                <div class="ribbon">3</div>
                                                            </div>
                                                        </li>`)
        } else {
            olSelector.insertAdjacentHTML("beforeend", `<li class="grid__item">${start}</li>`)
        }
    }
}
generateItems(200);

document.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= olSelector.scrollHeight) {
        generateItems(start + 100);
    }
});

const liPremier = document.querySelectorAll('.premier');
const listElements = document.querySelectorAll('ol li');
console.log(listElements);
for (const liPremierElement of liPremier) {

    liPremierElement.addEventListener('click', (e) =>{
        e.currentTarget.classList.add('animate');
        for (const listElement of listElements) {
            listElement.classList.add('grid__item--lighter');
        }
    });
    liPremierElement.addEventListener('transitionend', (e) =>{
        e.currentTarget.classList.remove('animate');
        for (const listElement of listElements) {
            listElement.classList.remove('grid__item--lighter');
        }
    });
}

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