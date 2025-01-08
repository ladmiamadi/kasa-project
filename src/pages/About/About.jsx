import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import bannerAbout from '../../assets/images/bannerAbout.png';
import Collapse from '../../components/Collapse/Collapse.jsx';
import styles from './About.module.scss';

const About = () => {
     return (
          <>
               <Banner bannerImage={bannerAbout} />
               <div className={styles.about}>
                    <Collapse
                         title="Fiabilité"
                         content={
                              <p>
                                   Les annonces postées sur Kasa garantissent
                                   une fiabilité totale. Les photos sont
                                   conformes aux logements, et toutes les
                                   informations sont régulièrement vérifiées par
                                   nos équipes.
                              </p>
                         }
                    />
                    <Collapse
                         title="Respect"
                         content={
                              <p>
                                   La bienveillance fait partie des valeurs
                                   fondatrices de Kasa. Tout comportement
                                   discriminatoire ou de perturbation du
                                   voisinage entraînera une exclusion de notre
                                   plateforme.
                              </p>
                         }
                    />
                    <Collapse
                         title="Service"
                         content={
                              <p>
                                   La qualité du service est au cœur de notre
                                   engagement chez Kasa. Nous veillons à ce que
                                   chaque interaction, que ce soit avec nos
                                   hôtes ou nos locataires, soit empreinte de
                                   respect et de bienveillance.
                              </p>
                         }
                    />
                    <Collapse
                         title="Sécurité"
                         content={
                              <p>
                                   La sécurité est la priorité de Kasa. Aussi
                                   bien pour nos hôtes que pour les voyageurs,
                                   chaque logement correspond aux critères de
                                   sécurité établis par nos services. En
                                   laissant une note aussi bien à l'hôte qu'au
                                   locataire, cela permet à nos équipes de
                                   vérifier que les standards sont bien
                                   respectés. Nous organisons également des
                                   ateliers sur la sécurité domestique pour nos
                                   hôtes.
                              </p>
                         }
                    />
               </div>
          </>
     );
};

export default About;
