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

  const [embla0, setEmbla0] = useState<Embla | null>(null);
  useAnimationOffsetEffect(embla0, 1);
  const [embla1, setEmbla1] = useState<Embla | null>(null);
  useAnimationOffsetEffect(embla1, 1);

  return (
    <Box className={classes.wrapper} id="gallery">
      <Badge color="green" className={classes.badge} mb="md">
        Cool Images
      </Badge>
      <Title order={1} ta="center">
        In-Game Gallery
      </Title>
      <Container size={660} p={0} mx="md">
        <Text c="dimmed" className={classes.description}>
          Explore a curated selection of breathtaking screenshots and highlights from our server.
          See the creativity and adventures that make our community unique.
        </Text>
      </Container>
      <Carousel
        mt="xl"
        getEmblaApi={setEmbla0}
        dragFree
        slideSize="50%"
        slideGap="md"
        height={500}
        loop
        initialSlide={2}
        visibleFrom="md"
      >
        {slides}
      </Carousel>
      <Carousel mt="xl" getEmblaApi={setEmbla1} height={400} loop initialSlide={2} hiddenFrom="md">
        {slides}
      </Carousel>
    </Box>
  );
}
