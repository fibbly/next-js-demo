// our-domain.com/news/:id

import { useRouter } from "next/router";

function DetailsPage() {
	const router = useRouter();
	const id = router.query.id;
	return <h1>The Details Page</h1>;
}

export default DetailsPage;
