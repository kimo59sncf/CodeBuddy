const commands = [

        {
            category: "git",
            command: 'git config --global user.name "VotreNom"',
            description: "Configurez votre nom d'utilisateur pour les commits.",
            tags: ["git", "configuration", "global", "user"],
            complexity: 1,
            usage: 5,
            favorite: false
        },
        {
            category: "git",
            command: 'git config --global user.email "VotreEmail"',
            description: "Configurez votre adresse e-mail pour les commits.",
            tags: ["git", "configuration", "email", "global"],
            complexity: 1,
            usage: 5,
            favorite: false
        },
        {
            category: "git",
            command: "git init",
            description: "Initialise un nouveau dépôt Git dans le répertoire courant.",
            tags: ["git", "init", "dépôt", "initialisation"],
            complexity: 1,
            usage: 7,
            favorite: false
        },
        {
            category: "git",
            command: "git clone <URL>",
            description: "Clone un dépôt distant dans le répertoire local.",
            tags: ["git", "clone", "dépôt", "url"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "git",
            command: "git add <fichier>",
            description: "Ajoute un fichier spécifique à la zone de préparation.",
            tags: ["git", "add", "fichier", "préparation"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "git",
            command: "git add .",
            description: "Ajoute tous les fichiers modifiés à la zone de préparation.",
            tags: ["git", "add", "tous", "fichiers", "préparation"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "git",
            command: "git commit -m 'Message du commit'",
            description: "Enregistre les modifications dans le dépôt avec un message descriptif.",
            tags: ["git", "commit", "message", "modifications"],
            complexity: 2,
            usage: 10,
            favorite: false
        },
        {
            category: "git",
            command: "git status",
            description: "Affiche l'état des fichiers dans le dépôt (suivi, non suivi, ou en préparation).",
            tags: ["git", "status", "fichiers", "état"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "git",
            command: "git log",
            description: "Affiche l'historique des commits.",
            tags: ["git", "log", "historique", "commits"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "git",
            command: "git remote add origin <URL>",
            description: "Associe le dépôt local à un dépôt distant nommé 'origin'.",
            tags: ["git", "remote", "distant", "origin", "url"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "git",
            command: "git remote -v>",
            description: " vérifier le dépôt distant .",
            tags: ["git", "remote", "distant", "origin", "url", "vérifier",],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "git",
            command: "git push origin <branche>",
            description: "Envoie les commits locaux vers la branche distante spécifiée.",
            tags: ["git", "push", "distant", "branche"],
            complexity: 3,
            usage: 8,
            favorite: false
        },
        {
            category: "git",
            command: "git pull",
            description: "Récupère et fusionne les modifications depuis le dépôt distant.",
            tags: ["git", "pull", "récupération", "fusion"],
            complexity: 3,
            usage: 7,
            favorite: false
        },
        {
            category: "git",
            command: "git branch",
            description: "Affiche la liste des branches locales.",
            tags: ["git", "branch", "liste", "local"],
            complexity: 1,
            usage: 6,
            favorite: false
        },
        {
            category: "git",
            command: "git branch <nom_branche>",
            description: "Crée une nouvelle branche avec le nom spécifié.",
            tags: ["git", "branch", "création"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "git",
            command: "git checkout <nom_branche>",
            description: "Bascule sur une branche existante.",
            tags: ["git", "checkout", "branche", "bascule"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "git",
            command: "git merge <nom_branche>",
            description: "Fusionne une branche dans la branche courante.",
            tags: ["git", "merge", "fusion", "branche"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "git",
            command: "git stash",
            description: "Met les modifications en attente pour travailler sur autre chose.",
            tags: ["git", "stash", "modifications", "attente"],
            complexity: 3,
            usage: 4,
            favorite: false
        },
        {
            category: "git",
            command: "git reset <fichier>",
            description: "Supprime un fichier de la zone de préparation sans modifier son contenu.",
            tags: ["git", "reset", "fichier", "préparation"],
            complexity: 2,
            usage: 5,
            favorite: false
        },
        {
            category: "git",
            command: "git reset --hard",
            description: "Réinitialise complètement le dépôt à l'état du dernier commit.",
            tags: ["git", "reset", "hard", "réinitialisation"],
            complexity: 4,
            usage: 3,
            favorite: false
        },
        {
            category: "git",
            command: "git revert <commit>",
            description: "Annule un commit spécifique en créant un nouveau commit.",
            tags: ["git", "revert", "annulation", "commit"],
            complexity: 3,
            usage: 4,
            favorite: false
        },
        {
            category: "docker",
            command: "docker pull <nom_image>",
            description: "Télécharge une image Docker depuis le registre Docker Hub.",
            tags: ["docker", "pull", "image", "téléchargement"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "docker",
            command: "docker images",
            description: "Liste toutes les images Docker disponibles localement.",
            tags: ["docker", "images", "liste", "local"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "docker",
            command: "docker rmi <image_id>",
            description: "Supprime une image Docker spécifiée par son ID.",
            tags: ["docker", "remove", "image", "suppression"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "docker",
            command: "docker run <nom_image>",
            description: "Lance un conteneur basé sur une image spécifiée.",
            tags: ["docker", "run", "conteneur", "image"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "docker",
            command: "docker run -d <nom_image>",
            description: "Lance un conteneur en arrière-plan (mode détaché).",
            tags: ["docker", "run", "detach", "arrière-plan"],
            complexity: 2,
            usage: 9,
            favorite: false
        },
        {
            category: "docker",
            command: "docker ps",
            description: "Liste les conteneurs Docker en cours d'exécution.",
            tags: ["docker", "ps", "conteneurs", "liste"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "docker",
            command: "docker ps -a",
            description: "Liste tous les conteneurs, y compris ceux qui ne sont pas en cours d'exécution.",
            tags: ["docker", "ps", "conteneurs", "historique"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "docker",
            command: "docker stop <container_id>",
            description: "Arrête un conteneur en cours d'exécution.",
            tags: ["docker", "stop", "conteneur", "arrêt"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "docker",
            command: "docker rm <container_id>",
            description: "Supprime un conteneur arrêté.",
            tags: ["docker", "remove", "conteneur", "suppression"],
            complexity: 1,
            usage: 7,
            favorite: false
        },
        {
            category: "docker",
            command: "docker exec -it <container_id> bash",
            description: "Accède à un conteneur actif en mode interactif avec un shell Bash.",
            tags: ["docker", "exec", "conteneur", "bash", "interactif"],
            complexity: 2,
            usage: 9,
            favorite: false
        },
        {
            category: "docker",
            command: "docker logs <container_id>",
            description: "Affiche les journaux d'un conteneur en cours ou arrêté.",
            tags: ["docker", "logs", "conteneur", "journal"],
            complexity: 1,
            usage: 7,
            favorite: false
        },
        {
            category: "docker",
            command: "docker build -t <nom_image> .",
            description: "Construit une nouvelle image Docker à partir d'un Dockerfile.",
            tags: ["docker", "build", "image", "dockerfile"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "docker",
            command: "docker inspect <container_id>",
            description: "Affiche les détails d'un conteneur ou d'une image.",
            tags: ["docker", "inspect", "conteneur", "image"],
            complexity: 2,
            usage: 6,
            favorite: false
        },
        {
            category: "docker",
            command: "docker volume ls",
            description: "Liste tous les volumes Docker existants.",
            tags: ["docker", "volume", "liste", "volumes"],
            complexity: 1,
            usage: 5,
            favorite: false
        },
        {
            category: "docker",
            command: "docker volume rm <volume_name>",
            description: "Supprime un volume Docker spécifié.",
            tags: ["docker", "volume", "remove", "suppression"],
            complexity: 2,
            usage: 5,
            favorite: false
        },
        {
            category: "docker",
            command: "docker network ls",
            description: "Liste tous les réseaux Docker existants.",
            tags: ["docker", "network", "liste", "réseaux"],
            complexity: 1,
            usage: 4,
            favorite: false
        },
        {
            category: "docker",
            command: "docker network create <nom_reseau>",
            description: "Crée un nouveau réseau Docker personnalisé.",
            tags: ["docker", "network", "create", "réseau"],
            complexity: 3,
            usage: 4,
            favorite: false
        },
        {
            category: "docker",
            command: "docker-compose up",
            description: "Lance les conteneurs définis dans un fichier docker-compose.yml.",
            tags: ["docker", "compose", "up", "docker-compose"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "docker",
            command: "docker-compose down",
            description: "Arrête et supprime tous les conteneurs, réseaux et volumes définis par docker-compose.",
            tags: ["docker", "compose", "down", "arrêt"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "linux",
            command: "ls",
            description: "Liste les fichiers et dossiers du répertoire courant.",
            tags: ["linux", "list", "fichiers", "répertoire"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "linux",
            command: "cd <dossier>",
            description: "Change le répertoire courant vers le dossier spécifié.",
            tags: ["linux", "cd", "changer", "répertoire"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "linux",
            command: "pwd",
            description: "Affiche le chemin complet du répertoire courant.",
            tags: ["linux", "pwd", "chemin", "répertoire"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "linux",
            command: "mkdir <nom_dossier>",
            description: "Crée un nouveau dossier dans le répertoire courant.",
            tags: ["linux", "mkdir", "créer", "dossier"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "linux",
            command: "rm <nom_fichier>",
            description: "Supprime un fichier spécifié.",
            tags: ["linux", "rm", "supprimer", "fichier"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "linux",
            command: "rm -r <nom_dossier>",
            description: "Supprime un dossier et son contenu.",
            tags: ["linux", "rm", "supprimer", "dossier"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "linux",
            command: "touch <nom_fichier>",
            description: "Crée un fichier vide avec le nom spécifié.",
            tags: ["linux", "touch", "créer", "fichier"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "linux",
            command: "cp <source> <destination>",
            description: "Copie un fichier ou un dossier vers un nouvel emplacement.",
            tags: ["linux", "copy", "fichier", "dossier"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "linux",
            command: "mv <source> <destination>",
            description: "Déplace ou renomme un fichier ou un dossier.",
            tags: ["linux", "move", "renommer", "déplacer"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "linux",
            command: "cat <nom_fichier>",
            description: "Affiche le contenu d'un fichier dans le terminal.",
            tags: ["linux", "cat", "afficher", "contenu"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "linux",
            command: "nano <nom_fichier>",
            description: "Ouvre un fichier dans l'éditeur de texte Nano.",
            tags: ["linux", "nano", "éditer", "texte"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "linux",
            command: "chmod 755 <nom_fichier>",
            description: "Modifie les permissions d'un fichier ou dossier.",
            tags: ["linux", "chmod", "permissions", "fichier"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "linux",
            command: "chown <utilisateur>:<groupe> <nom_fichier>",
            description: "Change le propriétaire d'un fichier ou dossier.",
            tags: ["linux", "chown", "propriétaire", "fichier"],
            complexity: 3,
            usage: 5,
            favorite: false
        },
        {
            category: "linux",
            command: "top",
            description: "Affiche les processus en cours avec leur consommation de ressources.",
            tags: ["linux", "top", "processus", "système"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "linux",
            command: "ps aux",
            description: "Affiche tous les processus en cours sur le système.",
            tags: ["linux", "ps", "processus", "liste"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "linux",
            command: "kill <pid>",
            description: "Arrête un processus spécifique en utilisant son PID.",
            tags: ["linux", "kill", "processus", "arrêt"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "linux",
            command: "df -h",
            description: "Affiche l'utilisation du disque en format lisible.",
            tags: ["linux", "df", "disque", "utilisation"],
            complexity: 1,
            usage: 7,
            favorite: false
        },
        {
            category: "linux",
            command: "du -sh <nom_dossier>",
            description: "Affiche la taille totale d'un dossier spécifié.",
            tags: ["linux", "du", "taille", "dossier"],
            complexity: 2,
            usage: 6,
            favorite: false
        },
        {
            category: "linux",
            command: "tar -cvf <archive.tar> <dossier>",
            description: "Crée une archive TAR pour un dossier ou un fichier.",
            tags: ["linux", "tar", "archive", "compression"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "linux",
            command: "tar -xvf <archive.tar>",
            description: "Extrait le contenu d'une archive TAR.",
            tags: ["linux", "tar", "extraction", "archive"],
            complexity: 3,
            usage: 6,
            favorite: false
        },
        {
            category: "linux",
            command: "ping <adresse>",
            description: "Teste la connectivité réseau vers une adresse IP ou un domaine.",
            tags: ["linux", "ping", "réseau", "connectivité"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "linux",
            command: "curl <URL>",
            description: "Envoie une requête HTTP à une URL et affiche la réponse.",
            tags: ["linux", "curl", "requête", "http"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "linux",
            command: "wget <URL>",
            description: "Télécharge un fichier depuis une URL.",
            tags: ["linux", "wget", "télécharger", "fichier"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "node/npm",
            command: "node -v",
            description: "Affiche la version actuelle de Node.js installée sur le système.",
            tags: ["node", "version", "vérifier"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm -v",
            description: "Affiche la version actuelle de NPM installée sur le système.",
            tags: ["npm", "version", "vérifier"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm init",
            description: "Initialise un nouveau projet Node.js en créant un fichier package.json.",
            tags: ["npm", "init", "projet", "package.json"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm init -y",
            description: "Initialise un projet Node.js avec les paramètres par défaut.",
            tags: ["npm", "init", "par défaut", "package.json"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm install <nom_module>",
            description: "Installe un module Node.js dans le projet courant.",
            tags: ["npm", "install", "module", "dépendances"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm install <nom_module> --save",
            description: "Installe un module et l'ajoute aux dépendances du fichier package.json.",
            tags: ["npm", "install", "save", "dépendances"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm install <nom_module> --save-dev",
            description: "Installe un module comme dépendance de développement.",
            tags: ["npm", "install", "save-dev", "développement"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm uninstall <nom_module>",
            description: "Désinstalle un module du projet.",
            tags: ["npm", "uninstall", "module", "suppression"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm update <nom_module>",
            description: "Met à jour un module installé vers la dernière version.",
            tags: ["npm", "update", "module", "mise à jour"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm list",
            description: "Liste tous les modules installés dans le projet.",
            tags: ["npm", "list", "modules", "dépendances"],
            complexity: 1,
            usage: 7,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm outdated",
            description: "Affiche les modules avec des versions obsolètes dans le projet.",
            tags: ["npm", "outdated", "modules", "obsolètes"],
            complexity: 2,
            usage: 6,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm cache clean --force",
            description: "Nettoie le cache NPM.",
            tags: ["npm", "cache", "nettoyer"],
            complexity: 2,
            usage: 5,
            favorite: false
        },
        {
            category: "node/npm",
            command: "node <nom_fichier.js>",
            description: "Exécute un fichier JavaScript avec Node.js.",
            tags: ["node", "run", "exécuter", "fichier"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npx <commande>",
            description: "Exécute une commande ou un module temporairement sans l'installer globalement.",
            tags: ["npx", "exécuter", "module", "temporaire"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm run <script>",
            description: "Exécute un script défini dans le fichier package.json.",
            tags: ["npm", "run", "script", "package.json"],
            complexity: 2,
            usage: 9,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm start",
            description: "Exécute le script 'start' défini dans le fichier package.json.",
            tags: ["npm", "start", "script", "package.json"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm test",
            description: "Exécute le script 'test' défini dans le fichier package.json.",
            tags: ["npm", "test", "script", "package.json"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm install -g <nom_module>",
            description: "Installe un module globalement pour tous les projets.",
            tags: ["npm", "install", "global", "module"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "node/npm",
            command: "npm uninstall -g <nom_module>",
            description: "Désinstalle un module installé globalement.",
            tags: ["npm", "uninstall", "global", "module"],
            complexity: 2,
            usage: 6,
            favorite: false
        },
        {
            category: "python/pip",
            command: "python --version",
            description: "Affiche la version actuelle de Python installée sur le système.",
            tags: ["python", "version", "vérifier"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip --version",
            description: "Affiche la version actuelle de pip installée sur le système.",
            tags: ["pip", "version", "vérifier"],
            complexity: 1,
            usage: 9,
            favorite: false
        },
        {
            category: "python/pip",
            command: "python -m venv <nom_env>",
            description: "Crée un environnement virtuel isolé pour un projet Python.",
            tags: ["python", "venv", "environnement", "virtuel"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "python/pip",
            command: "source <nom_env>/bin/activate",
            description: "Active un environnement virtuel sous Linux/Mac.",
            tags: ["python", "venv", "activer", "environnement"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "python/pip",
            command: "<nom_env>\\Scripts\\activate",
            description: "Active un environnement virtuel sous Windows.",
            tags: ["python", "venv", "activer", "environnement"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "python/pip",
            command: "deactivate",
            description: "Désactive l'environnement virtuel actif.",
            tags: ["python", "venv", "désactiver", "environnement"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip install <nom_package>",
            description: "Installe un paquet Python depuis le dépôt PyPI.",
            tags: ["pip", "install", "paquet", "pypi"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip install <nom_package>==<version>",
            description: "Installe une version spécifique d'un paquet Python.",
            tags: ["pip", "install", "paquet", "version spécifique"],
            complexity: 2,
            usage: 7,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip install -r requirements.txt",
            description: "Installe tous les paquets listés dans le fichier requirements.txt.",
            tags: ["pip", "install", "requirements", "paquets"],
            complexity: 2,
            usage: 9,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip list",
            description: "Liste tous les paquets Python installés.",
            tags: ["pip", "list", "paquets", "installés"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip show <nom_package>",
            description: "Affiche les détails sur un paquet installé, y compris sa version et son emplacement.",
            tags: ["pip", "show", "détails", "paquet"],
            complexity: 1,
            usage: 7,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip freeze",
            description: "Liste les versions exactes de tous les paquets installés dans l'environnement.",
            tags: ["pip", "freeze", "versions", "environnement"],
            complexity: 1,
            usage: 8,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip freeze > requirements.txt",
            description: "Enregistre les versions des paquets installés dans un fichier requirements.txt.",
            tags: ["pip", "freeze", "requirements", "enregistrer"],
            complexity: 2,
            usage: 9,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip uninstall <nom_package>",
            description: "Désinstalle un paquet Python.",
            tags: ["pip", "uninstall", "paquet", "désinstaller"],
            complexity: 1,
            usage: 7,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip install --upgrade <nom_package>",
            description: "Met à jour un paquet Python vers la dernière version.",
            tags: ["pip", "upgrade", "paquet", "mise à jour"],
            complexity: 2,
            usage: 8,
            favorite: false
        },
        {
            category: "python/pip",
            command: "pip search <nom_package>",
            description: "Recherche un paquet dans le dépôt PyPI (peut être obsolète dans certaines versions).",
            tags: ["pip", "search", "paquet", "recherche"],
            complexity: 2,
            usage: 5,
            favorite: false
        },
        {
            category: "python/pip",
            command: "python <nom_script.py>",
            description: "Exécute un script Python.",
            tags: ["python", "exécuter", "script", "code"],
            complexity: 1,
            usage: 10,
            favorite: false
        },
        {
            category: "python/pip",
            command: "python -m pip install --upgrade pip",
            description: "Met à jour pip vers la dernière version disponible.",
            tags: ["pip", "upgrade", "pip", "mise à jour"],
            complexity: 2,
            usage: 9,
            favorite: false
        }
        
    ];
    

let filteredCommands = [...commands];

window.onload = function () {
    // Afficher toutes les commandes par défaut ou une catégorie spécifique
    displayAllCommands(commands);
};

function displayAllCommands(commandsToDisplay) {
    const commandList = commandsToDisplay.map(item => `
        <div class="command">
            <div>
                <span class="command-text">${item.command}</span>
                <p class="command-description">${item.description}</p>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${item.command.replace(/'/g, "\\'").replace(/\n/g, "\\n")}')">Copier</button>
            <button class="favorite-btn" onclick="toggleFavorite('${item.command.replace(/'/g, "\\'").replace(/\n/g, "\\n")}')">${item.favorite ? "★ Favori" : "☆ Favori"}</button>
        </div>
    `).join('');

    document.getElementById("commandList").innerHTML = commandList || "<p>Aucune commande trouvée.</p>";
}


function filterCommands() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    filteredCommands = commands.filter(item =>
        item.command.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    displayAllCommands(filteredCommands);
}

function sortCommands() {
    const sortOption = document.getElementById("sortOptions").value;
    if (sortOption === "category") {
        filteredCommands.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortOption === "complexity") {
        filteredCommands.sort((a, b) => a.complexity - b.complexity);
    } else if (sortOption === "usage") {
        filteredCommands.sort((a, b) => b.usage - a.usage);
    }
    displayAllCommands(filteredCommands);
}

function toggleFavorite(command) {
    const cmd = commands.find(item => item.command === command);
    if (cmd) cmd.favorite = !cmd.favorite;
    filterCommands();
}

function showFavorites() {
    const favorites = commands.filter(item => item.favorite);
    displayAllCommands(favorites);
}

function showCommands(category) {
    filteredCommands = commands.filter(item => item.category === category);
    displayAllCommands(filteredCommands);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Commande copiée : " + text))
        .catch(err => alert("Erreur lors de la copie"));
}



function exportCommands() {
    const dataStr = JSON.stringify(filteredCommands, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "commands.json";
    a.click();
    URL.revokeObjectURL(url);
}
function exportToPNG() {
    const content = document.getElementById("commandList");
    html2canvas(content).then(canvas => {
        const link = document.createElement("a");
        link.download = "commandes.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Erreur lors de l'exportation en PNG :", err);
    });
}
function exportToPDF() {
    const content = document.getElementById("commandList");
    html2canvas(content).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jspdf.jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("commandes.pdf");
    }).catch(err => {
        console.error("Erreur lors de l'exportation en PDF :", err);
    });
}

window.onload = function() {
    displayAllCommands(commands);
};
