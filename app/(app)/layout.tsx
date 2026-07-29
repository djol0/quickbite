import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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