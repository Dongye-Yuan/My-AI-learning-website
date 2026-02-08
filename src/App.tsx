import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./router";

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter(routers);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 全局提示组件（使用 sonner，避免本地 toaster 文件缺失问题） */}
        <Toaster richColors closeButton />

        {/* 路由入口 */}
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
