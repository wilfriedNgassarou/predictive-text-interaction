export function SplashScreen() {
  return (
    <section className="fixed inset-0 z-30 bg-black/90 flex justify-center items-center">
      <div className="bg-white rounded-lg w-80 h-40 flex flex-col gap-4 justify-center items-center">
        <h1 className="font-medium text-lg text-center">
          Initialisation du dictionnaire...
        </h1>
        <div 
          className="w-8 h-8 rounded-full border-2 border-black border-t-transparent animate-spin" 
          style={{ animationDuration: '.7s' }}
        />
      </div>
    </section>
  )
}