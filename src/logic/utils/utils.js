
export const query = async (url) => {
  try {
    const request = new Request(url);
    const response = await fetch(request);
    return await response.json();
  } catch (err) {
    return err;
  }
}