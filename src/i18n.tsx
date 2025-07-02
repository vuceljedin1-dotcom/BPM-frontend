// Simple i18n context for EN/BS
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    contact: 'Contact',
    joinNow: 'Join Now',
    heroSlogan: 'Balance. Potential. Motion.',
    heroDesc: 'Your base for physical readiness, mental balance, and personal strength. Discover your best self with our holistic approach to body and mind.',
    learnMore: 'Learn More',
    ready: 'Ready to start?',
    ourServices: 'Our Services',
    pricingOptions: 'Pricing Options',
    contactUs: 'Contact us for a custom plan or corporate offer!',
    functional: 'Functional Training',
    functionalDesc: 'Small group sessions for all levels. Boost your strength, mobility, and endurance.',
    martial: 'Martial Arts',
    martialDesc: 'Kickboxing, Taekwon-do, and self-defense for all ages and skill levels.',
    kids: 'Ninja Kids',
    kidsDesc: 'Fun, discipline, and coordination for children through play and movement.',
    online: 'Online & Global',
    onlineDesc: 'Digital training, video coaching, and eLearning. Flexible and accessible.',
    group: 'Group Sessions: from 50 KM/month',
    individual: 'Individual Training: from 100 KM/month',
    kidsPrice: 'Kids Programs: from 40 KM/month',
    onlinePrice: 'Online Packages: from 30 KM/month',
    aboutText: 'BPM (Body Power Mind) is a unique system that combines functional training, martial arts, mental development, and personal growth. Our mission is to develop the psychophysical power of every individual, regardless of age or ability.',
    ourTeam: 'Our Team',
    ourFacility: 'Our Facility',
    location: 'Location: Hamdije Kreševljakovića 61 (Papagajka), Sarajevo. Newly equipped, modern, and accessible for all.',
    contactInfo: 'Contact Info',
    thankYou: 'Thank you for contacting us! We will get back to you soon.',
    send: 'Send',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    personalized: 'Personalized Approach',
    personalizedDesc: 'Every member gets a tailored plan and progress tracking.',
    community: 'Community & Support',
    communityDesc: 'Grow together in a positive, motivating environment.',
    mindbody: 'Mind & Body',
    mindbodyDesc: 'Holistic development for lasting results and well-being.',
    whyChoose: 'Why Choose BPM?',
    mission: 'Our mission is to empower individuals to achieve holistic well-being through physical fitness, mental strength, and community support.',
    vision: 'Our vision is to create a vibrant community where everyone can reach their full potential in body and mind.',
    missionTitle: 'Our Mission',
    visionTitle: 'Our Vision',
  },
  bs: {
    home: 'Početna',
    about: 'O nama',
    services: 'Usluge',
    contact: 'Kontakt',
    joinNow: 'Pridruži se',
    heroSlogan: 'Balans. Potencijal. Pokret.',
    heroDesc: 'Vaša baza za fizičku spremnost, mentalni balans i ličnu snagu. Otkrijte svoje najbolje ja kroz naš holistički pristup tijelu i umu.',
    learnMore: 'Saznaj više',
    ready: 'Spremni za početak?',
    ourServices: 'Naše usluge',
    pricingOptions: 'Cjenovne opcije',
    contactUs: 'Kontaktirajte nas za prilagođen plan ili korporativnu ponudu!',
    functional: 'Funkcionalni trening',
    functionalDesc: 'Treninzi u malim grupama za sve nivoe. Povećajte snagu, mobilnost i izdržljivost.',
    martial: 'Borbene vještine',
    martialDesc: 'Kickboxing, Taekwon-do i samoodbrana za sve uzraste i nivoe.',
    kids: 'Ninja Kids',
    kidsDesc: 'Zabava, disciplina i koordinacija za djecu kroz igru i pokret.',
    online: 'Online & Global',
    onlineDesc: 'Digitalni treninzi, video coaching i eLearning. Fleksibilno i dostupno.',
    group: 'Grupni treninzi: od 50 KM/mj',
    individual: 'Individualni treninzi: od 100 KM/mj',
    kidsPrice: 'Dječiji programi: od 40 KM/mj',
    onlinePrice: 'Online paketi: od 30 KM/mj',
    aboutText: 'BPM (Baza Psihofizičke Moći) je jedinstven sistem koji kombinuje funkcionalni trening, borilačke vještine, mentalni razvoj i lični napredak. Naša misija je razvoj psihofizičke moći svakog pojedinca, bez obzira na dob ili sposobnosti.',
    ourTeam: 'Naš tim',
    ourFacility: 'Naš prostor',
    location: 'Lokacija: Hamdije Kreševljakovića 61 (Papagajka), Sarajevo. Novoopremljen, moderan i pristupačan svima.',
    contactInfo: 'Kontakt podaci',
    thankYou: 'Hvala na kontaktu! Javit ćemo vam se uskoro.',
    send: 'Pošalji',
    name: 'Ime',
    email: 'Email',
    message: 'Poruka',
    personalized: 'Personalizirani pristup',
    personalizedDesc: 'Svaki član dobija individualni plan i praćenje napretka.',
    community: 'Zajednica i podrška',
    communityDesc: 'Rastite zajedno u pozitivnom, motivirajućem okruženju.',
    mindbody: 'Um i tijelo',
    mindbodyDesc: 'Holistički razvoj za trajne rezultate i dobrobit.',
    whyChoose: 'Zašto izabrati BPM?',
    mission: 'Naša misija je osnažiti pojedince da postignu holističko blagostanje kroz fizičku spremnost, mentalnu snagu i podršku zajednice.',
    vision: 'Naša vizija je stvoriti živahnu zajednicu u kojoj svako može dostići svoj puni potencijal tijela i uma.',
    missionTitle: 'Naša misija',
    visionTitle: 'Naša vizija',
  },
};

type Lang = keyof typeof translations;
type TranslationKey = keyof typeof translations['en'];

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: TranslationKey) => {
    // fallback to 'en' if key is missing in current lang
    return (translations[lang][key] || translations['en'][key] || key);
  };
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
