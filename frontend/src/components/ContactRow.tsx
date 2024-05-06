type Props = {
    name: string;
    phone: string;
    email: string;
    job: string;
    income: number;
    location: string;
    details: string;
};


function ContactRow(props: Props) {
    return (
        <tr className="bg-background border-b-2 border-secondary">
            <td className="p-3 text-sm">{props.name}</td>
            <td className="p-3 text-sm">{props.phone}</td>
            <td className="p-3 text-sm">{props.email}</td>
            <td className="p-3 text-sm">{props.job}</td>
            <td className="p-3 text-sm">{props.income}</td>
            <td className="p-3 text-sm">{props.location}</td>
            <td className="p-3 text-sm">{props.details}</td>
        </tr>
    );
}

export default ContactRow;
