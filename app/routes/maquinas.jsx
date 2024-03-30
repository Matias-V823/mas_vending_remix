import {getMaquinas} from '/Users/matia/Escritorio/remix-mas-vending/app/models/maquinas.server'
import { useLoaderData } from '@remix-run/react'
import Maqui from '../components/maqui'


export async function loader(){
  const maquinas = await getMaquinas()
  return maquinas.data
}

export default function Maquinas() {
    const maquinas = useLoaderData()

    return (
      <div>
        <div>
          <h2>Nuestas Maquinas</h2>
          {maquinas.length &&(
            <div>
              {maquinas.map( maquina =>(
                <Maqui
                  key={maquina.id}
                  maquina={maquina}
                />
              ))}
            </div>
          )}
        </div>
        <div>
           <h2>Razones para elegirnos</h2>
        </div>
      </div>
    );
  }