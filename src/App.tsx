import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 这里只放全局 Provider，不要 Router */}
    </QueryClientProvider>
  );
};

export default App;
