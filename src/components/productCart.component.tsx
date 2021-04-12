import { parsePrice } from '../functions/price.function';
import '../styles/productCart.css';

interface IProductCartProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
}

const ProductCart = (props: IProductCartProps) => {
  const { name, price, sellingPrice, imageUrl } = props;
  return (
    <div className="container-row">
      <img className="productCart-image" alt="product" src={imageUrl} />
      <div className="productCart-content">
        <p className="productCart-name">{name}</p>
        <p className="productCart-price">{parsePrice(price)}</p>
        <p className="productCart-sellingPrice">{parsePrice(sellingPrice)}</p>
      </div>
    </div>
  );
};

export default ProductCart;
