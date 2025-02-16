import '../../../components/common/FeaturedTopics/featured-health-topic.module.css'

const FeaturedTopics = () => {
    const topics = [
      { title: "COVID-19 Updates", description: "Stay informed about the latest COVID-19 guidelines and vaccination information.", link: "#" },
      { title: "Heart Health", description: "Discover tips and information for maintaining a healthy heart and cardiovascular system.", link: "#" },
      { title: "Mental Wellness", description: "Explore resources and support options for maintaining good mental health.", link: "#" }
    ];
  
    return (
      <section className="featured-topics">
        <h2>Featured Health Topics</h2>
        <div className="topics-container">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <a href={topic.link} className="btn">Learn More</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturedTopics;