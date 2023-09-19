import { useRouter } from "next/router"

export default function () {

    const router = useRouter();

    const { username } = router.query;

    return (
        <h1> {username}'s profile Page</h1>
    )
}
