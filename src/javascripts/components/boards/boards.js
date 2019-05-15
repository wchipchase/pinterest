import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

let boardsArray = [];

const domStringBuilder = () => {
  let domString = '';
  boardsArray.forEach((board) => {
    domString += '<div class="card col-3">';
    domString += `<div class="card-header">${board.id}</div>`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
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
