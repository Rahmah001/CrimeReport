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
  scrollToAbout: () => void;
}

export interface formValues {
  crime: string;
  email: string;
  name: string;
  phoneNumber: string;
}
