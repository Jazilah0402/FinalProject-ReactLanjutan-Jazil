
import { useNavigate } from "react-router-dom";
import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/student");
  };
  return (
    <>
      <Center
        w="100%"
        h="100vh"
        bg={
          "pink"
        }
      >
        <VStack spacing={6}>
          <Heading as={"h1"} size={"3xl"}>
            Student Portal
          </Heading>
          <Button onClick={handleClick} data-testid="student-btn">
            All Student
          </Button>
        </VStack>
      </Center>
      <Footer />
    </>
  );


};

export default Home;