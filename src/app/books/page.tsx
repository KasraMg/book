import Container from "@/components/modules/container/Container";
import Authors from "@/components/templates/books/Authors";
import Books from "@/components/templates/books/Books";

const page = () => {
  return (
    <div className="flex gap-5">
      <Authors />
      <Container>
        <Books />
      </Container>
    </div>
  );
};

export default page;
