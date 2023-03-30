//function to get random questions

export function randomElements(_elem: any[]): any[] {
  return _elem
    .map((val) => ({ val, random: Math.random() }))
    .sort((obj, _obj) => obj.random - _obj.random)
    .map((obj) => obj.val);
}
