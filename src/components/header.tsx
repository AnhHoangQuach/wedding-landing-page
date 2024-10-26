import Image from 'next/image'

export default function header() {
  return (
    <div className="py-4 px-[200px] flex items-center justify-between">
      <Image src="/images/logo.png" alt="SAM NGUYEN" width={206} height={32} />
      <div>456</div>
    </div>
  )
}
