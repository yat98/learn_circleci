const add = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isInteger(a) && Number.isInteger(b))) return parseInt(a) + parseInt(b);
  return parseFloat(Number(parseFloat(a) + parseFloat(b)).toFixed(2));
};

const sub = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isInteger(a) && Number.isInteger(b))) return parseInt(a) - parseInt(b);
  return parseFloat(Number(parseFloat(a) - parseFloat(b)).toFixed(2));
};

const mul = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isInteger(a) && Number.isInteger(b))) return parseInt(a) * parseInt(b);
  return parseFloat(Number(parseFloat(a) * parseFloat(b)).toFixed(2));
};

const div = (a,b) => {
  if(isNaN(a) || isNaN(b)) return false;
  if((Number.isInteger(a) && Number.isInteger(b))) return parseInt(a) / parseInt(b);
  return parseFloat(Number(parseFloat(a) / parseFloat(b)).toFixed(2));
};

export default{
  add, 
  sub, 
  mul,
  div
};