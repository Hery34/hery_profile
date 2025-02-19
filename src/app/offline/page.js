export default function Offline() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Vous êtes hors ligne</h1>
        <p>Veuillez vérifier votre connexion internet</p>
      </div>
    );
  }

  export const dynamic = 'force-static';