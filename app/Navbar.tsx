import Link from 'next/link';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { FiLogIn } from 'react-icons/fi';
import { auth, signIn, signOut } from '@/auth';
import LoginButton from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '@/components/auth/logout-button';

const Navbar = async () => {
    const user = await auth();

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
            {/* Left: Logo and Menu Links */}
            <div className="flex items-center">
                <span className="text-2xl font-bold mr-4">MyApp</span>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="flex items-center">
                            <FaHome className="mr-2" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="flex items-center">
                            <FaInfoCircle className="mr-2" /> About
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                {!user ? (
                    <LoginButton mode="modal" asChild>
                        <Button variant="secondary" size="lg" className="text-lg">
                            <FiLogIn className="mr-2" /> Sign in
                        </Button>
                    </LoginButton>
                ) : (
                    <LogoutButton  >
                        <Button variant="secondary" size="lg" className="text-lg">
                            <IoExitOutline className="mr-2" /> Logout
                        </Button>
                    </LogoutButton>

                )}
            </div>
        </nav>
    );
};

export default Navbar;
