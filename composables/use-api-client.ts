import type { NitroFetchRequest } from "nitropack";

function apiClient<
  T = unknown,
  R extends NitroFetchRequest = NitroFetchRequest,
>(
  request: Parameters<typeof $fetch<T, R>>[0],
  options?: Partial<Parameters<typeof $fetch<T, R>>[1]>,
) {
  const runtimeConfig = useRuntimeConfig();
  const cookies = useRequestHeaders(["cookie"]);

  return $fetch<T, R>(request, {
    ...options,
    headers: {
      ...options?.headers,
      ...cookies,
    },
    retry: false,
    baseURL: runtimeConfig.public.apiBase as string,
  });
}

export default function useApiClient<T>(
  method: "get" | "post" = "get",
  url: string,
  key: string,
) {
  return useAsyncData(
    key,
    () =>
      apiClient<T>(url, {
        method,
      }),
    {
      default: () => {},
    },
  );
}
