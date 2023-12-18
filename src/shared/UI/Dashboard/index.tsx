//@ts-nocheck
//@ts-ignore
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Card,
  Stack,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  SkeletonText,
  SkeletonCircle,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import SearchStudent from './student';
import { PlusIcon } from '@heroicons/react/20/solid';
import { Fragment, useEffect, useState } from 'react';
import { RadioGroup, Listbox, Menu, Transition } from '@headlessui/react';
import {
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

import logoIcon from '../../../assets/logo.svg';
import { ClassService } from '@/api/server-context/class-client';
import { StudentService } from '@/api/server-context/client';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  return (
    <Box className="h-[100vh]">
      <Box>
        <Flex
          className="w-[100vw] h-[65px] bg-white border-t-[1.5px] [border-top-style:solid] border-b-[1.5px] [border-bottom-style:solid] border-l-[1.5px] [border-left-style:solid] border-[#d9d9d94a]"
          borderBottom={2}
          borderStyle={'solid'}
          align={'center'}
        >
          <section className="mx-auto max-w-[1100px] flex flex-row justify-between ">
            <nav className="flex items-start">
              <div className="flex items-start space-x-2">
                <img src={logoIcon} alt="Logo" className="h-6 w-6" />
                <span className="text-black font-inter text-2xl font-extrabold leading-6 tracking-wide text-left">
                  Easy Life
                </span>
              </div>
            </nav>
          </section>
        </Flex>
      </Box>
      <Tabs isLazy>
        <TabList className="flex flex-row justify-center items-center">
          <Tab className="text-[20px] font-bold">Preparar Aula</Tab>
          <Tab className="text-[20px] font-bold">Eventos</Tab>

          <Tab className="text-[20px] font-bold">Estudantes</Tab>
          <Tab className="text-[20px] font-bold">Pagamentos</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            {/* <p>one!</p> */}
            <CreateClassComponent />
          </TabPanel>
          <TabPanel>
            {/* <p>one!</p> */}

            <Example />
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel className="flex justify-center items-center">
            {/* <p>two!</p> */}
            <SearchStudent />
          </TabPanel>

          <TabPanel className="flex justify-center items-center">
            {/* <p>two!</p> */}
            <Example3 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
interface EventsI {
  id: string;
  title_of_lesson: string;
  description: string;
  teacher_id: string;
  students_ids: string[];
}
// Mock de dados locais
const localEventData: EventsI = {
  id: '1',
  title_of_lesson: 'Aula Local',
  description: 'Esta é uma aula local quando o backend não está disponível.',
  teacher_id: 'teacher-1',
  students_ids: ['student-1', 'student-2'],
};
const localStudentEventData = {
  students: [
    {
      id: '7671c160-9c2e-4632-8f33-c766ea107ea7',
      name: 'Rosada',
      full_name: 'Luis Da Silva Gama Agua Rosada',
      course_language: 'russo',
      teachers_ids: ['12334', '12344'],
      event_id: 'bfb57bc4-76c0-467c-aeee-fc5f75b7c05c',
      email: 'rosa@gmailxx',
    },
    {
      id: '19c0dd14-6f81-4622-b645-f04e065bc92f',
      name: 'Rosada',
      full_name: 'Luis Da Silva Gama Agua Rosada',
      course_language: 'russo',
      teachers_ids: ['12334', '12344'],
      event_id: 'bfb57bc4-76c0-467c-aeee-fc5f75b7c05c',
      email: 'rosa@gmail',
    },
    {
      id: '60744a6e-2f21-4273-b4b9-a2db58388793',
      name: 'Magui',
      full_name: 'Rosada',
      course_language: 'russo',
      teachers_ids: ['12334', '12344'],
      event_id: 'bfb57bc4-76c0-467c-aeee-fc5f75b7c05c',
      email: 'ivip@gmail',
    },
    {
      id: 'a9deebe3-15b4-4aec-9d74-ee863415a573',
      name: 'Isa',
      full_name: 'amor',
      course_language: 'russo',
      teachers_ids: ['12334', '12344'],
      event_id: 'bfb57bc4-76c0-467c-aeee-fc5f75b7c05c',
      email: 'gama@gmail',
    },
  ],
};
const Example: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const [students, setStudents] = useState<StudentI[]>([
    localStudentEventData as any,
  ]);
  const [getStudent, setGetStudent] = useState<StudentI | null>(null);
  const [events, setEvents] = useState<EventsI[]>([]);
  const [loading, setLoading] = useState(true);
  //@ts-ignore
  const [error, setError] = useState<string | null>(null);
  const [showSkeleton, setShowSkeleton] = useState(true);
  console.log(students);
  useEffect(() => {
    const fetchData = async () => {
      let classResponse: object;
      try {
        const studentId = '19c0dd14-6f81-4622-b645-f04e065bc92f';
        const studentResponse = await StudentService.getStudentById(studentId);

        classResponse = await ClassService.getClassById(
          studentResponse?.event_id as string
        );

        setEvents(prevEvents => [...prevEvents, classResponse as any]);
        setGetStudent(studentResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setError('Failed to fetch data. Please try again.');

        setEvents(prevEvents => [...prevEvents, localEventData as any]);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setShowSkeleton(false);
        }, 3000);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (getStudent?.event_id) {
        try {
          const studentEventResponse = await StudentService.getStudentByEventID(
            getStudent.event_id
          );
          // console.log(studentEventResponse, 'studentEventResponse');
          setStudents(prevStudents => [...prevStudents, studentEventResponse]);
        } catch (error) {
          // console.error('Error fetching student event data:', error);
          setStudents(prevStudents => [
            ...prevStudents,
            localStudentEventData as any,
          ]);
          console.log();
          toast({
            title: 'Error',
            description:
              'Failed to fetch student event data. Please try again.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      }
    };

    fetchData();
  }, []);

  // }, [getStudent?.event_id]);

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (loading) {
    return (
      <Box
        padding="6"
        // boxShadow="lg"
        bg="white"
        className="mb-8 mx-auto max-w-[1100px]  h-[100vh]"
      >
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="3" />
      </Box>
    );
  }
  return (
    <>
      {events.map(evnt => (
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          key={evnt.id}
          className="mb-8 mx-auto max-w-[1100px] flex flex-row justify-between "
        >
          <Stack>
            <CardBody>
              <Heading size="md">{evnt.title_of_lesson}</Heading>

              <Text py="2">{evnt.description}</Text>
            </CardBody>

            <CardFooter>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => navigate('/meet')}
              >
                Participar do evento
              </Button>
            </CardFooter>
          </Stack>

          <section className="mt-12 md:mt-0 md:pl-14 mb-[70px]">
            <h2 className="text-base font-semibold leading-6 text-gray-900 p-8">
              Estudantes selecionados para a aula!
            </h2>
            {showSkeleton && (
              <Box padding="6" bg="white">
                {/* <SkeletonCircle size="10" /> */}
                <SkeletonText
                  mt="4"
                  noOfLines={6}
                  spacing="4"
                  skeletonHeight="4"
                />
                {/* <SkeletonCircle size="10" /> */}
              </Box>
            )}
            {!showSkeleton && (
              <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                {students.map((item: any, index: any) => {
                  console.log(item, 'item');
                  return item.students?.map(
                    (student: StudentI, studentIndex: any) => {
                      return (
                        <li
                          key={studentIndex}
                          className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            className="h-10 w-10 flex-none rounded-full"
                          />
                          <div className="flex-auto">
                            <p className="text-gray-900">{student.name}</p>
                            <p className="mt-0.5">{student.email}</p>
                          </div>
                          <Menu
                            as="div"
                            className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
                          >
                            <div>
                              <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                                <span className="sr-only">Open options</span>
                                <EllipsisVerticalIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                          'block px-4 py-2 text-sm'
                                        )}
                                      >
                                        Edit
                                      </a>
                                    )}
                                  </Menu.Item>
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-700',
                                          'block px-4 py-2 text-sm'
                                        )}
                                      >
                                        Cancel
                                      </a>
                                    )}
                                  </Menu.Item>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </li>
                      );
                    }
                  );
                })}
              </ol>
            )}
          </section>
        </Card>
      ))}
    </>
  );
};

const settings = [
  {
    name: 'Public access',
    description: 'This Aula would be available to anyone who has the link',
  },
  {
    name: 'Private to Aula Members',
    description: 'Only members of this Aula would be able to access',
  },
  {
    name: 'Private to you',
    description: 'You are the only one able to access this project',
  },
];
interface StudentI {
  id: string;
  name: string;
  full_name: string;
  course_name: string;
  email: string;
  event_id: string;
  teachers_ids: string[];
}
function CreateClassComponent() {
  const toast = useToast();

  const [selected, setSelected] = useState(settings[0]);
  const [className, setClassName] = useState('');
  const [classDescription, setClassDescription] = useState('');
  // const [classTags, setClassTags] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');
  const existingStudents: StudentI[] =
    JSON.parse(localStorage.getItem('chosenStudents') as any) || [];

  const [students, setStudents] = useState<StudentI[]>(existingStudents);

  console.log({ className, classDescription, newStudentEmail });
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      // Call the API to create the class
      const newClass = await ClassService.createClass({
        title_of_lesson: className,
        description: classDescription,
        teacher_id: 'DEUS',
        students_ids: students.map(student => student.id),
      });

      toast({
        title: 'Class created successfully',
        description: 'The Student was notified about this class.',
        status: 'success',
        colorScheme: 'purple',
        duration: 3000,
        isClosable: true,
      });
      // Handle the response as needed (e.g., show success message, redirect, etc.)
      console.log('Class created successfully:', newClass);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error creating class:', error);
    }
  };

  const addStudent = async () => {
    console.log('chamou');
    try {
      // Call the API to create the class
      const chooseEstudent = (await StudentService.getStudentByEmail(
        newStudentEmail
      )) as StudentI;

      // Obtenha os alunos existentes do localStorage
      const existingStudents: StudentI[] =
        JSON.parse(localStorage.getItem('chosenStudents') as any) || [];

      // Verifique se o estudante já está no array pelo ID
      const studentExists = existingStudents.some(
        student => student.id === chooseEstudent.id
      );

      if (!studentExists) {
        // Adicione o novo aluno ao array existente
        const updatedStudents = [...existingStudents, chooseEstudent];

        // Armazene o array atualizado no localStorage
        localStorage.setItem('chosenStudents', JSON.stringify(updatedStudents));

        // Atualize o state, se necessário
        setStudents([...students, chooseEstudent]);

        // Handle the response as needed (e.g., show success message, redirect, etc.)
        console.log('Student retrieved successfully:', chooseEstudent);
      } else {
        console.log('');
        toast({
          title: 'The Student was  already added ',
          description:
            'Student with the same ID already exists in localStorage.',
          status: 'error',
          colorScheme: 'red',
          duration: 3000,
          isClosable: true,
        });
        // Handle the case where the student with the same ID already exists
      }
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error('Error retrieving student:', error);
    }
  };

  return (
    <>
      <main className="mx-auto max-w-lg px-4 pb-12 pt-2 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg font-medium leading-6 text-gray-900">
                Definir Aula
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Let’s get started by filling in the information below to create
                your new project.
              </p>
            </div>

            <div>
              <label
                htmlFor="project-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome da Aula
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="project-name"
                  id="project-name"
                  value={className}
                  onChange={e => setClassName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                  defaultValue="AulaNero"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Descrição
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  // value={classDescription}
                  onChange={e => setClassDescription(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="space-y-2">
                <label
                  htmlFor="add-team-members"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adicionar Alunos
                </label>
                <p id="add-team-members-helper" className="sr-only">
                  Procurar por email
                </p>
                <div className="flex">
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={newStudentEmail}
                      onChange={e => setNewStudentEmail(e.target.value)}
                      name="add-team-members"
                      id="add-team-members"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                      placeholder="Email address"
                      aria-describedby="add-team-members-helper"
                    />
                  </div>
                  <span className="ml-3">
                    <button
                      type="button"
                      onClick={addStudent}
                      className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PlusIcon
                        className="-ml-0.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Adicionar
                    </button>
                  </span>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <ul role="list" className="divide-y divide-gray-200">
                  {students.map(person => (
                    <li key={person.id} className="flex py-4">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="ml-3 flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {person.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {person.email}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="block text-sm font-medium leading-6 text-gray-900">
                Privacy
              </RadioGroup.Label>

              <div className="isolate mt-2 -space-y-px rounded-md bg-white shadow-sm">
                {settings.map((setting, settingIdx) => (
                  <RadioGroup.Option
                    key={setting.name}
                    value={setting}
                    className={({ checked }) =>
                      classNames(
                        settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                        settingIdx === settings.length - 1
                          ? 'rounded-bl-md rounded-br-md'
                          : '',
                        checked
                          ? 'z-10 border-sky-200 bg-sky-50'
                          : 'border-gray-200',
                        'relative flex cursor-pointer border p-4 focus:outline-none'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <span
                          className={classNames(
                            checked
                              ? 'bg-sky-600 border-transparent'
                              : 'bg-white border-gray-300',
                            active ? 'ring-2 ring-offset-2 ring-sky-500' : '',
                            'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                          )}
                          aria-hidden="true"
                        >
                          <span className="rounded-full bg-white w-1.5 h-1.5" />
                        </span>
                        <span className="ml-3 flex flex-col">
                          <RadioGroup.Label
                            as="span"
                            className={classNames(
                              checked ? 'text-sky-900' : 'text-gray-900',
                              'block text-sm font-medium'
                            )}
                          >
                            {setting.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={classNames(
                              checked ? 'text-sky-700' : 'text-gray-500',
                              'block text-sm'
                            )}
                          >
                            {setting.description}
                          </RadioGroup.Description>
                        </span>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tags Para cada Aula
              </label>
              <input
                type="text"
                name="tags"
                id="tags"
                className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="flex justify-end gap-x-3">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Criar Aula
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

const invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items: [
    {
      id: 1,
      title: 'Logo redesign',
      description: 'New logo and digital asset playbook.',
      hours: '20.0',
      rate: '$100.00',
      price: '$2,000.00',
    },
    {
      id: 2,
      title: 'Website redesign',
      description: 'Design and program new company website.',
      hours: '52.0',
      rate: '$100.00',
      price: '$5,200.00',
    },
    {
      id: 3,
      title: 'Business cards',
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: '12.0',
      rate: '$100.00',
      price: '$1,200.00',
    },
    {
      id: 4,
      title: 'T-shirt design',
      description: 'Three t-shirt design concepts.',
      hours: '4.0',
      rate: '$100.00',
      price: '$400.00',
    },
  ],
};
const activity = [
  {
    id: 1,
    type: 'created',
    person: { name: 'Chelsea Hagon' },
    date: '7d ago',
    dateTime: '2023-01-23T10:32',
  },
  {
    id: 2,
    type: 'edited',
    person: { name: 'Chelsea Hagon' },
    date: '6d ago',
    dateTime: '2023-01-23T11:03',
  },
  {
    id: 3,
    type: 'sent',
    person: { name: 'Chelsea Hagon' },
    date: '6d ago',
    dateTime: '2023-01-23T11:24',
  },
  {
    id: 4,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment:
      'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  {
    id: 5,
    type: 'viewed',
    person: { name: 'Alex Curren' },
    date: '2d ago',
    dateTime: '2023-01-24T09:12',
  },
  {
    id: 6,
    type: 'paid',
    person: { name: 'Alex Curren' },
    date: '1d ago',
    dateTime: '2023-01-24T09:20',
  },
];
const moods = [
  {
    name: 'Excited',
    value: 'excited',
    icon: FireIcon,
    iconColor: 'text-white',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Loved',
    value: 'loved',
    icon: HeartIcon,
    iconColor: 'text-white',
    bgColor: 'bg-pink-400',
  },
  {
    name: 'Happy',
    value: 'happy',
    icon: FaceSmileIcon,
    iconColor: 'text-white',
    bgColor: 'bg-green-400',
  },
  {
    name: 'Sad',
    value: 'sad',
    icon: FaceFrownIcon,
    iconColor: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'Thumbsy',
    value: 'thumbsy',
    icon: HandThumbUpIcon,
    iconColor: 'text-white',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'I feel nothing',
    value: null,
    icon: XMarkIconMini,
    iconColor: 'text-gray-400',
    bgColor: 'bg-transparent',
  },
];

function Example3() {
  const [selected, setSelected] = useState(moods[5]);

  return (
    <>
      <main>
        <header className="relative isolate pt-16">
          <div
            className="absolute inset-0 -z-10 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
              <div
                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                style={{
                  clipPath:
                    'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
          </div>

          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
              <div className="flex items-center gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                />
                <h1>
                  <div className="text-sm leading-6 text-gray-500">
                    Invoice <span className="text-gray-700">#00011</span>
                  </div>
                  <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                    Rosada Luis
                  </div>
                </h1>
              </div>
              <div className="flex items-center gap-x-4 sm:gap-x-6">
                <button
                  type="button"
                  className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
                >
                  Copy URL
                </button>
                <a
                  href="#"
                  className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send
                </a>

                <Menu as="div" className="relative sm:hidden">
                  <Menu.Button className="-m-3 block p-3">
                    <span className="sr-only">More</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            className={classNames(
                              active ? 'bg-gray-50' : '',
                              'block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900'
                            )}
                          >
                            Copy URL
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 text-sm leading-6 text-gray-900'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">
                  <div className="flex-auto pl-6 pt-6">
                    <dt className="text-sm font-semibold leading-6 text-gray-900">
                      Amount
                    </dt>
                    <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                      $10,560.00
                    </dd>
                  </div>
                  <div className="flex-none self-end px-6 pt-4">
                    <dt className="sr-only">Status</dt>
                    <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                      Paid
                    </dd>
                  </div>
                  <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                    <dt className="flex-none">
                      <span className="sr-only">Client</span>
                      <UserCircleIcon
                        className="h-6 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm font-medium leading-6 text-gray-900">
                      Alex Curren
                    </dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <CalendarDaysIcon
                        className="h-6 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-500">
                      <time dateTime="2023-01-31">January 31, 2023</time>
                    </dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Status</span>
                      <CreditCardIcon
                        className="h-6 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-500">
                      Paid with MasterCard
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Download receipt <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <h2 className="text-base font-semibold leading-6 text-gray-900">
                Invoice
              </h2>
              <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                <div className="sm:pr-4">
                  <dt className="inline text-gray-500">Issued on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-23-01">January 23, 2023</time>
                  </dd>
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-4">
                  <dt className="inline text-gray-500">Due on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime="2023-31-01">January 31, 2023</time>
                  </dd>
                </div>
                <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                  <dt className="font-semibold text-gray-900">From</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">
                      Acme, Inc.
                    </span>
                    <br />
                    7363 Cynthia Pass
                    <br />
                    Toronto, ON N3Y 4H8
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                  <dt className="font-semibold text-gray-900">To</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">
                      Rosada Luis
                    </span>
                    <br />
                    886 Walter Street
                    <br />
                    New York, NY 12345
                  </dd>
                </div>
              </dl>
              <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th scope="col" className="px-0 py-3 font-semibold">
                      Projects
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
                    >
                      Hours
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-8 pr-0 text-right font-semibold"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map(item => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">
                          {item.title}
                        </div>
                        <div className="truncate text-gray-500">
                          {item.description}
                        </div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        {item.hours}
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        {item.rate}
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      className="px-0 pb-0 pt-6 font-normal text-gray-700 sm:hidden"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden px-0 pb-0 pt-6 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Subtotal
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-gray-900">
                      {invoice.subTotal}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="pt-4 font-normal text-gray-700 sm:hidden"
                    >
                      Tax
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Tax
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-gray-900">
                      {invoice.tax}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="pt-4 font-semibold text-gray-900 sm:hidden"
                    >
                      Total
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell"
                    >
                      Total
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-gray-900">
                      {invoice.total}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="lg:col-start-3">
              {/* Activity feed */}
              <h2 className="text-sm font-semibold leading-6 text-gray-900">
                Activity
              </h2>
              <ul role="list" className="mt-6 space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                  <li key={activityItem.id} className="relative flex gap-x-4">
                    <div
                      className={classNames(
                        activityItemIdx === activity.length - 1
                          ? 'h-6'
                          : '-bottom-6',
                        'absolute left-0 top-0 flex w-6 justify-center'
                      )}
                    >
                      <div className="w-px bg-gray-200" />
                    </div>
                    {activityItem.type === 'commented' ? (
                      <>
                        <img
                          src={activityItem.person.imageUrl}
                          alt=""
                          className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
                        />
                        <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                          <div className="flex justify-between gap-x-4">
                            <div className="py-0.5 text-xs leading-5 text-gray-500">
                              <span className="font-medium text-gray-900">
                                {activityItem.person.name}
                              </span>{' '}
                              commented
                            </div>
                            <time
                              dateTime={activityItem.dateTime}
                              className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                            >
                              {activityItem.date}
                            </time>
                          </div>
                          <p className="text-sm leading-6 text-gray-500">
                            {activityItem.comment}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                          {activityItem.type === 'paid' ? (
                            <CheckCircleIcon
                              className="h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                          ) : (
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                          )}
                        </div>
                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                          <span className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </span>{' '}
                          {activityItem.type} the invoice.
                        </p>
                        <time
                          dateTime={activityItem.dateTime}
                          className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                        >
                          {activityItem.date}
                        </time>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* New comment form */}
              <div className="mt-6 flex gap-x-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                  <div className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      rows={2}
                      name="comment"
                      id="comment"
                      className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Add your comment..."
                      defaultValue={''}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PaperClipIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <Listbox value={selected} onChange={setSelected}>
                          {({ open }) => (
                            <>
                              <Listbox.Label className="sr-only">
                                Your mood
                              </Listbox.Label>
                              <div className="relative">
                                <Listbox.Button className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                                  <span className="flex items-center justify-center">
                                    {selected.value === null ? (
                                      <span>
                                        <FaceSmileIcon
                                          className="h-5 w-5 flex-shrink-0"
                                          aria-hidden="true"
                                        />
                                        <span className="sr-only">
                                          Add your mood
                                        </span>
                                      </span>
                                    ) : (
                                      <span>
                                        <span
                                          className={classNames(
                                            selected.bgColor,
                                            'flex h-8 w-8 items-center justify-center rounded-full'
                                          )}
                                        >
                                          <selected.icon
                                            className="h-5 w-5 flex-shrink-0 text-white"
                                            aria-hidden="true"
                                          />
                                        </span>
                                        <span className="sr-only">
                                          {selected.name}
                                        </span>
                                      </span>
                                    )}
                                  </span>
                                </Listbox.Button>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                    {moods.map(mood => (
                                      <Listbox.Option
                                        key={mood.value}
                                        className={({ active }) =>
                                          classNames(
                                            active ? 'bg-gray-100' : 'bg-white',
                                            'relative cursor-default select-none px-3 py-2'
                                          )
                                        }
                                        value={mood}
                                      >
                                        <div className="flex items-center">
                                          <div
                                            className={classNames(
                                              mood.bgColor,
                                              'flex h-8 w-8 items-center justify-center rounded-full'
                                            )}
                                          >
                                            <mood.icon
                                              className={classNames(
                                                mood.iconColor,
                                                'h-5 w-5 flex-shrink-0'
                                              )}
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <span className="ml-3 block truncate font-medium">
                                            {mood.name}
                                          </span>
                                        </div>
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
