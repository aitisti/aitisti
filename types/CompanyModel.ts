export enum CompanyType {
  INHOUSE_PRODUCTS = 'Produse proprii',
  OUTSTAFFING = 'Outstaffing',
  OUTSOURCING = 'Outsourcing',
  MIXED = 'Mixt',
}

export enum CompanyLocation {
  BUCURESTI = 'București',
  TIMISOARA = 'Timișoara',
  CLUJ = 'Cluj-Napoca',
  IASI = 'Iași',
  SIBIU = 'Sibiu',
  CONSTANTA = 'Constanța',
  BRASOV = 'Brașov',
  CRAIOVA = 'Craiova',
}

export enum CompanyField {
  AUTOMOTIVE = 'Automotive',
  FINTECH = 'Fintech',
  RETAIL = 'Retail',
  SECURITY = 'Security',
  ACCOUNTING = 'Accounting',
  ERP = 'ERP',
  BANKING = 'Banking',
  HEALTH = 'Health',
  LOGISTICS = 'Logistics',
  IOT = 'IoT',
}

export type CompanyModel = {
  id: string;
  name: string;
  type: CompanyType;
  fields: CompanyField[];
  locations: CompanyLocation[];
  tech: string[];
};
