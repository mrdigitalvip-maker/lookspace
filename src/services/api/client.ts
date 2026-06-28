export class ApiError extends Error {
  status: number
  code: string
  constructor(message: string, status = 500, code = 'api_error') {
    super(message)
    this.status = status
    this.code = code
  }
}

export async function fetcher<T>(input: string, init?: RequestInit): Promise<T> {
  const res = await fetch(input, init)
  const text = await res.text()
  try {
    const json = text ? JSON.parse(text) : null
    if (!res.ok) throw new ApiError(json?.message ?? 'Erro na API', res.status)
    return json as T
  } catch (err) {
    if (err instanceof ApiError) throw err
    throw new ApiError('Invalid JSON response', res.status)
  }
}
