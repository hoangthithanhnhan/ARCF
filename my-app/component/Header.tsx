import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="py-[40px] px-[72px]">
      <nav className="flex items-center justify-between">
        <Link href="" className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={306} height={76}/>
        </Link> 
        <div className="hidden lg:flex justify-center flex-1">
          <div className="flex space-x-13.5 text-6xl">
            {["About", "How We Give", "Donations & Support", "News", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xl font-semibold text-[var(--body)]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link
            href="#"
            className="bg-[var(--green)] text-[var(--body)] py-3.5 px-[50px] rounded-full font-semibold text-[1.25rem] no-underline"
          >
            Donate
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header