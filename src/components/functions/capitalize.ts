export default (value: string) => {
  return value[0].toUpperCase() + value.substring(1).toLowerCase();
}