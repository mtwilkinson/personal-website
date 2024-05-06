import photo from "../assets/temporary_photo.jpg";
import {useState} from "react";
import { Prisma } from "database/.prisma/client";
import axios from "axios";

function Contact() {
    const emptyContact: Prisma.ContactCreateInput = {name: "", phone: "", email: "", job: "", income: 0, location: "", details: "", date: new Date()};
    const [contact, setContact] = useState<Prisma.ContactCreateInput>(emptyContact);

    async function handleSubmit() {
        if (contact.email !== "") {
            const data = contact;
            data.date = new Date();
            const res = await axios.post("/api/contact", data)
            if (res.status === 200) {
                alert("The form has been submitted. Mike will contact you shortly");
            } else {
                alert("the form failed to submit");
            }
        } else {
            alert("please enter your email before submitting.");
        }
        console.log(contact);
        clear();
    }

    function clear() {
        setContact(emptyContact);
    }

    return (
        <div className={"overflow-clip flex p-16 gap-10 justify-around items-stretch"}>
            <img src={photo} alt="portrait" className={"rounded-2xl outline-4 outline outline-blue-950"}/>
            <div className={"rounded-2xl flex flex-col outline-4 outline outline-blue-950 w-3/5 bg-amber-50 p-8 items-stretch overflow-y-auto gap-6"}>
                <div>
                    <h1 className={"font-bold text-2xl"}>Instructions:</h1>
                    <p>Please fill out the following form (all fields accept email are optional) and click submit. Mike
                        will be notified and respond at his earliest convenience.</p>
                </div>
                <div className={"flex gap-8"}>
                    <div
                        className={"flex flex-col flex-grow rounded-2xl outline-3 outline items-center outline-blue-950 bg-amber-50 p-4"}>
                    <h1 className={"font-bold text-2xl"}>Contact information</h1>
                        <p className={"mt-2"}>Name</p>
                        <input value={contact.name} onChange={(e) => (
                            setContact(prevState => ({
                                ...prevState,
                                name: e.target.value
                            }))
                            )}/>
                        <p className={"mt-2"}>Phone Number</p>
                        <input value={contact.phone} onChange={(e) => (
                            setContact(prevState => ({
                                ...prevState,
                                phone: e.target.value
                            }))
                        )}/>
                        <p className={"mt-2"}>Email</p>
                        <input value={contact.email} onChange={(e) => (
                            setContact(prevState => ({
                                ...prevState,
                                email: e.target.value
                            }))
                        )}/>
                    </div>
                    <div
                        className={"flex flex-col flex-grow rounded-2xl outline-3 outline items-center outline-blue-950 bg-amber-50 p-4"}>
                        <h1 className={"font-bold text-2xl"}>Job information</h1>
                        <p className={"mt-2"}>Job Title</p>
                        <input value={contact.job} onChange={(e) => (
                            setContact(prevState => ({
                                ...prevState,
                                job: e.target.value
                            }))
                        )}/>
                        <p className={"mt-2"}>Estimated Yearly income</p>
                        <input value={contact.income} onChange={(e) => (
                            e.target.value === "" ?
                                setContact(prevState => ({
                                    ...prevState,
                                    income: 0
                                })) :
                                setContact(prevState => ({
                                    ...prevState,
                                    income: parseInt(e.target.value)
                                }))
                        )}/>
                        <p className={"mt-2"}>Location</p>
                        <input value={contact.location} onChange={(e) => (
                            setContact(prevState => ({
                                ...prevState,
                                location: e.target.value
                            }))
                        )}/>
                    </div>
                </div>

                <div
                    className={"flex flex-col flex-grow rounded-2xl outline-3 outline items-stretch outline-blue-950 bg-amber-50 p-4"}>
                    <h1 className={"font-bold text-2xl text-center mb-2"}>Additional Details</h1>
                    <textarea value={contact.details} className={"flex-grow p-2 outline-1 outline outline-blue-700 rounded focus:outline-2"} onChange={(e) => (
                        setContact(prevState => ({
                            ...prevState,
                            details: e.target.value
                        }))
                    )}/>
                </div>
                <div className={"flex gap-4"}>
                    <button onClick={clear}
                            className={"bg-red-800 flex-grow font-bold p-4 rounded-2xl text-white hover:bg-red-200 hover:text-black"}>
                        Clear
                    </button>
                    <button onClick={handleSubmit}
                            className={"bg-blue-800 flex-grow font-bold p-4 rounded-2xl text-white hover:bg-blue-200 hover:text-black"}>
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Contact;
