"use client"

import React from "react";

// React query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Custom providers
import { CategoriesProvider } from "./CategoriesProvider";

// Redux
import { Provider } from "react-redux";
import { store } from "@/shared/store";

interface IProvidersProps {
  children: React.ReactNode;
  categories: string[];
}

export const Providers: React.FC<IProvidersProps> = ({ children, categories }) => {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CategoriesProvider categories={categories}>
          { children }
        </CategoriesProvider>
      </QueryClientProvider>
    </Provider>
  )
}