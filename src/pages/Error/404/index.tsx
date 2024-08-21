import { Button, Center, Container, Image, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <Container>
      <Image src="images/404.svg" alt="404" w="80vw" maw={500} mx="auto" mb="xl" />
      <Title order={1} ta="center" pt="xl">
        Nothing to see here
      </Title>
      <Text fz="md" c="dimmed" ta="center" mt="md">
        The page you&apos;re trying to access doesn&apos;t exist. You may have entered the address
        incorrectly, or the page might have been moved to a different URL. If you believe this is a
        mistake, please contact support.
      </Text>
      <Center mt="xl">
        <Button color="green" variant="outline" size="lg" component={Link} to="/">
          Get back to home page
        </Button>
      </Center>
    </Container>
  );
}
