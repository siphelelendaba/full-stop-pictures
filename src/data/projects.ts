import gems from "@/assets/project-gems.jpg";
import plastik from "@/assets/project-plastik.jpg";
import promosa from "@/assets/project-promosa.jpg";
import barrel from "@/assets/project-barrel.jpg";
import ice from "@/assets/project-ice.jpg";
import art from "@/assets/project-art.jpg";

export type Project = {
  title: string;
  type: string;
  duration: string;
  genre: string;
  impact: string;
  synopsis: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Little Hidden Gems",
    type: "Docu-Series",
    duration: "45 mins x 6 Episodes — Season 1",
    genre: "Tourism",
    impact: "Promotes local tourism, boosts SME growth, and showcases South Africa's cultural richness.",
    synopsis:
      "This series explores South Africa's lesser-known tourist destinations, blending cultural heritage with entrepreneurial innovation. It aims to inspire local pride while attracting global interest, positioning South Africa as a hub for unique and sustainable tourism while shining a light on local SMMEs.",
    image: gems,
  },
  {
    title: "Plastik",
    type: "Film",
    duration: "90 mins",
    genre: "Dark Comedy / Thriller",
    impact: "Employs diverse cast and crew, creates dialogue around economic struggles.",
    synopsis:
      "Set in Johannesburg, this film follows four supermarket employees who decide to defraud their own store in efforts to relieve their economic burdens. Their comedic and chaotic journey explores themes of resilience, desperation, and friendship, subtly addressing societal issues such as inequality and debt in South Africa.",
    image: plastik,
  },
  {
    title: "Promosa",
    type: "Film",
    duration: "100 mins",
    genre: "True Life Drama",
    impact: "Raises awareness about LGBTQ+ rights and justice, empowers underrepresented voices.",
    synopsis:
      "Based on true events, this film delves into the 2016 murder of Lesley Makousa, a beloved LGBTQ+ teenager. The narrative examines the community's grief, the fight for justice, and the broader challenges faced by the LGBTQ+ community in what is known to be a constitutionally progressive country; South Africa.",
    image: promosa,
  },
  {
    title: "The Barrel",
    type: "Film",
    duration: "90 mins",
    genre: "Inspiring Fiction",
    impact: "Highlights mental health issues, creates dialogue on societal reintegration post military life.",
    synopsis:
      "Selaelo, a soldier dealing with trauma and financial instability, faces a crossroads after being forced out of the military. As she transitions into civilian life, her struggles with post-traumatic stress lead her into a world of crime. The film captures her journey of redemption and resilience.",
    image: barrel,
  },
  {
    title: "Ice Dreams",
    type: "Film",
    duration: "100 mins",
    genre: "Fictional Drama",
    impact: "Promotes themes of mentorship and youth empowerment, encourages international collaborations.",
    synopsis:
      "A former Norwegian figure skater battling addiction mentors a South African teenager with Olympic aspirations. This heartfelt story emphasizes perseverance, mentorship, and the power of second chances, transcending cultural barriers.",
    image: ice,
  },
  {
    title: "The Art of Impression",
    type: "Film",
    duration: "100 mins",
    genre: "Fictional Drama",
    impact: "Explores themes of reinvention, deception, and survival, shedding light on the allure and consequences of ambition in a high-stakes, crime-driven world.",
    synopsis:
      "The film follows Paula Peters, a 32-year-old materialistic woman who loses her perfect life in a messy divorce. Desperate to reclaim her home, she teams up with Jacob, a street vendor, to pull off an art theft scheme. Joining his skilled crew, Paula uses her charm and sales expertise to navigate the black-market art world, all while staying on the good side of their dangerous employer, known only as 'Boss.' But when the stolen artwork stops coming in and pressure mounts from her vengeful ex, legal troubles, and a brewing betrayal, Paula turns to forgery — risking everything.",
    image: art,
  },
];

export const team = [
  { name: "Siphesihle Ndaba", role: "Founder & CEO", bio: "A visionary filmmaker, actor and CEO dedicated to creating authentic African stories that empower women and drive social change through impactful roles and productions." },
  { name: "Sthe Mabanga", role: "Commercial Director", bio: "A visionary entrepreneur and founder of the Africa Sport and Entertainment Summit, driving investments in sports, arts and technology across Africa's creative industries." },
  { name: "Ntokozo Mdlalose", role: "CFO", bio: "A highly accomplished financial director and seasoned expert with extensive experience in strategic financial management, risk advisory and business development across multiple industries." },
  { name: "Ayanda Mhlongo", role: "COO", bio: "A multi award-winning marketer with a decade of expertise in building and amplifying global brands across Africa — leading strategies for Trace Urban TV, MTV and BET Africa." },
  { name: "Thabiso Mabanna", role: "Line Producer", bio: "A dynamic finance professional and entrepreneur with expertise in applied mathematics, corporate finance and private equity. Co-founder of Nguniverse Studios." },
  { name: "Thabo Rametsi", role: "Supervising Producer", bio: "An accomplished South African actor, writer, director and producer with a career spanning Hollywood productions, major streaming platforms and celebrated local projects." },
  { name: "Wesley Gainer", role: "Producer", bio: "A seasoned casting professional and talent representative with extensive experience on international projects including Batman v Superman: Dawn of Justice, Roots and Black is King." },
  { name: "Jonathan Parkinson", role: "Director", bio: "A multi award-winning director with over 30 years of experience in top-end TV commercials and film, known for his dark comedy style and recent work on The Drop, now streaming on Prime." },
];