import { Button, DashboardBanner, DashboardCard } from '@/components'
import { cards } from './constants'

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full ">
      <DashboardBanner />
      <div className="flex flex-col w-full mt-10 px-4 md:px-8">
        <div className="flex items-start md:items-center">
          <span className="w-4 h-8 bg-orange rounded md:w-4 md:h-8"></span>
          <p className="text-base font-bold text-neutral-900 ml-3 mt-1 max-w-[294px] md:max-w-none">
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
      <div className="flex flex-col items-center gap-5 my-14">
        <p className="text-xl text-center font-bold text-neutral-900 px-5">
          Unsatisfied with these stats? We can help you improve them.
        </p>
        <Button className="max-w-[165px]">Schedule A Call</Button>
      </div>
    </div>
  )
}

export default Dashboard
