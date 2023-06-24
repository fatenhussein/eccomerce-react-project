import React from 'react';
import "../../src/App.css";
import { createStyles, Container, Text, Button, Group, rem } from '@mantine/core';
import { Link } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: rem(100),
    paddingBottom: rem(10),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(50),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(18),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export function HeroTitle() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h2 className={classes.title} style={{color:"#bc9470"}}>
        'Savor the Elegance of Eras with Timeless Threads'
        </h2>

        <Text className={classes.description} color="dimmed">
        Discover exquisite vintage dresses capturing the essence of bygone eras. We curate authentic, handpicked garments that embody the charm and craftsmanship of vintage fashion. Find your unique piece and express your individuality through our seamless online shopping experience. Committed to sustainability, we promote the circular fashion movement
        with pre-loved garments, reducing environmental impact. Embrace the magic of the past with Timeless Threads.
        </Text>

        <Group className={classes.controls}>
        <Link  to = "/">
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            border="md"
            gradient={{ from: '#bc9470', to: 'beige' }}
          >
            Get started
          </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}

const Developers = ({ image, name, description }) => {
  return (
    <div>
      <div className="Team-members">
        <div className="member-container">
          <img src={image} alt={name} className="member-img" />
          <div className="member-content">
            <h3>{name}</h3>
            <p className="member-description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const developers = [
  {
    image: 'https://avatars.githubusercontent.com/u/112074192?v=4',
    name: 'Faten Hussein',
    description: 'Developer - Writes clean code and implements features in React projects.',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/127290141?v=4',
    name: 'Shiraz Hasan',
    description: 'Developer -Writes clean code and implements features in React projects.',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/127292834?v=4',
    name: 'Yousef Qaisi',
    description: 'Product Owner -  Drives product vision, prioritizes requirements, and ensures successful delivery in a React project',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/111297022?v=4',
    name: 'Abedalrhman Rizk',
    description: 'Scrum Master - Facilitates agile development and removes obstacles in React projects.',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/127290897?v=4',
    name: 'Anas abu Saalek',
    description: 'Developer -Writes clean code and implements features in React projects.',
  },
];

const DisplayDevs = () => {
  return (
    <div>
      <div>
        <h1 style={{textAlign:"center",backgroundColor:"#e8ded4", borderRadius:"20px", padding:"5px", fontFamily:"poppins",color:"#bc9470",maxWidth:"58rem",marginLeft:"auto",marginRight:"auto",marginTop:"8rem"}}>Our Team</h1>
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly",alignItems: "center",flexWrap: "wrap",gap: "50px",overflowX:"hidden",marginTop:"5vw"}}>     
        {developers.map((developer, index) => (
          <Developers
            key={index}
            image={developer.image}
            name={developer.name}
            description={developer.description}
          />
        ))}
      </div>
    </div>
  );
};

export default function CombinedComponent() {
  return (
    <div>
      <HeroTitle />
      <DisplayDevs />
    </div>
  );
}
