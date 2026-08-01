import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth()
    if(!session) {
        redirect('/login')
    }

    return (
        <div>
            <main>
                <div className=" px-5 sm:px-20 md:px-28 lg:px-36 2xl:px-44 ">
                    <Header />
                    {children}
                </div>
                <Footer />
            </main>
        </div>
    );
}