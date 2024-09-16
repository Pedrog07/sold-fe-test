import { icons } from '@/utils'

export const cards = [
  {
    icon: icons.users,
    title: 'Opportunity',
    content: (
      <div className="grid grid-cols-1 divide-y-2 divide-dashed border-neutral-500 px-10 mt-7">
        <div className="flex justify-between items-center p-[20px_15px_20px_0]">
          <p className="text-base text-neutral-900 font-normal max-w-[135px]">SOLD.com Leads</p>
          <p className="text-[32px] text-blue-light font-bold">500</p>
        </div>
        <div className="flex flex-col p-[20px_15px_20px_0]">
          <div className="flex items-center justify-between w-full">
            <p className="text-base text-neutral-900 font-normal max-w-[135px]">
              Customers we promoted you to
            </p>
            <p className="text-2xl text-blue-light font-bold">100</p>
          </div>
          <div className="flex justify-between items-center gap-x-4 rounded-sm mt-4 md:justify-end md:mt-2">
            <div className="flex w-[146px] h-1 bg-neutral-400 md:w-[72px]">
              <div className="bg-blue-light w-[30%]"></div>
            </div>
            <p className="text-xs text-blue-light font-semibold">(30%)</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-[20px_15px_20px_0]">
          <p className="text-base text-neutral-900 font-normal max-w-[135px]">
            Appointments set with you
          </p>
          <p className="text-2xl text-blue-light font-bold">30</p>
        </div>
      </div>
    )
  },
  {
    icon: icons.happyFace,
    title: 'Wins',
    content: (
      <>
        <div className="grid grid-cols-1 divide-y-2 divide-dashed border-neutral-500 px-10 mt-7">
          <div className="flex justify-between items-center p-[20px_15px_20px_0]">
            <p className="text-base text-neutral-900 font-normal max-w-[135px]">
              Your signed agreements
            </p>
            <p className="text-[32px] text-green font-bold">15</p>
          </div>
          <div className="flex justify-between items-center p-[20px_15px_20px_0]">
            <p className="text-base text-neutral-900 font-normal max-w-[135px]">Your closings</p>
            <p className="text-[32px] text-green font-bold">10</p>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y-2 divide-solid border-neutral-500 bg-neutral-300 px-10 py-5 md:py-0">
          <div className="flex justify-end items-center p-[18px_30px] md:p-[18px_0]">
            <div className="flex flex-col gap-y-2 items-end">
              <p className="text-base text-neutral-900 font-normal">Your closed volume</p>
              <p className="text-2xl text-green font-bold">$3,000,000</p>
            </div>
          </div>
          <div className="flex justify-end items-center p-[18px_30px] md:p-[18px_0]">
            <div className="flex flex-col gap-y-2 items-end">
              <p className="text-base text-neutral-900 font-normal">Your commission (est)</p>
              <p className="text-2xl text-green font-bold">$500,00</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    icon: icons.sadFace,
    title: 'Losses',
    content: (
      <>
        <div className="grid grid-cols-1 divide-y-2 divide-dashed border-neutral-500 px-10 mt-7">
          <div className="flex justify-between items-center p-[20px_15px_20px_0]">
            <p className="text-base text-neutral-900 font-normal max-w-[157px] md:max-w-[220px]">
              Appointments that signed with another agent
            </p>
            <p className="text-[32px] text-orange font-bold">15</p>
          </div>
          <div className="flex justify-between items-center p-[20px_15px_20px_0]">
            <p className="text-base text-neutral-900 font-normal max-w-[135px]">Lost closings</p>
            <p className="text-[32px] text-orange font-bold">10</p>
          </div>
        </div>
        <div className="grid grid-cols-1 divide-y-2 divide-solid border-neutral-500 bg-neutral-300 px-10 py-5 md:py-0">
          <div className="flex justify-end items-center p-[18px_30px] md:p-[18px_0]">
            <div className="flex flex-col gap-y-2 items-end">
              <p className="text-base text-neutral-900 font-normal">Lost volume</p>
              <p className="text-2xl text-orange font-bold">$3,000,000</p>
            </div>
          </div>
          <div className="flex justify-end items-center p-[18px_30px] md:p-[18px_0]">
            <div className="flex flex-col gap-y-2 items-end">
              <p className="text-base text-neutral-900 font-normal">Lost commission (est)</p>
              <p className="text-2xl text-orange font-bold">$500,00</p>
            </div>
          </div>
        </div>
      </>
    )
  }
]
