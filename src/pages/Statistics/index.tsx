import { Box, Container, Grid, rem, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import { IconPlug, IconServer, IconUsers, IconVersions } from '@tabler/icons-react';
import classes from './index.module.css';

const features = [
  {
    icon: IconVersions,
    title: 'Version',
    stat: '1.19 - 1.21',
    description:
      'Stay updated with the latest features and improvements. Our server runs the newest version to ensure you have the best gameplay experience.',
  },
  {
    icon: IconUsers,
    title: 'Current Players',
    stat: '23',
    description: 'Be active and join the fun!',
  },
  {
    icon: IconServer,
    title: 'Uptime',
    stat: '99.9%',
    description: 'Our server is almost always online, ready for your next adventure.',
  },
  {
    icon: IconPlug,
    title: 'Custom Plugins',
    stat: '20+',
    description: 'Enjoy a tailored gameplay experience with our custom-developed plugins.',
  },
];

export function Statistics() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'green', to: 'darkgreen' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500} c="black">
        {feature.title} - <strong>{feature.stat}</strong>
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Box className={classes.wrapper} id="stats">
      <Container size="xl">
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2} c="black">
              Statistics
            </Title>
            <Text c="dimmed">
              Get up-to-date information on the server&apos;s performance and player activity.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
