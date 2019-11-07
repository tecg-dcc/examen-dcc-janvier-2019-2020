const app = {
  init() {
    document.documentElement.classList.add('js-enabled');
    this.grid = document.getElementById('app');
    for (let i = 1; i <= 200; i += 2) {
      const [classes, content] = this.getClassesAndContent(i);
      const liElt = this.getLiElt(classes, i);
      this.grid.insertAdjacentElement("beforeend", liElt);
      if (liElt.classList.contains('premier')) {
        this.handleEvents(liElt)
      }
      liElt.insertAdjacentHTML('beforeend', this.getRibbonHtml(content));

    }
  },
  isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  },
  getLiElt(classes, i) {
    const liElt = document.createElement('li');
    liElt.textContent = `${i}`;
    liElt.classList.add('grid__item');
    classes.forEach(className => {
      liElt.classList.add(className);
    });
    return liElt;
  },
  getRibbonHtml(content) {
    if (content) return `<div class="ribbon-wrapper">
                                <div class="ribbon">${content}</div>
                            </div>`;
    return '';
  },
  getClassesAndContent(i) {
    let classes = [];
    let content = '';
    if (this.isPrime(i) && i > 1) {
      classes.push('premier');
      content = 'premier';
    }
    if (i % 3 === 0) {
      classes.push('multiple-3');
      content = '3';
    }
    if (i % 3 === 0 && i % 9 === 0) {
      classes[classes.length - 1] = 'multiple-3-9';
      content = '3 et 9';
    }

    return [classes, content];
  },
  handleEvents(liElt) {
    liElt.addEventListener('click', e => {
      e.currentTarget.classList.add('animate');
      this.grid.querySelectorAll('li')
          .forEach(li =>
              li.classList.add('grid__item--lighter')
          )
    });
    liElt.addEventListener('transitionend', e => {
      e.currentTarget.classList.remove('animate');
      this.grid.querySelectorAll('li')
          .forEach(li =>
              li.classList.remove('grid__item--lighter'))
    });
  }

};

app.init();