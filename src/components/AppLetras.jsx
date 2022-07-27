import Form from "./Form"
import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta"
import Letra from "./Letra"

const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras()

  return (
    <>
    <header>Busqueda de Letras de Canciones</header>
    <Form />

    <main>
      {alerta ? <Alerta>{alerta}</Alerta> : 
        letra ? <Letra /> : 
          cargando ? <p>Cargando...</p> :
          <p className="text-center">Busca letras de tus artistas favoritos</p>
          }
    </main>
    </>
  )
}

export default AppLetras