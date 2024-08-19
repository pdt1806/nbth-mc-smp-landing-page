import { Button, Center, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './index.module.css';

export function HeroHeader() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={1} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Craft Your Legacy on{' '}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: 'lightgreen', to: 'green' }}
          >
            45.119.83.209
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Dive into endless adventures with a thriving community. Build, battle, and explore the
            limitless possibilities. Join us today!
          </Text>
        </Container>

        <Center mt="xl">
          <Button className={classes.button} variant="white" size="lg" c="#286422">
            Get IP Address
          </Button>
        </Center>
      </div>
    </div>
  );
}
