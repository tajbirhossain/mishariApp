import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, Icontype, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex h-10  rounded-md  border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border-gray-200 relative',
        Icontype === 'search' ? 'disabled:cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <input
        type={type}
        className={cn('w-full p-5 border-input border  rounded-sm', className)}
        ref={ref}
        {...props}
      />
      <div className="absolute right-0 top-[30%] pr-2">
        {Icontype === 'search' ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_53_344)">
              <path
                d="M13.125 22.5C18.3027 22.5 22.5 18.3027 22.5 13.125C22.5 7.94733 18.3027 3.75 13.125 3.75C7.94733 3.75 3.75 7.94733 3.75 13.125C3.75 18.3027 7.94733 22.5 13.125 22.5Z"
                stroke="#A3AED0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.7544 19.7543L26.2501 26.25"
                stroke="#A3AED0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_53_344">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_15_336)">
              <path
                d="M26 4H23V3C23 2.73478 22.8946 2.48043 22.7071 2.29289C22.5196 2.10536 22.2652 2 22 2C21.7348 2 21.4804 2.10536 21.2929 2.29289C21.1054 2.48043 21 2.73478 21 3V4H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H26C26.5304 28 27.0391 27.7893 27.4142 27.4142C27.7893 27.0391 28 26.5304 28 26V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4ZM14 23C14 23.2652 13.8946 23.5196 13.7071 23.7071C13.5196 23.8946 13.2652 24 13 24C12.7348 24 12.4804 23.8946 12.2929 23.7071C12.1054 23.5196 12 23.2652 12 23V16.6175L11.4475 16.895C11.2101 17.0137 10.9353 17.0332 10.6836 16.9493C10.4318 16.8654 10.2237 16.6849 10.105 16.4475C9.98632 16.2101 9.96679 15.9353 10.0507 15.6836C10.1346 15.4318 10.3151 15.2237 10.5525 15.105L12.5525 14.105C12.705 14.0287 12.8745 13.9926 13.0449 14.0003C13.2153 14.0079 13.3808 14.059 13.5259 14.1487C13.671 14.2384 13.7907 14.3637 13.8736 14.5127C13.9566 14.6617 14.0001 14.8295 14 15V23ZM21 22C21.2652 22 21.5196 22.1054 21.7071 22.2929C21.8946 22.4804 22 22.7348 22 23C22 23.2652 21.8946 23.5196 21.7071 23.7071C21.5196 23.8946 21.2652 24 21 24H17C16.8143 24 16.6322 23.9483 16.4743 23.8507C16.3163 23.753 16.1886 23.6133 16.1056 23.4472C16.0225 23.2811 15.9874 23.0952 16.004 22.9102C16.0207 22.7252 16.0886 22.5486 16.2 22.4L19.7975 17.6038C19.8793 17.4948 19.938 17.3703 19.97 17.2379C20.002 17.1054 20.0066 16.9678 19.9835 16.8336C19.9604 16.6993 19.9101 16.5712 19.8357 16.457C19.7612 16.3429 19.6643 16.2452 19.5508 16.1699C19.4372 16.0945 19.3095 16.0432 19.1754 16.019C19.0413 15.9949 18.9037 15.9983 18.771 16.0292C18.6383 16.0602 18.5134 16.1179 18.4038 16.1988C18.2942 16.2798 18.2023 16.3823 18.1338 16.5C18.07 16.6174 17.9834 16.7208 17.8791 16.8041C17.7748 16.8875 17.6548 16.9491 17.5263 16.9853C17.3977 17.0215 17.2633 17.0316 17.1308 17.0151C16.9983 16.9985 16.8704 16.9555 16.7548 16.8887C16.6391 16.8219 16.5381 16.7327 16.4575 16.6262C16.3769 16.5197 16.3185 16.3981 16.2857 16.2687C16.2528 16.1392 16.2462 16.0045 16.2663 15.8725C16.2864 15.7405 16.3327 15.6138 16.4025 15.5C16.7328 14.9284 17.2425 14.4817 17.8525 14.2291C18.4625 13.9766 19.1388 13.9323 19.7765 14.1032C20.4142 14.2741 20.9778 14.6506 21.3798 15.1743C21.7818 15.6981 21.9998 16.3398 22 17C22.0021 17.6522 21.7895 18.2869 21.395 18.8062L19 22H21ZM6 10V6H9V7C9 7.26522 9.10536 7.51957 9.29289 7.70711C9.48043 7.89464 9.73478 8 10 8C10.2652 8 10.5196 7.89464 10.7071 7.70711C10.8946 7.51957 11 7.26522 11 7V6H21V7C21 7.26522 21.1054 7.51957 21.2929 7.70711C21.4804 7.89464 21.7348 8 22 8C22.2652 8 22.5196 7.89464 22.7071 7.70711C22.8946 7.51957 23 7.26522 23 7V6H26V10H6Z"
                fill="#A3AED0"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_336">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
})
Input.displayName = "Input"

export { Input }
