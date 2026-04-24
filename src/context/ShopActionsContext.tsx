import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export interface InquiryBagItem {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface InquiryBagLine extends InquiryBagItem {
  product: Product;
  key: string;
}

interface ShopActionsContextValue {
  favoriteIds: string[];
  favoriteProducts: Product[];
  favoriteCount: number;
  inquiryItems: InquiryBagItem[];
  inquiryLines: InquiryBagLine[];
  inquiryCount: number;
  inquiryTotalInr: number;
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (productId: string) => void;
  addToInquiryBag: (item: InquiryBagItem) => void;
  removeFromInquiryBag: (key: string) => void;
  updateInquiryQuantity: (key: string, quantity: number) => void;
  clearInquiryBag: () => void;
}

const FAVORITES_KEY = "hunar-birds:favorites";
const INQUIRY_BAG_KEY = "hunar-birds:inquiry-bag";

const ShopActionsContext = createContext<ShopActionsContextValue | undefined>(
  undefined,
);

const productById = new Map(products.map((product) => [product.id, product]));

function readStoredValue<T>(key: string, fallback: T) {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : fallback;
  } catch {
    return fallback;
  }
}

function getInquiryItemKey(item: InquiryBagItem) {
  return [item.productId, item.size ?? "", item.color ?? ""].join("|");
}

function normalizeQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) {
    return 1;
  }

  return Math.min(Math.max(Math.round(quantity), 1), 20);
}

export const ShopActionsProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [inquiryItems, setInquiryItems] = useState<InquiryBagItem[]>([]);

  useEffect(() => {
    setFavoriteIds(readStoredValue<string[]>(FAVORITES_KEY, []));
    setInquiryItems(readStoredValue<InquiryBagItem[]>(INQUIRY_BAG_KEY, []));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    window.localStorage.setItem(INQUIRY_BAG_KEY, JSON.stringify(inquiryItems));
  }, [inquiryItems]);

  const isFavorite = useCallback(
    (productId: string) => favoriteIds.includes(productId),
    [favoriteIds],
  );

  const toggleFavorite = useCallback((productId: string) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(productId)
        ? currentIds.filter((id) => id !== productId)
        : [...currentIds, productId],
    );
  }, []);

  const addToInquiryBag = useCallback((item: InquiryBagItem) => {
    const normalizedItem = {
      ...item,
      quantity: normalizeQuantity(item.quantity),
    };
    const nextKey = getInquiryItemKey(normalizedItem);

    setInquiryItems((currentItems) => {
      const existingItem = currentItems.find(
        (candidate) => getInquiryItemKey(candidate) === nextKey,
      );

      if (!existingItem) {
        return [...currentItems, normalizedItem];
      }

      return currentItems.map((candidate) =>
        getInquiryItemKey(candidate) === nextKey
          ? {
              ...candidate,
              quantity: normalizeQuantity(
                candidate.quantity + normalizedItem.quantity,
              ),
            }
          : candidate,
      );
    });
  }, []);

  const removeFromInquiryBag = useCallback((key: string) => {
    setInquiryItems((currentItems) =>
      currentItems.filter((item) => getInquiryItemKey(item) !== key),
    );
  }, []);

  const updateInquiryQuantity = useCallback((key: string, quantity: number) => {
    setInquiryItems((currentItems) =>
      currentItems.map((item) =>
        getInquiryItemKey(item) === key
          ? { ...item, quantity: normalizeQuantity(quantity) }
          : item,
      ),
    );
  }, []);

  const clearInquiryBag = useCallback(() => {
    setInquiryItems([]);
  }, []);

  const value = useMemo<ShopActionsContextValue>(() => {
    const favoriteProducts = favoriteIds
      .map((id) => productById.get(id))
      .filter((product): product is Product => Boolean(product));
    const inquiryLines = inquiryItems
      .map((item) => {
        const product = productById.get(item.productId);

        if (!product) {
          return null;
        }

        return {
          ...item,
          product,
          key: getInquiryItemKey(item),
        };
      })
      .filter((line): line is InquiryBagLine => Boolean(line));
    const inquiryCount = inquiryLines.reduce(
      (total, line) => total + line.quantity,
      0,
    );
    const inquiryTotalInr = inquiryLines.reduce(
      (total, line) => total + line.product.priceInr * line.quantity,
      0,
    );

    return {
      favoriteIds,
      favoriteProducts,
      favoriteCount: favoriteProducts.length,
      inquiryItems,
      inquiryLines,
      inquiryCount,
      inquiryTotalInr,
      isFavorite,
      toggleFavorite,
      addToInquiryBag,
      removeFromInquiryBag,
      updateInquiryQuantity,
      clearInquiryBag,
    };
  }, [
    favoriteIds,
    inquiryItems,
    isFavorite,
    toggleFavorite,
    addToInquiryBag,
    removeFromInquiryBag,
    updateInquiryQuantity,
    clearInquiryBag,
  ]);

  return (
    <ShopActionsContext.Provider value={value}>
      {children}
    </ShopActionsContext.Provider>
  );
};

export function useShopActions() {
  const context = useContext(ShopActionsContext);

  if (!context) {
    throw new Error("useShopActions must be used inside ShopActionsProvider");
  }

  return context;
}
