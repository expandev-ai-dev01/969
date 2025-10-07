export type ID = string | number;

export interface ApiResponse<T = unknown> {
  data: T;
  meta?: Record<string, unknown>;
}
