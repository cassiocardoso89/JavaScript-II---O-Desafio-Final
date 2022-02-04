let originalData;
let data;

fetch('../../data/data.json').then(response => response.json()).then(body => {
  originalData = body.data
  data = { ...originalData };
  init()
});
