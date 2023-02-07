import { If } from "../../helpers"

const BatteryIcon = ({ discharged }: { discharged?: boolean }) => {

  return (
    <If
      condition={discharged}
      Then={
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_23_1297)">
            <path d="M22.6693 8H4.0026C2.52984 8 1.33594 9.19391 1.33594 10.6667V21.3333C1.33594 22.8061 2.52984 24 4.0026 24H22.6693C24.142 24 25.3359 22.8061 25.3359 21.3333V10.6667C25.3359 9.19391 24.142 8 22.6693 8Z" stroke="black" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30.6719 17.3346V14.668" stroke="black" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <defs>
            <clipPath id="clip0_23_1297">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      Else={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.19M15 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V16C19 16.5304 18.7893 17.0391 18.4142 17.4142C18.0391 17.7893 17.5304 18 17 18H13.81"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 13V11"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6L7 12H13L9 18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    />
  )
}

export default BatteryIcon