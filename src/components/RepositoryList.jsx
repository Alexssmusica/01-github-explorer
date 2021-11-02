import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

// https://api.github.com/users/Alexssmusica/repos

const repository = {
	name: "Unform",
	description: "Forms in React",
	link: "https://google.com"
}

export function RepositoryList() {

	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/users/Alexssmusica/repos')
			.then(response => response.json())
			.then(data => setRepositories(data))
			.catch(error => console.error(error))
	}, [])

	console.log(repositories)

  return (
	<section className="repository-list">
		<h1>Lista de Repositórios</h1>

		<ul>
			<RepositoryItem
				repository={repository}
			/>
			<RepositoryItem
				repository={repository}
			/>
			<RepositoryItem
				repository={repository}
			/>
			<RepositoryItem
				repository={repository}
			/>
		</ul>
	</section>
  );
}
