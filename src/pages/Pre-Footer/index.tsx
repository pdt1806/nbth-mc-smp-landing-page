import { Button, Center, Container, Group, Overlay, Stack, Text, Title } from '@mantine/core';
import { IconBrandDiscord, IconBrandMinecraft } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { copyServerIP } from '../../utils/utils';
import classes from './index.module.css';

export function PreFooter() {
  const { t } = useTranslation();

  const buttons = (
    <>
      <Button
        className={classes.button}
        color="green"
        size="lg"
        onClick={() => copyServerIP({ t })}
      >
        <Group gap="xs">
          <IconBrandMinecraft style={{ width: 20, height: 20 }} />
          <Text fw="bold">{t('preFooter.joinServer')}</Text>
        </Group>
      </Button>
      <Button
        className={classes.button}
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
        <Title className={classes.title}>{t('preFooter.title')}</Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {t('preFooter.description')}
          </Text>
        </Container>

        <Center mt="xl">
          <Group gap="xs" visibleFrom="xs">
            {buttons}
          </Group>
          <Stack gap="xs" hiddenFrom="xs" w="100%" mx="md">
            {buttons}
          </Stack>
        </Center>
      </div>
    </div>
  );
}
