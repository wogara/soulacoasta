import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-between
        p-8
        md:p-16
        bg-black
        text-white
      "
    >
      <div className="flex w-full max-w-6xl mx-auto mt-16 mb-16">
        {/* Desktop View */}
        <div className="hidden lg:flex w-full">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-base">
              Marlon Orlando Cameron, known professionally as SOULACOASTA, was
              born in Kingston, Jamaica where he was surrounded by music in his
              formative years. At the age of 10, he moved to the United States
              by way of Hartford, Connecticut where he felt an absence of music
              compared to his time in Jamaica. To fill this void, he started
              playing in drum lines and singing in choir in middle school where
              he took a lot of solos when no one else wanted to. This was the
              start of his experience in the limelight.
              <br />
              <br />
              After middle school, he focused on soccer and music took a back
              seat. He attended Springfield College for the sport, but he
              eventually stopped playing and piano took its place. At the age of
              20, he started releasing music under the name, Marlon Orlando, a
              nod to Kendrick Lamar and Isaiah Rashad. Eventually, Marlon
              decided to drop out to pursue music. He eventually moved to
              Providence, RI and played some of his first shows at Brown
              University. To further his artistry, Marlon is now based in
              Brooklyn, NY where also began DJing.
              <br />
              <br />
              As Marlon matured as an artist, Marlon Orlando transformed into
              SOULACOASTA, a journey back to the self. Marlon’s mission through
              the moniker SOULACOASTA is to help people on their journey back to
              themselves through his art. Further, SOULACOASTA is a new genre, a
              blend of dancehall, neo-soul, afrobeats, reggae, and more.
              <br />
              <br />
              Marlon’s musical influences are as diverse as his sound, citing
              legends like Bob Marley who was able to speak to those who are
              young or old, Kendrick Lamar who can convey complex topics through
              his music, and Drake who can put words to feelings that everyone
              has felt. His creative inspiration extends beyond music to include
              comedians such as Dave Chappelle and Kat Williams who both show
              absolute dedication to their craft.
              <br />
              <br />
              Beyond music, Marlon is exploring modeling, fashion design, and
              jewelry making. As SOULACOASTA, Marlon continues to innovate and
              push the boundaries of music, with the goal of helping people come
              back to themselves.
            </p>
          </div>
          <div className="w-1/2 p-8">
            <Image
              src="/images/visuals/hands.jpg" // replace with your image path
              alt="About Image"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <Link
            href="/visuals"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </Link>
          <Link
            href="/shows"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </Link>
        </div>

        {/* Tablet and Mobile View */}
        <div className="lg:hidden relative w-full max-w-3xl h-screen p-0">
          <div className="fixed inset-0 z-0">
            <Image
              src="/images/visuals/hands.jpg" // replace with your image path
              alt="About Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative z-10 p-0 flex flex-col justify-start h-full">
            <div className="bg-black bg-opacity-70 p-2 rounded overflow-y-auto max-h-full">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-base">
                Marlon Orlando Cameron, known professionally as SOULACOASTA, was
                born in Kingston, Jamaica where he was surrounded by music in
                his formative years. At the age of 10, he moved to the United
                States by way of Hartford, Connecticut where he felt an absence
                of music compared to his time in Jamaica. To fill this void, he
                started playing in drum lines and singing in choir in middle
                school where he took a lot of solos when no one else wanted to.
                This was the start of his experience in the limelight.
                <br />
                <br />
                After middle school, he focused on soccer and music took a back
                seat. He attended Springfield College for the sport, but he
                eventually stopped playing and piano took its place. At the age
                of 20, he started releasing music under the name, Marlon
                Orlando, a nod to Kendrick Lamar and Isaiah Rashad. Eventually,
                Marlon decided to drop out to pursue music. He eventually moved
                to Providence, RI and played some of his first shows at Brown
                University. To further his artistry, Marlon is now based in
                Brooklyn, NY where also began DJing.
                <br />
                <br />
                As Marlon matured as an artist, Marlon Orlando transformed into
                SOULACOASTA, a journey back to the self. Marlon’s mission
                through the moniker SOULACOASTA is to help people on their
                journey back to themselves through his art. Further, SOULACOASTA
                is a new genre, a blend of dancehall, neo-soul, afrobeats,
                reggae, and more.
                <br />
                <br />
                Marlon’s musical influences are as diverse as his sound, citing
                legends like Bob Marley who was able to speak to those who are
                young or old, Kendrick Lamar who can convey complex topics
                through his music, and Drake who can put words to feelings that
                everyone has felt. His creative inspiration extends beyond music
                to include comedians such as Dave Chappelle and Kat Williams who
                both show absolute dedication to their craft.
                <br />
                <br />
                Beyond music, Marlon is exploring modeling, fashion design, and
                jewelry making. As SOULACOASTA, Marlon continues to innovate and
                push the boundaries of music, with the goal of helping people
                come back to themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
