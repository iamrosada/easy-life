/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import faker from 'faker';

import {
  EnvelopeIcon,
  // EnvelopeIcon,
  FunnelIcon,
  // PhoneIcon,
} from '@heroicons/react/20/solid';
import {
  Heading,
  CardBody,
  Stack,
  Card,
  CardHeader,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

interface StudentModel {
  id: number;
  group: string;
  country: string;
  ageStart: string;
  ageFinish: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  nameCourse: string;
  profile_picture: string; // Assuming a property for the image URL
  // ... other properties
}

const SearchStudent: React.FC = () => {
  const [dataArray, setDataArray] = useState<StudentModel[]>([]);
  const [filteredStudent, setFilteredStudent] = useState<StudentModel[]>([]);
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Generate fake student data with avatar images
    const fakeData = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      group: faker.random.word(),
      country: faker.address.country(),
      ageStart: faker.random.number().toString(),
      ageFinish: faker.random.number().toString(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      nameCourse: faker.random.words(),
      profile_picture: 'https://avatars.githubusercontent.com/u/59142372?v=4',
    }));

    // Update the dataArray and initial filteredStudent with fake data
    setDataArray(fakeData);
    setFilteredStudent(fakeData);
  }, []); // Empty dependency array means this effect runs once on mount

  console.log(faker.image.avatar());
  useEffect(() => {
    // Update filteredStudent based on the search input
    setFilteredStudent(
      dataArray.filter(
        student =>
          student.group.toLowerCase().includes(search.toLowerCase()) ||
          student.ageStart.includes(search) ||
          student.ageFinish.includes(search) ||
          student.country.toLowerCase().includes(search.toLowerCase()) ||
          student.firstName.toLowerCase().includes(search) ||
          student.lastName.toLowerCase().includes(search) ||
          student.email.includes(search.toLowerCase()) ||
          student.address.includes(search) ||
          student.nameCourse.includes(search)
      )
    );
  }, [search, dataArray]);

  return (
    <>
      <div className="flex h-full">
        <Perfil />
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
              <div className="px-6 pt-6 pb-4">
                <div className="mt-6 flex space-x-4">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        type="search"
                        name="search"
                        placeholder="search student"
                        id="search"
                        className="w-full w-[17rem] h-[4rem] rounded-md border border-gray-300 bg-white py-2 pl-3 pr-14 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        onChange={e => {
                          setSearch(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    // onClick={() => openSearchModalFn(true)}
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500  focus:ring-offset-2"
                  >
                    <FunnelIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              {/* Directory list */}
              <nav
                className="min-h-0 flex-1 overflow-y-auto"
                aria-label="Directory"
              >
                <div className="relative">
                  <ul
                    role="list"
                    className="relative z-0 divide-y divide-gray-200"
                  >
                    {dataArray.length === 0
                      ? filteredStudent.map(person => (
                          <li
                            key={person.id}
                            onClick={() => {
                              setSidebarOpen(true);
                            }}
                          >
                            <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500  hover:bg-gray-50">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={person.profile_picture}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <a href="#" className="focus:outline-none">
                                  {/* Extend touch target to entire panel */}
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  <p className="text-sm font-medium text-gray-900">
                                    {/* {person.name} */}
                                    {person.lastName} {person.firstName}
                                  </p>
                                  <p className="truncate text-sm text-gray-500">
                                    {person.nameCourse}
                                  </p>
                                </a>
                              </div>
                            </div>
                          </li>
                        ))
                      : dataArray.map(person => (
                          <li
                            key={person.id}
                            onClick={() => {
                              setSidebarOpen(true);
                            }}
                          >
                            <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500  hover:bg-gray-50">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={person.profile_picture}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <a href="#" className="focus:outline-none">
                                  {/* Extend touch target to entire panel */}
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  <p className="text-sm font-medium text-gray-900">
                                    {person.lastName} {person.firstName}
                                  </p>
                                  <p className="truncate text-sm text-gray-500">
                                    {person.nameCourse}
                                  </p>
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                  </ul>
                </div>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchStudent;

const Perfil = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mt-12 sm:mt-16 sm:flex sm:items-end sm:space-x-5">
        <div className="flex">
          <img
            className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            src="https://avatars.githubusercontent.com/u/59142372?v=4"
            alt=""
          />
        </div>
        <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
            <h1 className="truncate text-2xl font-bold text-gray-900">
              {/* here is mobile */}
              {faker.name.firstName()}
            </h1>
          </div>
          <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              <EnvelopeIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span>
                <a href="mailto:mf-vsuet@mail.ru?subject=Просьба добавить информацию!&body=Здравствуйте, я студентка [xyz], училась в году [xyz], в группе [xyz], и увидел(а), что в моем профиле не хватает некоторой информации, поэтому опишу здесь:!">
                  Сообщение
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
        <h1 className="truncate text-2xl font-bold text-gray-900">
          {faker.name.firstName()}
        </h1>
      </div>
      <Tabs isLazy>
        <TabList>
          <Tab className="text-[20px] font-bold">Biografia</Tab>
          {/* <Tab className="text-[20px] font-bold">Estudantes</Tab> */}
          <Tab className="text-[20px] font-bold">Desempenho</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Example />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

const steps = [
  { title: 'Pronuncia', description: '10/12/2023' },
  { title: 'Escrever', description: '24/12/2023' },
  { title: 'Compreensao', description: '23/02/2024' },
];

function Example() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
