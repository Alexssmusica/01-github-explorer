import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

export function RepositoryList() {

	const repository = {
		name: "Unform",
		description: "Forms in React",
		link: "https://google.com"
	}

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
