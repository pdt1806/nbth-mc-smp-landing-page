import { notifications } from '@mantine/notifications';
import { IconClipboardCheck } from '@tabler/icons-react';
import { TFunction } from 'i18next';
import { serverIP } from './const';

export const copyServerIP = ({ t }: { t: TFunction<'translation', undefined> }) => {
  notifications.show({
    title: t('copyServerIP.title'),
    message: t('copyServerIP.message'),
    color: 'green',
    icon: <IconClipboardCheck />,
  });
  navigator.clipboard.writeText(serverIP);
};
