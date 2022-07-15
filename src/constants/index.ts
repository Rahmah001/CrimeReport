import CrimeBg from '@assets/images/crime-bg.jpg';
import Vehicle from '@assets/images/vehicle.jpg';
import Murder from '@assets/images/murder.jpg';
import Kidnap from '@assets/images/kidnap.jpg';

export const overlayBg = `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('${CrimeBg}') no-repeat center`;

export const buttonGradient = {
  bgGradient: 'linear(to-b, orange.100, purple.300)',
  color: '#000',
};

export const bgGradient = 'linear(to-b, orange.100, purple.300)';

export const headingResSize = { base: 'xl', sm: '2xl' };

export const crimeDataArray = [
  {
    id: 0,
    crimeTitle: 'Vehicle Theft',
    crimeText:
      'Have you been robbed on the highway of your car or your in a scene currently kindly file a report.',
    crimeImage: Vehicle,
  },
  {
    id: 1,
    crimeTitle: 'Accidents & Murder',
    crimeText:
      'Have you been incolved in an accident or just witnessed a murder scene kindly file a report.',
    crimeImage: Murder,
  },
  {
    id: 2,
    crimeTitle: 'Kidnapping',
    crimeText:
      'Kindly file a report if you witnessed any suspicious activities of kidnapping around you.',
    crimeImage: Kidnap,
  },
];
