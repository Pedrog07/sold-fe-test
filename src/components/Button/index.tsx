interface ButtonProps {
  children: React.ReactNode
  className?: string
}

export const Button = ({ children, className = '' }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center w-full bg-orange text-white font-bold py-3 rounded h-[42px] ${className}`}
    >
      {children}
    </button>
  )
}
