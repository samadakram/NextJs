import { useRouter } from "next/router"

function ProjectId() {

    const router = useRouter();
    const { customerId, projectId } = router.query;

    return (
        <div>
            <h1>{projectId}'s Detail Page</h1>
            <h2>Project : {projectId}</h2>
            <h3>Details</h3>
        </div>
    )
}

export default ProjectId