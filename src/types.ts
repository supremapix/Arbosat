/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Neighborhood {
  id: string;
  name: string;
  type: 'official' | 'popular' | 'metropolitan';
  lat: number;
  lng: number;
  distanceKm: number; // calculated roughly from headquarters in Pinheirinho
  timeMins: number; // base transit estimation from Pinheirinho
  region: 'Norte' | 'Sul' | 'Leste' | 'Oeste' | 'Centro' | 'CIC' | 'Metropolitana';
  popularSubdivisions?: string[]; // for major regions like CIC
  seoDescription: string;
  safetyNote?: string;
}

export type ServiceType = 'poda' | 'remocao' | 'corte' | 'arborizacao' | 'emergencia';

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keywords: string[];
}

export interface BudgetRequest {
  name: string;
  phone: string;
  neighborhoodId: string;
  serviceType: ServiceType;
  description: string;
  urgency: 'baixa' | 'media' | 'urgente';
}
