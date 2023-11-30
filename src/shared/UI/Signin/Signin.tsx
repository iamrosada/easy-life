/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Flex, Heading, Stack, Image } from '@chakra-ui/react';
import { Tab } from '@headlessui/react';

import { useEffect, useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

export default function SigningComponent() {
  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading className="text-6xl font-bold mt-10">
              Bem vindo(a) a <span className="text-[#7F56D9]">Easy life</span>
            </Heading>
            <Example />
          </Stack>
        </Flex>
        <Flex flex={1} className="bg-[#000]">
          {/* <Image alt={'Login Image'} bg-[#E9D7FE] objectFit={'cover'} src={footerIcon} /> */}
          <div className="relative  flex items-center">
            <div className="w-[465.72px] absolute top-[20%]  left-[76%] h-[465.72px] rounded-full border-[100.76px] border-solid border-[#fff] mx-auto my-16"></div>

            <div className="w-[465.72px] h-[465.72px] ml-[3rem] z-10 right-[1%] rounded-full border-[100.76px] border-solid border-purple-500 mx-auto my-16"></div>
          </div>
        </Flex>
      </Stack>
    </>
  );
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const Vendo = () => {
  return <AutoComplete />;
};
const Vendo1 = () => {
  return <AutoComplete />;
};

export function Example() {
  const [categories] = useState({
    Estudante: () => <Vendo />,
    Professor: () => <Vendo1 />,
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel key={idx} className="py-10">
              {items()}
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <CreatedBy />
      </Tab.Group>
    </div>
  );
}

export const CreatedBy = () => {
  return (
    <p className="text-sm text-center font-medium mt-5 text-gray-400 mb-3">
      {' '}
      Made with <span className="text-red-600">♥</span> by{' '}
      <a
        href="https://vk.com/iamrosada"
        className="underline text-indigo-600"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        Luis De Água Rosada{' '}
      </a>
    </p>
  );
};

const student = [
  { id: 1, name: 'Estudante' },
  { id: 2, name: 'Professores' },
];

export function AutoComplete() {
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredStudent =
    query === ''
      ? student
      : student.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  const [formState, setFormState] = useState<string | any>({
    name: '',
  });

  const [nameUser, setNameUser] = useState<null | string>();

  useEffect(() => {
    setNameUser(
      JSON.stringify(selectedPerson === null ? '' : selectedPerson.name)
    );
    setFormState({
      ...formState,
      name: nameUser,
    });
  }, [nameUser, selectedPerson]);

  useEffect(() => {
    localStorage.removeItem('@PermissionYT:token');
  }, []);
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full  h-[3.5rem] rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={event => setQuery(event.target.value)}
          displayValue={(person: any) => person?.name}
          placeholder="Estudante e Professores"
        />

        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredStudent.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredStudent.map(person => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {person.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>

      <button
        onClick={() => handleNavigate('/')}
        className="inline-block px-7 py-3 mt-5  h-[3.5rem] w-full bg-[#7F56D9] border-[#E9D7FE] border-[3px] border-solid text-white font-inter text-sm font-semibold leading-5 uppercase rounded shadow-md hover:bg-[#7F56D9] hover:shadow-lg focus:bg-[#7F56D9] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#7F56D9] active:shadow-lg transition duration-150 ease-in-out"
      >
        Entrar
      </button>
    </Combobox>
  );
}
