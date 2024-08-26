import { Carousel, Embla } from '@mantine/carousel';
import { Badge, Box, Container, Image, Text, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './index.module.css';

export default function Gallery() {
  const { t } = useTranslation();
  const numberOfImages = 6;
  const [loadedImages, setLoadedImages] = useState(0);

  const [embla, setEmbla] = useState<Embla | null>(null);

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const slides = Array.from({ length: numberOfImages }).map((_, index) => (
    <Carousel.Slide key={`gallery_slide_${index}`}>
      <Image
        src={`images/gallery/${index}.webp`}
        alt={`Slide ${index}`}
        height="100%"
        onLoad={() => {
          setLoadedImages((current) => current + 1);
        }}
      />
    </Carousel.Slide>
  ));

  useEffect(() => {
    if (loadedImages >= numberOfImages) {
      embla?.reInit();
    }
  }, [loadedImages]);

  return (
    <Box className={classes.wrapper} id="gallery">
      <Badge color="green" className={classes.badge} mb="md">
        {t('gallery.badge')}
      </Badge>
      <Title order={1} ta="center">
        {t('gallery.title')}
      </Title>
      <Container size={660} p={0} mx="md">
        <Text c="dimmed" className={classes.description}>
          {t('gallery.description')}
        </Text>
      </Container>
      <Carousel
        mt="xl"
        getEmblaApi={setEmbla}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize={{ base: '100%', md: '50%' }}
        slideGap={{ base: 0, md: 'md' }}
        h={{ base: 400, md: 500 }}
        height="100%"
        loop
      >
        {slides}
      </Carousel>
    </Box>
  );
}
