export default function Services () {
    return (

//Services page
<div>

    <h3>I offer a variety of services and skills for your needs, including but not limited to:</h3>

    <div className="service">
        <h2>Programming</h2>
        {/*Anchor tag redirects user to the About Me Page for accessibility*/}
        <p>I can build whatever software/web app you need in many languages (Refer to Resume in <a href="/About">About Me</a>)</p>
        <img className="serv1" src="/programming.jpg" alt="The context flow diagram I created for a project for finance mangement that I was leading"/>
    </div>

    <div className="service">
        <h2>Diagram Designing</h2>
        <p>Lead a project to create a database for an e commerce site and designed an ERD</p>
        <img className = "serv2" src="/ERD.png" alt="The ERD diagram created for the courthouse database project that I lead"/>
    </div>

    <div className="service">
        <h2>QA Testing/Debugging</h2>
        <p>Developed a responsive personal portfolio using React and Tailwind CSS.</p>
        <img className = "serv3" src="/debugging.jpg" alt="Portfolio Website front page"/>
    </div>

</div>

    );

}