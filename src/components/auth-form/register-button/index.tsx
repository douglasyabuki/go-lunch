import * as React from 'react';
import Link from 'next/link';

interface RegisterButtonProps {
}

export default function RegisterButton (props: RegisterButtonProps) {
  return (
    <div className='justify-around m-auto flex font-semibold mb-4 w-[220px] xs:h-[50px] xs:w-[250px] md:w-[300px]'>
        <p>New here?</p>
      <Link href={'/register'} className='hover:text-not-so-white transition-all duration-200'>Register</Link>
    </div>
  );
}
