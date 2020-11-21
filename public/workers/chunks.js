onmessage = function({ data: { fieldsData } }) {
  const lenght = fieldsData.length;
  let chunks = {
    data: {},
    list: []
  };
  
  // find horizontally
  for (let row = 0; row < lenght; row++) {
    let word = '';
    let startCol = null;

    for (let col = 0; col < lenght; col++) {
      let letter = fieldsData[row][col];

      if (letter) {
        if (!word) { startCol = row };
        word += letter;

        // if end of word and unique
        if (!fieldsData[row][col + 1] && !chunks.data[word]) {
          chunks.list.push(word);
          chunks.data[word] = { word, start: [row, startCol], end: [row, col], type: 'horizontal'};
          word = '';
          startCol = null;
        }
      }
    }
  }

  // find vertically
  for (let col = 0; col < lenght; col++) {
    let word = '';
    let startRow = null;
    
    for (let row = 0; row < lenght; row++) {
      let letter = fieldsData[row][col];

      if (letter) {
        if (!word) { startRow = row; }
        word += letter;

        // if end of word and unique
        if (!fieldsData[row + 1][col] && !chunks.data[word]) {
          chunks.list.push(word);
          chunks.data[word] = { word, start: [startRow, col], end: [row, col], type: 'vertical'};
          word = '';
          startRow = null;
        }
      }
    }
  }

  postMessage(chunks);
}