import type { NitroFetchRequest } from "nitropack";

export function useApiClient<
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
    mode: "no-cors",
    headers: {
      ...options?.headers,
      ...cookies,
    },
    retry: false,
    baseURL: runtimeConfig.public.apiBase as string,
  });
}
