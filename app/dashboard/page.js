export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Soluție informatică pentru transcriere automată din audio în text OptimusS2T</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">1. Introducere</h2>
          <ul className="list-disc pl-5">
            <li>Despre proiectul OptimusS2T și subsistemele care îl compun</li>
            <li>Scopul acestei documentații: Explică ce cuprinde documentația și cum poate fi utilizată.</li>
            <li>Arhitectura generală a soluției informatice Optimus S2T</li>
          </ul>
        </section>
        
        <section>
        <a href="/dashboard/recorder" className="text-xl font-semibold text-blue-600 hover:underline">2. Aplicația de înregistrare în sălile de judecată Optimus Recorder</a>
          <ul className="list-disc pl-5">
            <li>Descriere soluție</li>
            <li>Cerințe hardware și software</li>
            <li>Manual de instalare</li>
            <li>Manual de utilizare</li>
            <li>Probleme comune și soluții</li>
          </ul>
        </section>
        
        <section>
          <a href="/dashboard/tv" className="text-xl font-semibold text-blue-600 hover:underline">3. Aplicația pentru afișarea ordinii ședințelor</a>
          <ul className="list-disc pl-5">
            <li>Descriere soluție</li>
            <li>Cerințe hardware și software</li>
            <li>Manual de configurare</li>
            <li>Manual de utilizare</li>
            <li>Depanare sistem</li>
          </ul>
        </section>
        
        <section>
          <a href="/dashboard/configurare" className="text-xl font-semibold text-blue-600 hover:underline">4. Configurare echipamente</a>
          <ul className="list-disc pl-5">
            <li>Configurare sala de judecată</li>
            <li>Depanare echipamente</li>
          </ul>
        </section>
        
        <section>
          <a href="/dashboard/ui-nextjs" className="text-xl font-semibold text-blue-600 hover:underline">5. Aplicația web de transcriere</a>
          <ul className="list-disc pl-5">
            <li>Descriere soluție</li>
            <li>Manual de utilizare</li>
            <li>Depanare aplicație web</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold">6. Server ML de transcriere</h2>
          <ul className="list-disc pl-5">
            <li>Descriere soluție</li>
            <li>Fluxul de date în serverul ML</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold">7. Cum să fac...</h2>
          <ul className="list-disc pl-5">
            <li>Resetarea parolelor</li>
            <li>Verificarea înregistrărilor</li>
            <li>Instalarea aplicațiilor</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold">8. Suport general</h2>
          <p>Ghid de contact pentru suport tehnic.</p>
        </section>
      </div>
    </div>
  );
}
