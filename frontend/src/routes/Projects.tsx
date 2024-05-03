import SIGCSE from '../assets/SIGCSE Poster.jpg';


function Projects() {


    return (
        <div className={"flex w-screen flex-grow p-12 gap-10 justify-start items-stretch overflow-scroll pt-16"}>
            <div className={"p-8 min-w-96 w-96 flex flex-col items-start border-4 border-blue-950 rounded-2xl"}>
                <h1 className={"text-lg font-bold mb-4"}>A Web Development and Cloud Deployment Framework for a Software
                    Engineering Course</h1>
                <p>For my MQP (Major Qualifying Project) I worked on a team of 5 students to update a software
                    engineering from a Java-based framework to a web-based framework. We selected technologies for the
                    new framework and built an application to test the framework and ensure that it can build complex
                    applications, and ensure it can be quickly learned by students unfamiliar with web development.
                    Additionally, we created resources to help students learn the new technology. Finally, we presented
                    our project at the 2024 SIGCSE Technical Symposium.</p>
                <a className={"text-blue-700 underline"}
                   href={"https://sigcse2024.sigcse.org/details/sigcse-ts-2024-acm-student-research-competition/18/A-Web-Development-and-Cloud-Deployment-Framework-for-a-Software-Engineering-Course"}>
                    SIGCSE Submission
                </a>
            </div>
            <img src={SIGCSE} alt="portrait" className={"rounded-2xl outline outline-4 outline-blue-950 bg-blue-950"}/>
        </div>
    );
}

export default Projects;
