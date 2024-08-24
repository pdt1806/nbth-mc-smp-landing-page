import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { serverIP } from '../../utils/const';
import { LanguagePicker } from '../LanguagePicker';
import classes from './index.module.css';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const { t } = useTranslation();

  const links = [
    { link: '#about', label: t('header.about') },
    { link: '#stats', label: t('header.stats') },
    { link: '#gallery', label: t('header.gallery') },
  ];

  const items = links.map((link) => (
    <Link key={link.label} to={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Title
            order={3}
            component={Link}
            // @ts-expect-error 'to' prop should work
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {serverIP}
          </Title>
          <Group gap={5} visibleFrom="sm">
            {items}
            <LanguagePicker />
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
