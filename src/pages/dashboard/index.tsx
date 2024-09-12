import { Button, DashboardBanner, DashboardCard } from '@/components'
import { icons } from '@/utils'

const Dashboard = () => {
  const cards = [
    {
      icon: icons.users,
      title: 'Opportunity',
      content: (
        <div className="grid grid-cols-1 divide-y divide-dashed border-neutral-500 px-10 mt-7">
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
          <div className="grid grid-cols-1 divide-y divide-dashed border-neutral-500 px-10 mt-7">
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
          <div className="grid grid-cols-1 divide-y divide-solid border-neutral-500 bg-neutral-300 px-10 py-5 md:py-0">
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
          <div className="grid grid-cols-1 divide-y divide-dashed border-neutral-500 px-10 mt-7">
            <div className="flex justify-between items-center p-[20px_15px_20px_0]">
              <p className="text-base text-neutral-900 font-normal max-w-[220px]">
                Appointments that signed with another agent
              </p>
              <p className="text-[32px] text-orange font-bold">15</p>
            </div>
            <div className="flex justify-between items-center p-[20px_15px_20px_0]">
              <p className="text-base text-neutral-900 font-normal max-w-[135px]">Lost closings</p>
              <p className="text-[32px] text-orange font-bold">10</p>
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-solid border-neutral-500 bg-neutral-300 px-10 py-5 md:py-0">
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
  return (
    <div className="flex flex-col w-full ">
      <DashboardBanner />
      <div className="flex flex-col w-full mt-10 px-4 md:px-8">
        <div className="flex items-center">
          <span className="w-4 h-8 bg-orange rounded"></span>
          <p className="text-base font-bold text-neutral-900 ml-3">
            Since you joined our network, here&apos;s what we&apos;ve been up to in your zip codes:
          </p>
        </div>
        <div className="grid grid-cols-1 mt-8 gap-y-7 md:mt-3 md:grid-cols-2 md:gap-x-4 lg:gap-y-0 lg:grid-cols-3">
          {cards.map(({ icon, title, content }, index) => (
            <DashboardCard key={`card-${index}`} icon={icon} title={title}>
              {content}
            </DashboardCard>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 my-16">
        <p className="text-xl text-center font-bold text-neutral-900 ml-3 px-6">
          Unsatisfied with these stats? We can help you improve them.
        </p>
        <Button className="max-w-[165px]">Schedule A Call</Button>
      </div>
    </div>
  )
}

export default Dashboard
