import { Card, Grid, Row, Text } from "@nextui-org/react";
import HoddieBlack from "../hoddie-iti-black-red-no-shadows.png";
import HoddieYellow from "../hoddie-iti-yellow-red.png";
import CupBlack from "../cup-iti-black-red.png";
import GapBlack from "../gap-iti-black-red.png";
import ShirtGray from "../t-shirt-iti-gray-red.png";
import ShirtRed from "../t-shirt-iti-red-gray.png";
import ShirtWhite from "../t-shirt-iti-white.png";
import HoddieBlack2 from "../hoddie-iti-black-red-v2.png";

export default function Content() {
    const list = [
    {
      title: "Hoddie Negro/Rojo",
      img: `${HoddieBlack}`,
      price: "$24.99",
    },
    {
      title: "Hoddie Negro/Rojo",
      img: `${HoddieYellow}`,
      price: "$24.99",
    },
    {
      title: "Taza Negro/Rojo",
      img: `${CupBlack}`,
      price: "$5.99",
    },
    {
      title: "Gorra Negro/Rojo",
      img: `${GapBlack}`,
      price: "$9.99",
    },
    {
      title: "Camiseta Polo Gris",
      img: `${ShirtGray}`,
      price: "$12.99",
    },
    {
      title: "Camiseta Polo Roja",
      img: `${ShirtRed}`,
      price: "$12.99",
    },
    {
      title: "Camiseta Polo Blanca",
      img: `${ShirtWhite}`,
      price: "$12.99",
    },
    {
      title: "Hoddie Capucha Roja",
      img: `${HoddieBlack2}`,
      price: "$24.99",
    },
  ];

  return (
    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="contain"
                width="100%"
                height={340}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}