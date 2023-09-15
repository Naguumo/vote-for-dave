import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TypographyH3 } from './ui/typography';

const fiveEItems = [
  {
    title: 'Engage',
    content: `Engage members, get them involved and encourage them to volunteer their time - within the community, at the local level, state level and at NAR.`,
  },
  {
    title: 'Educate',
    content: `Help learn, build and improve skills - professional and personal; be more competent and knowledgeable. Understand the contracts. Learn the tools available - even something as basic as the MLS.`,
  },
  {
    title: 'Embrace',
    content: `Accept and adapt to the change and innovation that is happening in our industry.  It's as simple as 'Get in line with technological changes or Get left behind'. Be Inclusive. Embrace the diversity - not just of culture, religion and ethnicity but diversity of thought and experience.`,
  },
  {
    title: 'Elevate',
    content: `Elevate our game, our skills and knowledge, our customer focus, our professionalism.  Collaborate with your fellow REALTORS, not always compete. Raise the bar for all, with all.`,
  },
  {
    title: 'Empower',
    content: `Agents need to own their career growth and business development.  They should feel empowered to question the status quo and frankly, even their brokers and current rules. The business models in place today are Broker centric.  We need to move towards being Agent Centric.`,
  },
];

export const FiveEProgram = () => {
  return (
    <>
      {fiveEItems.map(({ title, content }) => (
        <Card className="max-w-prose even:self-end" key={title}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>{content}</CardContent>
        </Card>
      ))}
    </>
  );
};
