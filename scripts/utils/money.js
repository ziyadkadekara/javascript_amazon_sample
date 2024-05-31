export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

//export default formatCurrency;
//each file can only have one default export
//by this way we can use "import formatCurrency from blah blah"
//so we can avoid curly brackss and make it clean, it depends on my mood ;)
