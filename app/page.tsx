import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BorderedImage } from '@/components/ui/bordered-image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyList,
  TypographyP,
} from '@/components/ui/typography';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-24 py-8">
      <div className="flex flex-row items-start justify-between w-full">
        <TypographyH1>
          <span className="text-lg font-normal transition-all hover:text-3xl">
            Vote & Support
          </span>
          <br />
          <b>Dave Kapur</b>
          <br />
          <span className="text-xl font-normal">
            for Board of Director at the Austin Board of REALTORS®
          </span>
        </TypographyH1>
        <div>
          <BorderedImage
            src="/dave.jpg"
            alt="Dave Kapur"
            width="400"
            height="400"
            priority
          />
        </div>
      </div>
      <TypographyH4 className="-mt-8">Hello Fellow REALTORS®!</TypographyH4>
      <TypographyP>
        I am Dave Kapur, Broker Associate with All City Real Estate, Ltd. Co.
        and I am one of the Nominees for the Board of Directors at ABoR.
      </TypographyP>
      <TypographyP>
        I was lucky to have been mentored by some of the stalwarts of our
        industry early on in my Real Estate career. And they encouraged me to
        get involved right from the get go. I have been a volunteer with the
        Austin Board of Realtors and Texas Realtors since the infancy of my real
        estate career, serving on various committees and as a volunteer with
        initiatives with the foundation and advocacy groups. I would like to see
        our association membership grow not just in numbers but also in
        professional standards - in competency, customer service and ethics. We
        have to take accountability of our actions and the growth of our
        careers. I strongly believe one has to &ldquo;be the change that they
        would like to see in the world&rdquo; and one cannot effect that change
        standing on the sidelines, and not unless we&nbsp;<b>OURSELVES</b>
        &nbsp;Get Involved.
      </TypographyP>
      <section className="flex flex-col gap-4 mt-4">
        <TypographyH3>5E Program</TypographyH3>
        <Card className="max-w-prose even:self-end">
          <CardHeader>
            <CardTitle>Engage</CardTitle>
          </CardHeader>
          <CardContent>
            I will work to engage the membership and encourage them to get
            involved. I will work to engage the leadership and encourage them to
            be more transparent and accountable to the membership.
          </CardContent>
        </Card>
        <Card className="max-w-prose even:self-end">
          <CardHeader>
            <CardTitle>Educate</CardTitle>
          </CardHeader>
          <CardContent>
            I will work to educate the membership on the importance of
            professionalism and the value of our association. I will work to
            educate the leadership on the importance of transparency and
            accountability to the membership.
          </CardContent>
        </Card>
        <Card className="max-w-prose even:self-end">
          <CardHeader>
            <CardTitle>Embrace</CardTitle>
          </CardHeader>
          <CardContent>
            I will work to embrace the membership and encourage them to embrace
            the association. I will work to embrace the leadership and encourage
            them to embrace the membership.
          </CardContent>
        </Card>
        <Card className="max-w-prose even:self-end">
          <CardHeader>
            <CardTitle>Elevate</CardTitle>
          </CardHeader>
          <CardContent>
            I will work to elevate the membership and encourage them to elevate
            the association. I will work to elevate the leadership and encourage
            them to elevate the membership.
          </CardContent>
        </Card>
        <Card className="max-w-prose even:self-end">
          <CardHeader>
            <CardTitle>Empower</CardTitle>
          </CardHeader>
          <CardContent>
            I will work to empower the membership and encourage them to empower
            the association. I will work to empower the leadership and encourage
            them to empower the membership.
          </CardContent>
        </Card>
      </section>
      <section>
        <TypographyH3>Why Choose Dave?</TypographyH3>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Texas REALTORS®</AccordionTrigger>
            <AccordionContent>
              <TypographyList>
                <li>
                  Graduate, Texas REALTORS® Leadership Program (TRLP) (2022-)
                </li>
                <li>Professional Standards Committee (2024-2019)</li>
                <li>Global Committee (2023, 2020)</li>
                <li>Education Committee Panel Members (2017)</li>
              </TypographyList>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Austin Board of REALTORS®</AccordionTrigger>
            <AccordionContent>
              <TypographyList>
                <li>Budget Committee (2023-2024)</li>
                <li>Global Advisory Group (2023)</li>
                <li>Global Ambassador - Asia India (2023-2019)</li>
                <li>Global Business Alliance (ABoR GBA) (2023-2022)</li>
                <li>Budget, Audit & Investment Committee (2020-2019)</li>
                <li>Investment Committee (2019)</li>
                <li>Global Committee (2018)</li>
              </TypographyList>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Awards, Qualifications, Certifications and Designations
            </AccordionTrigger>
            <AccordionContent>
              <TypographyList>
                <li>The Ethics Award, Austin Board of REALTORS® (2021)</li>
                <li>
                  Five Star Professional Award for Real Estate, Winner 6 years
                  in a Row (2018 - 2023)
                </li>
                <li>
                  Awarded ‘The President Volunteer Service Award’ by President
                  Obama
                </li>
                <li>Life Member, MENSA International</li>
              </TypographyList>
              <br />
              <TypographyList>
                <li>
                  MBA, Darden Graduate School of Business, University of
                  Virginia, 2008
                </li>
                <li>
                  MSE (Industrial & Operations Engineering), University of
                  Michigan, 2000
                </li>
                <li>BSc (Mechanical Engineering), University of Pune, 1996</li>
                <li>Advanced Diploma in Systems Management, NIIT, 1995</li>
              </TypographyList>
              <br />
              <TypographyList>
                <li>TX Real Estate Broker - 2022</li>
                <li>GRI: Graduate, REALTORS® Institute</li>
                <li>CIPS: Certified International Property Specialist</li>
                <li>AHWD: At Home With Diversity</li>
                <li>C2EX: Commitment to Excellence</li>
                <li>NHCS: New Home Construction Specialist</li>
                <li>RSPS: Resort and Second Property Specialist</li>
                <li>PSA: Pricing Strategy Advisor</li>
                <li>CFS: Certified Financing Specialist</li>
              </TypographyList>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <TypographyH3>Vote for Dave</TypographyH3>
        <TypographyP>
          Dear Members,
          <br />I am asking you to support and vote for me during the elections
          from <i>September 18 - 20th</i>. But more importantly, I encourage you
          to&nbsp;<b>VOTE</b>. Make your voice heard and&nbsp;
          <b>GET INVOLVED</b>. Please feel free to reach out to me, if you would
          like to discuss any issues or concerns that you may have. I am
          available at 512.920.3155 or by email at&nbsp;
          <a
            href="mailto:dreamtxhomes@gmail.com"
            rel="noreferrer"
            target="_blank">
            dreamtxhomes@gmail.com
          </a>
          .
        </TypographyP>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/MZ4HfNtu0Mo?si=UGtVQ42D73W7soBB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="place-self-center"
        />
      </section>
      <div className="flex flex-row gap-4 mt-4 justify-between">
        <div className="flex flex-row gap-4 place-self-center">
          <SocialIcon
            url="https://www.facebook.com/DreamTXHomes/"
            className="transition-transform hover:-translate-y-4"
          />
          <SocialIcon
            url="https://www.instagram.com/dreamtxhomes/"
            className="transition-transform hover:-translate-y-4"
          />
          <SocialIcon
            url="https://www.youtube.com/@dreamtxhomes/"
            className="transition-transform hover:-translate-y-4"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/divyakshkapur/"
            className="transition-transform hover:-translate-y-4"
          />
          <SocialIcon
            url="https://wa.me/15129203155"
            className="transition-transform hover:-translate-y-4"
          />
          <SocialIcon
            url="https://twitter.com/divyaksh"
            className="transition-transform hover:-translate-y-4"
          />
        </div>
        <div className="flex flex-row gap-4 place-self-end">
          <Image src="/all-city.png" alt="All City" width="100" height="100" />
          <Image
            src="/dream-tx-homes.png"
            alt="Dream TX Homes"
            width="150"
            height="100"
          />
        </div>
      </div>
    </main>
  );
}
