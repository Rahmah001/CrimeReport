export interface CrimeData {
  id: number;
  crimeTitle: string;
  crimeText: string;
  crimeImage: string;
}

export interface CrimeCardProps {
  crimeData: CrimeData;
}

export interface NavbarProps {
  scrollToCrime: () => void;
  scrollToContact: () => void;
}
