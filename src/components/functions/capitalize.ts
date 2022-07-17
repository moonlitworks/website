export default (value: string) => {
  return value
    .split('-')
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}