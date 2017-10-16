var $;
(function() {
const vjQuery = {
    elements: [],    
    length: 0,
    query: function(query) {
        var element;
        if (query instanceof HTMLElement) {
            this.elements = [query];
        } else if (typeof query === 'string') {
            this.elements = [].slice.call(document.querySelectorAll(query));
        }
        this.length = this.elements.length;
        return this;
    },
    addClass: function(classNamesString) {
        const classNamesArr = classNamesString.split(' ');
        this.elements.forEach((el) => classNamesArr.forEach((className) => el.classList.add(className)));

        return this;
    },
    removeClass: function(classNamesString) {
        const classNamesArr = classNamesString.split(' ');
        this.elements.forEach((el) => classNamesArr.forEach((className) => el.classList.remove(className)));

        return this;
    },
    toggleClass: function(classNamesString) {
        const classNamesArr = classNamesString.split(' ');
        this.elements.forEach((el) => classNamesArr.forEach((className) => el.classList.toggle(className)));

        return this;
    },
    eq: function(index) {
      return this.elements[index];
    },
    each: function(cb) {
        this.elements.forEach(cb);

        return this;
    },
    filter: function(cb) {
        this.elements = this.elements.filter(cb);
        return;  
    },
    on: function() {
        const events = arguments[0];
        const filterSelector = typeof arguments[1] === 'string' ? arguments[1] : null;
        const cb = typeof arguments[1] === 'string' ? arguments[2] : arguments[1];
        const eventsList = events.split(' ');
        this.elements.forEach((el) => eventsList.forEach((eventName) => {
            el.addEventListener(eventName, (e) => {
                if (!filterSelector) {
                    cb(e);
                    return;
                }

                const filterElements = [].slice.call(document.querySelectorAll(filterSelector));
                if (filterElements.some((element) => element === e.orignalTarget)) {
                    cb(e);
                }
            });
        }));

        return this;
    },
    off: function(events) {
        const eventsList = events.split(' ');
        this.elements.forEach((el) => eventsList.forEach((event) => {
            el.removeEventListener(eventName, cb);
        }));

        return this;
    },
    trigger: function(event) {

    },
    click: function(cb) {
        if (cb) {
            this.on('click', cb);
            return;
        }

        this.elements.forEach((element) => element.click());
    },
    focus: function() {
        if (this.elements[0]) {
            this.elements[0].focus();
        } 
        
        return this;
    },
    prev: function() {
        if (!this.elements[0] || !this.elements[0].nextElementSibling) {
            this.elements = [];
            this.length = 0;
            return this;
        }

        this.elements[0] = this.elements[0].prevElementSibling;
        this.length = 1;
        return this;
    },
    prevAll: function(selector) {
        if (!this.elements[0]) {
            return this;
        }
        var siblings = this.elements[0].parentElement.childern
        var prev = this.elements[0].prevElementSibling
        this.elements = [];
        while (prev) {
            this.elements.push(prev);
            prev = prev.prevElementSibling;
        }

        if (selector) {
            this.elements = this.elements.querySelectorAll(selector);
        }

        this.length = this.elements.length
        return this;
    },
    next: function() {
        if (!this.elements[0] || !this.elements[0].nextElementSibling) {
            this.elements = [];
            this.length = 0;
            return this;
        }

        this.elements[0] = this.elements[0].nextElementSibling;
        this.length = 1;
        return this;
    }
}
$ = (selector) => Object.create(vjQuery).query(selector);
})()
