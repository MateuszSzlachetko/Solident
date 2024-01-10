export interface OfferInterface {
  iconSrc: string;
  title: string;
  content: string;
  redirectTo: string;
}

const SZ: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Stomatologia Zachowawcza',
  content: `Profesjonalna stomatologia zachowawcza: skuteczna profilaktyka,
            leczenie próchnicy i precyzyjna odbudowa zębów.`,
  redirectTo: 'oferta/stomatologia-zachowawcza',
};

const P: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Protetyka',
  content: `Oferujemy kompleksową opiekę protetyczną, obejmującą precyzyjne wykonanie koron, mostów,
            protez oraz protez szkieletowych. Z najwyższą starannością dbamy nie tylko o estetykę,
            lecz także o pełną funkcjonalność i komfort pacjenta.`,
  redirectTo: 'oferta/protetyka',
};

const SD: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Stomatologia dziecięca',
  content: `Specjalizujemy się w stomatologii dziecięcej, oferując pełen zakres usług
            skoncentrowanych na zdrowiu najmłodszych pacjentów. Tworzymy przyjazną atmosferę,
            która sprawia, że wizyta u dentysty staje się pozytywnym doświadczeniem.`,
  redirectTo: 'oferta/stomatologia-dziecieca',
};

const CH: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Chirurgia',
  content: `Nasza chirurgia stomatologiczna to gwarancja bezbolesnego usuwania zębów,
            bazującego na precyzyjnym znieczuleniu. Wspieramy naszych pacjentów empatyczną opieką ,
            zapewniając profesjonalne podejście do każdej procedury.`,
  redirectTo: 'oferta/chirurgia',
};

const E: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Endodoncja',
  content: `Oferujemy leczenie kanałowe zębów, obejmujące staranne oczyszczenie kanałów zęba,
            dezynfekcję oraz wypełnienie specjalnym materiałem.`,
  redirectTo: 'oferta/endodoncja',
};

export const OFFERS_DENTISTRY: OfferInterface[] = [SZ, P, SD, CH, E];

const TB: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Toksyna botulinowa',
  content: `Zabiegi z wykorzystaniem toksyny botulinowej są skuteczną metodą medycyny estetycznej,
          ukierunkowaną na redukcję zmarszczek mimicznych i poprawę wyglądu skóry. Oferujemy także
          leczenie bruksizmu, nadpotliwości dłoni, pach i stóp oraz korektę uśmiechu dziąsłowego.`,
  redirectTo: 'oferta/medycyna-estetyczna/toksyna-botulinowa',
};

const W: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Wolumetria twarzy i modelowanie ust',
  content: `Oferujemy zabiegi wolumetrii twarzy, gdzie poprzez precyzyjne wstrzykiwanie kwasu hialuronowego,
            osiągamy efekt modelowania i odmładzania twarzy. Iniekcje z kwasem hialuronowym wykorzystujemy także,
            przy niwelowaniu bruzd nosowo-wargowych, oraz modelowaniu ust. Dostępne są także zabiegi z wykorzystaniem
            nici PDO.`,
  redirectTo: 'oferta/medycyna-estetyczna/wolumetria',
};

const M: OfferInterface = {
  iconSrc: 'assets/tooth.svg',
  title: 'Mezoterapia, Osocze bogatopłytkowe, Fibryna',
  content: `Mezoterapia to metoda wprowadzania substancji aktywnych pod skórę, poprawiająca jej kondycję oraz
            w przypadku mezoterapii igłowej głowy, skutecznie eliminuje problem wypadania włosów.
            Zabiegi z osoczem bogatopłytkowym lub fibryną wykorzystują naturalne składniki krwi,
            stymulując regenerację skóry i redukując zmarszczki.Oba są bezpieczne i efektywne, przynosząc
            naturalne odmłodzenie i poprawę wyglądu skóry.`,
  redirectTo: 'oferta/medycyna-estetyczna/wolumetria',
};

export const OFFERS_AESTHETIC_MEDICINE: OfferInterface[] = [TB, W, M];
