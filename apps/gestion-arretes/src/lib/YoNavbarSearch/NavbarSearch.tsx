'use client';
import {
    TextInput,
    Code,
    UnstyledButton,
    Badge,
    Text,
    Group,
    ActionIcon,
    Tooltip,
    rem,
  } from '@mantine/core';
import { IconBulb, IconUser, IconCheckbox, IconSearch, IconPlus } from '@tabler/icons-react';
import classes from './NavbarSearch.module.css';

function convertCase(string: string) {
  const splitted = string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .split(' ');
  return splitted.join('-');
}

const links = [
  { icon: IconBulb, label: 'Activité', notifications: 1 },
  { icon: IconCheckbox, label: 'Taches en cours', notifications: 40 },
  { icon: IconUser, label: 'Repertoire', notifications: 5 },
];

const collections = [
  { emoji: '👍', label: 'Validé' },
  { emoji: '🚚', label: 'Arreté stationnement' },
  { emoji: '💸', label: 'Encaissement' },
  { emoji: '💰', label: 'Amendes' },
  { emoji: '✨', label: 'Notifications' },
  { emoji: '🛒', label: 'En cours' },
  { emoji: '📅', label: 'Evenements' },
  { emoji: '🙈', label: 'A prévoir' },
  { emoji: '💁‍♀️', label: 'Requêtes' },
];

export function NavbarSearch() {
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href={`/component/${convertCase(collection.label)}`}
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
      {collection.label}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.section}>
      </div>

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
      />

      <div className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </div>

      <div className={classes.section}>
        <Group className={classes.collectionsHeader} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className={classes.collections}>{collectionLinks}</div>
      </div>
    </nav>
  );
}