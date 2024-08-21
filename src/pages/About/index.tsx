import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import {
  IconBrandAsana,
  IconHandStop,
  IconHeartHandshake,
  IconHeartRateMonitor,
} from '@tabler/icons-react';
import { serverIP } from '../../utils/const';
import classes from './index.module.css';

const data = [
  {
    icon: IconHeartHandshake,
    title: 'Respect All Players',
    description: 'Maintain a friendly and inclusive atmosphere where everyone feels welcome.',
  },
  {
    icon: IconHandStop,
    title: 'No Griefing',
    description:
      'Protect the hard work of others. Griefing is strictly prohibited to ensure a positive experience for all.',
  },
  {
    icon: IconBrandAsana,
    title: 'Collaborative Builds',
    description:
      'Team up with fellow players to create massive, awe-inspiring structures that push the boundaries of Minecraft.',
  },
  {
    icon: IconHeartRateMonitor,
    title: 'Active Moderation',
    description:
      'Our dedicated staff is always available to assist and ensure that the server remains a safe and enjoyable place for all players.',
  },
];

export function About() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.icon?.name}>
      <ThemeIcon variant="light" color="green" className={classes.itemIcon} size={60} radius="md">
        <item.icon />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper} id="about">
      <Text className={classes.supTitle}>About this Server</Text>

      <Title className={classes.title} order={2}>
        {serverIP} is <span className={classes.highlight}>not</span> just a Server; it&apos;s a
        Journey
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Born from a passionate coding community, this server was created to bring us all together
          for fun and adventure. Join us as we build, explore, and enjoy the game we love in a space
          designed for collaboration and creativity.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt="xl">
        {items}
      </SimpleGrid>
    </Container>
  );
}
