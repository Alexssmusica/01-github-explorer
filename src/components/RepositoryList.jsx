import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

// https://api.github.com/users/Alexssmusica/repos

export function RepositoryList() {

	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/users/Alexssmusica/repos')
			.then(response => response.json())
			.then(data => setRepositories(data))
			.catch(error => console.error(error))
	}, [])

  return (
	<section className="repository-list">
		<h1>Lista de Repositórios</h1>

		<ul>
			{repositories.map(repository => {
				return <RepositoryItem key={repository.id} repository={repository} />
			})}
		</ul>
	</section>
  );
}
