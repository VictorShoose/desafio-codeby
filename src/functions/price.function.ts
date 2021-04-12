function parsePrice(price: number) {
  const displayPrice = price / 100;
  return `R$ ${displayPrice.toFixed(2)}`;
}

export { parsePrice };
