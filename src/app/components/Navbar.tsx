import Link from 'next/link';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-50">
      <Link
        href={'/'}
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Next Commerce
      </Link>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="border rounded-md py-1.5 px-3">Fazer login</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Navbar;
