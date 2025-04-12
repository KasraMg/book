import Container from "@/components/modules/container/Container";
import Authors from "@/components/templates/index/authors/Authors"; 
import Books from "@/components/templates/index/books/Books";
export default function Home() {
  return (
    <Container>
      <main className="sm:px-10 px-4 py-10">
        <Books />
        <Authors />
      </main>
    </Container>
  );
}
