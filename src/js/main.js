const app = {
  cacheDom() {
    this.app = document.getElementById("app");
  },
  loadListItem() {
    let className;
    let text;
    let eRuben;
    for (let i = 1; i < 200; i += 2) {
      text = "";
      eRuben = "";
      className = "";
      if (myLittleCalculator.isPremier(i)) {
        className = "premier";
        text = "premier";
      } else if (myLittleCalculator.isMultipleOf(i, 3)) {
        if (myLittleCalculator.isMultipleOf(i, 9)) {
          text = "3 et 9";
          className = "multiple-3-9";
        } else {
          className = "multiple-3";
          text = "3";
        }
      }
      if (text !== "") {
        eRuben = `<div class="ribbon-wrapper"><div class="ribbon">${text}</div></div>`;
      }
      this.app.insertAdjacentHTML('beforeend', `<li class="${className} grid__item">${i}${eRuben}</li>`);
    }
  },
  addEventListeners() {
    this.app.querySelectorAll('.grid__item').forEach((element) => {
      element.addEventListener("click", (event) => {
        event.currentTarget.classList.add("animate");
      });
      element.addEventListener("transitionend", (event) => {
        event.currentTarget.classList.remove("animate");
      })
    })
  },
  init() {
    document.documentElement.classList.add("js-enabled");
    this.cacheDom();
    this.loadListItem();
    this.addEventListeners();
    console.log(this.app);
  }
};

const myLittleCalculator = {
  isPremier(nbr) {
    if (nbr < 2) {
      return false;
    }
    for (let i = 2; i < nbr; i++) {
      if (nbr % i === 0) {
        return false;
      }
    }
    return true;
  },
  isMultipleOf(base, multiple) {
    return base % multiple === 0;
  }
};
app.init();