export const clinics = () => {
  return {
    data: {
      states: [
        {
          name: 'New Mexico',
          abbreviation: 'NM',
          resources: [
            {
              name: 'Mariposa Fund',
              website: 'http://mariposafund.org/',
              service: 'translation services, access',
            },
            {
              name: 'New Mexico Religious Coalition for Reproductive Choice',
              website:
                'https://nmrcrc.org/if-you-are-pregnant/financial-assistance/',
              service: 'funding, transportation, lodging',
            },
            {
              name: 'The Brigid Alliance',
              website: 'https://brigidalliance.org/need-support/',
              service: 'travel, food, lodging, child care',
            },
          ],
          misinformationCenters: [
            {
              name: 'Mock MisInformation Centers',
              city: 'Albuquerque',
              zip: '87102',
              address: '522 Lomas Boulevard NE',
            },
          ],
          authorizedClinics: [
            {
              name: 'Southwestern Women’s Options',
              city: 'Albuquerque',
              zip: '87102',
              phone: '5052427512',
              services: 'pill, clinic',
              website:
                'https://southwesternwomens.com/southwestern-womens-options-albuquerque-new-mexico/',
              address: '522 Lomas Boulevard NE',
            },
            {
              name: 'UNM Center for Reproductive Health',
              city: 'Albuquerque',
              zip: '87106',
              phone: '5059254455',
              services: 'pill, clinic',
              website: 'https://unmhealth.org/services/family-planning/',
              address: '2301 Yale Boulevard SE, Buidling E',
            },
            {
              name: 'Planned Parenthood - San Mateo',
              city: 'Albuquerque',
              zip: '87108',
              phone: '5052659511',
              services: 'pill, clinic',
              website:
                'https://www.plannedparenthood.org/health-center/new-mexico/albuquerque/87108/san-mateo-2956-90210',
              address: '701 San Mateo NE',
            },
            {
              name: "Alamo Women's Clinic of Albuquerque",
              city: 'Albuquerque',
              zip: '87111',
              phone: '8008217237',
              services: 'pill, clinic',
              website: 'https://alamowomensclinic.com/',
              address: '10151 Montgomery Blvd NE, Building 3, Unit B',
            },
            {
              name: 'Planned Parenthood - Santa Fe',
              city: 'Santa Fe',
              zip: '87505',
              phone: '5059823684',
              services: 'pill',
              website:
                'https://www.plannedparenthood.org/health-center/new-mexico/santa-fe/87505/santa-fe-2801-90210',
              address: "730 St. Michael's Drive, Suite 4B",
            },
            {
              name: 'Full Circle Health Center',
              city: 'Las Cruces',
              zip: '88005',
              phone: '5752228594',
              services: 'pill, call for clinic guidance',
              website: 'https://fullcirclehealthcenter.com/',
              address: '210 West Las Cruces Avenue',
            },
            {
              name: "Women's Reproductive Clinic of New Mexico",
              city: 'Santa Teresa',
              zip: '88008',
              phone: '5753329452',
              services: 'pill',
              website: 'https://www.reproductiveservices.com/',
              address: '5290 McNutt Road, Suite 103',
            },
            {
              name: 'Las Cruces Women’s Health Organization',
              city: 'Las Cruces',
              zip: '88011',
              phone: '5758884623',
              services: 'pill, call for clinic guidance',
              website: 'https://lascruceswomenshealth.com/',
              address: '2918 Hillrise Drive',
            },
          ],
        },
      ],
    },
  };
};
