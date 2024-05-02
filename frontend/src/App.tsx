import './App.css';
import { Prisma } from "database/.prisma/client";
import axios from "axios";

function App() {

    async function postData() {

        const data: Prisma.FeedbackCreateInput = {
            name: 'Mike',
            feedback: 'is an SA'
        }
        //sends a post request the /api/high-score
        const res = await axios.post("/api/example", data);
        if(res.status === 200) {
            console.log("added feedback");
        }
    }

    async function getData() {
        const res = await axios.get("api/example");
        console.log(res.data);
    }

    return (
        <div className="App">
            <button onClick={postData}>post feedback</button>
            <button onClick={getData}>get feedback</button>
        </div>
    );
}

export default App;
