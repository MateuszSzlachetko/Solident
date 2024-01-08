export interface OfferInterface {
  iconSrc: string;
  title: string;
  content: string;
  redirectTo: string;
}

export const SZ: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Stomatologia Zachowawcza',
  content: `Profesjonalna stomatologia zachowawcza: skuteczna profilaktyka,
  leczenie próchnicy i precyzyjna odbudowa zębów.`,
  redirectTo: 'oferta/stomatologia-zachowawcza',
};
