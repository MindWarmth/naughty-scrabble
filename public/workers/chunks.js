onmessage = function({ data: { fieldsData, foundWords } }) {
  console.info('Worker/Chunks: received { data: { fieldsData, foundWords } }', fieldsData, foundWords);
  const lenght = fieldsData.length;
  let chunks = foundWords || {
    data: {},
    list: []
  };
  
  // find horizontally
  for (let row = 0; row < lenght; row++) {
    let word = '';
    let startCol = null;

    for (let col = 0; col < lenght; col++) {
      let { value, checked, horizontal } = fieldsData[row][col] || {};

      if (value && !(checked && horizontal)) {
        if (!word) { startCol = col };
        word += value;

        // if end of word and unique
        if ((!fieldsData[row][col + 1] || fieldsData[row][col + 1].startHorizontal) && !chunks.data[word]) {
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
      let { value, checked, vertical } = fieldsData[row][col] || {};

      if (value && !(checked && vertical)) {
        if (!word) { startRow = row; }
        word += value;

        // if end of word and unique
        if ((!fieldsData[row + 1][col] ||  fieldsData[row + 1][col].startVertical) && !chunks.data[word]) {
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