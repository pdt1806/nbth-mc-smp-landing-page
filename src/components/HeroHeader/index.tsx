import { Button, Center, Container, Overlay, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { serverIP } from '../../utils/const';
import { copyServerIP } from '../../utils/utils';
import classes from './index.module.css';

export function HeroHeader() {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={1} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {t('heroHeader.title')}{' '}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: 'lightgreen', to: 'green' }}
          >
            {serverIP}
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {t('heroHeader.description')}
          </Text>
        </Container>

        <Center mt="xl">
          <Button
            className={classes.button}
            variant="white"
            size="lg"
            c="#286422"
            onClick={copyServerIP}
          >
            {t('heroHeader.button')}
          </Button>
        </Center>
      </div>
    </div>
  );
}
