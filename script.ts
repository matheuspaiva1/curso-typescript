function toNumber(value: number | string){
  if(typeof value === 'number'){
    return value
  } else if (typeof value === 'string'){
    return Number(value)
  } else{
    const err = new Error("value deve ser um numero ou string");
    return err
    // ou
    // throw 'value deve ser um numero ou string'
  }
}

console.log(toNumber('200'))