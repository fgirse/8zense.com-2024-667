"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="mt-52 bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  subtitle: string;
  statement: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/images/Portrait01.jpeg",
    title: "Fernanda Pereira",
    subtitle: "Founderin 8zense.com",
    statement:
      "<< 8zense.com ist das Fundament und die Basis für anspuchvolles Design >>",
    id: 1,
  },
  {
    url: "/images/Portrait02.jpeg",
    title: "Fernanda Pereira",
    subtitle: "Founderin 8zense.com",
    statement:
      "<< 8zense.com ist das Fundament und die Basis für anspuchvolles Design >>",
    id: 2,
  },
  {
    url: "/images/Portrait03.jpeg",
    title: "Fernanda Pereira",
    subtitle: "Founderin 8zense.com",
    statement:
      "<< 8zense.com ist das Fundament und die Basis für anspuchvolles Design >>",
    id: 3,
  },
  {
    url: "/images/Portrait04.jpeg",
    title: "Fernanda Pereira",
    subtitle: "Founderin 8zense.com",
    statement:
      "<< 8zense.com ist das Fundament und die Basis für anspuchvolles Design >>",
    id: 4,
  },
];