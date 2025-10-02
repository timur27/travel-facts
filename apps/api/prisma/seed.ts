import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.fact.deleteMany();
  await prisma.city.deleteMany();

  // Seed Venice
  const venice = await prisma.city.create({
    data: {
      name: 'Venice',
      facts: {
        create: [
          {
            content: 'Venice was built on 118 small islands connected by over 400 bridges. The city was constructed on wooden pilings driven deep into the marshy lagoon floor, with some foundations dating back over 1,500 years still supporting buildings today.',
            category: 'architecture'
          },
          {
            content: 'Marco Polo, the legendary explorer who traveled the Silk Road to China, was born in Venice in 1254. His travels introduced Europeans to Asian innovations like paper money, coal, and pasta-making techniques that influenced Venetian cuisine.',
            category: 'people'
          },
          {
            content: 'Venice was one of the wealthiest and most powerful maritime republics for over 1,000 years. At its peak in the 15th century, Venice controlled key trade routes between Europe and Asia, making it the trading capital of the Western world.',
            category: 'political'
          },
          {
            content: 'The famous Venetian masks were originally used during Carnival to allow people of different social classes to mingle anonymously. The tradition dates back to the 13th century and made Venice one of the most socially liberal cities of medieval Europe.',
            category: 'culture'
          },
          {
            content: 'Venice is sinking at a rate of 1-2 millimeters per year due to groundwater extraction and natural geological subsidence. The city has been fighting rising water levels (acqua alta) for centuries, with the modern MOSE flood barrier system finally completed in 2020.',
            category: 'daily_life'
          }
        ]
      }
    }
  });

  // Seed Paris
  const paris = await prisma.city.create({
    data: {
      name: 'Paris',
      facts: {
        create: [
          {
            content: 'The Eiffel Tower was originally intended to be a temporary structure for the 1889 World\'s Fair and was scheduled to be dismantled in 1909. It was saved because it proved valuable as a radio transmission tower, and later became the iconic symbol of Paris.',
            category: 'architecture'
          },
          {
            content: 'Paris\'s underground network isn\'t just the Metro—there are over 200 miles of underground tunnels called the Catacombs, holding the remains of approximately 6 million Parisians. The bones were transferred from overcrowded cemeteries in the late 18th century.',
            category: 'daily_life'
          },
          {
            content: 'During the Belle Époque period (1871-1914), Paris became the world center of art, literature, and innovation. Artists like Monet, Renoir, and Picasso flocked to the city, creating movements like Impressionism and Cubism that revolutionized Western art.',
            category: 'culture'
          },
          {
            content: 'The French Revolution began in Paris on July 14, 1789, with the storming of the Bastille prison. This single event triggered a complete transformation of French society, ending absolute monarchy and inspiring democratic movements worldwide.',
            category: 'political'
          },
          {
            content: 'Victor Hugo\'s novel "The Hunchback of Notre-Dame" (1831) single-handedly saved Notre-Dame Cathedral from demolition. The book\'s popularity sparked a Gothic Revival movement and led to the cathedral\'s major restoration in the 1840s.',
            category: 'architecture'
          }
        ]
      }
    }
  });

  // Seed Tokyo
  const tokyo = await prisma.city.create({
    data: {
      name: 'Tokyo',
      facts: {
        create: [
          {
            content: 'Tokyo was originally called Edo and was a small fishing village until 1603, when Tokugawa Ieyasu made it the seat of his shogunate. It became the imperial capital in 1868 and was renamed Tokyo, meaning "Eastern Capital".',
            category: 'political'
          },
          {
            content: 'The Great Kanto Earthquake of 1923 devastated Tokyo, killing over 140,000 people and destroying most of the city. The reconstruction effort modernized Tokyo\'s infrastructure and urban planning, though much was destroyed again in World War II.',
            category: 'daily_life'
          },
          {
            content: 'Tsukiji Fish Market, operating since 1935, was the world\'s largest wholesale fish and seafood market until it moved to Toyosu in 2018. At its peak, it handled over 2,000 tons of seafood daily, with famous tuna auctions reaching prices over $3 million for a single fish.',
            category: 'culture'
          },
          {
            content: 'Tokyo\'s rail system is operated by over 100 different lines and handles approximately 40 million passengers daily, making it the busiest metro system in the world. "Pushers" (oshiya) are employed during rush hour to physically pack passengers into trains.',
            category: 'daily_life'
          },
          {
            content: 'The Imperial Palace in central Tokyo sits on the former site of Edo Castle and is surrounded by 17th-century stone walls and moats. The palace grounds are larger than the entire Principality of Monaco, though most areas remain closed to the public.',
            category: 'architecture'
          }
        ]
      }
    }
  });

  console.log('Seeded cities:', { venice, paris, tokyo });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
