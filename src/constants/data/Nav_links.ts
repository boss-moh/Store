export const URL_LINKS = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: (id: string) => `/shop/${id}`,
} as const;
const NAV_LINKS = [
  { text: "shop", link: URL_LINKS.SHOP },
  { text: "On Sale", link: "/" },
  { text: "new Arrivals", link: "/" },
  { text: "brands", link: "/" },
] as const;
// export type of Nav
// const t = Partial typeof NAV_LINKS

export { NAV_LINKS };
export default NAV_LINKS;
