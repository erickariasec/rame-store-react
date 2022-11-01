import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function Content() {
    const list = [
    {
      title: "Fjallraven - Foldsack Backpack",
      img: "/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "$109.95",
    },
    {
      title: "Slim Fit T-Shirts",
      img: "/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: "$22.30",
    },
    {
      title: "Mens Cotton Jacket",
      img: "/img/71li-ujtlUL._AC_UX679_.jpg",
      price: "$55.99",
    },
    {
      title: "Mens Casual Slim Fit",
      img: "/img/71YXzeOuslL._AC_UY879_.jpg",
      price: "$15.99",
    },
    {
      title: "John Hardy Women's",
      img: "/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      price: "$695.00",
    },
    {
      title: "Solid Gold Petite Micropave",
      img: "/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      price: "$168.00",
    },
    {
      title: "White Gold Plated Princess",
      img: "/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      price: "$9.99",
    },
    {
      title: "Pierced Owl Rose",
      img: "/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      price: "$10.99",
    },
  ];

  return (
    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://fakestoreapi.com" + item.img}
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