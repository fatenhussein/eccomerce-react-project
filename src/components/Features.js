import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

export const MOCKDATA = [
  {
    icon: IconUser,
    title: " Hinata Hyuga ",
    description:
      "Im in love with the stunning vintage dresses I found at Timeless Threads! Their collection is a treasure trove of beautifully preserved garments from different eras. The shops commitment to sustainability and personalized recommendations sets them apart",
  },
  {
    icon: IconUser,
    title: "Nezuko Kamado",
    description:
      "Timeless Threads offers exceptional quality and a remarkable selection of vintage dresses. The staffs expertise and friendly service make the shopping experience enjoyable and seamless. I highly recommend Timeless Threads for vintage fashion enthusiasts seeking timeless elegance.",
  },
  {
    icon: IconUser,
    title: "Gigi Hadid",
    description:
      "Timeless Threads has rekindled my love for vintage fashion. Each visit feels like stepping into a whimsical time capsule. The attention to detail, authenticity of the garments, and the warm staff make it a must-visit for those seeking enchanting and elegant vintage pieces.",
  },
];

export function Feature({ icon: Icon, title, description }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
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
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
}));

export default function FeaturesGrid({ title, description, data = MOCKDATA }) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <h1 style={{ textAlign: "center" }}>Feedbacks</h1>

      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
