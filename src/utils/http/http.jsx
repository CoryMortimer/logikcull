import { useQuery, QueryClient, QueryClientProvider } from "react-query";
export { default } from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const useHttpQuery = (...params) => {
  const result = useQuery(...params);
  return { ...result, response: extractData(result) };
};

export const HttpCache = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const extractData = (data) => {
  return data?.data?.data;
};
