export const formatPrice = (price) => {
  return price.toLocaleString("es-PE",  {style: "currency", currency: "PEN", minimumFractionDigits: 2});
};
