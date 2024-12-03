import { ProductType } from "@/types/productType";

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};



export default async function Home() {
  const products = await getProducts();
  console.log(products)
  return (
    <div className="container pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product: ProductType, index: number) => (
          <div key={index}>
            <img src={product.image} alt={product.description} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
