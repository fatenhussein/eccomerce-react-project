// import {
//   createStyles,
//   Text,
//   SimpleGrid,
//   Container,
//   rem,
// } from '@mantine/core';
// import {
//   IconTruck,
//   IconCertificate,
//   IconCoin,
// } from '@tabler/icons-react';

// const useStyles = createStyles((theme) => ({
//   feature: {
//     position: 'relative',
//     paddingTop: theme.spacing.xl,
//     paddingLeft: theme.spacing.xl,
//   },

//   overlay: {
//     position: 'absolute',
//     height: rem(100),
//     width: rem(160),
//     top: 0,
//     left: 0,
//     backgroundColor: theme.fn.variant({
//       variant: 'light',
//       color: theme.primaryColor,
//     }).background,
//     zIndex: 1,
//   },

//   content: {
//     position: 'relative',
//     zIndex: 2,
//   },

//   icon: {
//     color: theme.fn.variant({
//       variant: 'light',
//       color: theme.primaryColor,
//     }).color,
//   },

//   title: {
//     color:
//       theme.colorScheme === 'dark'
//         ? theme.white
//         : theme.black,
//   },
// }));

// // interface FeatureProps
// //   extends React.ComponentPropsWithoutRef<'div'> {
// //   icon: React.FC<any>;
// //   title: string;
// //   description: string;
// // }

// function Feature({
//   icon: Icon,
//   title,
//   description,
//   className,
//   ...others
// }) {
//   const { classes, cx } = useStyles();

//   return (
//     <div
//       className={cx(classes.feature, className)}
//       {...others}
//     >
//       <div className={classes.overlay} />

//       <div className={classes.content}>
//         <Icon
//           size={rem(38)}
//           className={classes.icon}
//           stroke={1.5}
//         />
//         <Text
//           fw={700}
//           fz='lg'
//           mb='xs'
//           mt={5}
//           className={classes.title}
//         >
//           {title}
//         </Text>
//         <Text c='dimmed' fz='sm'>
//           {description}
//         </Text>
//       </div>
//     </div>
//   );
// }

// const mockdata = [
//   {
//     icon: IconTruck,
//     title: 'Free Worldwide shipping',
//     description:
//       'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
//   },
//   {
//     icon: IconCertificate,
//     title: 'Best Quality Product',
//     description:
//       'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
//   },
//   {
//     icon: IconCoin,
//     title: 'Very Affordable Pricing',
//     description:
//       'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
//   },
// ];

// export default function FeaturesAsymmetrical() {
//   const items = mockdata.map((item) => (
//     <Feature {...item} key={item.title} />
//   ));

//   return (
//     <Container mt={60} mb={120} size='lg'>
//       <SimpleGrid
//         cols={3}
//         breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
//         spacing={50}
//       >
//         {items}
//       </SimpleGrid>
//     </Container>
//   );
// }

import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
  rem,
} from '@mantine/core';
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
} from '@tabler/icons-react';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
  },
];

export function Feature({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div>
      <ThemeIcon variant='light' size={40} radius={40}>
        <Icon size='1.1rem' stroke={1.5} />
      </ThemeIcon>
      <Text mt='sm' mb={7}>
        {title}
      </Text>
      <Text
        size='sm'
        color='dimmed'
        sx={{ lineHeight: 1.6 }}
      >
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

export default function FeaturesGrid({
  title,
  description,
  data = MOCKDATA,
}) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size='sm' className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
