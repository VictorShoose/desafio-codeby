import { FunctionComponent, useEffect, useState } from 'react';

import cart1 from '../config/json/acima-10-reais.json';
import cart2 from '../config/json/abaixo-10-reais.json';
// A fim de facilitar o desenvolvimento, foi realizada
// A inserção manual da Lista JSON proveniente da API
// Caso a listagem fosse da API deveria ser requerida através
// de um GET assíncrono via AXIOS.

import { IProduct } from '../typings/product.types';

import ProductCart from '../components/productCart.component';
import TotalValueCart from '../components/totalValueCart.component';
import ButtonCart from '../components/buttonCart.component';

import '../styles/App.css';

const App: FunctionComponent = () => {
  const cartAbove = cart1.items.map((product) => product as IProduct);
  const cartBelow = cart2.items.map((product) => product as IProduct);

  const [productList, setProductList] = useState<Array<IProduct>>(cartAbove);

  const [switchList, setSwitchList] = useState(true);

  useEffect(() => {
    if (switchList) {
      setProductList(cartAbove);
    } else {
      setProductList(cartBelow);
    }
  }, [switchList, cartAbove, cartBelow]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Meu Carrinho</p>
      </header>
      <p className="App-switch">
        Mudar Lista
        <input
          type="checkbox"
          aria-labelledby="Teste"
          checked={switchList}
          onClick={() => {
            setSwitchList((state) => !state);
          }}
        />
      </p>
      <hr />
      <div className="App-body">
        {productList.map((item: IProduct) => (
          <ProductCart
            name={item.name}
            price={item.price}
            sellingPrice={item.sellingPrice}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <hr />
      <TotalValueCart cart={productList} />
      <hr />
      <footer className="App-footer">
        <ButtonCart />
      </footer>
    </div>
  );
};

export default App;
