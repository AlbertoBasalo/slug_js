export function getSlug(source, lenght = 100, timestamp, datestamp) {
  const sourceString = String(source);
  const noSpaces = replaceMarks(sourceString);
  const noCurrencies = replaceCurrencies(noSpaces);
  const truncated = truncate(noCurrencies, lenght);
  let signed = truncated;
  if (timestamp) {
    signed += "_" + Date.now()
  }
  if (datestamp) {
    signed += "_" + new Date().toISOString().slice(0,10)
  }
  const result = signed.toLowerCase();
  return result;
}

function replaceMarks(source) {
  const result = source.split(' ').join('-').split('’').join('').split('’').join('').split('?').join('').split(',').join('').split(':').join('').split('.').join('').split('#').join('').split('+').join('');
  return result;
}

function replaceCurrencies(source) {
  const  result = source.replace('$','dollar').replace('€','euros');
  return result;
}

function truncate(source, lenght = 60) {
  if (source.length <= lenght) {
    return source
  }
  return source.slice(0, lenght) + '...'
}