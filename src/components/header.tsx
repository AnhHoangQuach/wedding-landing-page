import Navigation from '@/components/navigation'
import ModeToggle from '@/components/mode-toggle'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="py-4 px-[200px] flex items-center justify-between">
      <Link href="/">
        <Image src="/images/logo.png" alt="SAM NGUYEN" width={206} height={32} />
      </Link>
      <Navigation />
      <div className='min-w-[206px] flex justify-end'>
        <ModeToggle />
      </div>
    </div>
  )
}
