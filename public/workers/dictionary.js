onmessage = function({ data }) {
  console.log('Worker: Message received from main script', data);
  const MIN_WORD_LENGTH = 3;
  
  const text = String(data).toUpperCase();
  const dict = text.match(/([A-Z])\w+/g);
  const res = dict && dict.length ? dict.reduce((acc, current) => {
    if (current && current.length >= MIN_WORD_LENGTH && !acc.includes(current)) {
      return [...acc, current];
    } else {
      return acc
    }
  }, []) : []
  postMessage(res);
}