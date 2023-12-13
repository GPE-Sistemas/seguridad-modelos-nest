export interface OpenSearchRequest {
  service: string;
  version: string;
  method: string;
  path: string;
  status: number;
  durationMs?: number;
  requestId?: string;
  query?: string;
  body?: string;
  msg?: string;
}