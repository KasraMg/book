import Container from "@/components/modules/container/Container"; 
import Books from "@/components/templates/book/Books";
import Details from "@/components/templates/book/Details";

const page = () => {
  return (
    <div className="flex gap-5">
      <Books />
      <Container>
        <Details />
      </Container> 
    </div>
  );
};

export default page;
