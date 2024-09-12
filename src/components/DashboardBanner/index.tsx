import { icons } from '@/utils'
import { Button } from '../Button'

export const DashboardBanner = () => {
  return (
    <div className="flex items-center w-full bg-gradient-to-b from-[#25282A_84%] to-[white_16%] min-h-[431px] flex-col p-4 md:p-0 md:from-[#25282A_81%] md:to-[white_19%]">
      <div className="flex flex-col w-full mt-9 md:w-3/4 md:mt-16 md:flex-row">
        <div className="flex w-full flex-col items-start md:p-[0_8px] md:w-1/2">
          <h3 className="text-2xl font-semibold text-white">SOLD.com Difference</h3>
          <p className="text-base font-normal text-white mt-4 md:max-w-[480px]">
            Unlike other lead sources and portals, we don&apos;t focus on worthless metrics like
            impressions or even leads. SOLD.com shows you how many clients actually cross the finish
            line and buy or sell a home.
            <br />
            <br />
            After all, isn&apos;t that the metric that matters most?
          </p>
        </div>
        <div className="flex w-full justify-center items-center md:w-1/2">
          <div className="flex flex-col w-full bg-neutral-100 rounded-xl p-[17px_20px_35px_22px] mt-12 sm:p-[22px_34px_50px] md:mt-0 md:max-w-[444px]">
            <div>
              <p className="text-sm font-normal text-neutral-900">
                In your zips over the last 18 months, we&apos;ve originated:
              </p>
            </div>
            <div className="flex mt-6 ">
              <div className="flex flex-col w-1/2 sm:p-[0_0_0_16px]">
                {icons.wave}
                <p className="text-3xl font-semibold text-neutral-900 mt-3">$20M</p>
                <p className="text-xs font-semibold text-neutral-900 opacity-70 mt-[5px]">
                  in sales
                </p>
              </div>
              <div className="flex flex-col w-1/2 p-[0_0_0_27px] border-solid border-l border-neutral-200 md:p-[0_0_0_51px]">
                {icons.slice}
                <p className="text-3xl font-semibold text-neutral-900 mt-3">$500K</p>
                <p className="text-xs font-semibold text-neutral-900 opacity-70 mt-[5px] whitespace-nowrap">
                  in Commissions (est)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full min-h-[201px] bg-neutral-100 rounded-lg shadow-[0px_0px_12px_#00000029] p-[19px_24px_23px] mt-[26px] md:mt-[48px] md:w-[80%] md:p-[28px_24px_26px]">
        <div className="flex w-full flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 md:pl-[30px]">
            <p className="text-base font-normal text-neutral-900 max-w-[297px] sm:max-w-[430px]">
              Our referrals are routed to the top performing agents in our network. Rankings are
              based on numerous factors, including:
            </p>
            <div className="grid grid-cols-1 gap-y-2 mt-3 md:mt-4 md:grid-cols-2">
              <div className="flex items-center">
                <span className="text-lg font-bold text-orange">+</span>
                <p className="text-sm font-normal text-neutral-900 ml-4">Transaction Statistics</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-orange">+</span>
                <p className="text-sm font-normal text-neutral-900 ml-4">Responsiveness</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-orange">+</span>
                <p className="text-sm font-normal text-neutral-900 ml-4">Customer Satisfaction</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold text-orange">+</span>
                <p className="text-sm font-normal text-neutral-900 ml-4">Portal Updates</p>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2">
            <div className="flex flex-col w-full rounded-xl bg-neutral-300 p-[19px_16px] md:p-[23px_20px]">
              <div className="flex items-center md:justify-between">
                <div className="flex w-full justify-between items-center gap-4 md:justify-normal md:w-auto">
                  <p className="text-xl font-bold text-neutral-900 max-w-[260px]">
                    Your average rank in the markets you serve is:
                  </p>
                  <span className="flex items-end font-bold text-orange text-4xl leading-6 tracking-wide">
                    25 {icons.arrowDown}
                  </span>
                </div>
                <Button className="hidden md:flex md:max-w-[117px]">Learn More</Button>
              </div>
              <div className="mt-4">
                <p className="text-base text-neutral-900 text-sm font-normal">
                  Your ranking will directly affect the number of referrals you receive. Learn about
                  our <span className="text-orange">Guaranteed Display</span> program to help
                  improve your ranking.
                </p>
              </div>
              <Button className="mt-1 md:hidden">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
