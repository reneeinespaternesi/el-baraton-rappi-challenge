export const categories = [
  {
    id: 1,
    text: "Bebidas",
    img: "img/drinks.svg",
    expanded: true,
    selected: false,
    checked: false,
    children: [
      {
        id: 1,
        text: "Gaseosas",
        img: "img/sodas.svg",
        expanded: true,
        selected: false,
        checked: false,
        children: [
          {
            id: 2,
            text: "Con azúcar",
            img: "img/soda.svg",
            expanded: true,
            selected: false,
            checked: false
          },
          {
            id: 3,
            text: "Sin azúcar",
            img: "img/diet-soda.png",
            expanded: true,
            selected: false,
            checked: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    text: "Desayunos",
    img: "img/breakfast.svg",
    expanded: true,
    selected: false,
    checked: false,
    children: [
      {
        id: 4,
        text: "Fake 1",
        img: "childchildren/breakfast.svg",
        expanded: true,
        selected: false,
        checked: false,
        children: [
          {
            id: 5,
            text: "Fake 2",
            img: "img/breakfast.svg",
            expanded: true,
            selected: false,
            checked: false
          },
          {
            id: 6,
            text: "Fake 3",
            img: "img/breakfast.svg",
            expanded: true,
            selected: false,
            checked: false,
            children: [
              {
                id: 7,
                text: "Fake 4",
                img: "img/breakfast.svg",
                expanded: true,
                selected: false,
                checked: false
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    text: "Almuerzos",
    img: "img/lunch.svg",
    expanded: true,
    selected: false,
    checked: false,
    children: [
      {
        id: 9,
        text: "Fake 5",
        img: "img/lunch.svg",
        expanded: true,
        selected: false,
        checked: false
      },
      {
        id: 10,
        text: "Fake 6",
        img: "img/lunch.svg",
        expanded: true,
        selected: false,
        checked: false
      }
    ]
  },
  {
    id: 11,
    text: "Vinos",
    img: "img/wine.svg",
    expanded: true,
    selected: false,
    checked: false,
    children: [
      {
        id: 12,
        text: "Fake 8",
        img: "img/wine.svg",
        expanded: true,
        selected: false,
        checked: false
      },
      {
        id: 13,
        text: "Fake 9",
        img: "img/wine.svg",
        expanded: true,
        selected: false,
        checked: false
      }
    ]
  }
];
