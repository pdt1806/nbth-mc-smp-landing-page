import { Group, Image, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languagesNames } from '../../utils/const';
import classes from './index.module.css';

export function LanguagePicker() {
  const { i18n } = useTranslation();

  const data = {
    en: { label: languagesNames.en, image: 'gb', code: 'en' },
    vi: { label: languagesNames.vi, image: 'vn', code: 'vi' },
  };

  const [opened, setOpened] = useState(false);
  // @ts-expect-error 'i18n.language' should work
  const [selected, setSelected] = useState(data[i18n.language]);

  useEffect(() => {
    i18n.changeLanguage(selected.code);
  }, [selected]);
  const items = Object.values(data).map((item) => (
    <Menu.Item
      leftSection={<Image src={`images/flags/${item.image}.svg`} w={18} h={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <Image src={`images/flags/${selected.image}.svg`} width={22} height={22} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
