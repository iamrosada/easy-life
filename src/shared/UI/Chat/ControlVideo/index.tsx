import { Box } from '@chakra-ui/react';

export const ControlVideo = () => {
  return (
    <div className="flex">
      <Box className="flex justify-between w-[100vw]">
        <Box>
          <ControllAboutVideo />
        </Box>

        <Box className="h-[600px] w-[400px] pb-3 mr-4">
          <Comment />
        </Box>
      </Box>
    </div>
  );
};

const Comment = () => {
  return (
    <Box>
      <Box></Box>
      <textarea
        id="myTextarea"
        name="myTextarea"
        placeholder="Type Something..."
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 disabled:opacity-25 transition-all"
      ></textarea>
      <Box></Box>
    </Box>
  );
};

const ControllAboutVideo = () => {
  return (
    <Box className="flex items-center justify-center w-[68vw]">
      <Box className="h-[60px] w-[60px] rounded-full bg-[#0060FF] flex justify-center items-center m-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6668 8.5556H9.73929H9.3335V14.7102L12.9857 18.6667H15.4205L18.6668 15.1498V8.5556Z"
            fill="white"
            fill-opacity="0.8"
          />
          <path
            d="M14.0002 18.0833C16.5785 18.0833 18.6668 15.995 18.6668 13.4166V6.99998C18.6668 4.42165 16.5785 2.33331 14.0002 2.33331C11.4218 2.33331 9.3335 4.42165 9.3335 6.99998V13.4166C9.3335 15.995 11.4218 18.0833 14.0002 18.0833Z"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.07568 11.2584V13.2417C5.07568 18.165 9.07735 22.1667 14.0007 22.1667C18.924 22.1667 22.9257 18.165 22.9257 13.2417V11.2584"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 22.1667V25.6667"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Box className="h-[60px] w-[60px] rounded-full bg-[#0060FF] flex justify-center items-center m-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6185 23.8233H7.24516C3.5585 23.8233 2.3335 21.3733 2.3335 18.9116V9.0883C2.3335 5.40164 3.5585 4.17664 7.24516 4.17664H14.6185C18.3052 4.17664 19.5302 5.40164 19.5302 9.0883V18.9116C19.5302 22.5983 18.2935 23.8233 14.6185 23.8233Z"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.7736 19.95L19.5303 17.675V10.3133L22.7736 8.0383C24.3603 6.92997 25.6669 7.60664 25.6669 9.55497V18.445C25.6669 20.3933 24.3603 21.07 22.7736 19.95Z"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.417 12.8334C14.3835 12.8334 15.167 12.0499 15.167 11.0834C15.167 10.1169 14.3835 9.33337 13.417 9.33337C12.4505 9.33337 11.667 10.1169 11.667 11.0834C11.667 12.0499 12.4505 12.8334 13.417 12.8334Z"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Box className="h-[60px] w-[60px] rounded-full bg-[#DFEBFF] flex justify-center items-center m-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5002 25.6666H17.5002C23.3335 25.6666 25.6668 23.3333 25.6668 17.5V10.5C25.6668 4.66665 23.3335 2.33331 17.5002 2.33331H10.5002C4.66683 2.33331 2.3335 4.66665 2.3335 10.5V17.5C2.3335 23.3333 4.66683 25.6666 10.5002 25.6666Z"
            stroke="#0060FF"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 11.095L14 7.59503L17.5 11.095"
            stroke="#0060FF"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 7.59503V16.9284"
            stroke="#0060FF"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 19.2617C11.5383 20.7783 16.4617 20.7783 21 19.2617"
            stroke="#0060FF"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Box className="h-[60px] w-[60px] rounded-full bg-[#DFEBFF] flex justify-center items-center m-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.91683 22.1666H9.3335C4.66683 22.1666 2.3335 21 2.3335 15.1666V9.33331C2.3335 4.66665 4.66683 2.33331 9.3335 2.33331H18.6668C23.3335 2.33331 25.6668 4.66665 25.6668 9.33331V15.1666C25.6668 19.8333 23.3335 22.1666 18.6668 22.1666H18.0835C17.7218 22.1666 17.3718 22.3416 17.1502 22.6333L15.4002 24.9666C14.6302 25.9933 13.3702 25.9933 12.6002 24.9666L10.8502 22.6333C10.6635 22.3766 10.2318 22.1666 9.91683 22.1666Z"
            stroke="#0060FF"
            stroke-width="2.25"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.6629 12.8334H18.6733"
            stroke="#0060FF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9949 12.8334H14.0054"
            stroke="#0060FF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.32741 12.8334H9.33789"
            stroke="#0060FF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>

      <Box className="h-[60px] w-[60px] rounded-full bg-[#DFEBFF] flex justify-center items-center m-2">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0003 11.6667C12.717 11.6667 11.667 12.7167 11.667 14C11.667 15.2834 12.717 16.3334 14.0003 16.3334C15.2837 16.3334 16.3337 15.2834 16.3337 14C16.3337 12.7167 15.2837 11.6667 14.0003 11.6667ZM21.0003 11.6667C19.717 11.6667 18.667 12.7167 18.667 14C18.667 15.2834 19.717 16.3334 21.0003 16.3334C22.2837 16.3334 23.3337 15.2834 23.3337 14C23.3337 12.7167 22.2837 11.6667 21.0003 11.6667ZM7.00033 11.6667C5.71699 11.6667 4.66699 12.7167 4.66699 14C4.66699 15.2834 5.71699 16.3334 7.00033 16.3334C8.28366 16.3334 9.33366 15.2834 9.33366 14C9.33366 12.7167 8.28366 11.6667 7.00033 11.6667Z"
            fill="#0060FF"
          />
        </svg>
      </Box>

      <Box>
        <p className=" text-white h-[60px] w-[145px] left-[1131px] rounded-[73px] bg-[#EB5757] flex justify-center items-center m-2">
          End Call
        </p>
      </Box>
    </Box>
  );
};
