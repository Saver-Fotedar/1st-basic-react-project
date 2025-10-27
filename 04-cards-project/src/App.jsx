import Card from "./components/Card";

const App = () => {
  // ---------------------
  // Some Array Concepts
  // ---------------------

  // ----------------------------------
  //  const arr=[
  // {User:'Saver', Age:'22'},
  // {User:'Rajni', Age:'23'},
  // {User:'Rajen', Age:'24'},
  // {User:'Sikha', Age:'25'}];

  // arr.map(function(elem){
  //   console.log(elem);
  //   console.log(elem.User)
  //   console.log(elem.Age)

  // })
  // console.log(arr)
  // ----------------------------------

  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Bangalore, India",
      description:
        "Work on Meta’s core web applications, optimizing performance and accessibility. Collaborate with designers and backend engineers to create seamless user experiences.",
    },
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Hyderabad, India",
      description:
        "Develop scalable software systems and tools that power billions of users globally. Work with cross-functional teams on projects involving search, AI, and data infrastructure.",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Chennai, India",
      description:
        "Design and maintain microservices supporting Amazon’s global e-commerce platform. Ensure reliability, scalability, and high performance of distributed backend systems.",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Mumbai, India",
      description:
        "Lead UI/UX initiatives for Apple’s India digital ecosystem. Create elegant, user-centered designs and collaborate with developers to deliver seamless experiences.",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "10 weeks ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Pune, India",
      description:
        "Build and automate CI/CD pipelines for Netflix’s streaming platform. Manage infrastructure scalability, reliability, and deployment workflows using modern DevOps tools.",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Noida, India",
      description:
        "Support Azure cloud infrastructure and help build reliable deployment solutions. Work with global teams to optimize cloud services for performance and cost efficiency.",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "2 weeks ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hour",
      location: "Gurugram, India",
      description:
        "Develop full-stack applications to enhance Tesla’s digital operations. Build robust APIs, modern dashboards, and real-time systems supporting innovation in clean energy.",
    },
    {
      brandLogo:
        "https://cdn.iconscout.com/icon/free/png-256/free-ibm-logo-icon-svg-download-png-2284974.png?f=webp",
      companyName: "IBM",
      datePosted: "6 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Kolkata, India",
      description:
        "Analyze datasets and generate business insights for enterprise clients. Create visual dashboards and assist in data-driven decision-making across global IBM projects.",
    },
    {
      brandLogo: "https://cdn-icons-png.freepik.com/512/5436/5436922.png",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hour",
      location: "Bangalore, India",
      description:
        "Lead design strategy for Adobe’s creative tools. Work closely with developers and researchers to innovate intuitive user experiences across web and mobile platforms.",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "1 day ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Remote, India",
      description:
        "Develop and deploy state-of-the-art AI models for real-world applications. Collaborate with global AI researchers to optimize neural networks and large-scale systems.",
    },
  ];

  // jobOpenings.map(function(elem){
  //   console.log(elem.companyName);

  // })
  // console.log(jobOpenings)

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              brand={elem.brandLogo}
              company={elem.companyName}
              date={elem.datePosted}
              dsg={elem.post}
              tagA={elem.tag1}
              tagB={elem.tag2}
              info={elem.description}
              salary={elem.pay}
              loc={elem.location}
            />
          </div>
        );
      })}

      {/* {arr.map(function(elem){
        return <Card name={elem} />
      })} */}
    </div>
  );
};

export default App;
