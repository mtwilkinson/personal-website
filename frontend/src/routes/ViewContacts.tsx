import {useEffect, useState} from "react";
import { Prisma } from "database/.prisma/client";
import axios from "axios";
import ContactRow from "../components/ContactRow.tsx";
import console from "console";

function Contact() {
    const [contacts, setContacts] = useState<Prisma.ContactCreateInput[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/contact");
                setContacts(response.data); // Assuming the data is an array of request data
            } catch (error) {
                console.error("Error fetching requests", error);
            }
        };

        fetchData().then();
    }, []);

    return (
        <div className={"overflow-clip flex p-16 gap-10 justify-around items-stretch"}>
            <table>
                <thead className="bg-primary border-b-2 border-b-[#F6BD38]">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-background">
                        Name
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-background">
                        Email
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-background">
                        Phone Number
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-background">
                        Job Title
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-background">
                        Income
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-background">
                        Location
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left text-background">
                        Details
                    </th>
                    {/* Dynamically generate column headers */}
                </tr>
                </thead>
                <tbody className="overflow-y-auto">
                {/* Map through the records and create a row for each record */}
                {contacts.map((c) => (
                    <ContactRow name={c.name} phone={c.phone} email={c.email} job={c.job} income={c.income} location={c.location} details={c.details} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contact;
