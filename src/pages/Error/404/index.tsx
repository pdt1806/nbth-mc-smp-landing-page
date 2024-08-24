import { Button, Center, Container, Image, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Error404() {
  const { t } = useTranslation();
  return (
    <Container>
      <Image src="images/404.svg" alt="404" w="80vw" maw={500} mx="auto" mb="xl" />
      <Title order={1} ta="center" pt="xl">
        {t('error404.title')}
      </Title>
      <Text fz="md" c="dimmed" ta="center" mt="md">
        {t('error404.description')}
      </Text>
      <Center mt="xl">
        <Button color="green" variant="outline" size="lg" component={Link} to="/">
          {t('error404.button')}
        </Button>
      </Center>
    </Container>
  );
}
