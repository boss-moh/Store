export const URL_LINKS = {
  HOME: "/",
  SHOP: "/shop",
  PRODUCT: (id: string) => `/shop/${id}`,
} as const;
const NAV_LINKS = [
  { text: "shop", link: URL_LINKS.SHOP },
  { text: "On Sale", link: URL_LINKS.HOME },
  { text: "new Arrivals", link: URL_LINKS.HOME },
  { text: "brands", link: URL_LINKS.HOME },
] as const;
// export type of Nav
// const t = Partial typeof NAV_LINKS
export { NAV_LINKS };
export default NAV_LINKS;
