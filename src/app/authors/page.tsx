import Container from "@/components/modules/container/Container";
import Authors from "@/components/templates/authors/Authors";
import Books from "@/components/templates/authors/Books";

const page = () => {
  return (
    <div className="flex gap-5">
      <Books />
      <Container>
        <Authors />
      </Container>
    </div>
  );
};

export default page;
