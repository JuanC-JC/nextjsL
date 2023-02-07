const config = {
  urlApi: process.env.MODE === "development"
    ? process.env.NEXT_PUBLIC_DEV_MODE as string
    : process.env.NEXT_PUBLIC_BACKEND_URL as string
}

export default config
