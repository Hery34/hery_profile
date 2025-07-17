import React from "react";

export default function ReglesConfidentialite() {
  return (
    <main style={{ maxWidth: 600, margin: "40px auto", padding: 24, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Règles de confidentialité</h1>
      <p style={{ fontSize: 18, marginBottom: 16 }}>
        Cette application to-do-list respecte totalement votre vie privée.
      </p>
      <ul style={{ fontSize: 16, marginBottom: 16, paddingLeft: 24 }}>
        <li>• <b>Aucune donnée personnelle n'est collectée</b> ou transmise à des tiers.</li>
        <li>• Toutes vos tâches et informations sont <b>stockées uniquement sur votre appareil</b>.</li>
        <li>• L'application ne se connecte à aucun serveur externe et ne partage aucune information.</li>
        <li>• Il n'y a <b>aucune publicité</b>, aucun suivi, ni analyse de votre utilisation.</li>
      </ul>
      <p style={{ fontSize: 16, marginBottom: 8 }}>
        Vous êtes le seul à avoir accès à vos données. Si vous désinstallez l'application ou effacez ses données, toutes vos tâches seront définitivement supprimées.
      </p>
      <p style={{ fontSize: 14, color: '#888', marginTop: 32 }}>
        Dernière mise à jour : juillet 2025
      </p>
      <p style={{ fontSize: 14, color: '#888', marginTop: 8 }}>
        Pour toute question concernant la confidentialité, vous pouvez me contacter à :
        <a href="mailto:me@hery.website" style={{ color: '#0070f3', marginLeft: 4 }}>me@hery.website</a>
      </p>
    </main>
  );
}
