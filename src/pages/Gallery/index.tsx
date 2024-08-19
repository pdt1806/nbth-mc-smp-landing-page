import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel';
import { Badge, Box, Container, Image, Text, Title } from '@mantine/core';
import { useState } from 'react';
import classes from './index.module.css';

export default function Gallery() {
  const slides = Array.from({ length: 6 }).map((_, index) => (
    <Carousel.Slide key={`gallery_slide_${index}`}>
      <Image src={`images/gallery/${index}.webp`} alt={`Slide ${index}`} height="100%" />
    </Carousel.Slide>
  ));

  const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, 1);

  return (
    <Box className={classes.wrapper} id="gallery">
      <Badge color="green" className={classes.badge} mb="md">
        Cool Images
      </Badge>
      <Title order={1}>In-Game Gallery</Title>
      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Explore a curated selection of breathtaking screenshots and highlights from our server.
          See the creativity and adventures that make our community unique.
        </Text>
      </Container>
      <Carousel
        mt="xl"
        getEmblaApi={setEmbla}
        dragFree
        slideSize="50%"
        slideGap="md"
        height={500}
        loop
        initialSlide={2}
      >
        {slides}
      </Carousel>
    </Box>
  );
}
