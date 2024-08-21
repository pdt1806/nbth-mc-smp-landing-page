import { notifications } from '@mantine/notifications';
import { IconClipboardCheck } from '@tabler/icons-react';
import { serverIP } from './const';

export const copyServerIP = () => {
  notifications.show({
    title: 'Server IP is copied to clipboard!',
    message: 'Enjoy your adventure!',
    color: 'green',
    icon: <IconClipboardCheck />,
  });
  navigator.clipboard.writeText(serverIP);
};
