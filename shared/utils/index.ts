// Get unique id
export const randomId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return id
}