export default function About () {
    return (

        <div>
      <h2>About Me</h2>
      <img className = "headshot"
        src="../headshot.jpg"
        alt="Headshot of Abdullah Zafar"
      />
      <p className="text-lg mb-6">
        Hi, my name is Abdullah Zafar. I’m passionate about software development,
        technology, and building solutions that solve real-world problems. I am a self-motivated learner,
        and always seek to solve problems creatively. I hope to hone my skills and keep learning to stay effiecent,
        professional and ahead of the industry. 
      </p>
      <iframe
        src="../Abdullah Zafar Portfolio Resume.pdf#zoom=100%"
        className="w-full h-full"
        title="My Resume"
      />
    </div>
    );

}