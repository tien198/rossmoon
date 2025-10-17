'use client'

import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
    if (isServer)
        return new QueryClient()

    if (!browserQueryClient)
        browserQueryClient = new QueryClient({
            // Tham khảo thếm
            defaultOptions: {
                queries: {
                    staleTime: 1000 * 60 * 5
                }
            }
        })
    return browserQueryClient
}

export default function Providers({ children }: PropsWithChildren) {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </QueryClientProvider>
    )
}