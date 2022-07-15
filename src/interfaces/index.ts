export interface CrimeData {
  id: number;
  crimeTitle: string;
  crimeText: string;
  crimeImage: string;
}

export interface CrimeCardProps {
  crimeData: CrimeData;
}
