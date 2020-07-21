function formatTime(time) {
  let arr = [];
  time = time.toLocaleDateString();
  time.replace(/\d+/g, (val) => {
    val = val < 2 ? `0${val}` : val;
    arr.push(val);
  });
  return arr;
}
function convertTime(time) {
  time = time.replace(/^(\d{4})(\d{2})(\d{2})$/g,(_,g1,g2,g3)=>{
    return `${g1}/${g2}/${g3}`
  })
  return new Date(time);
}

export default {
  formatTime,
  convertTime,
};
