import Container from "@/components/modules/container/Container";
import Authors from "@/components/templates/index/Authors/Authors";
import Books from "@/components/templates/index/Books/Books";
export default function Home() {
  return (
    <Container>
      <main className="px-10 py-10">
        <Books />
        <Authors />
      </main>
    </Container>
  );
}
