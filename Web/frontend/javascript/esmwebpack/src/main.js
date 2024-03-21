import filterProductsAsync from "./analytics/search";

const main = async () => {
  const data = await filterProductsAsync();
  console.log(data);
};
main();
