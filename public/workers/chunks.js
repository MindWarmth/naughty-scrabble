onmessage = function({ data: { fieldsData } }) {
  
  console.log(fieldsData);

  const res = {
    data: {},
    list: []
  }
  postMessage(res);
}