
// Asynkron hjämpmetod för att hämta data från en URL
export const query = async (url) => {
  try {
    const request = new Request(url);
    const response = await fetch(request);
    return await response.json();
  } catch (err) {
    return err;
  }
}

// Kollar om en text inkluderas i en annan text
export const match = (str1, str2) => {
  const text1 = str1.toLowerCase();
  const text2 = str2.toLowerCase();
  return text1.includes(text2);
}