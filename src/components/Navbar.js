import { NavLink } from 'react-router-dom';
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { IconBasketOff } from '@tabler/icons-react';

import UserMenu from './User';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.white
        : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

// const mockdata = [
//   {
//     icon: IconCode,
//     title: 'Open source',
//     description:
//       'This Pokémon’s cry is very loud and distracting',
//   },
//   {
//     icon: IconCoin,
//     title: 'Free for everyone',
//     description:
//       'The fluid of Smeargle’s tail secretions changes',
//   },
//   {
//     icon: IconBook,
//     title: 'Documentation',
//     description:
//       'Yanma is capable of seeing 360 degrees without',
//   },
//   {
//     icon: IconFingerprint,
//     title: 'Security',
//     description:
//       'The shell’s rounded shape and the grooves on its.',
//   },
//   {
//     icon: IconChartPie3,
//     title: 'Analytics',
//     description:
//       'This Pokémon uses its flying ability to quickly chase',
//   },
//   {
//     icon: IconNotification,
//     title: 'Notifications',
//     description:
//       'Combusken battles with the intensely hot flames it spews',
//   },
// ];

export default function Navbar({
  setIsShowIcon,
  isShowIcon,
}) {
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false);

  const { classes, theme } = useStyles();

  return (
    <Box   >
      <Header height={60} px='md' style={{backgroundColor:'#e8ded4'}}>
        <Group position='apart' sx={{ height: '100%' }} >
          {/* <MantineLogo size={30} /> */}
          {/* <NavLink className={classes.link} to='./home'> */}
          <img src="./pics/logo11.png" alt='logo' style={{height:"60px" , width:"60px"}}/>
          {/* </NavLink> */}

          <Group
            sx={{ height: '100%'}}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <NavLink style={{color:"#BC9470"}} className={classes.link} to='./home'>
              Home 
            </NavLink>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
            ></HoverCard>

            <NavLink
              className={classes.link}
              style={{color:"#BC9470"}}
              to='./products'yy
            >
              Products
            </NavLink>

            <NavLink
              className={classes.link}
              style={{color:"#BC9470"}}
              to='./AboutUs'yy
            >
              About us
            </NavLink>
          </Group>

          <Group className={classes.hiddenMobile}>
            {/* <Button variant='default'>Log in</Button> */}
            {!isShowIcon && (
              <NavLink to='./login'>
                <Button style={{backgroundColor:"#BC9470"}}>Sign up</Button>
              </NavLink>
            )}
            <NavLink className={classes.link} to='./card'>
              {/* <IconBasketFilled /> */}

              {isShowIcon && <IconBasketOff />}
            </NavLink>
            {isShowIcon && (
              <UserMenu setIsShowIcon={setIsShowIcon} />
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx='-md'>
          <Divider
            my='sm'
            color={
              theme.colorScheme === 'dark'
                ? 'dark.5'
                : 'gray.1'
            }
          />

          <NavLink className={classes.link} to='./home'>
            Home
          </NavLink>

          <NavLink className={classes.link} to='./products'>
            Products
          </NavLink>

          <NavLink className={classes.link} to='./AboutUs'>
            About us
          </NavLink>

          <Divider
            my='sm'
            color={
              theme.colorScheme === 'dark'
                ? 'dark.5'
                : 'gray.1'
            }
          />

          <Group position='center' grow pb='xl' px='md'>
            {/* <Button variant='default'>Log in</Button> */}
            <NavLink to='./login'>
              <Button>Sign up</Button>
            </NavLink>
            <NavLink className={classes.link} to='./card'>
              {/* <IconBasketFilled /> */}
            </NavLink>
            {isShowIcon && <IconBasketOff />}
            {isShowIcon && <UserMenu />}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
