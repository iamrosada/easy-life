/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  Heading,
  Input,
  Stack,
  Avatar,
  Text,
  StackDivider,
  Box,
  Badge,
  CardHeader,
  Flex,
  Stepper,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useSteps,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
} from '@chakra-ui/react';
import { StudentService } from '../../../api/server-context/client'; // Update the path accordingly
import { FunnelIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

interface StudentModel {
  id: string;
  name: string;
  full_name: string;
  course_language: string;
  event_id: string;
}
const localStudents: StudentModel[] = [
  {
    id: 'local-1',
    name: 'Estudante Local 1',
    full_name: 'Nome Completo 1',
    course_language: 'Inglês',
    event_id: 'event-local-1',
  },
  {
    id: 'local-2',
    name: 'Estudante Local 2',
    full_name: 'Nome Completo 2',
    course_language: 'Espanhol',
    event_id: 'event-local-2',
  },
  // Adicione mais estudantes locais conforme necessário
];
// eslint-disable-next-line react-refresh/only-export-components
const StudentListItem: React.FC<{
  person: StudentModel;
  onSelect: () => void;
}> = ({ person, onSelect }) => (
  <li key={person.id} onClick={onSelect}>
    <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500  hover:bg-gray-50">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/59142372?v=4"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">
            {person.course_language} {person.full_name}
          </p>
          <p className="truncate text-sm text-gray-500">{person.full_name}</p>
        </a>
      </div>
    </div>
  </li>
);

const SearchStudent: React.FC = () => {
  const [dataArray, setDataArray] = useState<StudentModel[]>([]);
  const [filteredStudent, setFilteredStudent] = useState<StudentModel[]>([]);
  const [search, setSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<StudentModel | null>(
    null
  );
  //@ts-ignore
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { students } = await StudentService.listStudents();
        setDataArray(students);
        setFilteredStudent(students);
      } catch (error) {
        // Se falhar, use dados locais
        setDataArray(localStudents);
        setFilteredStudent(localStudents);
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    setFilteredStudent(
      dataArray.filter(
        student =>
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.full_name.toLowerCase().includes(search) ||
          student.course_language.toLowerCase().includes(search)
      )
    );
  }, [search, dataArray]);

  const handleStudentSelect = (student: StudentModel) => {
    setSelectedStudent(student);
    setSidebarOpen(true);
  };

  return (
    <Flex h="100%">
      <Box flex="1" overflow="hidden">
        {/* Left Side - Student Profile */}
        {selectedStudent ? <Perfil student={selectedStudent} /> : null}
      </Box>

      <Box w="96" borderRight="1px" borderColor="gray.200">
        {/* Right Side - Student List */}
        <Flex direction="column" h="100%" p="6">
          <Flex mb="4" className="space-x-4">
            <Input
              type="search"
              name="search"
              placeholder="Search student"
              onChange={e => {
                setSearch(e.target.value);
              }}
            />
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500  focus:ring-offset-2"
            >
              <FunnelIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </Flex>
          <Box flex="1" overflowY="auto">
            <ul role="list" className="divide-y divide-gray-200">
              {filteredStudent.map(person => (
                <StudentListItem
                  key={person.id}
                  person={person}
                  onSelect={() => handleStudentSelect(person)}
                />
              ))}
            </ul>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export const Perfil: React.FC<{ student: StudentModel }> = ({ student }) => {
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
              {student.name}
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
          {student.full_name}
        </h1>
      </div>
      <Tabs isLazy>
        <TabList>
          <Tab className="text-[20px] font-bold">Biografia</Tab>
          <Tab className="text-[20px] font-bold">Professores</Tab>
          <Tab className="text-[20px] font-bold">Desempenho</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <Biografia />
            {/* <p>one!</p> */}
          </TabPanel>
          <TabPanel>
            <Professores />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Desempenho />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export const Biografia = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Angola</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Idioma
              </Heading>
              <Text pt="2" fontSize="sm">
                Portugues
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Idade
              </Heading>
              <Text pt="2" fontSize="sm">
                23{' '}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Objetivo
              </Heading>
              <Text pt="2" fontSize="sm">
                Aprender para ter trabalho na gringa
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Outros idiomas
              </Heading>
              <Text pt="2" fontSize="sm">
                Russo, Grego, Espanhol
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default SearchStudent;

const steps = [
  { title: 'Pronúncia', description: '10/12/2023' },
  { title: 'Escrita', description: '24/12/2023' },
  { title: 'Compreensão', description: '23/02/2024' },
];

function Desempenho() {
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

function Professores() {
  return (
    <>
      <Flex className="mb-4">
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">
            Rosada
            <Badge ml="1" colorScheme="green">
              New
            </Badge>
          </Text>
          <Text fontSize="sm">Professor de : Russo</Text>
        </Box>
      </Flex>

      <Flex>
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">Evanilson</Text>
          <Text fontSize="sm">Professor de : Espanhol</Text>
        </Box>
      </Flex>
    </>
  );
}
