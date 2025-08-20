//debouncing

const handleResize = (name) => {
  //do layout calculations
  console.log("layout calculations" + name);
};

//
const debounce = (func, t) => {
  let timeout;

  return (...args) => {
    const ctx = this;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(ctx, args);
    }, t);
  };
};

const debounced = debounce(handleResize, 100);

debounced();
debounced();
debounced("mike");

const arrow = () => console.log(this);

function regular() {
  console.log(this);
}

arrow();
regular();
