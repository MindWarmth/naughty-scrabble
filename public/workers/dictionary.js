onmessage = function({ data }) {
  console.info('Worker/Dictionary: received { data }', data);
  const MIN_WORD_LENGTH = 3;
  const MAX_WORD_LENGTH = 10;
  
  const text = String(data).toUpperCase();
  const dict = text.match(/\b[^\d\W_]+\b/g);
  const res = dict && dict.length ? dict.reduce((acc, current) => {
    if (current 
        && current.length >= MIN_WORD_LENGTH 
        && current.length <= MAX_WORD_LENGTH 
        && !acc.includes(current)
      ) {
      return [...acc, current];
    } else {
      return acc
    }
  }, []) : []
  postMessage(res);
}