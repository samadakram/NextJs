import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Customers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomerData();
    }, []);

    const getCustomerData = async () => {
        try {
            const response = await fetch("/customerData.json");
            const data = await response.json();
            setCustomers(data.customers);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h1>Customers Page</h1>
            <ul>
                {
                    customers.map((customer, index) => {
                        return (
                            <li>
                                <Link href={`customers/${customer.Route}`}>{customer.Name}</Link>
                            </li>
                        )
                    })
                }

                {/* <li>
                    <Link href="customers/ishaq">Ishaq</Link>
                </li>
                <li>
                    <Link href="customers/samad">Samad</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Customers