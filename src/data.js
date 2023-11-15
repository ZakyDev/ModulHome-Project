// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';

export const housesData = [
  {
    id: 1,
    type: 'Villa',
    name: 'Villa Faron',
    description:"Découvrez l'extravagance et l'art de vivre sur la splendide Côte d'Azur avec la magnifique Villa Faron, une résidence exceptionnelle qui évoque le charme méditerranéen. Cette villa, baptisée du nom de la majestueuse montagne qui la surplombe, est une invitation à l'élégance et au confort contemporains. Construite avec soin en 2021, la Villa Faron offre une expérience résidentielle incomparable. Ses 3 chambres spacieuses et ses 2 salles de bains somptueuses s'étendent sur une superficie généreuse de 90 m², créant ainsi un espace de vie luxueux et fonctionnel. Chaque détail a été soigneusement pensé pour allier esthétisme et praticité. Située au prestigieux 456 Rue Louis Bozzo, 83000 Toulon, la Villa Faron est bien plus qu'une simple résidence. C'est un refuge moderne qui se fond harmonieusement dans le tissu riche de la région. Le jardin qui l'entoure crée un écrin de tranquillité, offrant un espace privé où l'on peut se détendre et profiter pleinement du climat ensoleillé de la Côte d'Azur. Le design raffiné de la Villa Faron s'exprime dans chaque recoin de la propriété, créant une atmosphère où le luxe rencontre la fonctionnalité. Les matériaux de qualité supérieure et les finitions impeccables témoignent de l'engagement envers l'excellence dans la construction de cette résidence unique. Cette propriété d'exception est disponible sur le marché pour 310 000 €, représentée par la talentueuse Sophie Diarra Calvet. Sophie, experte en immobilier sur la Côte d'Azur, met à votre disposition son savoir-faire et son dévouement pour vous guider à travers l'acquisition de cette perle rare. Vivez l'art de vivre méditerranéen dans toute sa splendeur avec la Villa Faron à Toulon. Un investissement qui allie élégance, confort et emplacement idéal sur la Côte d'Azur. ",
    image: House5,
    imageLg: House5Lg,
    country: 'Toulon',
    address: '456 Rue Louis Bozzo, 83000 Toulon',
    bedrooms: '3',
    bathrooms: '2',
    surface: '90 m²',
    year: '2021',
    price: '310.000',
    agent: {
      image: Agent1,
      name: 'Sophie Diarra Calvet',
      phone: '0782862619',
    },
  },
  {
    id: 2,
    type: 'Villa',
    name: 'Villa Blagnac',
    description: "Explorez le charme de Toulouse avec la Villa Blagnac. Cette villa de 3 chambres et 2 salles de bains, construite en 2022, offre 110 m² d'harmonie architecturale. Située au 123 Avenue Matabiau, 31000 Toulouse, cette résidence élégante est mise en vente pour 140 000 €. Zaky Diarra vous invite à découvrir un style de vie moderne et sophistiqué. Immergez-vous dans une expérience résidentielle où chaque détail est méticuleusement conçu pour allier esthétisme et praticité. Le design contemporain de la Villa Blagnac crée une atmosphère de luxe, tandis que le jardin environnant offre un havre de paix au cœur de la ville. Cette propriété exceptionnelle est représentée par Zaky Diarra, un expert en immobilier qui vous guidera à travers cette opportunité unique. N'hésitez pas à contacter Zaky Diarra au 0674264277 pour découvrir comment la Villa Blagnac peut être votre nouvelle demeure à Toulouse.",
    image: House2,
    imageLg: House2Lg,
    country: 'Toulouse',
    address: '123 Avenue Matabiau, 31000 Toulouse',
    bedrooms: '3',
    bathrooms: '2',
    surface: '110 m²',
    year: '2022',
    price: '250.000',
    agent: {
      image: Agent3,
      name: 'Zaky Diarra',
      phone: '0674264277',
    },
  },
  {
    id: 3,
    type: 'Villa',
    name: 'Villa Eiffel',
    description: "Découvrez l'élégance intemporelle de la Villa Eiffel située à Paris. Avec 4 chambres et 2 salles de bain réparties sur une surface de 160 m², cette résidence construite en 2020 offre un cadre exceptionnel pour 170 000 €. Adrian Jara vous accompagne dans la découverte de cette propriété unique. Plongez dans l'atmosphère chic de cette villa, où chaque coin a été pensé avec finesse pour créer une expérience de vie luxueuse. L'emplacement prestigieux au 252 Avenue Foch, Paris 75003, ajoute une touche de sophistication. Le jardin bien entretenu offre un espace privé au cœur de la ville des lumières. Cette propriété d'exception, mise en vente pour 600 000 €, est représentée par Adrian Jara, un expert en immobilier à votre service. Contactez Adrian au 0625647810 pour explorer comment la Villa Eiffel peut devenir votre oasis de luxe à Paris.",
    image: House3,
    imageLg: House3Lg,
    country: 'Paris',
    address: '252 Avenue Foch, Paris 75003',
    bedrooms: '4',
    bathrooms: '2',
    surface: '160 m²',
    year: '2020',
    price: '600.000',
    agent: {
      image: Agent2,
      name: 'Adrian Jara',
      phone: '0625647810',
    },
  },
  {
    id: 4,
    type: 'Villa',
    name: 'Villa Lugdu',
    description: "Explorez l'harmonie moderne de la Villa Lugdu à Lyon. Cette résidence de 4 chambres et 2 salles de bain, construite en 2023 sur une surface de 140 m², est proposée au prix de 200 000 €. Léa Bédrosian est là pour vous guider dans cette expérience lyonnaise unique. Plongez dans l'élégance contemporaine de chaque espace, où le design sophistiqué rencontre le confort. La Villa Lugdu, située au 74 Avenue du Sud, 69000 Lyon, offre un équilibre parfait entre style de vie moderne et emplacement idéal. Le jardin entourant la propriété crée une atmosphère paisible au cœur de la ville des lumières. Cette opportunité exceptionnelle, mise en vente pour 200 000 €, est présentée par Léa Bédrosian, une experte en immobilier dédiée à vous offrir une expérience d'achat unique. Contactez Léa au 0145678910 pour explorer comment la Villa Lugdu peut devenir votre nouvelle demeure à Lyon.",
    image: House4,
    imageLg: House4Lg,
    country: 'Lyon',
    address: '74 Avenue du Sud, 69000 Lyon',
    bedrooms: '4',
    bathrooms: '2',
    surface: '140 m²',
    year: '2023',
    price: '200.000',
    agent: {
      image: Agent4,
      name: 'Léa Bédrossian',
      phone: '0145678910',
    },
  },
  {
    id: 5,
    type: 'Villa',
    name: 'Villa Breich',
    description: "Découvrez le raffinement de la Villa Breich à Rennes. Avec 4 chambres et 2 salles de bain sur une surface de 160 m², cette résidence construite en 2021 offre un cadre élégant pour 210 000 €. Ilann Haïdara vous attend pour vous faire découvrir cette perle rennaise. Plongez dans l'atmosphère sophistiquée de cette villa, où chaque détail a été pensé pour créer une expérience de vie luxueuse. La Villa Breich, située au 23 Bvd de Crozon, 35000 Rennes, allie parfaitement le confort moderne à l'esthétique élégante. Le jardin bien entretenu autour de la propriété offre un espace de détente paisible au cœur de la ville. Cette opportunité exceptionnelle, proposée au prix de 250 000 €, est représentée par Ilann Haïdara, un expert en immobilier dévoué à vous guider dans cette expérience unique. Contactez Ilann au 0624578910 pour explorer comment la Villa Breich peut devenir votre nouvelle demeure à Rennes.",
    image: House1,
    imageLg: House1Lg,
    country: 'Rennes',
    address: '23 Bvd de Crozon, 35000 Rennes',
    bedrooms: '4',
    bathrooms: '2',
    surface: '160 m²',
    year: '2021',
    price: '250.000',
    agent: {
      image: Agent2,
      name: 'Ilann Haïdara',
      phone: '0624578910',
    },
  },
  {
    id: 6,
    type: 'Villa',
    name: 'Villa Déguin',
    description: "Plongez dans le charme méditerranéen de la Villa Déguin à Marseille. Cette résidence de 5 chambres et 3 salles de bain, construite en 2023 sur une surface de 200 m², est proposée au prix de 220 000 €. Léa Bédrosian est votre guide pour explorer cette oasis méditerranéenne. Découvrez une expérience de vie méditerranéenne authentique avec chaque coin de cette villa, où le design raffiné rencontre la chaleur du climat ensoleillé. La Villa Déguin, située au 223 Rue du Vieux Port, 13007 Marseille, offre un équilibre parfait entre intimité et proximité du Vieux Port. Le jardin luxuriant entourant la propriété crée une atmosphère paisible. Cette opportunité exceptionnelle, mise en vente pour 380 000 €, est représentée par Léa Bédrosian, une experte en immobilier dévouée à faire de cette villa méditerranéenne votre nouvelle demeure. Contactez Léa au 0612058920 pour explorer comment la Villa Déguin peut devenir votre oasis méditerranéenne à Marseille.",
    image: House6,
    imageLg: House6Lg,
    country: 'Marseille',
    address: '223 Rue du Vieux Port, 13007 Marseille',
    bedrooms: '5',
    bathrooms: '3',
    surface: '200 m²',
    year: '2023',
    price: '380.000',
    agent: {
      image: Agent4,
      name: 'Léa Bédrosian',
      phone: '0612058920',
    },
  },
  {
    id: 10,
    type: 'Villa',
    name: 'Villa Marengo',
    description: "Découvrez l'élégance de Toulouse avec la Villa Marengo, une résidence de 3 chambres et 2 salles de bains construite en 2022. Avec une surface de 130 m², cette villa moderne est disponible à 150 000 €. Sophie Diarra Calvet vous invite à explorer cette oasis urbaine au 123 Avenue de la Gare, 31000 Toulouse. Plongez dans l'atmosphère contemporaine de la Villa Marengo, où chaque détail a été pensé pour allier style et fonctionnalité. La villa, offerte au marché pour 250 000 €, est représentée par Sophie Diarra Calvet, une experte en immobilier dévouée à vous guider dans l'acquisition de cette oasis urbaine. Contactez Sophie au 0674264277 pour explorer comment la Villa Marengo peut devenir votre nouvelle demeure élégante à Toulouse.",
    image: House8,
    imageLg: House8Lg,
    country: 'Toulouse',
    address: '123 Avenue de la Gare, 31000 Toulouse',
    bedrooms: '3',
    bathrooms: '2',
    surface: '130 m²',
    year: '2022',
    price: '250.000',
    agent: {
      image: Agent1,
      name: 'Sophie Diarra Calvet',
      phone: '0674264277',
    },
  },
  {
    id: 11,
    type: 'Villa',
    name: 'Villa Brice',
    description: "Immergez-vous dans le luxe avec la Villa Brice à Nice. Cette villa de 4 chambres et 2 salles de bains, construite en 2023, offre 160 m² d'élégance moderne. Située au 785 Avenue de Monaco, 06000 Nice, cette propriété prestigieuse est à vendre pour 375 000 €. Léa Bédrossian vous invite à découvrir une vie sophistiquée. Plongez dans l'atmosphère de raffinement de la Villa Brice, où chaque élément a été pensé pour créer une expérience de vie luxueuse. La villa, offerte au marché pour 375 000 €, est représentée par Léa Bédrossian, une experte en immobilier dédiée à vous guider dans l'acquisition de cette demeure d'exception. Contactez Léa au 0145678910 pour explorer comment la Villa Brice peut devenir votre nouvelle résidence élégante à Nice.",
    image: House9,
    imageLg: House9Lg,
    country: 'Nice',
    address: '785 Avenue de Monaco, 06000 Nice',
    bedrooms: '4',
    bathrooms: '2',
    surface: '160 m²',
    year: '2023',
    price: '375.000',
    agent: {
      image: Agent4,
      name: 'Léa Bédrossian',
      phone: '0145678910',
    },
  },
  {
    id: 12,
    type: 'Villa',
    name: 'Villa Albert',
    description: "Appréciez le charme de la Villa Albert, une résidence de 6 chambres et 2 salles de bains avec une surface de 190 m². Construite en 2021 à Monaco, cette villa est disponible à 250 000 €. Sophie Diarra Calvet vous accompagne pour explorer cette oasis de raffinement. Plongez dans l'atmosphère luxueuse de la Villa Albert, où chaque détail est soigneusement conçu pour offrir une expérience de vie exceptionnelle. La villa, située au 456 Boulevard du Casino, Monaco, offre un équilibre parfait entre intimité et glamour monégasque. Le jardin bien entretenu crée une oasis de tranquillité au cœur de la Principauté. Cette opportunité exceptionnelle, proposée au prix de 500 000 €, est représentée par Sophie Diarra Calvet, une experte en immobilier dédiée à vous guider dans l'acquisition de cette demeure d'exception à Monaco. Contactez Sophie au 0782862619 pour explorer comment la Villa Albert peut devenir votre nouvelle résidence élégante dans la Principauté.",
    image: House7,
    imageLg: House7Lg,
    country: 'Monaco',
    address: '456 Boulevard du Casino, Monaco',
    bedrooms: '6',
    bathrooms: '2',
    surface: '190 m²',
    year: '2021',
    price: '500.000',
    agent: {
      image: Agent1,
      name: 'Sophie Diarra Calvet',
      phone: '0782862619',
    },
  },
  {
    id: 13,
    type: 'Villa',
    name: 'Villa Sophia',
    description: "Plongez dans le luxe de la Villa Sophia, une résidence de 6 chambres et 2 salles de bains avec une surface de 300 m². Construite en 2014 à Toulouse, cette villa est disponible à 240 000 €. Sophie Diarra Calvet vous invite à découvrir le summum de l'élégance. Explorez chaque espace de cette villa sophistiquée où le design contemporain rencontre le confort absolu. La Villa Sophia, située au 321 Bvd Jean Jaures, 31000 Toulouse, offre un style de vie prestigieux au cœur de la Ville Rose. Le jardin luxuriant entourant la propriété crée une oasis de sérénité. Cette opportunité exceptionnelle, proposée au prix de 450 000 €, est représentée par Sophie Diarra Calvet, une experte en immobilier dévouée à vous guider dans l'acquisition de cette demeure d'exception à Toulouse. Contactez Sophie au 0123 456 78910 pour explorer comment la Villa Sophia peut devenir votre nouvelle résidence élégante dans la Ville Rose.",
    image: House10,
    imageLg: House10Lg,
    country: 'Toulouse',
    address: '321 Bvd Jean Jaures, 31000 Toulouse',
    bedrooms: '6',
    bathrooms: '2',
    surface: '300 m²',
    year: '2014',
    price: '450.000',
    agent: {
      image: Agent1,
      name: 'Sophie Diarra Calvet',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'Villa',
    name: 'Villa Valloire',
    description: "Explorez l'exclusivité de la Villa Valloire, une résidence de 5 chambres et 2 salles de bains avec une surface de 250 m². Construite en 2023 à Valloire, cette villa est disponible à 250 000 €. Patrick Grange vous accompagne pour découvrir cette propriété d'exception. Plongez dans l'atmosphère exclusive de la Villa Valloire, où chaque détail est conçu pour offrir une expérience de vie de premier ordre. La villa, située au 148 Avenue du Chalet, 38045 Valloire, offre un mélange parfait entre modernité et charme alpin. Le jardin bien entretenu crée un cadre paisible, ajoutant à l'exclusivité de cette propriété. Cette opportunité exceptionnelle, proposée au prix de 340 000 €, est représentée par Patrick Grange, un expert en immobilier dédié à vous guider dans l'acquisition de cette demeure d'exception à Valloire. Contactez Patrick au 0723478910 pour explorer comment la Villa Valloire peut devenir votre nouvelle résidence exclusive dans les Alpes.",
    image: House11,
    imageLg: House11Lg,
    country: 'Savoie',
    address: '148 Avenue du Chalet, 38045 Valloire',
    bedrooms: '5',
    bathrooms: '2',
    surface: '250 m²',
    year: '2023',
    price: '340.000',
    agent: {
      image: Agent2,
      name: 'Patrick Grange',
      phone: '0723478910',
    },
  },
  {
    id: 15,
    type: 'Villa',
    name: 'Villa Delta',
    description: "Vivez l'expérience unique de la Villa Delta, une résidence de 4 chambres et 3 salles de bains avec une surface de 220 m². Construite en 2022 à Saintes-Maries de la Mer, cette villa est disponible à 240 000 €. Roberto Marandino vous invite à découvrir le luxe côtier. Plongez dans l'atmosphère exceptionnelle de la Villa Delta, où chaque détail est conçu pour offrir une expérience de vie côtière sans pareil. La villa, située au 32 Avenue Crin Blanc, 13680 Saintes-Maries, offre une combinaison parfaite de modernité et de charme méditerranéen. Le jardin bien entretenu crée une oasis de tranquillité, ajoutant au luxe de cette propriété. Cette opportunité exceptionnelle, proposée au prix de 180 000 €, est représentée par Roberto Marandino, un expert en immobilier dédié à vous guider dans l'acquisition de cette demeure d'exception à Saintes-Maries de la Mer. Contactez Roberto au 0605545840 pour explorer comment la Villa Delta peut devenir votre nouvelle résidence côtière de luxe.",
    image: House12,
    imageLg: House12Lg,
    country: 'Saintes-Maries de la Mer',
    address: '32 Avenue Crin Blanc, 13680 Saintes-Maries',
    bedrooms: '4',
    bathrooms: '3',
    surface: '220 m²',
    year: '2022',
    price: '180.000',
    agent: {
      image: Agent4,
      name: 'Roberto Marandino',
      phone: '0605545840',
    },
  },
  {
    id: 7,
    type: 'Module',
    name: 'Unitaire',
    description: "Redéfinissez votre quotidien avec le Module Unitaire, une expérience de vie urbaine de 24 m². Construit en 2023, ce module d'1 chambre offre un espace minimaliste à 10 000 €. Pour plus de détails, contactez Mourad Boudjelal et plongez dans le futur de la vie citadine. Explorez l'innovation et la fonctionnalité de chaque coin de ce module, où le design contemporain rencontre l'efficacité de l'espace. Le Module Unitaire, proposé au prix de 15 000 €, est représenté par Mourad Boudjelal, un expert en immobilier dédié à vous guider dans cette expérience urbaine unique. Contactez Mourad au 045258910 pour découvrir comment le Module Unitaire peut redéfinir votre vie citadine.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: '',
    address: '',
    bedrooms: '1',
    bathrooms: '',
    surface: '24 m²',
    year: '2023',
    price: '15.000',
    agent: {
      image: Agent2,
      name: 'Mourad Boudjelal',
      phone: '045258910',
    },
  },
  {
    id: 8,
    type: 'Module',
    name: 'Sanitaire',
    description: "Plongez dans le confort moderne avec le Module Sanitaire, offrant 2 salles de bains dans un espace de 24 m². Disponible depuis 2023, cette résidence innovante est proposée à 15 000 €. Connectez-vous avec Mourad Boudjelal pour vivre l'expérience d'une vie contemporaine. Explorez l'ingéniosité de chaque détail de ce module, où la fonctionnalité et le design se rencontrent pour créer une expérience sanitaire moderne. Le Module Sanitaire, proposé au prix de 20 000 €, est représenté par Mourad Boudjelal, un expert en immobilier dédié à vous guider dans cette nouvelle approche contemporaine de la vie. Contactez Mourad au 045258910 pour découvrir comment le Module Sanitaire peut apporter un niveau supérieur de confort moderne à votre quotidien.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: '',
    address: '',
    bedrooms: '',
    bathrooms: '2',
    surface: '24 m²',
    year: '2023',
    price: '20.000',
    agent: {
      image: Agent2,
      name: 'Mourad Boudjelal',
      phone: '045258910',
    },
  },
  {
    id: 9,
    type: 'Module',
    name: 'ModulHome Duo',
    description: "Élevez votre style de vie avec le ModulHome Duo, un espace chic de 48 m² avec 1 chambre et 1 salle de bains. Construit en 2023, ce module moderne est disponible à 18 000 €. Pour plus d'informations, contactez Mourad Boudjelal et explorez l'harmonie de l'habitat contemporain. Plongez dans l'élégance de chaque détail de ce module, où le design raffiné rencontre la fonctionnalité pour créer une expérience de vie contemporaine. Le ModulHome Duo, proposé au prix de 30 000 €, est représenté par Mourad Boudjelal, un expert en immobilier dédié à vous guider dans cette nouvelle approche chic de la vie. Contactez Mourad au 045258910 pour découvrir comment le ModulHome Duo peut élever votre style de vie dans l'harmonie de l'habitat contemporain.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: '',
    address: '',
    bedrooms: '1',
    bathrooms: '1',
    surface: '48 m²',
    year: '2023',
    price: '30.000',
    agent: {
      image: Agent2,
      name: 'Mourad Boudjelal',
      phone: '045258910',
    },
  },
  {
    id: 16,
    type: 'Module',
    name: 'ModulHome Trio',
    description: "Découvrez l'avenir de l'habitat avec le ModulHome Trio, un espace moderne de 72 m² avec 2 chambres. Construit en 2023, ce module avant-gardiste est disponible pour 25 000 €. Contactez Mourad Boudjelal pour explorer le mariage parfait entre style contemporain et praticité fonctionnelle. Plongez dans l'innovation de chaque détail de ce module, où la conception avant-gardiste rencontre la fonctionnalité pour créer une expérience de vie moderne. Le ModulHome Trio, proposé au prix de 43 000 €, est représenté par Mourad Boudjelal, un expert en immobilier dédié à vous guider dans cette vision avant-gardiste de l'habitat. Contactez Mourad au 045258910 pour découvrir comment le ModulHome Trio peut vous offrir l'avenir de la vie moderne.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: '',
    address: '',
    bedrooms: '2',
    bathrooms: '1',
    surface: '72 m²',
    year: '2023',
    price: '43.000',
    agent: {
      image: Agent2,
      name: 'Mourad Boudjelal',
      phone: '045258910',
    },
  },
  {
    id: 17,
    type: 'Module',
    name: 'ModulHome Quatior',
    description: "Découvrez le confort exceptionnel du ModulHome Quatior, un espace de vie moderne avec 3 chambres et 1 salle de bain. Avec une surface de 96 m², cette résidence construite en 2023 offre une expérience de vie contemporaine à 32 000 €. Gaelle Romano est là pour vous guider dans cette expérience unique. Plongez dans le confort exceptionnel de chaque détail de ce module, où l'espace moderne rencontre le design chaleureux pour créer une expérience de vie contemporaine inégalée. Le ModulHome Quatior, proposé au prix de 55 000 €, est représenté par Gaelle Romano, une experte en immobilier dédiée à vous guider dans cette vision moderne de l'habitat. Contactez Gaelle au 0452589210 pour découvrir comment le ModulHome Quatior peut vous offrir un confort exceptionnel dans une vie moderne.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: '',
    address: '',
    bedrooms: '3',
    bathrooms: '1',
    surface: '96 m²',
    year: '2023',
    price: '55.000',
    agent: {
      image: Agent4,
      name: 'Gaelle Romano',
      phone: '0452589210',
    },
  },
  {
    id: 18,
    type: 'Module',
    name: 'ModulHome Pro',
    description: "Voyez grand avec le ModulHome Pro, une résidence de 4 chambres et 2 salles de bains offrant une surface de 144 m². Construit sur mesure et selon vos goûts, ce modèle exclusif est disponible à 40 000 €. Pour plus d'informations, contactez Sophie Diarra Calvet et explorez le summum du confort contemporain. Plongez dans le luxe personnalisé de chaque détail de ce module, où le design exclusif rencontre la fonctionnalité pour créer une expérience de vie contemporaine sur mesure. Le ModulHome Pro, proposé au prix de 65 000 €, est représenté par Sophie Diarra Calvet, une experte en immobilier dédiée à vous guider dans cette vision moderne de l'habitat. Contactez Sophie au 0452589120 pour découvrir comment le ModulHome Pro peut vous offrir le summum du confort contemporain selon vos préférences.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: '',
    address: '',
    bedrooms: '4',
    bathrooms: '2',
    surface: '144 m²',
    year: '2023',
    price: '65.000',
    agent: {
      image: Agent1,
      name: 'Sophie Diarra Calvet',
      phone: '0452589120',
    },
  },
];
