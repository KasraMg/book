import Container from "@/components/modules/container/Container";
import Form from "@/components/templates/login/Form";
import Model from "@/components/templates/Model"; 

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
