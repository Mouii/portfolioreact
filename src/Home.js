import "./Home.css";
import { motion } from "framer-motion";

function Home() {
    return (
        <div>
            <motion.div 
                initial={{ opacity: 0, x: -1000 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div class="section hero">
                    <h1>1st section</h1>
                    <h2>Passer de l'imaginaire à la réalité.</h2>
                    <p>Je suis un ingénieur développeur logiciel dans le monde de l'informatique depuis mes 6 ans! Ayant toujours voulu passer derrière l'écran pour faire rêver les utilisateurs, j'ai orienté ma vie vers ce secteur!
                    Dans cette optique, il est important de comprendre les besoins de la population pour concevoir des sites webs, des applications à leur image. Mes services et optiques vous intéressent? Prenez contact avec moi! Que ce soit pour me connaître, me poser des questions, vous n'avez aucun risque de pris!</p>

                </div>
            </motion.div  >
            
            <motion.div 
                initial={{ opacity: 0, x: 1000 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div class="section about">
                    <h1>2ème section</h1>
                    <h2>Mon parcours et philosophie</h2>
                    <p>À travers tout mon parcours académique et professionnel, j'ai pu exercer dans de multiples domaines et maîtriser plusieurs langagues et technologies.
                    Aujourd'hui, je peux assumer pouvoir concevoir n'importe quel type de besoin technique que ce soit un site web jusqu'à l'application mobile. Un langage et un framework ne sont qu'une manière de communiquer et s'organiser tels une panoplie d'outils pour un forgeron.
                    Comprendre et aboutir au besoin d'un client, maximiser la valeur de son produit, le rendre fonctionnel et robuste, telle est ma philosophie.</p>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                
            >
                <div class="section skill">
                    <h1>3ème section</h1>
                    <h2>Points majeurs</h2>
                    <ul>

                        <li>
                        <h3>Analyse du besoin client</h3>
                        <p>Il est important de mettre en lumière ce que veut comme application et comme fonctionnalités l'utilisateur final!</p>
                        </li>

                        <li>
                        <h3>Décision de la technicité à employer</h3>
                        <p>Si le client souhaite un site web, il est bien sur plus favorable d'employer les technologies du web! S'il souhaite une application mobile, la logique reste identique.</p>
                        </li>

                        <li>
                        <h3>Organiser la construction de l'application étape par étape</h3>
                        <p>Tout le monde veut un produit fini; mais avant qu'il obtienne sa forme finale, il est bon de constituer une forme minimale fonctionnelle afin d'obtenir une base solide! Les améliorations se feront de fil en aiguille.</p>
                        </li>

                        <li>
                        <h3>Tester la réalisation</h3>
                        <p>Constituer une application est fantastique, mais il est encore plus satisfaisant quand lors de ses tests elle fonctionne correctement et comme attendu!</p>
                        </li>

                        <li>
                        <h3>Recherche et amélioration personelle</h3>
                        <p>Nous sommes, au cours de notre vie, en apprentissage continue. Nous gagnons sans cesse en connaissance; même lorsque nous devons établir une application pour une personne. Ce concept persiste avec l'amélioration de la maîtrise de la technologie employée!</p>
                        </li>

                        <li>
                        <h3>Organisation et communication</h3>
                        <p>Se répartir les tâches; déléguer une partie de son travail; l'ordonnancer pour aboutir à sa finalité; l'organisation est une clé pour concevoir avec succès une application en tout genre! Combiner avec une forte commmunication avec le client ou les coéquipiers, le résultat ne peut qu'aboutir à une finalité positive.</p>
                        </li>

                    </ul>
                </div>


            </motion.div>

        </div>
    );
}

export default Home;