import Container from "@/components/modules/container/Container";
import Sidebar from "@/components/templates/userPanel/Sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex gap-5">
      <Sidebar />
      <Container userPanelTitle="Your profile">
        <div className="px-4 py-10 sm:px-10">{children} </div>
      </Container>
    </main>
  );
}
