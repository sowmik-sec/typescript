{
  interface Product {
    name: string;
    price: number;
    quantity: number;
  }
  const cart: Product[] = [
    { name: "Mac Book", price: 150000, quantity: 2 },
    { name: "Iphone", price: 140000, quantity: 3 },
  ];
  const calc = (products: Product[]): number => {
    let ans = 0;
    products.forEach((product) => {
      ans += product.price * product.quantity;
    });
    return ans;
  };
  console.log(calc(cart));
}
