import { parsePrice } from '../functions/price.function';
import { IProduct } from '../typings/product.types';

import '../styles/totalValueCart.css';

interface ITotalValueCartProps {
  cart: Array<IProduct>;
}

const TotalValueCart = (props: ITotalValueCartProps) => {
  const { cart } = props;
  const cartPrice = cart.map((item) => item.sellingPrice);
  const totalPrice: number = cartPrice.reduce(
    (total, total2) => total + total2,
  );
  return (
    <div>
      <div className="container-row">
        <div className="totalValueCart-title"> Total</div>
        <div className="totalValueCart-content">{parsePrice(totalPrice)}</div>
      </div>
      {totalPrice > 1000 && (
        <div className="container-row">
          <div className="totalValueCart-chip-text">
            Parabéns, sua compra tem frete grátis !
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalValueCart;
