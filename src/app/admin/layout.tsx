'use client'

import { PropsWithChildren } from "react";
import Nav from "./comps/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient({
    // Tham khảo thếm
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5
        }
    }
})

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex max-w-screen">
                <Nav />
                {/* Main Content */}
                <main className="flex-1 shrink-[1] min-w-[0px] overflow-y-auto h-screen">
                    <div className="py-4 md:py-6 md:px-1">
                        {children}
                    </div>
                </main>
                {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
            </div>
        </QueryClientProvider>
    )
}