import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";


export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <div className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Beauty Kids Wear Logo"
                                width={40}
                                height={40}
                                className="mr-2"
                            />
                            <p className="font-bold text-xl">Beauty Kids Wear</p>
                        </div>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarActions />
                </div>  
            </Container>
        </div>
    );
}
 
export default Navbar;