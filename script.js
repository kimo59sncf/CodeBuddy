const commands = {
    git: [
        {
            command: 'git config --global user.name "VotreNom"',
            description: "Configurez votre nom d'utilisateur pour les commits."
        },
        {
            command: 'git init',
            description: "Initialise un dépôt Git dans le répertoire courant."
        },
        {
            command: 'git add .',
            description: "Ajoute tous les fichiers modifiés à la zone de préparation."
        },
        {
            command: 'git push origin <branche>',
            description: "Envoie vos commits locaux vers la branche distante spécifiée."
        }
    ],
    docker: [
        {
            command: 'docker pull <nom_image>',
            description: "Télécharge une image Docker depuis le registre Docker Hub."
        },
        {
            command: 'docker run <nom_image>',
            description: "Lance un conteneur basé sur l'image spécifiée."
        },
        {
            command: 'docker ps',
            description: "Affiche la liste des conteneurs actifs."
        },
        {
            command: 'docker exec -it <container_id> bash',
            description: "Accède à un conteneur actif en mode interactif."
        }
    ],
    linux: [
        {
            command: 'ls',
            description: "Liste les fichiers et dossiers du répertoire courant."
        },
        {
            command: 'cd <dossier>',
            description: "Change de répertoire pour celui spécifié."
        },
        {
            command: 'touch <nom_fichier>',
            description: "Crée un fichier vide avec le nom spécifié."
        }
    ],
    node: [
        {
            command: 'npm init',
            description: "Initialise un nouveau projet Node.js avec un fichier package.json."
        },
        {
            command: 'npm install <nom_module>',
            description: "Installe un module Node.js dans le projet courant."
        },
        {
            command: 'node <nom_fichier.js>',
            description: "Exécute un fichier JavaScript avec Node.js."
        }
    ],
    python: [
        {
            command: 'python -m venv <nom_env>',
            description: "Crée un environnement virtuel Python pour isoler vos dépendances."
        },
        {
            command: 'source <nom_env>/bin/activate',
            description: "Active l'environnement virtuel sous Linux/Mac."
        },
        {
            command: 'pip install <nom_paquet>',
            description: "Installe un paquet Python à partir de PyPI."
        }
    ]
};

function showCommands(category) {
    const content = document.getElementById('content');
    if (!commands[category]) {
        content.innerHTML = "<p>Catégorie non trouvée.</p>";
        return;
    }

    const commandList = commands[category]
        .map(item => `
            <div class="command">
                <div>
                    <span class="command-text">${item.command}</span>
                    <p class="command-description">${item.description}</p>
                </div>
                <button class="copy-btn" onclick="copyToClipboard('${item.command}')">Copier</button>
            </div>
        `)
        .join('');

    content.innerHTML = `
        <h2>Commandes ${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        ${commandList}
    `;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Commande copiée : " + text))
        .catch(err => alert("Erreur lors de la copie"));
}
