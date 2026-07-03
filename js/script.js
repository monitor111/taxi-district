const grid = document.querySelector('.grid');

const rows = 4;
const cols = 6;

for (let row = 1; row <= rows; row++) {

    for (let col = 1; col <= cols; col++) {

        const cell = document.createElement('div');

        cell.className = 'cell';

        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.addEventListener('click', function () {

            alert(
                'Клетка: ' +
                row +
                ' x ' +
                col
            );

        });

        grid.appendChild(cell);

    }

}