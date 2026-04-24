import {
  stockStatusLabels,
  type Product,
  type ProductStockStatus,
} from "@/data/products";

export function getStockBadgeTone(status: ProductStockStatus) {
  if (status === "ready-to-ship") {
    return "bg-emerald-700 text-white";
  }

  if (status === "limited-ready") {
    return "bg-amber-700 text-white";
  }

  return "bg-black text-white";
}

export function getDeliveryEstimate(product: Product) {
  if (product.stockStatus === "ready-to-ship") {
    return {
      label: "Estimated delivery",
      dispatch: "Dispatch in 1 to 2 business days",
      delivery: "Usually reaches most Indian cities in 3 to 6 business days after dispatch.",
      short: "3 to 6 business days after dispatch",
    };
  }

  if (product.stockStatus === "limited-ready") {
    return {
      label: "Estimated delivery",
      dispatch: "Dispatch in 2 to 4 business days after confirmation",
      delivery: "Usually reaches most Indian cities in 3 to 6 business days after dispatch.",
      short: "5 to 10 business days",
    };
  }

  return {
    label: "Estimated delivery",
    dispatch: `Making time is ${product.leadTime}`,
    delivery: "Shipping usually takes 3 to 6 business days after the handmade piece is ready.",
    short: `${product.leadTime} plus shipping`,
  };
}

export function getStockSummary(product: Product) {
  const estimate = getDeliveryEstimate(product);

  return `${stockStatusLabels[product.stockStatus]} - ${estimate.short}`;
}
