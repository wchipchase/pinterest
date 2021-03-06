import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';
import pins from '../pins/pins';

let boardsArray = [];

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('You clicked a button', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const domStringBuilder = () => {
  let domString = '';
  boardsArray.forEach((board) => {
    domString += `<div id="${board.id}" class="card col-3">`;
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += '<div class="card-body">';
    domString += '<button class="btn btn-warning see-pins">Pins</button>';
    domString += `<a class = "link" href = "${board.pin}"></a>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      boardsArray = resp.data.boards;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initBoards };
