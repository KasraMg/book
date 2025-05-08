import Container from "@/components/modules/container/Container";
import Model from "@/components/templates/Model";
import Form from "@/components/templates/register/Form";

const page = () => {
  return (
    <Container>
      <div className="flex flex-wrap-reverse justify-evenly rounded-md px-7 py-5 sm:py-16">
        <Form />
        <Model />
      </div>
    </Container>
  );
};

export default page;
