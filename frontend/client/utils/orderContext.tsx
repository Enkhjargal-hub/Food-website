"use client";

import { createContext, useState, ReactNode, FC } from "react";
import { Dispatch, SetStateAction } from "react";

type FoodItem = {
    foodId: string;
    quantity: number;
};

type NewOrderInfo = {
    userId: string;
    foods: FoodItem[];
    totalPrice: number;
};

type OrderContextProps = {
    newOrderInfo: NewOrderInfo;
    setNewOrderInfo: Dispatch<SetStateAction<NewOrderInfo>>;
};

const initialOrderInfo: NewOrderInfo = {
    userId: "",
    foods: [],
    totalPrice: 0,
};

const initialContextState: OrderContextProps = {
    newOrderInfo: initialOrderInfo,
    setNewOrderInfo: () => {},
};

export const OrderContext = createContext<OrderContextProps>(initialContextState);

type OrderContextProviderProps = {
    children: ReactNode;
};

export const OrderContextProvider: FC<OrderContextProviderProps> = ({ children }) => {
    const [newOrderInfo, setNewOrderInfo] = useState<NewOrderInfo>(initialOrderInfo);
    const contextValue: OrderContextProps = {
        newOrderInfo,
        setNewOrderInfo,
    };

    return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
};


