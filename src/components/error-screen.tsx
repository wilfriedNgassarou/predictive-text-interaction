export function ErrorScreen() {
  return (
    <section className="fixed inset-0 bg-white flex flex-col gap-10 justify-center items-center">
      <h1 className="font-semibold text-4xl text-red-500">Erreur</h1>
      <div className="flex flex-col gap-3">
        <h3 className="text-center font-medium text-lg text-balance">
          Une erreur s'est produite lors de l'initialisation du dictionnaire.
        </h3>
        <h3 className="text-center font-medium text-lg text-balance">
          Veuillez réessayer plus tard !
        </h3>
      </div>
    </section>
  )
}