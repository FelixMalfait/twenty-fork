import { MemoryRouter } from 'react-router-dom';
import Companies from '../Companies';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../../../layout/styles/themes';
import { GET_COMPANIES } from '../../../services/api/companies';
import { mockCompaniesData } from '../__tests__/__data__/mock-data';
import { MockedProvider } from '@apollo/client/testing';
import { QueryMode } from '../../../generated/graphql';

const component = {
  title: 'Companies',
  component: Companies,
};

export default component;

const mocks = [
  {
    request: {
      query: GET_COMPANIES,
      variables: {
        orderBy: [{ createdAt: 'desc' }],
        where: {},
      },
    },
    result: {
      data: {
        companies: mockCompaniesData,
      },
    },
  },
  {
    request: {
      query: GET_COMPANIES,
      variables: {
        orderBy: [{ createdAt: 'desc' }],
        where: {},
      },
    },
    result: {
      data: {
        companies: mockCompaniesData,
      },
    },
  },
  {
    request: {
      query: GET_COMPANIES,
      variables: {
        orderBy: [{ createdAt: 'desc' }],
        where: {
          domainName: { contains: '%aircal%', mode: QueryMode.Insensitive },
        },
      },
    },
    result: {
      data: {
        companies: mockCompaniesData.filter(
          (company) =>
            company.domain_name && company.domain_name.includes('aircal'),
        ),
      },
    },
  },
];

export const CompaniesDefault = () => (
  <MockedProvider mocks={mocks}>
    <ThemeProvider theme={lightTheme}>
      <MemoryRouter>
        <Companies />
      </MemoryRouter>
    </ThemeProvider>
  </MockedProvider>
);
