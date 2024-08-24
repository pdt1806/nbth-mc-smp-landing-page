import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import {
  IconBrandAsana,
  IconHandStop,
  IconHeartHandshake,
  IconHeartRateMonitor,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { serverIP } from '../../utils/const';
import classes from './index.module.css';

export function About() {
  const { t } = useTranslation();

  const data = [
    {
      icon: IconHeartHandshake,
      title: t('about.respectful.title'),
      description: t('about.respectful.description'),
    },
    {
      icon: IconHandStop,
      title: t('about.noGriefing.title'),
      description: t('about.noGriefing.description'),
    },
    {
      icon: IconBrandAsana,
      title: t('about.collaborative.title'),
      description: t('about.collaborative.description'),
    },
    {
      icon: IconHeartRateMonitor,
      title: t('about.activeModeration.title'),
      description: t('about.activeModeration.description'),
    },
  ];

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
      <Text className={classes.subtitle}>{t('about.subtitle')}</Text>

      <Title className={classes.title} order={2}>
        {serverIP} {t('about.titleLeft')}{' '}
        <span className={classes.highlight}>{t('about.titleNot')}</span> {t('about.titleRight')}
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          {t('about.description')}
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt="xl">
        {items}
      </SimpleGrid>
    </Container>
  );
}
