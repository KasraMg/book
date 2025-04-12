import Container from "@/components/modules/container/Container";
import List from "@/components/modules/list/List";
import Authors from "@/components/templates/authors/Authors"; 

const page = () => {
  return (
    <div className="flex gap-5"> 
      <List mainWordTitle="Books" type="books" title="you might find interesting" /> 
      <Container>
        <Authors />
      </Container>
    </div>
  );
};

export default page;
