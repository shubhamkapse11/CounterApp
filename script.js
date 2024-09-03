const countValue = document.querySelector("#counter");
function decrement() {
    let value = parseInt(countValue.innerText);
  value = value - 1;
  countValue.innerText = value;
}
const increment = () => {
  let value = parseInt(countValue.innerText);
  value = value + 1;
  countValue.innerText = value;
};
