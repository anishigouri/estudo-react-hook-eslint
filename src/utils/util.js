export function onChangeValue(json, name, value) {
  const obj = { ...json };
  obj[name].value = value;
  return obj;
}
