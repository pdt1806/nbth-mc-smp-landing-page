import { Box, Button, Flex, Group, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconHeart, IconX } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HeaderNoti() {
  const isMobile = useMediaQuery('(max-width: 48em)');

  const { t, i18n } = useTranslation();

  return (
    <Flex
      bg="darkgreen"
      p="xl"
      c="white"
      justify="space-between"
      align="center"
      style={{ position: 'sticky', top: 0, zIndex: 2 }}
      direction={isMobile ? 'column' : 'row'}
      id="header-noti"
    >
      <Group gap="xl" mr="xl">
        <IconHeart size={64} />
        <Box>
          <Title order={2}>{t('fundraiser.title')}</Title>
          <Text size="md" mt="sm">
            {t('fundraiser.descriptionLeft')} <strong>{t('fundraiser.eventName')}</strong>{' '}
            {t('fundraiser.descriptionRight')}
          </Text>
        </Box>
      </Group>
      <Group gap="xl" miw={i18n.language === 'en' ? 210 : 260} m="lg">
        <Button
          color="white"
          variant="light"
          size="lg"
          component={Link}
          to="https://app.schoolfundr.org/fund/antelopechoir/nmcDH"
          target="_blank"
        >
          {t('fundraiser.button')}
        </Button>
        <IconX
          size={24}
          onClick={() => {
            const headerNoti = document.getElementById('header-noti');
            if (headerNoti) {
              headerNoti.style.display = 'none';
            }
          }}
          style={{ cursor: 'pointer' }}
        />
      </Group>
    </Flex>
  );
}
