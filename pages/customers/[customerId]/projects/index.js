import Link from "next/link";
import { useRouter } from "next/router"

function Projects() {

    const router = useRouter();
    const { customerId, projectId } = router.query;

    return (
        <div>
            <h1>{customerId}'s Projects List Page</h1>
            <h2>Projects</h2>
            <ul>
                <li>
                    <Link href={`/customers/${customerId}/projects/trackingApp`}>Tracking App</Link>
                </li>
                <li>
                    <Link href={`/customers/${customerId}/projects/portfolio`}>Portfolio</Link>
                </li>
            </ul>
        </div>
    )
}

export default Projects