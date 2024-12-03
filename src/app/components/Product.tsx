import { ProductType } from '@/types/ProductType';
import ProductImg from './ProductImg';
type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div
      className="flex flex-col shadow-lg h-96 rounded-md bg-white p-5 text-gray-600"
      key={product.id}
    >
      <div className="relative max-h-72 flex-1">
        <ProductImg product={product} fill />
      </div>
      <div className="flex justify-between font-bold my-3">
        <p className='w-40 truncate'>{product.title}</p>
        <p className='text-md text-green-400'>{product.price}</p>
      </div>
      <button className="rounded-md bg-teal-300 text-white px-3.5 py-2.5 text-sm text-center">
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Product;
