// Utility function to create page URLs for routing
export function createPageUrl(page: string, params?: Record<string, string>) {
  let url = `/${page.toLowerCase()}`;
  
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }
  
  return url;
}

