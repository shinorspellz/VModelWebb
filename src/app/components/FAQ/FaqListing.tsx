import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import VMContainer from "../Layout/VMContainer";
import Box from "@mui/system/Box";
import { dm_sans } from "@/utils/fonts";

const FaqListing = () => {
  const faq = [
    {
      title: "Businesses And Brands",
      data: [
        {
          title: "What is VModel and how does it work?",
          desc: "VModel is an innovative platform that connects businesses with talented creatives. It works by allowing businesses to browse through a diverse pool of creatives, book them for various projects, and manage the entire process seamlessly.",
        },
        {
          title: "How can VModel benefit my business?",
          desc: "VModel empowers your business by providing access to a wide range of talented creatives who can elevate your projects. With our platform, you can easily find, book, and collaborate with professionals who align with your vision, saving you time and effort.",
        },
        {
          title: "Is VModel limited to a specific industry or creative field?",
          desc: "Not at all! VModel caters to multiple industries and creative fields. Whether you need models, influencers, digital creators, beauticians, or makeup artists, our platform has a diverse range of talent to meet your unique requirements.",
        },
        {
          title: "How can I ensure the quality of talent on VModel?",
          desc: "VModel takes quality seriously. We have a rigorous screening process that evaluates the skills, experience, and portfolio of each creative before they join our platform. Additionally, we encourage user reviews and ratings, enabling you to make informed decisions based on others&rsquo; experiences.",
        },
        {
          title: "Can I communicate with the talent before booking them?",
          desc: "Absolutely! VModel allows direct communication between businesses and creatives. You can chat with potential talent, discuss project details, and ensure that they are the perfect fit for your needs before finalizing the booking.",
        },
        {
          title:
            "Can I leave reviews and feedback for the talent I've worked with?",
          desc: "Yes, we encourage businesses to leave reviews and provide feedback for the talent they&rsquo;ve collaborated with. Your reviews not only help other businesses make informed decisions but also provide valuable insights to the talent community.",
        },
        {
          title: "Are there any hidden fees or additional charges on VModel?",
          desc: "Transparency is a core value at VModel. We strive to provide clear pricing information, and there are no hidden fees or additional charges. The price you see on the talent&rsquo;s profile is the price you pay, plus our commision of 10%.",
        },
        {
          title:
            "Can I book talent for both short-term and long-term projects?",
          desc: "Absolutely! VModel accommodates both short-term and long-term projects. Whether you need talent for a single-day event or an extended campaign, our platform allows you to find the perfect fit for your project&rsquo;s duration.",
        },
        {
          title:
            "How can VModel help businesses in terms of diversity and inclusivity?",
          desc: "VModel embraces diversity and inclusivity. Our platform offers a diverse pool of talent from different backgrounds, ethnicities, and cultures. We believe in providing equal opportunities and celebrating the richness of diversity in creative industries.",
        },
        {
          title:
            "What if I encounter any issues or disputes with the talent I've booked?",
          desc: "In the rare instance of encountering issues or disputes, VModel encourages open communication and strives to mediate and resolve conflicts. We have a dedicated support team to assist you in addressing any concerns that may arise during the booking process",
        },
        {
          title: "How can I get started with VModel?",
          desc: "Getting started with VModel is easy! Simply sign up for an account, create your profile, and start exploring the diverse pool of talent available on our platform. From there, you can browse, book, and embark on your creative projects with confidence.",
        },
      ],
    },
    {
      title: "Talent And Creators",
      data: [
        {
          title: "How can VModel benefit me as a creative talent?",
          desc: "VModel provides a platform for talented individuals like you to showcase your skills, gain exposure, and connect with businesses seeking your expertise. It&rsquo;s a great opportunity to expand your portfolio and network within the industry.",
        },
        {
          title: "What types of creative talent does VModel cater to?",
          desc: "VModel welcomes various types of creative talent, including models, influencers, digital creators, beauticians, digital stylists, makeup artists, virtual influencers, and more. If you have a unique skill set or creative talent, VModel is the place for you.",
        },
        {
          title: "How can I create a standout profile on VModel?",
          desc: "To create a standout profile, make sure to showcase your best work, highlight your unique skills and experiences, and provide detailed information about your expertise and creative style. Use high-quality images and engaging descriptions to captivate potential clients.",
        },
        {
          title: "Can I set my own rates as a talent on VModel?",
          desc: "Yes, you have control over setting your rates on VModel. You can consider your experience, demand, and the nature of the project when determining your rates. It&rsquo;s important to strike a balance that reflects your value and aligns with market standards.",
        },
        {
          title: "How does VModel help me secure bookings and collaborations?",
          desc: "VModel connects you with businesses actively seeking creative talent. By maintaining an impressive profile, showcasing your skills, and actively engaging with the platform, you increase your chances of attracting bookings and collaborations that align with your expertise.",
        },
        {
          title:
            "Can I negotiate terms and conditions with businesses before accepting a booking?",
          desc: "Absolutely! VModel encourages open communication between talent and businesses. You can negotiate terms, discuss project details, and ensure that both parties are aligned before accepting a booking. Clear communication helps set expectations and ensures a successful collaboration.",
        },
        {
          title: "What if I need to decline a booking request?",
          desc: "If you need to decline a booking request, it&rsquo;s important to communicate your reasons professionally and promptly. VModel understands that availability and fit are crucial factors, and declining a request that doesn&rsquo;t align with your schedule or expertise is acceptable.",
        },
        {
          title:
            "How does VModel handle payments and ensure prompt payment for talent?",
          desc: "VModel facilitates secure and timely payments for talent. Once a project is successfully completed, VModel ensures that payments are processed after 3 days according to the agreed terms.",
        },
        {
          title:
            "Can I showcase my work from previous collaborations on VModel?",
          desc: "Absolutely! VModel encourages you to showcase your work from previous collaborations on your profile. This helps potential clients get a better understanding of your skills, style, and expertise, increasing your chances of securing new opportunities.",
        },
        {
          title: "Can I collaborate with other talents through VModel?",
          desc: "Absolutely! VModel encourages collaboration among talents. You can connect with other creatives, explore collaboration opportunities, and expand your network within the VModel community. Collaborative projects can lead to exciting new ventures and enhance your portfolio.",
        },
        {
          title: "Can I offer additional services or packages on VModel?",
          desc: "Yes, you have the flexibility to offer additional services or package options on VModel. This allows you to cater to different client needs and preferences and create customized offerings that showcase your versatility as a creative talent.",
        },
        {
          title: "Can I receive feedback and reviews from clients on VModel?",
          desc: "Yes, clients have the option to provide feedback and reviews on your VModel profile. Positive reviews will enhance your credibility and attract more opportunities. It&rsquo;s important to deliver exceptional work and maintain professionalism to receive positive feedback.",
        },
        {
          title: "Can I update my availability and schedule on VModel?",
          desc: "Absolutely! VModel provides a user-friendly interface where you can easily update your availability and schedule. This ensures that businesses seeking your talent are aware of your current availability, making the booking process seamless.",
        },
        {
          title: "How can VModel help me grow my career as a creative talent?",
          desc: "VModel serves as a platform for you to gain exposure, expand your network, and secure exciting opportunities that can propel your career. By leveraging VModel&rsquo;s features, showcasing your talent, and delivering exceptional work, you can attract new clients and take your career to new heights.",
        },
      ],
    },
  ];
  return (
    <>
      <VMContainer>
        <Box
          className="w-full"
          sx={{
            ".MuiPaper-root": {
              background: "transparent",
              boxShadow: "none",
            },
            ".MuiPaper-root:before": {
              border: "none",
            },
            ".MuiTypography-root": {
              color: "var(--vm-secondary)",
              fontSize: "18px",
            },
            ".MuiAccordionSummary-expandIconWrapper": {
              color: "#fff",
            },
          }}
        >
          <div className="w-full">
            {/* <div className="flex flex-col no-bord md:flex-row w-full mx-auto md:items-center md:pt-[20px] ">
              {faq.map((faqItem, index) => (
                <div className="w-full hoverAccord md:w-1/2" key={index}>
                  <div>
                    <h2 className="vm-h2-ext text-white ">{faqItem?.title}</h2>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="flex flex-col no-bord md:flex-row w-full mx-auto  md:pt-[10px] md:space-x-3">
              {faq.map((faqItem, index) => (
                <div
                  className={`w-full hoverAccord md:w-1/2 ${
                    index == 1 ? "mt-12 md:mt-0" : "mt-0"
                  }`}
                  key={index}
                >
                  <div>
                    <h2 className="vm-h2-ext text-white ">{faqItem?.title}</h2>
                  </div>
                  {faqItem.data.map((subItem, index) => (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={`${dm_sans.className}`}>
                          {subItem?.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{subItem.desc}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Box>
      </VMContainer>
    </>
  );
};

export default FaqListing;
