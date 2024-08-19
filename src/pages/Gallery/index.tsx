import { Badge, Container, Text, Title } from '@mantine/core';
import classes from './index.module.css';

export default function Gallery() {
  return (
    <Container size="xl" className={classes.wrapper}>
      <Badge color="green" className={classes.badge} mb="md">
        Cool Images
      </Badge>
      <Title order={1}>In-Game Gallery</Title>
      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Explore a curated selection of breathtaking screenshots and highlights from our server.
          See the creativity and adventures that make our community unique.
        </Text>
      </Container>
    </Container>
  );
}
