import { ActionIcon, Container, Group, rem, Title } from '@mantine/core';
import { IconBrandDiscord, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

const links = [
  { link: 'https://x.com', icon: IconBrandX },
  { link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0', icon: IconBrandYoutube },
  { link: 'https://discord.gg/folody', icon: IconBrandDiscord },
];

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title order={3}>45.119.83.209</Title>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          {links.map((link) => (
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component={Link}
              to={link.link}
              target="_blank"
            >
              <link.icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </div>
  );
}
