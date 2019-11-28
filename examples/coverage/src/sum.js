export const sum = (a,b) => {
  if(isNaN(a) || isNaN(b)){
    throw new Error("Only numbers please");
  }
  return Number(a) + Number(b);
}
