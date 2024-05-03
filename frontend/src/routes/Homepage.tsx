import photo from '../assets/temporary_photo.jpg';

function Homepage() {

    return (
        <div className={"flex flex-col items-stretch overflow-clip "}>
            <h1 className={"text-6xl mt-8 text-center"}>Michael Wilkinson</h1>
            <div className={"overflow-clip flex p-16 gap-10 justify-around items-stretch"}>
                <img src={photo} alt="portrait" className={"rounded-2xl outline-4 outline outline-blue-950"}/>
                <div className={"rounded-2xl outline-4 outline outline-blue-950 w-3/5 bg-amber-50 p-8"}>
                    <h2 className={"font-bold text-2xl"}>Introduction:</h2>
                    <p>Michael Wilkinson is a recent graduate from Worcester Polytechnic Institute with a major in
                        Computer Science, and a minor in Electrical and Computer Engineering. He is interested in a full
                        time position as a Software Developer and is willing to relocate to where ever opportunity takes
                        him. He has experience as a full stack developer in both Java-based, and web-based frameworks,
                        as well as considerable experience with C. </p>
                    <h2 className={"font-bold text-2xl mt-4"}>Introduction:</h2>
                    <p>Michael Wilkinson is a recent graduate from Worcester Polytechnic Institute with a major in
                        Computer Science, and a minor in Electrical and Computer Engineering. He is interested in a full
                        time position as a Software Developer and is willing to relocate to where ever opportunity takes
                        him. He has experience as a full stack developer in both Java-based, and web-based frameworks,
                        as well as considerable experience with C. </p>
                    <h2 className={"font-bold text-2xl mt-4"}>Introduction:</h2>
                    <p>Michael Wilkinson is a recent graduate from Worcester Polytechnic Institute with a major in
                        Computer Science, and a minor in Electrical and Computer Engineering. He is interested in a full
                        time position as a Software Developer and is willing to relocate to where ever opportunity takes
                        him. He has experience as a full stack developer in both Java-based, and web-based frameworks,
                        as well as considerable experience with C. </p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
