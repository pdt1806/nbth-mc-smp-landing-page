import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { serverIP } from '../../utils/const';
import classes from './index.module.css';

const links = [
  { link: '#about', label: 'About' },
  { link: '#stats', label: 'Statistics' },
  { link: '#gallery', label: 'Gallery' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

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
            // @ts-expect-error something's wrong i can feel it
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {serverIP}
          </Title>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
