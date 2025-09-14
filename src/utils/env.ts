import 'dotenv/config'

const required = (key: string, def?: string) => {
  const v = process.env[key] ?? def;
  if(!v) throw new Error(`Missing env var: ${key}`)
    return v
}

export const ENV = {
  NODE_ENV:  process.env.NODE_ENV ?? 'development', 
  PORT: parseInt(process.env.PORT ?? '400', 10)
}