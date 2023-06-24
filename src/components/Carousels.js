import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(350),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      "https://i.pinimg.com/564x/f3/ec/76/f3ec7679efe1e5163454bf5a2752b276.jpg",
    title: "Vintage Wedding Dresses",
    category: "Coming Soon",
  },
  {
    image:
      "https://i.pinimg.com/564x/b0/ed/90/b0ed903d5411d3cf0b4e94abacaa623e.jpg",
    title: "Vintage Wedding Dresses",
    category: "Coming Soon",
  },
  {
    image:
      "https://i.pinimg.com/564x/3c/12/60/3c1260443420cf70775201f721ee0784.jpg",
    title: "Vintage Wedding Dresses",
    category: "Coming Soon",
  },
  {
    image:
      "https://i.pinimg.com/564x/8f/d4/69/8fd46976ff6fb683ed379c01a9788e9f.jpg",
    title: "Vintage Wedding Dresses",
    category: "Coming Soon",
  },
  {
    image:
      "https://i.pinimg.com/564x/d3/cd/f4/d3cdf4bab78c6eef60da09d5582ec116.jpg",
    title: "Vintage Wedding Dresses",
    category: "Coming Soon",
  },
  
  
];

export default function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
    <h1 style={{textAlign:"center",backgroundColor:"#e8ded4", borderRadius:"20px", padding:"5px", fontFamily:"poppins",color:"#bc9470",maxWidth:"58rem",marginLeft:"auto",marginRight:"auto"}}>Coming soon..</h1>

    <Carousel
      slideSize="50%"
      breakpoints={[
        {
          maxWidth: "sm",
          slideSize: "100%",
          slideGap: rem(2),
        },
      ]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      className="carousel"
    >
      {slides}
    </Carousel>
    </>
  );
}
