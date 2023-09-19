import Link from "next/link"

function Customers() {
    return (
        <div>
            <h1>Customers Page</h1>
            <ul>
                <li>
                    <Link href="customers/ishaq">Ishaq</Link>
                </li>
                <li>
                    <Link href="customers/samad">Samad</Link>
                </li>
            </ul>
        </div>
    )
}

export default Customers