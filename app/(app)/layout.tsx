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
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    );
}