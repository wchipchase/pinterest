import axios from 'axios';

const loadBoards = () => axios.get('../db/boards.json');

// .then if it works rights .catch if it fails

export default { loadBoards };
