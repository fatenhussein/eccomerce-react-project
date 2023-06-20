import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
  rem,
} from '@mantine/core';

import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
} from '@mantine/core';

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
          <Badge variant='outline'>25% off</Badge>
        </Group>

        <Card.Section className={classes.section}>
          <Group spacing={30}>
            <div>
              <Text fz='xl' fw={700} sx={{ lineHeight: 1 }}>
                $168.00
              </Text>
              <Text
                fz='sm'
                c='dimmed'
                fw={500}
                sx={{ lineHeight: 1 }}
                mt={3}
              >
                per day
              </Text>
            </div>

            <Button radius='xl' style={{ flex: 1 }}>
              Add to Card
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
}

// const getChild = (height) => (
//   <Skeleton height={height} radius='md' animate={false} />
// );
// const BASE_HEIGHT = 360;

export default function Subgrid() {
  return (
    <Container my='md'>
      <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: 'xs', cols: 1 }]}
      >
        {/* {getChild(BASE_HEIGHT)} */}
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
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
