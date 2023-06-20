import {
  Card,
  Image,
  Text,
  Group,
  createStyles,
  Button,
  rem,
} from '@mantine/core';

import { SimpleGrid, Container } from '@mantine/core';

import '../../src/App.css';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function FeaturesCard() {
  const { classes } = useStyles();

  return (
    <>
      <Card withBorder radius='md' className='producut'>
        <Card.Section className={classes.imageSection}>
          <Image
            src='https://i.imgur.com/ZL52Q2D.png'
            alt='Tesla Model S'
          />
        </Card.Section>

        <Group position='apart' mt='md'>
          <div>
            <Text fw={500}>Tesla Model S</Text>
            <Text fz='xs' c='dimmed'>
              Free recharge at any station
            </Text>
          </div>
        </Group>

        <Group spacing={30} mt={20}>
          <div>
            <Text fz='xl' fw={700} sx={{ lineHeight: 1 }}>
              $168.00
            </Text>
          </div>
          <Button radius='xl' style={{ flex: 1 }}>
            Add to Card
          </Button>
        </Group>
        {/* <Card.Section
          className={classes.section}
        ></Card.Section> */}
      </Card>
    </>
  );
}

export default function Subgrid() {
  return (
    <Container my='md'>
      <h1> lalalalalalalalala</h1>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'xs', cols: 1 },
          { maxWidth: 'sm', cols: 2 },
        ]}
      >
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </SimpleGrid>
    </Container>
  );
}
