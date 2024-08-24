import { Box, Container, Grid, rem, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import { IconPlug, IconServer, IconUsers, IconVersions } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import classes from './index.module.css';

export function Statistics() {
  const { t } = useTranslation();

  const features = [
    {
      icon: IconVersions,
      title: t('statistics.version.title'),
      stat: '1.19 - 1.21',
      description: t('statistics.version.description'),
    },
    {
      icon: IconUsers,
      title: t('statistics.players.title'),
      stat: '23',
      description: t('statistics.players.description'),
    },
    {
      icon: IconServer,
      title: t('statistics.uptime.title'),
      stat: '99.9%',
      description: t('statistics.uptime.description'),
    },
    {
      icon: IconPlug,
      title: t('statistics.plugins.title'),
      stat: '13',
      description: t('statistics.plugins.description'),
    },
  ];

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
        <Grid gutter={60}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2} c="black">
              {t('statistics.title')}
            </Title>
            <Text c="dimmed">{t('statistics.description')}</Text>
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
