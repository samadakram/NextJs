import Link from "next/link";
import { useRouter } from "next/router"

function Customers() {

    const router = useRouter();
    const { customerId } = router.query;

    return (
        <div>
            <h1>Customer {customerId} Detail Page</h1>
            <h2>Projects</h2>
            <Link href={`/customers/${customerId}/projects`}>Go to Customer's Project List</Link>
        </div>
    )
}

export default Customers