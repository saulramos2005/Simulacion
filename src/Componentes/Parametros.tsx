import React from "react";
import type { MouseEvent } from "react";

interface ParametrosProps {
  metodo: string;
  setMetodo: (val: string) => void;
  seed: string;
  setSeed: (val: string) => void;
  multiplier: string;
  setMultiplier: (val: string) => void;
  modulo: string;
  setModulo: (val: string) => void;
  sampleSize: string;
  setSampleSize: (val: string) => void;
  onEjecutar: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const AbstractParams: React.FC<ParametrosProps> = ({
  metodo, setMetodo, seed, setSeed, multiplier, setMultiplier, modulo, setModulo, sampleSize, setSampleSize, onEjecutar
}) => {
  return (
    <section
            className="animate-section grid grid-cols-1 md:grid-cols-12 gap-12"
            id="doc-abstract-params">
            <div className="md:col-span-4 space-y-4">
              <h3 className="font-serif italic font-black text-xl border-b border-black pb-1">Resumen / Abstract</h3>
              <p className="font-serif text-sm leading-relaxed text-slate-800 text-justify">
                Esta herramienta evalua la consistencia empirica de modelos de generación de números pseudo-aleatorios. Mediante el uso de los métodos congruencial multiplicativo y medio cuadrado, se busca medir la entropía y distribución de las secuencias generadas. Los reportes aquí mostrados funcionan como una validación de la metodología computacional del <i className="italic font-bold">Laboratorio Estadístico</i> y su correspondencia con los estándares de equidistribución asintótica.
              </p>
            </div>
            
            {/* Formulario */}
            <div className="md:col-span-8">
              <div className="bg-slate-50 border border-slate-200 p-8">

                {/* Titulo */}
                <h4 className="font-sans text-sm uppercase font-black tracking-[0.2em] border-b border-slate-300 pb-2 mb-8">
                  Parámetros de Generación
                </h4>

                <div className="grid grid-cols-1 space-y-8">

                  {/* Metodo */}
                  <div className="">
                    <label className="block font-sans text-xs uppercase font-bold text-slate-500 mb-2">Método Generador</label>
                    <select
                      value={metodo}
                      onChange={(e) => setMetodo(e.target.value)}
                      className="underlined-input font-sans font-bold cursor-pointer"
                    >
                      <option>Congruencial Multiplicativo</option>
                      <option>Medios Cuadrados</option>
                    </select>
                  </div>

                  {/* Parametros */}
                  <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">

                    <div>
                      <label className="block font-sans text-xs uppercase font-bold text-slate-500 mb-2">Semilla (X₀)</label>
                      <input type="text" value={seed} onChange={(e) => setSeed(e.target.value)} className="underlined-input" />
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase font-bold text-slate-500 mb-2">Multiplicador (a)</label>
                      <input type="text" value={multiplier} onChange={(e) => setMultiplier(e.target.value)} className="underlined-input" />
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase font-bold text-slate-500 mb-2">Modulo(m)</label>
                      <input type="text" value={modulo} onChange={(e) => setModulo(e.target.value)} className="underlined-input" />
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase font-bold text-slate-500 mb-2">Tamaño de la muestra (n)</label>
                      <input type="text" value={sampleSize} onChange={(e) => setSampleSize(e.target.value)} className="underlined-input w-24" />
                    </div>

                  </div>

                  {/* Boton */}
                  <div className='flex items-center justify-end'>
                      <button onClick={onEjecutar} className="p-2 border-2 border-slate-500 border-dashed font-bold uppercase text-xs text-slate-500 tracking-[0.2em] transition-transform hover:-translate-y-5 hover:-rotate-10 hover:scale-120 hover:border-emerald-700 hover:text-emerald-700 cursor-pointer">
                        <span>Ejecutar</span>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
};
