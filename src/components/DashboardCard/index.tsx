interface DashboardCardProps {
  icon?: React.ReactNode
  title: string
  children: React.ReactNode
}
export const DashboardCard = ({ icon, title, children }: DashboardCardProps) => {
  return (
    <div className="flex flex-col w-full rounded border border-solid border-neutral-400">
      <div className="flex flex-col w-full px-10">
        {icon && <span className="mt-[42px]">{icon}</span>}
        <h1 className="mt-4 text-[38px] font-normal">{title}</h1>
      </div>
      {children}
    </div>
  )
}
