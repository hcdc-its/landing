import { cn } from '~/lib/utils'

export const Lights: React.FC<{ className?: React.ReactNode }> = ({ className }) => (
  <div className={cn('w-full h-full overflow-hidden', className)}>
    <div
      className={'w-full h-full relative bottom-[-200px] '}
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%,var(--its-red) 0deg,var(--its-red) 180deg,var(--gray-700) 1turn)',
        filter: 'blur(75px)',
        opacity: '20%'
      }}
    />
  </div>
)
