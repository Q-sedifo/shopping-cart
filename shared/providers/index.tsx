"use client"

import React from "react";

// React query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Redux
import { Provider } from "react-redux";
import { store } from "@/shared/store";

interface IProvidersProps {
  children: React.ReactNode
}

export const Providers: React.FC<IProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        { children }
      </QueryClientProvider>
    </Provider>
  )
}