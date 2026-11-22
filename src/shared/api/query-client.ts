import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";

const ONE_MINUTE = 60 * 1000;
export const ONE_DAY = 24 * 60 * ONE_MINUTE;
export const CACHE_VERSION = "2";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ONE_MINUTE,
      gcTime: ONE_DAY,
    },
  },
});

export const queryPersister = createAsyncStoragePersister({ storage: AsyncStorage });
