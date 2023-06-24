import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Link } from "react-router-dom";



const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span style={{backgroundColor:"#e8ded4", borderRadius:"20px", padding:"5px", fontFamily:"poppins",color:"#bc9470"}}>Timeless Threads</span>
            </Title>
            <Text color="#d3c9c0" mt="md">
            Unleash your heroic style with Timeless Threads, Where vintage charm meets timeless elegance, creating fashion magic that lasts a lifetime. Step into our curated collection of vintage dresses and embrace the allure of the past while making a statement that transcends time.
            </Text>

            <Group mt={30}>
            <Link  to = "/products">
              <Button radius="md" size="md" style={{backgroundColor:"#BC9470"}} variant="gradient"
            border="md"
            gradient={{ from: '#bc9470', to: 'beige' }} >
                Start shopping
              </Button>
              </Link>
            </Group>
          </div>
          <Image src={"https://i.pinimg.com/564x/85/ca/f3/85caf3a77c431f7a722f6df9455c02d6.jpg"} className={classes.image} 
          style={{boxShadow:"28px 27px 0px 0px #bc9470"}}
          />
        </div>
      </Container>
    </div>
  );
}