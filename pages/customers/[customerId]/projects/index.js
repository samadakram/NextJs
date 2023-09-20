import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router"

function Projects() {

    const router = useRouter();
    const { customerId, projectId } = router.query;

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getCustomerData();
    }, []);

    const getCustomerData = async () => {
        try {
            const response = await fetch("/customerData.json");
            const data = await response.json();
            data.customers.forEach(element => {
                let route = element.Route;
                if (route === customerId) {
                    setProjects(element.projects);
                }
            });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <h1>{customerId}'s Projects List Page</h1>
            <h2>Projects</h2>
            <ul>
                {
                    projects.map((project, index) => {
                        return <li key={index}>
                            <Link href={`/customers/${customerId}/projects/${project}`}>{project}</Link>
                        </li>
                    })
                }



                {/* <li>
                    <Link href={`/customers/${customerId}/projects/trackingApp`}>Tracking App</Link>
                </li>
                <li>
                    <Link href={`/customers/${customerId}/projects/portfolio`}>Portfolio</Link>
                </li> */}
            </ul>
        </div>
    )
}

export default Projects