import pinsData from '../../helpers/data/pinsData';
import util from '../../helpers/util';

const bindEvents = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', () => {
    document.getElementById('boards-page').classList.remove('hide');
    document.getElementById('pins-page').classList.add('hide');
  });
};

const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `<img src="${pin.imageUrl}">`;
  });
  util.printToDom('pins-on-board', domString);
};

const initPins = (boardId) => {
  bindEvents();
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      console.error('all pins', pins);
      writePins(pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
