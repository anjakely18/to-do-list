### Description

Cette application de liste de tâches est construite avec React et stylisée avec Tailwind CSS. Elle permet aux utilisateurs de gérer leurs tâches quotidiennes, en ajoutant, marquant comme complètes et supprimant des tâches. Les données sont persistées grâce au stockage local (localStorage), garantissant que les tâches restent disponibles même après le rafraîchissement de la page.

### Fonctionnalités

- Ajouter des tâches
- Marquer des tâches comme complètes
- Supprimer des tâches
- Persistance des données via localStorage
- Utilisation de Tailwind CSS pour le style

### Étapes

#### Variable d'État

Dans App.jsx, configurez une variable d'état appelée items en utilisant le hook useState.

#### Composant Formulaire

Créez un composant Form contenant un champ de saisie et un bouton de soumission. Lorsque l'utilisateur soumet le formulaire, la fonction handleSubmit est appelée.

Dans la fonction handleSubmit, empêchez le comportement par défaut de soumission du formulaire en utilisant event.preventDefault(). Si le formulaire est soumis avec une valeur vide, affichez un message et retournez.

#### Ajouter un Élément

Si le formulaire est soumis avec une valeur, créez un nouvel objet élément qui inclut un nom (pris du champ de saisie), une propriété completed (valeur par défaut false), et un identifiant unique (généré à l'aide d'une bibliothèque comme uuid ou nanoid).

Ajoutez le nouvel élément à la variable d'état items en utilisant la fonction setItems

#### Rendre la Liste

Créez deux nouveaux composants : Items et SingleItem. Dans Items, itérez sur la liste des éléments et rendez chacun d'eux dans un composant SingleItem. Pour l'instant, affichez uniquement le nom de l'élément.

#### SingleItem

Dans SingleItem, configurez une variable d'état appelée isChecked avec une valeur par défaut égale à la propriété completed de l'élément. Rendez une case à cocher et ajoutez des styles en ligne pour ajouter ou retirer la propriété text-decoration: line-through en fonction de la valeur de isChecked. Configurez la fonctionnalité pour basculer la variable d'état isChecked lorsque la case à cocher est cliquée.

#### Supprimer un Élément

Dans App.jsx, créez une fonction removeItem et passez-la au composant SingleItem. Dans SingleItem, ajoutez un bouton qui, lorsqu'il est cliqué, supprime l'élément de la liste.

#### Stockage Local

Configurez la fonctionnalité de stockage local pour persister la liste des éléments à travers les rechargements de la page. Plus d'infos ci-dessous.

#### Édition Globale

Au lieu de stocker la valeur localement, configurez completed globalement (dans la liste) et sauvegardez le résultat dans le stockage local.
