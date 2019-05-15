import axios from 'axios';

const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      //  filter the pins
      console.error('Board id inside pinsData', boardId);
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      //  resolve filtered pins
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});
export default { loadPinsForBoard };
