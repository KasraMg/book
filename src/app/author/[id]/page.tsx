import Container from "@/components/modules/container/Container";
import List from "@/components/modules/list/List"; 
import Details from "@/components/templates/author/Details";

const page = () => {
  return (
    <div className="flex gap-5">
      <List
        type="authors"
        title="famous authors"
        mainWordTitle="Other"
      /> 
      <Container>
        <Details />
      </Container>
    </div>
  );
};

export default page;
 