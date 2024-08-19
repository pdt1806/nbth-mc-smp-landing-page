import { Button, Center, Container, Group, Overlay, Stack, Text, Title } from '@mantine/core';
import { IconBrandDiscord, IconBrandMinecraft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

export function PreFooter() {
  const buttons = (
    <>
      <Button className={classes.control} color="green" size="lg">
        <Group gap="xs">
          <IconBrandMinecraft style={{ width: 20, height: 20 }} />
          <Text fw="bold">Join the Server</Text>
        </Group>
      </Button>
      <Button
        className={classes.control}
        color="#5865F2"
        size="lg"
        component={Link}
        to="https://discord.gg/folody"
        target="_blank"
      >
        <Group gap="xs">
          <IconBrandDiscord style={{ width: 20, height: 20 }} />
          <Text fw="bold">Folody Community</Text>
        </Group>
      </Button>
    </>
  );

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={1} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Ready to Join the Adventure?</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Don’t miss out on the excitement! Dive into a world of creativity, challenge, and
            community. Click below to start your journey with us today.
          </Text>
        </Container>

        <Center>
          <Group gap="xs" mt="xl" visibleFrom="xs">
            {buttons}
          </Group>
          <Stack gap="xs" mt="xl" hiddenFrom="xs">
            {buttons}
          </Stack>
        </Center>
      </div>
    </div>
  );
}
