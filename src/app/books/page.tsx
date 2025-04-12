import Container from "@/components/modules/container/Container";
import List from "@/components/modules/list/List";
import Books from "@/components/templates/books/Books";

const page = () => {
  return (
    <div className="flex gap-5">
      <List
        mainWordTitle="Authors"
        type="authors"
        title="you might find interesting"
      />

      <Container>
        <Books />
      </Container>
    </div>
  );
};

export default page;
