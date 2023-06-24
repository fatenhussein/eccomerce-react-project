import React from 'react'
import {Center,Card,Text,Image,Button,} from "@mantine/core"
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div style={{height:"67vh"}}>
    <Center maw={470} h={450} mx="auto">
    <Card style={{display:"flex",justifyContent:"center",flexDirection:"column",padding:"2rem",alignItems:"center"}}
      shadow="sm"
      padding="xl"
      component="a"
      // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Image
          src="https://cdn.discordapp.com/attachments/1121884378604245012/1122091241379733574/checked.png"
          style={{marginTop:"2rem"}}
          height={100}
          width={100}

          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        Thank you for shopping here!
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
    Please wait for the order confirmation, we will contact you as soon as possible.
      </Text>
      <Link  to = "/">
      <Button
            size="md"
            variant="gradient"
            border="md"
            gradient={{ from: '#bc9470', to: 'beige' }}
          >
            Home
          </Button>
          </Link>
    </Card>
    </Center>
    
    </div>
  )
}

export default Checkout;