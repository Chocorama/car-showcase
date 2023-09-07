export async function fetchCars() {
  const headers: any = {
    "X-Api-Key": process.env.APIKEY,
  };

  const response = await fetch(
    "https://api.api-ninjas.com/v1/cars?model=corolla",
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
