import Container from "@/components/modules/container/Container";
import List from "@/components/modules/list/List";
import Details from "@/components/templates/book/Details";

const page = () => {
  return (
    <div className="flex gap-5">
      <List mainWordTitle="Other" type="books" title="books by this author" />
      <Container>
        <Details />
      </Container>
    </div>
  );
};

export default page;
