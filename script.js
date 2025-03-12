const buttons = document.querySelectorAll('.btn'); // Select all buttons
const boxes = document.querySelectorAll('.box'); // Select all food items
const searchBox = document.querySelector('#search'); // Search input field
searchBox.addEventListener('keyup', (e) => {
    let searchText = e.target.value.toLowerCase().trim();
    boxes.forEach((box) => {
        const data = box.dataset.item; // Get data-item attribute
        if (data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked'); 
});
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter = e.target.dataset.filter;
        boxes.forEach((box) => {
            const boxfilter = box.dataset.item;
            if (btnfilter === 'all' || btnfilter === boxfilter) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
function setActiveBtn(e) {
    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}
