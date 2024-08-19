import { HeroHeader } from '../../components/HeroHeader';
import { About } from '../About';
import Gallery from '../Gallery';
import { Statistics } from '../Statistics';

export default function All() {
  return (
    <>
      <HeroHeader />
      <About />
      <Statistics />
      <Gallery />
    </>
  );
}
